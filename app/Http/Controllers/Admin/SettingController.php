<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    /**
     * Display the settings form.
     * Menampilkan halaman form untuk mengedit settings.
     */
    public function index()
    {
        // Ambil data setting pertama, atau buat baru jika tidak ada.
        // Ini memastikan hanya ada satu baris data untuk settings.
        $setting = Setting::firstOrCreate([], [
            'company_name' => 'KYYSolutions',
            'email' => 'contact@kyysolutions.com',
            'address' => 'Your Company Address',
            'phone' => 'Your Company Phone',
        ]);

        return view('admin.settings.index', compact('setting'));
    }

    /**
     * Update the settings in storage.
     * Memperbarui data settings di database.
     */
    public function update(Request $request, Setting $setting)
    {
        $validated = $request->validate([
            'company_name' => 'required|string|max:255',
            'address' => 'nullable|string',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'social_media' => 'nullable|array',
            'social_media.*' => 'nullable|url', // Memastikan setiap item adalah URL yang valid
            'logo' => 'nullable|image|mimes:png,jpg,jpeg,svg,webp|max:1024', // max 1MB
            'favicon' => 'nullable|image|mimes:ico,png|max:512', // max 512KB
        ]);

        // Handle logo upload
        if ($request->hasFile('logo')) {
            // Hapus logo lama jika ada
            if ($setting->logo && Storage::disk('public')->exists($setting->logo)) {
                Storage::disk('public')->delete($setting->logo);
            }
            // Simpan logo baru
            $validated['logo'] = $request->file('logo')->store('settings', 'public');
        }

        // Handle favicon upload
        if ($request->hasFile('favicon')) {
            // Hapus favicon lama jika ada
            if ($setting->favicon && Storage::disk('public')->exists($setting->favicon)) {
                Storage::disk('public')->delete($setting->favicon);
            }
            // Simpan favicon baru
            $validated['favicon'] = $request->file('favicon')->store('settings', 'public');
        }

        $setting->update($validated);

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}

