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

class HomeController extends Controller
{
    /**
     * Menampilkan landing page dengan data dinamis dari database.
     */
    public function index()
    {
        // Mengambil semua data yang dibutuhkan oleh landing page
        $heroSection = HeroSection::first();
        $aboutSection = AboutSection::first();
        $services = Service::all();
        $portfolios = Portfolio::latest()->get();
        $teams = Team::all();
        $settings = Setting::first();

        // Mengirim semua data ke komponen Inertia 'Home'
        return Inertia::render('Home', [
            'hero' => $heroSection,
            'about' => $aboutSection,
            'services' => $services,
            'portfolios' => $portfolios,
            'team' => $teams,
            'settings' => $settings,
        ]);
    }
}
