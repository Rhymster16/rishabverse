const menu = [
  "Begin My Journey",
  "Build With Me",
  "Talk With Me",
  "Explore My Ideas",
  "Read My Thoughts",
  "See My Vision",
  "Leave With My Story",
];

export default function MissionMenu() {
  return (
    <div className="mt-16 space-y-5">

      {menu.map((item) => (
        <button
          key={item}
          className="block w-full rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-left text-xl transition hover:border-blue-500 hover:bg-blue-500/10"
        >
          {item}
        </button>
      ))}

    </div>
  );
}