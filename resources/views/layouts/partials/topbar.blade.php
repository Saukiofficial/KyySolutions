<header class="topbar">
    <div class="topbar-inner">

        <!-- Left: Hamburger + Search -->
        <div class="topbar-left">
            <button class="topbar-hamburger lg:hidden"
                @click.stop="sidebarOpen = !sidebarOpen"
                aria-controls="sidebar"
                :aria-expanded="sidebarOpen">
                <span class="sr-only">Open sidebar</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
                    <line x1="2" y1="4.5" x2="16" y2="4.5"/>
                    <line x1="2" y1="9" x2="16" y2="9"/>
                    <line x1="2" y1="13.5" x2="16" y2="13.5"/>
                </svg>
            </button>

            <div class="topbar-search hidden md:flex">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" stroke-width="1.5" class="search-icon">
                    <circle cx="6.5" cy="6.5" r="4.5"/>
                    <line x1="10" y1="10" x2="13.5" y2="13.5"/>
                </svg>
                <input type="text" placeholder="Search anything..." class="search-input" />
                <kbd class="search-kbd">⌘K</kbd>
            </div>
        </div>

        <!-- Right: Actions + User -->
        <div class="topbar-right">

            <!-- Notifications -->
            <div class="relative" x-data="{ open: false }">
                <button @click="open = !open" class="topbar-icon-btn" title="Notifications">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    <span class="notif-dot"></span>
                </button>

                <!-- Notification Dropdown -->
                <div x-show="open"
                     @click.outside="open = false"
                     x-transition:enter="transition ease-out duration-150"
                     x-transition:enter-start="opacity-0 translate-y-1"
                     x-transition:enter-end="opacity-100 translate-y-0"
                     x-transition:leave="transition ease-in duration-100"
                     x-transition:leave-start="opacity-100"
                     x-transition:leave-end="opacity-0"
                     class="dropdown-panel notif-panel"
                     x-cloak>
                    <div class="dropdown-header">
                        <span class="dropdown-title">Notifications</span>
                        <span class="notif-badge">3 new</span>
                    </div>
                    <div class="notif-list">
                        <div class="notif-item unread">
                            <div class="notif-dot-inline"></div>
                            <div class="notif-content">
                                <p>New contact message received</p>
                                <span>2 minutes ago</span>
                            </div>
                        </div>
                        <div class="notif-item unread">
                            <div class="notif-dot-inline"></div>
                            <div class="notif-content">
                                <p>Portfolio updated successfully</p>
                                <span>1 hour ago</span>
                            </div>
                        </div>
                        <div class="notif-item">
                            <div class="notif-dot-inline invisible"></div>
                            <div class="notif-content">
                                <p>New team member added</p>
                                <span>3 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-footer">
                        <a href="#" class="dropdown-footer-link">View all</a>
                    </div>
                </div>
            </div>

            <div class="topbar-divider"></div>

            <!-- User Menu -->
            <div class="relative" x-data="{ open: false }">
                <button class="user-btn"
                        @click.prevent="open = !open"
                        :aria-expanded="open">
                    <div class="user-avatar">
                        {{ substr(Auth::user()->name, 0, 1) }}
                    </div>
                    <div class="user-info hidden sm:block">
                        <span class="user-name">{{ Auth::user()->name }}</span>
                        <span class="user-role">Administrator</span>
                    </div>
                    <svg class="user-chevron" :class="{'rotated': open}" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75">
                        <polyline points="2,5 7,10 12,5"/>
                    </svg>
                </button>

                <!-- User Dropdown -->
                <div class="dropdown-panel user-panel"
                    @click.outside="open = false"
                    @keydown.escape.window="open = false"
                    x-show="open"
                    x-transition:enter="transition ease-out duration-150"
                    x-transition:enter-start="opacity-0 translate-y-1"
                    x-transition:enter-end="opacity-100 translate-y-0"
                    x-transition:leave="transition ease-in duration-100"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    x-cloak>

                    <div class="user-panel-header">
                        <div class="user-avatar-lg">{{ substr(Auth::user()->name, 0, 1) }}</div>
                        <div>
                            <div class="upanel-name">{{ Auth::user()->name }}</div>
                            <div class="upanel-email">{{ Auth::user()->email }}</div>
                        </div>
                    </div>

                    <ul class="dropdown-menu">
                        <li>
                            <a href="{{ route('admin.profile.edit') }}" class="dropdown-item" @click="open = false">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('admin.settings.index') }}" class="dropdown-item" @click="open = false">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                Settings
                            </a>
                        </li>
                        <li class="dropdown-separator"></li>
                        <li>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit" class="dropdown-item danger">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                    Sign Out
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</header>

<style>
/* ── Core Variables ───────────────────────────────────── */
:root {
    --topbar-bg: #ffffff;
    --topbar-border: #e4e4e7;
    --topbar-height: 56px;

    --text-primary: #18181b;
    --text-secondary: #71717a;
    --text-muted: #a1a1aa;

    --surface-1: #ffffff;
    --surface-2: #fafafa;
    --surface-hover: #f4f4f5;
    --surface-active: #e4e4e7;

    --border-default: #e4e4e7;
    --border-strong: #d4d4d8;

    --accent: #18181b;
    --danger: #dc2626;
    --danger-hover-bg: #fef2f2;

    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 10px;

    --shadow-dropdown: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.05);
}

