# KyySolutions — Agent Guide

## Stack
- **Backend**: Laravel 11 + PHP 8.2
- **Frontend (public)**: React 18 + Inertia.js v2 (rendered via `resources/js/app.jsx`)
- **Frontend (admin)**: Blade + Alpine.js (rendered via `resources/js/app.js`)
- **Styling**: Tailwind CSS 3 + Headless UI + Framer Motion
- **Database**: MySQL (`kyysolutions`)
- **Build**: Vite 5 (`resources/js/app.js` and `resources/js/app.jsx` are both entry points)

## Architecture
- **Two separate frontends in one repo**: React/Inertia for landing page, Blade for admin panel.
  - Public routes (`HomeController`) → Inertia renders `resources/js/Pages/*.jsx`
  - Admin routes (`Admin\*Controller`) → Blade renders `resources/views/admin/*.blade.php`
  - Admin uses `prefix('admin')->name('admin.')` with `auth` + `verified` middleware
- Models: HeroSection, AboutSection, Service, Portfolio, Team, Contact, Setting, Partner, Article, Tutorial, User
- Font: Outfit via Google Fonts (declared in `resources/views/app.blade.php`)

## Commands
```bash
# Dev (runs 4 processes concurrently)
composer dev
# Equivalent to: php artisan serve + php artisan queue:listen --tries=1 + php artisan pail --timeout=0 + npm run dev

# Individual commands
npm run dev          # Vite HMR
npm run build        # Vite production build
php artisan serve    # Laravel dev server
php artisan queue:listen --tries=1
php artisan pail     # Tail log viewer

# Testing
phpunit              # Uses MySQL from .env (NOT SQLite in-memory)
                      # DB must exist and be migrated

# Linting
./vendor/bin/pint    # Laravel Pint (PSR-12 style)
```

## Testing
- PHPUnit with `tests/Unit/` and `tests/Feature/` suites
- **Crucial**: `phpunit.xml` has `<env name="DB_CONNECTION" value="sqlite"/>` **commented out** — tests use the real MySQL database from `.env`. Run `php artisan migrate --env=testing` first if tests need DB.
- No CI workflows exist.

## Conventions
- Controllers: `Admin\*` namespace for admin, flat namespace for public
- Routes: landing routes in `routes/web.php`, admin under `/admin` prefix, auth in `routes/auth.php`, API contact POST in `routes/api.php`
- Blade views live in `resources/views/admin/`, Inertia pages in `resources/js/Pages/`
- Inertia Layouts: `resources/js/Layouts/`; Blade Layouts: `resources/views/layouts/`
- Ziggy available for route generation in JS (`@routes` in `app.blade.php`)
- Tawk.to widget integrated on landing page
