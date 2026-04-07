import { navItems } from '../utils/data';

const Navbar = ({ active }) => (
  <nav className="fixed left-1/2 top-4 z-50 w-[96%] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 shadow-glow backdrop-blur-md">
    <div className="flex items-center justify-between gap-4">
      <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-neon-blue">
        OM RAJ
      </a>
      <ul className="hidden items-center gap-4 lg:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-xs uppercase tracking-widest transition ${
                active === item.id ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
