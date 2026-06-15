export default function ServicesOverview() {
  return (
    <section className="bg-teal-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 text-center mb-12">
          מה אנחנו מציעים?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card: Dogwalking */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="text-5xl mb-4">🐕</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3">
              דוגווקינג
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              טיולים יומיים לכלב שלכם בכל אזורי תל אביב, עם גמישות בשעות
              ותשומת לב אישית לכל כלב.
            </p>
          </div>

          {/* Card: Dogsitting */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3">
              דוגסיטינג
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              שמירה חמה ואוהבת על הכלב שלכם — אצלכם בבית או אצלנו בתל אביב,
              בסביבה מוכרת ובטוחה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
