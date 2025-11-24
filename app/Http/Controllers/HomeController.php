<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\HeroSection;
use App\Models\AboutSection;
use App\Models\Service;
use App\Models\Portfolio;
use App\Models\Team;
use App\Models\Setting;
use App\Models\Contact;
use App\Models\Partner;

class HomeController extends Controller
{
    public function index()
    {
        $heroSection = HeroSection::first();
        $aboutSection = AboutSection::first();
        $services = Service::all();
        $portfolios = Portfolio::latest()->get();
        $teams = Team::all();
        $settings = Setting::first();
        $partners = Partner::all();

        return Inertia::render('Home', [
            'hero' => $heroSection,
            'about' => $aboutSection,
            'services' => $services,
            'portfolios' => $portfolios,
            'team' => $teams,
            'partners' => $partners,
            'settings' => $settings,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    // Menampilkan halaman detail service
    public function showService(Service $service)
    {
        // Kita butuh settings untuk menampilkan Navbar dan Footer di halaman detail
        $settings = Setting::first();

        return Inertia::render('ServiceDetail', [
            'service' => $service,
            'settings' => $settings,
        ]);
    }

    public function storeContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        return redirect()->back()->with('success', 'Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.');
    }
}
