import { useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = ({ 
  logo = "ANSH DHANANI", 
  menuItems = ['WORK', 'ABOUT', 'SERVICES', 'CONTACT'],
  onMenuClick = () => {},
  isDark = false,
  toggleTheme = () => {} // Added props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    onMenuClick(item);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-10 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] flex items-center justify-between px-4 z-50">
        
        <div className="w-12"></div>

        {/*Nav-items*/}
        <div id="nav" className="hidden md:grid grid-cols-4 gap-8 p-2 bg-[var(--color-bg-tertiary)]">
          {menuItems.map((item) => (
            <div
              key={item}
              className="navbar-items text-center font-semibold text-[var(--color-text)] hover:text-blue-500 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
        
        {/* Logo */}
        <h1 className="text-[var(--color-text)] justify-center ml-[55px] pl-4 text-lg md:text-2xl font-bold tracking-wider whitespace-nowrap flex-shrink-0">
          {logo}
        </h1>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme} // Use the passed toggleTheme function
          aria-label="Toggle Dark Mode"
          className={`w-14 h-8 fixed flex items-center p-1 rounded-full transition-colors duration-300 mr-4 ${
            isDark ? "bg-blue-700" : "bg-gray-300"
          }`}
        >
          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-6" : "translate-x-0"
            } flex items-center justify-center text-sm`}
          >
          </span>
        </button>

        {/* Hamburger Button */}
        <div className="w-28 h-20 flex justify-center items-center md:hidden">
          <Hamburger
            toggled={isMenuOpen}
            toggle={toggleMenu}
            size={27}
            color="var(--color-text)"
            duration={0.8}
            easing="ease-in-out"
            rounded
            direction="right"
            distance={10}
            label="Toggle Menu"
            className="z-50"
          />
        </div>
      </header>
      
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center overflow-hidden ${isMenuOpen ? 'z-30 pointer-events-auto' : 'z-30 pointer-events-none'}`}>
        <div 
          className="relative z-10 w-full h-full flex flex-col"
          style={{
            clipPath: isMenuOpen ? 'circle(150% at top right)' : 'circle(0% at calc(100% - 70px) 0) ',    
            transition: isMenuOpen ? 'clip-path 2s cubic-bezier(0.83,-0.02,0.00,1.02)' : 'clip-path 0.6s ease-in'
          }}
        >
          {/* Dark background for revealed content */}
          <div className="absolute inset-0 bg-[var(--color-bg-tertiary)]"></div>
        
          {/* Menu Items - Centered with Scroll */}
          <div className="flex-1 flex flex-col justify-center relative z-10 py-20">
            <div className="max-h-[50vh] overflow-y-scroll scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <ul className="list-none text-center">
                {menuItems.map((item, index) => (
                  <li key={item} className="relative overflow-hidden">
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const mouseY = e.clientY;
                        const elementCenter = rect.top + rect.height / 2;
                        const hoverBg = e.currentTarget.querySelector('.hover-bg');
                        
                        if (mouseY < elementCenter) {
                          // Mouse entered from top
                          hoverBg.style.transformOrigin = 'top';
                        } else {
                          // Mouse entered from bottom
                          hoverBg.style.transformOrigin = 'bottom';
                        }
                      }}
                      className={`no-underline text-3xl md:text-6xl font-bold uppercase tracking-wider block py-3 bg-transparent border-none cursor-pointer w-full text-center text-[var(--color-text)] relative z-10 group ${
                        item === 'SHOP' ? 'flex items-center justify-center gap-4' : ''
                      }`}
                    >
                      {/* Hover background that grows from mouse direction */}
                      <div className="hover-bg absolute inset-0 bg-[var(--color-primary)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      
                      {/* Text content */}
                      <span className="relative z-10 group-hover:text-[var(--color-text-inverse)] transition-colors duration-300 px-8">
                        {item}
                        {item === 'SHOP' && <span className="text-3xl ml-4">↗</span>}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-4 gap-0 border-t border-[var(--color-border)] relative z-10">
            <button className="text-[var(--color-text)] text-sm font-bold tracking-wider py-6 px-4 border-r border-[var(--color-border)] bg-transparent border-none cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors flex items-center justify-between">
              <span>JOURNAL</span>
              <span className="text-lg">📄</span>
            </button>
            <button className="text-[var(--color-text)] text-sm font-bold tracking-wider py-6 px-4 border-r border-[var(--color-border)] bg-transparent border-none cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors flex items-center justify-between">
              <span>SHOP</span>
              <span className="text-lg">👁</span>
            </button>
            <button className="text-[var(--color-text)] text-sm font-bold tracking-wider py-6 px-4 border-r border-[var(--color-border)] bg-transparent border-none cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors flex items-center justify-between">
              <span>LINKEDIN</span>
              <span className="text-lg">↗</span>
            </button>
            <button className="text-[var(--color-text)] text-sm font-bold tracking-wider py-6 px-4 bg-transparent border-none cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors flex items-center justify-between">
              <span>INSTAGRAM</span>
              <span className="text-lg">↗</span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;