<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'role',
        'bio',
        'email',
        'location',
        'experience_years',
        'photo',
        'social_media',
        'skills',
        'programming_languages',
        'tools',
        'works',
    ];

    protected $casts = [
        'social_media' => 'array',
        'skills' => 'array',
        'programming_languages' => 'array',
        'tools' => 'array',
        'works' => 'array',
    ];
}