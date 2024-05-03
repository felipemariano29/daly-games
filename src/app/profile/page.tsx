import { Container } from "@/components/container";
import Image from "next/image";
import userImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite-card";

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="my-8 flex flex-col sm:flex-row items-center justify-between relative gap-3">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Imagem de perfil"
              className="rounded-full size-56 object-cover"
            />

            <h1 className="font-bold text-2xl">Felipe</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 p-4 rounded-lg text-white">
              Configurações
            </button>

            <button className="bg-gray-700 p-4 rounded-lg">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>

        <section className="w-full flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
