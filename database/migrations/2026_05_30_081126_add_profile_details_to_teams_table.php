<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('teams', function (Blueprint $table) {
            if (!Schema::hasColumn('teams', 'slug')) {
                $table->string('slug')->unique()->nullable()->after('name');
            }

            if (!Schema::hasColumn('teams', 'bio')) {
                $table->text('bio')->nullable()->after('role');
            }

            if (!Schema::hasColumn('teams', 'email')) {
                $table->string('email')->nullable()->after('bio');
            }

            if (!Schema::hasColumn('teams', 'location')) {
                $table->string('location')->nullable()->after('email');
            }

            if (!Schema::hasColumn('teams', 'experience_years')) {
                $table->string('experience_years')->nullable()->after('location');
            }

            if (!Schema::hasColumn('teams', 'skills')) {
                $table->json('skills')->nullable()->after('social_media');
            }

            if (!Schema::hasColumn('teams', 'programming_languages')) {
                $table->json('programming_languages')->nullable()->after('skills');
            }

            if (!Schema::hasColumn('teams', 'tools')) {
                $table->json('tools')->nullable()->after('programming_languages');
            }

            if (!Schema::hasColumn('teams', 'works')) {
                $table->json('works')->nullable()->after('tools');
            }
        });
    }

    public function down(): void
    {
        Schema::table('teams', function (Blueprint $table) {
            foreach ([
                'slug',
                'bio',
                'email',
                'location',
                'experience_years',
                'skills',
                'programming_languages',
                'tools',
                'works',
            ] as $column) {
                if (Schema::hasColumn('teams', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};