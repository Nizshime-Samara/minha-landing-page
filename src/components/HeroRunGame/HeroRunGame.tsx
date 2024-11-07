// import React from 'react';
// import { Stage, Layer, Rect, Image as KonvaImage } from 'react-konva';
// import useImage from 'use-image';
// import './HeroRunGame.css';
// import useHeroRunGame from './useHeroRunGame';

// const HeroRunGame: React.FC = () => {
//   const {
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
//   } = useHeroRunGame();

//   const [playerImage] = useImage('/player.png');
//   const playerWidth = frameWidth * 3;
//   const playerHeight = frameHeight * 3;
//   const groundLevel = 200;

//   const sx = 0;
//   const sy = currentFrame * frameHeight;

//   return (
//     <div className="hero-game-container">
//       <Stage width={500} height={300} className="canvas-stage">
//         <Layer>
//           {playerImage && (
//             <KonvaImage
//               image={playerImage}
//               x={50}
//               y={playerY}
//               width={playerWidth}
//               height={playerHeight}
//               crop={{ x: sx, y: sy, width: frameWidth, height: frameHeight }}
//             />
//           )}
//           <Rect
//             x={obstacleX}
//             y={groundLevel}
//             width={20}
//             height={50}
//             fill="#333"
//           />
//         </Layer>
//       </Stage>
//       <div className="game-buttons">
//         {!isRunning && !isGameOver && (
//           <button onClick={handleStart}>Start</button>
//         )}
//         {isRunning && <button onClick={handlePause}>Pause</button>}
//         {isRunning && <button onClick={handleJump}>Jump</button>}
//         {isGameOver && (
//           <>
//             <p className="game-over-text">Game Over</p>
//             <button onClick={handleStart}>Restart</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroRunGame;
import React from 'react';
import { Stage, Layer, Rect, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import './HeroRunGame.css';
import useHeroRunGame  from './useHeroRunGame';

const HeroRunGame: React.FC = () => {
  const {
    isRunning,
    isGameOver,
    playerY,
    obstacleX,
    obstacle,
    currentFrame,
    handleStart,
    handlePause,
    handleJump,
    handleInteraction,
    frameWidth,
    frameHeight,
  } = useHeroRunGame();

  const [playerImage] = useImage('/player.png');
  const playerWidth = frameWidth * 2;
  const playerHeight = frameHeight * 3;
  const groundLevel = 250;

  const sx = 0;
  const sy = currentFrame * frameHeight;

  return (
    <div className="hero-game-container">
      <Stage width={500} height={300} className="canvas-stage">
        <Layer>
          {playerImage && (
            <KonvaImage
              image={playerImage}
              x={50}
              y={playerY}
              width={playerWidth}
              height={playerHeight}
              crop={{ x: sx, y: sy, width: frameWidth, height: frameHeight }}
            />
          )}
          <Rect
            x={obstacleX}
            y={groundLevel - obstacle.height}
            width={20}
            height={obstacle.height}
            fill={obstacle.color}
          />
        </Layer>
      </Stage>
      <div className="game-buttons">
        {!isRunning && !isGameOver && (
          <button onClick={handleStart}>Start</button>
        )}
        {isRunning && (
          <>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleJump}>Jump</button>
            <button onClick={handleInteraction}>{obstacle.action}</button>
          </>
        )}
        {isGameOver && (
          <>
            <p className="game-over-text">Game Over</p>
            <button onClick={handleStart}>Restart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroRunGame;