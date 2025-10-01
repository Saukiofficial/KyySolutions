<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

