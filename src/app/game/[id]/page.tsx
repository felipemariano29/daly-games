import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/game-card";

async function getGame(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      {
        cache: "no-store",
      }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch games");
  }
}

async function getRandomGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      {
        cache: "no-store",
      }
    );
    console.log(response);

    return response.json();
  } catch (err) {
    throw new Error("Failed to fetch games");
  }
}

export default async function Game({
  params: { id },
}: {
  params: { id: string };
}) {
  const game: GameProps = await getGame(id);
  const randomGame: GameProps = await getRandomGame();

  if (!game) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative overflow-hidden">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-80 hover:opacity-100 hover:scale-[1.03] transition duration-300"
          src={game.image_url}
          alt={game.title}
          fill={true}
          priority={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{game.title}</h1>

        <p>{game.description}</p>
        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>

        <div className="flex gap-2 flex-wrap">
          {game.platforms.map((platform) => (
            <Label key={platform} name={platform} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>

        <div className="flex gap-2 flex-wrap">
          {game.categories.map((category) => (
            <Label key={category} name={category} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          Data de Lançamento: <strong>{game.release}</strong>
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo Recomendado:</h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard game={randomGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
