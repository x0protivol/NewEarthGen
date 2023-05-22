"use client"; // This is a client component

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
//import particlesConfig from "../config/particles-config";

const ParticlesBackground = () => {
  const particlesInit = useCallback( async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback( async (container) => {
    console.log(container);
    // container.element.style.position = "absolute";
    // container.element.style.zIndex = 0;
  }, []);

  return (
    <div id="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#b5e48c",
          //   },
          // },
          style: {
            position: "absolute",
            height: "80%",
            top: "20%",
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

























// import { useEffect, useRef } from 'react';
// import { tsParticles } from 'tsparticles';

// const Particles = () => {
//   const particlesContainer = useRef(null);

//   useEffect(() => {
//     tsParticles.load('particles-container', {
//       /* Your particle configuration options go here */
//       particles: {
//         number: {
//           value: 80, // Number of particles
//           density: {
//             enable: true,
//             value_area: 800, // Area size where particles will be distributed
//           },
//         },
//         color: {
//           value: '#ffffff', // Particle color
//         },
//         shape: {
//           type: 'circle', // Particle shape (e.g., "circle", "square", "triangle")
//         },
//         size: {
//           value: 5, // Particle size
//         },
//         move: {
//           enable: true,
//           speed: 2, // Particle movement speed
//           direction: 'none', // Particle movement direction (e.g., "none", "top", "top-right")
//           random: false, // Randomize particle movement direction
//           straight: false, // Make particles move in a straight line
//           out_mode: 'out', // Particle out mode (e.g., "out", "bounce")
//         },
//       },
//       interactivity: {
//         events: {
//           onHover: {
//             enable: true,
//             mode: 'repulse', // Interaction mode on hover (e.g., "grab", "repulse")
//           },
//         },
//       },
//       retina_detect: true, // Enable retina display support
//     });
//   }, []);

//   return <div id="particles-container" ref={particlesContainer}></div>;
// };

export default ParticlesBackground;