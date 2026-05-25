<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->filled('status')) {
            if ($request->status === 'read') {
                $query->where('is_read', true);
            }

            if ($request->status === 'unread') {
                $query->where('is_read', false);
            }
        }

        $contacts = $query
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin.contacts.index', compact('contacts'));
    }

    public function show(Contact $contact)
    {
        if (!$contact->is_read) {
            $contact->update([
                'is_read' => true,
            ]);
        }

        return view('admin.contacts.show', compact('contact'));
    }

    public function toggleRead(Contact $contact)
    {
        $contact->update([
            'is_read' => !$contact->is_read,
        ]);

        return redirect()
            ->back()
            ->with('success', 'Message status has been updated.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()
            ->route('admin.contacts.index')
            ->with('success', 'Message has been deleted successfully.');
    }
}