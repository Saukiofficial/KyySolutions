<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                    <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                    Admin Panel
                </div>

                <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                    {{ __('Dashboard') }}
                </h2>

                <p class="mt-1 text-sm text-gray-500">
                    Welcome back! Monitor your website content from one clean workspace.
                </p>
            </div>

            <div class="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm">
                <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
                {{ now()->format('l, F j, Y') }}
            </div>
        </div>
    </x-slot>

    <div class="space-y-8">

        <!-- Summary Cards -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <!-- Services -->
            <div class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100 transition group-hover:bg-gray-200"></div>

                <div class="relative">
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            Active
                        </span>
                    </div>

                    <p class="text-sm font-medium text-gray-500">Total Services</p>
                    <div class="mt-2 flex items-end justify-between">
                        <p class="text-4xl font-bold tracking-tight text-gray-950">{{ $serviceCount }}</p>
                        <span class="text-xs font-medium text-gray-400">Items</span>
                    </div>
                </div>
            </div>

            <!-- Portfolios -->
            <div class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100 transition group-hover:bg-gray-200"></div>

                <div class="relative">
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800 text-white shadow-lg shadow-gray-900/20">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>

                        <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            Published
                        </span>
                    </div>

                    <p class="text-sm font-medium text-gray-500">Total Portfolios</p>
                    <div class="mt-2 flex items-end justify-between">
                        <p class="text-4xl font-bold tracking-tight text-gray-950">{{ $portfolioCount }}</p>
                        <span class="text-xs font-medium text-gray-400">Projects</span>
                    </div>
                </div>
            </div>

            <!-- Team -->
            <div class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100 transition group-hover:bg-gray-200"></div>

                <div class="relative">
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-700 text-white shadow-lg shadow-gray-900/20">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                            Team
                        </span>
                    </div>

                    <p class="text-sm font-medium text-gray-500">Team Members</p>
                    <div class="mt-2 flex items-end justify-between">
                        <p class="text-4xl font-bold tracking-tight text-gray-950">{{ $teamCount }}</p>
                        <span class="text-xs font-medium text-gray-400">People</span>
                    </div>
                </div>
            </div>

            <!-- Messages -->
            <div class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gray-100 transition group-hover:bg-gray-200"></div>

                <div class="relative">
                    <div class="mb-6 flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        @if($unreadMessagesCount > 0)
                            <span class="inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-3 py-1 text-xs font-semibold text-white">
                                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
                                New
                            </span>
                        @else
                            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                                Clear
                            </span>
                        @endif
                    </div>

                    <p class="text-sm font-medium text-gray-500">Unread Messages</p>
                    <div class="mt-2 flex items-end justify-between">
                        <p class="text-4xl font-bold tracking-tight text-gray-950">{{ $unreadMessagesCount }}</p>
                        <span class="text-xs font-medium text-gray-400">Inbox</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Section -->
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

            <!-- Quick Actions -->
            <div class="rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl shadow-gray-900/10">
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-400">Workspace</p>
                    <h3 class="mt-1 text-xl font-bold">Quick Actions</h3>
                    <p class="mt-2 text-sm leading-6 text-gray-400">
                        Access your most used admin features faster.
                    </p>
                </div>

                <div class="space-y-3">
                    <a href="{{ route('admin.services.index') }}"
                       class="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-950">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm font-semibold">Manage Services</p>
                                <p class="text-xs text-gray-400">Edit service content</p>
                            </div>
                        </div>

                        <svg class="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <a href="{{ route('admin.portfolios.index') }}"
                       class="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-950">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-sm font-semibold">Manage Portfolio</p>
                                <p class="text-xs text-gray-400">Update project showcase</p>
                            </div>
                        </div>

                        <svg class="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Overview -->
            <div class="xl:col-span-2 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Performance Overview</p>
                        <h3 class="mt-1 text-xl font-bold text-gray-950">Content Summary</h3>
                    </div>

                    <span class="w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                        Updated automatically
                    </span>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V9l7-6 7 6v10a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <p class="text-sm text-gray-500">Total Content</p>
                        <p class="mt-2 text-3xl font-bold text-gray-950">{{ $serviceCount + $portfolioCount + $teamCount }}</p>
                    </div>

                    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <p class="text-sm text-gray-500">Published Items</p>
                        <p class="mt-2 text-3xl font-bold text-gray-950">{{ $serviceCount + $portfolioCount }}</p>
                    </div>

                    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2m3-4h4a2 2 0 012 2v2H8V6a2 2 0 012-2z"/>
                            </svg>
                        </div>
                        <p class="text-sm text-gray-500">Team Size</p>
                        <p class="mt-2 text-3xl font-bold text-gray-950">{{ $teamCount }}</p>
                    </div>
                </div>

                <div class="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h4 class="font-semibold text-gray-950">Admin Status</h4>
                            <p class="mt-1 text-sm text-gray-500">
                                Your admin dashboard is running properly and ready to manage website content.
                            </p>
                        </div>

                        <div class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                            <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                            Online
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</x-admin-layout>