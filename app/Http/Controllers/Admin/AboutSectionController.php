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
     * Menampilkan halaman untuk mengelola section 'About'.
     */
    public function index()
    {
        // Kita asumsikan hanya ada satu baris data untuk 'About Section'.
        // firstOrCreate akan mencari data pertama, jika tidak ada, maka akan membuat data baru dengan nilai default.
        $aboutSection = AboutSection::firstOrCreate([], [
            'title' => 'Tentang Kami',
            'description' => 'Isi deskripsi singkat tentang perusahaan Anda di sini.',
        ]);

        return view('admin.about.index', compact('aboutSection'));
    }

    /**
     * Update the specified resource in storage.
     * Memperbarui data 'About Section' di database.
     */
    public function update(Request $request, AboutSection $aboutSection)
    {
        // Validasi input dari form
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'illustration_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $data = $request->except('illustration_image');

        // Cek apakah ada file gambar baru yang di-upload
        if ($request->hasFile('illustration_image')) {
            // Hapus gambar lama jika ada
            if ($aboutSection->illustration_image && Storage::disk('public')->exists($aboutSection->illustration_image)) {
                Storage::disk('public')->delete($aboutSection->illustration_image);
            }
            // Simpan gambar baru dan dapatkan path-nya
            $data['illustration_image'] = $request->file('illustration_image')->store('about', 'public');
        }

        // Update data di database
        $aboutSection->update($data);

        // Redirect kembali ke halaman index dengan pesan sukses
        return redirect()->route('admin.about-sections.index')->with('success', 'About section updated successfully.');
    }
}
