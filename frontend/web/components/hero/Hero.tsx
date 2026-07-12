import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroRoles from "./HeroRoles";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <HeroContent />
        <HeroRoles />
        <HeroActions />
      </div>
    </section>
  );
}