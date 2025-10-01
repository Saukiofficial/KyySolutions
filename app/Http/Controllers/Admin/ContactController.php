<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     * Menampilkan daftar semua pesan kontak yang masuk.
     */
    public function index(Request $request)
    {
        $query = Contact::query();

        // Filter berdasarkan status jika ada parameter 'status' di URL
        if ($request->filled('status')) {
            if ($request->status == 'read') {
                $query->where('is_read', true);
            } elseif ($request->status == 'unread') {
                $query->where('is_read', false);
            }
        }

        // Urutkan dari yang terbaru dan gunakan pagination
        $contacts = $query->latest()->paginate(15);

        return view('admin.contacts.index', compact('contacts'));
    }

    /**
     * Display the specified resource.
     * Menampilkan detail satu pesan dan otomatis menandainya sebagai sudah dibaca.
     */
    public function show(Contact $contact)
    {
        // Jika pesan belum dibaca, tandai sebagai sudah dibaca saat pertama kali dibuka
        if (!$contact->is_read) {
            $contact->update(['is_read' => true]);
        }

        return view('admin.contacts.show', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     * Method ini bisa digunakan untuk toggle status dibaca/belum dibaca dari halaman index.
     */
    public function update(Request $request, Contact $contact)
    {
        // Balik status 'is_read' (jika true jadi false, jika false jadi true)
        $contact->update(['is_read' => !$contact->is_read]);

        return redirect()->route('admin.contacts.index')->with('success', 'Message status has been updated.');
    }

    /**
     * Remove the specified resource from storage.
     * Menghapus pesan dari database.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('admin.contacts.index')->with('success', 'Message has been deleted successfully.');
    }
}
