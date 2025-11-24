<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AboutSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $aboutSection = AboutSection::firstOrCreate([], [
            'title' => 'Tentang Kami',
            'description' => 'Isi deskripsi singkat tentang perusahaan Anda di sini.',
        ]);

        return view('admin.about.index', compact('aboutSection'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AboutSection $aboutSection)
    {
        // 1. Validasi input (Gunakan 'illustration', bukan 'illustration_image')
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'illustration' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        // 2. Ambil semua data KECUALI file gambar (karena akan diproses manual)
        $data = $request->except('illustration');

        // 3. Cek apakah ada file gambar baru yang di-upload
        if ($request->hasFile('illustration')) {

            // Hapus gambar lama jika ada
            // Perhatikan kita menggunakan $aboutSection->illustration (sesuai nama kolom DB)
            if ($aboutSection->illustration && Storage::disk('public')->exists($aboutSection->illustration)) {
                Storage::disk('public')->delete($aboutSection->illustration);
            }

            // Simpan gambar baru dan masukkan path-nya ke array $data
            $data['illustration'] = $request->file('illustration')->store('about', 'public');
        }

        // 4. Update data ke database
        $aboutSection->update($data);

        return redirect()->route('admin.about-sections.index')->with('success', 'About section updated successfully.');
    }
}
