import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="bg-[#0d3645] w-full flex justify-center text-center">
      <div>
        <p className="text-3xl md:text-4xl text-[#45daf8] my-6">
          Founder Statement
        </p>
        <div
          className="rounded-lg w-full max-w-[300px] md:max-w-[500px] 
        flex flex-col md:flex-row bg-[#1a1a1a] shadow-lg overflow-hidden"
        >
          <figure className="flex-shrink-0">
            <Image
              src="/Team/Noviarso Wicaksono.jpg"
              alt="Founder"
              width={300}
              height={300}
              className="object-cover rounded-lg border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-[#3498db] font-bold text-2xl mb-2 italic">
              Noviarso Wicaksono
            </h2>
            <h3 className="text-lg font-medium mb-2">as Founder</h3>
            <h4 className="text-sm leading-relaxed">
              &quot;<span className="text-[#80e1ff]">Geovasi</span> comprises a
              team of highly motivated individuals who drive innovation in
              geoscience and related technologies. We prioritize good
              governance, valuing human safety and organizational
              integrity.&quot;
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
