const roles = [
  "Software Engineer",
  "AI Engineer",
  "Full Stack Developer",
  "Data Analyst",
  "Researcher",
  "Leader",
  "Writer",
];

export default function HeroRoles() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {roles.map((role) => (
        <span
          key={role}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur"
        >
          {role}
        </span>
      ))}
    </div>
  );
}