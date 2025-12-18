<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'slug',           // URL SEO Friendly
        'category',
        'client_name',    // Nama Klien
        'description',    // Deskripsi Singkat (Card)
        'details',        // Deskripsi Lengkap (HTML/CKEditor)
        'image',          // Thumbnail Utama
        'gallery',        // Galeri Foto Tambahan (JSON Array)
        'technologies',   // Teknologi yang digunakan (JSON Array)
        'features',       // Fitur Utama (JSON Array)
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'technologies' => 'array', // Otomatis convert JSON ke Array PHP
        'features' => 'array',     // Otomatis convert JSON ke Array PHP
        'gallery' => 'array',      // Otomatis convert JSON ke Array PHP
    ];
}
