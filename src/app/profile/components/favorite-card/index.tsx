"use client";

import { useState } from "react";
import { FiEdit, FiX, FiCheck } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleClick() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    } else {
      setGameName("");
    }

    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Nome do jogo"
            className="w-full rounded-md h-8 text-black p-1"
          />

          <button
            onClick={handleClick}
            className="self-start hover:scale-110 duration-300"
          >
            <FiCheck size={24} color="#fff" />
          </button>

          <button
            onClick={handleClick}
            className="self-start hover:scale-110 duration-300"
          >
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="self-start hover:scale-110 duration-300"
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}

      {gameName ? (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      ) : (
        <p className="font-bold text-white">Adicionar jogo</p>
      )}
    </div>
  );
}
