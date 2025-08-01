import create from "@/assets/images/projects/design-system/create-min.webp";
import edit from "@/assets/images/projects/design-system/edit.webp";
import favorite from "@/assets/images/projects/design-system/favorite-min.webp";
import home from "@/assets/images/projects/design-system/first-min.webp";
import login from "@/assets/images/projects/design-system/login-min.webp";
import order from "@/assets/images/projects/design-system/order-min.webp";
import park from "@/assets/images/projects/design-system/park-min.webp";
import partsAdmin from "@/assets/images/projects/design-system/parts-admin.webp";
import productAdmin from "@/assets/images/projects/design-system/product-admin.webp";
import productSildwalk from "@/assets/images/projects/design-system/product-sildwalk-min.webp";
import street from "@/assets/images/projects/design-system/street-min.webp";
import usersAdmin from "@/assets/images/projects/design-system/users-admin.webp";

const images = [
  { src: login, alt: "Login Page" },
  { src: home, alt: "Home Page" },
  { src: create, alt: "Create Product" },
  { src: street, alt: "Street Scene" },
  { src: park, alt: "Park Scene" },
  { src: productSildwalk, alt: "Sidewalk Scene" },
  { src: favorite, alt: "Favorites Page" },
  { src: order, alt: "Order Page" },
  { src: productAdmin, alt: "Product Admin Page" },
  { src: edit, alt: "Edit Dialog" },
  { src: usersAdmin, alt: "User Admin Page" },
  { src: partsAdmin, alt: "Parts Admin Page" },
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
