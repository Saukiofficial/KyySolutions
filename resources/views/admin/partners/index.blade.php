<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Partner Management
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Partner Manager') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage your company partners, clients, and logo showcase.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.partners.create') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                </svg>
                Add New Partner
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">

            @if (session('success'))
                <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-white">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-950">{{ session('success') }}</p>
                            <p class="mt-1 text-sm text-gray-500">
                                Partner data has been updated successfully.
                            </p>
                        </div>
                    </div>
                </div>
            @endif

            <!-- Main Card -->
            <div class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">

                <div class="border-b border-gray-200 bg-gray-50 px-6 py-5">
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Partner List
                            </p>
                            <h3 class="mt-1 text-lg font-bold text-gray-950">
                                All Partners
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                                View, edit, and delete partner logos.
                            </p>
                        </div>

                        <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                            <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                            {{ $partners->total() }} Partners
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-white">
                            <tr>
                                <th scope="col" class="w-36 px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Logo
                                </th>
                                <th scope="col" class="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Partner Name
                                </th>
                                <th scope="col" class="w-48 px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100 bg-white">
                            @forelse ($partners as $partner)
                                <tr class="transition hover:bg-gray-50">
                                    <td class="px-6 py-5">
                                        <div class="flex h-16 w-28 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm">
                                            @if($partner->logo)
                                                <img src="{{ asset('storage/' . $partner->logo) }}"
                                                     alt="{{ $partner->name }}"
                                                     class="max-h-full max-w-full object-contain">
                                            @else
                                                <span class="text-sm font-bold text-gray-500">
                                                    {{ strtoupper(substr($partner->name, 0, 1)) }}
                                                </span>
                                            @endif
                                        </div>
                                    </td>

                                    <td class="px-6 py-5">
                                        <div>
                                            <p class="text-sm font-bold text-gray-950">
                                                {{ $partner->name }}
                                            </p>

                                            <div class="mt-1 flex flex-wrap items-center gap-2">
                                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                                                    ID: {{ $partner->id }}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-6 py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="{{ route('admin.partners.edit', $partner->id) }}"
                                               class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:bg-gray-950 hover:text-white">
                                                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                                </svg>
                                                Edit
                                            </a>

                                            <form action="{{ route('admin.partners.destroy', $partner->id) }}"
                                                  method="POST"
                                                  onsubmit="return confirm('Are you sure you want to delete this partner?');"
                                                  class="inline-block">
                                                @csrf
                                                @method('DELETE')

                                                <button type="submit"
                                                        class="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
                                                    <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                    </svg>
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="3" class="px-6 py-16 text-center">
                                        <div class="mx-auto flex max-w-sm flex-col items-center">
                                            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gray-100 text-gray-500">
                                                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"/>
                                                </svg>
                                            </div>

                                            <h4 class="text-base font-bold text-gray-950">
                                                No partners found
                                            </h4>

                                            <p class="mt-2 text-sm leading-6 text-gray-500">
                                                Start by adding your first partner logo.
                                            </p>

                                            <a href="{{ route('admin.partners.create') }}"
                                               class="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800">
                                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                                                </svg>
                                                Add Partner
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

                @if($partners->hasPages())
                    <div class="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        {{ $partners->links() }}
                    </div>
                @endif
            </div>

            <!-- Stats Card -->
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"/>
                        </svg>
                    </div>

                    <p class="text-sm font-medium text-gray-500">Total Partners</p>
                    <p class="mt-2 text-3xl font-bold text-gray-950">{{ $partners->total() }}</p>
                </div>
            </div>

        </div>
    </div>
</x-admin-layout>