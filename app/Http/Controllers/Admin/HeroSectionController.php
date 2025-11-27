<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HeroSectionController extends Controller
{
    /**
     * Display the form for editing the hero section.
     */
    public function index()
    {
        // PERBAIKAN: Tambahkan data default array kedua
        // Jika data belum ada, Laravel akan membuatnya dengan data ini
        $heroSection = HeroSection::firstOrCreate([], [
            'headline' => 'Wujudkan Ide Menjadi Nyata',
            'subheadline' => 'Kami menghadirkan pengalaman digital luar biasa melalui website inovatif.',
            'cta_text' => 'Get Started',
            // background_image dan hero_image boleh null, jadi tidak wajib diisi di sini
        ]);

        return view('admin.hero.index', compact('heroSection'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HeroSection $heroSection)
    {
        $request->validate([
            'headline' => 'required|string|max:255',
            'subheadline' => 'required|string',
            'cta_text' => 'required|string|max:100',
            'background_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:20048',
            // Validasi untuk gambar samping (Thumbnail Video/Gambar)
            'hero_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:10240',
        ]);

        $data = $request->except(['background_image', 'hero_image']);

        // 1. Upload Background Image (Logic Lama)
        if ($request->hasFile('background_image')) {
            if ($heroSection->background_image) {
                Storage::disk('public')->delete($heroSection->background_image);
            }
            $data['background_image'] = $request->file('background_image')->store('hero', 'public');
        }

        // 2. Upload Hero Side Image (Logic Baru)
        if ($request->hasFile('hero_image')) {
            // Hapus gambar lama jika ada
            if ($heroSection->hero_image) {
                Storage::disk('public')->delete($heroSection->hero_image);
            }
            // Simpan gambar baru
            $data['hero_image'] = $request->file('hero_image')->store('hero', 'public');
        }

        $heroSection->update($data);

        return redirect()->route('admin.hero-sections.index')
                         ->with('success', 'Hero section updated successfully.');
    }
}
