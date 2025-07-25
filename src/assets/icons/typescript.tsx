import { useThemeStore } from "../../store/theme";

type props = {
  className?: string;
};

export default function TypeScript({ className }: props) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      xmlSpace="preserve"
      className={className}
    >
      <path
        d="M97.7 0h804.7c53.9 0 97.7 43.7 97.7 97.7v804.7c0 53.9-43.7 97.7-97.7 97.7H97.7C43.7 1000 0 956.3 0 902.3V97.7C0 43.7 43.7 0 97.7 0z"
        fill="currentColor"
      />
      <path
        d="M619.1 794.9v97.7c15.8 8.2 35.2 14.3 56.6 18.4s44.9 6.1 68.4 6.1 44.9-2.1 66.4-6.6c21.5-4.5 39.1-11.9 54.7-21.5 15.8-10.4 29.3-23.4 37.1-41s13.9-37.1 13.9-62.5c0-17.8-2.7-33.2-8-46.9s-12.9-25.4-23.4-35.2c-10-10.4-21.5-19.5-35.2-27.3s-29.3-16-46.9-23.4c-12.9-5.3-23.4-10.4-35.2-15.4-10.2-5.1-18.9-10.2-25.4-15.2-7.2-5.3-12.7-10.7-16.6-16.4-3.9-5.9-5.9-12.3-5.9-19.5 0-6.6 1.7-12.7 5.3-18.2 3.5-5.5 8.4-10 14.6-13.9 6.3-3.9 14.1-6.8 23.4-9 9.2-2.1 19.3-3.1 31.3-3.1 8.2 0 16.8.6 25.4 1.8 9 1.2 18.2 3.1 27.3 5.7 9.2 2.5 18.2 5.7 27.3 9.6 8.6 3.9 16.6 8.4 23.4 13.5v-91.8c-14.8-5.7-31.3-10-48.8-12.7-17.6-2.7-37.1-4.1-60.5-4.1s-44.9 2.5-66.4 7.4-39.1 12.7-54.7 23.4c-15.8 10.5-27.3 23.4-37.1 41-9.2 16.4-13.7 35.2-13.7 58.6 0 29.3 8.4 54.7 25.4 74.2 16.8 21.5 43 37.1 76.2 52.7 13.5 5.5 25.4 10.9 37.1 16.2 11.7 5.3 21.5 10.7 29.3 16.4 8.4 5.7 15 11.9 19.5 18.6 4.9 6.6 7.4 14.5 7.4 23.4 0 6.3-1.5 12.1-4.5 17.6-3 5.5-7.6 10.2-13.9 14.1-6.3 3.9-13.9 7-23.4 9.4-9.2 2.1-19.5 3.3-33.2 3.3-21.5 0-43-3.7-62.5-11.1-21.5-7.4-41-18.6-58.6-33.2l3.9-1.1zm-164-240.2h125v-80.1H230.5v80.1h125v357.4h99.6V554.7z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={theme === "dark" ? "#341716" : "#fff1dc"}
      />
    </svg>
  );
}
