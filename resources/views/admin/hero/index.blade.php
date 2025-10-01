<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Hero Section Manager') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    @if (session('success'))
                        <div class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">Success!</strong>
                            <span class="block sm:inline">{{ session('success') }}</span>
                        </div>
                    @endif

                    <form method="POST" action="{{ route('admin.hero-sections.update', $heroSection->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <!-- Headline -->
                        <div class="mb-4">
                            <label for="headline" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Headline</label>
                            <input type="text" name="headline" id="headline" value="{{ old('headline', $heroSection->headline) }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            @error('headline')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Subheadline -->
                        <div class="mb-4">
                            <label for="subheadline" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subheadline</label>
                            <textarea name="subheadline" id="subheadline" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">{{ old('subheadline', $heroSection->subheadline) }}</textarea>
                            @error('subheadline')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- CTA Text -->
                        <div class="mb-4">
                            <label for="cta_text" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Call to Action Text</label>
                            <input type="text" name="cta_text" id="cta_text" value="{{ old('cta_text', $heroSection->cta_text) }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            @error('cta_text')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Background Image -->
                        <div class="mb-6">
                            <label for="background_image" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Background Image</label>
                            <input type="file" name="background_image" id="background_image" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200">
                             @error('background_image')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                            @if ($heroSection->background_image)
                                <div class="mt-4">
                                    <p class="text-sm text-gray-500">Current Image:</p>
                                    <img src="{{ asset('storage/' . $heroSection->background_image) }}" alt="Background" class="mt-2 h-32 w-auto rounded-lg">
                                </div>
                            @endif
                        </div>

                        <div class="flex items-center justify-end">
                            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Save Changes
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</x-admin-layout>

