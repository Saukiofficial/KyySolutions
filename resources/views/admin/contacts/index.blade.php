@php
    use Illuminate\Support\Str;
@endphp

<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Inbox Management
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Contact Messages') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage incoming messages from your website contact form.
                    </p>
                </div>
            </div>

            <div class="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm">
                <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                {{ $contacts->total() }} Messages
            </div>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">

            @if (session('success'))
                <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-white">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-950">{{ session('success') }}</p>
                            <p class="mt-1 text-sm text-gray-500">
                                Message data has been processed successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <!-- Stats -->
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Total Messages</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">{{ $contacts->total() }}</p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Unread</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">
                        {{ $contacts->where('status', false)->count() }}
                    </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-700 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Read</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">
                        {{ $contacts->where('status', true)->count() }}
                    </p>
                </div>
            </div>

            <!-- Main Card -->
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Inbox
                            </p>
                            <h3 class="mt-1 text-lg font-bold text-gray-950">
                                Contact Messages
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                                View, read, and delete messages from visitors.
                            </p>
                        </div>

                        <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                            <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                            Latest Inbox
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-white">
                            <tr>
                                <th scope="col" class="w-28 px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Sender
                                </th>
                                <th scope="col" class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 lg:table-cell">
                                    Message
                                </th>
                                <th scope="col" class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 md:table-cell">
                                    Received
                                </th>
                                <th scope="col" class="w-48 px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100 bg-white">
                            @forelse ($contacts as $contact)
                                <tr class="transition hover:bg-gray-50 {{ !$contact->status ? 'bg-gray-50/70' : '' }}">
                                    <td class="px-6 py-5">
                                        @if(!$contact->status)
                                            <span class="inline-flex items-center gap-2 rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                                Unread
                                            </span>
                                        @else
                                            <span class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                                                <span class="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                                                Read
                                            </span>
                                        @endif
                                    </td>

                                    <td class="px-6 py-5">
                                        <div class="flex items-center gap-4">
                                            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-sm font-bold text-white shadow-lg shadow-gray-900/10">
                                                {{ strtoupper(substr($contact->name, 0, 1)) }}
                                            </div>

                                            <div class="min-w-0">
                                                <p class="truncate text-sm font-bold text-gray-950">
                                                    {{ $contact->name }}
                                                </p>

                                                <p class="mt-1 truncate text-xs font-medium text-gray-500">
                                                    {{ $contact->email }}
                                                </p>

                                                <p class="mt-2 max-w-sm truncate text-xs text-gray-400 lg:hidden">
                                                    {{ Str::limit($contact->message, 60) }}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="hidden px-6 py-5 lg:table-cell">
                                        <p class="max-w-md text-sm leading-6 text-gray-500">
                                            {{ Str::limit($contact->message, 90) }}
                                        </p>
                                    </td>

                                    <td class="hidden px-6 py-5 md:table-cell">
                                        <div class="text-sm font-semibold text-gray-800">
                                            {{ $contact->created_at->format('d M Y') }}
                                        </div>
                                        <div class="mt-1 text-xs text-gray-400">
                                            {{ $contact->created_at->format('H:i') }}
                                        </div>
                                    </td>

                                    <td class="px-6 py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="{{ route('admin.contacts.show', $contact->id) }}"
                                               class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:bg-gray-950 hover:text-white">
                                                View
                                            </a>

                                            <form action="{{ route('admin.contacts.destroy', $contact->id) }}"
                                                  method="POST"
                                                  onsubmit="return confirm('Are you sure you want to delete this message?');"
                                                  class="inline-block">
                                                @csrf
                                                @method('DELETE')

                                                <button type="submit"
                                                        class="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="5" class="px-6 py-16 text-center">
                                        <div class="mx-auto flex max-w-sm flex-col items-center">
                                            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gray-100 text-gray-500">
                                                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                </svg>
                                            </div>

                                            <h4 class="text-base font-bold text-gray-950">
                                                No messages found
                                            </h4>

                                            <p class="mt-2 text-sm leading-6 text-gray-500">
                                                Incoming contact messages will appear here.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

                @if($contacts->hasPages())
                    <div class="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        {{ $contacts->links() }}
                    </div>
                @endif
            </div>

        </div>
    </div>
</x-admin-layout>