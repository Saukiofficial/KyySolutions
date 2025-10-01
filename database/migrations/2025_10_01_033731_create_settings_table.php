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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('company_name')->nullable();
            $table->text('address')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('logo')->nullable();
            $table->string('favicon')->nullable();
            $table->json('social_media')->nullable(); // Untuk menyimpan link medsos dalam format JSON
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
        Schema::dropIfExists('settings');
    }
};
