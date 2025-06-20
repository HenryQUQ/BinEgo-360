import Head from "next/head";
import {
  eventInfo,
  speakers,
  organizers,
  technicalOrganizers,
  sponsor1,
  sponsor2,
  sponsor3,
  faviconPath,
  logoPath,
  heroBgPath,
} from "./data/site";

export default function TemplatePage() {
  return (
    <>
      <Head>
        <title>{eventInfo.title}</title>
        <meta name="description" content={eventInfo.subtitle} />
        <link rel="icon" href={faviconPath} />
      </Head>

      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-6 bg-gray-800 px-4 py-1 text-xs text-gray-100">
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5 2.503 2.503 0 01-2.5 2.5z" />
            </svg>
            {eventInfo.location}
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 12a5 5 0 01-5 5v5h-3v-5a5 5 0 110-10V2h3v5a5 5 0 015 5z" />
            </svg>
            {eventInfo.date}
          </div>
          <a href={`mailto:${eventInfo.contact}`} className="hover:underline">
            {eventInfo.contact}
          </a>
        </div>
      </header>

      <main id="home" className="pt-24 pb-16">
        <section
          className="relative flex items-center justify-center text-center min-h-[540px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgPath})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto max-w-5xl px-4">
            <img src={logoPath} alt="Logo" className="mx-auto mb-6 h-20 w-auto" />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              {eventInfo.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
              {eventInfo.subtitle}
            </p>
          </div>
        </section>

        <section id="speakers" className="mx-auto mt-24 max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900">Keynote Speakers</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {speakers.map((s) => (
              <div key={s.name} className="text-center">
                <img src={s.img} alt={s.name} className="mx-auto h-36 w-36 rounded-full object-cover shadow-md" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="organizers" className="mx-auto mt-24 max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900">Organisers</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {organizers.map((o) => (
              <div key={o.name} className="text-center">
                <img src={o.img} alt={o.name} className="mx-auto h-28 w-28 rounded-full object-cover shadow-md" />
                <h3 className="mt-3 text-base font-semibold text-gray-900">{o.name}</h3>
                <p className="text-sm text-gray-600">{o.affiliation}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-700">
            <span className="font-semibold">Technical Committee:</span>
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {technicalOrganizers.map((o) => (
              <div key={o.name} className="text-center">
                <img src={o.img} alt={o.name} className="mx-auto h-28 w-28 rounded-full object-cover shadow-md" />
                <h3 className="mt-3 text-base font-semibold text-gray-900">{o.name}</h3>
                <p className="text-sm text-gray-600">{o.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sponsors" className="mx-auto mt-24 max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sponsors</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <img src={sponsor1} alt="Sponsor 1" className="h-24 object-contain" />
            <img src={sponsor2} alt="Sponsor 2" className="h-24 object-contain" />
            <img src={sponsor3} alt="Sponsor 3" className="h-24 object-contain" />
          </div>
        </section>

        <footer className="mt-32 bg-gray-50 py-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Workshop Template.</p>
        </footer>
      </main>
    </>
  );
}
