<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'admin@kyysolutions.com')->exists()) {
            User::create([
                'name' => 'Admin KyySolutions',
                'email' => 'admin@kyysolutions.com',
                'password' => Hash::make('@Kyysolutions2019'),
                'email_verified_at' => now(),
            ]);
        }
    }
}
