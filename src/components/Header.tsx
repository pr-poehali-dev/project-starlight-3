interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold uppercase tracking-widest">ASTON</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm"
          >
            О сервере
          </a>
          <a
            href="#features"
            className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm"
          >
            Особенности
          </a>
          <a
            href="#play"
            className="bg-yellow-500 hover:bg-yellow-400 text-black transition-colors duration-300 uppercase text-sm font-bold px-4 py-2"
          >
            Начать играть
          </a>
        </nav>
      </div>
    </header>
  );
}