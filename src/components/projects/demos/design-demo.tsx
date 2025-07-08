import create from "@/assets/images/projects/design-system/create-min.gif";
import favorite from "@/assets/images/projects/design-system/favorite-min.gif";
import home from "@/assets/images/projects/design-system/first-min.gif";
import login from "@/assets/images/projects/design-system/login-min.gif";
import order from "@/assets/images/projects/design-system/order-min.gif";
import park from "@/assets/images/projects/design-system/park-min.gif";
import productSildwalk from "@/assets/images/projects/design-system/product-sildwalk-min.gif";
import street from "@/assets/images/projects/design-system/street-min.gif";

const images = [
  { src: login, alt: "Login Page" },
  { src: home, alt: "Home Page" },
  { src: create, alt: "Create Product" },
  { src: street, alt: "Street Scene" },
  { src: park, alt: "Park Scene" },
  { src: productSildwalk, alt: "Sidewalk Scene" },
  { src: favorite, alt: "Favorites Page" },
  { src: order, alt: "Order Page" },
];

export default function DesignDemo() {
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
