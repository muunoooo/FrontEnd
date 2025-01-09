import { useState } from "react";
import {
  addCard,
  countDoubles,
  flipCards,
  handleRemoveByInput,
  removeDuplicates,
  renderDots,
  resetData,
  sortDominoes,
} from "./utils";
import {
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
  CopyMinus,
  FlipVertical2,
  ListRestart,
} from "lucide-react";
import { defaultDominoes } from "./data";

export default function App() {
  const [dominoes, setDominoes] = useState<[number, number][]>(defaultDominoes);
  const [removeTotalInput, setRemoveTotalInput] = useState<number | "">("");
  const [cardA, setCardA] = useState<number>(0); 
  const [cardB, setCardB] = useState<number>(0); 

  const handleAddCard = () => {
    addCard(cardA, cardB, setDominoes);
    setCardA(0); 
    setCardB(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl font-bold text-center text-teal-800 mb-4">
        Dominoes Selection Test
      </h1>
      <div className="flex">
        <div className="flex flex-col">
          {/* Display dominoes */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="text-xl font-semibold text-teal-700 mb-4">
              Domino Cards:
            </div>
            <div className="w-full sm:w-auto grid grid-cols-3  gap-4 mb-8">
              {dominoes.map(([a, b], index) => {
                const isDouble = a === b;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-gray-700 border-2 border-gray-600 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {renderDots(a, isDouble)}
                    </div>
                    <div className="w-full h-0.5 bg-gray-600 my-2"></div>
                    <div className="grid grid-cols-3 gap-1">
                      {renderDots(b, isDouble)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Display Manipulate */}
          <div>
            <div className="text-xl font-semibold text-teal-700 mt-5">
              Domino Manipulate :
            </div>
            <div className="flex gap-1">
              {dominoes.map(([a, b], index) => (
                <div key={index} className="w-10">
                  [{a}, {b}]
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Display double count */}
          <p className="text-lg font-semibold text-teal-700">
            Doubles Count: {countDoubles(dominoes)}
          </p>

          {/* Buttons for features */}
          <div className="controls flex flex-col gap-4 w-full max-w-sm mx-auto">
            <div className="flex gap-4 justify-center">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => setDominoes(sortDominoes(dominoes, "asc"))}
                title="Card Sort Descending"
              >
                <ArrowDownNarrowWide className="w-5 h-5" />
              </button>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => setDominoes(sortDominoes(dominoes, "desc"))}
                title="Card Sort Ascending"
              >
                <ArrowUpNarrowWide className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => setDominoes(removeDuplicates(dominoes))}
                title="Erase Sum Duplicate"
              >
                <CopyMinus className="w-5 h-5" />
              </button>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => setDominoes(flipCards(dominoes))}
                title="Switch Card"
              >
                <FlipVertical2 className="w-5 h-5" />
              </button>
            </div>

            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition mx-auto"
              onClick={() => setDominoes(resetData(defaultDominoes))}
              title="Reset Data"
            >
              <ListRestart className="w-5 h-5" />
            </button>

            {/* Input to remove cards by total */}
            <div className="flex flex-col items-center gap-4 mt-6">
              <input
                type="number"
                placeholder="Enter total to remove"
                value={removeTotalInput}
                onChange={(e) =>
                  setRemoveTotalInput(
                    e.target.value === "" ? "" : +e.target.value
                  )
                }
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() =>
                  setDominoes(handleRemoveByInput(dominoes, removeTotalInput))
                }
              >
                Remove Cards by Input
              </button>

              <div>
                <div className="mb-4">
                  <input
                    type="number"
                    value={cardA}
                    onChange={(e) => setCardA(Number(e.target.value))}
                    max="6"
                    min="0"
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter first number (0-6)"
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="number"
                    value={cardB}
                    onChange={(e) => setCardB(Number(e.target.value))}
                    max="6"
                    min="0"
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter second number (0-6)"
                  />
                </div>

                <button
                  onClick={handleAddCard}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Add Domino ({cardA}, {cardB})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
