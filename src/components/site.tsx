import { AppShowcase } from "@/components/app-showcase";
import { Header } from "@/components/header";
import { HeroChart } from "@/components/hero-chart";
import { WorkList } from "@/components/work-list";
import { contact, dict, type Lang } from "@/content/site";

const wrap = "mx-auto max-w-[76rem]";

const serviceIcons = [
  // Website: a rounded browser page
  <path key="w" d="M4 8.5A4.5 4.5 0 0 1 8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5zM4 9h16M8 13.5h5" />,
  // Web app: panels of a dashboard
  <path key="a" d="M4 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM12 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zM16 4.5v4M14 6.5h4M5 16.5h4M5 19h2.5" />,
  // Care: a heart
  <path key="c" d="M12 19.5s-7.5-4.3-7.5-9.6A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 2.3c0 5.3-7.5 9.6-7.5 9.6z" />,
];

export function Site({ lang }: { lang: Lang }) {
  const t = dict[lang];

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-pine px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skip}
      </a>
      <Header nav={t.nav} langSwitch={t.langSwitch} />

      <main id="main">
        <HeroChart hero={t.hero} />

        {/* Flagship case study: the eye hospital */}
        <section id="work" className="scroll-mt-24 px-3 pt-3 sm:px-6 sm:pt-6">
          <div className={`${wrap} rounded-[2.25rem] bg-pine px-5 py-14 text-paper sm:rounded-panel sm:px-12 sm:py-20`}>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
              <h2 className="font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.04] font-semibold text-balance lg:col-span-8">
                {t.caseStudy.title}
              </h2>
              <p className="max-w-[58ch] text-lg leading-relaxed text-paper/80 lg:col-span-7">{t.caseStudy.intro}</p>
              <dl className="grid gap-4 sm:grid-cols-3 lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:self-end">
                {t.caseStudy.facts.map((f) => (
                  <div key={f.term} className="flex flex-col">
                    <dt className="text-sm text-sage/75">{f.term}</dt>
                    <dd className="font-medium">{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-12 sm:mt-16">
              <AppShowcase tabs={t.caseStudy.tabs} tabsLabel={t.caseStudy.tabsLabel} screens={t.screens} lang={lang} />
            </div>

            <ul className="mt-12 grid gap-x-8 gap-y-7 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {t.caseStudy.features.map((f) => (
                <li key={f.title}>
                  <span aria-hidden className="mb-4 block size-3 rounded-full bg-marigold" />
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-paper/75">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other projects */}
        <section id="projects" className={`${wrap} scroll-mt-24 px-5 pt-20 sm:px-8 sm:pt-28`}>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold lg:col-span-6">
              {t.work.title}
            </h2>
            <p className="max-w-[46ch] text-lg text-pine-soft lg:col-span-5 lg:col-start-8">{t.work.intro}</p>
          </div>
          <WorkList work={t.work} />
        </section>

        {/* Services */}
        <section id="services" className={`${wrap} scroll-mt-24 px-5 pt-20 sm:px-8 sm:pt-28`}>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold text-balance">
            {t.services.title}
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {t.services.items.map((s, i) => (
              <li key={s.title}>
                <span className="grid size-14 place-items-center rounded-full bg-sage text-moss">
                  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {serviceIcons[i]}
                  </svg>
                </span>
                <h3 className="font-display mt-5 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-[36ch] text-pine-soft">{s.text}</p>
              </li>
            ))}
          </ul>

          {/* Process: a real sequence, so it is numbered. */}
          <div className="mt-16 rounded-[2.25rem] bg-sage/55 px-5 py-10 sm:mt-20 sm:rounded-panel sm:px-12 sm:py-14">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">{t.process.title}</h2>
            <ol className="relative mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
              <span aria-hidden className="absolute top-6 right-[calc(25%-2.625rem)] left-6 hidden h-1 rounded-full bg-paper/80 md:block" />
              <span aria-hidden className="absolute top-6 bottom-6 left-[1.375rem] w-1 rounded-full bg-paper/80 md:hidden" />
              {t.process.steps.map((s, i) => (
                <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-4 md:block">
                  <span className="font-display grid size-12 place-items-center rounded-full bg-marigold text-xl font-bold shadow-[0_0_0_6px_var(--paper)]">
                    {i + 1}
                  </span>
                  <div className="md:mt-5">
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-pine-soft">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${wrap} scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28`}>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* PLACEHOLDER: replace with a photo (next/image) in the same blob shape. */}
            <div
              role="img"
              aria-label={t.about.photoAlt}
              className="font-display mx-auto grid aspect-square w-full max-w-[22rem] place-items-center rounded-[46%_54%_52%_48%/55%_48%_52%_45%] bg-sage text-[6rem] font-bold text-moss lg:col-span-5 lg:max-w-[26rem]"
            >
              EK
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold">{t.about.title}</h2>
              {t.about.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 max-w-[58ch] text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="mt-8 text-sm font-medium text-pine-soft">{t.about.toolsLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.about.tools.map((tool) => (
                  <li key={tool} className="rounded-full bg-mist px-4 py-1.5 ring-1 ring-pine/10">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-3 sm:px-6">
          <div className={`${wrap} grid gap-8 rounded-[2.25rem] bg-marigold px-5 py-14 sm:rounded-panel sm:px-12 sm:py-20 lg:grid-cols-12 lg:items-end`}>
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] leading-[1] font-semibold text-balance lg:col-span-7">
              {t.contact.title}
            </h2>
            <div className="lg:col-span-5">
              <p className="text-lg">{t.contact.text}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-full bg-pine px-6 py-3.5 text-center text-lg font-medium text-paper transition-colors hover:bg-moss"
                >
                  {t.contact.email}
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3.5 text-center text-lg font-medium ring-2 ring-pine transition-colors hover:bg-marigold-soft"
                >
                  {t.contact.whatsapp}
                </a>
              </div>
              <p className="mt-5">
                {t.contact.orCall}{" "}
                <a href={`tel:+${contact.whatsapp}`} className="font-medium underline decoration-2 underline-offset-4">
                  {contact.phoneLabel}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} flex flex-col gap-4 px-5 py-10 text-sm text-pine-soft sm:flex-row sm:items-center sm:justify-between sm:px-8`}>
        <p>
          {t.footer.made}, {new Date().getFullYear()}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={contact.github} className="hover:text-pine">GitHub</a>
          </li>
          <li>
            <a href={contact.linkedin} className="hover:text-pine">LinkedIn</a>
          </li>
          <li>
            <a href={t.langSwitch.href} hrefLang={lang === "en" ? "sq" : "en"} className="hover:text-pine">
              {t.langSwitch.label}
            </a>
          </li>
          <li>
            <a href="#top" className="hover:text-pine">{t.footer.top}</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
