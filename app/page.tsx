import Head from "next/head";

const test = false;
const root_path = test ? '' : '/BinEgo-360';
/* ─────────────── Static assets ─────────────── */
const favicon_path = `${root_path}/favicon.ico`;
const sponsor_allsee_path = `${root_path}/allsee-logo.jpg`;
const sponsor_insta360_path = `${root_path}/insta360-logo.png`;
const sponsor_scan_path = `${root_path}/SCAN-logo.png`;
const sponsor_tencent_path = `${root_path}/tencent_logo.png`;


const google_form_url = "https://forms.gle/Yhui7XdjZhkCvnwv5";
const kaggle_comp_classification_url = "https://www.kaggle.com/competitions/bin-ego-360-challenge-classification-ext";
const kaggle_comp_tal_url = "https://www.kaggle.com/competitions/bin-ego-360-challenge-tal-ext";

const iccv_logo_path         = `${root_path}/iccv-hawaii-logo.svg`;
const hero_bg_path           = `${root_path}/hawaii-hero.jpg`;

/* ─────────────── Data models ─────────────── */
interface Speaker {
    name: string;
    affiliation: string;
    img: string;
    bio: string;
    link?: string;
}

const speakers: Speaker[] = [
    {
        name: "Addison Lin Wang",
        affiliation: "Nanyang Technological University",
        img: `${root_path}/speakers/addison.png`,
        bio: "Professor Wang is an assistant professor at Nanyang Technological University. He leads the Visual\n" +
            "Learning and Intelligent Systems Lab, focusing on computer vision, computational photography, and\n" +
            "deep learning. His expertise in omnidirectional camera-based vision and intelligent systems aligns with\n" +
            "our workshop’s emphasis on multi-modal scene understanding using panoramic and egocentric data.",
        link: "https://vlislab22.github.io/vlislab/linwang.html",
    },
    {
        name: "Dima Damen",
        affiliation: "University of Bristol",
        img: `${root_path}/speakers/dima.png`,
        bio: "Professor Damen leads the Machine Learning and Computer Vision Group, focusing on under-\n" +
            "standing object interactions, actions, and activities using wearable visual sensors. Her expertise in\n" +
            "egocentric vision and temporal action localization is highly relevant to our workshop’s themes.",
        link: "https://dimadamen.github.io/",
    },
    {
        name: "Bernard Ghanem",
        affiliation: "King Abdullah University of Science and Technology",
        img: `${root_path}/speakers/bernard.jpg`,
        bio: "Professor Ghanem is a Professor of ECE and CS at King Abdullah University of Science and\n" +
            "Technology (KAUST) and Chair/Director of the Center of Excellence in Generative AI (GenAI). He\n" +
            "leads the Image and Video Understanding Lab (IVUL) at KAUST. He leads a local team of the Ego4D\n" +
            "project, a large-scale egocentric dataset for long-term video understanding. He was an organizer of\n" +
            "the Annual ActivityNet Large-Scale Activity Recognition Challenge. His expertise in egocentric video\n" +
            "analysis aligns with our workshop’s focus on multi-modal, multi-view scene understanding and will\n" +
            "contribute to discussions on advancing egocentric multi-modal learning.",
        link: "https://www.bernardghanem.com/",
    },
];

interface Organizer {
    name: string;
    affiliation: string;
    img: string;
    link?: string;
}

const organizers: Organizer[] = [
    {
        name: "Jianbo Jiao",
        affiliation: "University of Birmingham",
        img: `${root_path}/organizers/jiao.jpg`,
        link: "https://jianbojiao.com/",
    },
    {
        name: "Shangzhe Wu",
        affiliation: "University of Cambridge",
        img: `${root_path}/organizers/wu.jpg`,
        link: "https://elliottwu.com/",
    },
    {
        name: "Dylan Campbell",
        affiliation: "Australian National University",
        img: `${root_path}/organizers/campbell.jpg`,
        link: "https://sites.google.com/view/djcampbell",
    },
    {
        name: "Yunchao Wei",
        affiliation: "Beijing Jiaotong University",
        img: `${root_path}/organizers/wei.jpg`,
        link: "https://weiyc.github.io/",
    },
    {
        name: "Lu Qi",
        affiliation: "Insta360",
        img: `${root_path}/organizers/qi.jpg`,
        link: "http://luqi.info/",
    },
    {
        name: "Yasmine Mellah",
        affiliation: "Audioscenic",
        img: `${root_path}/organizers/placeholder_female.jpg`,
        link: "https://www.audioscenic.com/",
    },
    {
        name: "Aleš Leonardis",
        affiliation: "University of Birmingham",
        img: `${root_path}/organizers/leonardis.jpg`,
        link: "https://www.birmingham.ac.uk/staff/profiles/computer-science/academic-staff/leonardis-ales",
    },
];

