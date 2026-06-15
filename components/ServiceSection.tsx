import Image from "next/image";
import CTAButton from "./CTAButton";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "right" | "left";
  id: string;
}

export default function ServiceSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  id,
}: ServiceSectionProps) {
  const isImageRight = imagePosition === "right";

  return (
    <section
      id={id}
      className={`py-16 px-6 ${isImageRight ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`flex flex-col gap-10 items-center ${
            isImageRight ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image side */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-teal-100 shadow-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 leading-snug">
              {title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
            <div>
              <CTAButton>תיאום טיול</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
