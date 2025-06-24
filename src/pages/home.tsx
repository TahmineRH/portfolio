import Intro from "../components/home/intro";
import Skilles from "../components/home/skilles";
import SnapshotProject from "../components/home/snapshot";

function Home() {
  return (
    <main className="space-y-14 lg:space-y-24 max-md:px-4 mx-auto">
      <Intro />
      <Skilles />
      <SnapshotProject />
    </main>
  );
}

export default Home;
