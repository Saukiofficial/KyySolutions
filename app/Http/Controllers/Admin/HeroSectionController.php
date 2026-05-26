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
        $heroSection = HeroSection::firstOrCreate([], [
            'headline' => 'WUJUDKAN IDE DIGITAL ANDA',
            'subheadline' => 'KyySolutions hadir sebagai mitra teknologi yang membantu Anda berinovasi, bertransformasi, dan tumbuh lebih cepat di era digital.',
            'cta_text' => 'Mulai Proyek Anda',
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
            'hero_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:20048',
        ]);

        $data = $request->except(['background_image', 'hero_image']);

        if ($request->hasFile('background_image')) {
            if ($heroSection->background_image) {
                Storage::disk('public')->delete($heroSection->background_image);
            }

            $data['background_image'] = $request->file('background_image')->store('hero', 'public');
        }

        if ($request->hasFile('hero_image')) {
            if ($heroSection->hero_image) {
                Storage::disk('public')->delete($heroSection->hero_image);
            }

            $data['hero_image'] = $request->file('hero_image')->store('hero', 'public');
        }

        $heroSection->update($data);

        return redirect()->route('admin.hero-sections.index')
            ->with('success', 'Hero section updated successfully.');
    }
}
