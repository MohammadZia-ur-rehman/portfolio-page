import { profileName, profileRole } from "@/data/portfolioInformation";

export default function PersonalDetails() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="profile_picture.jpg" className="rounded-full h-52 w-52" />
      </div>
      <div className="grid justify-items-end">
        <h1 className="text-4xl font-extrabold">{profileName}</h1>
        <p className="text-xl mt-5">{profileRole}</p>
      </div>
    </div>
  );
}
