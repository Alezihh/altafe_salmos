import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProductDetails() {
  const features = [
    "150 Salmos Explicado Versículo por Versículo",
    "Ideia Central do Texto;",
    "Data e Autoria;",
    "Categoria do Salmo;",
    "Contexto Histórico, Cultural e Teológico;",
    "Como Aplicar os Ensinamentos do Salmo no Dia a Dia;",
    "Curiosidade sobre o Salmo;",
    "Ilustrações no Material;",
    "Espaço para Anotações;"
  ];

  return (
    <div className="bg-[#1a202c] py-8 md:py-16 px-4">
      <div className="max-w-[1100px] mx-auto space-y-6 md:space-y-8">
        <div className="text-center">
          <div className="inline-block bg-[#f7ff00] text-black font-black text-sm md:text-xl lg:text-2xl px-4 md:px-8 py-2 md:py-3 mb-4 md:mb-8">
            VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_540px] gap-6 md:gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png"
              alt="Produto - 150 Salmos Explicados"
              className="w-full max-w-full md:max-w-[520px] mx-auto"
            />
          </div>

          <Card className="order-1 md:order-2 bg-white border-2 border-black/10 shadow-2xl rounded-[20px] p-4 md:p-6 lg:p-10 w-full md:w-[540px] mx-auto">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="bg-[#f7ff00] text-center px-4 md:px-6 py-1.5 md:py-2 rounded-sm">
                <span className="font-extrabold tracking-tight text-sm md:text-[18px]">ITEM 01</span>
              </div>
            </div>

            <h3 className="text-center text-xl md:text-[28px] lg:text-[30px] font-black leading-[1.15] text-black">
              Todos Os 150 Salmos<br />
              Bíblicos Explicados
            </h3>
            <p className="text-center text-destructive font-semibold italic text-sm md:text-[18px] mt-2">
              Versículo por Versículo
            </p>

            <div className="border-t-[3px] border-black mt-4 md:mt-6 mb-3 md:mb-4"></div>

            <ul className="space-y-2 md:space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm lg:text-[15px] leading-relaxed text-black">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-center font-semibold mt-4 md:mt-6 text-sm md:text-base text-muted-foreground">
              E muito mais...
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
