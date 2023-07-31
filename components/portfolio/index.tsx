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
      "Magnam architecto harum nemo eius. Nesciunt est aut dolores omnis similique nostrum. Ea earum similique iusto quas. Ut ut dicta omnis est qui dicta modi eos totam. Quos ipsa eos vitae perferendis ratione incidunt est.",
    visitUrl: "https://carimentor.marchotridyo.com",
    repoUrl: "https://github.com/acomarcho/carimentor",
  },
  {
    id: 2,
    type: "Freelance Work",
    title: "Tabina Lingkungan",
    imageUrl: "/portfolio/tabinalingkungan.png",
    description:
      "Magnam architecto harum nemo eius. Nesciunt est aut dolores omnis similique nostrum. Ea earum similique iusto quas. Ut ut dicta omnis est qui dicta modi eos totam. Quos ipsa eos vitae perferendis ratione incidunt est.",
    visitUrl: "https://tabinalingkungan.com",
    repoUrl: "https://github.com/acomarcho/tabina-lingkungan",
  },
  {
    id: 3,
    type: "Freelance Work",
    title: "Cody Kit",
    imageUrl: "/portfolio/codykit.png",
    description:
      "Magnam architecto harum nemo eius. Nesciunt est aut dolores omnis similique nostrum. Ea earum similique iusto quas. Ut ut dicta omnis est qui dicta modi eos totam. Quos ipsa eos vitae perferendis ratione incidunt est.",
    visitUrl: "https://codykit.id",
    repoUrl: "https://github.com/acomarcho/codykit-web",
  },
  {
    id: 4,
    type: "Personal Project",
    title: "DailyWins",
    imageUrl: "/portfolio/dailywins.png",
    description:
      "Magnam architecto harum nemo eius. Nesciunt est aut dolores omnis similique nostrum. Ea earum similique iusto quas. Ut ut dicta omnis est qui dicta modi eos totam. Quos ipsa eos vitae perferendis ratione incidunt est.",
    visitUrl: "https://dailywins.marchotridyo.com",
    repoUrl: "https://github.com/acomarcho/dailywins",
  },
  {
    id: 5,
    type: "Personal Project",
    title: "KanaPal",
    imageUrl: "/portfolio/kanapal.png",
    description:
      "Magnam architecto harum nemo eius. Nesciunt est aut dolores omnis similique nostrum. Ea earum similique iusto quas. Ut ut dicta omnis est qui dicta modi eos totam. Quos ipsa eos vitae perferendis ratione incidunt est.",
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
