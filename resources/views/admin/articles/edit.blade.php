<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Edit Article') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    <form method="POST" action="{{ route('admin.articles.update', $article->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <!-- KIRI: Konten Utama -->
                            <div class="md:col-span-2 space-y-6">
                                <div>
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Article Title</label>
                                    <input type="text" name="title" value="{{ old('title', $article->title) }}" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500" required />
                                </div>

                                <div>
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Content</label>
                                    <textarea name="content" rows="20" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500" required>{{ old('content', $article->content) }}</textarea>
                                </div>
                            </div>

                            <!-- KANAN: Sidebar -->
                            <div class="space-y-8">

                                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                                    <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Publishing</h3>

                                    <div class="mb-4">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Category</label>
                                        <select name="category" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500">
                                            @foreach(['Technology', 'Business', 'Tips & Trick', 'Company News'] as $cat)
                                                <option value="{{ $cat }}" {{ $article->category == $cat ? 'selected' : '' }}>{{ $cat }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="mb-4">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Thumbnail Image</label>
                                        @if($article->thumbnail)
                                            <div class="mb-2">
                                                <img src="{{ asset('storage/' . $article->thumbnail) }}" alt="Current Thumbnail" class="h-24 w-full object-cover rounded-md">
                                            </div>
                                        @endif
                                        <input type="file" name="thumbnail" class="block mt-1 w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-300" />
                                    </div>

                                    <button type="submit" class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg transition-all">
                                        Update Article
                                    </button>
                                </div>


                                <div class="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-200 dark:border-yellow-700">
                                    <h3 class="text-sm font-bold text-yellow-800 dark:text-yellow-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                                        Sidebar Promo
                                    </h3>
                                    <p class="text-xs text-yellow-700 dark:text-yellow-400 mb-4">
                                        Banner ini akan muncul di sidebar halaman berita.
                                    </p>

                                    <div class="space-y-4">
                                        <div>
                                            <label class="block font-medium text-xs text-gray-600 dark:text-gray-400">Promo Title</label>
                                            <input type="text" name="promo_title" value="{{ old('promo_title', $article->promo_title) }}" class="block mt-1 w-full text-sm rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" placeholder="Judul Promo..." />
                                        </div>

                                        <div>
                                            <label class="block font-medium text-xs text-gray-600 dark:text-gray-400">Link Tujuan</label>
                                            <input type="text" name="promo_link" value="{{ old('promo_link', $article->promo_link) }}" class="block mt-1 w-full text-sm rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-300" placeholder="https://..." />
                                        </div>

                                        <div>
                                            <label class="block font-medium text-xs text-gray-600 dark:text-gray-400">Promo Image</label>
                                            @if($article->promo_image)
                                                <div class="mb-2">
                                                    <img src="{{ asset('storage/' . $article->promo_image) }}" alt="Current Promo" class="h-24 w-auto object-cover rounded-md border border-gray-300">
                                                </div>
                                            @endif
                                            <input type="file" name="promo_image" class="block mt-1 w-full text-xs text-gray-500 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
