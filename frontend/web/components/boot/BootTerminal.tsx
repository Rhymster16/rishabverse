const bootLines = [
  "Initializing Digital Consciousness...",
  "",
  "Loading Curiosity...............OK",
  "Loading Knowledge...............OK",
  "Loading Lessons................OK",
  "Loading Engineering............OK",
  "Loading Creativity.............OK",
  "Loading Humanity...............OK",
  "",
  "Connecting..."
];

export default function BootTerminal() {
  return (
    <div className="font-mono text-green-400 text-lg space-y-2">
      {bootLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}