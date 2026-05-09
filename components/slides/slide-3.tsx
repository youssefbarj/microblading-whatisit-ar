import Image from "next/image"

export default function Slide3() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">الوشم الدائم</h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
        تُحقن الصبغة في الأدمة (الطبقة العميقة)، مما يجعلها دائمة.
      </p>

      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/permanent-tattoo-diagram.png"
          alt="رسم توضيحي للوشم الدائم يبيّن الحقن العميق في الأدمة"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>

      {/* This is the key sentence, now outside the red box, styled prominently. */}
      <p className="text-gray-800 text-base sm:text-xl font-bold mt-6 sm:mt-8 text-center leading-relaxed">
        الميكروبليدنغ ليس وشماً دائماً: يجب ألا تخترق الإبرة البشرة بعمق، ويجب ألا تنزف العميلة تحت أي ظرف من الظروف.
      </p>

    </div>
  )
}
