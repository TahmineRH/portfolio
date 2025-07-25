import { useThemeStore } from "../../store/theme";

type props = {
  className?: string;
};

export default function TinyMCE({ className }: props) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg
      height="2500"
      width="2451"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 940.6 959.5"
      className={className}
    >
      <path
        d="M621.6 0c159.9.9 317.9 133.8 317.9 327.5 0 0 1 49.2 1.1 108.8v24.9c0 11.2-.1 22.5-.2 33.8l-.2 16.9c-.7 47.6-2.4 91.9-5.8 114.9-22.2 148-132.7 250.2-285 276.2-137.3 26.8-218.7 42.3-245 47.5-11.3 2.4-61.1 9-82.7 9C154.3 959.5 2.4 834.1 0 632v-33.3l.1-5.7v-12.4c0-21.8.1-48.5.2-76l.1-16.5c.2-52.5.7-104.9 1.5-129C7.6 211.6 109.6 92.4 303.8 54.2L551.1 6.1C573.7 1.9 598.6 0 621.6 0z"
        fill="currentColor"
      />
      <path
        d="M733.5 538.7l-150.4 29.2v147l-376.2 73V421.2l150.4-29.1v219.6l225.8-43.8V348.3l-225.8 43.8V245l376.2-73z"
        fill={theme === "dark" ? "#341716" : "#fff1dc"}
        fill-rule="evenodd"
      />
    </svg>
  );
}
