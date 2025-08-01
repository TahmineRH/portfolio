import staticImg from "@/assets/images/static.webp";
import me1 from "@/assets/me/me1.webp";
import me2 from "@/assets/me/me2.webp";
import { EvervaultCard } from "../ui/evervault-card";

export const MyPic = () => {
  return (
    <div className="rounded-full max-md:rounded-lg 2xl:w-[24.15rem] 2xl:h-[24.25rem] h-81 w-80 max-md:h-108 max-md:w-full border-dashed border-2 border-primary max-md:border-0 flex justify-center items-center">
      <div
        className="relative 2xl:w-96 2xl:h-96 h-80 w-80 max-md:h-107 max-md:w-full rounded-full max-md:rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${me1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <EvervaultCard />
        <div
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 animate-staticNoise bg-cover bg-center"
          style={{ backgroundImage: `url(${staticImg})` }}
        ></div>

        <img
          src={me1}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100 animate-image1"
          alt="image1"
        />

        <img
          src={me2}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-0 animate-image2"
          alt="image2"
        />
      </div>
    </div>
  );
};
