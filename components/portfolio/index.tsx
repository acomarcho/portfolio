import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const portfolios = [
  {
    id: 1,
    type: "Contest Submission",
    title: "CariMentor",
    imageUrl: "/portfolio/carimentor.png",
    description:
      "CariMentor is a submission for GarudaHacks 4.0 in the youth track and won the runner up position. It is a fullstack application using Next as its' frontend and Express as its' backend (both in TypeScript). For the database, PostgreSQL with Prisma is used. Components were either self-made in Tailwind or from Mantine. I made the frontend and the design for this work.",
    visitUrl: "https://carimentor.marchotridyo.com",
    repoUrl: "https://github.com/acomarcho/carimentor",
  },
  {
    id: 6,
    type: "Personal Project",
    title: "kodekodean.id",
    imageUrl: "/portfolio/kodekodeanid.png",
    description:
      "This is a fullstack application targeted for new college students at ITB prepare for one of their courses, Computational Thinking. It uses Next as a fullstack framework and uses technologies like PostgreSQL, Prisma, Redis, as well as features like reading and rendering markdown files on the browser. I not only made the site, but also did the design and made all the content by myself.",
    visitUrl: "https://kodekodean.my.id",
    repoUrl: "https://github.com/acomarcho/kodekodean-v2",
  },
  {
    id: 2,
    type: "Freelance Work",
    title: "Tabina Lingkungan",
    imageUrl: "/portfolio/tabinalingkungan.png",
    description:
      "This is a freelance work to make a landing page for PT Tabina Lingkungan, an environmental audit company that is based in Jatibening, Bekasi. It is made using Next (TypeScript) and Tailwind with some components from Mantine. I worked solo on this project.",
    visitUrl: "https://tabinalingkungan.com",
    repoUrl: "https://github.com/acomarcho/tabina-lingkungan",
  },
  {
    id: 3,
    type: "Freelance Work",
    title: "Cody Kit",
    imageUrl: "/portfolio/codykit.png",
    description:
      "This is a freelance work to make a landing page for CodyKit, the first coding based learning toy in Indonesia. It is made using React and vanilla CSS. Not only I made the site, but I also made the design for this project. I worked solo on this project.",
    visitUrl: "https://codykit.id",
    repoUrl: "https://github.com/acomarcho/codykit-web",
  },
  {
    id: 4,
    type: "Personal Project",
    title: "DailyWins",
    imageUrl: "/portfolio/dailywins.png",
    description:
      "This is a personal project that I use daily to journal and also to showcase my fullstack abilities. This is a fullstack project made in Next (TypeScript). It uses PostgreSQL as its' backend with Prisma as its' ORM. Here, I demonstrated my deployment abilities too by setting up a reverse proxy using Caddy and running it from my VPS.",
    visitUrl: "https://dailywins.marchotridyo.com",
    repoUrl: "https://github.com/acomarcho/dailywins",
  },
  {
    id: 5,
    type: "Personal Project",
    title: "KanaPal",
    imageUrl: "/portfolio/kanapal.png",
    description:
      "KanaPal is a project I made to help me when I was learning Japanese. It's made in Next (TypeScript), and all the logic is done in the frontend. This project allows people to learn hiragana and katakana easily.",
    visitUrl: "https://kanapal.marchotridyo.com",
    repoUrl: "https://github.com/acomarcho/kanapal",
  },
];

export default function Portfolio() {
  return (
    <div className="wrapper min-h-[calc(100vh-4rem)]">
      <Fade>
        <div className="relative w-fit">
          <div className="absolute w-full bg-primary h-[0.5rem] bottom-[0.5rem]" />
          <h1 className="relative heading font-bold">{"Marcho's Portfolio"}</h1>
        </div>
        <p className="paragraph italic">
          Crafting digital experiences from front-end to back-end.
        </p>
        <div className="flex flex-col gap-[1rem] mt-[1rem]">
          {portfolios.map((portfolio) => {
            return (
              <Fade key={portfolio.id}>
                <div className="flex flex-col gap-[0.5rem] p-[1rem] bg-lightgray drop-shadow-lg">
                  <div className="bg-secondary px-[1rem] py-[0.5rem] w-fit">
                    <p className="paragraph">{portfolio.type}</p>
                  </div>
                  <h1 className="heading font-bold">{portfolio.title}</h1>
                  <Image
                    src={portfolio.imageUrl}
                    width={1200}
                    height={900}
                    alt={portfolio.title}
                  />
                  <p className="paragraph !max-w-full">
                    {portfolio.description}
                  </p>
                  <Link
                    href={portfolio.visitUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="bg-primary paragraph !max-w-full px-[1rem] py-[0.5rem] text-center transition-all hover:drop-shadow-lg"
                  >
                    See live website
                  </Link>
                  <Link
                    href={portfolio.repoUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="border-primary border-2 paragraph !max-w-full px-[1rem] py-[0.5rem] text-center transition-all hover:drop-shadow-lg"
                  >
                    See source code
                  </Link>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
