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
                        Team Editor
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Add New Team Member') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Add a complete team member profile, personal portfolio, skills, and social media links.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.teams.index') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7"/>
                </svg>
                Back
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                    <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                    <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                    <div class="relative">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                            New Member
                        </div>

                        <h3 class="mt-5 text-2xl font-bold tracking-tight">
                            Member Information
                        </h3>

                        <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                            Fill in member details, portfolio profile, skills, programming languages, tools, works, and optional social media links.
                        </p>
                    </div>
                </div>

                <form method="POST"
                      action="{{ route('admin.teams.store') }}"
                      enctype="multipart/form-data"
                      class="space-y-8 p-8">
                    @csrf

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

                        <!-- Basic Info -->
                        <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                            <div class="mb-6 flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Profile
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Basic Info
                                    </h3>
                                </div>

                                <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                                        <circle cx="12" cy="7" r="4" stroke-width="1.8"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="space-y-5">
                                <div>
                                    <label for="name" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Name
                                    </label>

                                    <input id="name"
                                           type="text"
                                           name="name"
                                           value="{{ old('name') }}"
                                           required
                                           autofocus
                                           placeholder="Member name"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('name')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="role" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Role
                                    </label>

                                    <input id="role"
                                           type="text"
                                           name="role"
                                           value="{{ old('role') }}"
                                           required
                                           placeholder="Example: Founder, Designer, Developer"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('role')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="bio" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Bio / About Member
                                    </label>

                                    <textarea id="bio"
                                              name="bio"
                                              rows="5"
                                              placeholder="Ceritakan profil singkat anggota team..."
                                              class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('bio') }}</textarea>

                                    @error('bio')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="email" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Email
                                    </label>

                                    <input id="email"
                                           type="email"
                                           name="email"
                                           value="{{ old('email') }}"
                                           placeholder="email@example.com"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('email')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="location" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Location
                                    </label>

                                    <input id="location"
                                           type="text"
                                           name="location"
                                           value="{{ old('location') }}"
                                           placeholder="Example: Sumenep, Indonesia"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('location')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="experience_years" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Experience
                                    </label>

                                    <input id="experience_years"
                                           type="text"
                                           name="experience_years"
                                           value="{{ old('experience_years') }}"
                                           placeholder="Example: 3+ Years"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">

                                    @error('experience_years')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="photo" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Photo
                                    </label>

                                    <input id="photo"
                                           type="file"
                                           name="photo"
                                           required
                                           accept="image/*"
                                           class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">

                                    <p class="mt-2 text-xs leading-5 text-gray-500">
                                        Upload a clean profile photo. Recommended square image.
                                    </p>

                                    @error('photo')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="space-y-6">
                            <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                                <div class="mb-6 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                            Links
                                        </p>
                                        <h3 class="mt-1 text-lg font-bold text-gray-950">
                                            Social Media
                                        </h3>
                                    </div>

                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13.828 10.172a4 4 0 010 5.656l-2 2a4 4 0 01-5.656-5.656l1-1"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.172 13.828a4 4 0 010-5.656l2-2a4 4 0 015.656 5.656l-1 1"/>
                                        </svg>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Facebook URL
                                        </label>
                                        <input type="url"
                                               name="social_media[facebook]"
                                               placeholder="https://facebook.com/username"
                                               value="{{ old('social_media.facebook') }}"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Instagram URL
                                        </label>
                                        <input type="url"
                                               name="social_media[instagram]"
                                               placeholder="https://instagram.com/username"
                                               value="{{ old('social_media.instagram') }}"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            LinkedIn URL
                                        </label>
                                        <input type="url"
                                               name="social_media[linkedin]"
                                               placeholder="https://linkedin.com/in/username"
                                               value="{{ old('social_media.linkedin') }}"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            X / Twitter URL
                                        </label>
                                        <input type="url"
                                               name="social_media[x-twitter]"
                                               placeholder="https://x.com/username"
                                               value="{{ old('social_media.x-twitter') }}"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    </div>
                                </div>
                            </div>

                            <div class="rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                                <h4 class="text-lg font-bold">Team Detail Tip</h4>
                                <p class="mt-2 text-sm leading-6 text-gray-400">
                                    Isi data skill, bahasa pemrograman, tools, dan karya agar halaman detail team terlihat seperti portfolio pribadi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Personal Portfolio -->
                    <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                        <div class="mb-6">
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Personal Portfolio
                            </p>

                            <h3 class="mt-1 text-lg font-bold text-gray-950">
                                Skills, Programming Languages, Tools & Works
                            </h3>

                            <p class="mt-1 text-sm text-gray-500">
                                Isi satu data per baris. Untuk karya gunakan format:
                                <span class="font-semibold text-gray-800">Judul | Deskripsi | URL</span>
                            </p>
                        </div>

                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-semibold text-gray-800">
                                    Skills
                                </label>

                                <textarea name="skills"
                                          rows="6"
                                          placeholder="UI Design&#10;Frontend Development&#10;Backend Development"
                                          class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('skills') }}</textarea>

                                @error('skills')
                                    <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                @enderror
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-semibold text-gray-800">
                                    Programming Languages
                                </label>

                                <textarea name="programming_languages"
                                          rows="6"
                                          placeholder="JavaScript&#10;PHP&#10;Python&#10;Dart"
                                          class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('programming_languages') }}</textarea>

                                @error('programming_languages')
                                    <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                @enderror
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-semibold text-gray-800">
                                    Tools
                                </label>

                                <textarea name="tools"
                                          rows="6"
                                          placeholder="Laravel&#10;React&#10;Figma&#10;Tailwind CSS"
                                          class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('tools') }}</textarea>

                                @error('tools')
                                    <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                @enderror
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-semibold text-gray-800">
                                    Works / Projects
                                </label>

                                <textarea name="works"
                                          rows="6"
                                          placeholder="Website Company Profile | Membuat website modern untuk brand bisnis | https://example.com&#10;Aplikasi Kasir | Sistem POS untuk toko retail | https://example.com"
                                          class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('works') }}</textarea>

                                <p class="mt-2 text-xs leading-5 text-gray-500">
                                    Contoh: Website Company Profile | Membuat website modern | https://example.com
                                </p>

                                @error('works')
                                    <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                @enderror
                            </div>
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
                                <p class="mt-0.5">Member profile will be saved after submit.</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3">
                            <a href="{{ route('admin.teams.index') }}"
                               class="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950">
                                Cancel
                            </a>

                            <button type="submit"
                                    class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                Save Member
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