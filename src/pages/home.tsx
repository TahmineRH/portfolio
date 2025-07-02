import Intro from "../components/home/intro";
import Skilles from "../components/home/skilles";
import SnapshotProject from "../components/home/snapshot";
import Testimonials from "../components/home/testimonials";

function Home() {
  return (
    <main className="space-y-14 lg:space-y-32 px-4 mx-auto">
      <Intro />
      <Skilles />
      <SnapshotProject />
      <Testimonials />
    </main>
  );
}

export default Home;
