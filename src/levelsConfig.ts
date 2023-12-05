import { LevelRoutes } from "./types";

const levels = {
  easy: {
    name: "easy level",
    link: LevelRoutes.easy,
    width: 6,
    height: 6,
    bombs: 2,
  },
  medium: {
    name: "medium level",
    link: LevelRoutes.medium,
    width: 8,
    height: 8,
    bombs: 10,
  },
  hard: {
    name: "hard level",
    link: LevelRoutes.hard,
    width: 10,
    height: 10,
    bombs: 20,
  },
};

export default levels;
