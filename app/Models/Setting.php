<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name', // Asumsi kolom lama
        'logo',         // Asumsi kolom lama
        'footer_text',  // Asumsi kolom lama
        'phone',        // Asumsi kolom lama
        'tawk_property_id', // TAMBAHAN BARU
        'tawk_widget_id',   // TAMBAHAN BARU
    ];
}
