<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('teams', 'works')) {
            Schema::table('teams', function (Blueprint $table) {
                $table->json('works')->nullable()->after('tools');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('teams', 'works')) {
            Schema::table('teams', function (Blueprint $table) {
                $table->dropColumn('works');
            });
        }
    }
};