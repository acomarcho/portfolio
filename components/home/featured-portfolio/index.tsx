import Image from "next/image";

export default function FeaturedPortfolio() {
  return (
    <div className="decoration-wrapper">
      <div className="wrapper">
        <h1 className="heading font-bold">Featured Portfolio</h1>
        <Image
          src="/images/carimentor-hd.png"
          alt="CariMentor"
          width={1280}
          height={809}
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
      </div>
    </div>
  );
}
