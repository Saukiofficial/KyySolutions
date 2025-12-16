<x-admin-layout>
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>

    <style>
        /* Modern Editor Styling */
        body {
            background: #f8fafc;
        }

        .editor-container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 200px;
            position: relative;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }

        .editor-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>');
            opacity: 0.4;
        }

        .header-content {
            position: relative;
            z-index: 10;
            padding: 2rem 0 1.5rem;
        }

        .editor-wrapper {
            background: transparent;
            border-radius: 0;
            box-shadow: none;
            margin-top: 0;
            position: relative;
            z-index: 20;
        }

        .dark .editor-wrapper {
            background: transparent;
            box-shadow: none;
        }

        /* CKEditor Custom Styling */
        .ck-editor__editable {
            min-height: 500px;
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
            font-size: 16px;
            line-height: 1.75;
            padding: 2rem !important;
            border: none !important;
        }

        .dark .ck-editor__editable {
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
        }

        .ck-toolbar {
            background: #1e293b !important;
            border: none !important;
            border-bottom: 1px solid #334155 !important;
            padding: 1rem !important;
            border-radius: 0 !important;
        }

        .dark .ck-toolbar {
            background: #1e293b !important;
            border-bottom-color: #334155 !important;
        }

        .ck.ck-powered-by {
            display: none;
        }

        /* Input Styling */
        .modern-input {
            border: 1px solid #334155;
            transition: all 0.3s ease;
            font-size: 15px;
            background: #1e293b;
        }

        .modern-input:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .dark .modern-input {
            border-color: #334155;
            background: #1e293b;
        }

        .dark .modern-input:focus {
            border-color: #667eea;
        }

        /* Title Input Special */
        .title-input {
            font-size: 2rem;
            font-weight: 700;
            border: none;
            border-bottom: 2px solid #334155;
            border-radius: 0;
            padding: 1rem 0;
            background: #1e293b;
            color: #f8fafc;
        }

        .title-input:focus {
            outline: none;
            border-bottom-color: #667eea;
            box-shadow: none;
        }

        .dark .title-input {
            border-bottom-color: #334155;
            color: #f8fafc;
            background: #1e293b;
        }

        /* Card Styling */
        .settings-card {
            background: #1e293b;
            border-radius: 8px;
            border: 1px solid #334155;
            transition: all 0.3s ease;
        }

        .settings-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transform: translateY(-1px);
        }

        .dark .settings-card {
            background: #1e293b;
            border-color: #334155;
        }

        /* Button Styling */
        .btn-publish {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-publish:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .btn-draft {
            background: white;
            color: #667eea;
            border: 2px solid #667eea;
            transition: all 0.3s ease;
        }

        .btn-draft:hover {
            background: #667eea;
            color: white;
        }

        /* File Upload */
        .file-upload-wrapper {
            position: relative;
            overflow: hidden;
            border: 2px dashed #475569;
            border-radius: 8px;
            background: #0f172a;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .file-upload-wrapper:hover {
            border-color: #667eea;
            background: #1e293b;
        }

        .dark .file-upload-wrapper {
            border-color: #475569;
            background: #0f172a;
        }

        /* Badge */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* Promo Card */
        .promo-card {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #fbbf24;
        }

        .dark .promo-card {
            background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
            border-color: #f59e0b;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-in {
            animation: fadeInUp 0.5s ease-out;
        }

        /* Progress Bar */
        .progress-bar {
            height: 4px;
            background: #e2e8f0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            width: 0%;
            transition: width 0.3s ease;
        }
    </style>

    <!-- Progress Bar -->
    <div class="progress-bar">
        <div class="progress-fill" id="progressBar"></div>
    </div>

    <!-- Header with Gradient -->
    <div class="editor-container">
        <div class="header-content">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-4xl font-bold text-white mb-2">Create New Article</h1>
                        <p class="text-purple-100 text-sm">Write and publish your story to the world</p>
                    </div>
                    <div class="hidden md:flex items-center gap-3">
                        <span class="badge bg-white/20 text-white border border-white/30">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            Draft Mode
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-full mx-0 px-0 pb-8">
        <form method="POST" action="{{ route('admin.articles.store') }}" enctype="multipart/form-data" id="articleForm">
            @csrf

            <div class="editor-wrapper animate-fade-in">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">

                    <!-- Main Content Area -->
                    <div class="lg:col-span-2 space-y-0 bg-[#0f172a] dark:bg-[#0f172a]">
                        <div class="p-8 space-y-6">

                        <!-- Title Input -->
                        <div>
                            <input
                                type="text"
                                name="title"
                                class="title-input w-full dark:bg-transparent"
                                placeholder="Enter your article title..."
                                value="{{ old('title') }}"
                                required
                            />
                            @error('title')
                                <p class="text-red-500 text-sm mt-2 flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                    {{ $message }}
                                </p>
                            @enderror
                        </div>

                        <!-- Content Editor -->
                        <div>
                            <textarea id="editor" name="content">{{ old('content') }}</textarea>
                            @error('content')
                                <p class="text-red-500 text-sm mt-2">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Writing Stats -->
                        <div class="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-400 pt-4 border-t border-gray-700 dark:border-gray-700">
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span id="readTime">~2 min read</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span id="wordCount">0 words</span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Sidebar Settings -->
                    <div class="space-y-4 bg-[#1e293b] dark:bg-[#1e293b] p-6 border-l border-gray-700">

                        <!-- Publish Settings Card -->
                        <div class="settings-card p-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Publishing</h3>
                            </div>

                            <div class="space-y-5">
                                <!-- Category -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                    <select name="category" class="modern-input w-full rounded-lg p-3 dark:text-gray-300" required>
                                        <option value="">Select category...</option>
                                        <option value="Technology">📱 Technology</option>
                                        <option value="Business">💼 Business</option>
                                        <option value="Tips & Trick">💡 Tips & Trick</option>
                                        <option value="Company News">🏢 Company News</option>
                                    </select>
                                </div>

                                <!-- Thumbnail Upload -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Featured Image</label>
                                    <div class="file-upload-wrapper p-6 text-center">
                                        <input
                                            type="file"
                                            name="thumbnail"
                                            class="hidden"
                                            id="thumbnailInput"
                                            accept="image/*"
                                            required
                                        />
                                        <label for="thumbnailInput" class="cursor-pointer">
                                            <svg class="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Click to upload image</p>
                                            <p class="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                                        </label>
                                    </div>
                                    @error('thumbnail')
                                        <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
                                    @enderror
                                </div>

                                <!-- Action Buttons -->
                                <div class="space-y-3 pt-4">
                                    <button type="submit" class="btn-publish w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                        Publish Article
                                    </button>
                                    <button type="button" class="btn-draft w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                        Save as Draft
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Promo Card -->
                        <div class="promo-card settings-card p-5">
                            <div class="flex items-center gap-2 mb-3">
                                <svg class="w-5 h-5 text-yellow-700 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                                <h3 class="text-sm font-bold text-yellow-900 dark:text-yellow-300 uppercase tracking-wider">Sidebar Promo</h3>
                            </div>
                            <p class="text-xs text-yellow-800 dark:text-yellow-400 mb-4">Optional promotional content for this article</p>

                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Promo Title</label>
                                    <input
                                        type="text"
                                        name="promo_title"
                                        class="modern-input w-full rounded-lg p-2 text-sm bg-white dark:bg-gray-800"
                                        placeholder="Special offer title..."
                                        value="{{ old('promo_title') }}"
                                    />
                                </div>

                                <div>
                                    <label class="block text-xs font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Target Link</label>
                                    <input
                                        type="url"
                                        name="promo_link"
                                        class="modern-input w-full rounded-lg p-2 text-sm bg-white dark:bg-gray-800"
                                        placeholder="https://example.com"
                                        value="{{ old('promo_link') }}"
                                    />
                                </div>

                                <div>
                                    <label class="block text-xs font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Promo Image</label>
                                    <input
                                        type="file"
                                        name="promo_image"
                                        class="block w-full text-xs text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-700 cursor-pointer"
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </div>

    <!-- CKEditor Initialization -->
    <script>
        // Custom Upload Adapter for Base64 Images
        class MyUploadAdapter {
            constructor(loader) {
                this.loader = loader;
            }

            upload() {
                return this.loader.file.then(file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve({ default: reader.result });
                    reader.onerror = error => reject(error);
                    reader.readAsDataURL(file);
                }));
            }

            abort() {}
        }

        function MyCustomUploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new MyUploadAdapter(loader);
            };
        }

        // Initialize CKEditor
        let editorInstance;
        ClassicEditor
            .create(document.querySelector('#editor'), {
                extraPlugins: [MyCustomUploadAdapterPlugin],
                toolbar: {
                    items: [
                        'heading', '|',
                        'bold', 'italic', 'link', '|',
                        'bulletedList', 'numberedList', 'blockQuote', '|',
                        'imageUpload', 'insertTable', 'mediaEmbed', '|',
                        'undo', 'redo'
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
                image: {
                    toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side']
                },
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
                }
            })
            .then(editor => {
                editorInstance = editor;

                // Update word count on change
                editor.model.document.on('change:data', () => {
                    updateStats();
                });
            })
            .catch(error => {
                console.error(error);
            });

        // Update writing statistics
        function updateStats() {
            if (!editorInstance) return;

            const data = editorInstance.getData();
            const text = data.replace(/<[^>]*>/g, '').trim();
            const words = text.split(/\s+/).filter(word => word.length > 0).length;
            const readTime = Math.max(1, Math.ceil(words / 200));

            document.getElementById('wordCount').textContent = `${words} words`;
            document.getElementById('readTime').textContent = `~${readTime} min read`;

            // Update progress bar
            const progress = Math.min(100, (words / 500) * 100);
            document.getElementById('progressBar').style.width = `${progress}%`;
        }

        // Thumbnail preview
        document.getElementById('thumbnailInput').addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const label = e.target.nextElementSibling;
                label.innerHTML = `
                    <svg class="w-12 h-12 mx-auto text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <p class="text-sm font-medium text-green-600">Image uploaded!</p>
                    <p class="text-xs text-gray-500 mt-1">${e.target.files[0].name}</p>
                `;
            }
        });

        // Form validation
        document.getElementById('articleForm').addEventListener('submit', function(e) {
            const title = document.querySelector('input[name="title"]').value.trim();
            if (title.length < 10) {
                e.preventDefault();
                alert('Title must be at least 10 characters long');
                return false;
            }
        });
    </script>
</x-admin-layout>
