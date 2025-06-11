import Intro from "../components/home/intro";
import Skilles from "../components/home/skilles";
import ProjectItem from "../components/projects/item";

function Home() {
  return (
    <main className="w-full max-md:px-4 flex flex-col px-52">
      <Intro />
      <Skilles />
      <div className="p-32 flex gap-20 h-100">
        <ProjectItem />
        <ProjectItem />
      </div>
    </main>
  );
}

export default Home;
