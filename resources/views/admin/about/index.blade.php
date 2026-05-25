<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Content Management
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('About Section') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage your company story, description, and website identity.
                    </p>
                </div>
            </div>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-6xl space-y-6 sm:px-6 lg:px-8">

            @if(session('success'))
                <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-white">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-950">{{ session('success') }}</p>
                            <p class="mt-1 text-sm text-gray-500">
                                Your changes have been saved and published successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <!-- Premium Header -->
                <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-10 text-white">
                    <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10"></div>
                    <div class="absolute -bottom-20 left-16 h-48 w-48 rounded-full bg-white/5"></div>

                    <div class="relative">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                            Website Content Editor
                        </div>

                        <h3 class="mt-5 text-3xl font-bold tracking-tight">
                            Edit About Section
                        </h3>

                        <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                            Update your company story with a clean, professional, and premium admin interface.
                        </p>
                    </div>
                </div>

                <form method="POST"
                      action="{{ route('admin.about-sections.update', $aboutSection->id) }}"
                      enctype="multipart/form-data"
                      class="space-y-8 p-8">
                    @csrf
                    @method('PUT')

                    <!-- Title -->
                    <div>
                        <label for="title" class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                </svg>
                            </span>
                            {{ __('Section Title') }}
                        </label>

                        <input
                            id="title"
                            type="text"
                            name="title"
                            value="{{ old('title', $aboutSection->title) }}"
                            required
                            autofocus
                            class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                            placeholder="Enter section title..."
                        />

                        @error('title')
                            <div class="mt-3 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <!-- Description -->
                    <div>
                        <label for="description" class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h7"></path>
                                </svg>
                            </span>
                            {{ __('Description') }}
                        </label>

                        <div class="relative">
                            <textarea
                                id="description"
                                name="description"
                                rows="7"
                                class="block w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5"
                                placeholder="Write your company story..."
                            >{{ old('description', $aboutSection->description) }}</textarea>

                            <div class="absolute bottom-4 right-4 rounded-xl border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                                <span id="char-count">{{ strlen($aboutSection->description ?? '') }}</span> characters
                            </div>
                        </div>

                        @error('description')
                            <div class="mt-3 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <!-- Image Upload -->
                    <div class="space-y-4">
                        <label class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-950">
                            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </span>
                            {{ __('Illustration Image') }}
                        </label>

                        <div class="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-2">
                            <div class="group relative overflow-hidden rounded-2xl bg-white">
                                @if($aboutSection->illustration)
                                    <img id="image-preview"
                                         src="{{ Storage::url($aboutSection->illustration) }}"
                                         alt="Current Illustration"
                                         class="h-80 w-full object-cover">
                                @else
                                    <img id="image-preview"
                                         src="https://placehold.co/1200x600/f3f4f6/111827?text=Upload+Your+Image"
                                         alt="No Image"
                                         class="h-80 w-full object-cover">
                                @endif

                                <div class="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                                <div class="absolute bottom-5 left-5 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div class="rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                                        <p class="text-sm font-bold text-gray-950">Current Image Preview</p>
                                        <p class="text-xs text-gray-500">Hover preview mode</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input
                            id="illustration"
                            type="file"
                            name="illustration"
                            class="hidden"
                            onchange="previewImage(event)"
                            accept="image/*"
                        >

                        <label
                            for="illustration"
                            class="group flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                            <svg class="h-5 w-5 transition group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            Choose New Image
                        </label>

                        @error('illustration')
                            <div class="flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                {{ $message }}
                            </div>
                        @enderror

                        <div class="flex items-start gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
                            <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>
                                Recommended image size: 1200x600px or larger. Supported format: JPG, PNG, WEBP.
                            </span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-start gap-3 text-sm text-gray-500">
                            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700">Published immediately</p>
                                <p class="mt-0.5">Changes will appear on your website after saving.</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                            {{ __('Save Changes') }}
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Info Cards -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-950 text-white">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-950">Quick Save</h4>
                    <p class="mt-2 text-sm leading-6 text-gray-500">
                        Save content faster with a simple and focused editor.
                    </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-800 text-white">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-950">Secure</h4>
                    <p class="mt-2 text-sm leading-6 text-gray-500">
                        Your uploaded image and text are safely stored.
                    </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-700 text-white">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-950">Responsive</h4>
                    <p class="mt-2 text-sm leading-6 text-gray-500">
                        The admin layout stays clean on desktop and mobile.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <script>
        function previewImage(event) {
            const file = event.target.files[0];

            if (!file) {
                return;
            }

            const reader = new FileReader();

            reader.onload = function () {
                const output = document.getElementById('image-preview');

                if (output) {
                    output.src = reader.result;
                }
            };

            reader.readAsDataURL(file);
        }

        const textarea = document.getElementById('description');
        const charCount = document.getElementById('char-count');

        if (textarea && charCount) {
            textarea.addEventListener('input', function () {
                charCount.textContent = this.value.length;
            });
        }
    </script>
</x-admin-layout>