/* ── Topbar Shell ─────────────────────────────────────── */
.topbar {
    position: relative;
    background: var(--topbar-bg);
    border-bottom: 1px solid var(--topbar-border);
    height: var(--topbar-height);
    z-index: 40;
}

.topbar-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

/* ── Left Side ────────────────────────────────────────── */
.topbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.topbar-hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    border: none;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
}
.topbar-hamburger:hover {
    background: var(--surface-hover);
    color: var(--text-primary);
}

.topbar-search {
    position: relative;
    align-items: center;
}

.search-icon {
    position: absolute;
    left: 10px;
    color: var(--text-muted);
    pointer-events: none;
}

.search-input {
    width: 240px;
    height: 32px;
    padding: 0 60px 0 32px;
    font-size: 13px;
    color: var(--text-primary);
    background: var(--surface-2);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-sm);
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}
.search-input::placeholder { color: var(--text-muted); }
.search-input:hover {
    background: var(--surface-1);
    border-color: var(--border-strong);
}
.search-input:focus {
    background: var(--surface-1);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(24,24,27,0.06);
}

.search-kbd {
    position: absolute;
    right: 8px;
    font-size: 11px;
    color: var(--text-muted);
    background: var(--surface-hover);
    border: 1px solid var(--border-default);
    border-radius: 4px;
    padding: 1px 5px;
    font-family: inherit;
    line-height: 1.6;
    pointer-events: none;
}

/* ── Right Side ───────────────────────────────────────── */
.topbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.topbar-icon-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    border: none;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
}
.topbar-icon-btn:hover {
    background: var(--surface-hover);
    color: var(--text-primary);
}

.notif-dot {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ef4444;
    border: 1.5px solid var(--topbar-bg);
}

.topbar-divider {
    width: 1px;
    height: 20px;
    background: var(--border-default);
    margin: 0 4px;
}

/* ── User Button ──────────────────────────────────────── */
.user-btn {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 4px 8px 4px 4px;
    border-radius: var(--radius-md);
    border: none;
    background: transparent;
    cursor: pointer;
    transition: background 0.15s;
}
.user-btn:hover { background: var(--surface-hover); }

.user-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--accent);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
    flex-shrink: 0;
}

.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
}

.user-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1;
}

.user-role {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1;
}

.user-chevron {
    color: var(--text-muted);
    transition: transform 0.2s ease;
    flex-shrink: 0;
}
.user-chevron.rotated { transform: rotate(180deg); }

/* ── Dropdown Base ────────────────────────────────────── */
.dropdown-panel {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    background: var(--surface-1);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-dropdown);
    overflow: hidden;
    z-index: 50;
}

.dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px 10px;
    border-bottom: 1px solid var(--border-default);
}

.dropdown-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
}

.notif-badge {
    font-size: 11px;
    font-weight: 500;
    color: #991b1b;
    background: #fee2e2;
    padding: 2px 7px;
    border-radius: 20px;
}

.dropdown-footer {
    padding: 10px 14px;
    border-top: 1px solid var(--border-default);
}

.dropdown-footer-link {
    font-size: 12px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.15s;
}
.dropdown-footer-link:hover { color: var(--text-primary); }

/* ── Notification Panel ───────────────────────────────── */
.notif-panel { width: 300px; }

.notif-list {}

.notif-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border-default);
    cursor: pointer;
    transition: background 0.12s;
}
.notif-item:last-child { border-bottom: none; }
.notif-item:hover { background: var(--surface-2); }
.notif-item.unread { background: #fafafa; }
.notif-item.unread:hover { background: var(--surface-hover); }

.notif-dot-inline {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3b82f6;
    margin-top: 5px;
    flex-shrink: 0;
}
.notif-dot-inline.invisible { background: transparent; }

.notif-content p {
    font-size: 13px;
    color: var(--text-primary);
    margin: 0 0 2px;
    line-height: 1.4;
}
.notif-content span {
    font-size: 11px;
    color: var(--text-muted);
}

/* ── User Panel ───────────────────────────────────────── */
.user-panel { width: 224px; }

.user-panel-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px;
    border-bottom: 1px solid var(--border-default);
    background: var(--surface-2);
}

.user-avatar-lg {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--accent);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    flex-shrink: 0;
}

.upanel-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.3;
}

.upanel-email {
    font-size: 11px;
    color: var(--text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 148px;
}

/* ── Dropdown Menu Items ──────────────────────────────── */
.dropdown-menu {
    list-style: none;
    margin: 0;
    padding: 4px;
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 10px;
    border-radius: var(--radius-sm);
    font-size: 13px;
    color: var(--text-secondary);
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.12s, color 0.12s;
    text-align: left;
}
.dropdown-item:hover {
    background: var(--surface-hover);
    color: var(--text-primary);
}
.dropdown-item.danger { color: var(--danger); }
.dropdown-item.danger:hover {
    background: var(--danger-hover-bg);
    color: var(--danger);
}

.dropdown-separator {
    height: 1px;
    background: var(--border-default);
    margin: 4px 0;
}
</style>