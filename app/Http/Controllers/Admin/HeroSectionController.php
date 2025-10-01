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
        // Get the first record, or create a new one if it doesn't exist.
        $heroSection = HeroSection::firstOrCreate([]);
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
            'background_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $data = $request->except('background_image');

        if ($request->hasFile('background_image')) {
            // Delete the old image if it exists
            if ($heroSection->background_image) {
                Storage::disk('public')->delete($heroSection->background_image);
            }
            // Store the new image and get its path
            $data['background_image'] = $request->file('background_image')->store('hero', 'public');
        }

        $heroSection->update($data);

        return redirect()->route('admin.hero-sections.index')
                         ->with('success', 'Hero section updated successfully.');
    }
}

