import Intro from "../components/home/intro";
import ProjectItem from "../components/projects/item";

function Home() {
  return (
    <main className="w-full">
      <Intro />
      <div className="p-32 flex gap-20 h-100">
        <ProjectItem />
        <ProjectItem />
      </div>
    </main>
  );
}

export default Home;
