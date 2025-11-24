<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'icon',
        'title',
        'description',
        'tagline',
        'features',
        'benefits',
        'color',
        'image',
    ];

    protected $casts = [
        'features' => 'array',
        'benefits' => 'array',
    ];
}
