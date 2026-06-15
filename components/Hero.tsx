import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-teal-800 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* If hero.jpeg is missing, the teal-800 section background shows through */}
        <Image
          src="/images/hero.jpeg"
          alt="כלב מטייל בתל אביב"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          דוגווקינג ודוגסיטינג
          <br />
          בתל אביב
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow">
          טיולים אוהבים ושמירה ביתית לכלב שלכם — בכל רחבי תל אביב
        </p>
        <CTAButton className="text-xl px-10 py-5">תיאום תור לטיול</CTAButton>
      </div>
    </section>
  );
}
