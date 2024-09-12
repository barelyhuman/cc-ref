import { MENUS } from '../constants'

export function Header({ active = '' }) {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe">
      <header className="border-b px-safe border-zinc-800 bg-zinc-900">
        <div className="mx-auto flex h-20 max-w-screen-md items-center justify-between px-6">
          <a href="/">
            <h1 className="text-zinc-400 font-medium">CC Reference</h1>
          </a>
          <nav className="flex items-center space-x-6">
            <div className="hidden sm:block">
              <div className="flex items-center space-x-6">
                {MENUS.map(menu => (
                  <div>
                    <a
                      href={menu.href}
                      class={
                        'text-sm' +
                        (menu.href === active
                          ? ' text-indigo-400'
                          : ' text-zinc-400 hover:text-zinc-50')
                      }
                    >
                      {menu.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
