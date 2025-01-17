import DeleteUser from "@/components/deleteUser";
import { IUser } from "@/types/user";

async function getData(): Promise<{ users: IUser[] }> {
  const res = await fetch("http://localhost:8000/api/users");
  next: {
    tags: ["users"];
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserPage() {
  const data = await getData();

  return (
    <div className=" flex justify-center items-center pt-14">
      <table className="table-auto mt-10 border">
        <thead className="p-4">
          <tr>
            <th className="p-2 border md:min-w-[50px]">No</th>
            <th className="p-2 border md:min-w-[200px]">Name</th>
            <th className="p-2 border md:min-w-[200px]">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-gray-100 cursor-pointer">
                <td className="p-2 border text-center">{idx + 1}</td>
                <td className="p-2 border text-center">{item.name}</td>
                <td className="p-2 border text-center">{item.email}</td>
                <DeleteUser id={+item.id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
