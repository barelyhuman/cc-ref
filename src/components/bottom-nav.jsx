import { MENUS } from "../constants";

export function BottomNav({ active }) {
  return (
    <div className="sm:hidden">
      <nav className="fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-6">
          {MENUS.map(({ href, name, svg }) => {
            return (
              <a
                className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                  active === href
                    ? "text-indigo-400"
                    : "text-zinc-400 hover:text-zinc-50"
                }`}
                href={href}
              >
                {svg}
                <span className="text-xs text-inherit">{name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
