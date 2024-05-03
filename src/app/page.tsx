import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";

import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "@/components/input";

async function getDailyGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      {
        next: { revalidate: 320 },
      }
    );

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch daily game");
  }
}

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl my-8">
          Separamos um jogo exclusivo para você!
        </h1>

        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-10 bottom-0 p-3 flex justify-center align-center gap-2">
                <p className="font-bold text-xl text-white">
                  {dailyGame.title}
                </p>

                <BsArrowRightSquare size={24} color="white" />
              </div>

              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                priority={true}
                quality={100}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)  33vw"
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition duration-300"
              />
            </div>
          </section>
        </Link>

        <Input />
      </Container>
    </main>
  );
}
