import { githubStats } from "@/data/portfolioInformation";

export default function GithubStats() {
  return (
    <>
      <strong className="text-xl font-medium ">Github Stats</strong>
      <ul className="flex w-full mt-2 mb-10">
        <li className="px-2 mt-2 w-3/12 bg-pink-600 text-white text-center rounded-tl-lg rounded-bl-lg">
          {githubStats[0]}
        </li>
        <li className="px-2 mt-2 w-4/12 bg-blue-600 text-white text-center">
          {githubStats[1]}
        </li>
        <li className="px-2 mt-2 w-5/12 bg-yellow-500 text-white text-center rounded-tr-lg rounded-br-lg">
          {githubStats[2]}
        </li>
      </ul>
    </>
  );
}
