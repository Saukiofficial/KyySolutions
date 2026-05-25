<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Tutorial CMS
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Edit Tutorial') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Perbarui tutorial, konten editor, thumbnail, kategori, video, dan status publish.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.tutorials.index') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7"/>
                </svg>
                Kembali
            </a>
        </div>
    </x-slot>

    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>

    <style>
        .cms-editor-shell .ck.ck-editor {
            border-radius: 24px !important;
            overflow: hidden;
            border: 1px solid #e5e7eb !important;
            box-shadow: 0 12px 30px rgba(24, 24, 27, 0.06);
        }

        .cms-editor-shell .ck.ck-toolbar {
            border: none !important;
            border-bottom: 1px solid #e5e7eb !important;
            background: #fafafa !important;
            padding: 10px !important;
        }

        .cms-editor-shell .ck.ck-editor__main > .ck-editor__editable {
            min-height: 580px;
            border: none !important;
            background: #ffffff !important;
            color: #111827 !important;
            padding: 32px !important;
            font-size: 16px;
            line-height: 1.8;
        }

        .cms-editor-shell .ck.ck-editor__main > .ck-editor__editable:focus {
            box-shadow: none !important;
        }

        .cms-editor-shell .ck-content h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        .cms-editor-shell .ck-content h2 {
            font-size: 1.5rem;
            font-weight: 750;
            margin-top: 1.5rem;
            margin-bottom: .75rem;
        }

        .cms-editor-shell .ck-content h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.25rem;
            margin-bottom: .5rem;
        }

        .cms-editor-shell .ck-content p {
            margin-bottom: 1rem;
        }

        .cms-editor-shell .ck-content blockquote {
            border-left: 4px solid #18181b;
            background: #f4f4f5;
            padding: 16px 20px;
            border-radius: 14px;
            font-style: normal;
        }

        .cms-editor-shell .ck-content img {
            border-radius: 18px;
            margin: 20px auto;
        }

        .ck.ck-powered-by {
            display: none !important;
        }
    </style>

    <div class="py-6">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <form method="POST"
                  action="{{ route('admin.tutorials.update', $tutorial->id) }}"
                  enctype="multipart/form-data"
                  class="space-y-6">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 gap-6 xl:grid-cols-12">

                    <!-- Main Editor -->
                    <div class="xl:col-span-8">
                        <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                            <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                                <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                                <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                                <div class="relative">
                                    <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                                        <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                        Content Editor
                                    </div>

                                    <h3 class="mt-5 text-2xl font-bold tracking-tight">
                                        Edit Konten Tutorial
                                    </h3>

                                    <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                                        Update tutorial dengan editor CMS profesional dan upload gambar langsung ke storage.
                                    </p>
                                </div>
                            </div>

                            <div class="space-y-6 p-8">
                                <div>
                                    <label for="title" class="mb-2 block text-sm font-semibold text-gray-800">
                                        Judul Tutorial
                                    </label>

                                    <input id="title"
                                           type="text"
                                           name="title"
                                           value="{{ old('title', $tutorial->title) }}"
                                           required
                                           autofocus
                                           class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-lg font-bold text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                    @error('title')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div class="cms-editor-shell">
                                    <div class="mb-3 flex items-center justify-between gap-4">
                                        <label for="editor" class="block text-sm font-semibold text-gray-800">
                                            Konten Tutorial
                                        </label>

                                        <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                                            Rich Text Editor
                                        </span>
                                    </div>

                                    <textarea id="editor" name="content">{{ old('content', $tutorial->content) }}</textarea>

                                    @error('content')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Settings -->
                    <div class="xl:col-span-4">
                        <div class="sticky top-6 space-y-6">

                            <!-- Publish Panel -->
                            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Publish
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Status Tutorial
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">
                                        Status saat ini:
                                        @if($tutorial->is_published)
                                            <span class="font-bold text-gray-950">Published</span>
                                        @else
                                            <span class="font-bold text-gray-950">Draft</span>
                                        @endif
                                    </p>
                                </div>

                                <div class="space-y-4 p-6">
                                    <button type="submit"
                                            name="action"
                                            value="publish"
                                            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                        Update & Publish
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </button>

                                    <button type="submit"
                                            name="action"
                                            value="draft"
                                            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                                        Simpan Sebagai Draft
                                    </button>
                                </div>
                            </div>

                            <!-- Settings -->
                            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Settings
                                    </p>
                                    <h3 class="mt-1 text-lg font-bold text-gray-950">
                                        Detail Tutorial
                                    </h3>
                                </div>

                                <div class="space-y-5 p-6">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Kategori
                                        </label>

                                        <select name="category"
                                                class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-700 outline-none transition focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">
                                            @foreach(['Programming', 'Networking', 'Desain Grafis', 'Digital Marketing'] as $cat)
                                                <option value="{{ $cat }}" @selected(old('category', $tutorial->category) == $cat)>
                                                    {{ $cat }}
                                                </option>
                                            @endforeach
                                        </select>

                                        @error('category')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Thumbnail
                                        </label>

                                        @if($tutorial->thumbnail)
                                            <div class="mb-4 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-2">
                                                <img src="{{ asset('storage/' . $tutorial->thumbnail) }}"
                                                     alt="{{ $tutorial->title }}"
                                                     class="h-48 w-full rounded-2xl object-cover">
                                            </div>
                                        @endif

                                        <input type="file"
                                               name="thumbnail"
                                               accept="image/*"
                                               class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">

                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Kosongkan jika tidak ingin mengganti thumbnail.
                                        </p>

                                        @error('thumbnail')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Video URL YouTube
                                        </label>

                                        <input type="url"
                                               name="video_url"
                                               value="{{ old('video_url', $tutorial->video_url) }}"
                                               placeholder="https://youtube.com/..."
                                               class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                        @error('video_url')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <!-- Meta Card -->
                            <div class="rounded-[2rem] border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                                <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-950">
                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>

                                <h4 class="text-lg font-bold">Info Tutorial</h4>
                                <div class="mt-4 space-y-3 text-sm text-gray-400">
                                    <div class="flex items-center justify-between gap-4">
                                        <span>Dibuat</span>
                                        <span class="font-semibold text-white">{{ $tutorial->created_at?->format('d M Y') }}</span>
                                    </div>
                                    <div class="flex items-center justify-between gap-4">
                                        <span>Update</span>
                                        <span class="font-semibold text-white">{{ $tutorial->updated_at?->format('d M Y') }}</span>
                                    </div>
                                    <div class="flex items-center justify-between gap-4">
                                        <span>Slug</span>
                                        <span class="max-w-[160px] truncate font-semibold text-white">{{ $tutorial->slug }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <script>
        class LaravelUploadAdapter {
            constructor(loader) {
                this.loader = loader;
                this.url = "{{ route('admin.tutorials.upload-image') }}";
                this.csrfToken = "{{ csrf_token() }}";
            }

            upload() {
                return this.loader.file.then(file => {
                    return new Promise((resolve, reject) => {
                        const formData = new FormData();
                        formData.append('upload', file);

                        fetch(this.url, {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': this.csrfToken,
                                'Accept': 'application/json',
                            },
                            body: formData,
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.url) {
                                resolve({
                                    default: data.url
                                });
                            } else {
                                reject(data.message || 'Upload image gagal.');
                            }
                        })
                        .catch(error => {
                            reject(error.message || 'Terjadi kesalahan saat upload image.');
                        });
                    });
                });
            }

            abort() {}
        }

        function LaravelUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                return new LaravelUploadAdapter(loader);
            };
        }

        ClassicEditor
            .create(document.querySelector('#editor'), {
                extraPlugins: [LaravelUploadAdapterPlugin],
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'link',
                        'blockQuote',
                        '|',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'imageUpload',
                        'insertTable',
                        'mediaEmbed',
                        '|',
                        'undo',
                        'redo'
                    ]
                },
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells'
                    ]
                },
                mediaEmbed: {
                    previewsInData: true
                }
            })
            .catch(error => {
                console.error(error);
            });
    </script>
</x-admin-layout>