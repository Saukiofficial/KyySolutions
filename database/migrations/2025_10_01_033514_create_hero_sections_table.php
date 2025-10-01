<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Jalankan migrasi untuk membuat tabel.
     */
    public function up(): void
    {
        Schema::create('hero_sections', function (Blueprint $table) {
            $table->id();
            $table->string('headline');
            $table->text('subheadline')->nullable();
            $table->string('cta_text')->default('Get Started');
            $table->string('cta_url')->default('#contact');
            $table->string('background_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * Balikkan migrasi untuk menghapus tabel.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};
