import Intro from "../components/home/intro";
import Skilles from "../components/home/skilles";
import SnapshotProject from "../components/home/snapshot";

function Home() {
  return (
    <main className="w-full max-md:px-4 flex flex-col gap-10 2xl:px-52 px-24">
      <Intro />
      <Skilles />
      <SnapshotProject />
    </main>
  );
}

export default Home;
