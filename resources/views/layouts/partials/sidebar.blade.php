<!-- Mobile overlay -->
<div x-show="sidebarOpen" @click.away="sidebarOpen = false" class="fixed inset-0 z-40 transition-opacity bg-black opacity-50 lg:hidden" x-cloak></div>

<!-- Sidebar -->
<aside
    :class="{'translate-x-0 ease-out': sidebarOpen, '-translate-x-full ease-in': !sidebarOpen}"
    class="fixed inset-y-0 left-0 z-50 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-y-auto transition duration-300 transform bg-white shadow-lg dark:bg-gray-800 lg:static lg:translate-x-0"
    x-cloak
>
    <!-- Sidebar header -->
    <div class="flex items-center justify-center h-20 text-white bg-gray-900 dark:bg-gray-900">
        <a href="{{ route('admin.dashboard') }}" class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M6 12H3m18 0h-3" />
            </svg>
            <span class="text-2xl font-bold tracking-wider uppercase">Admin Panel</span>
        </a>
    </div>

    <!-- Sidebar links -->
    <nav class="flex-1 px-2 py-4 space-y-2">
        <a href="{{ route('admin.dashboard') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.dashboard') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            <span>Dashboard</span>
        </a>
        <a href="{{ route('admin.hero-sections.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.hero-sections.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            <span>Hero Manager</span>
        </a>
        <a href="{{ route('admin.about-sections.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.about-sections.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>About Manager</span>
        </a>
        <a href="{{ route('admin.services.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.services.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
             <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>Services Manager</span>
        </a>
        <a href="{{ route('admin.portfolios.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.portfolios.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>Portfolio Manager</span>
        </a>
        <a href="{{ route('admin.teams.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.teams.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span>Team Manager</span>
        </a>
         <a href="{{ route('admin.contacts.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.contacts.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
            <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>Contact Messages</span>
        </a>
         <a href="{{ route('admin.settings.index') }}" class="flex items-center px-4 py-2 text-gray-700 rounded-md dark:text-gray-200 {{ request()->routeIs('admin.settings.*') ? 'bg-indigo-200 dark:bg-indigo-600' : 'hover:bg-indigo-200 dark:hover:bg-indigo-600' }}">
           <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>Settings</span>
        </a>
    </nav>
</aside>

