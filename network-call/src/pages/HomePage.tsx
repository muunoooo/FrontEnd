import { useEffect, useState } from "react";
import axios from "../helpers/axioss";
import { IUser } from "../types/user";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const handleDelete = async (user: IUser) => {
  const confirmSubmit = confirm(
    `are you sure, you want to delete ${user.username}?`
  );

  if (confirmSubmit) {
    try {
      await axios.delete(`/user/${user.id}`);
      alert(`${user} has been deleted`);
    } catch (err) {
      console.log(err);
    }
  }
};

function Homepage() {
    const navigate = useNavigate()
  const [users, setUsers] = useState<IUser[]>([]);
  const getData = async () => {
    try {
      const { data } = await axios.get("/user");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div
      className=" w-full h-auto 
    flex items-center text-center justify-center 
    bg-black
    text-white font-bold font-serif
    mt-10"
    >
      <table className=" table-auto">
        <thead className="p-4 bg-[#FF4191] text-black border">
          <tr>
            <th className="p-2 min-w-[40px] ">No</th>
            <th className="p-2 min-w-[200px]">Username</th>
            <th className="p-2 min-w-[200px] items-center justify-center">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr 
                key={idx}
                className=" bg-[#FFF078] text-black border hover:bg-sky-300 hover:animate-pulse
                  "
              >
                <td className="p-2 min-w-[40px]">{idx + 1}</td>
                <td onClick={() => navigate(`/${item.id}`)} className="p-2 min-w-[40px] cursor-pointer">{item.username}</td>
                <td className="p-2 min-w-[40px]">{item.email}</td>
                <td className=" bg-center">
                  <button>
                    <TiDelete
                      onClick={() => handleDelete(item)}
                      className=" hover:pointer-events-auto"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Homepage;
