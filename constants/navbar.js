import {
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaFolderOpen,
  FaUser,
} from "react-icons/fa";

export const NAVBAR_ITEMS = [
  { icon: <FaUser />, label: "About", href: "/" },
  { icon: <FaCogs />, label: "Skills", href: "/skills" },
  {
    icon: <FaBriefcase />,
    label: "Experience",
    href: "/experience",
  },
  {
    icon: <FaFolderOpen />,
    label: "Projects",
    href: "/projects",
  },
  { icon: <FaEnvelope />, label: "Contact", href: "/contact" },
];
