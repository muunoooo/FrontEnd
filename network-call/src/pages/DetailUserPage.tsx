import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axioss from "../helpers/axioss";

function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const { data } = await axioss.get(`/user/${id}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();
  console.log(user);
  
  return (
    <div className="w-full h-[90vh] bg-gray-400 flex flex-col justify-center items-center">
        <div 
        className="flex w-32 h-32 cursor-pointer font-bold text-4xl
        rounded-full bg-teal-500 items-center justify-center border">
            {user?.username.charAt(0)}
        </div>
      <h1 className=" text-white font-bold">This is : {user?.username}</h1>
      <h1 className=" text-white font-bold">Email : {user?.email}</h1>
      <h1 className=" text-white font-bold">this is{user?.password}</h1>
    </div>
  );
}

export default DetailUserPage;
