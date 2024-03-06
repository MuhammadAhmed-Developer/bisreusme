import ResumeCarousel from "@/components/resume-carousel/resume-carousel";
import ReviewSection from "@/components/review-section/review-section";
import HeroSection from "@/components/hero-section/hero-section";
import Companies from "@/components/companies/companies";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import FaqSection from "@/components/faq-section/FaqSection";
import Navbar from "@/components/navbar/navbar";

export default function page() {
  return (
    <>
    <Navbar/>   
    <div className="main">
     <HeroSection />
      <ResumeCarousel />
      <Features/>
      <ReviewSection />
    <Companies/>
    <FaqSection/>
    </div>
    <Footer/>
    </>
  );
}
