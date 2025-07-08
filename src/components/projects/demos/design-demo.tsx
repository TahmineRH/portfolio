import create from "@/assets/images/projects/design-system/create-min.gif";
import favorite from "@/assets/images/projects/design-system/favorite-min.gif";
import home from "@/assets/images/projects/design-system/first-min.gif";
import login from "@/assets/images/projects/design-system/login-min.gif";
import order from "@/assets/images/projects/design-system/order-min.gif";
import park from "@/assets/images/projects/design-system/park-min.gif";
import productSildwalk from "@/assets/images/projects/design-system/product-sildwalk-min.gif";
import street from "@/assets/images/projects/design-system/street-min.gif";

export default function DesignDemo() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-4">
      <img
        src={login}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="login page"
      />
      <img
        src={home}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="Home page"
      />
      <img
        src={create}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="create"
      />
      <img
        src={street}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="street page"
      />
      <img
        src={park}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="park page"
      />
      <img
        src={productSildwalk}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="product sildwalk page"
      />
      <img
        src={favorite}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="favorite page"
      />
      <img
        src={order}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full object-contain rounded-sm"
        alt="order page"
      />
    </div>
  );
}
