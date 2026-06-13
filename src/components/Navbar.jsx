import { navItems } from '../utils/data';

const Navbar = ({ active }) => (
  <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-cinematic backdrop-blur-2xl">
    <div className="flex items-center justify-between gap-4">
      <a href="#hero" className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-black transition hover:scale-105">
        OM RAJ
      </a>
      <ul className="hidden items-center gap-2 lg:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition duration-300 hover:bg-white/10 hover:text-white ${
                active === item.id ? 'bg-white/10 text-cyan-200' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="rounded-full border border-cyan-300/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-100 transition hover:scale-105 hover:bg-cyan-300 hover:text-black">
        Hire Me
      </a>
    </div>
  </nav>
);

export default Navbar;
