import Image from "next/image";

export default function GeovasiTeam() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Rifat */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/Rifat.jpg"
              alt="Rifat Sr. Geologist"
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              M Rifat Noor, M.Sc
            </h2>
            <p className="text-lg font-semibold">as Senior Geologist</p>
          </div>
        </div>
        {/* Razzaq */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/M. Razzaq.jpg"
              alt="Rifat Sr. Geologist"
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              M Razzaaq AG, S.T., M.T.
            </h2>
            <p className="text-lg font-semibold">as Hydrogeologist</p>
          </div>
        </div>
        {/* Fardy */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/Fardy Septiawan.jpg"
              alt="Rifat Sr. Geologist"
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              Fardy Septiawan, S.Si
            </h2>
            <p className="text-lg font-semibold">as Geophysicist</p>
          </div>
        </div>
        {/* Hilmi */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/Hilmi .jpg"
              alt="Hilmi"
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              Hilmi EHF, S.Si, M.Geosch
            </h2>
            <p className="text-lg font-semibold">as Geophysicist</p>
          </div>
        </div>
        {/* Ridho */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/Ridho Nanda.jpg"
              alt="Ridho Nanda, P,S.T."
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              Ridho Nanda P, S.T.
            </h2>
            <p className="text-lg font-semibold">
              as Health, Safety, and Environment
            </p>
          </div>
        </div>
        {/* Siti */}
        <div className="card bg-[#34495e] rounded-lg w-[260px] h-[370px]">
          <figure className="px-10 pt-10">
            <Image
              src="/Team/Siti Khodijah.jpg"
              alt="Rifat Sr. Geologist"
              width={120}
              height={120}
              className="object-cover rounded-xl border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-xl">
              Siti Khodijah, A.Ma.
            </h2>
            <p className="text-lg font-semibold">as Admin</p>
          </div>
        </div>
      </div>
    </main>
  );
}
