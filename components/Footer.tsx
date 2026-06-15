import CTAButton from "./CTAButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Business name */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400">
            דוגווקינג תל אביב
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            שירות מקצועי ואוהב לכלב שלכם
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2 text-gray-300 text-base">
          <p>
            📞 טלפון:{" "}
            <span className="text-white font-medium">054-731-5598</span>
          </p>
          <p>
            ✉️ אימייל:{" "}
            <span className="text-white font-medium">arkashaled2@gmail.com</span>
          </p>
          <p className="text-gray-400 text-sm">
            פעיל בכל אזורי תל אביב, 7 ימים בשבוע
          </p>
        </div>

        {/* CTA */}
        <CTAButton>תיאום טיול</CTAButton>
      </div>
    </footer>
  );
}
