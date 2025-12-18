<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Add New Portfolio') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    <form method="POST" action="{{ route('admin.portfolios.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <!-- KIRI: Info Dasar -->
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Project Title</label>
                                    <input type="text" name="title" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required placeholder="Judul Proyek..." />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Client Name</label>
                                    <input type="text" name="client_name" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Nama Klien..." />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Category</label>
                                    <select name="category" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        @foreach($categories as $cat)
                                            <option value="{{ $cat }}">{{ $cat }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Short Description (Card)</label>
                                    <textarea name="description" rows="4" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required placeholder="Deskripsi singkat..."></textarea>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Main Thumbnail</label>
                                    <input type="file" name="image" class="w-full text-sm border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white cursor-pointer p-2" required />
                                    <p class="text-xs text-gray-500 mt-1">Gambar utama yang muncul di halaman depan.</p>
                                </div>
                            </div>

                            <!-- KANAN: Detail & Galeri -->
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Technologies Used</label>
                                    <input type="text" name="technologies" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g. Laravel, React, Tailwind (Pisahkan dengan koma)" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Key Features (One per line)</label>
                                    <textarea name="features" rows="5" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="- Login System&#10;- Payment Gateway&#10;- Realtime Chat"></textarea>
                                    <p class="text-xs text-gray-500 mt-1">Pisahkan setiap fitur dengan baris baru (Enter).</p>
                                </div>

                                <!-- PROJECT GALLERY UPLOAD -->
                                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
                                    <label class="block text-sm font-bold mb-2 text-indigo-600 dark:text-indigo-400">Project Gallery (Multiple)</label>
                                    <input type="file" name="gallery[]" multiple class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-600 dark:file:text-white" />
                                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Anda bisa memilih <strong>banyak gambar sekaligus</strong> (Ctrl+Click). Gambar-gambar ini akan ditampilkan di halaman detail sebagai galeri showcase.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-end pt-6 border-t border-gray-700">
                            <button type="submit" class="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 font-bold shadow-lg transition-all transform hover:scale-105">
                                Save Portfolio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
