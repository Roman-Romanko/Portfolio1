import { navItems } from "."

export const Sidebar = () => {
    return (
        <aside className="w-20 bg-orange-400 h-full flex flex-col justify-between py-5">
            <h1 className="">Logo</h1>
            <div className="flex flex-col items-center">
                {navItems.map((index) => (
                    <img key={index.id} src={index.icon} className="my-5" alt="" />
                ))}
            </div>
        </aside>
    )
}
