import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  // Refs for the dropdowns to detect outside clicks
  const desktopResourcesRef = useRef(null);
  const mobileResourcesRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  // Close menus when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [pathname]);

  // Effect to handle clicks outside of the resources dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the desktop dropdown
      const isOutsideDesktop =
        desktopResourcesRef.current &&
        !desktopResourcesRef.current.contains(event.target);

      // Check if the click is outside the mobile dropdown
      const isOutsideMobile =
        mobileResourcesRef.current &&
        !mobileResourcesRef.current.contains(event.target);

      // If the click is outside both (or the relevant one), close the dropdown
      if (isOutsideDesktop && isOutsideMobile) {
        setIsResourcesOpen(false);
      } else if (isOutsideDesktop && !mobileResourcesRef.current) {
        // Handle case where only desktop is visible
        setIsResourcesOpen(false);
      } else if (isOutsideMobile && !desktopResourcesRef.current) {
        // Handle case where only mobile is visible
        setIsResourcesOpen(false);
      }
    };

    if (isResourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResourcesOpen]);

  // Define active link styles
  const getLinkClass = (href) => {
    const isActive =
      pathname === href ||
      (href === "/resources" && pathname.startsWith("/resources"));
    return `text-base font-medium ${
      isActive
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-text-secondary)]"
    } hover:text-[#2a4b8c] transition-colors`;
  };

  const getDropdownLinkClass = (href) => {
    return `block px-4 py-2 text-base ${
      pathname === href
        ? "text-[var(--color-primary)] font-semibold"
        : "text-[var(--color-text-secondary)]"
    } hover:bg-gray-100 hover:text-[#2a4b8c] transition-colors`;
  };

  return (
    <nav className="bg-[var(--color-background)] shadow-sm w-full sticky top-0 z-30">
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
          <div className="hidden md:flex items-center space-x-8">
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
            <div className="relative" ref={desktopResourcesRef}>
              <button
                onClick={toggleResources}
                className={`flex items-center ${getLinkClass("/resources")}`}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <svg
                  className={`ml-1 h-5 w-5 transform transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                <div className="absolute mt-2 w-48 rounded-md bg-[var(--color-background)] py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/resources/materials"
                    className={getDropdownLinkClass("/resources/materials")}
                  >
                    Materials
                  </Link>
                  <Link
                    href="/resources/videos"
                    className={getDropdownLinkClass("/resources/videos")}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/resources/blog"
                    className={getDropdownLinkClass("/resources/blog")}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-base font-medium">
              <span className="rounded-[15px] bg-[var(--color-primary)] px-4 py-2.5 text-[#f8f8fa] hover:bg-[#2a4b8c] transition-colors">
                Contact Me
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-primary)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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

      {/* --- Mobile Menu --- */}
      {/* This now renders as an overlay instead of pushing content down */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-[var(--color-background)] shadow-lg md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2 ${getLinkClass("/")}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block rounded-md px-3 py-2 ${getLinkClass("/about")}`}
            >
              About
            </Link>
            <Link
              href="/mentorship"
              className={`block rounded-md px-3 py-2 ${getLinkClass(
                "/mentorship"
              )}`}
            >
              Mentorship
            </Link>

            {/* Mobile Resources Accordion */}
            <div ref={mobileResourcesRef}>
              <button
                onClick={toggleResources}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 ${getLinkClass(
                  "/resources"
                )}`}
                aria-expanded={isResourcesOpen}
              >
                Resources
                <svg
                  className={`ml-1 h-5 w-5 transform transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                <div className="mt-1 space-y-1 pl-7">
                  <Link
                    href="/resources/materials"
                    className={`block rounded-md px-3 py-2 ${getDropdownLinkClass(
                      "/resources/materials"
                    )}`}
                  >
                    Materials
                  </Link>
                  <Link
                    href="/resources/videos"
                    className={`block rounded-md px-3 py-2 ${getDropdownLinkClass(
                      "/resources/videos"
                    )}`}
                  >
                    Videos
                  </Link>
                  <Link
                    href="/resources/blog"
                    className={`block rounded-md px-3 py-2 ${getDropdownLinkClass(
                      "/resources/blog"
                    )}`}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* Mobile Contact Button */}
          <div className="border-t border-gray-200 px-5 py-4">
            <Link
              href="/contact"
              className="block w-full rounded-[15px] bg-[var(--color-primary)] px-4 py-2.5 text-center font-medium text-[#f8f8fa] hover:bg-[#2a4b8c] transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
