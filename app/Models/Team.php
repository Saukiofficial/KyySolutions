<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * Atribut yang dapat diisi secara massal.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'role',
        'photo',
        'social_media',
    ];

    /**
     * The attributes that should be cast.
     *
     * Mengubah tipe data atribut.
     *
     * @var array
     */
    protected $casts = [
        'social_media' => 'array',
    ];
}

