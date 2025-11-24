<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Jangan lupa import ini!

class ServiceController extends Controller
{
    // ... method index & create tetap sama ...
    public function index()
    {
        $services = Service::latest()->paginate(10);
        return view('admin.services.index', compact('services'));
    }

    public function create()
    {
        return view('admin.services.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'icon' => 'required|string',
            'description' => 'required|string',
            'tagline' => 'nullable|string',
            'color' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // Validasi Gambar
            'features' => 'nullable|string',
            'benefits' => 'nullable|array',
            'benefits.*.title' => 'required|string',
            'benefits.*.desc' => 'required|string',
        ]);

        // Upload Gambar
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('services', 'public');
        }

        if ($request->filled('features')) {
            $validated['features'] = array_filter(array_map('trim', explode("\n", $request->features)));
        }

        Service::create($validated);

        return redirect()->route('admin.services.index')->with('success', 'Service created successfully.');
    }

    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'icon' => 'required|string',
            'description' => 'required|string',
            'tagline' => 'nullable|string',
            'color' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048', // Validasi Gambar
            'features' => 'nullable|string',
            'benefits' => 'nullable|array',
            'benefits.*.title' => 'required|string',
            'benefits.*.desc' => 'required|string',
        ]);

        // Logika Update Gambar
        if ($request->hasFile('image')) {
            // Hapus gambar lama
            if ($service->image && Storage::disk('public')->exists($service->image)) {
                Storage::disk('public')->delete($service->image);
            }
            // Simpan gambar baru
            $validated['image'] = $request->file('image')->store('services', 'public');
        }

        if ($request->filled('features')) {
            $validated['features'] = array_filter(array_map('trim', explode("\n", $request->features)));
        }

        $service->update($validated);

        return redirect()->route('admin.services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service)
    {
        // Hapus gambar saat delete
        if ($service->image && Storage::disk('public')->exists($service->image)) {
            Storage::disk('public')->delete($service->image);
        }

        $service->delete();
        return redirect()->route('admin.services.index')->with('success', 'Service deleted successfully.');
    }
}
