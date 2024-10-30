import { useEffect, useRef } from "react";

function useStarryBackground() {
    const starsRef = useRef([]);

    useEffect(() => {
      const body = document.body;
      function createStar() {
        const star = document.createElement('div');
            star.classList.add('star')

            // Randomize size, position, and animation delay
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = `${Math.random() * 3 + 1}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
      
            body.appendChild(star);
            starsRef.current.push(star);  
        }
        //Create Stars:
        for (let i = 0; i < 200; i++) {
            createStar();
          }
          //Store the stars
          const starsToRemove = [...starsRef.current];
         // Cleanup function to remove stars on unmount
    return () => {
        starsToRemove.forEach((star) => body.removeChild(star));
      };
    }, []);

 return starsRef.current; // Return an array of star elements
}

export default useStarryBackground;