<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::latest()->paginate(10);

        return view('admin.teams.index', compact('teams'));
    }

    public function create()
    {
        return view('admin.teams.create');
    }

    private function linesToArray(?string $value): array
    {
        if (!$value) {
            return [];
        }

        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $value))));
    }

    private function worksToArray(?string $value): array
    {
        if (!$value) {
            return [];
        }

        $lines = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $value))));

        return array_map(function ($line) {
            $parts = array_map('trim', explode('|', $line));

            return [
                'title' => $parts[0] ?? '',
                'description' => $parts[1] ?? '',
                'url' => $parts[2] ?? '',
            ];
        }, $lines);
    }

    private function generateUniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($name);
        $slug = $baseSlug;
        $counter = 1;

        while (
            Team::where('slug', $slug)
                ->when($ignoreId, fn ($query) => $query->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'location' => 'nullable|string|max:255',
            'experience_years' => 'nullable|string|max:255',
            'photo' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',

            'social_media' => 'nullable|array',
            'social_media.*' => 'nullable|url',

            'skills' => 'nullable|string',
            'programming_languages' => 'nullable|string',
            'tools' => 'nullable|string',
            'works' => 'nullable|string',
        ]);

        $validated['slug'] = $this->generateUniqueSlug($validated['name']);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('teams', 'public');
        }

        $validated['skills'] = $this->linesToArray($request->skills);
        $validated['programming_languages'] = $this->linesToArray($request->programming_languages);
        $validated['tools'] = $this->linesToArray($request->tools);
        $validated['works'] = $this->worksToArray($request->works);

        Team::create($validated);

        return redirect()
            ->route('admin.teams.index')
            ->with('success', 'Team member added successfully.');
    }

    public function edit(Team $team)
    {
        return view('admin.teams.edit', compact('team'));
    }

    public function update(Request $request, Team $team)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'location' => 'nullable|string|max:255',
            'experience_years' => 'nullable|string|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',

            'social_media' => 'nullable|array',
            'social_media.*' => 'nullable|url',

            'skills' => 'nullable|string',
            'programming_languages' => 'nullable|string',
            'tools' => 'nullable|string',
            'works' => 'nullable|string',
        ]);

        $validated['slug'] = $team->slug ?: $this->generateUniqueSlug($validated['name'], $team->id);

        if ($team->name !== $validated['name']) {
            $validated['slug'] = $this->generateUniqueSlug($validated['name'], $team->id);
        }

        if ($request->hasFile('photo')) {
            if ($team->photo && Storage::disk('public')->exists($team->photo)) {
                Storage::disk('public')->delete($team->photo);
            }

            $validated['photo'] = $request->file('photo')->store('teams', 'public');
        }

        $validated['skills'] = $this->linesToArray($request->skills);
        $validated['programming_languages'] = $this->linesToArray($request->programming_languages);
        $validated['tools'] = $this->linesToArray($request->tools);
        $validated['works'] = $this->worksToArray($request->works);

        $team->update($validated);

        return redirect()
            ->route('admin.teams.index')
            ->with('success', 'Team member updated successfully.');
    }

    public function destroy(Team $team)
    {
        if ($team->photo && Storage::disk('public')->exists($team->photo)) {
            Storage::disk('public')->delete($team->photo);
        }

        $team->delete();

        return redirect()
            ->route('admin.teams.index')
            ->with('success', 'Team member deleted successfully.');
    }
}