import SocialItem from "./SocialItem";
import { socialAccounts } from "@/data/portfolioInformation";

export default function SocialSection() {
  return (
    <ul className="flex flex-wrap justify-end gap-2">
      <SocialItem data={socialAccounts[0]}></SocialItem>
      <SocialItem data={socialAccounts[1]}></SocialItem>
    </ul>
  );
}
