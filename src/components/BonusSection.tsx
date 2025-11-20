import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import bonus1 from "@/assets/bonus-1.png";
import bonus2 from "@/assets/bonus-2.png";
import bonus3 from "@/assets/bonus-3.png";
import bonus4 from "@/assets/bonus-4.png";
import bonus5 from "@/assets/bonus-5.png";
import bonus6 from "@/assets/bonus-6.png";
import bonus7 from "@/assets/bonus-7.png";
import bonus8 from "@/assets/bonus-8.png";
export function BonusSection() {
  const bonuses = [{
    number: 1,
    title: "31 Provérbios Explicados",
    subtitle: "Versículo por Versículo",
    description: "Entenda 31 provérbios explicados versículo por versículo com clareza e profundidade.",
    image: bonus1
  }, {
    number: 2,
    title: "Evangelho de Mateus Explicado",
    subtitle: "Versículo por Versículo",
    description: "Desvende o Evangelho de Mateus com explicações detalhadas, fáceis de entender, versículo por versículo.",
    image: bonus2
  }, {
    number: 3,
    title: "Evangelho de Marcos Explicado",
    subtitle: "Versículo por Versículo",
    description: "Desvende o Evangelho de Marcos com explicações detalhadas, fáceis de entender, versículo por versículo.",
    image: bonus3
  }, {
    number: 4,
    title: "Evangelho de Lucas Explicado",
    subtitle: "Versículo por Versículo",
    description: "Desvende o Evangelho de Lucas com explicações detalhadas, fáceis de entender, versículo por versículo.",
    image: bonus4
  }, {
    number: 5,
    title: "Evangelho de João Explicado",
    subtitle: "Versículo por Versículo",
    description: "Desvende o Evangelho de João com explicações detalhadas, fáceis de entender, versículo por versículo.",
    image: bonus5
  }, {
    number: 6,
    title: "100 Versículos do Antigo Testamento",
    subtitle: "",
    description: "Receba os 100 versículos mais impactantes e reveladores do antigo testamento explicado e aumente seu conhecimento bíblico.",
    image: bonus6
  }, {
    number: 7,
    title: "100 Versículos do Novo Testamento",
    subtitle: "",
    description: "Receba os 100 versículos mais impactantes e reveladores do novo testamento explicado e aumente seu conhecimento bíblico.",
    image: bonus7
  }, {
    number: 8,
    title: "Coleção Ouro - 200 Versículos Mais Reveladores da Bíblia",
    subtitle: "",
    description: "Separamos 200 versículos que 99% dos cristãos não conhecem, mas que trazem mensagens ocultas e reveladoras. Explicações Simples de entender!",
    image: bonus8
  }];
  return <div className="bg-[#1a202c] py-16 px-4">
      <div className="max-w-[1200px] mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <ChevronDown className="w-12 h-12 text-destructive animate-bounce" />
        </div>
        <ChevronDown className="w-12 h-12 text-destructive mx-auto animate-bounce" style={{
        animationDelay: '0.2s'
      }} />
        <ChevronDown className="w-12 h-12 text-destructive mx-auto animate-bounce" style={{
        animationDelay: '0.4s'
      }} />
        
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{
        textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
      }}>
          E NÃO PARA POR AÍ...<br />
          TEM MAIS!
        </h2>
        
        <p className="text-[#f7ff00] text-xl font-semibold" style={{
        textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
      }}>
        Você também vai receber...
      </p>
      
      <div className="inline-block text-black font-black text-xl md:text-2xl px-8 py-3 rounded-none bg-[#f7ff00]">
        8 bônus exclusivos
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {bonuses.map(bonus => (
          <Card
            key={bonus.number}
            className="border-0 overflow-hidden bg-white rounded-[20px] shadow-md w-[280px] h-[560px]"
          >
            <CardContent className="p-0 h-full flex flex-col">
              {/* Imagem do produto */}
              <div className="p-4 pt-6 flex items-center justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="h-[120px] w-auto object-contain"
                />
              </div>

              {/* Faixa amarela */}
              <div className="bg-[#f7ff00] text-center py-2">
                <span className="font-extrabold tracking-tight text-[13px]">#{bonus.number} - BÔNUS HOJE!</span>
              </div>

              {/* Linha divisória grossa */}
              <div className="border-t-[3px] border-black mx-6"></div>

              {/* Conteúdo textual */}
              <div className="px-6 pt-4 text-center flex-1 flex flex-col">
                <h3 className="font-black text-[18px] leading-[1.15] text-black">
                  {bonus.title}
                </h3>
                {bonus.subtitle && (
                  <>
                    <p className="text-[#e11d48] font-semibold italic text-[14px] mt-1">
                      {bonus.subtitle}
                    </p>
                    <div className="border-t-[3px] border-black mt-2"></div>
                  </>
                )}
                {!bonus.subtitle && <div className="border-t-[3px] border-black mt-2"></div>}
                <p className="text-[14px] text-black leading-relaxed mt-3">
                  {bonus.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </div>;
}