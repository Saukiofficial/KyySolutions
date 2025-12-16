<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil artikel terbaru dengan pagination
        $articles = Article::latest()->paginate(10);
        return view('admin.articles.index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.articles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 1. Validasi Input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048', // Max 2MB

            // Validasi Promo (Opsional)
            'promo_title' => 'nullable|string|max:100',
            'promo_link' => 'nullable|string|max:255',
            'promo_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // 2. Generate Slug Unik
        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();

        // 3. Upload Thumbnail Artikel
        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('articles', 'public');
        }

        // 4. Upload Banner Promo (Jika ada)
        if ($request->hasFile('promo_image')) {
            $validated['promo_image'] = $request->file('promo_image')->store('promos', 'public');
        }

        // 5. Simpan ke Database
        Article::create($validated);

        return redirect()->route('admin.articles.index')->with('success', 'Article created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        return view('admin.articles.edit', compact('article'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        // 1. Validasi Input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',

            // Validasi Promo
            'promo_title' => 'nullable|string|max:100',
            'promo_link' => 'nullable|string|max:255',
            'promo_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // 2. Update Slug jika judul berubah
        if ($request->title !== $article->title) {
            $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();
        }

        // 3. Update Thumbnail (Hapus lama, Simpan baru)
        if ($request->hasFile('thumbnail')) {
            if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
                Storage::disk('public')->delete($article->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('articles', 'public');
        }

        // 4. Update Banner Promo (Hapus lama, Simpan baru)
        if ($request->hasFile('promo_image')) {
            if ($article->promo_image && Storage::disk('public')->exists($article->promo_image)) {
                Storage::disk('public')->delete($article->promo_image);
            }
            $validated['promo_image'] = $request->file('promo_image')->store('promos', 'public');
        }

        // 5. Update Database
        $article->update($validated);

        return redirect()->route('admin.articles.index')->with('success', 'Article updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        // 1. Hapus Thumbnail
        if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
            Storage::disk('public')->delete($article->thumbnail);
        }

        // 2. Hapus Banner Promo
        if ($article->promo_image && Storage::disk('public')->exists($article->promo_image)) {
            Storage::disk('public')->delete($article->promo_image);
        }

        // 3. Hapus Data
        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Article deleted.');
    }
}
