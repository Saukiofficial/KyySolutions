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
    <body class="font-sans antialiased bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
        <div x-data="{ sidebarOpen: false }" @keydown.escape.window="sidebarOpen = false" class="flex h-screen overflow-hidden">
            <!-- Sidebar -->
            @include('layouts.partials.sidebar')

            <!-- Main content -->
            <div class="flex-1 flex flex-col overflow-hidden">
                <!-- Topbar -->
                @include('layouts.partials.topbar')

                <!-- Page Content with Elegant Blue Background -->
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
                    <div class="container mx-auto px-6 py-8">
                        <!-- Page Heading -->
                        @if (isset($header))
                            <header class="bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-700/30 shadow-xl rounded-xl mb-6">
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

        <!-- Optional: Background Pattern Overlay -->
        <style>
            /* Elegant scrollbar */
            ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
            }

            ::-webkit-scrollbar-track {
                background: rgba(15, 23, 42, 0.5);
            }

            ::-webkit-scrollbar-thumb {
                background: rgba(37, 99, 235, 0.5);
                border-radius: 5px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: rgba(59, 130, 246, 0.7);
            }

            /* Smooth scrolling */
            html {
                scroll-behavior: smooth;
            }

            /* Background animation */
            @keyframes gradient-shift {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            body {
                background-size: 200% 200%;
                animation: gradient-shift 15s ease infinite;
            }
        </style>
    </body>
</html>
