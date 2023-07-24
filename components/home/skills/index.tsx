import Image from "next/image";
import { Tooltip } from "@mantine/core";

const feImages = [
  {
    label: "React",
    src: "/images/fe-1.png",
  },
  {
    label: "Next",
    src: "/images/fe-2.png",
  },
  {
    label: "Tailwind",
    src: "/images/fe-3.png",
  },
  {
    label: "Mantine",
    src: "/images/fe-4.png",
  },
  {
    label: "Ant Design",
    src: "/images/fe-5.png",
  },
  {
    label: "SASS",
    src: "/images/fe-6.png",
  },
];

const beImages = [
  {
    label: "Express",
    src: "/images/be-1.png",
  },
  {
    label: "PostgreSQL",
    src: "/images/be-2.png",
  },
  {
    label: "Go",
    src: "/images/be-3.png",
  },
  {
    label: "MongoDB",
    src: "/images/be-4.png",
  },
  {
    label: "Prisma",
    src: "/images/be-5.png",
  },
  {
    label: "MySQL",
    src: "/images/be-6.png",
  },
];

const designImages = [
  {
    label: "Figma",
    src: "/images/design-1.png",
  },
  {
    label: "Adobe Photoshop",
    src: "/images/design-2.png",
  },
];

const otherImages = [
  {
    label: "Docker",
    src: "/images/others-1.png",
  },
  {
    label: "Google Cloud",
    src: "/images/others-2.png",
  },
  {
    label: "Firebase",
    src: "/images/others-3.png",
  },
];

const DecorationVectors = () => {
  return (
    <>
      <Image
        src="/vectors/skills-1.svg"
        alt=""
        width={25}
        height={82}
        className="absolute right-0 top-[3rem]"
      />
      <Image
        src="/vectors/skills-2.svg"
        alt=""
        width={55}
        height={111}
        className="absolute left-0 bottom-[3rem]"
      />
    </>
  );
};

export default function Skills() {
  return (
    <div className="decoration-wrapper bg-lightgray">
      <DecorationVectors />
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <h1 className="heading font-bold">Skills</h1>
        <div className="flex flex-col gap-[0.5rem] lg:flex-row lg:gap-[8rem]">
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Frontend</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {feImages.map((image) => (
                <Tooltip key={image.label} label={image.label}>
                  <Image
                    src={image.src}
                    alt={image.label}
                    width={32}
                    height={32}
                    className="z-10"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Backend</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {beImages.map((image) => (
                <Tooltip key={image.label} label={image.label} className="z-10">
                  <Image
                    src={image.src}
                    alt={image.label}
                    width={32}
                    height={32}
                    className="z-10"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] lg:flex-row lg:gap-[8rem]">
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Design</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {designImages.map((image) => (
                <Tooltip key={image.label} label={image.label}>
                  <Image
                    src={image.src}
                    alt={image.label}
                    width={32}
                    height={32}
                    className="z-10"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Others</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {otherImages.map((image) => (
                <Tooltip key={image.label} label={image.label}>
                  <Image
                    src={image.src}
                    alt={image.label}
                    width={32}
                    height={32}
                    className="z-10"
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
