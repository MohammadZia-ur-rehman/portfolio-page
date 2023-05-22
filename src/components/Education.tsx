import { education } from "@/data/portfolioInformation";
import EducationItem from "./details/EducationItem";

export default function Education() {
  let educationJSX = education.map((value) => (
    <EducationItem data={value}></EducationItem>
  ));

  return (
    <section>
      <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
      <ul className="mt-2">{educationJSX}</ul>
    </section>
  );
}
