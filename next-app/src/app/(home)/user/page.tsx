import Link from "next/link";

export default function Userpage() {
  const data = [
    { id: 1, name: "andi" },
    { id: 2, name: "budi" },
    { id: 3, name: "caca" },
  ];
  return (
    <div className="text-center flex flex-col">
      {data.map((item, idx) => {
        return (
          <Link href={`/user/${item.id}`} key={idx}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
