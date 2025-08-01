import about from "@/assets/images/projects/hesam/about.webp";
import blogs from "@/assets/images/projects/hesam/blogs-min.webp";
import catalog from "@/assets/images/projects/hesam/catalog.webp";
import contact from "@/assets/images/projects/hesam/contact-min.webp";
import expo from "@/assets/images/projects/hesam/expos-min.webp";
import home from "@/assets/images/projects/hesam/home-min.webp";
import products from "@/assets/images/projects/hesam/products-min.webp";
import projects from "@/assets/images/projects/hesam/projects-min.webp";

const images = [
  { src: home, alt: "Home Page" },
  { src: projects, alt: "Projects Page" },
  { src: products, alt: "Products Page" },
  { src: blogs, alt: "Blogs Page" },
  { src: expo, alt: "Exhibitions Page" },
  { src: contact, alt: "Contact Page" },
  { src: catalog, alt: "Catalog Page" },
  { src: about, alt: "About Page" },
];

export default function HesamDemo() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full object-contain rounded-sm"
        />
      ))}
    </div>
  );
}
