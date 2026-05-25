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
                        Portfolio Editor
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Edit Portfolio') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Update portfolio details, thumbnail, technologies, features, and gallery.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.portfolios.index') }}"
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
                            Update Project
                        </div>

                        <h3 class="mt-5 text-2xl font-bold tracking-tight">
                            Edit Portfolio Content
                        </h3>

                        <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-300">
                            Keep the project information clean, clear, and professional.
                        </p>
                    </div>
                </div>

                <form method="POST"
                      action="{{ route('admin.portfolios.update', $portfolio->id) }}"
                      enctype="multipart/form-data"
                      class="space-y-8 p-8">
                    @csrf
                    @method('PUT')

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

                        <!-- Left Column -->
                        <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                            <div class="mb-6 flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Project</p>
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
                                    <label class="mb-2 block text-sm font-semibold text-gray-800">
                                        Project Title
                                    </label>
                                    <input type="text"
                                           name="title"
                                           value="{{ old('title', $portfolio->title) }}"
                                           required
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    @error('title')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-800">
                                        Client Name
                                    </label>
                                    <input type="text"
                                           name="client_name"
                                           value="{{ old('client_name', $portfolio->client_name) }}"
                                           class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                    @error('client_name')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-800">
                                        Category
                                    </label>
                                    <select name="category"
                                            class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                        @foreach($categories as $cat)
                                            <option value="{{ $cat }}" {{ $portfolio->category == $cat ? 'selected' : '' }}>
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
                                        Short Description
                                    </label>
                                    <textarea name="description"
                                              rows="5"
                                              required
                                              class="block w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('description', $portfolio->description) }}</textarea>
                                    @error('description')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-semibold text-gray-800">
                                        Main Thumbnail
                                    </label>

                                    @if($portfolio->image)
                                        <div class="mb-4 overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
                                            <img src="{{ asset('storage/' . $portfolio->image) }}"
                                                 alt="{{ $portfolio->title }}"
                                                 class="h-52 w-full rounded-2xl object-cover">
                                        </div>
                                    @endif

                                    <input type="file"
                                           name="image"
                                           accept="image/*"
                                           class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-white text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">
                                    <p class="mt-2 text-xs leading-5 text-gray-500">
                                        Upload baru untuk mengganti thumbnail utama.
                                    </p>
                                    @error('image')
                                        <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="space-y-6">
                            <div class="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                                <div class="mb-6 flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Details</p>
                                        <h3 class="mt-1 text-lg font-bold text-gray-950">Details & Gallery</h3>
                                    </div>

                                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h7"/>
                                        </svg>
                                    </div>
                                </div>

                                <div class="space-y-5">
                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Technologies Used
                                        </label>
                                        <input type="text"
                                               name="technologies"
                                               value="{{ old('technologies', is_array($portfolio->technologies) ? implode(', ', $portfolio->technologies) : $portfolio->technologies) }}"
                                               placeholder="Laravel, React, Tailwind"
                                               class="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">
                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Pisahkan teknologi dengan koma.
                                        </p>
                                        @error('technologies')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div>
                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Key Features
                                        </label>
                                        <textarea name="features"
                                                  rows="7"
                                                  class="block w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-900/5">{{ old('features', is_array($portfolio->features) ? implode("\n", $portfolio->features) : $portfolio->features) }}</textarea>
                                        <p class="mt-2 text-xs leading-5 text-gray-500">
                                            Pisahkan setiap fitur dengan baris baru.
                                        </p>
                                        @error('features')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>

                                    <div class="rounded-3xl border border-gray-200 bg-white p-5">
                                        <div class="mb-4 flex items-start justify-between gap-4">
                                            <div>
                                                <label class="block text-sm font-bold text-gray-950">
                                                    Manage Project Gallery
                                                </label>
                                                <p class="mt-1 text-xs leading-5 text-gray-500">
                                                    Remove old gallery images or add new images.
                                                </p>
                                            </div>

                                            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                                                Gallery
                                            </span>
                                        </div>

                                        @if($portfolio->gallery && count($portfolio->gallery) > 0)
                                            <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                                @foreach($portfolio->gallery as $galImg)
                                                    <div class="group relative h-28 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                                                        <img src="{{ asset('storage/' . $galImg) }}"
                                                             class="h-full w-full object-cover">

                                                        <label class="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-gray-950/70 opacity-0 transition group-hover:opacity-100">
                                                            <input type="checkbox"
                                                                   name="remove_gallery_images[]"
                                                                   value="{{ $galImg }}"
                                                                   class="h-5 w-5 rounded border-gray-300 text-red-600 focus:ring-red-500">
                                                            <span class="mt-2 text-xs font-bold text-white">
                                                                HAPUS
                                                            </span>
                                                        </label>
                                                    </div>
                                                @endforeach
                                            </div>

                                            <p class="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                                                Centang gambar jika ingin menghapusnya.
                                            </p>
                                        @else
                                            <div class="mb-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
                                                Belum ada gambar galeri tambahan.
                                            </div>
                                        @endif

                                        <label class="mb-2 block text-sm font-semibold text-gray-800">
                                            Add More Images
                                        </label>

                                        <input type="file"
                                               name="gallery[]"
                                               multiple
                                               accept="image/*"
                                               class="block w-full cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-500 shadow-sm file:mr-4 file:border-0 file:bg-gray-950 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800">

                                        @error('gallery')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                        @error('gallery.*')
                                            <p class="mt-2 text-sm font-medium text-red-600">{{ $message }}</p>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                                <h4 class="text-lg font-bold">Editing Tip</h4>
                                <p class="mt-2 text-sm leading-6 text-gray-400">
                                    Untuk tampilan website yang premium, gunakan gambar portfolio dengan rasio dan kualitas yang konsisten.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-start gap-3 text-sm text-gray-500">
                            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8"/>
                                </svg>
                            </div>

                            <div>
                                <p class="font-semibold text-gray-700">Safe update</p>
                                <p class="mt-0.5">Portfolio will be updated after submit.</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3">
                            <a href="{{ route('admin.portfolios.index') }}"
                               class="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950">
                                Cancel
                            </a>

                            <button type="submit"
                                    class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                                Update Portfolio
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