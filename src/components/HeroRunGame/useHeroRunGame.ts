import { useState, useEffect, useRef } from 'react';

const useHeroRunGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerY, setPlayerY] = useState(200);
  const [obstacleX, setObstacleX] = useState(500);
  const [velocityY, setVelocityY] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  const gravity = 0.6;
  const jumpStrength = 15;
  const groundLevel = 200;
  const obstacleSpeed = 2;
  const frameWidth = 16;
  const frameHeight = 16;
  const totalFrames = 3;
  const frameChangeInterval = 200;

  const gameLoopRef = useRef<number | null>(null);

  const handleStart = () => {
    setIsRunning(true);
    setIsGameOver(false);
    setPlayerY(groundLevel);
    setObstacleX(500);
    setVelocityY(0);
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
          if (newX < -20) return 500;
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
          50 + frameWidth * 3 > obstacleX &&
          playerY + frameHeight * 3 >= groundLevel
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
  }, [isRunning, isJumping, velocityY, playerY, obstacleX, isGameOver]);

  return {
    isRunning,
    isJumping,
    isGameOver,
    playerY,
    obstacleX,
    currentFrame,
    handleStart,
    handlePause,
    handleJump,
    frameWidth,
    frameHeight,
  };
};

export default useHeroRunGame;
