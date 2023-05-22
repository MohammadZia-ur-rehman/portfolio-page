import ExperienceItem from "./details/ExperienceItem";
import { experiences } from "@/data/portfolioInformation";

export default function Experience() {
  const experienceJSX = experiences.map((value) => (
    <ExperienceItem data={value}></ExperienceItem>
  ));
  return (
    <section>
      <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
        Work Experiences
      </h2>
      <ul className="mt-2">{experienceJSX}</ul>
    </section>
  );
}
