import { navItems } from "."
import { Link, useLocation } from "react-router-dom"

export const Sidebar = () => {
    const location = useLocation();

    return (
        <nav className="w-20 bg-orange-400 h-screen flex flex-col justify-between py-5 rounded-br-2xl rounded-tr-2xl">
            <h1 className="">Logo</h1>
            <div className="flex flex-col items-center">
                {navItems.map((index) => (
                    <Link to={index.path}>
                        <div
                            className={`my-5 p-3 rounded-full transition-all duration-200 flex items-center justify-center ${location.pathname === index.path ? "bg-rose-500" : "bg-white scale-75"}`}
                        >
                            <img
                                src={index.icon}
                                alt=""
                                className={`transition-all duration-200 w-8 ${location.pathname === index.path ? "scale-75" : "invert"}`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    )
}
