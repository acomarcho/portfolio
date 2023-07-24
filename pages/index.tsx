import Header from "@/components/home/header";
import Skills from "@/components/home/skills";
import FeaturedPortfolio from "@/components/home/featured-portfolio";
import WorkExperience from "@/components/home/work-experience";
import Achievements from "@/components/home/achievements";
import Education from "@/components/home/education";
import ContactInformation from "@/components/home/contact-information";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <FeaturedPortfolio />
      <WorkExperience />
      <Achievements />
      <Education />
      <ContactInformation />
    </>
  );
}
