<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Edit Team Member') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <h3 class="text-lg font-semibold mb-4">Edit {{ $team->name }}'s Information</h3>

                    <form method="POST" action="{{ route('admin.teams.update', $team->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <!-- Name -->
                        <div class="mb-4">
                            <label for="name" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Name</label>
                            <input id="name" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" type="text" name="name" value="{{ old('name', $team->name) }}" required autofocus />
                            @error('name')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Role -->
                        <div class="mb-4">
                            <label for="role" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Role</label>
                            <input id="role" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" type="text" name="role" value="{{ old('role', $team->role) }}" required />
                            @error('role')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Photo -->
                        <div class="mb-4">
                            <label for="photo" class="block font-medium text-sm text-gray-700 dark:text-gray-300">Photo</label>
                             @if($team->photo)
                                <img src="{{ asset('storage/' . $team->photo) }}" alt="Current Photo" class="h-20 w-20 rounded-full object-cover my-2">
                            @endif
                            <input id="photo" class="block mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" type="file" name="photo" />
                             <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Leave blank if you don't want to change it.</p>
                            @error('photo')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Social Media -->
                        <div class="mt-6">
                            <h4 class="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">Social Media Links (Optional)</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="url" name="social_media[facebook]" placeholder="Facebook URL" value="{{ old('social_media.facebook', $team->social_media['facebook'] ?? '') }}" class="block w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                <input type="url" name="social_media[instagram]" placeholder="Instagram URL" value="{{ old('social_media.instagram', $team->social_media['instagram'] ?? '') }}" class="block w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                <input type="url" name="social_media[linkedin]" placeholder="LinkedIn URL" value="{{ old('social_media.linkedin', $team->social_media['linkedin'] ?? '') }}" class="block w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                <input type="url" name="social_media[x-twitter]" placeholder="X (Twitter) URL" value="{{ old('social_media.x-twitter', $team->social_media['x-twitter'] ?? '') }}" class="block w-full rounded-md shadow-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                            </div>
                        </div>

                        <div class="flex items-center justify-end mt-6">
                            <a href="{{ route('admin.teams.index') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                                Cancel
                            </a>
                            <button type="submit" class="ml-4 px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Update Member
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
