import Logo from "../logo";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <nav className="w-full max-w-7xl px-4 mx-auto h-20 flex items-center justify-between bg-[rgb(3,62,52)]">
      <div className="pr-4 lg:w-1/4">
        <Logo />
      </div>
      <div className="flex justify-end items-center gap-3 lg:w-1/4">
        <a href="#" className="px-4 text-sm text-white font-medium">
          Sign in
        </a>
        <Button className="bg-primary-400 hover:bg-primary-400/90 text-black font-medium text-sm px-4 h-9">
          Get a demo
        </Button>
      </div>
    </nav>
  );
}
