import React from 'react';
import { Heart, MessageCircle, Share2, CheckCircle2, Settings } from 'lucide-react';

export function HomeSection() {
  const posts = [
    {
      id: 1,
      user: 'Ava Solaris',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&auto=format&fit=crop&w=200',
      image:
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&auto=format&fit=crop&w=1400',
      caption: 'Futuristic gradients and morning light ✨',
      liked: true,
      likes: '12.3k',
      comments: 342,
    },
    {
      id: 2,
      user: 'Noah Vega',
      avatar:
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&auto=format&fit=crop&w=200',
      image:
        'https://images.unsplash.com/photo-1625602810494-e0158c3657ca?q=80&auto=format&fit=crop&w=1400',
      caption: 'Holographic vibes only 🌈',
      liked: false,
      likes: '8.1k',
      comments: 191,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold text-white">Home</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <header className="flex items-center gap-3 p-4">
              <img src={p.avatar} alt={p.user} className="h-10 w-10 rounded-full object-cover" />
              <div className="flex items-center gap-2">
                <p className="font-medium text-white">{p.user}</p>
                <CheckCircle2 size={16} className="text-sky-400" />
              </div>
            </header>
            <img src={p.image} alt={p.caption} className="h-72 w-full object-cover" />
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-4 text-white/80">
                <button className={`inline-flex items-center gap-2 rounded-lg px-2 py-1 ${
                  p.liked ? 'text-rose-400' : 'hover:bg-white/10'
                }`}>
                  <Heart size={18} /> {p.likes}
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/10">
                  <MessageCircle size={18} /> {p.comments}
                </button>
                <button className="ml-auto inline-flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/10">
                  <Share2 size={18} /> Share
                </button>
              </div>
              <p className="text-white/90">{p.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProfileSection({ user }) {
  const me =
    user ||
    ({
      name: 'Guest',
      handle: '@you',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&w=200',
      bio: 'Exploring modern design in the Instaverse.',
      stats: { posts: 128, followers: '12.4k', following: 341 },
      verified: true,
    } as const);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start gap-4">
            <img src={me.avatar} alt={me.name} className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                {me.name}
                {me.verified && <CheckCircle2 size={18} className="text-sky-400" />}
              </h3>
              <p className="text-white/60">{me.handle}</p>
            </div>
            <button className="ml-auto inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
              <Settings size={16} /> Edit
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">{me.bio}</p>
          <div className="mt-6 grid grid-cols-3 rounded-xl bg-white/5 py-3 text-center text-white/90">
            <div>
              <p className="text-lg font-bold">{me.stats.posts}</p>
              <p className="text-xs text-white/60">Posts</p>
            </div>
            <div>
              <p className="text-lg font-bold">{me.stats.followers}</p>
              <p className="text-xs text-white/60">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">{me.stats.following}</p>
              <p className="text-xs text-white/60">Following</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-white">Profile</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={`https://picsum.photos/seed/insta-${i}/600/600`}
                  alt="grid"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
