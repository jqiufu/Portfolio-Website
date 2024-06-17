import ProjectSection from "@/components/project-section";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/nav-bar";
import EmailSection from "@/components/email-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-12 min-h-screen px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
