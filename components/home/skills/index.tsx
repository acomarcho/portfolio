import Image from "next/image";

const feImages = [
  "/images/fe-1.png",
  "/images/fe-2.png",
  "/images/fe-3.png",
  "/images/fe-4.png",
  "/images/fe-5.png",
  "/images/fe-6.png",
];

const beImages = [
  "/images/be-1.png",
  "/images/be-2.png",
  "/images/be-3.png",
  "/images/be-4.png",
  "/images/be-5.png",
  "/images/be-6.png",
];

const designImages = ["/images/design-1.png", "/images/design-2.png"];

const otherImages = [
  "/images/others-1.png",
  "/images/others-2.png",
  "/images/others-3.png",
];

export default function Skills() {
  return (
    <div className="decoration-wrapper bg-lightgray">
      <div className="wrapper flex flex-col gap-[0.5rem] lg:gap-[1rem]">
        <h1 className="heading font-bold">Skills</h1>
        <div className="flex flex-col gap-[0.5rem] lg:flex-row lg:gap-[8rem]">
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Frontend</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {feImages.map((image) => (
                <Image key={image} src={image} alt="" width={32} height={32} />
              ))}
            </div>
          </div>
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Backend</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {beImages.map((image) => (
                <Image key={image} src={image} alt="" width={32} height={32} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] lg:flex-row lg:gap-[8rem]">
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Design</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {designImages.map((image) => (
                <Image key={image} src={image} alt="" width={32} height={32} />
              ))}
            </div>
          </div>
          <div className="lg:w-[20rem]">
            <p className="paragraph font-bold">Others</p>
            <div className="flex gap-[0.5rem] mt-[0.25rem]">
              {otherImages.map((image) => (
                <Image key={image} src={image} alt="" width={32} height={32} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
