import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BlogSection } from "@/components/BlogSection";
import { StudyAbroadForm } from "@/components/StudyAbroadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStartedClick = () => {
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showForm) {
    return (
      <>
        <Navbar onGetStartedClick={handleGetStartedClick} />
        <div className="pt-20">
          <StudyAbroadForm onBack={handleBackToHome} />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar onGetStartedClick={handleGetStartedClick} />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Index;
