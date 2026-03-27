import Image from "next/image"

export default function Slide3() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">PERMANENT TATTOO</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
        The pigment is injected into the dermis (deeper layer), making it permanent.
      </p>

      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/permanent-tattoo-diagram.png"
          alt="Permanent tattoo diagram showing deep injection into the dermis"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
      
      {/* This is the key sentence, now outside the red box, styled prominently. */}
      <p className="text-gray-800 text-base sm:text-xl font-bold mt-6 sm:mt-8 text-center leading-relaxed">
        Microblading is not a permanent tattoo: the needle must not penetrate deeply into the skin and the client must not bleed under any circumstances.
      </p>

    </div>
  )
}
