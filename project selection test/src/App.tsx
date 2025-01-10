import { useState, useEffect } from "react";
import { getData } from "./libs/getData";

function App() {
  // const [data, setData] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getData();
  //     if (data) {
  //       console.log("Data fetched:", data);
  //       setData(data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const data = `
  //       HHWSVKDSZDWYZUDVBTNKUSDRSYYTBBPU
  //       CUEFVATPOEZWMAONUMDUUTRCBCWPOZHU
  //       QHRLPQAMKIPFCCSZTBMPSKBMWSSJJEIQ
  //       BKXKMYAAMNYLFAKZRQDXATZGFNFMGXZE
  //       VNCVYUDZHEZWFJNBVLYBLRBUHKTATQBV
  //       NONDTHYZOBIAHJHOEESPFCMUXLUJNUGR
  //       NLUSFYIYVNULIOCOSHKIVVUGKRSEOGPK
  //       HXZVRQFYIFLNXEWQVWTFSEAQPHENWVHS
  //       UPPTPIUWQFRVHEIKFLCMUVWUDEVZIVTY
  //       TYUSMQFCKARAJCFKWLHAPGSJHNHTYZWD
  //     `.split("");
  const data = getData()

  return (
    <div>
      Halo Purwadhika Student!
      <div>Source : {data}</div>
      <div className="flex flex-col text-center">
        <div>A: {data!.filter((item) => item === "A").length}</div>
        <div>B:{data!.filter((item) => item === "B").length}</div>
        <div>C:{data!.filter((item) => item === "C").length}</div>
        <div>D:{data!.filter((item) => item === "D").length}</div>
        <div>E:{data!.filter((item) => item === "E").length}</div>
        <div>F:{data!.filter((item) => item === "F").length}</div>
        <div>G:{data!.filter((item) => item === "G").length}</div>
        <div>H:{data!.filter((item) => item === "H").length}</div>
        <div>I:{data!.filter((item) => item === "I").length}</div>
        <div>J:{data!.filter((item) => item === "J").length}</div>
        <div>K:{data!.filter((item) => item === "K").length}</div>
        <div>L:{data!.filter((item) => item === "L").length}</div>
        <div>M:{data!.filter((item) => item === "M").length}</div>
        <div>N:{data!.filter((item) => item === "N").length}</div>
        <div>O:{data!.filter((item) => item === "O").length}</div>
        <div>P:{data!.filter((item) => item === "P").length}</div>
        <div>Q:{data!.filter((item) => item === "Q").length}</div>
        <div>R:{data!.filter((item) => item === "R").length}</div>
        <div>S:{data!.filter((item) => item === "S").length}</div>
        <div>T:{data!.filter((item) => item === "T").length}</div>
        <div>U:{data!.filter((item) => item === "U").length}</div>
        <div>V:{data!.filter((item) => item === "V").length}</div>
        <div>W:{data!.filter((item) => item === "W").length}</div>
        <div>X:{data!.filter((item) => item === "X").length}</div>
        <div>Y:{data!.filter((item) => item === "Y").length}</div>
        <div>Z:{data!.filter((item) => item === "Z").length}</div>
      </div>
    </div>
  );
}

export default App;
