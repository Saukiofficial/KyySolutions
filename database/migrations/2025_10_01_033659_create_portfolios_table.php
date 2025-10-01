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
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->enum('category', ['Website', 'Mobile', 'Design', 'Game']);
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
        Schema::dropIfExists('portfolios');
    }
};
