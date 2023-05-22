import Quote from "./Quote";
import { quotes } from "@/data/portfolioInformation";

export default function Footer() {
  return (
    <footer className="bg-gray-500 py-4 mt-6 rounded-md">
      <Quote quote={quotes[0]}></Quote>
      <Quote quote={quotes[1]}></Quote>
    </footer>
  );
}
