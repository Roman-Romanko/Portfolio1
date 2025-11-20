import { navItems } from ".";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // when 60% of the section is visible — it is active
      }
    );

    // subscribe to all sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.label.toLowerCase());
      if (section) observer.observe(section);
    });

    // unsubscribe on unmount
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id); // update active item
    }
  };

  return (
    <nav className="max-lg:hidden w-20 fixed bg-orange-400 h-screen flex flex-col justify-between py-5 rounded-br-2xl rounded-tr-2xl">
      <h1>Logo</h1>
      <div className="flex flex-col items-center">
        {navItems.map((item) => {
          const id = item.label.toLowerCase();
          const isActive = active === id;

          return (
            <div
              key={id}
              onClick={() => scrollToSection(id)}
              className={`my-5 p-3 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isActive ? "bg-rose-500 scale-100" : "bg-white scale-75"
              }`}
            >
              <img
                src={item.icon}
                alt=""
                className={`transition-all duration-200 w-8 ${
                  isActive ? "scale-90" : "invert"
                }`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};
