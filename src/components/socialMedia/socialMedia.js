import Image from "next/image";
import Link from "next/link";

export function SocialMedia() {
  const medias = [
    {
      name: "Linkedin",
      icon: "/icons/linkedin.svg",
      link: "",
    },
    {
      name: "GitHub",
      icon: "/icons/gitHub.svg",
      link: "",
    },
    {
      name: "Portfólio",
      icon: "/icons/portfolio.svg",
      link: "",
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
