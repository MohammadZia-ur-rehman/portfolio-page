export default function ProjectItem({
  data,
}: {
  data: {
    name: string;
    skills: string[];
    live: string;
    code: string;
    description: string[];
  };
}) {
  const skills = data.skills.map((value) => (
    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
      {value}
    </span>
  ));

  return (
    <li className="py-2">
      <div className="flex justify-between my-1">
        <strong>{data.name}</strong>
        <p className="flex">{skills}</p>
      </div>
      <ul className="flex mb-2">
        <li>
          <a
            href={data.live}
            className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
          >
            Live
          </a>
        </li>
        <li>
          <a
            href={data.code}
            className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
          >
            Code
          </a>
        </li>
      </ul>
      <p className="text-xs">{data.description}</p>
    </li>
  );
}
