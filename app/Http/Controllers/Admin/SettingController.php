<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function index()
    {
        $setting = Setting::firstOrCreate([]);
        return view('admin.settings.index', compact('setting'));
    }

    public function update(Request $request, Setting $setting)
    {
        $validated = $request->validate([
            'company_name' => 'nullable|string|max:255',
            'footer_text' => 'nullable|string',
            'phone' => 'nullable|string', // Format: 62812...
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            'tawk_property_id' => 'nullable|string',
            'tawk_widget_id' => 'nullable|string',
        ]);

        if ($request->hasFile('logo')) {
            if ($setting->logo && Storage::disk('public')->exists($setting->logo)) {
                Storage::disk('public')->delete($setting->logo);
            }
            $validated['logo'] = $request->file('logo')->store('settings', 'public');
        }

        $setting->update($validated);

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
