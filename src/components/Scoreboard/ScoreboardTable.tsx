import { ScoreboardRow } from "../index.ts";

interface Props {
  winners: {
    name: string;
    difficultyLevel: number;
    finalScore: number;
  }[];
}

export default function ScoreboardTable(props: Props) {
  const { winners } = props;

  return (
    <table className={"w-full"}>
      <thead>
        <tr>
          {columnNames.map((el) => (
            <th className={"text-center mx-2 pb-2 text-white"} key={el}>
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {winners.map(({ name, difficultyLevel, finalScore }) => (
          <ScoreboardRow
            key={name}
            name={name}
            complexity={difficultyLevel}
            score={finalScore}
          />
        ))}
      </tbody>
    </table>
  );
}

const columnNames = ["Name", "Complexity", "Score"];
