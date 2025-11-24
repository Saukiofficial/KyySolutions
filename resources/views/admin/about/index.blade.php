<x-admin-layout>
    <x-slot name="header">
        <div class="flex items-center space-x-3">
            <div class="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div>
                <h2 class="font-bold text-2xl text-gray-900 dark:text-white">
                    {{ __('About Section') }}
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Manage your company story and identity</p>
            </div>
        </div>
    </x-slot>

    <div class="py-8">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">

            @if(session('success'))
                <div class="mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div class="relative flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <div class="p-2 bg-white/20 rounded-full backdrop-blur-lg">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p class="text-white font-semibold text-lg">{{ session('success') }}</p>
                            <p class="text-emerald-50 text-sm">Your changes have been saved successfully</p>
                        </div>
                    </div>
                </div>
            @endif

            <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">

                <!-- Header Section -->
                <div class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-12">
                    <div class="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div class="relative">
                        <div class="flex items-center space-x-3 mb-4">
                            <div class="px-4 py-1.5 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
                                <p class="text-white text-sm font-semibold">Content Management</p>
                            </div>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">Edit About Section</h3>
                        <p class="text-indigo-100 text-lg">Craft your company's story and make a lasting impression</p>
                    </div>
                </div>

                <form method="POST" action="{{ route('admin.about-sections.update', $aboutSection->id) }}" enctype="multipart/form-data" class="p-8 space-y-8">
                    @csrf
                    @method('PUT')

                    <!-- Title Input -->
                    <div class="group">
                        <label for="title" class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white mb-3">
                            <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                            <span>{{ __('Section Title') }}</span>
                        </label>
                        <div class="relative">
                            <input
                                id="title"
                                type="text"
                                name="title"
                                value="{{ old('title', $aboutSection->title) }}"
                                required
                                autofocus
                                class="block w-full px-5 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200 font-medium placeholder:text-gray-400"
                                placeholder="Enter a compelling title..."
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                                <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                            </div>
                        </div>
                        @error('title')
                            <div class="flex items-center space-x-2 mt-2 text-red-600 dark:text-red-400">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <p class="text-sm font-medium">{{ $message }}</p>
                            </div>
                        @enderror
                    </div>

                    <!-- Description Textarea -->
                    <div class="group">
                        <label for="description" class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white mb-3">
                            <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
                            </svg>
                            <span>{{ __('Description') }}</span>
                        </label>
                        <div class="relative">
                            <textarea
                                id="description"
                                name="description"
                                rows="6"
                                class="block w-full px-5 py-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-200 font-medium placeholder:text-gray-400 resize-none"
                                placeholder="Tell your company's story in a compelling way..."
                            >{{ old('description', $aboutSection->description) }}</textarea>
                            <div class="absolute bottom-4 right-4 px-3 py-1 bg-gray-200/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg">
                                <p class="text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <span id="char-count">{{ strlen($aboutSection->description ?? '') }}</span> characters
                                </p>
                            </div>
                        </div>
                        @error('description')
                            <div class="flex items-center space-x-2 mt-2 text-red-600 dark:text-red-400">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <p class="text-sm font-medium">{{ $message }}</p>
                            </div>
                        @enderror
                    </div>

                    <!-- Image Upload Section -->
                    <div class="space-y-4">
                        <label class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white">
                            <svg class="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{{ __('Illustration Image') }}</span>
                        </label>

                        <!-- Image Preview -->
                        <div class="relative group/preview">
                            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-1">
                                <div class="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800">
                                    @if($aboutSection->illustration)
                                        <img id="image-preview" src="{{ Storage::url($aboutSection->illustration) }}" alt="Current Illustration" class="w-full h-80 object-cover">
                                    @else
                                        <img id="image-preview" src="https://placehold.co/1200x600/EBF4FF/7F9CF5?text=Upload+Your+Image" alt="No Image" class="w-full h-80 object-cover">
                                    @endif
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300"></div>
                                    <div class="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover/preview:translate-y-0 group-hover/preview:opacity-100 transition-all duration-300">
                                        <div class="flex items-center justify-between">
                                            <div class="px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg">
                                                <p class="text-sm font-semibold text-gray-900">Current Image</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Upload Button -->
                        <div class="relative">
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
                                class="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-2xl cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
                            >
                                <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <span>Choose New Image</span>
                            </label>
                        </div>

                        @error('illustration')
                            <div class="flex items-center space-x-2 text-red-600 dark:text-red-400">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <p class="text-sm font-medium">{{ $message }}</p>
                            </div>
                        @enderror

                        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Recommended: High-quality images (1200x600px or larger) in JPG, PNG format</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            <span>Your changes will be published immediately</span>
                        </div>

                        <button
                            type="submit"
                            class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                        >
                            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <div class="relative flex items-center space-x-2">
                                <span>{{ __('Save Changes') }}</span>
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>

            </div>

            <!-- Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-blue-100 dark:border-gray-700">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="p-2 bg-blue-500 rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h4 class="font-bold text-gray-900 dark:text-white">Quick Save</h4>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Changes are published instantly to your website</p>
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-purple-100 dark:border-gray-700">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="p-2 bg-purple-500 rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h4 class="font-bold text-gray-900 dark:text-white">Secure</h4>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Your data is encrypted and safely stored</p>
                </div>

                <div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-emerald-100 dark:border-gray-700">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="p-2 bg-emerald-500 rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                        </div>
                        <h4 class="font-bold text-gray-900 dark:text-white">Responsive</h4>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Looks great on all devices automatically</p>
                </div>
            </div>

        </div>
    </div>

    <script>
        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function(){
                const output = document.getElementById('image-preview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        // Character counter
        const textarea = document.getElementById('description');
        const charCount = document.getElementById('char-count');

        if (textarea && charCount) {
            textarea.addEventListener('input', function() {
                charCount.textContent = this.value.length;
            });
        }
    </script>

    <style>
        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slide-in-from-top-4 {
            from {
                transform: translateY(-1rem);
            }
            to {
                transform: translateY(0);
            }
        }

        .animate-in {
            animation: fade-in 0.5s ease-out;
        }

        .fade-in {
            animation-name: fade-in;
        }

        .slide-in-from-top-4 {
            animation-name: slide-in-from-top-4;
        }

        .duration-500 {
            animation-duration: 500ms;
        }

        .bg-grid-white\/10 {
            background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px);
            opacity: 0.1;
        }
    </style>
</x-admin-layout>
