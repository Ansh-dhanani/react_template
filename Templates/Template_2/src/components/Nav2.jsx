import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Home");
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);
  const menuItems = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    document.querySelectorAll(".arrow").forEach((arrow) => {
      if (newMenuState) {
        arrow.classList.add("rotate-180");
        document.querySelector(".menu-text").textContent = "CLOSE";
      } else {
        arrow.classList.remove("rotate-180");
        document.querySelector(".menu-text").textContent = "MENU";
      }
    });
  };

  const handleMenuClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);

    // Update button text
    document.querySelector(".menu-text").textContent = "MENU";
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.classList.remove("rotate-180");
    });

    // Scroll to section
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".navbar-container")) {
        setIsMenuOpen(false);
        document.querySelector(".menu-text").textContent = "MENU";
        document.querySelectorAll(".arrow").forEach((arrow) => {
          arrow.classList.remove("rotate-180");
        });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Simple logic: change active item based on scroll position
      if (scrollPosition < windowHeight * 0.5) {
        setActiveItem("Home");
      } else if (scrollPosition < windowHeight * 1.5) {
        setActiveItem("About");
      } else if (scrollPosition < windowHeight * 2.5) {
        setActiveItem("Services");
      } else {
        setActiveItem("Contact");
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar-container">
      {/* Fixed Site Name */}
      <div
        className="fixed top-7 left-5 sm:top-10 sm:left-14 z-[70] text-4xl sm:text-5xl font-montblanc font-bold"
       // style={{ mixBlendMode: "difference", color: "rgb(255, 255, 255)" }}
  
      >
        SITE NAME
      </div>
      <div
        onClick={toggleMenu}
        className="fixed top-4 right-4 sm:top-8 sm:right-14 z-[71] flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 pl-4 sm:pl-6 pr-3 sm:pr-5 bg-[var(--color-primary)] border-b-[1px] border-[var(--color-contrast)] rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="menu-text text-[var(--color-contrast)] font-montblanc text-lg sm:text-2xl mt-1">
          MENU
        </div>
        <div>
          <svg
            className="arrow transition-transform duration-300 sm:w-5 sm:h-5"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className="fixed bg-[var(--color-contrast)] z-[60] rounded-[20px] sm:rounded-[40px] overflow-hidden"
        style={{
          top: isMenuOpen ? "10px" : "30px",
          right: isMenuOpen ? "10px" : "50px",
          width: isMenuOpen ? (isMobile ? "300px" : "450px") : "0px",
          height: isMenuOpen ? (isMobile ? "400px" : "630px") : "0px",
          padding: isMenuOpen ? (isMobile ? "20px" : "32px") : "0px",
          transformOrigin: "top right",
          transition: isMenuOpen
            ? "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "width 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19) 0.15s, height 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19), top 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19), right 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19), padding 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19)",
        }}
      >
        <div className="flex pt-8 sm:pt-14 flex-col items-end text-right">
          {menuItems.map((item, index) => (
            <div
              key={item}
              className="relative flex items-center gap-2 sm:gap-3 text-[var(--color-bg)] font-montblanc text-5xl sm:text-8xl pt-[20px] sm:pt-[20px] cursor-pointer transition-all duration-300 whitespace-nowrap group"
              onClick={() => handleMenuClick(item)}
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(0)",
                opacity: isMenuOpen ? 1 : 0,
                transition: isMenuOpen
                  ? `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                      0.3 + index * 0.1
                    }s, opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                      0.3 + index * 0.1
                    }s`
                  : "opacity 0.2s ease-out",
              }}
            >
              {activeItem === item && (
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              )}
              <span className="hover:opacity-60 transition-opacity duration-300">
                {item}
              </span>
            </div>
          ))}
          <div
            className="text-[var(--color-bg)] pt-4 cursor-pointer hover:opacity-60 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              document.documentElement.classList.toggle("dark");
            }}
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transition: isMenuOpen
                ? `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                    0.3 + menuItems.length * 0.1
                  }s`
                : "opacity 0.2s ease-out",
            }}
          >
            <div>Dark / Light</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
