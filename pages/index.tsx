import Header from "@/components/home/header";
import Skills from "@/components/home/skills";
import FeaturedPortfolio from "@/components/home/featured-portfolio";
import WorkExperience from "@/components/home/work-experience";
import Achievements from "@/components/home/achievements";
import Education from "@/components/home/education";
import ContactInformation from "@/components/home/contact-information";
import Footer from "@/components/home/footer";
import { Fade } from "react-awesome-reveal";
import ScrollToTop from "@/components/home/scroll-to-top";
import Navbar, { NavMargin } from "@/components/common/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavMargin />
      <Fade>
        <Header />
        <Skills />
        <FeaturedPortfolio />
        <WorkExperience />
        <Achievements />
        <Education />
        <ContactInformation />
        <Footer />
      </Fade>
      <ScrollToTop />
    </>
  );
}
