import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";

export function GameCard({ game }: { game: GameProps }) {
  return (
    <Link href={`/game/${game.id}`}>
      <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <div className="relative w-full rounded-lg h-56 hover:scale-105 transition duration-300">
          <Image
            src={game.image_url}
            alt={game.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-between align-center gap-4 mt-2">
          <p className="text-sm font-bold px-2 text-black truncate overflow-hidden">
            {game.title}
          </p>

          <BiRightArrowCircle size={24} color="#000" />
        </div>
      </section>
    </Link>
  );
}
