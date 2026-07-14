import BootTerminal from "./BootTerminal";

export default function BootSequence() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <BootTerminal />
    </section>
  );
}