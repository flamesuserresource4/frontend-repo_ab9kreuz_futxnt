import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function AuthSection({ mode = 'login', onSwitchMode, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const isLogin = mode === 'login';

  function handleSubmit(e) {
    e.preventDefault();
    // Mock success: in a real app we'd call the backend
    onSuccess?.({
      name: isLogin ? 'Guest' : name || 'New User',
      email,
      avatar: `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(
        (isLogin ? 'Guest' : name || 'New User') + email
      )}`,
      verified: true,
    });
  }

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-2 max-w-md text-white/70">
          {isLogin
            ? 'Log in to continue to your personalized feed.'
            : 'Join the vibrant community shaping the future of sharing.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                <User size={18} className="text-white/60" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm text-white/80">Email</label>
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
              <Mail size={18} className="text-white/60" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Password</label>
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2">
              <Lock size={18} className="text-white/60" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.01]"
          >
            {isLogin ? 'Log in' : 'Create account'}
          </button>

          <p className="text-center text-sm text-white/60">
            {isLogin ? 'No account yet?' : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => onSwitchMode(isLogin ? 'register' : 'login')}
              className="font-medium text-cyan-300 hover:text-cyan-200"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </form>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-black/60 ring-1 ring-inset ring-white/10">
            <img
              alt="Preview"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Modern aesthetics</p>
                <p className="text-xs text-white/60">Vibrant, futuristic, and clean</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600" />
            </div>
            <div className="h-1 w-full rounded-full bg-white/10">
              <div className="h-1 w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
