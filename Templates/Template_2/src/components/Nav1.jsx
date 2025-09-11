import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squeeze as Hamburger } from 'hamburger-react';

const Navbar = ({ 
  logo = "ANSH DHANANI", 
  menuItems = ['WORK', 'ABOUT', 'SERVICES', 'CONTACT'],
  onMenuClick = () => {},
  isDark = false,
  toggleTheme = () => {}
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    onMenuClick(item);
    setIsMenuOpen(false);
  };

  // Animation variants for framer motion
  const menuVariants = {
    open: {
      clipPath: `circle(150% at ${isMobile ? 'calc(100% - 30px)' : 'calc(100% - 70px)'} 0)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(0% at calc(100% - 70px) 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] flex items-center justify-between px-4 md:px-8 z-50">
        
        <div className="w-12"></div>

        {/* Desktop Nav Items */}
        <div id="nav" className="hidden md:flex gap-8 p-2 bg-[var(--color-bg-tertiary)]">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              className="navbar-items text-center font-semibold text-[var(--color-text)] hover:text-blue-500 cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Logo */}
        <motion.h1 
          className="text-[var(--color-text)] text-lg md:text-2xl font-bold tracking-wider whitespace-nowrap flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {logo}
        </motion.h1>
        
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className={`w-14 h-8 flex items-center p-1 rounded-full transition-colors duration-300 mr-4 ${
            isDark ? "bg-slate-700" : "bg-gray-300"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm ${
              isDark ? "translate-x-6" : "translate-x-0"
            }`}
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {isDark ? "🌙" : "☀️"}
          </motion.span>
        </motion.button>

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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center overflow-hidden z-30"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="absolute inset-0 bg-[var(--color-bg-tertiary)]"></div>
            
            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center relative z-10 py-20">
              <div className="max-h-[50vh] overflow-y-auto scrollbar-hide">
                <motion.ul className="list-none text-center">
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="relative overflow-hidden"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                    >
                      <button
                        onClick={() => handleMenuItemClick(item)}
                        className="no-underline text-3xl md:text-6xl font-bold uppercase tracking-wider block py-3 bg-transparent border-none cursor-pointer w-full text-center text-[var(--color-text)] relative z-10 group"
                      >
                        {/* Hover background with directional effect */}
                        <motion.div 
                          className="hover-bg absolute inset-0 bg-[var(--color-primary)] transform scale-y-0 origin-center"
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Text content */}
                        <span className="relative z-10 group-hover:text-[var(--color-text-inverse)] transition-colors duration-300 px-8">
                          {item}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Footer Links */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[var(--color-border)] relative z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {['JOURNAL', 'SHOP', 'LINKEDIN', 'INSTAGRAM'].map((item, index) => (
                <motion.button 
                  key={item}
                  className="text-[var(--color-text)] text-sm font-bold tracking-wider py-6 px-4 border-r border-[var(--color-border)] bg-transparent border-none cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors flex items-center justify-between"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item}</span>
                  <span className="text-lg">
                    {index === 0 ? '📄' : index === 1 ? '👁' : '↗'}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;