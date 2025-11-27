<header class="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-2xl border-b border-blue-800/30">
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">

            <!-- Header: Left side -->
            <div class="flex items-center space-x-4">
                <!-- Hamburger button with elegant animation -->
                <button class="lg:hidden relative group" @click.stop="sidebarOpen = !sidebarOpen"
                    aria-controls="sidebar" :aria-expanded="sidebarOpen">
                    <span class="sr-only">Open sidebar</span>
                    <div class="relative w-10 h-10 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                        <svg class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                            <rect x="4" y="5" width="16" height="2" rx="1" />
                            <rect x="4" y="11" width="16" height="2" rx="1" />
                            <rect x="4" y="17" width="16" height="2" rx="1" />
                        </svg>
                    </div>
                </button>

                <!-- Search bar for desktop (optional) -->
                <div class="hidden md:flex items-center">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type="text"
                               placeholder="Search..."
                               class="w-64 pl-10 pr-4 py-2 bg-blue-900/30 border border-blue-700/30 rounded-lg text-sm text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300">
                    </div>
                </div>
            </div>

            <!-- Header: Right side -->
            <div class="flex items-center space-x-3">

                <!-- Notifications (optional) -->
                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open"
                            class="relative w-10 h-10 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 flex items-center justify-center group hover:scale-110">
                        <svg class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <!-- Notification badge -->
                        <span class="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>
                    </button>

                    <!-- Notification dropdown -->
                    <div x-show="open"
                         @click.outside="open = false"
                         x-transition:enter="transition ease-out duration-200 transform"
                         x-transition:enter-start="opacity-0 -translate-y-2"
                         x-transition:enter-end="opacity-100 translate-y-0"
                         x-transition:leave="transition ease-out duration-200"
                         x-transition:leave-start="opacity-100"
                         x-transition:leave-end="opacity-0"
                         class="absolute right-0 mt-2 w-80 bg-gradient-to-b from-blue-950 to-blue-900 border border-blue-700/30 rounded-xl shadow-2xl overflow-hidden z-50"
                         x-cloak>
                        <div class="p-4 border-b border-blue-700/30">
                            <h3 class="text-sm font-semibold text-white">Notifications</h3>
                        </div>
                        <div class="max-h-96 overflow-y-auto">
                            <div class="p-4 hover:bg-blue-800/30 transition-colors duration-200 cursor-pointer border-b border-blue-800/20">
                                <p class="text-sm text-blue-100">New contact message received</p>
                                <p class="text-xs text-blue-400 mt-1">2 minutes ago</p>
                            </div>
                            <div class="p-4 hover:bg-blue-800/30 transition-colors duration-200 cursor-pointer border-b border-blue-800/20">
                                <p class="text-sm text-blue-100">Portfolio updated successfully</p>
                                <p class="text-xs text-blue-400 mt-1">1 hour ago</p>
                            </div>
                            <div class="p-4 hover:bg-blue-800/30 transition-colors duration-200 cursor-pointer">
                                <p class="text-sm text-blue-100">New team member added</p>
                                <p class="text-xs text-blue-400 mt-1">3 hours ago</p>
                            </div>
                        </div>
                        <div class="p-3 border-t border-blue-700/30 text-center">
                            <a href="#" class="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200">View all notifications</a>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <div class="h-8 w-px bg-blue-700/50"></div>

                <!-- User button with elegant design -->
                <div class="relative inline-flex" x-data="{ open: false }">
                    <button class="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 group"
                            @click.prevent="open = !open"
                            :aria-expanded="open">
                        <!-- User avatar with gradient -->
                        <div class="relative">
                            <div class="absolute inset-0 bg-cyan-400/30 blur-md rounded-full group-hover:bg-cyan-400/40 transition-all duration-300"></div>
                            <div class="relative w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                {{ substr(Auth::user()->name, 0, 1) }}
                            </div>
                            <!-- Online status indicator -->
                            <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-950 rounded-full shadow-lg"></div>
                        </div>

                        <!-- User info -->
                        <div class="hidden sm:flex flex-col items-start">
                            <span class="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300">
                                {{ Auth::user()->name }}
                            </span>
                            <span class="text-xs text-blue-300">Administrator</span>
                        </div>

                        <!-- Dropdown arrow -->
                        <svg class="w-4 h-4 text-blue-300 group-hover:text-white transition-all duration-300"
                             :class="{'rotate-180': open}"
                             viewBox="0 0 12 12"
                             fill="currentColor">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </button>

                    <!-- Elegant Dropdown Menu -->
                    <div class="origin-top-right z-50 absolute top-full right-0 min-w-56 bg-gradient-to-b from-blue-950 to-blue-900 border border-blue-700/30 rounded-xl shadow-2xl overflow-hidden mt-2"
                        @click.outside="open = false"
                        @keydown.escape.window="open = false"
                        x-show="open"
                        x-transition:enter="transition ease-out duration-200 transform"
                        x-transition:enter-start="opacity-0 -translate-y-2"
                        x-transition:enter-end="opacity-100 translate-y-0"
                        x-transition:leave="transition ease-out duration-200"
                        x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0"
                        x-cloak>

                        <!-- User info header -->
                        <div class="p-4 border-b border-blue-700/30 bg-blue-900/30">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center font-bold shadow-lg">
                                    {{ substr(Auth::user()->name, 0, 1) }}
                                </div>
                                <div>
                                    <div class="font-semibold text-white">{{ Auth::user()->name }}</div>
                                    <div class="text-xs text-blue-300">{{ Auth::user()->email }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Menu items -->
                        <ul class="py-2">
                            <li>
                                <a class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-800/40 hover:text-white transition-all duration-200 group"
                                    href="{{ route('admin.profile.edit') }}"
                                    @click="open = false">
                                    <svg class="w-5 h-5 mr-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span class="font-medium">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-800/40 hover:text-white transition-all duration-200 group"
                                    href="{{ route('admin.settings.index') }}"
                                    @click="open = false">
                                    <svg class="w-5 h-5 mr-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>

                            <!-- Divider -->
                            <li>
                                <div class="h-px bg-blue-700/30 my-2"></div>
                            </li>

                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button type="submit"
                                        class="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 group">
                                        <svg class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span class="font-medium">Sign Out</span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
</header>

<style>
/* Custom scrollbar for notifications */
.max-h-96::-webkit-scrollbar {
    width: 6px;
}

.max-h-96::-webkit-scrollbar-track {
    background: rgba(30, 58, 138, 0.3);
}

.max-h-96::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 3px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.7);
}

/* Smooth rotation for dropdown arrow */
svg {
    transition: transform 0.3s ease;
}
</style>
