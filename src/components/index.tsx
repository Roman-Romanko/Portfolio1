import HomeIcon from "../assets/Home.png"
import ProfileIcon from "../assets/Profile.png"
import WorkIcon from "../assets/Work.png"
import DocumentIcon from "../assets/Document.png"
import ChatIcon from "../assets/Chat.png"

import { Home } from "../pages/Home"

export const navItems = [
    { label: "Home", icon: HomeIcon, path: "/", element: <Home />},
    { label: "About", icon: ProfileIcon, path: "/about", element: <Home />},
    { label: "Team", icon: WorkIcon, path: "/", element: <Home />},
    { label: "Portfolio", icon: DocumentIcon, path: "/", element: <Home />},
    { label: "Contact", icon: ChatIcon, path: "/", element: <Home />}
]
