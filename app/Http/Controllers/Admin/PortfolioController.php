<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $query = Portfolio::query();
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        $portfolios = $query->latest()->paginate(10)->withQueryString();
        $categories = ['Website', 'Mobile', 'Design', 'Game'];

        return view('admin.portfolios.index', compact('portfolios', 'categories'));
    }

    public function create()
    {
        $categories = ['Website', 'Mobile', 'Design', 'Game'];
        return view('admin.portfolios.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'client_name' => 'nullable|string',
            'description' => 'required|string',
            'details' => 'nullable|string',
            'image' => 'required|image|max:2048',
            'technologies' => 'nullable|string',
            'features' => 'nullable|string',
            'gallery.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Generate Slug
        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();

        if ($request->filled('technologies')) {
            $validated['technologies'] = array_map('trim', explode(',', $request->technologies));
        }

        if ($request->filled('features')) {
            $validated['features'] = array_filter(array_map('trim', explode("\n", $request->features)));
        }

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('portfolios', 'public');
        }

        if ($request->hasFile('gallery')) {
            $galleryPaths = [];
            foreach ($request->file('gallery') as $file) {
                $galleryPaths[] = $file->store('portfolios/gallery', 'public');
            }
            $validated['gallery'] = $galleryPaths;
        }

        Portfolio::create($validated);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio created successfully.');
    }

    public function edit(Portfolio $portfolio)
    {
        $categories = ['Website', 'Mobile', 'Design', 'Game'];
        return view('admin.portfolios.edit', compact('portfolio', 'categories'));
    }

    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'client_name' => 'nullable|string',
            'description' => 'required|string',
            'details' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'technologies' => 'nullable|string',
            'features' => 'nullable|string',
            'gallery.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // FIX: Update slug jika judul berubah ATAU jika slug masih kosong (data lama)
        if ($request->title !== $portfolio->title || empty($portfolio->slug)) {
            $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();
        }

        if ($request->filled('technologies')) {
            $validated['technologies'] = array_map('trim', explode(',', $request->technologies));
        }

        if ($request->filled('features')) {
            $validated['features'] = array_filter(array_map('trim', explode("\n", $request->features)));
        }

        if ($request->hasFile('image')) {
            if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
                Storage::disk('public')->delete($portfolio->image);
            }
            $validated['image'] = $request->file('image')->store('portfolios', 'public');
        }

        if ($request->hasFile('gallery')) {
            $currentGallery = $portfolio->gallery ?? [];
            $newGallery = [];
            foreach ($request->file('gallery') as $file) {
                $newGallery[] = $file->store('portfolios/gallery', 'public');
            }
            $validated['gallery'] = array_merge($currentGallery, $newGallery);
        }

        if ($request->filled('remove_gallery_images')) {
            $imagesToRemove = $request->remove_gallery_images;
            $currentGallery = $portfolio->gallery ?? [];

            foreach ($imagesToRemove as $img) {
                if (Storage::disk('public')->exists($img)) {
                    Storage::disk('public')->delete($img);
                }
            }

            if (!isset($validated['gallery'])) {
                $validated['gallery'] = $currentGallery;
            }

            $validated['gallery'] = array_values(array_diff($validated['gallery'], $imagesToRemove));
        }

        $portfolio->update($validated);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio updated successfully.');
    }

    public function destroy(Portfolio $portfolio)
    {
        if ($portfolio->image && Storage::disk('public')->exists($portfolio->image)) {
            Storage::disk('public')->delete($portfolio->image);
        }

        if ($portfolio->gallery) {
            foreach ($portfolio->gallery as $galImg) {
                if (Storage::disk('public')->exists($galImg)) {
                    Storage::disk('public')->delete($galImg);
                }
            }
        }

        $portfolio->delete();
        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio deleted successfully.');
    }
}
