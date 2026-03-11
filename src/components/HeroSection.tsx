import type { Profile } from "../types/data";
import { SocialLinks } from "./SocialLinks";

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection = ({ profile }: HeroSectionProps) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: Main intro */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
            kokoichi206
          </h1>
          <p className="mt-4 text-2xl font-bold text-neutral-200 sm:text-3xl">{profile.tagline}</p>
          <p className="mt-2 text-sm text-neutral-500">{profile.subtitle}</p>
          <p className="mt-6 text-sm text-neutral-500 leading-relaxed">{profile.bio}</p>
          <div className="mt-8">
            <SocialLinks links={profile.links} />
          </div>
        </div>

        {/* Right: About me */}
        <div className="animate-fade-in-up space-y-4" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-2xl border border-border-dark bg-surface-dark p-5">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                MBTI
              </span>
              <span className="text-xl font-bold font-mono text-sakura-400">
                {profile.personality.mbti}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.personality.strengths.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs text-neutral-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-dark bg-surface-dark p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Mottos
              </span>
              <ul className="mt-2 space-y-1">
                {profile.mottos.map((m) => (
                  <li key={m} className="text-sm text-neutral-400">
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border-dark bg-surface-dark p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Interests
              </span>
              <ul className="mt-2 space-y-1">
                {profile.interests.map((i) => (
                  <li key={i} className="text-sm text-neutral-400">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
