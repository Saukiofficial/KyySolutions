<x-admin-layout>
    <x-slot name="header">
        {{-- ... Header Code Tetap Sama ... --}}
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ __('Hero Section Manager') }}
                </h2>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Customize your landing page hero section to make a lasting first impression
                </p>
            </div>
            {{-- ... --}}
        </div>
    </x-slot>

    <div class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            {{-- ... Success Message ... --}}
            @if (session('success'))
                <div class="mb-6 relative">
                    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                                    {{ session('success') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            @endif

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <!-- Form Section -->
                <div class="lg:col-span-2">
                    <div class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                            <h3 class="text-lg font-semibold text-white flex items-center">
                                Content Editor
                            </h3>
                        </div>

                        <form method="POST" action="{{ route('admin.hero-sections.update', $heroSection->id) }}" enctype="multipart/form-data" class="p-6 space-y-6">
                            @csrf
                            @method('PUT')

                            {{-- ... Headline, Subheadline, CTA Text Tetap Sama ... --}}
                            <!-- Headline -->
                            <div class="group">
                                <label for="headline" class="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Headline</label>
                                <div class="relative">
                                    <input type="text" name="headline" id="headline" value="{{ old('headline', $heroSection->headline) }}" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:text-white transition-all duration-200 outline-none" placeholder="Enter a compelling headline...">
                                </div>
                            </div>

                            <!-- Subheadline -->
                            <div class="group">
                                <label for="subheadline" class="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subheadline</label>
                                <textarea name="subheadline" id="subheadline" rows="4" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:text-white transition-all duration-200 outline-none resize-none">{{ old('subheadline', $heroSection->subheadline) }}</textarea>
                            </div>

                            <!-- CTA Text -->
                            <div class="group">
                                <label for="cta_text" class="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">CTA Text</label>
                                <div class="relative">
                                    <input type="text" name="cta_text" id="cta_text" value="{{ old('cta_text', $heroSection->cta_text) }}" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:text-white transition-all duration-200 outline-none">
                                </div>
                            </div>

                            <!-- 1. Background Image (Full Screen) -->
                            <div class="group p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <label for="background_image" class="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    <svg class="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                    Global Background Image
                                </label>
                                <div class="relative">
                                    <input type="file" name="background_image" id="background_image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-800 dark:file:text-gray-300 transition-all" accept="image/*">
                                </div>
                                <p class="mt-1 text-xs text-gray-400">Gambar latar belakang utama website.</p>
                            </div>

                            <!-- 2. NEW: Hero Side Image (Kotak Video/Gambar) -->
                            <div class="group p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <label for="hero_image" class="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Side Image / Video Thumbnail
                                </label>
                                <div class="relative">
                                    <input type="file" name="hero_image" id="hero_image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 dark:file:bg-gray-800 dark:file:text-gray-300 transition-all" accept="image/*">
                                </div>
                                <p class="mt-1 text-xs text-gray-400">Gambar yang akan muncul di dalam kotak gradient sebelah kanan.</p>

                                @if ($heroSection->hero_image)
                                    <div class="mt-2 relative w-32 h-20 rounded-lg overflow-hidden border border-gray-300">
                                        <img src="{{ asset('storage/' . $heroSection->hero_image) }}" alt="Current Hero Image" class="w-full h-full object-cover">
                                    </div>
                                @endif
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    Changes will be reflected immediately
                                </div>
                                <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Preview Section -->
                <div class="lg:col-span-1">
                    <!-- ... Preview content tetap sama atau bisa disesuaikan ... -->
                    <div class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Setup</h3>
                        <div class="space-y-4">
                            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <p class="text-xs text-gray-500">Headline</p>
                                <p class="font-medium text-gray-800 dark:text-gray-200 line-clamp-2">{{ $heroSection->headline }}</p>
                            </div>
                            <!-- Tampilkan status gambar -->
                            <div class="grid grid-cols-2 gap-2">
                                <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                                    <p class="text-xs text-gray-500">Background</p>
                                    <p class="text-sm font-bold {{ $heroSection->background_image ? 'text-green-500' : 'text-red-500' }}">
                                        {{ $heroSection->background_image ? 'Uploaded' : 'Default' }}
                                    </p>
                                </div>
                                <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                                    <p class="text-xs text-gray-500">Side Image</p>
                                    <p class="text-sm font-bold {{ $heroSection->hero_image ? 'text-green-500' : 'text-red-500' }}">
                                        {{ $heroSection->hero_image ? 'Uploaded' : 'Default' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</x-admin-layout>
