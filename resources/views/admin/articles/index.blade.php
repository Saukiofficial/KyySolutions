<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2M7 8h6v4H7V8z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Article Management
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        Articles Manager
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage news, blog posts, company updates, draft, and published articles.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.articles.create') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                </svg>
                Write New Article
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">

            @if(session('success'))
                <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-white">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-950">{{ session('success') }}</p>
                            <p class="mt-1 text-sm text-gray-500">
                                Article data has been processed successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <!-- Stats -->
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Total Articles</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">{{ $articles->total() }}</p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Published</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">
                        {{ \App\Models\Article::where('is_published', true)->count() }}
                    </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-700 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Draft</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">
                        {{ \App\Models\Article::where('is_published', false)->count() }}
                    </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <p class="text-sm font-medium text-gray-500">Last Updated</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">Today</p>
                </div>
            </div>

            <!-- Filter -->
            <div class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
                <form method="GET" action="{{ route('admin.articles.index') }}">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
                        <div class="lg:col-span-5">
                            <label class="mb-2 block text-sm font-semibold text-gray-800">
                                Search
                            </label>
                            <input type="text"
                                   name="search"
                                   value="{{ request('search') }}"
                                   placeholder="Search title or category..."
                                   class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">
                        </div>

                        <div class="lg:col-span-3">
                            <label class="mb-2 block text-sm font-semibold text-gray-800">
                                Category
                            </label>
                            <select name="category"
                                    class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-700 outline-none transition focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">
                                <option value="">All Categories</option>
                                @foreach(['Technology', 'Business', 'Tips & Trick', 'Company News'] as $cat)
                                    <option value="{{ $cat }}" @selected(request('category') == $cat)>
                                        {{ $cat }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="lg:col-span-2">
                            <label class="mb-2 block text-sm font-semibold text-gray-800">
                                Status
                            </label>
                            <select name="status"
                                    class="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-700 outline-none transition focus:border-gray-950 focus:bg-white focus:ring-4 focus:ring-gray-900/5">
                                <option value="">All</option>
                                <option value="published" @selected(request('status') == 'published')>Published</option>
                                <option value="draft" @selected(request('status') == 'draft')>Draft</option>
                            </select>
                        </div>

                        <div class="flex gap-3 lg:col-span-2">
                            <button type="submit"
                                    class="inline-flex flex-1 items-center justify-center rounded-2xl bg-gray-950 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800">
                                Filter
                            </button>

                            @if(request()->hasAny(['search', 'category', 'status']))
                                <a href="{{ route('admin.articles.index') }}"
                                   class="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50 hover:text-gray-950">
                                    Reset
                                </a>
                            @endif
                        </div>
                    </div>
                </form>
            </div>

            <!-- Table -->
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Content List
                            </p>
                            <h3 class="mt-1 text-lg font-bold text-gray-950">
                                All Articles
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                                View, edit, delete, and manage article publishing status.
                            </p>
                        </div>

                        <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                            <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                            {{ $articles->total() }} Articles
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-white">
                            <tr>
                                <th class="w-32 px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Thumbnail
                                </th>
                                <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Article
                                </th>
                                <th class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 md:table-cell">
                                    Category
                                </th>
                                <th class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 lg:table-cell">
                                    Status
                                </th>
                                <th class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 xl:table-cell">
                                    Date
                                </th>
                                <th class="w-52 px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100 bg-white">
                            @forelse ($articles as $article)
                                <tr class="transition hover:bg-gray-50">
                                    <td class="px-6 py-5">
                                        <div class="h-16 w-24 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
                                            @if($article->thumbnail)
                                                <img src="{{ asset('storage/' . $article->thumbnail) }}"
                                                     alt="{{ $article->title }}"
                                                     class="h-full w-full object-cover">
                                            @else
                                                <div class="flex h-full w-full items-center justify-center text-gray-400">
                                                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"/>
                                                    </svg>
                                                </div>
                                            @endif
                                        </div>
                                    </td>

                                    <td class="px-6 py-5">
                                        <div>
                                            <p class="max-w-xl text-sm font-bold leading-6 text-gray-950">
                                                {{ $article->title }}
                                            </p>

                                            <div class="mt-2 flex flex-wrap items-center gap-2">
                                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                                                    ID: {{ $article->id }}
                                                </span>

                                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500 md:hidden">
                                                    {{ $article->category }}
                                                </span>

                                                @if($article->is_published)
                                                    <span class="rounded-full bg-gray-950 px-2.5 py-1 text-xs font-bold text-white lg:hidden">
                                                        Published
                                                    </span>
                                                @else
                                                    <span class="rounded-full bg-gray-200 px-2.5 py-1 text-xs font-bold text-gray-700 lg:hidden">
                                                        Draft
                                                    </span>
                                                @endif
                                            </div>

                                            <p class="mt-2 max-w-xl truncate text-xs text-gray-400">
                                                {{ $article->slug }}
                                            </p>
                                        </div>
                                    </td>

                                    <td class="hidden px-6 py-5 md:table-cell">
                                        <span class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                                            {{ $article->category }}
                                        </span>
                                    </td>

                                    <td class="hidden px-6 py-5 lg:table-cell">
                                        @if($article->is_published)
                                            <span class="inline-flex items-center gap-2 rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                                Published
                                            </span>
                                        @else
                                            <span class="inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
                                                <span class="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
                                                Draft
                                            </span>
                                        @endif
                                    </td>

                                    <td class="hidden px-6 py-5 xl:table-cell">
                                        <div class="text-sm font-semibold text-gray-800">
                                            {{ $article->created_at?->format('d M Y') }}
                                        </div>
                                        <div class="mt-1 text-xs text-gray-400">
                                            {{ $article->created_at?->diffForHumans() }}
                                        </div>
                                    </td>

                                    <td class="px-6 py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="{{ route('article.show', $article->slug) }}"
                                               target="_blank"
                                               class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-950">
                                                View
                                            </a>

                                            <a href="{{ route('admin.articles.edit', $article->id) }}"
                                               class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:bg-gray-950 hover:text-white">
                                                Edit
                                            </a>

                                            <form action="{{ route('admin.articles.destroy', $article->id) }}"
                                                  method="POST"
                                                  onsubmit="return confirm('Are you sure you want to delete this article?');"
                                                  class="inline-block">
                                                @csrf
                                                @method('DELETE')

                                                <button type="submit"
                                                        class="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="6" class="px-6 py-16 text-center">
                                        <div class="mx-auto flex max-w-sm flex-col items-center">
                                            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gray-100 text-gray-500">
                                                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2"/>
                                                </svg>
                                            </div>

                                            <h4 class="text-base font-bold text-gray-950">
                                                No articles found
                                            </h4>

                                            <p class="mt-2 text-sm leading-6 text-gray-500">
                                                Start by writing your first article.
                                            </p>

                                            <a href="{{ route('admin.articles.create') }}"
                                               class="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800">
                                                Write Article
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

                @if($articles->hasPages())
                    <div class="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        {{ $articles->links() }}
                    </div>
                @endif
            </div>
        </div>
    </div>
</x-admin-layout>