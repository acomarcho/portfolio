import Image from "next/image";
import { Fade } from "react-awesome-reveal";

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
    </>
  );
};

export default function FeaturedPortfolio() {
  return (
    <div className="decoration-wrapper">
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
              href="https://cari-mentor-garudahack.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Check it out
            </a>
            <a
              href="https://github.com/Serpent-MMMF/frontend-app"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              See source code
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}
