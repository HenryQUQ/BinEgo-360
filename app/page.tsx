import Head from "next/head";

import {
  speakers,
  organizers,
  technicalOrganizers,
  rootPath,
  googleFormUrl,
  kaggleClassificationUrl,
  kaggleTalUrl,
  sponsorAllsee,
  sponsorInsta360,
  sponsorScan,
  faviconPath,
  iccvLogoPath,
  heroBgPath,
  heroTitle,
  heroTagline,
  eventLocation,
  eventDate,
  contactEmail,
} from "./data/site";









export default function Workshop() {
    return (
        <>
            {/* ───────────────────────────────────── <head> meta ───────────────────────────────────── */}
            <Head>
                <title>{heroTitle}</title>
                <meta name="description" content={heroTagline} />
                <link rel="icon" href={faviconPath} />
            </Head>

            {/* ───────────────────────────────────── Navbar ───────────────────────────────────── */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-6 bg-gray-800 px-4 py-1 text-xs text-gray-100">
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5 2.503 2.503 0 01-2.5 2.5z"/>
                        </svg>
                        {eventLocation}
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 12a5 5 0 01-5 5v5h-3v-5a5 5 0 110-10V2h3v5a5 5 0 015 5z"/>
                        </svg>
                        {eventDate}
                    </div>
                    <a href={`mailto:${contactEmail}`} className="hover:underline">
                        {contactEmail}
                    </a>

                    <div className="ml-auto flex gap-2">
                        <a href="#challenge"
                           className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700">Competitions</a>
                        <a href="#submission" className="rounded bg-sky-600 px-3 py-1 text-white hover:bg-sky-700">Submission
                            Portal</a>
                    </div>
                </div>
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 text-base font-semibold">
                        <span className="text-indigo-600">{heroTitle}</span>
                    </div>
                    <ul className="hidden gap-6 md:flex">
                        {[
                            ["Home", "#home"],
                            ["Overview", "#overview"],
                            ["Speakers", "#speakers"],
                            ["Programme", "#programme"],
                            ["Call for Papers", "#callforpapers"],
                            ["Challenge", "#challenge"],
                            ["Organizers", "#organizers"],
                            // ["Dataset", "#dataset"],
                            ["Sponsors", "#sponsors"]

                        ].map(([label, href]) => (
                            <li key={href}>
                                <a href={href} className="hover:text-indigo-600">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main id="home" className="pt-24 pb-16">
                {/* ───────────────────────────────── Hero ───────────────────────────────── */}
                <section
                    className="relative flex items-center justify-center text-center min-h-[540px] bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: `url(${heroBgPath})`}}
                >
                    <div className="absolute inset-0 bg-black/60"/>

                    {/* 内容层 */}
                    <div className="relative z-10 mx-auto max-w-5xl px-4">

                        {/* ➌ NEW: Event logo */}
                        <img
                            src={iccvLogoPath}
                            alt="Event logo"
                            className="mx-auto mb-6 h-20 w-auto"
                        />
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            {heroTitle}
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
                            {heroTagline}
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href="#callforpapers"
                                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-white shadow hover:bg-amber-600"
                            >
                                Call for Papers
                            </a>
                            <a
                                href="#challenge"
                                className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-6 py-3 text-gray-900 shadow hover:bg-white"
                            >
                                Participate in Challenge
                            </a>
                        </div>
                    </div>
                </section>

                {/* ───────────────────────────────── Overview ───────────────────────────────── */}
                <section id="overview" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                    <p className="mt-6 text-gray-700">

                        This half-day workshop mainly looks at multi-modal scene understanding and perception in a
                        human-like way.
                        Specifically, we will focus on <strong>binocular/stereo</strong> egocentric and <strong>360°
                        panoramic</strong> perspectives, which measure both first-person views and third-person panoptic views, mimicking a human in the scene, by
                        combining with multi‑modal
                        cues such as <em>spatial audio</em>, <em>textual descriptions</em>, and{' '}
                        <em>geo‑metadata</em>. This workshop will cover but not be limited to the following topics:
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                        <li>Embodied 360° scene understanding &amp; egocentric visual reasoning</li>
                        <li>Multi-modal scene understanding</li>
                        <li>Stereo Vision</li>
                        <li>Open‑world learning &amp; domain adaptation</li>
                    </ul>
                </section>



                {/* ───────────────────────────────── Speakers ───────────────────────── */}
                <section id="speakers" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Keynote Speakers</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {speakers.map((s) => (
                            <div key={s.name} className="text-center">
                                <a href={s.link} target="_blank" rel="noreferrer">
                                    <img
                                        src={s.img}
                                        alt={s.name}
                                        className="mx-auto h-36 w-36 rounded-full object-cover shadow-md hover:shadow-lg"/>
                                </a>
                                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                                    <a href={s.link} target="_blank" rel="noreferrer" className="hover:underline">
                                        {s.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600">{s.affiliation}</p>
                                {/*<p className="mt-2 text-sm text-gray-700">{s.bio}</p>*/}
                            </div>
                        ))}
                    </div>
                </section>



                {/* ───────────────────────────────── Programme ───────────────────────── */}
                <section id="programme" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Workshop Programme (Half‑day)</h2>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[480px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 font-medium">Time</th>
                                <th className="px-4 py-2 font-medium">Session</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                ["09:00 – 09:30", "Opening Remarks"],
                                ["09:30 – 10:05", "Keynote Talk 1"],
                                ["10:05 – 10:40", "Keynote Talk 2"],
                                ["10:40 – 11:00", "Break & Poster Session"],
                                ["11:00 – 11:45", "Invited paper Presentations (×3)"],
                                ["11:45 – 12:20", "Keynote Talk 3"],
                                ["12:20 – 12:35", "Awards Ceremony & Concluding Remarks"],
                            ].map(([time, event], i) => (
                                <tr key={i} className="odd:bg-white even:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{time}</td>
                                    <td className="px-4 py-2">{event}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ───────────────────────────────── Call for Papers ───────────────────────── */}
                <section id="callforpapers" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Call for Papers</h2>
                    <p className="mt-6 text-gray-700">
                        Provide details about your paper submissions here. Include a link to the submission form and important dates.
                    </p>
                    <div className="mt-8 text-center">
                        <a
                            href={googleFormUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3
               text-white shadow hover:bg-indigo-700 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 className="h-5 w-5" fill="currentColor">
                                <path
                                    d="M3.514 11.112l15.665-8.79a1 1 0 011.467 1.049l-2.65 18.94a1 1 0 01-1.71.59l-4.657-5.147-4.858 3.48a.75.75 0 01-1.144-.523L2.17 12.73a1 1 0 01.344-1.618z"/>
                            </svg>
                            Submit via&nbsp;Google&nbsp;Form
                        </a>
                    </div>
                </section>

                {/* ───────────────────────────────── Challenge ───────────── */}
                <section id="challenge" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Challenge</h2>
                    <p className="mt-6 text-gray-700">
                        Describe your competition or benchmark here. Include links to the dataset and rules if applicable.
                    </p>

               {/*     <div className="mt-8 text-center">*/}
               {/*         <a*/}
               {/*             href={kaggle_comp_url}*/}
               {/*             target="_blank"*/}
               {/*             rel="noreferrer"*/}
               {/*             className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3*/}
               {/*text-white shadow hover:bg-sky-600 transition"*/}
               {/*         >*/}
               {/*             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"*/}
               {/*                  className="h-5 w-5" fill="currentColor">*/}
               {/*                 <path*/}
               {/*                     d="M4 4h4v7.586l8.293-8.293 2.414 2.414L10.414 14l8.293 8.293-2.414 2.414L8 16.414V24H4V4z"/>*/}
               {/*             </svg>*/}
               {/*             Join&nbsp;on&nbsp;Kaggle*/}
               {/*         </a>*/}
               {/*     </div>*/}
                </section>


                {/* ───────────────────────────────── Dataset Overview ───────────────────────── */}
                <section id="dataset" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Dataset Overview</h2>
                    <p className="mt-6 text-gray-700">Add a short description of your dataset here, including download links and license information.</p>
                </section>

                {/* ───────────────────────────────── Challenge Tracks ───────────────────────── */}
                <section id="tracks" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Challenge Tracks &amp; Baselines</h2>
                    <div className="mt-10 grid gap-20 md:grid-cols-2">
                        {/* Track 1 */}
                        <div
                            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600">1 · Classification</h3>
                                <p className="mt-2 text-gray-600">
                                    Predict the scene label for a whole clip. We follow the scene categories provided in
                                    the dataset.
                                </p>
                                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li><strong>Input</strong>: 360° RGB + egocentric RGB + audio/binaural delay.</li>
                                    <li><strong>Output</strong>: The scene label.</li>
                                    <li><strong>Metric</strong>: Top‑1 Accuracy (in test set).</li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded bg-gray-50 p-4 text-sm">
                                <p className="font-medium">Baseline (All views and modalities use)</p>
                                <p>Top‑1 Acc: <span className="font-semibold">80.62  %</span></p>
                            </div>

                            <div className="mt-8 text-center">
                                <a
                                    href={kaggleClassificationUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3
               text-white shadow hover:bg-sky-600 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         className="h-5 w-5" fill="currentColor">
                                        <path
                                            d="M4 4h4v7.586l8.293-8.293 2.414 2.414L10.414 14l8.293 8.293-2.414 2.414L8 16.414V24H4V4z"/>
                                    </svg>
                                    Join&nbsp;on&nbsp;Kaggle
                                </a>
                            </div>
                        </div>
                        {/* Track 2 */}
                        <div
                            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600">2 · Temporal Action
                                    Localization</h3>
                                <p className="mt-2 text-gray-600">Detect the start and end time of every action instance
                                    inside a clip.</p>
                                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li><strong>Input</strong>: Same modalities as Track 1</li>
                                    <li><strong>Output</strong>: JSON output for each
                                        detection:<code>{`{"video_id": ..., "t_start": ..., "t_end": ..., "label": ...}`}</code>
                                    </li>
                                    <li><strong>Metric</strong>: mAP averaged over IoU ∈ {`{0.5, 0.75, 0.95}`}.</li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded bg-gray-50 p-4 text-sm">
                                <p className="font-medium mb-2">Baseline (TriDet + VAD)</p>
                                <table
                                    className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded">
                                    <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-3 py-2 border-b">Metric</th>
                                        <th className="px-3 py-2 border-b">Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="px-3 py-2 border-b">mAP@0.5</td>
                                        <td className="px-3 py-2 border-b font-semibold">27.1</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border-b">mAP@0.75</td>
                                        <td className="px-3 py-2 border-b font-semibold">18.7</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2 border-b">mAP@0.95</td>
                                        <td className="px-3 py-2 border-b font-semibold">7.0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-3 py-2">Average</td>
                                        <td className="px-3 py-2 font-semibold">17.6</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-8 text-center">
                                <a
                                    href={kaggleTalUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3
               text-white shadow hover:bg-sky-600 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         className="h-5 w-5" fill="currentColor">
                                        <path
                                            d="M4 4h4v7.586l8.293-8.293 2.414 2.414L10.414 14l8.293 8.293-2.414 2.414L8 16.414V24H4V4z"/>
                                    </svg>
                                    Join&nbsp;on&nbsp;Kaggle
                                </a>
                            </div>
                        </div>
                        {/*/!* Track 3 *!/*/}
                        {/*<div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">*/}
                        {/*    <div>*/}
                        {/*        <h3 className="text-xl font-semibold text-indigo-600">3 · Spatial Object Localization</h3>*/}
                        {/*        <p className="mt-2 text-gray-600">Detect the start and end time of every action instance inside a clip.</p>*/}
                        {/*        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">*/}
                        {/*            <li><strong>Input</strong>: Same modalities as Track 1</li>*/}
                        {/*            <li><strong>Output</strong>: JSON output for each detection:<code>{`{"video_id": ..., "t_start": ..., "t_end": ..., "x1": ..., "y1": ..., "x2": ..., "y2": ..., "label": ...}`}</code></li>*/}
                        {/*            <li><strong>Metric</strong>: mAP averaged over IoU ∈ {`{0.5, 0.75, 0.95}`}.</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </section>

                {/* ───────────────────────────────── Timeline ───────────────────────── */}
                <section id="timeline" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Timeline (Anywhere on Earth)</h2>
                    <ol className="mt-8 border-l-2 border-indigo-600">
                        {[
                            ["Date 1", "Milestone one"],
                            ["Date 2", "Milestone two"],
                            ["Date 3", "Milestone three"],
                            ["Date 4", "Milestone four"],
                        ].map(([date, desc], i) => (
                            <li key={i} className="relative ml-6 pb-8 last:pb-0">
                                <span className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-indigo-600" />
                                <span className="font-medium text-gray-900">{date}</span>
                                <span className="ml-2 text-gray-600">{desc}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ───────────────────────────────── Submission Rules ───────────────────────── */}
                <section id="submission" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Submission Rules</h2>
                    <ol className="mt-6 list-decimal space-y-3 pl-6 text-gray-700">
                        <li>Teams (≤  5 members) register on Kaggle and fill in the team form.</li>
                        <li>Up to <strong>5 submissions per track per team</strong> – the last one counts.</li>
                        <li>The winners need to submit a technical report and a poster to be presented at the workshop</li>
                        <li>No external data that overlaps with the hidden test clips.</li>
                        <li>Any submission after the deadline will not be considered.</li>
                    </ol>
                </section>






                {/* ───────────────────────────────── Prizes & Sponsors ───────────────────────── */}
                <section id="prizes" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Prizes & Sponsors</h2>
                    <ul className="mt-6 space-y-2 text-gray-700">
                        <li><strong>Hardware:</strong> Insta360 X5 panoramic camera</li>
                        <li><strong>Compute:</strong> GPU Cloud Credit (worth £5-15k) on SCAN</li>
                        <li><strong>Gift:</strong> Amazon / Taobao vouchers</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Sponsored by <a href="https://www.insta360.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Insta360</a> &middot; <a href="https://www.scan.co.uk/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">SCAN</a> &middot; <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Allsee</a>
                    </p>
                </section>


                {/* ───────────────────────────────── Ethics & Impact ───────────────────────── */}
                <section className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Ethics & Broader Impact</h2>
                    <p className="mt-4 text-gray-700">
                        All videos were recorded in public or non‑sensitive areas with informed participant consent. Faces are
                        automatically blurred, and the dataset is released for non‑commercial research under CC BY‑NC‑SA 4.0. We
                        prohibit any re‑identification, surveillance or commercial use. By advancing robust multi‑modal perception,
                        we aim to benefit robotics, AR/VR and assistive tech while upholding fairness and privacy.
                    </p>
                </section>


                {/* ───────────────────────────────── Organizers ───────────────────────── */}
                <section id="organizers" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Organisers</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                        {organizers.map((o) => (
                            <div key={o.name} className="text-center">
                                <a href={o.link} target="_blank" rel="noreferrer">
                                    <img
                                        src={o.img}
                                        alt={o.name}
                                        className="mx-auto h-28 w-28 rounded-full object-cover shadow-md hover:shadow-lg"/>
                                </a>
                                <h3 className="mt-3 text-base font-semibold text-gray-900">
                                    <a href={o.link} target="_blank" rel="noreferrer" className="hover:underline">
                                        {o.name}
                                    </a>
                                </h3>
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
                                <a href={o.link} target="_blank" rel="noreferrer">
                                    <img
                                        src={o.img}
                                        alt={o.name}
                                        className="mx-auto h-28 w-28 rounded-full object-cover shadow-md hover:shadow-lg"/>
                                </a>
                                <h3 className="mt-3 text-base font-semibold text-gray-900">
                                    <a href={o.link} target="_blank" rel="noreferrer" className="hover:underline">
                                        {o.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600">{o.affiliation}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-700">
                        Contact: <a href="mailto:j.jiao@bham.ac.uk" className="text-indigo-600 hover:underline">j.jiao@bham.ac.uk</a>
                    </p>
                </section>

                <section id="sponsors" className="mx-auto mt-24 max-w-5xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Sponsors</h2>
                    <p className="mt-6 text-gray-700">We gratefully acknowledge the generous support of our sponsors.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-10">
                        <a href="https://www.insta360.com/" target="_blank" rel="noreferrer">
                            <img src={sponsorInsta360} alt="Insta360" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.scan.co.uk/" target="_blank" rel="noreferrer">
                            <img src={sponsorScan} alt="SCAN" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer">
                            <img src={sponsorAllsee} alt="Allsee" className="h-24 object-contain" />
                        </a>
                    </div>
                </section>





                {/* ───────────────────────────────── Publications ───────────────────────── */}
                    <section className="mx-auto mt-24 max-w-3xl px-4">
                        <h2 className="text-3xl font-bold text-gray-900">Publication(s)</h2>
                        <p className="mt-4 text-gray-700">Include references or citation information for your project here.</p>
                    </section>

                {/* ───────────────────────────────────── Footer ───────────────────────────────────── */}
                <footer className="mt-32 bg-gray-50 py-6 text-center text-sm text-gray-600">
                    <p>
                        © {new Date().getFullYear()} Event Template. Built with Next.js &amp; Tailwind CSS.
                        Hosted on GitHub Pages.
                    </p>
                </footer>
            </main>
        </>
    );
}
