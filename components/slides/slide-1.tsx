import Image from "next/image"

export default function Slide1() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">MICROBLADING</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        A more superficial technique (0.2 to 0.3 mm), manual, with a more natural result but less durable (6 to 12
        months depending on the skin and aftercare).
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/microblading-diagram.png"
          alt="Microblading diagram showing superficial penetration of 0.2 to 0.3 mm"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
