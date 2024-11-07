import { useState, useEffect, useRef } from 'react';

// const useHeroRunGame = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [isJumping, setIsJumping] = useState(false);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [playerY, setPlayerY] = useState(200);
//   const [obstacleX, setObstacleX] = useState(500);
//   const [velocityY, setVelocityY] = useState(0);
//   const [currentFrame, setCurrentFrame] = useState(0);

//   const gravity = 0.6;
//   const jumpStrength = 15;
//   const groundLevel = 200;
//   const obstacleSpeed = 2;
//   const frameWidth = 16;
//   const frameHeight = 16;
//   const totalFrames = 3;
//   const frameChangeInterval = 200;

//   const gameLoopRef = useRef<number | null>(null);

//   const handleStart = () => {
//     setIsRunning(true);
//     setIsGameOver(false);
//     setPlayerY(groundLevel);
//     setObstacleX(500);
//     setVelocityY(0);
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleJump = () => {
//     if (!isJumping && isRunning) {
//       setIsJumping(true);
//       setVelocityY(jumpStrength);
//     }
//   };

//   useEffect(() => {
//     const frameInterval = setInterval(() => {
//       setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
//     }, frameChangeInterval);

//     return () => clearInterval(frameInterval);
//   }, []);

//   useEffect(() => {
//     if (isRunning && !isGameOver) {
//       const gameLoop = () => {
//         setObstacleX((prevX) => {
//           const newX = prevX - obstacleSpeed;
//           if (newX < -20) return 500;
//           return newX;
//         });

//         if (isJumping) {
//           setVelocityY((prevVY) => prevVY - gravity);
//           setPlayerY((prevY) => {
//             const newY = prevY - velocityY;
//             if (newY >= groundLevel) {
//               setIsJumping(false);
//               setVelocityY(0);
//               return groundLevel;
//             }
//             return newY;
//           });
//         }

//         if (
//           50 < obstacleX + 20 &&
//           50 + frameWidth * 3 > obstacleX &&
//           playerY + frameHeight * 3 >= groundLevel
//         ) {
//           setIsRunning(false);
//           setIsGameOver(true);
//         }

//         gameLoopRef.current = requestAnimationFrame(gameLoop);
//       };

//       gameLoopRef.current = requestAnimationFrame(gameLoop);
//     }

//     return () => {
//       if (gameLoopRef.current) {
//         cancelAnimationFrame(gameLoopRef.current);
//       }
//     };
//   }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver]);

//   return {
//     isRunning,
//     isJumping,
//     isGameOver,
//     playerY,
//     obstacleX,
//     currentFrame,
//     handleStart,
//     handlePause,
//     handleJump,
//     frameWidth,
//     frameHeight,
//   };
// };

// export default useHeroRunGame;

// interface Obstacle {
//   type: string;
//   height: number;
//   color: string;
//   action: string;
// }

// const obstaclesConfig: Obstacle[] = [
//   {
//     type: 'Burocracia da Equipe',
//     height: 80,
//     color: '#FF6347',
//     action: 'Retrospectiva',
//   },
//   {
//     type: 'Mudança de Escopo',
//     height: 80,
//     color: '#4682B4',
//     action: 'Ajustar Prioridades',
//   },
//   {
//     type: 'Refatoração de Código',
//     height: 120,
//     color: '#32CD32',
//     action: 'Revisão de Código',
//   },
// ];

// const useHeroRunGame = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [isJumping, setIsJumping] = useState(false);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [playerY, setPlayerY] = useState(200);
//   const [obstacleX, setObstacleX] = useState(500);
//   const [obstacle, setObstacle] = useState<Obstacle>(obstaclesConfig[0]);
//   const [velocityY, setVelocityY] = useState(0);
//   const [currentFrame, setCurrentFrame] = useState(0);

//   const gravity = 0.6;
//   const jumpStrength = 15;
//   const groundLevel = 200;
//   const obstacleSpeed = 2;
//   const frameWidth = 16;
//   const frameHeight = 16;
//   const totalFrames = 3;
//   const frameChangeInterval = 200;

//   const gameLoopRef = useRef<number | null>(null);

//   const handleStart = () => {
//     setIsRunning(true);
//     setIsGameOver(false);
//     setPlayerY(groundLevel);
//     setObstacleX(500);
//     setVelocityY(0);
//     setObstacle(obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)]);
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleJump = () => {
//     if (!isJumping && isRunning) {
//       setIsJumping(true);
//       setVelocityY(jumpStrength);
//     }
//   };

//   const handleInteraction = () => {
//     if (isRunning && !isJumping) {
//       if (obstacle.type === 'Burocracia da Equipe' || obstacle.type === 'Mudança de Escopo') {
//         setObstacle((prevObstacle) => ({
//           ...prevObstacle,
//           height: prevObstacle.height / 2,
//         }));
//       } else if (obstacle.type === 'Refatoração de Código') {
//         setObstacleX(-20); // Remove o obstáculo da tela
//       }
//       handleJump(); // Executa o salto ao mesmo tempo
//     }
//   };

//   useEffect(() => {
//     const frameInterval = setInterval(() => {
//       setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
//     }, frameChangeInterval);

//     return () => clearInterval(frameInterval);
//   }, []);

//   useEffect(() => {
//     if (isRunning && !isGameOver) {
//       const gameLoop = () => {
//         setObstacleX((prevX) => {
//           const newX = prevX - obstacleSpeed;
//           if (newX < -20) {
//             const randomObstacle = obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)];
//             setObstacle(randomObstacle);
//             return 500; // Reposiciona o obstáculo à direita
//           }
//           return newX;
//         });

//         if (isJumping) {
//           setVelocityY((prevVY) => prevVY - gravity);
//           setPlayerY((prevY) => {
//             const newY = prevY - velocityY;
//             if (newY >= groundLevel) {
//               setIsJumping(false);
//               setVelocityY(0);
//               return groundLevel;
//             }
//             return newY;
//           });
//         }

//         // colisão
//         if (
//           50 < obstacleX + 20 &&
//           50 + frameWidth * 3 > obstacleX &&
//           playerY + frameHeight * 3 >= groundLevel - obstacle.height
//         ) {
//           setIsRunning(false);
//           setIsGameOver(true);
//         }

//         gameLoopRef.current = requestAnimationFrame(gameLoop);
//       };

//       gameLoopRef.current = requestAnimationFrame(gameLoop);
//     }

//     return () => {
//       if (gameLoopRef.current) {
//         cancelAnimationFrame(gameLoopRef.current);
//       }
//     };
//   }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver, obstacle]);

//   return {
//     isRunning,
//     isJumping,
//     isGameOver,
//     playerY,
//     obstacleX,
//     obstacle,
//     currentFrame,
//     handleStart,
//     handlePause,
//     handleJump,
//     handleInteraction,
//     frameWidth,
//     frameHeight,
//   };
// };

// export default useHeroRunGame;
////////////////////////////////////////////

// interface Obstacle {
//   type: string;
//   height: number;
//   color: string;
//   action: string;
// }

// const obstaclesConfig: Obstacle[] = [
//   {
//     type: 'Burocracia da Equipe',
//     height: 80,
//     color: '#FF6347',
//     action: 'Retrospectiva',
//   },
//   {
//     type: 'Mudança de Escopo',
//     height: 80,
//     color: '#4682B4',
//     action: 'Ajustar Prioridades',
//   },
//   {
//     type: 'Refatoração de Código',
//     height: 120,
//     color: '#32CD32',
//     action: 'Revisão de Código',
//   },
// ];

// const useHeroRunGame = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [isJumping, setIsJumping] = useState(false);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [playerY, setPlayerY] = useState(200);
//   const [obstacleX, setObstacleX] = useState(600); // Ajuste inicial maior para iniciar fora da tela
//   const [obstacle, setObstacle] = useState<Obstacle>(obstaclesConfig[0]);
//   const [velocityY, setVelocityY] = useState(0);
//   const [currentFrame, setCurrentFrame] = useState(0);

//   const gravity = 0.6;
//   const jumpStrength = 16;
//   const groundLevel = 200;
//   const obstacleSpeed = 2; // Pode ser ajustado para controlar a dificuldade
//   const frameWidth = 15;
//   const frameHeight = 17;
//   const totalFrames = 3;
//   const frameChangeInterval = 200;

//   const gameLoopRef = useRef<number | null>(null);

//   const handleStart = () => {
//     setIsRunning(true);
//     setIsGameOver(false);
//     setPlayerY(groundLevel);
//     setObstacleX(600); // Reposiciona o obstáculo fora da tela, para começar de novo
//     setVelocityY(0);
//     setObstacle(obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)]);
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleJump = () => {
//     if (!isJumping && isRunning) {
//       setIsJumping(true);
//       setVelocityY(jumpStrength);
//     }
//   };

//   const handleInteraction = () => {
//     if (isRunning && !isJumping) {
//       if (obstacle.type === 'Burocracia da Equipe' || obstacle.type === 'Mudança de Escopo') {
//         setObstacle((prevObstacle) => ({
//           ...prevObstacle,
//           height: prevObstacle.height / 2,
//         }));
//       } else if (obstacle.type === 'Refatoração de Código') {
//         setObstacleX(-20); // Remove o obstáculo da tela
//       }
//       handleJump(); // Executa o salto ao mesmo tempo
//     }
//   };

//   useEffect(() => {
//     const frameInterval = setInterval(() => {
//       setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
//     }, frameChangeInterval);

//     return () => clearInterval(frameInterval);
//   }, []);

//   useEffect(() => {
//     if (isRunning && !isGameOver) {
//       const gameLoop = () => {
//         setObstacleX((prevX) => {
//           const newX = prevX - obstacleSpeed;
//           if (newX < -20) {
//             const randomObstacle = obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)];
//             setObstacle(randomObstacle);
//             return 600; // Reposiciona o obstáculo fora da tela
//           }
//           return newX;
//         });

//         if (isJumping) {
//           setVelocityY((prevVY) => prevVY - gravity);
//           setPlayerY((prevY) => {
//             const newY = prevY - velocityY;
//             if (newY >= groundLevel) {
//               setIsJumping(false);
//               setVelocityY(0);
//               return groundLevel;
//             }
//             return newY;
//           });
//         }

//         if (
//           50 < obstacleX + 20 &&
//           50 + frameWidth * 3 > obstacleX &&
//           playerY + frameHeight * 3 >= groundLevel - obstacle.height
//         ) {
//           setIsRunning(false);
//           setIsGameOver(true);
//         }

//         gameLoopRef.current = requestAnimationFrame(gameLoop);
//       };

//       gameLoopRef.current = requestAnimationFrame(gameLoop);
//     }

//     return () => {
//       if (gameLoopRef.current) {
//         cancelAnimationFrame(gameLoopRef.current);
//       }
//     };
//   }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver, obstacle]);

//   return {
//     isRunning,
//     isJumping,
//     isGameOver,
//     playerY,
//     obstacleX,
//     obstacle,
//     currentFrame,
//     handleStart,
//     handlePause,
//     handleJump,
//     handleInteraction,
//     frameWidth,
//     frameHeight,
//   };
// };

// export default useHeroRunGame;

//////////////////

// interface Obstacle {
//   type: string;
//   height: number;
//   color: string;
//   action: string;
// }

// const obstaclesConfig: Obstacle[] = [
//   {
//     type: 'Burocracia da Equipe',
//     height: 80,
//     color: '#FF6347',
//     action: 'Retrospectiva',
//   },
//   {
//     type: 'Mudança de Escopo',
//     height: 80,
//     color: '#4682B4',
//     action: 'Ajustar Prioridades',
//   },
//   {
//     type: 'Refatoração de Código',
//     height: 120,
//     color: '#32CD32',
//     action: 'Revisão de Código',
//   },
// ];

// const useHeroRunGame = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [isJumping, setIsJumping] = useState(false);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [playerY, setPlayerY] = useState(200);
//   const [obstacleX, setObstacleX] = useState(800); // Aumenta a distância inicial para dar mais tempo
//   const [obstacle, setObstacle] = useState<Obstacle>(obstaclesConfig[0]);
//   const [velocityY, setVelocityY] = useState(0);
//   const [currentFrame, setCurrentFrame] = useState(0);

//   const gravity = 0.6;
//   const jumpStrength = 16;
//   const groundLevel = 200;
//   const obstacleSpeed = 2; // Velocidade controlada para ajustar dificuldade
//   const frameWidth = 15;
//   const frameHeight = 17;
//   const totalFrames = 3;
//   const frameChangeInterval = 200;

//   const gameLoopRef = useRef<number | null>(null);

//   const handleStart = () => {
//     setIsRunning(true);
//     setIsGameOver(false);
//     setPlayerY(groundLevel);
//     setObstacleX(800); // Posição inicial fora da tela
//     setVelocityY(0);
//     setObstacle(obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)]);
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleJump = () => {
//     if (!isJumping && isRunning) {
//       setIsJumping(true);
//       setVelocityY(jumpStrength);
//     }
//   };

//   const handleInteraction = () => {
//     if (isRunning && !isJumping) {
//       if (obstacle.type === 'Burocracia da Equipe' || obstacle.type === 'Mudança de Escopo') {
//         setObstacle((prevObstacle) => ({
//           ...prevObstacle,
//           height: prevObstacle.height / 2,
//         }));
//       } else if (obstacle.type === 'Refatoração de Código') {
//         setObstacleX(-20); // Remove o obstáculo da tela
//       }
//       handleJump(); // Executa o salto ao mesmo tempo
//     }
//   };

//   useEffect(() => {
//     // Muda de frame para animação de corrida
//     const frameInterval = setInterval(() => {
//       setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
//     }, frameChangeInterval);

//     return () => clearInterval(frameInterval);
//   }, []);

//   useEffect(() => {
//     if (isRunning && !isGameOver) {
//       const gameLoop = () => {
//         setObstacleX((prevX) => {
//           const newX = prevX - obstacleSpeed;
//           if (newX < -20) {
//             // Escolhe um novo obstáculo aleatório quando o anterior sai da tela
//             const randomObstacle = obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)];
//             setObstacle(randomObstacle);
//             return 800; // Reposiciona o obstáculo fora da tela
//           }
//           return newX;
//         });

//         if (isJumping) {
//           setVelocityY((prevVY) => prevVY - gravity);
//           setPlayerY((prevY) => {
//             const newY = prevY - velocityY;
//             if (newY >= groundLevel) {
//               setIsJumping(false);
//               setVelocityY(0);
//               return groundLevel;
//             }
//             return newY;
//           });
//         }

//         // Verifica colisão
//         if (
//           50 < obstacleX + 20 &&
//           50 + frameWidth * 3 > obstacleX &&
//           playerY + frameHeight * 3 >= groundLevel - obstacle.height
//         ) {
//           setIsRunning(false);
//           setIsGameOver(true);
//         }

//         gameLoopRef.current = requestAnimationFrame(gameLoop);
//       };

//       gameLoopRef.current = requestAnimationFrame(gameLoop);
//     }

//     return () => {
//       if (gameLoopRef.current) {
//         cancelAnimationFrame(gameLoopRef.current);
//       }
//     };
//   }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver, obstacle]);

//   return {
//     isRunning,
//     isJumping,
//     isGameOver,
//     playerY,
//     obstacleX,
//     obstacle,
//     currentFrame,
//     handleStart,
//     handlePause,
//     handleJump,
//     handleInteraction,
//     frameWidth,
//     frameHeight,
//   };
// };

// export default useHeroRunGame;

interface Obstacle {
  type: string;
  height: number;
  color: string;
  action: string;
}

const obstaclesConfig: Obstacle[] = [
  {
    type: 'Burocracia da Equipe',
    height: 80,
    color: '#FF6347',
    action: 'Retrospectiva',
  },
  {
    type: 'Mudança de Escopo',
    height: 80,
    color: '#4682B4',
    action: 'Ajustar Prioridades',
  },
  {
    type: 'Refatoração de Código',
    height: 110,
    color: '#32CD32',
    action: 'Revisão de Código',
  },
];

const useHeroRunGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerY, setPlayerY] = useState(200);
  const [obstacleX, setObstacleX] = useState(800); // Início mais distante
  const [obstacle, setObstacle] = useState<Obstacle>(obstaclesConfig[0]);
  const [velocityY, setVelocityY] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [powerUps, setPowerUps] = useState<string[]>([]); 

  const gravity = 0.6;
  const jumpStrength = 16;
  const groundLevel = 200;
  const obstacleSpeed = 3;
  const frameWidthPlayer = 16;
  const frameHeightPlayer = 17;
  const totalFrames = 3;
  const frameChangeInterval = 200;

  const gameLoopRef = useRef<number | null>(null);

  const handleStart = () => {
    setIsRunning(true);
    setIsGameOver(false);
    setPlayerY(groundLevel);
    setObstacleX(800); // Reposição inicial
    setVelocityY(0);
    setObstacle(obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)]);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleJump = () => {
    if (!isJumping && isRunning) {
      setIsJumping(true);
      setVelocityY(jumpStrength);
    }
  };

  const handleInteraction = () => {
    if (isRunning && !isJumping) {
      if (obstacle.type === 'Burocracia da Equipe' || obstacle.type === 'Mudança de Escopo') {
        setObstacle((prevObstacle) => ({
          ...prevObstacle,
          height: prevObstacle.height / 2,
        }));
      } else if (obstacle.type === 'Refatoração de Código') {
        setObstacleX(-20); // Remove o obstáculo da tela
      }
       handleJump(); // Executa o salto ao mesmo tempo
    }
  };

  const applyPowerUp = (powerUp: string) => {
    if (!powerUps.includes(powerUp)) {
      setPowerUps([...powerUps, powerUp]);
      // Ajustes na lógica de jogo para aplicar o power-up
      if (powerUp === 'Energia Extra') setVelocityY(jumpStrength * 1.2); // Aumenta a força do pulo
      if (powerUp === 'Velocidade Reduzida') setObstacleX(obstacleX + 200); // Reduz a velocidade dos obstáculos
    }
  };

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    }, frameChangeInterval);

    return () => clearInterval(frameInterval);
  }, []);

  useEffect(() => {
    if (isRunning && !isGameOver) {
      const gameLoop = () => {
        setObstacleX((prevX) => {
          const newX = prevX - obstacleSpeed;
          if (newX < -20) {
            const randomObstacle = obstaclesConfig[Math.floor(Math.random() * obstaclesConfig.length)];
            setObstacle(randomObstacle);
            return 800; // Reposiciona o obstáculo fora da tela
          }
          return newX;
        });

        if (isJumping) {
          setVelocityY((prevVY) => prevVY - gravity);
          setPlayerY((prevY) => {
            const newY = prevY - velocityY;
            if (newY >= groundLevel) {
              setIsJumping(false);
              setVelocityY(0);
              return groundLevel;
            }
            return newY;
          });
        }

        if (
          50 < obstacleX + 20 &&
          50 + frameWidthPlayer * 3 > obstacleX &&
          playerY + frameHeightPlayer * 3 >= groundLevel - obstacle.height
        ) {
          setIsRunning(false);
          setIsGameOver(true);
        }

        gameLoopRef.current = requestAnimationFrame(gameLoop);
      };

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver, obstacle]);

  return {
    isRunning,
    isJumping,
    isGameOver,
    playerY,
    obstacleX,
    obstacle,
    currentFrame,
    handleStart,
    handlePause,
    handleJump,
    handleInteraction,
    applyPowerUp,
    frameWidth: frameWidthPlayer,
    frameHeight: frameHeightPlayer,
  };
};

export default useHeroRunGame;
