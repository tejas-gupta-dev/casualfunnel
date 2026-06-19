import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">

      
      <img
        src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop"
        alt="Fashion Model"
        className="absolute inset-0 h-full w-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/60" />

    
      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="max-w-4xl px-6 text-center text-white">

          
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              text-sm
              font-medium
              mb-8
            "
          >
            ✨ New Summer Collection 2026
          </span>

          
          <h1
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-tight
              mb-6
            "
          >
            Discover Your

            <span
              className="
                block
                bg-gradient-to-r
                from-pink-400
                via-purple-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Perfect Style
            </span>
          </h1>

          
          <p
            className="
              text-lg
              md:text-xl
              text-gray-200
              max-w-2xl
              mx-auto
              mb-10
            "
          >
            Explore premium western wear,
            ethnic collections and trendy fashion
            curated for every occasion.
          </p>

        

        </div>

      </div>

      
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-10
        "
      >

        <div
          className="
            flex
            gap-10
            px-8
            py-5
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
          "
        >

          <div className="text-center">
            <h3 className="text-3xl font-bold">
              65+
            </h3>

            <p className="text-sm text-gray-300">
              Premium Products
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold">
              15K+
            </h3>

            <p className="text-sm text-gray-300">
              Happy Customers
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold">
              4.9★
            </h3>

            <p className="text-sm text-gray-300">
              Customer Rating
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;