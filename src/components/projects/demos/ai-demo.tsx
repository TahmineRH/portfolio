import chat from "@/assets/images/projects/ai/chat.png";
import home from "@/assets/images/projects/ai/home.gif";
import list from "@/assets/images/projects/ai/list.png";
import login from "@/assets/images/projects/ai/login.png";
import menu from "@/assets/images/projects/ai/menu.png";
import mockup from "@/assets/images/projects/ai/mockup.png";
import plans from "@/assets/images/projects/ai/plans.png";

const images = [
  { src: login, alt: "login Page" },
  { src: list, alt: "ai Page" },
  { src: menu, alt: "menu Page" },
  { src: chat, alt: "chat Page" },
  { src: plans, alt: "plans Page" },
];

export default function AIDemo() {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 w-full gap-4">
      <div className="relative w-62 mt-10 max-sm:hidden">
        <img
          src={home}
          alt="home"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-52  h-102 rounded-b-4xl absolute top-0 right-4"
        />
        <img
          src={mockup}
          alt="home"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-62 -top-11  rounded-4xl absolute object-contain "
        />
        {/* </div> */}
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-62 object-contain rounded-sm "
        />
      ))}
    </div>
  );
}
