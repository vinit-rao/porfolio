import { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects';
import { projectHref } from '../lib/projectUtils';
import { useTheme } from '../context/ThemeContext';
import './CommandPalette.css';

const EMAIL = 'vinitrao@gmail.com';

const CATEGORIES = [
    ['code', 'Code'], ['video', 'Video'], ['graphics', 'Graphics'],
    ['photos', 'Photos'], ['hardware', 'Hardware'],
];

// Module-level so the randomness isn't a (lint-flagged) impure call during render.
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const CommandPalette = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);

    const inputRef = useRef(null);
    const listRef = useRef(null);
    const lastFocused = useRef(null);

    const isMac = useMemo(
        () => typeof navigator !== 'undefined' && /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent),
        []
    );

    const openPalette = useCallback(() => {
        lastFocused.current = document.activeElement;
        setQuery('');
        setActive(0);
        setOpen(true);
    }, []);

    const commands = useMemo(() => {
        const run = (fn) => () => { fn(); setOpen(false); };
        const goto = (path) => run(() => navigate(path));
        const openUrl = (url) => run(() => window.open(url, '_blank', 'noopener'));

        const list = [
            { id: 'home', section: 'Pages', label: 'Home', icon: 'fas fa-home', keywords: 'landing start', action: goto('/') },
            { id: 'projects', section: 'Pages', label: 'Projects', icon: 'fas fa-folder-open', keywords: 'work archive portfolio', action: goto('/projects') },
            { id: 'resume', section: 'Pages', label: 'Résumé', icon: 'fas fa-file-alt', keywords: 'resume cv experience', action: goto('/resume') },
            { id: 'contact', section: 'Pages', label: 'Contact', icon: 'fas fa-envelope', keywords: 'email hire reach out', action: goto('/contact') },
            { id: 'bennys', section: 'Pages', label: "Benny's Frozen Adventure", icon: 'fas fa-gamepad', keywords: 'game unity case study', action: goto('/bennys-adventure') },

            { id: 'theme', section: 'Actions', label: theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode', icon: theme === 'light' ? 'fas fa-moon' : 'fas fa-sun', keywords: 'theme toggle dark light appearance', action: run(toggleTheme) },
            { id: 'lucky', section: 'Actions', label: "I'm feeling lucky — open a random project", icon: 'fas fa-dice', keywords: 'random surprise shuffle', action: run(() => {
                const pool = projectsData.filter(p => p.link || p.internalLink);
                const p = pickRandom(pool);
                if (p?.internalLink) navigate(p.internalLink);
                else if (p?.link) window.open(p.link, '_blank', 'noopener');
            }) },
            { id: 'resume-dl', section: 'Actions', label: 'Download résumé (PDF)', icon: 'fas fa-download', keywords: 'resume cv pdf download', action: openUrl('/Vinit_Rao_Resume.pdf') },
            { id: 'email', section: 'Actions', label: `Copy email — ${EMAIL}`, icon: 'fas fa-at', keywords: 'contact mail copy', action: run(() => { navigator.clipboard?.writeText(EMAIL); }) },
            { id: 'gh', section: 'Actions', label: 'GitHub', icon: 'fab fa-github', keywords: 'social code repo', action: openUrl('https://github.com/vinit-rao') },
            { id: 'li', section: 'Actions', label: 'LinkedIn', icon: 'fab fa-linkedin', keywords: 'social network', action: openUrl('https://linkedin.com/in/vinitrao1/') },
            { id: 'yt', section: 'Actions', label: 'YouTube', icon: 'fab fa-youtube', keywords: 'social video channel', action: openUrl('https://youtube.com/@OfficialVinitRao') },
            { id: 'ig', section: 'Actions', label: 'Instagram', icon: 'fab fa-instagram', keywords: 'social photo', action: openUrl('https://instagram.com/instavinitgram') },
        ];

        CATEGORIES.forEach(([id, label]) => list.push({
            id: `cat-${id}`, section: 'Browse', label: `Browse ${label}`, icon: 'fas fa-filter',
            keywords: `filter category ${label}`, action: goto(`/projects?cat=${id}`),
        }));

        projectsData.forEach((p) => list.push({
            id: `proj-${p.title}`, section: 'Projects', label: p.title, sub: p.category,
            icon: 'fas fa-arrow-right',
            keywords: `${p.category} ${(p.badges || []).join(' ')} ${p.description || ''}`,
            action: goto(projectHref(p)),
        }));

        return list;
    }, [navigate, theme, toggleTheme]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter(c => `${c.label} ${c.sub || ''} ${c.keywords || ''}`.toLowerCase().includes(q));
    }, [commands, query]);

    // Global shortcuts: ⌘K / Ctrl+K opens the palette, ⌘⇧L / Ctrl+⇧L toggles theme
    useEffect(() => {
        const onKey = (e) => {
            const mod = e.metaKey || e.ctrlKey;
            if (mod && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen(o => {
                    const next = !o;
                    if (next) { lastFocused.current = document.activeElement; setQuery(''); setActive(0); }
                    return next;
                });
            } else if (mod && e.shiftKey && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                toggleTheme();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [toggleTheme]);

    // While open: lock scroll, focus input, handle nav keys, restore focus on close
    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = 'hidden';
        const t = setTimeout(() => inputRef.current?.focus(), 0);

        const onKey = (e) => {
            if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, filtered.length - 1)); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
            else if (e.key === 'Enter') { e.preventDefault(); filtered[active]?.action?.(); }
        };
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            clearTimeout(t);
            document.body.style.overflow = 'unset';
            lastFocused.current?.focus?.();
        };
    }, [open, filtered, active]);

    useEffect(() => {
        if (open) listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
    }, [active, open]);

    const onQueryChange = (e) => {
        setQuery(e.target.value);
        setActive(0);
    };

    let lastSection = null;

    const modKey = isMac ? '⌘' : 'Ctrl';

    return (
        <>
            <div className="cmdk-dock">
                <button
                    type="button"
                    className="cmdk-theme"
                    onClick={toggleTheme}
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    aria-keyshortcuts="Meta+Shift+L Control+Shift+L"
                    title={`Toggle theme (${modKey}⇧L)`}
                >
                    <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true"></i>
                </button>

                <button
                    type="button"
                    className="cmdk-trigger"
                    onClick={openPalette}
                    aria-label="Open command menu"
                    aria-keyshortcuts="Meta+K Control+K"
                >
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <span className="cmdk-trigger-key">{modKey} K</span>
                </button>
            </div>

            {open && (
                <div className="cmdk-overlay" onClick={() => setOpen(false)}>
                    <div
                        className="cmdk-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cmdk-input-row">
                            <i className="fas fa-search" aria-hidden="true"></i>
                            <input
                                ref={inputRef}
                                className="cmdk-input"
                                placeholder="Search pages, projects, actions…"
                                value={query}
                                onChange={onQueryChange}
                                aria-label="Search commands"
                                autoComplete="off"
                                spellCheck="false"
                            />
                            <kbd className="cmdk-esc">ESC</kbd>
                        </div>

                        <div className="cmdk-list" ref={listRef}>
                            {filtered.length === 0 && (
                                <div className="cmdk-empty">No results for “{query}”.</div>
                            )}
                            {filtered.map((c, i) => {
                                const header = c.section !== lastSection ? c.section : null;
                                lastSection = c.section;
                                return (
                                    <Fragment key={c.id}>
                                        {header && <div className="cmdk-section">{header}</div>}
                                        <button
                                            type="button"
                                            className="cmdk-item"
                                            data-active={i === active}
                                            onMouseMove={() => setActive(i)}
                                            onClick={() => c.action()}
                                        >
                                            <i className={`cmdk-item-icon ${c.icon}`} aria-hidden="true"></i>
                                            <span className="cmdk-item-label">{c.label}</span>
                                            {c.sub && <span className="cmdk-item-sub">{c.sub}</span>}
                                            <span className="cmdk-item-enter" aria-hidden="true">↵</span>
                                        </button>
                                    </Fragment>
                                );
                            })}
                        </div>

                        <div className="cmdk-footer">
                            <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
                            <span><kbd>↵</kbd> select</span>
                            <span><kbd>esc</kbd> close</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CommandPalette;
