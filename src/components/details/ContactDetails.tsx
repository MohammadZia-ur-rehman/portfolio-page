import ContactItem from "./ContactItem";
import { contactDetails } from "@/data/portfolioInformation";

export default function ContactDetails() {
  return (
    <>
      <strong className="text-xl font-medium">Contact Details</strong>
      <ul className="mt-2 mb-10">
        <ContactItem data={contactDetails[0]}></ContactItem>
        <ContactItem data={contactDetails[1]}></ContactItem>
        <ContactItem data={contactDetails[2]}></ContactItem>
      </ul>
    </>
  );
}