const technical_organizers: Organizer[] = [
    {
        name: "Chenyuan Qu",
        affiliation: "University of Birmingham",
        img: `${root_path}/organizers/chenyuan.jpg`,
        link: "https://chenyuanqu.com/",
    },
    {
        name: "Han Hu",
        affiliation: "University of Birmingham",
        img: `${root_path}/organizers/han.jpg`,
        link: "https://scholar.google.com/Publicationss?hl=zh-CN&view_op=list_works&gmla=ALUCkoXDRY1FyBSlDC4q0bpK9zpnxnhaf2PzJqv2dgVESTCALg71TCdFa7PGpFqiTrWvhnZalzAY234KBYkLCs4O7U4&user=UJRtTJ0AAAAJ",
    },
    {
        name: "Qiming Huang",
        affiliation: "University of Birmingham",
        img: `${root_path}/organizers/qiming.jpg`,
        link: "https://qiming-huang.github.io/",
    },
    {
        name: "Hao Chen",
        affiliation: "University of Cambridge",
        img: `${root_path}/organizers/hao.jpg`,
        link: "https://h-chen.com/",
    }
];


interface KeynoteTalk {
    speaker: string;
    title: string;
}

const keynoteTalks: KeynoteTalk[] = [
    {
        speaker: "Bernard Ghanem",
        title: "Towards Robust Multimodal Egocentric Video Understanding",
    },
    {
        speaker: "Dima Damen",
        title: "Video Understanding Out of the Frame: An Egocentric Perspective",
    },
    {
        speaker: "Addison Lin Wang",
        title: "360 Vision in the Foundation AI Era: Principles, Methods, and Future Directions",
    },
];

interface InvitedPaper {
    title: string;
    authors: string;
    url: string;
}

const invitedPapers: InvitedPaper[] = [
    {
        title: "Beyond the Frame: Generating 360° Panoramic Videos from Perspective Videos",
        authors: "Presenter: Rundong Luo",
        url: "https://red-fairy.github.io/argus/",
    },
    {
        title: "EgoAdapt: Adaptive Multisensory Distillation and Policy Learning for Efficient Egocentric Perception",
        authors: "Presenter: Sanjoy Chowdhury",
        url: "https://schowdhury671.github.io/egoadapt_project/",
    },
    {
        title: "Switch-a-View: View Selection Learned from Unlabeled In-the-wild Videos",
        authors: "Presenter: Sagnik Majumder",
        url: "https://vision.cs.utexas.edu/projects/switch_a_view/",
    },
];

const programmeSchedule: Array<[string, string]> = [
    ["09:00 – 09:30", "Opening Remarks"],
    [
        "09:30 – 10:05",
        `Keynote Talk: ${keynoteTalks[0].speaker} — ${keynoteTalks[0].title}`,
    ],
    [
        "10:05 – 10:40",
        `Keynote Talk: ${keynoteTalks[1].speaker} — ${keynoteTalks[1].title}`,
    ],
    ["10:40 – 11:00", "Break & Poster Session"],
    ["11:00 – 11:45", "Invited Paper Presentations"],
    [
        "11:45 – 12:20",
        `Keynote Talk: ${keynoteTalks[2].speaker} — ${keynoteTalks[2].title}`,
    ],
    ["12:20 – 12:35", "Awards Ceremony & Concluding Remarks"],
];




