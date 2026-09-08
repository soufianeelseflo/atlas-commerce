import Link from "next/link";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/inventory", label: "Inventory" },
];

export function AdminNav() {
  return (
    <aside className="border-b border-white/10 bg-[#101112] text-white lg:min-h-screen lg:border-b-0 lg:border-r">
      <div className="sticky top-0 p-5 sm:p-7">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-white text-sm font-black text-black">
            A
          </span>
          <div>
            <p className="font-black tracking-[-0.03em]">ATLAS OPS</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              demo workspace
            </p>
          </div>
        </Link>

        <nav className="mt-6 flex gap-2 overflow-x-auto lg:mt-10 lg:flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-xl border border-white/8 px-4 py-3 text-sm font-bold text-white/65 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 hidden rounded-2xl border border-white/8 bg-white/[0.04] p-4 lg:block">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/35">
            Safety note
          </p>
          <p className="mt-2 text-xs leading-5 text-white/50">
            Demo mutations are isolated behind route handlers and can be rolled
            back in the UI.
          </p>
        </div>
      </div>
    </aside>
  );
}
