import ai from "@/assets/AI.png";

const images = [{ src: ai, alt: "ai Page" }];

export default function AIDemo() {
  return (
    <div className="grid grid-cols-1 max-md:grid-cols-1 w-full gap-4">
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
