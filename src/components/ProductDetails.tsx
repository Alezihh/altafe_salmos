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
    <div className="bg-[#1a202c] py-16 px-4">
      <div className="max-w-[1100px] mx-auto space-y-8">
        <div className="text-center">
          <div className="inline-block bg-[#f7ff00] text-black font-black text-xl md:text-2xl px-8 py-3 mb-8">
            VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_540px] gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png"
              alt="Produto - 150 Salmos Explicados"
              className="w-full max-w-[520px] mx-auto"
            />
          </div>

          <Card className="order-1 md:order-2 bg-white border-2 border-black/10 shadow-2xl rounded-[20px] p-10 w-[540px]">
            <div className="flex justify-center mb-6">
              <div className="bg-[#f7ff00] text-center px-6 py-2 rounded-sm">
                <span className="font-extrabold tracking-tight text-[18px]">ITEM 01</span>
              </div>
            </div>

            <h3 className="text-center text-[28px] md:text-[30px] font-black leading-[1.15] text-black">
              Todos Os 150 Salmos<br />
              Bíblicos Explicados
            </h3>
            <p className="text-center text-destructive font-semibold italic text-[18px] mt-2">
              Versículo por Versículo
            </p>

            <div className="border-t-[3px] border-black mt-6 mb-4"></div>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] leading-relaxed text-black">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-center font-semibold mt-6 text-muted-foreground">
              E muito mais...
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
