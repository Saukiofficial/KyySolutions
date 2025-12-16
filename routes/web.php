<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Import Home Controller (Frontend)
use App\Http\Controllers\HomeController;

// Import Admin Controllers (Backend)
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HeroSectionController;
use App\Http\Controllers\Admin\AboutSectionController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\ArticleController; // TAMBAHAN: Controller Berita

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// =========================================================================
// == LANDING PAGE ROUTES (PUBLIC / FRONTEND)
// =========================================================================

// Halaman Utama
Route::get('/', [HomeController::class, 'index'])->name('home');

// Halaman Detail Layanan
Route::get('/service/{service}', [HomeController::class, 'showService'])->name('service.show');

// Halaman Portal Berita (Daftar Artikel)
Route::get('/news', [HomeController::class, 'indexNews'])->name('news.index');

// Halaman Baca Berita (Detail Artikel) - Menggunakan Slug SEO Friendly
Route::get('/news/{article:slug}', [HomeController::class, 'showArticle'])->name('article.show');

// Kirim Pesan Kontak
Route::post('/contact', [HomeController::class, 'storeContact'])->name('contact.store');


// =========================================================================
// == USER PROFILE ROUTES (AUTHENTICATED USER)
// =========================================================================
// Route ini dibutuhkan oleh layout default Breeze/Inertia
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// =========================================================================
// == ADMIN PANEL ROUTES (BACKEND)
// =========================================================================

Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard Utama
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // == DUPLIKASI ROUTE PROFILE (KHUSUS LAYOUT ADMIN) ==
    // Diperlukan agar Topbar Admin tidak error saat memanggil route('admin.profile.edit')
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Hero Section Manager
    Route::get('/hero-sections', [HeroSectionController::class, 'index'])->name('hero-sections.index');
    Route::put('/hero-sections/{heroSection}', [HeroSectionController::class, 'update'])->name('hero-sections.update');

    // About Section Manager
    Route::get('/about-sections', [AboutSectionController::class, 'index'])->name('about-sections.index');
    Route::put('/about-sections/{aboutSection}', [AboutSectionController::class, 'update'])->name('about-sections.update');

    // Resource Controllers (CRUD Lengkap)
    Route::resource('services', ServiceController::class);
    Route::resource('portfolios', PortfolioController::class);
    Route::resource('teams', TeamController::class);
    Route::resource('partners', PartnerController::class);

    // TAMBAHAN: Route Manajemen Artikel Berita
    Route::resource('articles', ArticleController::class);

    // Contact Messages (Hanya Index, Show, Destroy)
    Route::resource('contacts', ContactController::class)->only(['index', 'show', 'destroy']);
    Route::patch('contacts/{contact}/toggle-read', [ContactController::class, 'toggleRead'])->name('contacts.toggle-read');

    // General Settings (Logo, Tawk.to, dll)
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings/{setting}', [SettingController::class, 'update'])->name('settings.update');
});

require __DIR__.'/auth.php';
