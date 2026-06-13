import { navItems } from '../utils/data';

const Navbar = ({ active }) => (
  <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-full border border-white/15 bg-black/55 px-4 py-3 shadow-cinematic backdrop-blur-2xl">
    <div className="flex items-center justify-between gap-4">
      <a href="#hero" className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-black transition hover:scale-105">
        OM
      </a>
      <ul className="hidden items-center gap-2 lg:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest transition duration-300 hover:bg-white/10 hover:text-white ${
                active === item.id ? 'bg-white/10 text-lime-200' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="rounded-full border border-white/30 px-4 py-2 text-xs font-black uppercase tracking-widest text-white transition hover:scale-105 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
        Email Me
      </a>
    </div>
  </nav>
);

export default Navbar;
