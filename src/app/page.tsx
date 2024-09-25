import React from "react";

const page = () => {
  return (
    <>
      <h1 className="font-semibold text-[20px] text-center mt-10 font-poiret_one">
        Hallstatt - Kelana sang Pujangga
      </h1>
      <div className="container max-w-[1100px] mx-auto mt-2 md:p-0 p-5">
        <div className="relative">
          <video
            autoPlay
            loop
            className="absolute inset-0 w-[932px] h-[full] object-cover z-0 rounded-2xl"
          >
            <source src="/images/instrument.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
        </div>
        <div className="relative z-10 bg-cover bg-no-repeat bg-center p-1 py-10 md:py-10 mt-48">
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            Pertemuan waktu itu
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            bukan kehendakku
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            bukan juga kehendakmu
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one mb-6">
            takdirlah, ucap alam
          </p>

          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            Aku bertanya pada takdir
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            kemana hatiku berlabuh
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one ">
            atau hatiku hanya tempat berteduh
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one mb-6">
            meneduh, lantas pergi
          </p>

          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            jalanku lelah tak tahu arah
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            untuk hati yang tak punya ruang
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            untuk rindu yang beku
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            Apa perlu aku ke Hallstatt
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            Sejenak menepi
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one mb-6">
            mengistirahatkan hati
          </p>

          <h2 className="font-semibold text-[20px] text-center mt-10 font-poiret_one mb-6">
            Kepada Ombak Aku Berteriak
          </h2>

          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            Ombak adalah puisi
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            yang ditulis laut pada pantai
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            hujan adalah puisi
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            yang ditulis langit pada tanah
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            napas adalah puisi
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one mb-6">
            yang ditulis Udara pada kehidupan
          </p>

          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            kau adalah puisi
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one">
            yang ditulis tuhan pada diriku
          </p>
          <p className="text-[16px] font-semibold text-gray-700 font-poiret_one mb-6">
            meskipun hanya cukup untuk kukagumi
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
