import { dominoPositon } from "./data";

export const countDoubles = (dominoes: [number, number][]): number => {
  return dominoes.filter(([a, b]) => a === b).length;
};

export const sortDominoes = (
  dominoes: [number, number][],
  order: "asc" | "desc"
): [number, number][] => {
  const grouped = dominoes.reduce<Record<number, [number, number][]>>((acc, item) => {
    const total = item[0] + item[1];
    if (!acc[total]) acc[total] = [];
    acc[total].push(item);
    return acc;
  }, {});

  const sortedTotals = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => (order === "asc" ? a - b : b - a));

  return sortedTotals.flatMap(total => grouped[total]);
};


export const removeDuplicates = (
  dominoes: [number, number][]
): [number, number][] => {
  const uniqueDominoes: Set<string> = new Set();
  const duplicates: Set<string> = new Set();

  dominoes.forEach(item => {
    const sortedItem = [...item].sort((a, b) => a - b).join(',');

    if (uniqueDominoes.has(sortedItem)) {
      duplicates.add(sortedItem);
    } else {
      uniqueDominoes.add(sortedItem);
    }
  });

  return dominoes.filter(item => {
    const sortedItem = [...item].sort((a, b) => a - b).join(','); 
    return !duplicates.has(sortedItem);
  });
};




export const flipCards = (dominoes: [number, number][]): [number, number][] => {
  return dominoes.map(([a, b]) => [b, a]);
};

const removeByTotal = (
  dominoes: [number, number][],
  total: number
): [number, number][] => {
  return dominoes.filter(([a, b]) => a + b !== total);
};

export const handleRemoveByInput = (
  dominoes: [number, number][],
  input: number | ""
): [number, number][] => {
  if (input === "") return dominoes;
  return removeByTotal(dominoes, input);
};

export const resetData = (
  defaultDominoes: [number, number][]
): [number, number][] => {
  return [...defaultDominoes];
};
export const addCard = (
  a: number,
  b: number,
  setDominoes: React.Dispatch<React.SetStateAction<[number, number][]>>
) => {
  if (a <= 6 && b <= 6) {
    setDominoes((prevDominoes) => [...prevDominoes, [a, b]]);
  } else {
    alert("Max Number is 6.");
  }
};

export const renderDots = (number: number, isDouble: boolean) => {
  const positions = dominoPositon[number] || [];

  return Array.from({ length: 9 }, (_, idx) => (
    <div
      key={idx}
      className={`flex justify-center items-center h-2 w-2 ${
        positions.includes(idx + 1)
          ? isDouble
            ? "bg-orange-400 rounded-full" 
            : "bg-teal-400 rounded-full" 
          : "text-transparent"
      }`}
    ></div>
  ));
};
