<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Settings Manager') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    @if(session('success'))
                        <div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                            {{ session('success') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('admin.settings.update', $setting->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Company Name -->
                            <div class="md:col-span-2">
                                <label for="company_name" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Company Name') }}</label>
                                <input id="company_name" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="text" name="company_name" value="{{ old('company_name', $setting->company_name) }}" required />
                                @error('company_name')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>

                            <!-- Address -->
                            <div>
                                <label for="address" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Address') }}</label>
                                <input id="address" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="text" name="address" value="{{ old('address', $setting->address) }}" />
                                @error('address')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="email" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Email') }}</label>
                                <input id="email" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="email" name="email" value="{{ old('email', $setting->email) }}" />
                                @error('email')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>

                            <!-- Phone -->
                            <div>
                                <label for="phone" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Phone') }}</label>
                                <input id="phone" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="text" name="phone" value="{{ old('phone', $setting->phone) }}" />
                                @error('phone')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>

                            <!-- Social Media Links -->
                            @php
                                $socials = is_array($setting->social_media) ? $setting->social_media : json_decode($setting->social_media, true) ?? [];
                            @endphp
                            <div>
                                <label for="facebook" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Facebook URL') }}</label>
                                <input id="facebook" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="url" name="social_media[facebook]" value="{{ old('social_media.facebook', $socials['facebook'] ?? '') }}" />
                            </div>
                             <div>
                                <label for="instagram" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Instagram URL') }}</label>
                                <input id="instagram" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="url" name="social_media[instagram]" value="{{ old('social_media.instagram', $socials['instagram'] ?? '') }}" />
                            </div>
                             <div>
                                <label for="linkedin" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('LinkedIn URL') }}</label>
                                <input id="linkedin" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700" type="url" name="social_media[linkedin]" value="{{ old('social_media.linkedin', $socials['linkedin'] ?? '') }}" />
                            </div>

                            <!-- Logo -->
                            <div class="md:col-span-1">
                                <label for="logo" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Logo') }}</label>
                                <input id="logo" type="file" name="logo" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600" onchange="previewLogo(event)">
                                @if($setting->logo)
                                    <div class="mt-2">
                                        <img id="logo-preview" src="{{ Storage::url($setting->logo) }}" alt="Logo Preview" class="h-20 w-auto rounded-md bg-gray-200 p-2">
                                    </div>
                                @else
                                     <div class="mt-2">
                                        <img id="logo-preview" src="https://placehold.co/200x80/EBF4FF/7F9CF5?text=Logo" alt="Logo Preview" class="h-20 w-auto rounded-md bg-gray-200 p-2">
                                    </div>
                                @endif
                                @error('logo')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>

                            <!-- Favicon -->
                            <div class="md:col-span-1">
                                <label for="favicon" class="block font-medium text-sm text-gray-700 dark:text-gray-300">{{ __('Favicon') }}</label>
                                <input id="favicon" type="file" name="favicon" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600" onchange="previewFavicon(event)">
                                @if($setting->favicon)
                                    <div class="mt-2">
                                        <img id="favicon-preview" src="{{ Storage::url($setting->favicon) }}" alt="Favicon Preview" class="h-20 w-20 rounded-md bg-gray-200 p-2">
                                    </div>
                                @else
                                    <div class="mt-2">
                                        <img id="favicon-preview" src="https://placehold.co/80x80/EBF4FF/7F9CF5?text=Favicon" alt="Favicon Preview" class="h-20 w-20 rounded-md bg-gray-200 p-2">
                                    </div>
                                @endif
                                @error('favicon')<p class="text-sm text-red-600 mt-2">{{ $message }}</p>@enderror
                            </div>
                        </div>

                        <div class="flex items-center justify-end mt-6">
                            <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                {{ __('Save Changes') }}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <script>
        function previewLogo(event) {
            const reader = new FileReader();
            reader.onload = function(){
                const output = document.getElementById('logo-preview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        function previewFavicon(event) {
            const reader = new FileReader();
            reader.onload = function(){
                const output = document.getElementById('favicon-preview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>
</x-admin-layout>

