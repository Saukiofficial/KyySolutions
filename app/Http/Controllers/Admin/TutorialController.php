<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tutorial;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TutorialController extends Controller
{
    public function index()
    {
        $tutorials = Tutorial::latest()->paginate(10);
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
            'category' => 'required|string',
            'thumbnail' => 'required|image|max:2048',
            'video_url' => 'nullable|url',
        ]);

        $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('tutorials', 'public');
        }

        Tutorial::create($validated);

        return redirect()->route('admin.tutorials.index')->with('success', 'Tutorial berhasil dibuat.');
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
            'category' => 'required|string',
            'thumbnail' => 'nullable|image|max:2048',
            'video_url' => 'nullable|url',
        ]);

        if ($request->title !== $tutorial->title) {
            $validated['slug'] = Str::slug($validated['title']) . '-' . uniqid();
        }

        if ($request->hasFile('thumbnail')) {
            if ($tutorial->thumbnail && Storage::disk('public')->exists($tutorial->thumbnail)) {
                Storage::disk('public')->delete($tutorial->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('tutorials', 'public');
        }

        $tutorial->update($validated);

        return redirect()->route('admin.tutorials.index')->with('success', 'Tutorial berhasil diperbarui.');
    }

    public function destroy(Tutorial $tutorial)
    {
        if ($tutorial->thumbnail && Storage::disk('public')->exists($tutorial->thumbnail)) {
            Storage::disk('public')->delete($tutorial->thumbnail);
        }
        $tutorial->delete();
        return redirect()->route('admin.tutorials.index')->with('success', 'Tutorial dihapus.');
    }
}
