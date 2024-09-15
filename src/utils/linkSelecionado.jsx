// utils/setActiveLink.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useActiveLink() {
  const location = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === location.pathname) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [location]);
}