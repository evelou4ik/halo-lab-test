interface Props {
  name: string;
  complexity: number;
  score: number;
}

export default function ScoreboardRow(props: Props) {
  const { name, complexity, score } = props;

  return (
    <tr className={"text-center text-white"}>
      <td>{name}</td>
      <td>{complexity}</td>
      <td>{score}</td>
    </tr>
  );
}
