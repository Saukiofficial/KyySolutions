<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Buat Tutorial Baru') }}
        </h2>
    </x-slot>

    {{-- Load CKEditor CDN --}}
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
    <style>
        /* FIX: CSS Khusus agar Editor terlihat jelas di Dark Mode */
        .ck-editor__editable {
            min-height: 500px; /* Lebih tinggi agar leluasa nulis */
        }

        /* Mode Gelap (Dark Mode) */
        .dark .ck-editor__editable {
            background-color: #1f2937 !important; /* Abu-abu Gelap */
            color: #ffffff !important; /* Teks Putih */
        }
        .dark .ck-toolbar {
            background-color: #374151 !important;
            border-color: #4b5563 !important;
        }
        .dark .ck-button__icon {
            color: #e5e7eb !important;
        }
        .dark .ck-button__label {
            color: #e5e7eb !important;
        }

        /* Mode Terang */
        .ck-editor__editable {
            background-color: white !important;
            color: black !important;
        }

        /* Sembunyikan watermark */
        .ck.ck-powered-by {
            display: none;
        }
    </style>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">

                    <form method="POST" action="{{ route('admin.tutorials.store') }}" enctype="multipart/form-data">
                        @csrf

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <!-- KIRI: KONTEN UTAMA -->
                            <div class="md:col-span-2 space-y-6">
                                <div>
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Judul Tutorial</label>
                                    <input type="text" name="title" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 font-bold text-lg" required placeholder="Contoh: Cara Install Laravel 11..." value="{{ old('title') }}" />
                                    @error('title') <span class="text-red-500 text-xs">{{ $message }}</span> @enderror
                                </div>

                                <div>
                                    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">Konten Tutorial</label>
                                    <textarea id="editor" name="content">{{ old('content') }}</textarea>
                                    @error('content') <span class="text-red-500 text-xs">{{ $message }}</span> @enderror
                                </div>
                            </div>

                            <!-- KANAN: SIDEBAR -->
                            <div class="space-y-6">

                                <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                                    <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Pengaturan</h3>

                                    <div class="mb-4">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Kategori</label>
                                        <select name="category" class="block mt-1 w-full rounded-md border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500">
                                            <option value="Programming">Programming</option>
                                            <option value="Networking">Networking</option>
                                            <option value="Desain Grafis">Desain Grafis</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                    </div>

                                    <div class="mb-4">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Thumbnail</label>
                                        <input type="file" name="thumbnail" class="block mt-1 w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-600 dark:file:text-white" required />
                                        @error('thumbnail') <span class="text-red-500 text-xs">{{ $message }}</span> @enderror
                                    </div>

                                    <div class="mb-4">
                                        <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">Video URL (YouTube) - Opsional</label>
                                        <input type="url" name="video_url" class="block mt-1 w-full text-sm rounded-md border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-600" placeholder="https://youtube.com/..." value="{{ old('video_url') }}" />
                                    </div>

                                    <button type="submit" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-indigo-700 shadow-lg transition-all">
                                        Publish Tutorial
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {{-- SCRIPT INIT CKEDITOR DENGAN IMAGE UPLOAD ADAPTER --}}
    <script>
        // 1. Definisikan Adapter Upload Gambar (Base64)
        class MyUploadAdapter {
            constructor(loader) {
                this.loader = loader;
            }

            upload() {
                return this.loader.file
                    .then(file => new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            resolve({ default: reader.result });
                        };
                        reader.onerror = error => reject(error);
                        reader.readAsDataURL(file);
                    }));
            }

            abort() {
                // Handle abort
            }
        }

        // 2. Plugin function untuk mengaktifkan adapter
        function MyCustomUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new MyUploadAdapter(loader);
            };
        }

        // 3. Inisialisasi CKEditor dengan Plugin tersebut
        ClassicEditor
            .create(document.querySelector('#editor'), {
                extraPlugins: [MyCustomUploadAdapterPlugin], // Aktifkan plugin upload
                toolbar: [
                    'heading', '|',
                    'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
                    'imageUpload', 'insertTable', 'mediaEmbed', '|', // Menu Image Upload muncul di sini
                    'undo', 'redo'
                ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                    ]
                }
            })
            .catch(error => {
                console.error(error);
            });
    </script>
</x-admin-layout>
