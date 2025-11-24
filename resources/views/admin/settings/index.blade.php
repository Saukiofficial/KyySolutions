<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Website Settings') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    <form method="POST" action="{{ route('admin.settings.update', $setting->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <!-- General Settings -->
                            <div>
                                <h3 class="text-lg font-semibold mb-4 text-blue-500">General Information</h3>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Company Name</label>
                                    <input type="text" name="company_name" value="{{ old('company_name', $setting->company_name) }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" />
                                </div>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Phone (WhatsApp)</label>
                                    <input type="text" name="phone" value="{{ old('phone', $setting->phone) }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" placeholder="628..." />
                                </div>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Footer Text</label>
                                    <textarea name="footer_text" rows="3" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300">{{ old('footer_text', $setting->footer_text) }}</textarea>
                                </div>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Logo</label>
                                    @if($setting->logo)
                                        <img src="{{ asset('storage/' . $setting->logo) }}" class="h-12 mb-2 bg-gray-100 rounded p-1" />
                                    @endif
                                    <input type="file" name="logo" class="block mt-1 w-full text-sm text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>

                            <!-- Live Chat Settings -->
                            <div>
                                <h3 class="text-lg font-semibold mb-4 text-green-500">Live Chat (tawk.to)</h3>
                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                        Daftar di <a href="https://tawk.to" target="_blank" class="text-blue-500 underline">tawk.to</a>, lalu ambil ID dari URL Direct Chat Link.
                                        <br>Contoh URL: https://tawk.to/chat/<strong>PROPERTY_ID</strong>/<strong>WIDGET_ID</strong>
                                    </p>
                                </div>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Property ID</label>
                                    <input type="text" name="tawk_property_id" value="{{ old('tawk_property_id', $setting->tawk_property_id) }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" placeholder="Contoh: 65a123..." />
                                </div>

                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Widget ID</label>
                                    <input type="text" name="tawk_widget_id" value="{{ old('tawk_widget_id', $setting->tawk_widget_id) }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" placeholder="Contoh: 1hk..." />
                                </div>

                                <!-- TOMBOL SHORTCUT KE DASHBOARD CHAT -->
                                <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                                    <a href="https://dashboard.tawk.to" target="_blank" class="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-lg">
                                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Buka Inbox Chat
                                    </a>
                                    <p class="text-xs text-center text-gray-500 mt-2">Klik untuk membalas pesan pengunjung</p>
                                </div>
                            </div>

                        </div>

                        <div class="flex items-center justify-end mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Settings</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
