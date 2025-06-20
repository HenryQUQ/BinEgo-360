export const rootPath = process.env.NEXT_PUBLIC_ROOT_PATH ? `/${process.env.NEXT_PUBLIC_ROOT_PATH}` : "";

export interface Speaker {
  name: string;
  affiliation: string;
  img: string;
  bio: string;
  link?: string;
}

export interface Organizer {
  name: string;
  affiliation: string;
  img: string;
  link?: string;
}

export interface EventInfo {
  location: string;
  date: string;
  contact: string;
  title: string;
  subtitle: string;
}

export const eventInfo: EventInfo = {
  location: "Conference Venue, City",
  date: "1 January 2025",
  contact: "organiser@example.com",
  title: "Workshop Title",
  subtitle: "Workshop & Challenge",
};

export const googleFormUrl = "";
export const kaggleClassificationUrl = "";
export const kaggleTalUrl = "";

export const speakers: Speaker[] = [
  {
    name: "Speaker One",
    affiliation: "University A",
    img: `${rootPath}/speakers/speaker1.png`,
    bio: "Short bio for speaker one.",
  },
  {
    name: "Speaker Two",
    affiliation: "Institute B",
    img: `${rootPath}/speakers/speaker2.png`,
    bio: "Short bio for speaker two.",
  },
  {
    name: "Speaker Three",
    affiliation: "Organisation C",
    img: `${rootPath}/speakers/speaker3.jpg`,
    bio: "Short bio for speaker three.",
  },
];

export const organizers: Organizer[] = [
  { name: "Organizer One", affiliation: "Institute", img: `${rootPath}/organizers/organizer1.jpg` },
  { name: "Organizer Two", affiliation: "Institute", img: `${rootPath}/organizers/organizer2.jpg` },
  { name: "Organizer Three", affiliation: "Institute", img: `${rootPath}/organizers/organizer3.jpg` },
  { name: "Organizer Four", affiliation: "Institute", img: `${rootPath}/organizers/organizer4.jpg` },
  { name: "Organizer Five", affiliation: "Institute", img: `${rootPath}/organizers/organizer5.jpg` },
  { name: "Organizer Six", affiliation: "Institute", img: `${rootPath}/organizers/organizer6.jpg` },
  { name: "Organizer Seven", affiliation: "Institute", img: `${rootPath}/organizers/organizer7.jpg` },
];

export const technicalOrganizers: Organizer[] = [
  { name: "Tech Chair A", affiliation: "Institute", img: `${rootPath}/organizers/organizer8.jpg` },
  { name: "Tech Chair B", affiliation: "Institute", img: `${rootPath}/organizers/organizer9.jpg` },
  { name: "Tech Chair C", affiliation: "Institute", img: `${rootPath}/organizers/organizer10.jpg` },
  { name: "Tech Chair D", affiliation: "Institute", img: `${rootPath}/organizers/organizer11.jpg` },
];

export const sponsor1 = `${rootPath}/sponsor1.png`;
export const sponsor2 = `${rootPath}/sponsor2.png`;
export const sponsor3 = `${rootPath}/sponsor3.jpg`;
export const faviconPath = `${rootPath}/favicon.ico`;
export const logoPath = `${rootPath}/logo.svg`;
export const heroBgPath = `${rootPath}/hero.jpg`;
