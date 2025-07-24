import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  // Define active link styles
  const getLinkClass = (href) => {
    const isActive =
      pathname === href ||
      (href === "/resources" && pathname.startsWith("/resources"));
    return `text-base font-medium ${
      isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-text-secondary)"
    } hover:text-[#2a4b8c] transition-colors`;
  };

  return (
    <nav className="bg-[var(--color-background)] shadow-sm w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-extrabold text-[var(--color-primary)]"
            >
              PCB-MENTOR
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link href="/mentorship" className={getLinkClass("/mentorship")}>
              Mentorship
            </Link>
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={toggleResources}
                className={`flex items-center text-base font-medium ${
                  pathname.startsWith("/resources")
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)"
                } hover:text-[#2a4b8c] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-colors`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute mt-2 w-48 rounded-md bg-[var(--color-background)] py-2 shadow-lg z-10">
                  <Link
                    href="/resources/materials"
                    className={`block px-4 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/materials"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                  >
                    Materials
                  </Link>
                  <Link
                    href="/resources/videos"
                    className={`block px-4 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/videos"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/resources/blog"
                    className={`block px-4 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/blog"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className={getLinkClass("/contact")}>
              <span className="rounded-[15px] bg-[var(--color-primary)] px-3.5 py-2 text-base font-medium text-[#f8f8fa] hover:bg-[#2a4b8c] transition-colors">
                Contact Me
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-md p-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/" className={getLinkClass("/")} onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/mentorship"
              className={getLinkClass("/mentorship")}
              onClick={toggleMenu}
            >
              Mentorship
            </Link>
            <div className="relative">
              <button
                onClick={toggleResources}
                className={`flex w-full items-center rounded-md px-3 py-2 text-base font-medium ${
                  pathname.startsWith("/resources")
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)"
                } hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-colors`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="space-y-1 pl-4">
                  <Link
                    href="/resources/materials"
                    className={`block rounded-md px-3 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/materials"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    Materials
                  </Link>
                  <Link
                    href="/resources/videos"
                    className={`block rounded-md px-3 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/videos"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/resources/blog"
                    className={`block rounded-md px-3 py-2 text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors ${
                      pathname === "/resources/blog"
                        ? "text-[var(--color-primary)]"
                        : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={getLinkClass("/contact")}
              onClick={toggleMenu}
            >
              <span className="rounded-md px-3 py-2 text-base font-medium bg-[var(--color-primary)] text-[#f8f8fa] hover:bg-[#2a4b8c] transition-colors">
                Contact Me
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
