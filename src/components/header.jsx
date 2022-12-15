export function Header({ active="" }) {
  const menus = [
    { name: "Exercises", href: "/" },
    { name: "Tips", href: "/tips" },
  ];

  return (
    <div class="h-[100px] w-full flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl text-zinc-500 ml-1 font-bold">CC Reference</div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={
                "text-zinc-600 hover:text-zinc-200 py-1 border-gray-500" +
                (menu.href === active
                  ? " text-zinc-400 font-bold border-b-2"
                  : "")
              }
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
