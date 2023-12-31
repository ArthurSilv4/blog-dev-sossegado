import Image from "next/image";
import Link from "next/link";

export function SocialMedia() {
  const medias = [
    {
      name: "Linkedin",
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/arthur-souza-dev/",
    },
    {
      name: "GitHub",
      icon: "/icons/gitHub.svg",
      link: "https://github.com/ArthurSilv4",
    },
    {
      name: "Portfólio",
      icon: "/icons/portfolio.svg",
      link: "https://portfolio-arthur-souza.vercel.app/",
    },
  ];

  return (
    <ul className="flex gap-3">
      {medias.map((media, index) => (
        <li key={index} className="border-2 p-1 rounded-full">
          <Link href={media.link}>
            <Image
              src={media.icon}
              width={30}
              height={30}
              alt={media.name}
              className="dark:invert-[70%] dark:sepia-[0%] dark:saturate-[1200%] dark:hue-rotate-[190deg]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
