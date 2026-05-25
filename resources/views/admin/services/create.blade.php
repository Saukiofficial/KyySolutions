<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Services Editor
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Add New Service') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Create a new service with image, icon, features, and client benefits.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.services.index') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 19l-7-7 7-7"/>
                </svg>
                Back
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <div class="relative overflow-hidden border-b border-gray-200 bg-gray-950 px-8 py-8 text-white">
                    <div class="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"></div>
                    <div class="absolute -bottom-20 left-20 h-44 w-44 rounded-full bg-white/5"></div>

                    <div class="relative">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold text-gray-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                            New Service
                        </div>

                        <h3 class="mt-5 text-2xl font-bold tracking-tight">
                            Service Content Form
                        </h3>

                        <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                            Fill in the basic information, upload an image, and add detailed selling points for this service.
                        </p>
                    </div>
                </div>

                <form method="POST"
                      action="{{ route('admin.services.store') }}"
                      enctype="multipart/form-data"
                      class="space-y-8 p-8">
                    @csrf

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

                        <!-- Left Column -->
                        <div class="space-y-6">
                            <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                                <div class="mb-6 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Basic</p>
                                        <h3 class="mt-1 text-lg font-bold text-gray-950">Basic Info</h3>
                                    </div>

                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                </div>

                                <div class="space-y-5">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Service Title</label>
                                        <input type="text"
                                               name="title"
                                               value="{{ old('title') }}"
                                               required
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5"
                                               placeholder="Example: Website Development">
                                        @error('title')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Lucide Icon Name</label>
                                        <input type="text"
                                               name="icon"
                                               value="{{ old('icon') }}"
                                               required
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5"
                                               placeholder="Example: Code, Smartphone, Palette">
                                        @error('icon')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Tagline / Highlight</label>
                                        <input type="text"
                                               name="tagline"
                                               value="{{ old('tagline') }}"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5"
                                               placeholder="Example: Membangun Kehadiran Digital">
                                        @error('tagline')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Color Theme</label>
                                        <select name="color"
                                                class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                            <option value="from-blue-600 to-cyan-500">Blue - Cyan (Website)</option>
                                            <option value="from-purple-600 to-pink-500">Purple - Pink (Mobile)</option>
                                            <option value="from-pink-500 to-red-500">Pink - Red (Design)</option>
                                            <option value="from-indigo-500 to-blue-600">Indigo - Blue (Game)</option>
                                            <option value="from-green-500 to-emerald-500">Green - Emerald (Other)</option>
                                            <option value="from-orange-500 to-yellow-500">Orange - Yellow (Other)</option>
                                        </select>
                                        @error('color')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Service Image</label>
                                        <input type="file"
                                               name="image"
                                               accept="image/*"
                                               class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">
                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Optional. Jika diupload, gambar ini akan menggantikan ilustrasi gradient default.
                                        </p>
                                        @error('image')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Short Description</label>
                                        <textarea name="description"
                                                  rows="4"
                                                  required
                                                  class="block w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5"
                                                  placeholder="Write a short description...">{{ old('description') }}</textarea>
                                        @error('description')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="space-y-6">
                            <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                                <div class="mb-6 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Details</p>
                                        <h3 class="mt-1 text-lg font-bold text-gray-950">Detailed Content</h3>
                                    </div>

                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h7"/>
                                        </svg>
                                    </div>
                                </div>

                                <div class="space-y-6">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">Features</label>
                                        <textarea name="features"
                                                  rows="6"
                                                  class="block w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5"
                                                  placeholder="- Responsive Design&#10;- SEO Friendly&#10;- Fast Loading">{{ old('features') }}</textarea>
                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Pisahkan setiap fitur dengan baris baru.
                                        </p>
                                        @error('features')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div x-data="{ benefits: [] }">
                                        <div class="mb-3 flex items-center justify-between gap-3">
                                            <label class="block text-sm font-semibold text-gray-800">Benefits for Client</label>

                                            <button type="button"
                                                    @click="benefits.push({title: '', desc: ''})"
                                                    class="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-gray-800">
                                                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                                </svg>
                                                Add Benefit
                                            </button>
                                        </div>

                                        <div class="space-y-3">
                                            <template x-for="(benefit, index) in benefits" :key="index">
                                                <div class="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                                    <button type="button"
                                                            @click="benefits.splice(index, 1)"
                                                            class="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                                                        &times;
                                                    </button>

                                                    <div class="pr-8">
                                                        <input type="text"
                                                               :name="'benefits['+index+'][title]'"
                                                               x-model="benefit.title"
                                                               placeholder="Benefit Title"
                                                               required
                                                               class="mb-3 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-950 outline-none transition focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">

                                                        <input type="text"
                                                               :name="'benefits['+index+'][desc]'"
                                                               x-model="benefit.desc"
                                                               placeholder="Description..."
                                                               required
                                                               class="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-950 outline-none transition focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">
                                                    </div>
                                                </div>
                                            </template>
                                        </div>

                                        <div x-show="benefits.length === 0"
                                             class="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-6 text-center text-sm text-gray-500">
                                            No benefits added yet. Click “Add Benefit”.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                                <h4 class="text-lg font-bold">Service Tip</h4>
                                <p class="mt-2 text-sm leading-6 text-gray-400">
                                    Gunakan judul singkat, deskripsi jelas, dan benefit yang langsung menjawab kebutuhan calon klien.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-start gap-3 text-sm text-gray-500">
                            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700">Ready to publish</p>
                                <p class="mt-0.5">Service will be saved and shown based on your website logic.</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3">
                            <a href="{{ route('admin.services.index') }}"
                               class="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950">
                                Cancel
                            </a>

                            <button type="submit"
                                    class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                Save Service
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</x-admin-layout>