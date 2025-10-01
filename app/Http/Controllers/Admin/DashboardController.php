<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Portfolio;
use App\Models\Service;
use App\Models\Team;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Pastikan nama variabel di sini menggunakan camelCase (huruf kecil di awal)
        $serviceCount = Service::count();
        $portfolioCount = Portfolio::count();
        $teamCount = Team::count();
        $unreadMessagesCount = Contact::where('is_read', 0)->count();

        // Kirim semua variabel ke view menggunakan compact()
        return view('admin.dashboard', compact(
            'serviceCount',
            'portfolioCount',
            'teamCount',
            'unreadMessagesCount'
        ));
    }
}

