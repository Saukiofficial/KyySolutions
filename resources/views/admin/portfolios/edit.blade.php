<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Edit Portfolio') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form method="POST" action="{{ route('admin.portfolios.update', $portfolio->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <!-- KIRI: Info Dasar -->
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Project Title</label>
                                    <input type="text" name="title" value="{{ old('title', $portfolio->title) }}" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Client Name</label>
                                    <input type="text" name="client_name" value="{{ old('client_name', $portfolio->client_name) }}" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Category</label>
                                    <select name="category" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        @foreach($categories as $cat)
                                            <option value="{{ $cat }}" {{ $portfolio->category == $cat ? 'selected' : '' }}>{{ $cat }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Short Description (Card)</label>
                                    <textarea name="description" rows="4" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>{{ old('description', $portfolio->description) }}</textarea>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Main Thumbnail</label>
                                    @if($portfolio->image)
                                        <div class="mb-2">
                                            <img src="{{ asset('storage/' . $portfolio->image) }}" class="h-32 w-auto rounded border border-gray-600" />
                                        </div>
                                    @endif
                                    <input type="file" name="image" class="w-full text-sm border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white cursor-pointer p-2" />
                                    <p class="text-xs text-gray-500 mt-1">Upload baru untuk mengganti thumbnail utama.</p>
                                </div>
                            </div>

                            <!-- KANAN: Detail & Galeri -->
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Technologies Used</label>
                                    <input type="text" name="technologies" value="{{ is_array($portfolio->technologies) ? implode(', ', $portfolio->technologies) : $portfolio->technologies }}" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="e.g. Laravel, React" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Key Features (One per line)</label>
                                    <textarea name="features" rows="5" class="w-full rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">{{ is_array($portfolio->features) ? implode("\n", $portfolio->features) : $portfolio->features }}</textarea>
                                </div>

                                <!-- MANAGE GALLERY -->
                                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-300 dark:border-gray-600">
                                    <label class="block text-sm font-bold mb-3 text-indigo-600 dark:text-indigo-400">Manage Project Gallery</label>

                                    <!-- List Gambar Lama -->
                                    @if($portfolio->gallery && count($portfolio->gallery) > 0)
                                        <div class="grid grid-cols-3 gap-2 mb-4">
                                            @foreach($portfolio->gallery as $galImg)
                                                <div class="relative group border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden h-24">
                                                    <img src="{{ asset('storage/' . $galImg) }}" class="w-full h-full object-cover" />

                                                    {{-- Checkbox Hapus (Muncul saat hover) --}}
                                                    <label class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                                        <input type="checkbox" name="remove_gallery_images[]" value="{{ $galImg }}" class="form-checkbox h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500" />
                                                        <span class="text-white text-xs font-bold mt-1">HAPUS</span>
                                                    </label>
                                                </div>
                                            @endforeach
                                        </div>
                                        <p class="text-xs text-red-400 mb-4">*Centang gambar di atas jika ingin menghapusnya.</p>
                                    @else
                                        <p class="text-sm text-gray-500 italic mb-4">Belum ada gambar galeri tambahan.</p>
                                    @endif

                                    <!-- Upload Baru -->
                                    <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Add More Images</label>
                                    <input type="file" name="gallery[]" multiple class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-600 dark:file:text-white" />
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-end pt-6 border-t border-gray-700">
                            <button type="submit" class="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 font-bold shadow-lg transition-all">
                                Update Portfolio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
