import { SocialMedia } from "../socialMedia/socialMedia";

export function Footer() {
  return (
    <footer className="flex p-2 bg-bgLight dark:bg-bgDark">
      <div className="w-full h-full max-w-[1500px] m-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <span className="font-semibold">
          Obrigado por ter <span className="text-orange underline">vindo!</span>
        </span>
        <span className="font-semibold underline">
          arthurdesouza.silv@gmail.com
        </span>
        <SocialMedia />
      </div>
    </footer>
  );
}
