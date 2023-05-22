export default function EducationItem({
  data,
}: {
  data: {
    degree: string;
    institute: string;
    duration: string;
    score: string;
  };
}) {
  return (
    <li className="pt-2">
      <p className="flex justify-between text-sm">
        <strong className="text-base">{data.institute}</strong>
        {data.duration}
      </p>
      <p className="flex justify-between text-sm">
        {data.degree}
        <small>{data.score}</small>
      </p>
    </li>
  );
}
