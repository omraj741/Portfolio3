import { navItems } from '../utils/data';

const Navbar = ({ active, toggleTheme, theme }) => (
  <nav className="fixed left-1/2 top-4 z-50 w-[95%] max-w-4xl -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 shadow-glow backdrop-blur-md">
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-semibold tracking-widest text-neon-blue">PORTFOLIO.3D</span>
      <ul className="hidden items-center gap-4 md:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm transition ${
                active === item.id ? 'text-neon-blue' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-100"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  </nav>
);

export default Navbar;
