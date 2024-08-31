

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Market Analysis</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}