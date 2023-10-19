import { BntToggle } from "@/components/buttons/bntToggle/page";
import { Logo } from "@/components/logo/page";

export function Header() {
  return (
    <header className="flex pt-2 px-2 bg-bgLight dark:bg-bgDark ">
      <div className="w-full h-full max-w-[1500px] m-auto flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <BntToggle />
        </div>
      </div>
    </header>
  );
}
