import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import {
  Workflow,
  Zap,
  Bot,
  Database,
  Sparkles,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
} from "lucide-react";
import heroImg from "@/assets/jeffrey-portrait-nobg.png.asset.json";
import asanaCrmImg from "@/assets/asana-crm.jpg.asset.json";
import fbAgentImg from "@/assets/fb-agent.jpg.asset.json";
import asanaXeroImg from "@/assets/asana-xero.jpg.asset.json";
import gmailDriveImg from "@/assets/gmail-drive.jpg.asset.json";
import jobsScraperImg from "@/assets/jobs-scraper.jpg.asset.json";
import contentRepurposingImg from "@/assets/content-repurposing.jpg.asset.json";
import zapierLogo from "@/assets/logos/zapier-icon.png.asset.json";
import makeLogo from "@/assets/logos/make-com-logo.jpg.asset.json";
import n8nLogo from "@/assets/logos/n8n.jpg.asset.json";
import ghlLogo from "@/assets/logos/ghl.jpg.asset.json";
import airtableLogo from "@/assets/logos/airtable.jpg.asset.json";
import asanaLogo from "@/assets/logos/asana.jpg.asset.json";
import mondayLogo from "@/assets/logos/monday.jpg.asset.json";
import notionLogo from "@/assets/logos/notion.jpg.asset.json";
import slackLogo from "@/assets/logos/slack.jpg.asset.json";
import calendlyLogo from "@/assets/logos/calendly.jpg.asset.json";

const stack = [
  { name: "Zapier", url: zapierLogo.url },
  { name: "Make", url: makeLogo.url },
  { name: "n8n", url: n8nLogo.url },
  { name: "GoHighLevel", url: ghlLogo.url },
  { name: "Airtable", url: airtableLogo.url },
  { name: "Asana", url: asanaLogo.url },
  { name: "Monday", url: mondayLogo.url },
  { name: "Notion", url: notionLogo.url },
  { name: "Slack", url: slackLogo.url },
  { name: "Calendly", url: calendlyLogo.url },
];


export const Route = createFileRoute("/")({
  component: Portfolio,
});

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end automations across Zapier, Make, and n8n that eliminate repetitive tasks and connect the tools your team already uses.",
  },
  {
    icon: Bot,
    title: "AI-Powered Agents",
    desc: "Custom AI agents for lead engagement, appointment setting, content repurposing, and support — trained on your data and voice.",
  },
  {
    icon: Zap,
    title: "CRM & GoHighLevel",
    desc: "GHL builds, pipeline automation, and marketing sequences that turn cold leads into booked calls without manual follow-up.",
  },
  {
    icon: Database,
    title: "Data & Reporting",
    desc: "Google Sheets, Airtable, and Notion systems with API sync — live dashboards, automated reports, and clean single sources of truth.",
  },
];

const experience = [
  {
    role: "AI Automation Specialist",
    company: "Glorydays",
    period: "Dec 2024 — Dec 2025",
    points: [
      "Designed order-to-delivery workflow: form intake, mockup approval, invoicing, production, and follow-up.",
      "Automated customer communication across every stage of the fulfillment pipeline.",
      "Monitored and optimized automation efficiency for higher engagement.",
    ],
  },
  {
    role: "Automation Developer",
    company: "Radotech",
    period: "Nov 2023 — Nov 2024",
    points: [
      "Built client automations that reduced manual work by up to 80%.",
      "Developed advanced Google Sheets systems for data processing and financial reporting.",
      "Integrated Sheets with external APIs for real-time data sync.",
    ],
  },
  {
    role: "Customer / Technical Support — iTunes Store (Apple)",
    company: "Conduent Global Services",
    period: "Nov 2016 — Jan 2020",
    points: [
      "Handled live chat support for Apple iTunes Store customers.",
      "Resolved billing, account, and technical issues with high CSAT.",
    ],
  },
  {
    role: "Technical Support — Intuit Quicken",
    company: "Sutherland Global Services",
    period: "Sep 2014 — Oct 2016",
    points: [
      "Chat and voice technical support for Intuit Quicken users.",
      "Diagnosed software issues and guided customers through resolutions.",
    ],
  },
];

const projects: { tag: string; title: string; desc: string; image?: string }[] = [
  { tag: "n8n", title: "AI Jobs Scraper + Resume Optimizer", desc: "Scrapes fresh job listings and tailors resumes automatically for higher match scores.", image: jobsScraperImg.url },
  { tag: "n8n", title: "Facebook Page AI Agent", desc: "24/7 AI responder handling DMs and comments with brand-tuned replies.", image: fbAgentImg.url },
  { tag: "Zapier", title: "AI Content Repurposing", desc: "One blog post → LinkedIn, X, newsletter, and short-form scripts in one click.", image: contentRepurposingImg.url },
  { tag: "Zapier", title: "Asana CRM Lead Engagement", desc: "Lead-to-task workflow with automated engagement sequences inside Asana.", image: asanaCrmImg.url },
  { tag: "Make", title: "Gmail → Drive Auto-Sort", desc: "Attachments automatically categorized and filed to the right Drive folders.", image: gmailDriveImg.url },
  { tag: "Make", title: "Asana × Xero Integration", desc: "Project tasks synced to invoices and financial reporting in Xero.", image: asanaXeroImg.url },
];

const testimonials = [
  { quote: "Jeffrey rebuilt our entire order fulfillment pipeline. What used to take our team hours every day now runs by itself. It just works.", name: "Dave Morgan", role: "Glorydays" },
  { quote: "The Google Sheets and API integrations Jeffrey delivered cut our reporting time by 80%. Reliable, well-documented, and fast to iterate.", name: "Toby Fox", role: "Radotech" },
  { quote: "Sharp problem solver. He translated a vague business need into a clean n8n workflow that we're still using today.", name: "Mason", role: "Consulting Client" },
];

