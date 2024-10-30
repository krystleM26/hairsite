import React, { useEffect} from 'react';
function GlitterBackground() {
    useEffect(() => {
        const glitterContainer = document.querySelector('.glitter-background')
        function createGlitter() {
            const glitter = document.createElement('div');
            glitter.classList.add('glitter');

            glitter.style.left =   `${Math.random() * 100}%`;
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.left = `${Math.random() * 2}s`;

            glitterContainer.appendChild(glitter)
        }
        for (let i = 0; i < 100; i++) {
            createGlitter()
        }
    }, []);

    return (
        <div className="glitter-background" style={{
            background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
            backgroundSize: '400px 100%',
            animation: 'shimmer 2s infinite',
            overflow: 'hidden',
          }}></div>


    )
}

export default GlitterBackground;