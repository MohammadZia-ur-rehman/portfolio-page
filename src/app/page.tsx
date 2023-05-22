import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-5/6 mt-5 mb-5">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
