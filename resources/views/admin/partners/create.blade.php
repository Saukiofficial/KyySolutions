<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Partner Editor
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Add New Partner') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Add a new partner or client logo to your website partner section.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.partners.index') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7"/>
                </svg>
                Back
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                    <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                    <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                    <div class="relative">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                            New Partner
                        </div>

                        <h3 class="mt-5 text-2xl font-bold tracking-tight">
                            Partner Information
                        </h3>

                        <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                            Upload a clean company logo and partner name for your website showcase.
                        </p>
                    </div>
                </div>

                <form method="POST"
                      action="{{ route('admin.partners.store') }}"
                      enctype="multipart/form-data"
                      class="space-y-8 p-8">
                    @csrf

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

                        <div class="lg:col-span-2 rounded-3xl border border-gray-200 bg-gray-50 p-6">
                            <div class="mb-6 flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Partner
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Basic Info
                                    </h3>
                                </div>

                                <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="space-y-5">
                                <div>
                                    <label for="name" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Partner Name
                                    </label>

                                    <input id="name"
                                           type="text"
                                           name="name"
                                           value="{{ old('name') }}"
                                           required
                                           autofocus
                                           placeholder="Example: Google, Microsoft, Client Name"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('name')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="logo" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Company Logo
                                    </label>

                                    <input id="logo"
                                           type="file"
                                           name="logo"
                                           required
                                           accept="image/*,.svg"
                                           class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">

                                    <p class="mt-2 text-xs leading-5 text-gray-500">
                                        Format: PNG, JPG, SVG. Transparent background recommended. Max: 2MB.
                                    </p>

                                    @error('logo')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-950">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
                                </svg>
                            </div>

                            <h4 class="text-lg font-bold">Logo Tip</h4>
                            <p class="mt-2 text-sm leading-6 text-gray-400">
                                Gunakan logo transparan agar tampil lebih rapi di background putih maupun gelap.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-start gap-3 text-sm text-gray-500">
                            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8"/>
                                </svg>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700">Ready to publish</p>
                                <p class="mt-0.5">Partner logo will be saved after submit.</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3">
                            <a href="{{ route('admin.partners.index') }}"
                               class="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950">
                                Cancel
                            </a>

                            <button type="submit"
                                    class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                Save Partner
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</x-admin-layout>