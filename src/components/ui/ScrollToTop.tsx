import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, just scroll to the very top of the page
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash (e.g., #contact), handle the scroll carefully
    else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // We add a slight delay to ensure lazy-loaded components or 
        // layout shifts don't disrupt the final scroll position
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Fallback for safety
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}
