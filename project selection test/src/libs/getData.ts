import axios from "axios";

export function getData() {
  try {
    // const data = axios.get("https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain")
    const data = `
        HHWSVKDSZDWYZUDVBTNKUSDRSYYTBBPU
        CUEFVATPOEZWMAONUMDUUTRCBCWPOZHU
        QHRLPQAMKIPFCCSZTBMPSKBMWSSJJEIQ
        BKXKMYAAMNYLFAKZRQDXATZGFNFMGXZE
        VNCVYUDZHEZWFJNBVLYBLRBUHKTATQBV
        NONDTHYZOBIAHJHOEESPFCMUXLUJNUGR
        NLUSFYIYVNULIOCOSHKIVVUGKRSEOGPK
        HXZVRQFYIFLNXEWQVWTFSEAQPHENWVHS
        UPPTPIUWQFRVHEIKFLCMUVWUDEVZIVTY
        TYUSMQFCKARAJCFKWLHAPGSJHNHTYZWD
      `;
    // const x = JSON.stringify(data).split("")
    const res = data.split("");

    return res;
  } catch (err) {
    console.error(err);
  }
}
