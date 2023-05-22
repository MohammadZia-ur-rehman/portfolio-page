import About from "./About";
import Education from "./Education";
import Project from "./Project";
import SideSkills from "./SideSkills";
import ContactDetails from "./details/ContactDetails";
import GithubStats from "./details/GithubStats";
import Experience from "./Experience";
import {
  skills,
  furtherEducation,
  currentlyLearning,
  InterestAndHobbies,
  about,
} from "@/data/portfolioInformation";

export default function Main() {
  return (
    <main className="flex gap-x-10 pt-10 border-t">
      <div className="w-2/6">
        <ContactDetails></ContactDetails>
        <GithubStats></GithubStats>
        <SideSkills data={skills}></SideSkills>
        <SideSkills data={furtherEducation}></SideSkills>
        <SideSkills data={currentlyLearning}></SideSkills>
        <SideSkills data={InterestAndHobbies}></SideSkills>
      </div>
      <div className="w-4/6">
        <About data={about}></About>
        <Project></Project>
        <Experience></Experience>
        <Education></Education>
      </div>
    </main>
  );
}
