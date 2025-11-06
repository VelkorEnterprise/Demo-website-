export default function Navbar() {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">3D PDF Converter</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-accent">
              Home
            </a>
            <a href="#" className="text-white hover:text-accent">
              Services
            </a>
            <a href="#" className="text-white hover:text-accent">
              About
            </a>
            <a href="#" className="text-white hover:text-accent">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