const stats = [
  { value: "80%", label: "Manual work reduced" },
  { value: "20+", label: "Automations shipped" },
  { value: "4+", label: "Years in automation" },
  { value: "3", label: "Certifications" },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] font-display text-[15px] font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
        JA
      </div>
      <div className="hidden font-display text-sm leading-tight sm:block">
        <div className="font-semibold tracking-tight">Jeffrey Azuela</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          AI Automation
        </div>
      </div>
    </a>
  );
}

function Portfolio() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:jeffazuela@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section className="bg-mesh relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for projects
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Building <span className="text-gradient">Automation</span> That Saves Time and Scales Businesses.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I'm Jeffrey — an AI Automation Specialist. I design workflows in Zapier, Make, n8n, and
              GoHighLevel that cut manual work by up to 80% so your team can focus on growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                See my work
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>Zapier</span><span>·</span>
              <span>Make</span><span>·</span>
              <span>n8n</span><span>·</span>
              <span>GoHighLevel</span><span>·</span>
              <span>Airtable</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center self-center">
            {/* AI-inspired decorative rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[360px] w-[360px] rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl animate-pulse-glow" />
              <div className="absolute h-[340px] w-[340px] rounded-full border border-primary/30 animate-spin-slow [mask-image:linear-gradient(135deg,black,transparent_70%)]" />
              <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-accent/40 animate-spin-reverse" />
              <div className="absolute h-[260px] w-[260px] rounded-full border border-primary/20" />
              {/* orbiting nodes */}
              <div className="absolute h-[340px] w-[340px] animate-spin-slow">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
              </div>
              <div className="absolute h-[300px] w-[300px] animate-spin-reverse">
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              </div>
              {/* circuit svg */}
              <svg
                className="absolute h-[380px] w-[380px] text-primary/30"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden
              >
                <path d="M20 200 H120 L150 170 H250 L280 200 H380" stroke="currentColor" strokeWidth="1" />
                <path d="M200 20 V120 L170 150 V250 L200 280 V380" stroke="currentColor" strokeWidth="1" />
                <circle cx="120" cy="200" r="3" fill="currentColor" />
                <circle cx="280" cy="200" r="3" fill="currentColor" />
                <circle cx="200" cy="120" r="3" fill="currentColor" />
                <circle cx="200" cy="280" r="3" fill="currentColor" />
              </svg>
            </div>

            <div className="group relative animate-float">
              <img
                src={heroImg.url}
                alt="Portrait of Jeffrey Azuela"
                width={1024}
                height={1024}
                className="relative z-10 w-full max-w-xs object-contain drop-shadow-[0_20px_40px_rgba(80,120,255,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_25px_60px_rgba(120,160,255,0.55)]"
              />
            </div>

            <div className="absolute -bottom-2 left-0 z-20 hidden rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-elegant)] md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Certified
                  </div>
                  <div className="text-sm font-medium">Zapier · Make · GHL</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-border/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-b border-border/50 bg-card/20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20">
          <div className="flex flex-col items-center text-center">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Trusted stack
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              The tools I automate <span className="text-gradient">every day</span>
            </h2>
          </div>
        </div>
        <div className="relative mt-10 pb-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee">
            {[...stack, ...stack].map((tool, i) => (
              <LogoTile key={`${tool.name}-${i}`} name={tool.name} url={tool.url} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel eyebrow="01 — Services" title="What I build for you" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel eyebrow="02 — Experience" title="Years of Delivering Automation Solutions" />
          <div className="mt-12 space-y-6">
            {experience.map((job) => (
              <div
                key={job.role + job.company}
                className="grid gap-6 rounded-2xl border border-border bg-background p-8 md:grid-cols-[240px_1fr]"
              >
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    {job.period}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold">{job.company}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel eyebrow="03 — Selected work" title="Automations I've shipped" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              {p.image && (
                <div className="aspect-[16/10] overflow-hidden border-b border-border bg-background">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    {p.tag}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel eyebrow="04 — Testimonials" title="What clients say" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8"
              >
                <blockquote className="text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel eyebrow="05 — Contact" title="Have a workflow to automate?" />
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tell me where your team is losing time. I'll map it to a workflow, ship a working
              automation, and hand over the docs.
            </p>
            <div className="space-y-4">
              <ContactItem icon={Mail} label="Email" value="jeffazuela@gmail.com" href="mailto:jeffazuela@gmail.com" />
              <ContactItem icon={Phone} label="WhatsApp" value="+63 927 498 2961" href="tel:+639274982961" />
              <ContactItem icon={MapPin} label="Based in" value="Las Piñas City, PH" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-8">
            <Field name="name" label="Your name" placeholder="Jane Cooper" required />
            <Field name="email" label="Email" type="email" placeholder="jane@company.com" required />
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                What do you need automated?
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="We spend hours every week doing..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.01]"
            >
              {sent ? "Your mail app is opening — finish sending there" : "Email Jeffrey"} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <Logo />
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Jeffrey Azuela — Built with automation in mind.
          </div>
          <div className="flex gap-2">
            <SocialIcon href="mailto:jeffazuela@gmail.com" icon={Mail} />
          </div>
        </div>
      </footer>
    </div>
  );
}

function LogoTile({ name, url }: { name: string; url: string }) {
  return (
    <div
      className="group mx-3 flex h-24 w-36 flex-shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background/60 px-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_30px_-6px_rgba(80,120,255,0.35)]"
      title={name}
    >
      <img
        src={url}
        alt={`${name} logo`}
        loading="lazy"
        className="logo-glow h-10 w-10 object-contain"
      />
    </div>
  );
}

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal flex flex-col gap-3">
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</div>
      <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
