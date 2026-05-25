<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Landing Page Editor
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Hero Section Manager') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Customize your landing page hero section with a clean premium interface.
                    </p>
                </div>
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
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-950">
                                {{ session('success') }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                                Hero section has been updated successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

                <!-- Form Section -->
                <div class="lg:col-span-2">
                    <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                        <!-- Card Header -->
                        <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                            <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                            <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                            <div class="relative">
                                <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                                    <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                    Content Editor
                                </div>

                                <h3 class="mt-5 text-2xl font-bold tracking-tight">
                                    Edit Hero Content
                                </h3>

                                <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                                    Manage headline, subheadline, CTA text, background image, and side hero image.
                                </p>
                            </div>
                        </div>

                        <form method="POST"
                              action="{{ route('admin.hero-sections.update', $heroSection->id) }}"
                              enctype="multipart/form-data"
                              class="space-y-7 p-8">
                            @csrf
                            @method('PUT')

                            <!-- Headline -->
                            <div>
                                <label for="headline" class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                                    <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 8h10M7 12h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                    </span>
                                    Headline
                                </label>

                                <input
                                    type="text"
                                    name="headline"
                                    id="headline"
                                    value="{{ old('headline', $heroSection->headline) }}"
                                    class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                                    placeholder="Enter a compelling headline..."
                                >
                            </div>

                            <!-- Subheadline -->
                            <div>
                                <label for="subheadline" class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                                    <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h7"/>
                                        </svg>
                                    </span>
                                    Subheadline
                                </label>

                                <textarea
                                    name="subheadline"
                                    id="subheadline"
                                    rows="5"
                                    class="block w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                                    placeholder="Write a short supporting sentence..."
                                >{{ old('subheadline', $heroSection->subheadline) }}</textarea>
                            </div>

                            <!-- CTA Text -->
                            <div>
                                <label for="cta_text" class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                                    <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                        </svg>
                                    </span>
                                    CTA Text
                                </label>

                                <input
                                    type="text"
                                    name="cta_text"
                                    id="cta_text"
                                    value="{{ old('cta_text', $heroSection->cta_text) }}"
                                    class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                                    placeholder="Example: Get Started"
                                >
                            </div>

                            <!-- Upload Section -->
                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">

                                <!-- Background Image -->
                                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                    <div class="mb-4 flex items-start justify-between gap-4">
                                        <div>
                                            <label for="background_image" class="flex items-center gap-2 text-sm font-bold text-gray-950">
                                                <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                    </svg>
                                                </span>
                                                Global Background
                                            </label>

                                            <p class="mt-2 text-xs leading-5 text-gray-500">
                                                Main website background image.
                                            </p>
                                        </div>

                                        <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                                            Image
                                        </span>
                                    </div>

                                    <input
                                        type="file"
                                        name="background_image"
                                        id="background_image"
                                        accept="image/*"
                                        class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800"
                                    >
                                </div>

                                <!-- Hero Side Image -->
                                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                                    <div class="mb-4 flex items-start justify-between gap-4">
                                        <div>
                                            <label for="hero_image" class="flex items-center gap-2 text-sm font-bold text-gray-950">
                                                <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                </span>
                                                Side Image / Thumbnail
                                            </label>

                                            <p class="mt-2 text-xs leading-5 text-gray-500">
                                                Image shown inside hero visual box.
                                            </p>
                                        </div>

                                        <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                                            Preview
                                        </span>
                                    </div>

                                    <input
                                        type="file"
                                        name="hero_image"
                                        id="hero_image"
                                        accept="image/*"
                                        class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800"
                                    >

                                    @if ($heroSection->hero_image)
                                        <div class="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
                                            <img
                                                src="{{ asset('storage/' . $heroSection->hero_image) }}"
                                                alt="Current Hero Image"
                                                class="h-28 w-full rounded-xl object-cover"
                                            >
                                        </div>
                                    @endif
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <div class="flex items-start gap-3 text-sm text-gray-500">
                                    <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>

                                    <div>
                                        <p class="font-semibold text-gray-700">Instant update</p>
                                        <p class="mt-0.5">Changes will be reflected immediately on your website.</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                    Save Changes
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Preview Section -->
                <div class="lg:col-span-1">
                    <div class="sticky top-6 space-y-6">

                        <!-- Current Setup -->
                        <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                            <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                            Preview
                                        </p>
                                        <h3 class="mt-1 text-lg font-bold text-gray-950">
                                            Current Setup
                                        </h3>
                                    </div>

                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-950 text-white">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 p-6">
                                <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        Headline
                                    </p>
                                    <p class="mt-2 line-clamp-3 text-sm font-semibold leading-6 text-gray-900">
                                        {{ $heroSection->headline }}
                                    </p>
                                </div>

                                <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        CTA Text
                                    </p>
                                    <p class="mt-2 text-sm font-semibold text-gray-900">
                                        {{ $heroSection->cta_text ?: 'Not set' }}
                                    </p>
                                </div>

                                <div class="grid grid-cols-2 gap-3">
                                    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
                                        <p class="text-xs font-medium text-gray-500">
                                            Background
                                        </p>

                                        @if ($heroSection->background_image)
                                            <p class="mt-2 rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                                Uploaded
                                            </p>
                                        @else
                                            <p class="mt-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600">
                                                Default
                                            </p>
                                        @endif
                                    </div>

                                    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
                                        <p class="text-xs font-medium text-gray-500">
                                            Side Image
                                        </p>

                                        @if ($heroSection->hero_image)
                                            <p class="mt-2 rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                                Uploaded
                                            </p>
                                        @else
                                            <p class="mt-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600">
                                                Default
                                            </p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Helper Card -->
                        <div class="rounded-[2rem] border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-950">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
                                </svg>
                            </div>

                            <h4 class="text-lg font-bold">
                                Design Tip
                            </h4>

                            <p class="mt-2 text-sm leading-6 text-gray-400">
                                Use a short headline, clear CTA, and high-quality image for a more premium landing page impression.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</x-admin-layout>