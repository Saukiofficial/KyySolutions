<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tutorial;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TutorialController extends Controller
{
    public function index(Request $request)
    {
        $tutorials = Tutorial::query()
            ->when($request->filled('search'), function ($query) use ($request) {
                $query->where('title', 'like', '%' . $request->search . '%')
                    ->orWhere('category', 'like', '%' . $request->search . '%');
            })
            ->when($request->filled('category'), function ($query) use ($request) {
                $query->where('category', $request->category);
            })
            ->when($request->filled('status'), function ($query) use ($request) {
                if ($request->status === 'published') {
                    $query->where('is_published', true);
                }

                if ($request->status === 'draft') {
                    $query->where('is_published', false);
                }
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return view('admin.tutorials.index', compact('tutorials'));
    }

    public function create()
    {
        return view('admin.tutorials.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string|max:100',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
            'video_url' => 'nullable|url',
        ]);

        $validated['slug'] = $this->generateUniqueSlug($validated['title']);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('tutorials/thumbnails', 'public');
        }

        $validated['is_published'] = $request->input('action') === 'draft' ? false : true;

        Tutorial::create($validated);

        return redirect()
            ->route('admin.tutorials.index')
            ->with('success', $validated['is_published'] ? 'Tutorial berhasil dipublish.' : 'Tutorial berhasil disimpan sebagai draft.');
    }

    public function edit(Tutorial $tutorial)
    {
        return view('admin.tutorials.edit', compact('tutorial'));
    }

    public function update(Request $request, Tutorial $tutorial)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string|max:100',
            'thumbnail' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'video_url' => 'nullable|url',
        ]);

        if ($request->title !== $tutorial->title) {
            $validated['slug'] = $this->generateUniqueSlug($validated['title'], $tutorial->id);
        }

        if ($request->hasFile('thumbnail')) {
            if ($tutorial->thumbnail && Storage::disk('public')->exists($tutorial->thumbnail)) {
                Storage::disk('public')->delete($tutorial->thumbnail);
            }

            $validated['thumbnail'] = $request->file('thumbnail')->store('tutorials/thumbnails', 'public');
        }

        $validated['is_published'] = $request->input('action') === 'draft' ? false : true;

        $tutorial->update($validated);

        return redirect()
            ->route('admin.tutorials.index')
            ->with('success', $validated['is_published'] ? 'Tutorial berhasil diperbarui dan dipublish.' : 'Tutorial berhasil diperbarui sebagai draft.');
    }

    public function destroy(Tutorial $tutorial)
    {
        if ($tutorial->thumbnail && Storage::disk('public')->exists($tutorial->thumbnail)) {
            Storage::disk('public')->delete($tutorial->thumbnail);
        }

        $tutorial->delete();

        return redirect()
            ->route('admin.tutorials.index')
            ->with('success', 'Tutorial berhasil dihapus.');
    }

    public function uploadEditorImage(Request $request)
    {
        $request->validate([
            'upload' => 'required|image|mimes:jpg,jpeg,png,webp,gif|max:4096',
        ]);

        $path = $request->file('upload')->store('tutorials/editor', 'public');
        $url = asset('storage/' . $path);

        return response()->json([
            'url' => $url,
            'default' => $url,
        ]);
    }

    private function generateUniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($title);
        $slug = $baseSlug;
        $counter = 1;

        while (
            Tutorial::where('slug', $slug)
                ->when($ignoreId, fn ($query) => $query->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }
}