export default function Workshop() {
    return (
        <>
            {/* ───────────────────────────────────── <head> meta ───────────────────────────────────── */}
            <Head>
                <title>Binocular Egocentric-360° Multi-modal Scene Understanding in the Wild</title>
                <meta
                    name="description"
                    content="Official site of the BinEgo‑360°:  Binocular Egocentric-360° Multi-modal Scene Understanding in the Wild"
                />
                <link
                    rel="icon"
                    href={favicon_path}
                />
            </Head>

            {/* ───────────────────────────────────── Navbar ───────────────────────────────────── */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-6 bg-gray-800 px-4 py-1 text-xs text-gray-100">
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5 2.503 2.503 0 01-2.5 2.5z"/>
                        </svg>
                        Room 306 B, Hawaii Convention Center, Honolulu HI, USA
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 12a5 5 0 01-5 5v5h-3v-5a5 5 0 110-10V2h3v5a5 5 0 015 5z"/>
                        </svg>
                        19th Oct, 2025
                    </div>
                    <a href="mailto:j.jiao@bham.ac.uk" className="hover:underline">
                        j.jiao@bham.ac.uk
                    </a>

                    {/*<div className="ml-auto flex gap-2">*/}
                    {/*    <a href="#challenge"*/}
                    {/*       className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700">Competitions</a>*/}
                    {/*    <a href="#submission" className="rounded bg-sky-600 px-3 py-1 text-white hover:bg-sky-700">Submission*/}
                    {/*        Portal</a>*/}
                    {/*</div>*/}
                </div>
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 text-base font-semibold">
                        <span className="text-indigo-600">BinEgo‑360°</span>
                        <span>Workshop @ ICCV 2025</span>
                    </div>
                    <ul className="hidden gap-6 md:flex">
                        {[
                            ["Home", "#home"],
                            ["Overview", "#overview"],
                            ["Speakers", "#speakers"],
                            ["Programme", "#programme"],
                            ["Paper Presentations", "#invited-papers"],
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
                    style={{backgroundImage: `url(${hero_bg_path})`}}
                >
                    <div className="absolute inset-0 bg-black/60"/>

                    {/* 内容层 */}
                    <div className="relative z-10 mx-auto max-w-5xl px-4">

                        {/* ➌ NEW: ICCV Hawaii logo */}
                        <img
                            src={iccv_logo_path}
                            alt="ICCV 2025 Honolulu Hawaii"
                            className="mx-auto mb-6 h-20 w-auto"
                        />
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            BinEgo‑360°: Binocular Egocentric-360° Multi-modal Scene Understanding in the Wild
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
                            Welcome to the <span className="font-semibold text-indigo-200">BinEgo‑360°
            Workshop & Challenge</span> at ICCV 2025. We bring together researchers working on
                            {' '}<strong>360° panoramic</strong> and <strong>binocular egocentric</strong> vision to
                            explore
                            human‑like perception across <em>video</em>, <em>audio</em>, and <em>geo‑spatial</em>{' '}
                            modalities.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a
                                href="https://media.eventhosts.cc/Conferences/ICCV2025/iccv25_workshops_tutorials.pdf#page=40"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21s-7-4.686-7-11a7 7 0 1 1 14 0c0 6.314-7 11-7 11zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                    />
                                </svg>
                                Venue: Room&nbsp;306B
                            </a>
                            <a
                                href="https://iccv.thecvf.com/virtual/2025/workshop/2749"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-9A2.25 2.25 0 0 0 2.25 5.25v13.5A2.25 2.25 0 0 0 4.5 21h9a2.25 2.25 0 0 0 2.25-2.25V15l6 3.75V5.25L15.75 9z"
                                    />
                                </svg>
                                Join online
                            </a>
                            <a
                                href="#programme"
                                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 6.75h7.5m-7.5 3h7.5m-7.5 3h4.5M6.75 5.25A2.25 2.25 0 0 0 4.5 7.5v9A2.25 2.25 0 0 0 6.75 18.75h10.5A2.25 2.25 0 0 0 19.5 16.5v-9a2.25 2.25 0 0 0-2.25-2.25H6.75z"
                                    />
                                </svg>
                                View programme
                            </a>
                            <a
                                href="#challenge"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 3.75h2.25A1.25 1.25 0 0 1 20 5v2.25a3.75 3.75 0 0 1-3.75 3.75L16 11.5a4.5 4.5 0 0 1-3.75 3.7V18h2.25a.75.75 0 1 1 0 1.5H9.5A.75.75 0 1 1 9.5 18H11v-2.8A4.5 4.5 0 0 1 7.25 11.5l-.25-.5A3.75 3.75 0 0 1 3.25 7.25V5a1.25 1.25 0 0 1 1.25-1.25H6.75a.75.75 0 0 1 .75.75v4a2.25 2.25 0 1 0 4.5 0v-4a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4a2.25 2.25 0 1 0 4.5 0v-4a.75.75 0 0 1 .75-.75Z"
                                    />
                                </svg>
                                Participate in challenge
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
                <section id="programme" className="mx-auto mt-24 max-w-6xl px-4 lg:max-w-7xl">
                    <div className="rounded-3xl bg-white/95 p-8 shadow-2xl ring-1 ring-indigo-100 backdrop-blur-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                                Workshop Programme (Half‑day)
                            </h2>
                            <span className="inline-flex items-center gap-2 self-start rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 10.5h7.5m-7.5 3.75h4.5m7.5-1.5A2.25 2.25 0 0 1 19.5 18v1.5A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75V18a2.25 2.25 0 0 1 2.25-2.25h12.75Zm0-9.75V6A2.25 2.25 0 0 1 19.5 8.25H4.5A2.25 2.25 0 0 1 2.25 6V4.5A2.25 2.25 0 0 1 4.5 2.25h15A2.25 2.25 0 0 1 21.75 4.5V6Z" />
                                </svg>
                                Room 306B · 19 Oct 2025
                            </span>
                        </div>
                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-left text-base text-gray-900">
                                <thead className="bg-indigo-600/90 text-white">
                                    <tr>
                                        <th className="whitespace-nowrap px-6 py-3 text-lg font-semibold tracking-wide">Time</th>
                                        <th className="px-6 py-3 text-lg font-semibold tracking-wide">Session</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-100">
                                    {programmeSchedule.map(([time, event], i) => {
                                        const isKeynote = event.startsWith("Keynote Talk:");
                                        const isInvited = event.includes("Invited Paper Presentations");

                                        return (
                                            <tr key={i} className="odd:bg-white even:bg-indigo-50/40 align-top">
                                                <td className="whitespace-nowrap px-6 py-4 text-lg font-semibold text-indigo-700">
                                                    {time}
                                                </td>
                                                <td className="px-6 py-4 align-top text-base text-gray-900">
                                                    <div className="space-y-4">
                                                        {isKeynote ? (
                                                            <span className="inline-flex items-baseline gap-2 whitespace-nowrap font-semibold text-indigo-800">
                                                                <span className="rounded-full bg-indigo-600/15 px-2 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
                                                                    Keynote
                                                                </span>
                                                                {event.replace("Keynote Talk:", "").trim()}
                                                            </span>
                                                        ) : (
                                                            !isInvited && (
                                                                <span className="font-semibold text-gray-900">
                                                                    {event}
                                                                </span>
                                                            )
                                                        )}

                                                        {isInvited && (
                                                            // <div className="rounded-2xl bg-amber-50/80 p-5 text-sm text-gray-700 shadow-inner ring-1 ring-amber-100">
                                                            //     <div className="flex flex-wrap items-center gap-3">
                                                            //         {/* <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                                                            //             Invited Session
                                                            //         </span> */}
                                                            //         <span className="text-base font-semibold text-[#2E33B2]">
                                                            //             {event}
                                                            //         </span>
                                                            //     </div>
                                                            //     <ul className="mt-4 space-y-3 leading-relaxed md:text-base">
                                                            <div className="space-y-4 text-sm text-gray-700 md:text-base">
                                                                <span className="rounded-full bg-indigo-600/15 px-2 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
                                                                    {event}
                                                                </span>
                                                                <ul className="space-y-1 leading-relaxed">                                                            
                                                                    {invitedPapers.map((paper, j) => (
                                                                        <li key={j} className="space-y-1">
                                                                            <a
                                                                                href={paper.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="font-semibold text-amber-700 hover:text-amber-800 hover:underline"
                                                                            >
                                                                                {paper.title}
                                                                            </a>
                                                                            <div className="text-sm italic text-gray-600 md:text-base">
                                                                                {paper.authors}
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


               {/* /!* ──────────────────────────────── Call for Paper Presentations ───────────────────────── *!/*/}
               {/* <section id="callforpapers" className="mx-auto mt-24 max-w-6xl px-4">*/}
               {/*     <h2 className="text-3xl font-bold text-gray-900">Call for Paper Presentations</h2>*/}
               {/*     <p className="mt-6 text-gray-700">*/}
               {/*         We invite papers from the ICCV 2025 main conference. All of the papers will be with related*/}
               {/*         research topics to this workshop, and will be reviewed to assess the suitability/relevance to the workshop. If you are interested in presenting your work at our workshop, please fill in this form (submission deadline August 25th):*/}
               {/*     </p>*/}
               {/*     <div className="mt-8 text-center">*/}
               {/*         <a*/}
               {/*             href={google_form_url}*/}
               {/*             target="_blank"*/}
               {/*             rel="noreferrer"*/}
               {/*             className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3*/}
               {/*text-white shadow hover:bg-indigo-700 transition"*/}
               {/*         >*/}
               {/*             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"*/}
               {/*                  className="h-5 w-5" fill="currentColor">*/}
               {/*                 <path*/}
               {/*                     d="M3.514 11.112l15.665-8.79a1 1 0 011.467 1.049l-2.65 18.94a1 1 0 01-1.71.59l-4.657-5.147-4.858 3.48a.75.75 0 01-1.144-.523L2.17 12.73a1 1 0 01.344-1.618z"/>*/}
               {/*             </svg>*/}
               {/*             Submit via&nbsp;Google&nbsp;Form*/}
               {/*         </a>*/}
               {/*     </div>*/}
               {/* </section>*/}

                {/* ───────────────────────────────── Invited Paper Presentations ───────────────────────────────── */}
                {/* <section id="invited-papers" className="mx-auto mt-24 max-w-4xl px-4 text-gray-700">
                    <h2 className="text-3xl font-bold text-gray-900">Invited Paper Presentations</h2>
                    <p className="mt-6">
                        Explore the invited papers that will be highlighted during the dedicated presentation session.
                    </p>
                    <ul className="mt-6 list-disc space-y-3 pl-6">
                        {invitedPapers.map((paper) => (
                            <li key={paper.title}>
                                <a
                                    href={paper.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
                                >
                                    {paper.title}
                                </a>
                                <span className="block text-sm text-gray-600">{paper.authors}</span>
                            </li>
                        ))}
                    </ul>
                </section> */}

                {/* ───────────────────────────────── Challenge ───────────── */}
                <section id="challenge" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">BinEgo‑360° Challenge</h2>
                    <p className="mt-6 text-gray-700">

                        The challenge uses our public dataset <a
                        href="https://x360dataset.github.io/"
                        target="_blank" rel="noreferrer"
                        className="underline"
                    >360+x</a> for training/validation, and a held-out test set for the evaluation. <ul>Apart from the prizes, winners of the challenge will be invited to submit a paper/report to be included in the workshop proceedings and present at the workshop.</ul> For more details about the dataset, tracks, timeline, and submission rules, please see below:

                    </p>
                    <div className="mt-6 rounded border-l-4 border-yellow-400 bg-yellow-50 p-4 text-gray-700">
                        <p className="font-semibold">Important Notice:</p>
                        <p className="mt-2">
                            <b>New Final Submission Deadline&nbsp;&nbsp;▶&nbsp;&nbsp;20 August 2025 (AOE)</b>
                        </p>
                        <p className="mt-2">
                            We are delighted to let you know that the challenge deadline has been extended! Now you have more time to cook your good stuff!
                        </p>
                    </div>

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
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-md">
                            <img
                                src="https://x360dataset.github.io/static/images/overall.gif"
                                alt="Dataset montage"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center text-gray-700">
                            <ul className="space-y-3">
                                <li>2,152 videos – 8.579 M frames / 67.78 h.</li>
                                <li><strong>Viewpoints</strong>: 360° panoramic, binocular &amp; monocular egocentric, third‑person front.</li>
                                <li><strong>Modalities</strong>: RGB video, 6‑channel spatial audio, GPS + weather, text scene description.</li>
                                <li><strong>Annotations</strong>: 38 action classes, temporal segments; object bounding boxes.</li>
                                <li><strong>Resolution</strong>: 5 K originals (5 760 × 2 880 pano).</li>
                                <li><strong>License</strong>: CC BY‑NC‑SA 4.0. All faces auto‑blurred.</li>
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-4">
                                <a
                                    href="https://huggingface.co/datasets/quchenyuan/360x_dataset_HR"
                                    className="rounded bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
                                >
                                    Download HR
                                </a>
                                <a
                                    href="https://huggingface.co/datasets/quchenyuan/360x_dataset_LR"
                                    className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400"
                                >
                                    Download LR
                                </a>
                                <a
                                    href="https://arxiv.org/abs/2404.00989"
                                    className="rounded border border-indigo-600 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                                >
                                    Paper (CVPR 2024)
                                </a>
                                <a
                                    href="https://github.com/x360dataset/x360dataset-kit"
                                    className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400"
                                >
                                    Baseline Code
                                </a>
                            </div>
                        </div>
                    </div>
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
                                    href={kaggle_comp_classification_url}
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
                                    href={kaggle_comp_tal_url}
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
                            ["1 Jun 2025", "Dataset & baselines release; Kaggle opens"],
                            ["20 Aug 2025", "Submission deadline"],
                            ["Sep 2025", "Technical report and poster due"],
                            ["19-20 Oct 2025", "Awards & talks at ICCV 2025 workshop"],
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
                        <li><strong>Hardware:</strong> Insta360 X5 panoramic camera (<a href="https://www.insta360.com/"
                                                                                        target="_blank" rel="noreferrer"
                                                                                        className="text-indigo-600 hover:underline">Insta360</a>)
                        </li>
                        <li><strong>Compute:</strong> GPU Cloud Credit (worth £5-15k) (<a href="https://www.scan.co.uk/"
                                                                                          target="_blank"
                                                                                          rel="noreferrer"
                                                                                          className="text-indigo-600 hover:underline">SCAN</a>)</li>
                        <li><strong>Gift:</strong> Amazon / Taobao vouchers (<a href="https://www.allsee-tech.com/"
                                                                                target="_blank" rel="noreferrer"
                                                                                className="text-indigo-600 hover:underline">Allsee</a>)
                        </li>
                        <li><strong>Registration:</strong> Workshop fee for the 1st &amp; 2nd winners on each track (<a
                            href="https://www.tencent.com/" target="_blank" rel="noreferrer"
                            className="text-indigo-600 hover:underline">Tencent</a>)
                        </li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Sponsored by <a href="https://www.insta360.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Insta360</a> &middot; <a href="https://www.scan.co.uk/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">SCAN</a> &middot; <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Allsee</a> &middot; <a href="https://www.tencent.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Tencent</a>
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
                        {technical_organizers.map((o) => (
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

                <section id="sponsors" className="mx-auto mt-24 max-w-10xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Sponsors</h2>
                    <p className="mt-6 text-gray-700">We gratefully acknowledge the generous support of our sponsors.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-10">
                        <a href="https://www.insta360.com/" target="_blank" rel="noreferrer">
                            <img src={sponsor_insta360_path} alt="Insta360" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.scan.co.uk/" target="_blank" rel="noreferrer">
                            <img src={sponsor_scan_path} alt="SCAN" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer">
                            <img src={sponsor_allsee_path} alt="Allsee" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.tencent.com/" target="_blank" rel="noreferrer">
                            <img src={sponsor_tencent_path} alt="Tencent" className="h-24 object-contain" />
                        </a>
                    </div>
                </section>





                {/* ───────────────────────────────── Publications ───────────────────────── */}
                <section className="mx-auto mt-24 max-w-3xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Publication(s)</h2>
                    <p className="mt-4 text-gray-700">If you use the 360+x dataset or participate in the challenge, please consider cite:</p>
                    <pre className="mt-4 rounded bg-gray-100 p-4 text-sm leading-tight text-gray-800 overflow-x-auto">
            {`@inproceedings{chen2024x360,
  title     = {360+x: A Panoptic Multi-modal Scene Understanding Dataset},
  author    = {Chen, Hao and Hou, Yuqi and Qu, Chenyuan and Testini, Irene and Hong, Xiaohan and Jiao, Jianbo},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year      = {2024}
}`}
          </pre>
                </section>

                {/* ───────────────────────────────────── Footer ───────────────────────────────────── */}
                <footer className="mt-32 bg-gray-50 py-6 text-center text-sm text-gray-600">
                    <p>
                        © {new Date().getFullYear()} BinEgo‑360° Workshop. Built with Next.js &amp; Tailwind CSS.
                        Hosted on GitHub Pages.
                    </p>
                </footer>
            </main>
        </>
    );
}
