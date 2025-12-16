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
use App\Models\Article;
use App\Models\Tutorial; // Import Model Tutorial (PENTING)

class HomeController extends Controller
{
    /**
     * Menampilkan landing page (Home) dengan semua data dinamis.
     */
    public function index()
    {
        $heroSection = HeroSection::first();
        $aboutSection = AboutSection::first();
        $settings = Setting::first();

        $services = Service::all();
        $teams = Team::all();
        $partners = Partner::all();
        $portfolios = Portfolio::latest()->get();

        // Ambil 3 artikel terbaru untuk section News di Home
        try {
            $articles = Article::where('is_published', true)->latest()->take(3)->get();
        } catch (\Exception $e) {
            $articles = [];
        }

        return Inertia::render('Home', [
            'hero' => $heroSection,
            'about' => $aboutSection,
            'services' => $services,
            'portfolios' => $portfolios,
            'team' => $teams,
            'partners' => $partners,
            'articles' => $articles,
            'settings' => $settings,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    /**
     * Menampilkan Halaman Portal Berita (Semua Berita).
     * Route: /news
     */
    public function indexNews()
    {
        $settings = Setting::first();

        // Ambil artikel dengan pagination
        $articles = Article::where('is_published', true)
            ->latest()
            ->paginate(9);

        // Ambil artikel featured (3 terbaru)
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
     * Menampilkan Detail Berita.
     * Route: /news/{slug}
     */
    public function showArticle(Article $article)
    {
        $settings = Setting::first();

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
     * Menampilkan Halaman Portal Tutorial (Semua Tutorial).
     * Route: /tutorials
     * (Fungsi ini yang sebelumnya hilang)
     */
    public function indexTutorials()
    {
        $settings = Setting::first();

        // Ambil tutorial yang published dengan pagination
        $tutorials = Tutorial::where('is_published', true)
            ->latest()
            ->paginate(9);

        return Inertia::render('TutorialIndex', [
            'tutorials' => $tutorials,
            'settings' => $settings,
        ]);
    }

    /**
     * Menampilkan Detail Tutorial.
     * Route: /tutorials/{slug}
     */
    public function showTutorial(Tutorial $tutorial)
    {
        $settings = Setting::first();

        // Ambil tutorial lain dengan kategori sama
        $relatedTutorials = Tutorial::where('id', '!=', $tutorial->id)
            ->where('category', $tutorial->category)
            ->where('is_published', true)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('TutorialDetail', [
            'tutorial' => $tutorial,
            'relatedTutorials' => $relatedTutorials,
            'settings' => $settings,
        ]);
    }

    /**
     * Menampilkan Detail Service.
     * Route: /service/{id}
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
     * Kirim Pesan Kontak.
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
