<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            // Menambahkan kolom footer_text jika belum ada
            if (!Schema::hasColumn('settings', 'footer_text')) {
                $table->text('footer_text')->nullable()->after('id');
            }

            // Opsional: Tambahkan kolom lain jika belum ada, untuk jaga-jaga
            if (!Schema::hasColumn('settings', 'company_name')) {
                $table->string('company_name')->nullable()->after('id');
            }
            if (!Schema::hasColumn('settings', 'phone')) {
                $table->string('phone')->nullable()->after('id');
            }
            if (!Schema::hasColumn('settings', 'logo')) {
                $table->string('logo')->nullable()->after('id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->dropColumn(['footer_text', 'company_name', 'phone', 'logo']);
        });
    }
};
