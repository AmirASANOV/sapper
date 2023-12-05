import React from "react";
import levels from "../levelsConfig";
import Game from "../components/Game";

interface IGamePageProps {
  level: keyof typeof levels;
}

const GamePage: React.FC<IGamePageProps> = ({ level }) => {
  return (
    <div>
      <h1>{levels[level].name}</h1>
      <Game
        width={levels[level].width}
        height={levels[level].height}
        bombs={levels[level].bombs}
      />
    </div>
  );
};

export default GamePage;
