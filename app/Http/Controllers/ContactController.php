<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Menyimpan pesan dari form kontak.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Untuk saat ini, kita hanya log data yang masuk.
        // Di tahap produksi, Anda akan menyimpan ini ke database, mengirim email notifikasi, dll.
        Log::info('Contact Form Submission:', $request->only(['name', 'email', 'message']));

        // Mengirimkan flash message sukses kembali ke frontend
        return redirect()->back()->with('success', 'Thank you for your message! We will get back to you soon.');
    }
}
