<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Import Home Controller
use App\Http\Controllers\HomeController;

// Import Admin Controllers
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HeroSectionController;
use App\Http\Controllers\Admin\AboutSectionController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\PartnerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// =========================================================================
// == LANDING PAGE ROUTES (INERTIA/REACT)
// =========================================================================

Route::get('/', [HomeController::class, 'index'])->name('home');
// TAMBAHAN: Route untuk detail service
Route::get('/service/{service}', [HomeController::class, 'showService'])->name('service.show');

Route::post('/contact', [HomeController::class, 'storeContact'])->name('contact.store');

// =========================================================================
// == USER PROFILE ROUTES (General)
// =========================================================================
// Route ini bernama 'profile.edit' (tanpa awalan admin)
// Dibutuhkan oleh React/Inertia
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// =========================================================================
// == ADMIN PANEL ROUTES (BLADE)
// =========================================================================

Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // == DUPLIKASI ROUTE PROFILE (KHUSUS ADMIN) ==
    // Route ini bernama 'admin.profile.edit'
    // Dibutuhkan oleh Topbar Admin agar tidak error 500
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin Resources
    Route::get('/hero-sections', [HeroSectionController::class, 'index'])->name('hero-sections.index');
    Route::put('/hero-sections/{heroSection}', [HeroSectionController::class, 'update'])->name('hero-sections.update');

    Route::get('/about-sections', [AboutSectionController::class, 'index'])->name('about-sections.index');
    Route::put('/about-sections/{aboutSection}', [AboutSectionController::class, 'update'])->name('about-sections.update');

    Route::resource('services', ServiceController::class);
    Route::resource('portfolios', PortfolioController::class);
    Route::resource('teams', TeamController::class);
    Route::resource('partners', PartnerController::class);

    Route::resource('contacts', ContactController::class)->only(['index', 'show', 'destroy']);
    Route::patch('contacts/{contact}/toggle-read', [ContactController::class, 'toggleRead'])->name('contacts.toggle-read');

    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings/{setting}', [SettingController::class, 'update'])->name('settings.update');
});

require __DIR__.'/auth.php';
