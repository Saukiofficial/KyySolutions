<header class="relative bg-white dark:bg-gray-800 shadow-md">
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 -mb-px">

            <!-- Header: Left side -->
            <div class="flex">
                <!-- Hamburger button -->
                <button class="text-gray-500 hover:text-gray-600 lg:hidden" @click.stop="sidebarOpen = !sidebarOpen"
                    aria-controls="sidebar" :aria-expanded="sidebarOpen">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="5" width="16" height="2" />
                        <rect x="4" y="11" width="16" height="2" />
                        <rect x="4" y="17" width="16" height="2" />
                    </svg>
                </button>
            </div>

            <!-- Header: Right side -->
            <div class="flex items-center space-x-3">

                <!-- User button -->
                <div class="relative inline-flex" x-data="{ open: false }">
                    <button class="inline-flex justify-center items-center group" @click.prevent="open = !open"
                        :aria-expanded="open">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                            {{ substr(Auth::user()->name, 0, 1) }}
                        </div>
                        <div class="flex items-center truncate">
                            <span
                                class="truncate ml-2 text-sm font-medium dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white">{{
                                Auth::user()->name }}</span>
                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                        </div>
                    </button>
                    <!-- Dropdown -->
                    <div class="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                        @click.outside="open = false" @keydown.escape.window="open = false" x-show="open"
                        x-transition:enter="transition ease-out duration-200 transform"
                        x-transition:enter-start="opacity-0 -translate-y-2"
                        x-transition:enter-end="opacity-100 translate-y-0"
                        x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0" x-cloak>
                        <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700">
                            <div class="font-medium text-gray-800 dark:text-gray-100">{{ Auth::user()->name }}</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400 italic">Administrator</div>
                        </div>
                        <ul>
                            <li>
                                {{-- PERBAIKAN DI SINI --}}
                                <a class="font-medium text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center py-1 px-3"
                                    href="{{ route('admin.profile.edit') }}" @click="open = false" @focus="open = true"
                                    @focusout="open = false">
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button
                                        class="font-medium text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center py-1 px-3"
                                        @click="open = false" @focus="open = true" @focusout="open = false">
                                        <span>Sign Out</span>
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

