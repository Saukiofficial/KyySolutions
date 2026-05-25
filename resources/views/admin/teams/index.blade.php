<x-admin-layout>
    <x-slot name="header">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg shadow-gray-900/20">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>

                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
                        Team Management
                    </div>

                    <h2 class="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                        {{ __('Team Manager') }}
                    </h2>

                    <p class="mt-1 text-sm text-gray-500">
                        Manage team members displayed on your website.
                    </p>
                </div>
            </div>

            <a href="{{ route('admin.teams.create') }}"
               class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                </svg>
                Add New Member
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
                                Team member data has been updated successfully.
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
                                Member List
                            </p>
                            <h3 class="mt-1 text-lg font-bold text-gray-950">
                                Team Members
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                                View, edit, and delete team member profiles.
                            </p>
                        </div>

                        <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                            <span class="h-2 w-2 rounded-full bg-gray-900"></span>
                            {{ $teams->total() }} Members
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-white">
                            <tr>
                                <th scope="col" class="w-28 px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Photo
                                </th>
                                <th scope="col" class="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Member
                                </th>
                                <th scope="col" class="hidden px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-gray-400 md:table-cell">
                                    Role
                                </th>
                                <th scope="col" class="w-48 px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100 bg-white">
                            @forelse ($teams as $team)
                                <tr class="transition hover:bg-gray-50">
                                    <td class="px-6 py-5">
                                        <div class="h-14 w-14 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
                                            @if($team->photo)
                                                <img src="{{ asset('storage/' . $team->photo) }}"
                                                     alt="{{ $team->name }}"
                                                     class="h-full w-full object-cover">
                                            @else
                                                <div class="flex h-full w-full items-center justify-center text-sm font-bold text-gray-500">
                                                    {{ strtoupper(substr($team->name, 0, 1)) }}
                                                </div>
                                            @endif
                                        </div>
                                    </td>

                                    <td class="px-6 py-5">
                                        <div>
                                            <p class="text-sm font-bold text-gray-950">
                                                {{ $team->name }}
                                            </p>

                                            <div class="mt-1 flex flex-wrap items-center gap-2">
                                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500 md:hidden">
                                                    {{ $team->role }}
                                                </span>

                                                <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                                                    ID: {{ $team->id }}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="hidden px-6 py-5 md:table-cell">
                                        <span class="inline-flex rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
                                            {{ $team->role }}
                                        </span>
                                    </td>

                                    <td class="px-6 py-5 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="{{ route('admin.teams.edit', $team->id) }}"
                                               class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:bg-gray-950 hover:text-white">
                                                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                                </svg>
                                                Edit
                                            </a>

                                            <form action="{{ route('admin.teams.destroy', $team->id) }}"
                                                  method="POST"
                                                  onsubmit="return confirm('Are you sure you want to delete this team member?');"
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
                                    <td colspan="4" class="px-6 py-16 text-center">
                                        <div class="mx-auto flex max-w-sm flex-col items-center">
                                            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gray-100 text-gray-500">
                                                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                            </div>

                                            <h4 class="text-base font-bold text-gray-950">
                                                No team members found
                                            </h4>

                                            <p class="mt-2 text-sm leading-6 text-gray-500">
                                                Start by adding your first team member.
                                            </p>

                                            <a href="{{ route('admin.teams.create') }}"
                                               class="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800">
                                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v16m8-8H4"/>
                                                </svg>
                                                Create Member
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

                @if($teams->hasPages())
                    <div class="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        {{ $teams->links() }}
                    </div>
                @endif
            </div>

        </div>
    </div>
</x-admin-layout>