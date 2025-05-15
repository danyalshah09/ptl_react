import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * NavPreload Component
 * 
 * This component uses the Intersection Observer API to preload
 * resources for pages that the user is likely to navigate to next.
 * 
 * Usage:
 * Import this component into your App.jsx file and place it after the Router component.
 */
const NavPreload = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Define relationship between current page and likely next pages
    const pageRelationships = {
      '/': ['/home', '/rooms', '/about'],
      '/home': ['/rooms', '/amenities', '/gallery'],
      '/rooms': ['/masterbed', '/twinbed', '/triplebed'],
      '/amenities': ['/dine', '/gallery'],
      '/gallery': ['/contact', '/location'],
      // Add more relationships as needed
    };
    
    // Get the current path
    const currentPath = location.pathname;
    
    // Find pages to preload
    const pagesToPreload = pageRelationships[currentPath] || [];
    
    // Preload components for likely next pages
    if (pagesToPreload.length > 0) {
      const preloadModule = (path) => {
        try {
          switch (path) {
            case '/home':
              import('../pages/Home');
              break;
            case '/rooms':
              import('../pages/Rooms');
              break;
            case '/amenities':
              import('../pages/Amenities');
              break;
            case '/gallery':
              import('../pages/Gallery');
              break;
            case '/masterbed':
              import('../pages/Masterbed');
              break;
            case '/twinbed':
              import('../pages/Twinbed');
              break;
            case '/triplebed':
              import('../pages/Triplebed');
              break;
            case '/about':
              import('../pages/About');
              break;
            case '/dine':
              import('../pages/Dine');
              break;
            case '/contact':
              import('../pages/Contact');
              break;
            case '/location':
              import('../pages/Location');
              break;
            default:
              // Do nothing for unknown paths
              break;
          }
        } catch (err) {
          // Silently fail - preloading is just an optimization
          console.debug(`Failed to preload ${path}`, err);
        }
      };
      
      // Use requestIdleCallback to load during browser idle time
      if ('requestIdleCallback' in window) {
        // Preload after a short delay to prioritize current page rendering
        setTimeout(() => {
          pagesToPreload.forEach(path => {
            window.requestIdleCallback(() => preloadModule(path), { timeout: 2000 });
          });
        }, 1000);
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          pagesToPreload.forEach(path => {
            setTimeout(() => preloadModule(path), 2000);
          });
        }, 1000);
      }
    }
  }, [location.pathname]);
  
  return null; // This component doesn't render anything
};

export default NavPreload; 