import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const DecorationVectors = () => {
  return (
    <>
      <Image
        src="/vectors/portfolio-1.svg"
        alt=""
        width={115}
        height={218}
        className="absolute left-0 top-[4rem]"
      />
      <Image
        src="/vectors/portfolio-2.svg"
        alt=""
        width={63}
        height={138}
        className="absolute right-0 top-[10rem]"
      />
      <Image
        src="/vectors/portfolio-1.svg"
        alt=""
        width={115}
        height={218}
        className="absolute left-0 bottom-[4rem]"
      />
      <Image
        src="/vectors/portfolio-2.svg"
        alt=""
        width={63}
        height={138}
        className="absolute right-0 bottom-[10rem]"
      />
    </>
  );
};

export default function FeaturedPortfolio() {
  return (
    <div className="decoration-wrapper" id="featured-portfolio">
      <DecorationVectors />
      <div className="wrapper">
        <Fade>
          <h1 className="heading font-bold">Featured Portfolio</h1>
          <Image
            src="/images/carimentor-hd.png"
            alt="CariMentor"
            width={1280}
            height={809}
            className="z-10"
            quality={100}
          />
          <h1 className="paragraph font-bold">CariMentor</h1>
          <p className="paragraph italic">
            Runner up in the youth track at GarudaHacks 4.0 Hackathon
          </p>
          <p className="paragraph mt-[1rem]">
            In 36 hours, I managed to develop the frontend of the application
            using Next.JS, using Mantine as the main UI component library and
            Tailwind CSS for custom components.
          </p>
          <div className="flex flex-col mt-[1rem] gap-[0.5rem] lg:flex-row lg:gap-[1rem]">
            <a
              href="https://carimentor.marchotridyo.com/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Check it out
            </a>
            <a
              href="https://github.com/acomarcho/carimentor"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              See source code
            </a>
          </div>
          <Image
            src="/portfolio/kodekodeanid.png"
            alt="kodekodean.id"
            width={1280}
            height={800}
            className="z-10 mt-[1rem]"
            quality={100}
          />
          <h1 className="paragraph font-bold">kodekodean.id</h1>
          <p className="paragraph italic">
            Personal, solo project to demonstrate my design, product, and
            fullstack skills.
          </p>
          <p className="paragraph mt-[1rem]">
            This is a fullstack application targeted for new college students at
            ITB prepare for one of their courses, Computational Thinking. It
            uses Next as a fullstack framework and uses technologies like
            PostgreSQL, Prisma, Redis, as well as features like reading and
            rendering markdown files on the browser. I not only made the site,
            but also did the design and made all the content by myself.
          </p>
          <div className="flex flex-col mt-[1rem] gap-[0.5rem] lg:flex-row lg:gap-[1rem]">
            <a
              href="https://kodekodean.my.id/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Check it out
            </a>
            <a
              href="https://github.com/acomarcho/kodekodean-v2"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              See source code
            </a>
          </div>
          <p className="paragraph mt-[1rem]">
            Check out all my portfolio{" "}
            <Link href="/portfolio" className="text-secondary underline">
              here!
            </Link>
          </p>
        </Fade>
      </div>
    </div>
  );
}
