import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/subtrantlogo.png"
                alt="Subtrant Logo"
                className="h-10 w-auto"
              />
            </Link>

            <span className="ml-3 font-semibold text-xl">
              Subtrant Softworks
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
