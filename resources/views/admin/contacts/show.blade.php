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
                        Message Detail
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('View Contact Message') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Read and manage this contact message.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.contacts.index') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to Inbox
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-6xl space-y-6 sm:px-6 lg:px-8">

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

                <!-- Message Content -->
                <div class="lg:col-span-2">
                    <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                        <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                            <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                            <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                            <div class="relative">
                                <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                                    <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                    Incoming Message
                                </div>

                                <h3 class="mt-5 text-2xl font-bold tracking-tight">
                                    Message from {{ $contact->name }}
                                </h3>

                                <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                                    Received on {{ $contact->created_at->format('l, d F Y \a\t H:i') }}.
                                </p>
                            </div>
                        </div>

                        <div class="space-y-6 p-8">

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                        From
                                    </p>
                                    <p class="mt-2 text-base font-bold text-gray-950">
                                        {{ $contact->name }}
                                    </p>
                                </div>

                                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                        Email
                                    </p>
                                    <a href="mailto:{{ $contact->email }}"
                                       class="mt-2 block truncate text-base font-bold text-gray-950 transition hover:text-gray-600">
                                        {{ $contact->email }}
                                    </a>
                                </div>
                            </div>

                            <div class="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Received On
                                </p>
                                <p class="mt-2 text-base font-bold text-gray-950">
                                    {{ $contact->created_at->format('l, d F Y \a\t H:i') }}
                                </p>
                            </div>

                            <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                                <div class="mb-5 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
                                    <div>
                                        <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                            Message
                                        </p>
                                        <h4 class="mt-1 text-lg font-bold text-gray-950">
                                            Visitor Message
                                        </h4>
                                    </div>

                                    @if(!$contact->is_read)
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
                                </div>

                                <div class="whitespace-pre-wrap text-sm leading-7 text-gray-700">
                                    {{ $contact->message }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Actions Sidebar -->
                <div class="lg:col-span-1">
                    <div class="sticky top-6 space-y-6">

                        <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                            <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                    Actions
                                </p>
                                <h3 class="mt-1 text-lg font-bold text-gray-950">
                                    Message Tools
                                </h3>
                            </div>

                            <div class="space-y-3 p-6">
                                <a href="mailto:{{ $contact->email }}?subject=Reply from {{ config('app.name') }}"
                                   class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                    Reply by Email
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                                    </svg>
                                </a>

                                <form action="{{ route('admin.contacts.toggle-read', $contact->id) }}"
                                      method="POST">
                                    @csrf
                                    @method('PATCH')

                                    <button type="submit"
                                            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                                        {{ $contact->is_read ? 'Mark as Unread' : 'Mark as Read' }}
                                    </button>
                                </form>

                                <form action="{{ route('admin.contacts.destroy', $contact->id) }}"
                                      method="POST"
                                      onsubmit="return confirm('Are you sure you want to delete this message?');">
                                    @csrf
                                    @method('DELETE')

                                    <button type="submit"
                                            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-6 py-4 text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
                                        Delete Message
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div class="rounded-[2rem] border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-950">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
                                </svg>
                            </div>

                            <h4 class="text-lg font-bold">Message Info</h4>

                            <div class="mt-4 space-y-3 text-sm text-gray-400">
                                <div class="flex items-center justify-between gap-4">
                                    <span>Status</span>
                                    <span class="font-semibold text-white">
                                        {{ $contact->is_read ? 'Read' : 'Unread' }}
                                    </span>
                                </div>

                                <div class="flex items-center justify-between gap-4">
                                    <span>Date</span>
                                    <span class="font-semibold text-white">
                                        {{ $contact->created_at->format('d M Y') }}
                                    </span>
                                </div>

                                <div class="flex items-center justify-between gap-4">
                                    <span>Time</span>
                                    <span class="font-semibold text-white">
                                        {{ $contact->created_at->format('H:i') }}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</x-admin-layout>