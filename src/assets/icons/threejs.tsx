import { useThemeStore } from "../../store/theme";

type props = {
  className?: string;
};

export default function Threejs({ className }: props) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className={className}
    >
      <g transform="matrix(2.25096,0,0,2.25096,256.253,256.48)">
        <g id="Three.js_Icon.svg" transform="matrix(1,0,0,1,-113.385,-113.385)">
          <g transform="matrix(1,0,0,1,8.964,4.2527)">
            <path
              d="M63.02,200.61L19.807,25.67L193.037,75.544L63.02,200.61Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="6px"
            />
            <path
              d="M106.39,50.612L127.981,138.108L41.414,113.163L106.39,50.612Z"
              fill="currentColor"
              stroke={theme === "dark" ? "#341716" : "#fff1dc"}
              strokeWidth="6px"
            />
            <path
              d="M84.91,125.03L74.186,81.565L117.194,93.911L84.91,125.03Z"
              fill="currentColor"
              stroke={theme === "dark" ? "#341716" : "#fff1dc"}
              strokeWidth="6px"
            />
            <path
              d="M63.458,38.153L74.182,81.618L31.174,69.272L63.458,38.153Z"
              fill="currentColor"
              stroke={theme === "dark" ? "#341716" : "#fff1dc"}
              strokeWidth="6px"
            />
            <path
              d="M149.47,62.93L160.194,106.395L117.186,94.049L149.47,62.93Z"
              fill="currentColor"
              stroke={theme === "dark" ? "#341716" : "#fff1dc"}
              strokeWidth="6px"
            />
            <path
              d="M84.915,125.06L95.639,168.525L52.631,156.179L84.915,125.06Z"
              fill="currentColor"
              stroke={theme === "dark" ? "#341716" : "#fff1dc"}
              strokeWidth="6px"
            />
          </g>
        </g>
        <g id="Three.js_Icon.svg1"></g>
      </g>
    </svg>
  );
}
