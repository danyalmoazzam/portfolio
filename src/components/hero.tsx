import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { BadgeCheckIcon } from "lucide-react";
import { data } from "../constants";

export function Hero() {
  const { avatar, about, links } = data;

  return (
    <>
      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/danyalmoazzam"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Avatar className="size-28 shadow transition-all ease-in-out duration-300 dark:hover:shadow-white hover:shadow-2xl hover:scale-110">
            <AvatarImage alt={avatar.name} src={"/assets/avatar.jpg"} />
            <AvatarFallback className="font-mono font-bold">
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>
      </div>

      <div className="flex items-center flex-col gap-4 mb-1 justify-center">
        <h1 className="flex dark:text-neutral-100 text-neutral-900 text-5xl mt-3 mb-3 text-center font-bold text-balance">
          Danyal Moazzam
        </h1>
      </div>

      <div className="flex flex-col font-mono font-semibold gap-4 dark:text-neutral-200 text-neutral-800 text-pretty text-center">
        <h2>{about.title}</h2>
        <h3>{about.description}</h3>
      </div>

      <nav className="flex gap-x-4 pt-4 justify-center -mb-10">
        {links.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size={null}
                key={link.title}
                className="p-2 shadow rounded-lg"
                asChild
              >
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                  className="flex justify-center items-center md:gap-2"
                >
                  <link.icon className="size-6 stroke-[1.5]" />
                  <p className="hidden md:block">{link.title}</p>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="md:hidden">
              <p>{link.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </>
  );
}
