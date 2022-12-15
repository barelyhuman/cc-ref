export function PressableItem({ href, title }) {
  return (
    <a className="active:bg-zinc-800" href={href}>
      <div className="border-b border-zinc-800 px-4 py-6">
        <p className="font-title text-lg text-zinc-400">{title}</p>
      </div>
    </a>
  );
}
