import React from 'react';
import { Home, LogIn, UserPlus, User, Sun, Moon } from 'lucide-react';

const navItemBase =
  'inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors';

export default function Navbar({ current, onNavigate, darkMode, onToggleDark }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => onNavigate('landing')}
          className="group inline-flex items-center gap-2"
          aria-label="Go to landing"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-black" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white group-hover:text-cyan-400">
            Instaverse
          </span>
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          <button
            onClick={() => onNavigate('home')}
            className={`${navItemBase} ${
              current === 'home' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className={`${navItemBase} ${
              current === 'profile' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <User size={18} /> Profile
          </button>
          <button
            onClick={() => onNavigate('login')}
            className={`${navItemBase} ${
              current === 'login' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LogIn size={18} /> Log in
          </button>
          <button
            onClick={() => onNavigate('register')}
            className={`${navItemBase} ${
              current === 'register' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <UserPlus size={18} /> Sign up
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
