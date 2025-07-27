import { NavLink } from "react-router";

const LINKS = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
];

export default function Header() {
  return (
    <nav>
      <ul className="flex justify-center gap-10 mt-2">
        {LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-700 underline" : ""
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
