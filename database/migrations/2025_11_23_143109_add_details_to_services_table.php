<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->string('tagline')->nullable()->after('description');
            $table->json('features')->nullable()->after('tagline'); // Menyimpan list fitur
            $table->json('benefits')->nullable()->after('features'); // Menyimpan list manfaat (title & desc)
            $table->string('color')->default('from-blue-500 to-purple-600')->after('benefits');
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['tagline', 'features', 'benefits', 'color']);
        });
    }
};
