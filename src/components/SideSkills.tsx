import { githubStats } from "@/data/portfolioInformation";

export default function SideSkills({
  data,
}: {
  data: { title: string; list: string[] };
}) {
  const list = data.list.map((value) => <li className="px-2 mt-1">{value}</li>);

  return (
    <>
      <strong className="text-xl font-medium">{data.title}</strong>
      <ul className="mt-2 mb-10">{list}</ul>
    </>
  );
}
