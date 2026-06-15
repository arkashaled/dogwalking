import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services overview cards */}
      <ServicesOverview />

      {/* 3. Dogwalking — image on right */}
      <ServiceSection
        id="dogwalking"
        title="דוגווקינג בכל אזורי תל אביב"
        description="הכלב שלכם מגיע לטיול יומי עם מטייל מנוסה ואוהב. אני פעיל בכל שכונות תל אביב — מצפון העיר ועד יפו — ומתאים את שעות הטיול לצרכים שלכם. כל כלב מקבל תשומת לב אישית מלאה, בקצב שנוח לו ובנתיבים שהוא אוהב. אתם עובדים בשקט, הכלב שלכם נהנה מהאוויר הפתוח."
        imageSrc="/images/dogwalking.jpeg"
        imageAlt="דוגווקר מטייל עם כלב ברחובות תל אביב"
        imagePosition="right"
      />

      {/* 4. Dogsitting at client's home — image on left */}
      <ServiceSection
        id="dogsitting-home"
        title="דוגסיטינג בביתכם"
        description="יוצאים לחופשה או לפגישה ארוכה? אני מגיע אליכם הביתה ושומר על הכלב שלכם בסביבה המוכרת לו. הכלב נשאר בבית שלו, עם השגרה שלו, ולא צריך להסתגל למקום חדש. אני מטפל בו עם המון אהבה, מאכיל, מטייל ומשחק — בדיוק כפי שאתם הייתם עושים."
        imageSrc="/images/dogsitting-home.jpeg"
        imageAlt="דוגסיטר שומר על כלב בבית"
        imagePosition="left"
      />

      {/* 5. Dogsitting at owner's home — image on right */}
      <ServiceSection
        id="dogsitting-my-place"
        title="דוגסיטינג בביתי בתל אביב"
        description="מעדיפים שהכלב שלכם יהיה בסביבה חיה ואוהבת? אני מארח אותו אצלי בתל אביב — בבית פרטי, חם ובטוח. הכלב שלכם יקבל חיבוק, טיולים, ארוחות בזמן וכל הפינוקים. אני שולח עדכונים ותמונות לאורך היום כדי שתדעו שהכלב שלכם מאושר ובידיים טובות."
        imageSrc="/images/dogsitting-my-place.jpeg"
        imageAlt="כלב מאושר בדוגסיטינג בתל אביב"
        imagePosition="right"
      />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
