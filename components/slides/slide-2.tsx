import Image from "next/image"

export default function Slide2() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-lg sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">
        SEMI-PERMANENT MAKEUP (DERMOGRAPH)
      </h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        The pigment is inserted at a depth of 0.5 to 0.8 mm using an electric device, lasting 2 to 5
        years.
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/semi-permanent-diagram.png"
          alt="Semi-permanent makeup diagram showing intermediate depth of 0.5 to 0.8 mm"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
