import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function AuthenticatedLayout({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
            </Link>
          </div>

          {/* Dropdown Toggle Button for Small Screens */}
          <div className="sm:hidden">
            <button
              onClick={() =>
                setShowingNavigationDropdown((prevState) => !prevState)
              }
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6 transform transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: showingNavigationDropdown ? "rotate(180deg)" : "" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button> 
          </div>

          <div className="hidden sm:flex space-x-4">
            <NavLink
              href={route("dashboard")}
              active={route().current("dashboard")}
            >
              Dashboard
            </NavLink>
            <NavLink
              href={route("project.index")}
              active={route().current("project.index")}
            >
              Projects
            </NavLink>
            <NavLink
              href={route("task.index")}
              active={route().current("task.index")}
            >
              All Tasks
            </NavLink>
            <NavLink
              href={route("user.index")}
              active={route().current("user.index")}
            >
              Users
            </NavLink>
            <NavLink
              href={route("task.myTasks")}
              active={route().current("task.myTasks")}
            >
              My Tasks
            </NavLink>
          </div>

          {/* Profile and Logout Dropdown */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="relative">
              <Dropdown>
                <Dropdown.Trigger>
                  <button
                    type="button"
                    className="flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >
                    {user.name}
                    <svg
                      className="ml-2 -mr-0.5 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>
                    Profile
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("logout")}
                    method="post"
                    as="button"
                  >
                    Log Out
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* Responsive Navigation Dropdown */}
        {showingNavigationDropdown && (
          <div className="sm:hidden px-2 pt-2 pb-3">
            <ResponsiveNavLink
              href={route("dashboard")}
              active={route().current("dashboard")}
            >
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("project.index")}
              active={route().current("project.index")}
            >
              Projects
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("task.index")}
              active={route().current("task.index")}
            >
              All Tasks
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("user.index")}
              active={route().current("user.index")}
            >
              Users
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("task.myTasks")}
              active={route().current("task.myTasks")}
            >
              My Tasks
            </ResponsiveNavLink>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                {user.name}
              </div>
              <div className="font-medium text-sm text-gray-500">
                {user.email}
              </div>
              <div className="mt-2">
                <ResponsiveNavLink href={route("profile.edit")}>
                  Profile
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  method="post"
                  href={route("logout")}
                  as="button"
                >
                  Log Out
                </ResponsiveNavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

      {header && (
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
