import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-6">
        <div className="font-display text-2xl font-bold tracking-tight">
          dimas<span className="text-brand-hover">.</span>alif
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 text-white/70 hover:text-brand-hover hover:scale-125 transition-all"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 text-white/70 hover:text-brand-hover hover:scale-125 transition-all"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-3 text-white/70 hover:text-brand-hover hover:scale-125 transition-all"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center text-sm text-white/60">
          <div>
            Designed & built by{" "}
            <span className="text-white font-semibold">{profile.name}</span>
          </div>
          <div className="mt-1 text-xs">
            © {new Date().getFullYear()} · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
