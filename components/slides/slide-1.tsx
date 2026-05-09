import Image from "next/image"

export default function Slide1() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">الميكروبليدنغ</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        تقنية أكثر سطحية (من 0.2 إلى 0.3 ملم)، يدوية، تعطي نتيجة أكثر طبيعية لكنها أقل ديمومة (من 6 إلى 12 شهراً حسب البشرة والعناية بعد الجلسة).
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/microblading-diagram.png"
          alt="رسم توضيحي للميكروبليدنغ يبيّن الاختراق السطحي من 0.2 إلى 0.3 ملم"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
