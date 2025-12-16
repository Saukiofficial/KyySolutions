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
use App\Models\Article; // Pastikan Model Article sudah di-import

class HomeController extends Controller
{
    /**
     * Menampilkan landing page (Home) dengan semua data dinamis.
     */
    public function index()
    {
        // 1. Ambil data single (First)
        $heroSection = HeroSection::first();
        $aboutSection = AboutSection::first();
        $settings = Setting::first();

        // 2. Ambil data list (All / Latest)
        $services = Service::all();
        $teams = Team::all();
        $partners = Partner::all();

        // Ambil portfolio terbaru
        $portfolios = Portfolio::latest()->get();

        // Ambil 3 artikel terbaru yang published untuk ditampilkan di Home (Section News)
        try {
            $articles = Article::where('is_published', true)->latest()->take(3)->get();
        } catch (\Exception $e) {
            $articles = []; // Fallback jika tabel articles belum ada
        }

        // 3. Kirim ke React (Inertia)
        return Inertia::render('Home', [
            'hero' => $heroSection,
            'about' => $aboutSection,
            'services' => $services,
            'portfolios' => $portfolios,
            'team' => $teams,
            'partners' => $partners,
            'articles' => $articles, // Data berita untuk section News di Home
            'settings' => $settings,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    /**
     * Menampilkan Halaman Portal Berita (Semua Berita).
     * Diakses via route: /news
     */
    public function indexNews()
    {
        $settings = Setting::first();

        // Ambil semua artikel dengan pagination (misal 9 per halaman)
        $articles = Article::where('is_published', true)
            ->latest()
            ->paginate(9);

        // Ambil artikel pilihan (Featured) untuk bagian atas (misal 3 terbaru)
        $featuredArticles = Article::where('is_published', true)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('NewsIndex', [
            'articles' => $articles,
            'featuredArticles' => $featuredArticles,
            'settings' => $settings,
        ]);
    }

    /**
     * Menampilkan Halaman Detail Berita.
     * Diakses via route: /news/{slug}
     */
    public function showArticle(Article $article)
    {
        $settings = Setting::first();

        // Ambil artikel lain untuk rekomendasi "Baca Juga"
        $relatedArticles = Article::where('id', '!=', $article->id)
            ->where('is_published', true)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('ArticleDetail', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
            'settings' => $settings
        ]);
    }

    /**
     * Menampilkan Halaman Detail Service.
     * Diakses via route: /service/{id}
     */
    public function showService(Service $service)
    {
        $settings = Setting::first();

        return Inertia::render('ServiceDetail', [
            'service' => $service,
            'settings' => $settings,
        ]);
    }

    /**
     * Menangani pengiriman pesan dari form kontak.
     */
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
