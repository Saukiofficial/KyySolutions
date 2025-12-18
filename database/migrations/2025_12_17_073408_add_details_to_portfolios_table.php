<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('title'); // URL SEO Friendly
            $table->string('client_name')->nullable()->after('category'); // Nama Klien (Opsional)
            $table->text('details')->nullable()->after('description'); // Deskripsi Panjang (HTML)
            $table->json('technologies')->nullable()->after('details'); // Tech Stack (e.g. Laravel, React)
            $table->json('features')->nullable()->after('technologies'); // List Fitur
        });
    }

    public function down(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            $table->dropColumn(['slug', 'client_name', 'details', 'technologies', 'features']);
        });
    }
};
