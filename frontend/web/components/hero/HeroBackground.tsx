export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />

    </div>
  );
}