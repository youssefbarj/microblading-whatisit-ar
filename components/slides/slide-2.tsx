import Image from "next/image"

export default function Slide2() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg max-w-sm sm:max-w-2xl mx-auto">
      <h2 className="text-lg sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">
        المكياج شبه الدائم (الديرموغراف)
      </h2>
      <p className="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        تُدخل الصبغة على عمق يتراوح بين 0.5 و0.8 ملم باستخدام جهاز كهربائي، وتدوم من سنتين إلى 5 سنوات.
      </p>
      <div className="mt-4 sm:mt-6 flex justify-center">
        <Image
          src="/images/semi-permanent-diagram.png"
          alt="رسم توضيحي للمكياج شبه الدائم يبيّن العمق المتوسط من 0.5 إلى 0.8 ملم"
          width={320}
          height={256}
          className="sm:w-[400px] sm:h-[320px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
