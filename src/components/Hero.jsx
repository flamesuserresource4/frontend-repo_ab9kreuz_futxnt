import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted, onExplore }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,168,255,0.25),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-28 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
          Instagram, Reimagined
        </span>
        <h1 className="bg-gradient-to-br from-cyan-200 via-sky-300 to-indigo-200 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-6xl">
          A modern, vibrant social experience
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Sleek design, smooth interactions, and a focus on digital identity. Welcome to your new
          Instaverse.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onGetStarted}
            className="rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
          >
            Get Started
          </button>
          <button
            onClick={onExplore}
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Explore Home
          </button>
        </div>
      </div>
    </section>
  );
}
