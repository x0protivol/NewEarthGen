"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div id="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#f7f8eb",
            },
          },
          style: {
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
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
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#132a13",
            },
            links: {
              color: "#132a13",
              distance: 120,
              enable: true,
              opacity: 0.3,
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
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 50,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 30,
                  },
                  links: {
                    distance: 100,
                    opacity: 0.2,
                  },
                  move: {
                    speed: 1,
                  },
                },
                interactivity: {
                  modes: {
                    repulse: {
                      distance: 80,
                    },
                  },
                },
              },
            },
            {
              maxWidth: 480,
              options: {
                particles: {
                  number: {
                    value: 20,
                  },
                  links: {
                    distance: 80,
                    opacity: 0.15,
                  },
                  move: {
                    speed: 0.8,
                  },
                },
                interactivity: {
                  modes: {
                    repulse: {
                      distance: 60,
                    },
                  },
                },
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default ParticlesBackground;