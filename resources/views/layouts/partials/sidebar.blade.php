<!-- Mobile overlay with blur effect -->
<div x-show="sidebarOpen"
     @click.away="sidebarOpen = false"
     x-transition:enter="transition-opacity ease-linear duration-300"
     x-transition:enter-start="opacity-0"
     x-transition:enter-end="opacity-100"
     x-transition:leave="transition-opacity ease-linear duration-300"
     x-transition:leave-start="opacity-100"
     x-transition:leave-end="opacity-0"
     class="fixed inset-0 z-40 bg-blue-950/70 backdrop-blur-sm lg:hidden"
     x-cloak>
</div>

<!-- Sidebar with elegant blue theme -->
<aside
    :class="{'translate-x-0 ease-out': sidebarOpen, '-translate-x-full ease-in': !sidebarOpen}"
    class="fixed inset-y-0 left-0 z-50 flex flex-col w-72 max-h-screen transition-all duration-300 transform bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 shadow-2xl lg:static lg:translate-x-0 border-r border-blue-800/30"
    x-cloak
>
    <!-- Sidebar header with elegant blue gradient -->
    <div class="relative flex items-center justify-center h-24 overflow-hidden">
        <!-- Animated gradient background -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-600/30 animate-gradient"></div>

        <!-- Glass effect overlay -->
        <div class="absolute inset-0 backdrop-blur-xl bg-blue-400/5"></div>

        <a href="{{ route('admin.dashboard') }}" class="relative flex items-center space-x-3 group">
            <!-- Logo with elegant blue glow -->
            <div class="relative">
                <div class="absolute inset-0 bg-blue-400/40 blur-xl rounded-full group-hover:bg-cyan-400/50 transition-all duration-300"></div>
                @if(file_exists(public_path('images/logo.png')))
                    <img src="{{ asset('images/logo.png') }}"
                         alt="Logo"
                         class="relative w-12 h-12 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                @endif
                <!-- Fallback SVG Logo if image not found -->
                <div class="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" style="{{ file_exists(public_path('images/logo.png')) ? 'display:none;' : '' }}">
                    <span class="text-white font-bold text-xl">A</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="text-xl font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors duration-300">ADMIN</span>
                <span class="text-xs text-blue-300 font-medium tracking-widest">DASHBOARD</span>
            </div>
        </a>
    </div>

    <!-- Divider with elegant blue gradient -->
    <div class="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>

    <!-- Sidebar navigation -->
    <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">

        <!-- Dashboard -->
        <a href="{{ route('admin.dashboard') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.dashboard') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.dashboard') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Dashboard</span>
            @if(request()->routeIs('admin.dashboard'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Hero Manager -->
        <a href="{{ route('admin.hero-sections.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.hero-sections.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.hero-sections.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Hero Manager</span>
            @if(request()->routeIs('admin.hero-sections.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- About Manager -->
        <a href="{{ route('admin.about-sections.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.about-sections.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.about-sections.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">About Manager</span>
            @if(request()->routeIs('admin.about-sections.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Services Manager -->
        <a href="{{ route('admin.services.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.services.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.services.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Services Manager</span>
            @if(request()->routeIs('admin.services.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Portfolio Manager -->
        <a href="{{ route('admin.portfolios.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.portfolios.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.portfolios.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Portfolio Manager</span>
            @if(request()->routeIs('admin.portfolios.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Team Manager -->
        <a href="{{ route('admin.teams.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.teams.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.teams.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Team Manager</span>
            @if(request()->routeIs('admin.teams.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Partner Manager -->
        <a href="{{ route('admin.partners.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.partners.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.partners.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Partner Manager</span>
            @if(request()->routeIs('admin.partners.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Divider with elegant blue -->
        <div class="h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent my-4"></div>

        <!-- Contact Messages -->
        <a href="{{ route('admin.contacts.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.contacts.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.contacts.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Contact Messages</span>
            @if(request()->routeIs('admin.contacts.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>

        <!-- Settings -->
        <a href="{{ route('admin.settings.index') }}"
           class="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 {{ request()->routeIs('admin.settings.*') ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105' : 'text-blue-100 hover:bg-blue-800/40 hover:text-white hover:translate-x-1' }}">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg {{ request()->routeIs('admin.settings.*') ? 'bg-white/20' : 'bg-blue-900/50 group-hover:bg-blue-800/50' }} transition-all duration-300">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <span class="ml-3 font-medium">Settings</span>
            @if(request()->routeIs('admin.settings.*'))
            <div class="ml-auto w-1.5 h-8 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/50"></div>
            @endif
        </a>
    </nav>

    <!-- Footer with elegant blue theme -->
    <div class="p-4 border-t border-blue-800/30">
        <div class="flex items-center px-4 py-3 rounded-xl bg-blue-900/30 backdrop-blur-sm border border-blue-700/20">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                AD
            </div>
            <div class="ml-3 flex-1">
                <p class="text-sm font-medium text-white">Admin User</p>
                <p class="text-xs text-blue-300">admin@example.com</p>
            </div>
            <div class="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse"></div>
        </div>
    </div>
</aside>

<style>
/* Custom elegant blue scrollbar */
.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #1e40af;
    border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
}

/* Animated gradient for elegant blue */
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
}

/* Pulse animation for status indicator */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
