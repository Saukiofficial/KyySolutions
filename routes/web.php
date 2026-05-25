<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\TutorialController;

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

// Halaman Portal Berita / Artikel
Route::get('/news', [HomeController::class, 'indexNews'])->name('news.index');
Route::get('/news/{article:slug}', [HomeController::class, 'showArticle'])->name('article.show');

// Halaman Portal Tutorial
Route::get('/tutorials', [HomeController::class, 'indexTutorials'])->name('tutorials.index');
Route::get('/tutorials/{tutorial:slug}', [HomeController::class, 'showTutorial'])->name('tutorials.show');

// Halaman Detail Portfolio
Route::get('/portfolio/{portfolio:slug}', [HomeController::class, 'showPortfolio'])->name('portfolio.show');

// Kirim Pesan Kontak dari frontend
Route::post('/contact', [HomeController::class, 'storeContact'])->name('contact.store');


// =========================================================================
// == USER PROFILE ROUTES (AUTHENTICATED USER)
// =========================================================================

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

    // Profile khusus layout admin
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Hero Section
    Route::get('/hero-sections', [HeroSectionController::class, 'index'])->name('hero-sections.index');
    Route::put('/hero-sections/{heroSection}', [HeroSectionController::class, 'update'])->name('hero-sections.update');

    // About Section
    Route::get('/about-sections', [AboutSectionController::class, 'index'])->name('about-sections.index');
    Route::put('/about-sections/{aboutSection}', [AboutSectionController::class, 'update'])->name('about-sections.update');

    // Services
    Route::resource('services', ServiceController::class);

    // Portfolios
    Route::resource('portfolios', PortfolioController::class);

    // Teams
    Route::resource('teams', TeamController::class);

    // Partners
    Route::resource('partners', PartnerController::class);

    // Articles / News
    Route::post('articles/upload-image', [ArticleController::class, 'uploadEditorImage'])
        ->name('articles.upload-image');

    Route::resource('articles', ArticleController::class);

    // Tutorials
    Route::post('tutorials/upload-image', [TutorialController::class, 'uploadEditorImage'])
        ->name('tutorials.upload-image');

    Route::resource('tutorials', TutorialController::class);

    // Contact Messages
    Route::resource('contacts', ContactController::class)->only([
        'index',
        'show',
        'destroy',
    ]);

    Route::patch('contacts/{contact}/toggle-read', [ContactController::class, 'toggleRead'])
        ->name('contacts.toggle-read');

    // General Settings
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings/{setting}', [SettingController::class, 'update'])->name('settings.update');
});

require __DIR__ . '/auth.php';