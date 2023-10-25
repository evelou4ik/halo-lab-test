import { useAppSelector } from "./hooks/redux.ts";
import { Scoreboard, PlayerInputForm, GameScreen } from "./components/index.ts";

import {
  SCOREBOARD_STEP,
  PLAYER_FORM_STEP,
  GAME_SCREEN_STEP,
} from "./constants.ts";

function App() {
  const { gameStep } = useAppSelector((state) => state.gameMatch);

  const gameStepsComponents = {
    [SCOREBOARD_STEP]: <Scoreboard />,
    [PLAYER_FORM_STEP]: <PlayerInputForm />,
    [GAME_SCREEN_STEP]: <GameScreen />,
  };

  return (
    <div className={"w-screen min-h-screen bg-amber-200 px-2"}>
      {gameStepsComponents[gameStep]}
    </div>
  );
}

export default App;
