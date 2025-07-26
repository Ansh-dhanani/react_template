import { useState } from 'react';

const Navbar = ({ 
  logo = "W*NDERMAKE", 
  menuItems = ['WORK', 'ABOUT', 'SERVICES', 'CONTACT'],
  onMenuClick = () => {}
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
      <header className="fixed top-0 left-0 w-full h-20 bg-black flex items-center justify-between px-5 z-50">
        <div className="w-12"></div>

        {/* Logo */}
        <h1 className="text-white justify-center ml-[55px] text-2xl font-bold tracking-wider">
          {logo}
        </h1>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="w-28 h-20 border-none cursor-pointer flex flex-col justify-center items-center gap-2 transition-all duration-300 rounded-sm"
        >
          <span
            className={`w-14 h-0.5 bg-white transition-all duration-500 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5 h-1' : ''
            }`}
          />
          <span
            className={`w-14 h-0.5 bg-white transition-all duration-500 ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </header>

      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-center items-center pointer-events-none overflow-hidden">
        {/* Menu content - always in position but clipped */}
        <div 
          className={`relative z-10 w-full h-full flex flex-col ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{
            clipPath: isMenuOpen ? 'circle(150% at top right)' : 'circle(0% at top right)',
            transition: isMenuOpen ? 'clip-path 1.3s cubic-bezier(1.00,0.12,0.13,0.96)' : 'clip-path 0.4s ease-in'
          }}
        >
          {/* Dark background for revealed content */}
          <div className="absolute inset-0 bg-black"></div>
        
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 w-12 h-12 bg-transparent border-none cursor-pointer flex justify-center items-center z-20"
          >
            <div className="relative">
              <span className="absolute w-8 h-0.5 bg-white rotate-45"></span>
              <span className="absolute w-8 h-0.5 bg-white -rotate-45"></span>
            </div>
          </button>

          {/* Brand */}
          <div className="text-center mt-5 relative z-10">
            <h1 className="text-white text-xl font-bold tracking-widest">{logo}</h1>
          </div>

          {/* GET STARTED Button */}
          <button className="absolute top-5 left-5 text-white text-sm font-bold tracking-widest bg-transparent border-none cursor-pointer flex items-center gap-2 z-20">
            GET STARTED
            <span className="text-lg">🚀</span>
          </button>

          {/* Menu Items - Centered */}
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <ul className="list-none text-center">
              {menuItems.map((item, index) => (
                <li key={item} className=" relative overflow-hidden">
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
                    className={`no-underline text-6xl font-bold uppercase tracking-wider block py-4 bg-transparent border-none cursor-pointer w-full text-center text-white relative z-10 group ${
                      item === 'SHOP' ? 'flex items-center justify-center gap-4' : ''
                    }`}
                  >
                    {/* Hover background that grows from mouse direction */}
                    <div className="hover-bg absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                    
                    {/* Text content */}
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 px-8">
                      {item}
                      {item === 'SHOP' && <span className="text-4xl ml-4">↗</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-4 gap-0 border-t border-gray-800 relative z-10">
            <button className="text-white text-sm font-bold tracking-wider py-6 px-4 border-r border-gray-800 bg-transparent border-none cursor-pointer hover:bg-white hover:text-black transition-colors flex items-center justify-between">
              <span>JOURNAL</span>
              <span className="text-lg">📄</span>
            </button>
            <button className="text-white text-sm font-bold tracking-wider py-6 px-4 border-r border-gray-800 bg-transparent border-none cursor-pointer hover:bg-white hover:text-black transition-colors flex items-center justify-between">
              <span>SHOP</span>
              <span className="text-lg">👁</span>
            </button>
            <button className="text-white text-sm font-bold tracking-wider py-6 px-4 border-r border-gray-800 bg-transparent border-none cursor-pointer hover:bg-white hover:text-black transition-colors flex items-center justify-between">
              <span>LINKEDIN</span>
              <span className="text-lg">↗</span>
            </button>
            <button className="text-white text-sm font-bold tracking-wider py-6 px-4 bg-transparent border-none cursor-pointer hover:bg-white hover:text-black transition-colors flex items-center justify-between">
              <span>INSTAGRAM</span>
              <span className="text-lg">↗</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;