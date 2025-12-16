<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            // Kolom untuk Banner Promosi (Opsional per artikel)
            $table->string('promo_title')->nullable()->after('is_published');
            $table->string('promo_link')->nullable()->after('promo_title');
            $table->string('promo_image')->nullable()->after('promo_link');
        });
    }

    public function down(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn(['promo_title', 'promo_link', 'promo_image']);
        });
    }
};
