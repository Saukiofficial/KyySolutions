<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Menampilkan halaman utama dengan data dummy.
     */
    public function home()
    {
        // Data ini nantinya akan diambil dari database melalui admin panel.
        $services = [
            ['icon' => 'Code', 'title' => 'Website Development', 'description' => 'Kami membangun website modern, cepat, dan responsif.'],
            ['icon' => 'Smartphone', 'title' => 'Mobile App Development', 'description' => 'Aplikasi mobile native & hybrid untuk Android dan iOS.'],
            ['icon' => 'Palette', 'title' => 'Creative Design', 'description' => 'Desain UI/UX yang menarik dan fungsional.'],
            ['icon' => 'Gamepad2', 'title' => 'Game Development', 'description' => 'Game 2D & 3D yang interaktif dan menyenangkan.'],
        ];

        $portfolio = [
            ['id' => 1, 'category' => 'Website', 'title' => 'Company Profile ABC', 'image' => 'https://placehold.co/600x400/2563EB/FFFFFF?text=Website'],
            ['id' => 2, 'category' => 'Mobile', 'title' => 'E-Commerce App', 'image' => 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Mobile+App'],
            ['id' => 3, 'category' => 'Game', 'title' => 'Platformer Adventure', 'image' => 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Game'],
            ['id' => 4, 'category' => 'Design', 'title' => 'Branding Kit XYZ', 'image' => 'https://placehold.co/600x400/2563EB/FFFFFF?text=Design'],
            ['id' => 5, 'category' => 'Website', 'title' => 'Booking System', 'image' => 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Website'],
            ['id' => 6, 'category' => 'Mobile', 'title' => 'Social Media App', 'image' => 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Mobile+App'],
        ];

        $team = [
            ['name' => 'John Doe', 'role' => 'CEO & Founder', 'image' => 'https://placehold.co/400x400/EBF4FF/1E3A8A?text=JD'],
            ['name' => 'Jane Smith', 'role' => 'Lead Developer', 'image' => 'https://placehold.co/400x400/EBF4FF/1E3A8A?text=JS'],
            ['name' => 'Peter Jones', 'role' => 'UI/UX Designer', 'image' => 'https://placehold.co/400x400/EBF4FF/1E3A8A?text=PJ'],
            ['name' => 'Sarah Miller', 'role' => 'Project Manager', 'image' => 'https://placehold.co/400x400/EBF4FF/1E3A8A?text=SM'],
        ];

        return Inertia::render('Home', [
            'services' => $services,
            'portfolio' => $portfolio,
            'team' => $team,
        ]);
    }
}

