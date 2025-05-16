import Head from "next/head";

const test = false;
const root_path = test ? '' : '/BinEgo-360';
/* ─────────────── Static assets ─────────────── */
const favicon_path = `${root_path}/favicon.ico`;
const sponsor_allsee_path = `${root_path}/allsee-logo.jpg`;
const sponsor_insta360_path = `${root_path}/insta360-logo.png`; // add your logo file here

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
        affiliation: "Beihang University",
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
        img: `${root_path}/organizers/mellah.jpg`,
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
        link: "https://scholar.google.com/citations?hl=zh-CN&view_op=list_works&gmla=ALUCkoXDRY1FyBSlDC4q0bpK9zpnxnhaf2PzJqv2dgVESTCALg71TCdFa7PGpFqiTrWvhnZalzAY234KBYkLCs4O7U4&user=UJRtTJ0AAAAJ",
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




export default function Workshop() {
    return (
        <>
            {/* ───────────────────────────────────── <head> meta ───────────────────────────────────── */}
            <Head>
                <title>BinEgo‑360 Workshop & Challenge @ ICCV 2025</title>
                <meta
                    name="description"
                    content="Official site of the BinEgo‑360: Binocular Egocentric‑360° Multi‑modal Scene Understanding Workshop & Challenge at ICCV 2025"
                />
                <link
                    rel="icon"
                    href={favicon_path}
                />
            </Head>

            {/* ───────────────────────────────────── Navbar ───────────────────────────────────── */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2 text-base font-semibold">
                        <span className="text-indigo-600">BinEgo‑360</span>
                        <span>Workshop @ ICCV 2025</span>
                    </div>
                    <ul className="hidden gap-6 md:flex">
                        {[
                            ["Home", "#home"],
                            ["Overview", "#overview"],
                            ["Paper Submission", "#papersubmission"],
                            ["Speakers", "#speakers"],
                            ["Organizers", "#organizers"],
                            ["Programme", "#programme"],
                            ["Challenge", "#challenge"],
                            ["Dataset", "#dataset"],
                            ["Sponsors","#sponsors"]

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
                <section className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        BinEgo‑360: Binocular Egocentric‑360° Multi‑modal Scene Understanding
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                        Welcome to the <span className="font-semibold text-indigo-600">BinEgo‑360
            Workshop & Challenge</span> at ICCV 2025. We bring together researchers working on
                        {' '}<strong>360° panoramic</strong> and <strong>binocular egocentric</strong> vision to explore
                        human‑like perception across <em>video</em>, <em>audio</em>, and <em>geo‑spatial</em>
                        modalities.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="#papersubmission"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow hover:bg-indigo-700"
                        >
                            Paper Submission
                        </a>
                        <a
                            href="#challenge"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 shadow hover:border-gray-400"
                        >
                            Participate in Challenge
                        </a>
                    </div>
                </section>

                {/* ───────────────────────────────── Overview ───────────────────────────────── */}
                <section id="overview" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                    <p className="mt-6 text-gray-700">

                        This half-day workshop mainly looks at multi-modal scene understanding and perception in a
                        human-like way.
                        Specifically, we will focus on <strong>binocular/stereo</strong> egocentric and <strong>360
                        panoramic</strong> perspectives, which mea-
                        sure both first-person views and third-person panoptic views, mimicking a human in the scene, by
                        combining with multi‑modal
                        cues such as <em>spatial audio</em>, <em>textual descriptions</em>, and
                        <em>geo‑metadata</em>. This workshop will cover but not be limited to the following topics:
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                        <li>Embodied 360° scene understanding &amp; egocentric visual reasoning</li>
                        <li>Multi-modal scene understanding</li>
                        <li>Stereo Vision</li>
                        <li>Open‑world learning &amp; domain adaptation</li>
                    </ul>
                </section>

                {/* ───────────────────────────────── Paper Submission ───────────────────────── */}
                <section id="papersubmission" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Paper Submission</h2>
                    <p className="mt-6 text-gray-700">
                        We will invite papers from the ICCV 2025 main conference.
                        papers.
                        All of the papers will be with related research topics to this
                        workshop, and will be reviewed by a program committee consisting of domain experts.
                    </p>
                </section>

                {/* ───────────────────────────────── Speakers ───────────────────────── */}
                <section id="speakers" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Invited Speakers</h2>
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
                                <p className="mt-2 text-sm text-gray-700">{s.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ───────────────────────────────── Organizers ───────────────────────── */}
                <section id="organizers" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Organizing Committee</h2>
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

                {/* ───────────────────────────────── Programme ───────────────────────── */}
                <section id="programme" className="mx-auto mt-24 max-w-5xl px-4">
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
                                ["09:00 – 09:30", "Opening & dataset overview"],
                                ["09:30 – 10:05", "Keynote 1 – Addison Lin Wang"],
                                ["10:05 – 10:40", "Keynote 2 – Dima Damen"],
                                ["10:40 – 11:00", "Coffee break & poster session"],
                                ["11:00 – 11:45", "Invited paper talks ×3"],
                                ["11:45 – 12:20", "Keynote 3 – Bernard Ghanem"],
                                ["12:20 – 12:35", "Awards & closing"],
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

                {/* ───────────────────────────────── Challenge (inherits existing) ───────────── */}
                <section id="challenge" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">BinEgo‑360 Challenge</h2>
                    <p className="mt-6 text-gray-700">
                        The challenge uses the public <a
                        href="https://x360dataset.github.io/"
                        target="_blank" rel="noreferrer"
                        className="underline"
                    >360+x</a> dataset for training/validation and <strong>30 hidden videos</strong> for the
                        final test set. Three tracks open on <strong>26 Apr 2025</strong>:
                    </p>
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
                <section id="tracks" className="mx-auto mt-24 max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Challenge Tracks &amp; Baselines</h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                        {/* Track 1 */}
                        <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600">1 · Classification</h3>
                                <p className="mt-2 text-gray-600">
                                    Predict the scene lable for a whole clip. We follow the scene categories provided in the dataset.
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
                        </div>
                        {/* Track 2 */}
                        <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600">2 · Temporal Action Localization</h3>
                                <p className="mt-2 text-gray-600">Detect the start and end time of every action instance inside a clip.</p>
                                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li><strong>Input</strong>: Same modalities as Track 1</li>
                                    <li><strong>Output</strong>: JSON output for each detection:<code>{`{"video_id": ..., "t_start": ..., "t_end": ..., "label": ...}`}</code></li>
                                    <li><strong>Metric</strong>: mAP averaged over IoU ∈ {`{0.5, 0.75, 0.95}`}.</li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded bg-gray-50 p-4 text-sm">
                                <p className="font-medium mb-2">Baseline (TriDet + VAD)</p>
                                <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded">
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
                        </div>
                        {/* Track 3 */}
                        <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div>
                                <h3 className="text-xl font-semibold text-indigo-600">3 · Spatial Object Localization</h3>
                                <p className="mt-2 text-gray-600">Detect the start and end time of every action instance inside a clip.</p>
                                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                    <li><strong>Input</strong>: Same modalities as Track 1</li>
                                    <li><strong>Output</strong>: JSON output for each detection:<code>{`{"video_id": ..., "t_start": ..., "t_end": ..., "x1": ..., "y1": ..., "x2": ..., "y2": ..., "label": ...}`}</code></li>
                                    <li><strong>Metric</strong>: mAP averaged over IoU ∈ {`{0.5, 0.75, 0.95}`}.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────────────────────────────── Timeline ───────────────────────── */}
                <section id="timeline" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Timeline (UTC)</h2>
                    <ol className="mt-8 border-l-2 border-indigo-600">
                        {[
                            ["12 May 2025", "Dataset & baselines release; CodaLab opens"],
                            ["27 Jun 2025 23:59", "Submission deadline"],
                            ["18 Jul 2025", "Winner slides/posters due"],
                            ["Sep 2025", "Awards & talks at ICCV 2025 workshop"],
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
                        <li>Teams (≤  5 members) register on CodaLab and fill in the team form.</li>
                        <li>Up to <strong>5 submissions per track per team</strong> – the last one counts.</li>
                        <li>No external data that overlaps with the hidden test clips.</li>
                        <li>Any submission after the deadline will be ignored.</li>
                    </ol>
                </section>






                {/* ───────────────────────────────── Prizes & Sponsors ───────────────────────── */}
                <section id="prizes" className="mx-auto mt-24 max-w-4xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Prizes & Sponsors</h2>
                    <ul className="mt-6 space-y-2 text-gray-700">
                        <li><strong>Hardware:</strong> Insta360 X4 panoramic camera</li>
                        <li><strong>Compute:</strong> 5 000 GPU‑hours on partner cloud</li>
                        <li><strong>Gift:</strong> Amazon / Taobao vouchers</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Sponsored by <a href="https://www.insta360.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Insta360</a> &middot; <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Allsee</a>
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



                <section id="sponsors" className="mx-auto mt-24 max-w-5xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Sponsors</h2>
                    <p className="mt-6 text-gray-700">We gratefully acknowledge the generous support of our sponsors.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-10">
                        <a href="https://www.insta360.com/" target="_blank" rel="noreferrer">
                            <img src={sponsor_insta360_path} alt="Insta360" className="h-24 object-contain" />
                        </a>
                        <a href="https://www.allsee-tech.com/" target="_blank" rel="noreferrer">
                            <img src={sponsor_allsee_path} alt="Allsee" className="h-24 object-contain" />
                        </a>
                    </div>
                </section>


                {/* ───────────────────────────────── Citation ───────────────────────── */}
                <section className="mx-auto mt-24 max-w-3xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900">Citation</h2>
                    <p className="mt-4 text-gray-700">If you use the 360+x dataset or participate in the challenge, please cite:</p>
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
                        © {new Date().getFullYear()} BinEgo‑360 Workshop. Built with Next.js &amp; Tailwind CSS.
                        Hosted on GitHub Pages.
                    </p>
                </footer>
            </main>
        </>
    );
}
