import { Card } from "@/components/ui/card";
export function MaterialBenefits() {
  const benefits = [
    { emoji: "⏰", title: "Leitura Rápida" },
    { emoji: "✅", title: "Fácil de entender" },
    { emoji: "📖", title: "100% Fiel a Bíblia" },
    { emoji: "🙏", title: "Proximidade de Deus" }
  ];
  return <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 style={{
        textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
      }} className="text-2xl font-extrabold md:text-5xl">
          <span className="text-accent">Você receberá um material único</span>{" "}
          <span className="text-accent underline decoration-2">totalmente ilustrado e organizado</span>{" "}
          <span className="text-[#f7ff00]">para facilitar a sua compreensão bíblica</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-[28px] px-8 py-6 bg-white/10 border border-white/15 text-white text-xl font-semibold flex items-center justify-center gap-3"
          >
            <span className="text-2xl" aria-hidden>{benefit.emoji}</span>
            <span>{benefit.title}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-white text-xl font-semibold max-w-3xl mx-auto" style={{
      textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
    }}>
        Nosso material irá transformar o seu estudo e<br />
        leitura bíblica! Simples, Prático e Fácil.
      </p>
    </div>;
}