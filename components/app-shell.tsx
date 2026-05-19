"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { navItems } from "@/lib/data";
import { useEffect, useState } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  return (
    <div className="min-h-screen md:grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-border bg-card p-4">
        <h1 className="mb-6 text-xl font-bold">Webinova AI</h1>
        <nav className="space-y-2">{navItems.map(([href, label]) => <Link key={href} href={href} className={`block rounded-xl px-3 py-2 text-sm ${path===href?"bg-primary/15 text-primary":"hover:bg-muted"}`}>{label}</Link>)}</nav>
      </aside>
      <main>
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 p-4 backdrop-blur">
          <p className="font-medium">Platform Template AI untuk Gemini, ChatGPT, & Codex</p>
          <button className="btn border border-border" onClick={() => setDark((v)=>!v)}>{dark ? <Sun size={16}/> : <Moon size={16}/>}{dark?"Light":"Dark"}</button>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
