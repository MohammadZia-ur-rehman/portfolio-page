import Quote from "./social/Footer/Quote";
import { quotes } from "@/data/portfolioInformation";

export default function Footer() {
  return (
    <footer className="bg-gray-500 py-6 mt-6">
      <Quote quote={quotes[0]}></Quote>
      <Quote quote={quotes[1]}></Quote>
    </footer>
  );
}
