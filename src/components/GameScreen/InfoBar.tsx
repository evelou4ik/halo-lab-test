import { useAppSelector } from "../../hooks/redux.ts";

export default function InfoBar() {
  const { playerName, score } = useAppSelector((state) => state.gameMatch);

  return (
    <div className="fixed left-4 top-4 bg-gray-800 text-white p-4 rounded-lg">
      <span className="block text-lg mb-2">NickName: {playerName}</span>
      <span className="block text-lg">Current Score: {score}</span>
    </div>
  );
}
