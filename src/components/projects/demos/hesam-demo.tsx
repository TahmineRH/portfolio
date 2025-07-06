import about from "@/assets/images/projects/hesam/about.png";
import blogs from "@/assets/images/projects/hesam/blogs-min.gif";
import catalog from "@/assets/images/projects/hesam/catalog.png";
import contact from "@/assets/images/projects/hesam/contact-min.gif";
import expo from "@/assets/images/projects/hesam/expos-min.gif";
import home from "@/assets/images/projects/hesam/home-min.gif";
import products from "@/assets/images/projects/hesam/products-min.gif";
import projects from "@/assets/images/projects/hesam/projects-min.gif";

export default function HesamDemo() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-4">
      <img
        src={home}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="Home page"
      />
      <img
        src={projects}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="projects"
      />
      <img
        src={products}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="products page"
      />
      <img
        src={blogs}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="blogs page"
      />
      <img
        src={expo}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="expo page"
      />
      <img
        src={contact}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="contact page"
      />
      <img
        src={catalog}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="catalog page"
      />
      <img
        src={about}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="catalog page"
      />
    </div>
  );
}
