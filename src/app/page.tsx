import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import Features from "../components/Features";
import Programs from "../components/Programs";
import ContactForm from "../components/ContactForm";
import NeedPlanning from "@/components/NeedPlanning";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NeedPlanning />
      <Achievements />
      <Features />
      <Programs />
      <ContactForm />
    </main>
  );
}
