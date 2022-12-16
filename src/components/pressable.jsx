export function PressableItem({ href, title }) {
  return (
    <a className="" href={href}>
      <div className="active:bg-zinc-800 hover:bg-zinc-800 hover:pointer border-b border-zinc-800 px-4 py-6">
        <p className="font-title text-lg text-zinc-400">{title}</p>
      </div>
    </a>
  );
}
