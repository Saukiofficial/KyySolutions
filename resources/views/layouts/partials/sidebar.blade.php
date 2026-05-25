<!-- Mobile overlay -->
<div x-show="sidebarOpen"
     @click.away="sidebarOpen = false"
     x-transition:enter="transition-opacity ease-linear duration-300"
     x-transition:enter-start="opacity-0"
     x-transition:enter-end="opacity-100"
     x-transition:leave="transition-opacity ease-linear duration-300"
     x-transition:leave-start="opacity-100"
     x-transition:leave-end="opacity-0"
     class="fixed inset-0 z-40 bg-zinc-950/55 backdrop-blur-sm lg:hidden"
     x-cloak>
</div>

<aside
    id="sidebar"
    :class="{'translate-x-0 ease-out': sidebarOpen, '-translate-x-full ease-in': !sidebarOpen}"
    class="fixed inset-y-0 left-0 z-50 flex w-72 max-h-screen flex-col overflow-hidden border-r border-zinc-200/80 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 shadow-[10px_0_35px_rgba(24,24,27,0.05)] transition-all duration-300 lg:static lg:translate-x-0"
    x-cloak
>
    <!-- Logo / Brand -->
    <div class="px-4 pt-4 pb-3">
        <a href="{{ route('admin.dashboard') }}"
           class="group flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/80 px-3.5 py-3 shadow-sm transition duration-200 hover:border-zinc-300 hover:bg-white hover:shadow-md">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-600 shadow-sm ring-1 ring-zinc-950/10">
                <span class="text-sm font-bold tracking-wide text-white">K</span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                    <span class="truncate text-sm font-bold tracking-tight text-zinc-950">Admin Panel</span>
                    <span class="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500 ring-1 ring-zinc-200">Pro</span>
                </div>
                <span class="block truncate text-xs font-medium text-zinc-400">Premium Dashboard</span>
            </div>
        </a>
    </div>

    <nav class="sidebar-scroll flex-1 space-y-5 overflow-y-auto px-4 pb-4 pt-2">
        @php
            $navItems = [
                ['route' => 'admin.dashboard', 'label' => 'Dashboard', 'icon' => 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'],
                ['route' => 'admin.hero-sections.*', 'label' => 'Hero Manager', 'icon' => 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'],
                ['route' => 'admin.about-sections.*', 'label' => 'About Manager', 'icon' => 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
                ['route' => 'admin.services.*', 'label' => 'Services', 'icon' => 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
                ['route' => 'admin.portfolios.*', 'label' => 'Portfolio', 'icon' => 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'],
                ['route' => 'admin.teams.*', 'label' => 'Team', 'icon' => 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'],
                ['route' => 'admin.partners.*', 'label' => 'Partners', 'icon' => 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'],
                ['route' => 'admin.articles.*', 'label' => 'News / Articles', 'icon' => 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'],
                ['route' => 'admin.tutorials.*', 'label' => 'Tutorials', 'icon' => 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'],
            ];

            $bottomItems = [
                ['route' => 'admin.contacts.*', 'label' => 'Messages', 'icon' => 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
                ['route' => 'admin.settings.*', 'label' => 'Settings', 'icon' => 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z'],
            ];
        @endphp

        <!-- Main Menu -->
        <div>
            <div class="mb-2 flex items-center justify-between px-2">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">Menu</p>
                <span class="h-1.5 w-1.5 rounded-full bg-zinc-300"></span>
            </div>

            <div class="space-y-1">
                @foreach($navItems as $item)
                    @php
                        $isActive = request()->routeIs($item['route']);
                        $routeName = str_replace('.*', '.index', $item['route']);
                    @endphp

                    <a href="{{ route($routeName) }}"
                       class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200
                              {{ $isActive
                                  ? 'bg-zinc-950 text-white shadow-sm shadow-zinc-950/15'
                                  : 'text-zinc-600 hover:bg-white hover:text-zinc-950 hover:shadow-sm hover:ring-1 hover:ring-zinc-200/80' }}">
                        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200
                                     {{ $isActive ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200/70 group-hover:text-zinc-800' }}">
                            <svg class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="{{ $item['icon'] }}" />
                            </svg>
                        </span>

                        <span class="min-w-0 flex-1 truncate">{{ $item['label'] }}</span>

                        @if($isActive)
                            <span class="h-1.5 w-1.5 rounded-full bg-white/80"></span>
                        @else
                            <svg class="h-4 w-4 translate-x-1 text-zinc-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        @endif
                    </a>
                @endforeach
            </div>
        </div>

        <!-- System Menu -->
        <div>
            <div class="mb-2 px-2">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">System</p>
            </div>

            <div class="space-y-1 rounded-2xl border border-zinc-200/70 bg-white/60 p-1.5 shadow-sm">
                @foreach($bottomItems as $item)
                    @php
                        $isActive = request()->routeIs($item['route']);
                        $routeName = str_replace('.*', '.index', $item['route']);
                    @endphp

                    <a href="{{ route($routeName) }}"
                       class="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200
                              {{ $isActive
                                  ? 'bg-zinc-900 text-white shadow-sm'
                                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950' }}">
                        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200
                                     {{ $isActive ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-white group-hover:text-zinc-800' }}">
                            <svg class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="{{ $item['icon'] }}" />
                            </svg>
                        </span>
                        <span class="min-w-0 flex-1 truncate">{{ $item['label'] }}</span>
                    </a>
                @endforeach
            </div>
        </div>
    </nav>

    <!-- Footer User -->
    <div class="border-t border-zinc-200/80 bg-white/70 p-4 backdrop-blur">
        <div class="flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-100 px-3 py-3 shadow-sm">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold uppercase text-white shadow-sm ring-4 ring-zinc-100">
                {{ substr(Auth::user()->name, 0, 1) }}
            </div>
            <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-bold text-zinc-950">{{ Auth::user()->name }}</p>
                <p class="truncate text-xs font-medium text-zinc-400">Administrator</p>
            </div>
            <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    </div>
</aside>

<style>
    .sidebar-scroll {
        scrollbar-width: thin;
        scrollbar-color: #d4d4d8 transparent;
    }

    .sidebar-scroll::-webkit-scrollbar {
        width: 6px;
    }

    .sidebar-scroll::-webkit-scrollbar-track {
        background: transparent;
    }

    .sidebar-scroll::-webkit-scrollbar-thumb {
        background: #d4d4d8;
        border-radius: 999px;
    }

    .sidebar-scroll::-webkit-scrollbar-thumb:hover {
        background: #a1a1aa;
    }
</style>
