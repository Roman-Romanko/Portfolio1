import HomeIcon from "../assets/Home.png"
import ProfileIcon from "../assets/Profile.png"
import WorkIcon from "../assets/Work.png"
import DocumentIcon from "../assets/Document.png"
import ChatIcon from "../assets/Chat.png"
import { Home, Github, Linkedin, Twitter } from "lucide-react";

import { HomePage } from "../pages/Home"

export const navItems = [
    { label: "Home", icon: HomeIcon, path: "/", element: <HomePage /> },
    { label: "About", icon: ProfileIcon, path: "/about", element: <HomePage /> },
    { label: "Team", icon: WorkIcon, path: "/", element: <HomePage /> },
    { label: "Portfolio", icon: DocumentIcon, path: "/", element: <HomePage /> },
    { label: "Contact", icon: ChatIcon, path: "/", element: <HomePage /> }
]

export const SocialItems = [
  { icon: Github, color: "bg-gray-800 hover:bg-gray-700" },
  { icon: Linkedin, color: "bg-blue-600 hover:bg-blue-500" },
  { icon: Twitter, color: "bg-sky-500 hover:bg-sky-400" },
  { icon: Home, color: "bg-purple-500 hover:bg-purple-400" },
];
