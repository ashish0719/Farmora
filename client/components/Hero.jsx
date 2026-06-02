import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EA]">
      {/* Background */}
      <div
        className="absolute inset-0
        bg-gradient-to-r
        from-[#FFF8EA]
        via-[#F8E9B8]
        to-[#F4D98A]"
      />

      {/* Soft Glow */}
      <div
        className="absolute
        -top-24 -right-24
        w-[300px] h-[300px]
        rounded-full
        bg-[#FFE8A3]/20
        blur-[90px]"
      />

      {/* Main Container */}
      <div
        className="relative z-10
        max-w-[1500px] mx-auto
        px-4 sm:px-6 lg:px-8
        py-8 md:py-10 lg:py-14
        grid md:grid-cols-2
        items-center
        gap-5 sm:gap-7 lg:gap-10"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <p className="text-[#7B9B3A] font-medium text-sm">
            100% Natural & Organic
          </p>

          <h1
            className="font-bold
            text-[#2E1F12]
            leading-tight
            text-4xl
            sm:text-5xl
            lg:text-6xl"
          >
            Go Fresh <span className="text-[#E88A17]">Fruits</span>,
            <br />
            Better Life
          </h1>

          <p
            className="max-w-md
            text-[#6D5B45]
            text-sm
            sm:text-base"
          >
            Farm fresh fruits delivered directly to your doorstep.
          </p>

          <button
            className="px-6 py-3
            rounded-full
            bg-[#E88A17]
            hover:bg-[#d97706]
            text-white
            shadow-md
            transition"
          >
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative
          flex justify-center
          md:justify-end
          items-center"
        >
          {/* Shadow */}
          <div
            className="absolute
            bottom-[12%]
            w-[180px]
            sm:w-[240px]
            lg:w-[300px]
            h-[35px]
            rounded-full
            bg-black/10
            blur-3xl"
          />

          {/* Bowl Image */}
          <Image
            src="/Images/FB.png"
            alt="Fruit Bowl"
            width={900}
            height={900}
            priority
            className="relative z-10
            w-[260px]
            sm:w-[340px]
            md:w-[430px]
            lg:w-[620px]
            xl:w-[700px]
            h-auto
            object-contain"
          />
        </div>
      </div>
    </section>
  );
}
