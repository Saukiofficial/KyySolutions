<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - Admin</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800&display=swap" rel="stylesheet" />

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        :root {
            --admin-bg: #f4f4f5;
            --admin-surface: #ffffff;
            --admin-surface-soft: #fafafa;
            --admin-border: #e4e4e7;
            --admin-border-strong: #d4d4d8;
            --admin-text: #18181b;
            --admin-muted: #71717a;
            --admin-soft-muted: #a1a1aa;
            --admin-dark: #18181b;
            --admin-dark-hover: #27272a;
            --admin-radius: 22px;
            --admin-shadow: 0 18px 45px rgba(24, 24, 27, 0.06);
            --admin-shadow-soft: 0 8px 24px rgba(24, 24, 27, 0.05);
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background:
                radial-gradient(circle at top left, rgba(212, 212, 216, 0.45), transparent 34%),
                linear-gradient(135deg, #f8fafc 0%, #f4f4f5 42%, #e5e7eb 100%);
            color: var(--admin-text);
        }

        [x-cloak] {
            display: none !important;
        }

        .admin-shell {
            min-height: 100vh;
            background:
                radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.8), transparent 28%),
                radial-gradient(circle at 90% 10%, rgba(212, 212, 216, 0.45), transparent 26%);
        }

        .admin-main-wrapper {
            position: relative;
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .admin-main {
            position: relative;
            flex: 1;
            overflow-x: hidden;
            overflow-y: auto;
            background: transparent;
        }

        .admin-main::before {
            content: "";
            position: fixed;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(24, 24, 27, 0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(24, 24, 27, 0.035) 1px, transparent 1px);
            background-size: 34px 34px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 72%);
            z-index: 0;
        }

        .admin-content {
            position: relative;
            z-index: 1;
            width: 100%;
            padding: 24px;
        }

        .admin-content-inner {
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
        }

        .admin-header-card {
            position: relative;
            overflow: hidden;
            margin-bottom: 24px;
            border: 1px solid rgba(228, 228, 231, 0.9);
            border-radius: var(--admin-radius);
            background:
                linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(250, 250, 250, 0.88));
            box-shadow: var(--admin-shadow-soft);
            backdrop-filter: blur(18px);
        }

        .admin-header-card::before {
            content: "";
            position: absolute;
            width: 180px;
            height: 180px;
            right: -80px;
            top: -95px;
            border-radius: 999px;
            background: rgba(24, 24, 27, 0.07);
        }

        .admin-header-card::after {
            content: "";
            position: absolute;
            width: 120px;
            height: 120px;
            left: 35%;
            bottom: -80px;
            border-radius: 999px;
            background: rgba(161, 161, 170, 0.12);
        }

        .admin-header-content {
            position: relative;
            z-index: 1;
            padding: 22px 24px;
        }

        .admin-page-card {
            border: 1px solid rgba(228, 228, 231, 0.86);
            border-radius: var(--admin-radius);
            background: rgba(255, 255, 255, 0.72);
            box-shadow: var(--admin-shadow);
            backdrop-filter: blur(16px);
        }

        ::selection {
            background: #18181b;
            color: #ffffff;
        }

        ::-webkit-scrollbar {
            width: 7px;
            height: 7px;
        }

        ::-webkit-scrollbar-track {
            background: #f4f4f5;
        }

        ::-webkit-scrollbar-thumb {
            background: #c7c7cc;
            border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #a1a1aa;
        }

        input,
        textarea,
        select,
        button {
            font-family: inherit;
        }

        @media (max-width: 1024px) {
            .admin-content {
                padding: 18px;
            }

            .admin-header-content {
                padding: 18px;
            }
        }

        @media (max-width: 640px) {
            .admin-content {
                padding: 14px;
            }

            .admin-header-card {
                border-radius: 18px;
                margin-bottom: 18px;
            }

            .admin-header-content {
                padding: 16px;
            }
        }
    </style>
</head>

<body class="font-sans antialiased">
    <div
        x-data="{ sidebarOpen: false }"
        @keydown.escape.window="sidebarOpen = false"
        class="admin-shell flex h-screen overflow-hidden"
    >
        @include('layouts.partials.sidebar')

        <div class="admin-main-wrapper">
            @include('layouts.partials.topbar')

            <main class="admin-main">
                <div class="admin-content">
                    <div class="admin-content-inner">

                        @if (isset($header))
                            <div class="admin-header-card">
                                <div class="admin-header-content">
                                    {{ $header }}
                                </div>
                            </div>
                        @endif

                        <div class="admin-page-card">
                            <div class="p-4 sm:p-5 lg:p-6">
                                {{ $slot }}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    </div>
</body>
</html>