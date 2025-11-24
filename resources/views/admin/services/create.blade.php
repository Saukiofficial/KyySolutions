<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Add New Service') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    {{-- PENTING: enctype="multipart/form-data" wajib ada untuk upload file --}}
                    <form method="POST" action="{{ route('admin.services.store') }}" enctype="multipart/form-data">
                        @csrf

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Kolom Kiri: Info Dasar -->
                            <div>
                                <h3 class="text-lg font-semibold mb-4 text-blue-500">Basic Info</h3>

                                <!-- Title -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Service Title</label>
                                    <input type="text" name="title" value="{{ old('title') }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>

                                <!-- Icon -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Lucide Icon Name</label>
                                    <input type="text" name="icon" value="{{ old('icon') }}" placeholder="e.g. Code, Smartphone, Palette" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
                                </div>

                                <!-- Tagline -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Tagline (Highlight)</label>
                                    <input type="text" name="tagline" value="{{ old('tagline') }}" placeholder="e.g. Membangun Kehadiran Digital" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                                </div>

                                <!-- Color Theme -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Color Theme</label>
                                    <select name="color" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                                        <option value="from-blue-600 to-cyan-500">Blue - Cyan (Website)</option>
                                        <option value="from-purple-600 to-pink-500">Purple - Pink (Mobile)</option>
                                        <option value="from-pink-500 to-red-500">Pink - Red (Design)</option>
                                        <option value="from-indigo-500 to-blue-600">Indigo - Blue (Game)</option>
                                        <option value="from-green-500 to-emerald-500">Green - Emerald (Other)</option>
                                        <option value="from-orange-500 to-yellow-500">Orange - Yellow (Other)</option>
                                    </select>
                                </div>

                                <!-- Service Image (NEW) -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Service Image (Optional)</label>
                                    <input type="file" name="image" class="block mt-1 w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300" />
                                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Jika diupload, gambar ini akan menggantikan ilustrasi gradient default.</p>
                                </div>

                                <!-- Description -->
                                <div class="mb-4">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Short Description</label>
                                    <textarea name="description" rows="3" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required>{{ old('description') }}</textarea>
                                </div>
                            </div>

                            <!-- Kolom Kanan: Detail Content -->
                            <div>
                                <h3 class="text-lg font-semibold mb-4 text-blue-500">Detailed Content</h3>

                                <!-- Features -->
                                <div class="mb-6">
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">Features (One per line)</label>
                                    <textarea name="features" rows="5" placeholder="- Responsive Design&#10;- SEO Friendly&#10;- Fast Loading" class="block w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">{{ old('features') }}</textarea>
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Pisahkan setiap fitur dengan baris baru (Enter).</p>
                                </div>

                                <!-- Benefits Repeater (Alpine.js) -->
                                <div x-data="{ benefits: [] }">
                                    <div class="flex justify-between items-center mb-2">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Benefits for Client</label>
                                        <button type="button" @click="benefits.push({title: '', desc: ''})" class="text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded">+ Add Benefit</button>
                                    </div>

                                    <template x-for="(benefit, index) in benefits" :key="index">
                                        <div class="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg mb-3 border border-gray-200 dark:border-gray-600 relative group">
                                            <button type="button" @click="benefits.splice(index, 1)" class="absolute top-2 right-2 text-red-400 hover:text-red-600">&times;</button>

                                            <input type="text" :name="'benefits['+index+'][title]'" x-model="benefit.title" placeholder="Benefit Title (e.g. Kredibilitas)" class="block w-full mb-2 text-sm rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />

                                            <input type="text" :name="'benefits['+index+'][desc]'" x-model="benefit.desc" placeholder="Description..." class="block w-full text-sm rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
                                        </div>
                                    </template>

                                    <div x-show="benefits.length === 0" class="text-sm text-gray-500 dark:text-gray-400 italic">No benefits added yet. Click '+ Add Benefit'.</div>
                                </div>

                            </div>
                        </div>

                        <div class="flex items-center justify-end mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                             <a href="{{ route('admin.services.index') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mr-4">Cancel</a>
                            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out">Save Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
