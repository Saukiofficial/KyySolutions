<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.757.426 1.757 2.925 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.757-2.925 1.757-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.757-.426-1.757-2.925 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.607 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Website Configuration
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Website Settings') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage company identity, contact information, logo, footer, and live chat integration.
                    </p>
                </div>
            </div>

            <a href="{{ route('home') }}"
               target="_blank"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                View Website
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 17L17 7M17 7H8m9 0v9"/>
                </svg>
            </a>
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
                                Website settings have been saved successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <form method="POST"
                  action="{{ route('admin.settings.update', $setting->id) }}"
                  enctype="multipart/form-data"
                  class="space-y-6">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

                    <!-- Main Settings -->
                    <div class="xl:col-span-2">
                        <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                            <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                                <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                                <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                                <div class="relative">
                                    <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                                        <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                        General Settings
                                    </div>

                                    <h3 class="mt-5 text-2xl font-bold tracking-tight">
                                        Company Information
                                    </h3>

                                    <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                                        Update the main identity used across your website, footer, and contact section.
                                    </p>
                                </div>
                            </div>

                            <div class="space-y-6 p-8">
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Company Name
                                        </label>

                                        <input type="text"
                                               name="company_name"
                                               value="{{ old('company_name', $setting->company_name) }}"
                                               placeholder="Your company name"
                                               class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                        @error('company_name')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Phone / WhatsApp
                                        </label>

                                        <input type="text"
                                               name="phone"
                                               value="{{ old('phone', $setting->phone) }}"
                                               placeholder="628..."
                                               class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Gunakan format internasional, contoh: 6281234567890.
                                        </p>

                                        @error('phone')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-800">
                                        Footer Text
                                    </label>

                                    <textarea name="footer_text"
                                              rows="5"
                                              placeholder="Short description for website footer..."
                                              class="block w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">{{ old('footer_text', $setting->footer_text) }}</textarea>

                                    @error('footer_text')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                                    <div class="mb-5 flex items-start justify-between gap-4">
                                        <div>
                                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                                Logo
                                            </p>
                                            <h4 class="mt-1 text-lg font-bold text-gray-950">
                                                Website Logo
                                            </h4>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Upload a clean logo for header, footer, and branding.
                                            </p>
                                        </div>

                                        @if($setting->logo)
                                            <span class="rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                                Active
                                            </span>
                                        @else
                                            <span class="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600">
                                                Empty
                                            </span>
                                        @endif
                                    </div>

                                    @if($setting->logo)
                                        <div class="mb-5 flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                                            <div class="flex h-20 w-32 items-center justify-center rounded-2xl bg-gray-50 p-3">
                                                <img src="{{ asset('storage/' . $setting->logo) }}"
                                                     alt="Website Logo"
                                                     class="max-h-full max-w-full object-contain">
                                            </div>

                                            <div>
                                                <p class="text-sm font-bold text-gray-950">
                                                    Current Logo
                                                </p>
                                                <p class="mt-1 text-xs text-gray-500">
                                                    Upload a new file to replace it.
                                                </p>
                                            </div>
                                        </div>
                                    @else
                                        <div class="mb-5 rounded-3xl border border-dashed border-gray-300 bg-white px-5 py-8 text-center">
                                            <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
                                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                            <p class="text-sm font-semibold text-gray-700">
                                                No logo uploaded yet
                                            </p>
                                            <p class="mt-1 text-xs text-gray-500">
                                                Upload your logo below.
                                            </p>
                                        </div>
                                    @endif

                                    <input type="file"
                                           name="logo"
                                           accept="image/*,.svg"
                                           class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">

                                    <p class="mt-2 text-xs leading-5 text-gray-500">
                                        Recommended: transparent PNG/SVG. Leave empty if you don't want to change the logo.
                                    </p>

                                    @error('logo')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Settings -->
                    <div class="xl:col-span-1">
                        <div class="sticky top-6 space-y-6">

                            <!-- Save Panel -->
                            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Save
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Save Changes
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">
                                        Update website settings instantly.
                                    </p>
                                </div>

                                <div class="space-y-3 p-6">
                                    <button type="submit"
                                            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                        Save Settings
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </button>

                                    <a href="{{ route('home') }}"
                                       target="_blank"
                                       class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                                        Preview Website
                                    </a>
                                </div>
                            </div>

                            <!-- Live Chat -->
                            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Live Chat
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Tawk.to Integration
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">
                                        Connect live chat to your website.
                                    </p>
                                </div>

                                <div class="space-y-5 p-6">
                                    <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                                        <p class="text-xs leading-5 text-gray-500">
                                            Daftar di
                                            <a href="https://tawk.to" target="_blank" class="font-bold text-gray-950 underline">
                                                tawk.to
                                            </a>,
                                            lalu ambil ID dari URL Direct Chat Link.
                                        </p>

                                        <div class="mt-3 rounded-2xl bg-white px-4 py-3 text-xs font-mono text-gray-500">
                                            https://tawk.to/chat/PROPERTY_ID/WIDGET_ID
                                        </div>
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Property ID
                                        </label>

                                        <input type="text"
                                               name="tawk_property_id"
                                               value="{{ old('tawk_property_id', $setting->tawk_property_id) }}"
                                               placeholder="Contoh: 65a123..."
                                               class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                        @error('tawk_property_id')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Widget ID
                                        </label>

                                        <input type="text"
                                               name="tawk_widget_id"
                                               value="{{ old('tawk_widget_id', $setting->tawk_widget_id) }}"
                                               placeholder="Contoh: 1hk..."
                                               class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                        @error('tawk_widget_id')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <a href="https://dashboard.tawk.to"
                                       target="_blank"
                                       class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                        Buka Inbox Chat
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                        </svg>
                                    </a>

                                    <p class="text-center text-xs text-gray-500">
                                        Klik untuk membuka dashboard chat dan membalas pesan pengunjung.
                                    </p>
                                </div>
                            </div>

                            <!-- Help Card -->
                            <div class="rounded-[2rem] border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                                <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-950">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
                                    </svg>
                                </div>

                                <h4 class="text-lg font-bold">Settings Tip</h4>

                                <p class="mt-2 text-sm leading-6 text-gray-400">
                                    Pastikan nomor WhatsApp memakai format 62 agar tombol chat dan kontak bisa berjalan dengan baik.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </form>

        </div>
    </div>
</x-admin-layout>