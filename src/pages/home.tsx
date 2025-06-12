import ZoomDialogCards from "../components/home/div";
import Intro from "../components/home/intro";
import Skilles from "../components/home/skilles";

function Home() {
  return (
    <main className="w-full max-md:px-4 flex flex-col 2xl:px-52 px-24">
      <Intro />
      <Skilles />
      <ZoomDialogCards />
    </main>
  );
}

export default Home;
