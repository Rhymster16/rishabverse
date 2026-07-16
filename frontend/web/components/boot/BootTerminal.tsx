interface BootTerminalProps {
  visibleLines: number;
}

const bootLines = [
  "Initializing RishabVerse OS...",
  "",
  "Loading Memories.................OK",
  "Loading Curiosity...............OK",
  "Loading Engineering............OK",
  "Loading Leadership..............OK",
  "Loading Creativity..............OK",
  "Loading Research................OK",
  "Loading Humanity................OK",
  "",
  "✓ Digital Presence Ready",
];

export default function BootTerminal({
  visibleLines,
}: BootTerminalProps) {
  return (
    <div className="font-mono text-green-400 text-lg space-y-2">
      {bootLines.slice(0, visibleLines).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}