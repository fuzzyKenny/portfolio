import LocalTime from "../utils/LocalTime";
import ThemeToggle from "./themeToggle";

export default function Banner() {
  return (
    <div className="max-w-3xl mx-auto flex items-center justify-end gap-2 border p-2">
      <LocalTime />
      <ThemeToggle />
    </div>
  );
}
