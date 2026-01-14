import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { headerRoutes } from "./routes";

import kodex from "@/assets/kodex-logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={kodex} alt="kodex" className="w-40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {headerRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-600 dark:text-slate-400"
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 border border-slate-200 dark:border-slate-700 rounded-md transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors shadow-sm cursor-pointer">
            Enroll
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-600 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-4">
            {headerRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-orange-500 py-2 border-b border-gray-50 ${
                    isActive
                      ? "text-orange-500"
                      : "text-slate-600 dark:text-slate-400"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-sm cursor-pointer">
              Enroll
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
