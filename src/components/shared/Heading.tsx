import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Heading({
  title,
  children,
  className,
  light,
}: {
  title: string;
  light?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center">
        {/* Heading SVG */}
        <svg
          width="28"
          height="45"
          viewBox="0 0 28 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2584 0.169918C21.9954 -0.233158 18.6837 0.0837835 15.5563 1.09844C12.429 2.11309 9.56197 3.8008 7.15712 6.04279C4.75226 8.28478 2.86798 11.0266 1.63687 14.0752C0.405765 17.1238 -0.142251 20.4053 0.031391 23.6885C0.205033 26.9717 1.09611 30.177 2.64192 33.0788C4.18774 35.9806 6.35071 38.5083 8.97863 40.4842C11.6066 42.46 14.6356 43.8359 17.8525 44.515C21.0694 45.1941 24.3961 45.1599 27.5984 44.4149L23.1655 41.3362C20.4336 41.5753 20.253 41.6007 18.6655 41.3362C15.6655 40.8362 13.2979 39.361 11.0779 37.692C8.85803 36.0229 7.03087 33.8876 5.72506 31.4364C4.41925 28.9851 3.66652 26.2775 3.51983 23.504C3.37315 20.7305 3.83608 17.9586 4.87605 15.3833C5.91602 12.8079 7.50775 10.4918 9.53923 8.59794C11.5707 6.70404 14.6655 4.83615 16.6655 4.33615C18.1655 3.83615 18.1655 3.83615 21.1018 3.57812L25.2584 0.169918Z"
            fill={light ? "#4F97E3" : "#1A5BA1"}
          />
        </svg>

        {/* Heading Title */}
        <h3 className="font-semibold text-xl lg:text-4xl">{title}</h3>
      </div>

      {children && (
        <Button
          variant={"link"}
          asChild
          className="hidden lg:flex text-csk-500"
        >
          {children}
        </Button>
      )}
    </header>
  );
}
