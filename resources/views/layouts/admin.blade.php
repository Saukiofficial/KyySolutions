<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }} - Admin</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])

    </head>
    <body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
        <div x-data="{ sidebarOpen: false }" @keydown.escape.window="sidebarOpen = false" class="flex h-screen bg-gray-100 dark:bg-gray-900">
            <!-- Sidebar -->
            @include('layouts.partials.sidebar')

            <!-- Main content -->
            <div class="flex-1 flex flex-col overflow-hidden">
                <!-- Topbar -->
                @include('layouts.partials.topbar')

                <!-- Page Content -->
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                    <div class="container mx-auto px-6 py-8">
                        <!-- Page Heading -->
                        @if (isset($header))
                            <header class="bg-white dark:bg-gray-800 shadow rounded-lg mb-6">
                                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {{ $header }}
                                </div>
                            </header>
                        @endif

                        {{ $slot }}
                    </div>
                </main>
            </div>
        </div>
    </body>
</html>

