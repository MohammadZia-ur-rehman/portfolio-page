import SocialSection from "./social/SocialSection";
import PersonalDetails from "./details/PersonalDetails";

export default function Header() {
  return (
    <header className="pb-10">
      <SocialSection></SocialSection>
      <PersonalDetails></PersonalDetails>
    </header>
  );
}
