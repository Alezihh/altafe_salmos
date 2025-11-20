import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <div className="text-center space-y-8 max-w-5xl mx-auto">
      {/* Banner com fundo escuro igual à imagem */}
      <div className="py-6 px-6 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
          <span className="text-white">
            Todos os{" "}
          </span>
          <span className="text-accent font-bold underline decoration-accent decoration-2 underline-offset-2">
            150 SALMOS
          </span>
          <span className="text-accent font-bold">
            {" "}explicados
          </span>
          <br />
          <span className="text-white">
            versículo por versículo
          </span>
        </h1>
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
        <img
          src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png"
          alt="150 Salmos Explicados - Livro Digital com Material Completo"
          className="w-full mx-auto drop-shadow-2xl"
          loading="eager"
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
          Explicações detalhadas e fáceis de entender:<br />
          Cada versículo dos 150 SALMOS será explicado de forma clara, sem complicações 
          teológicas, para que você entenda a mensagem de imediato.{" "}
          <span className="text-accent font-extrabold" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            Por Apenas R$17,90
          </span>
        </p>

        <CTAButton variant="hero">
          QUERO ADQUIRIR O MEU
        </CTAButton>
      </div>
    </div>
  );
}
