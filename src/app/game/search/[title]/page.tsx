import { Container } from "@/components/container";
import { GameCard } from "@/components/game-card";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";

async function getGame(title: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch games");
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getGame(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />

        <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos:</h1>

        {!games && <p>Nenhum jogo encontrado...</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((game) => <GameCard key={game.id} game={game} />)}
        </section>
      </Container>
    </main>
  );
}
