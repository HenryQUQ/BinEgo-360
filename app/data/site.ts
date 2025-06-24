export const rootPath = process.env.NEXT_PUBLIC_ROOT_PATH ? `/${process.env.NEXT_PUBLIC_ROOT_PATH}` : "";

export interface Speaker {
  name: string;
  affiliation: string;
  img: string;
  link?: string;
}

export interface Organizer {
  name: string;
  affiliation: string;
  img: string;
  link?: string;
}

export const siteTitle = "Research Workshop";
export const siteDescription = "A template site for academic events.";
export const heroTitle = "Research Workshop";
export const heroTagline = "Short description of your event goes here.";
export const eventLocation = "Conference Venue";
export const eventDate = "Date, Year";
export const contactEmail = "contact@example.com";

export const googleFormUrl = "#";
export const kaggleClassificationUrl = "#";
export const kaggleTalUrl = "#";

export const speakers: Speaker[] = [
  {
    name: "Speaker One",
    affiliation: "Example University",
    img: `${rootPath}/speakers/speaker1.jpg`,
    link: "#",
  },
  {
    name: "Speaker Two",
    affiliation: "Another Institute",
    img: `${rootPath}/speakers/speaker2.jpg`,
    link: "#",
  },
  {
    name: "Speaker Three",
    affiliation: "Research Lab",
    img: `${rootPath}/speakers/speaker3.jpg`,
    link: "#",
  },
];

export const organizers: Organizer[] = [
  { name: "Organizer One", affiliation: "Example Org", img: `${rootPath}/organizers/org1.jpg`, link: "#" },
  { name: "Organizer Two", affiliation: "Example Org", img: `${rootPath}/organizers/org2.jpg`, link: "#" },
  { name: "Organizer Three", affiliation: "Example Org", img: `${rootPath}/organizers/org3.jpg`, link: "#" },
];

export const technicalOrganizers: Organizer[] = [
  { name: "Tech Chair", affiliation: "Example Org", img: `${rootPath}/organizers/tech1.jpg`, link: "#" },
];

export const sponsorAllsee = `${rootPath}/sponsor1.png`;
export const sponsorInsta360 = `${rootPath}/sponsor2.png`;
export const sponsorScan = `${rootPath}/sponsor3.png`;
export const faviconPath = `${rootPath}/favicon.ico`;
export const iccvLogoPath = `${rootPath}/logo.svg`;
export const heroBgPath = `${rootPath}/hero.jpg`;
