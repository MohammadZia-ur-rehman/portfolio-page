import { projects } from "@/data/portfolioInformation";
import ProjectItem from "./details/ProjectItem";

export default function Project() {
  return (
    <section>
      <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
      <ul className="mt-1">
        <ProjectItem data={projects[0]}></ProjectItem>
      </ul>
    </section>
  );
}
