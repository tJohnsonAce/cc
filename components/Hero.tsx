import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[60vh] min-h-[400px] max-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>
        <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}>
          <Image
            src="/heroImage.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Crafting Your Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Custom furniture designed and built with precision and care.
            </p>
            <button className="bg-light-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}