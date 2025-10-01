<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     * Menampilkan daftar semua item portofolio dengan filter.
     */
    public function index(Request $request)
    {
        $query = Portfolio::query();
        $categories = ['Website', 'Mobile', 'Design', 'Game'];

        // Terapkan filter kategori jika ada
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $portfolios = $query->latest()->paginate(10)->withQueryString();

        return view('admin.portfolios.index', compact('portfolios', 'categories'));
    }

    /**
     * Show the form for creating a new resource.
     * Menampilkan form untuk membuat item portofolio baru.
     */
    public function create()
    {
        $categories = ['Website', 'Mobile', 'Design', 'Game'];
        return view('admin.portfolios.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     * Menyimpan item portofolio baru ke database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:Website,Mobile,Design,Game',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        // Upload gambar dan simpan path-nya
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('portfolios', 'public');
        }

        Portfolio::create($validated);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio item created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     * Menampilkan form untuk mengedit item portofolio.
     */
    public function edit(Portfolio $portfolio)
    {
        $categories = ['Website', 'Mobile', 'Design', 'Game'];
        return view('admin.portfolios.edit', compact('portfolio', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     * Memperbarui item portofolio di database.
     */
    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:Website,Mobile,Design,Game',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // Gambar opsional saat update
        ]);

        // Cek jika ada gambar baru yang di-upload
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
                Storage::disk('public')->delete($portfolio->image);
            }
            // Upload gambar baru
            $validated['image'] = $request->file('image')->store('portfolios', 'public');
        }

        $portfolio->update($validated);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     * Menghapus item portofolio dari database.
     */
    public function destroy(Portfolio $portfolio)
    {
        // Hapus gambar dari storage sebelum menghapus record
        if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
            Storage::disk('public')->delete($portfolio->image);
        }

        $portfolio->delete();

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio item deleted successfully.');
    }
}

