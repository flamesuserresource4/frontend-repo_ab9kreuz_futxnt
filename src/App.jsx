import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthSection from './components/AuthSection';
import { HomeSection, ProfileSection } from './components/MainSections';

function App() {
  const [route, setRoute] = useState('landing'); // landing | login | register | home | profile
  const [dark, setDark] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark ?? true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const pageBg = useMemo(
    () =>
      route === 'landing'
        ? 'min-h-screen bg-black text-white'
        : 'min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white',
    [route]
  );

  return (
    <div className={pageBg}>
      <Navbar
        current={route}
        onNavigate={setRoute}
        darkMode={dark}
        onToggleDark={() => setDark((d) => !d)}
      />

      {route === 'landing' && (
        <>
          <Hero onGetStarted={() => setRoute('register')} onExplore={() => setRoute('home')} />

          <section className="relative mx-auto max-w-6xl px-6 py-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Digital identity, redefined',
                  desc: 'Iridescent visuals and verified presence to showcase the real you.',
                },
                {
                  title: 'Frictionless creation',
                  desc: 'Post, discover, and connect with modern interactions and fluid motion.',
                },
                {
                  title: 'Designed for dark mode',
                  desc: 'A sleek palette that is easy on the eyes and gorgeous on OLED.',
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-xl"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="text-white/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {route === 'login' && (
        <AuthSection
          mode="login"
          onSwitchMode={(m) => setRoute(m)}
          onSuccess={(u) => {
            setUser(u);
            setRoute('home');
          }}
        />
      )}

      {route === 'register' && (
        <AuthSection
          mode="register"
          onSwitchMode={(m) => setRoute(m)}
          onSuccess={(u) => {
            setUser(u);
            setRoute('home');
          }}
        />
      )}

      {route === 'home' && <HomeSection />}

      {route === 'profile' && <ProfileSection user={user} />}

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-xs text-white/50">
        <p>
          Crafted for an Instagram redesign concept. Futuristic aesthetic. Dark mode first.
        </p>
      </footer>
    </div>
  );
}

export default App;
