export default function ExperienceItem({
  data,
}: {
  data: {
    name: string;
    title: string;
    duration: string;
    location: string;
    description: string[];
  };
}) {
  const jobDescription = data.description.map((value) => <li>{value}</li>);

  return (
    <li className="pt-2">
      <p className="flex justify-between text-sm">
        <strong className="text-base">{data.name}</strong>
        {data.duration}
      </p>
      <p className="flex justify-between text-base">
        {data.title}
        <small>{data.location}</small>
      </p>
      <ul className="text-xs">{jobDescription}</ul>
    </li>
  );
}
