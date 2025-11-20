import { CTAButton } from "./CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Home, Heart } from "lucide-react";

export function IdealFor() {
  const items = [
    {
      icon: Users,
      title: "Compreensão Profunda e Simplificada dos Salmos:",
      description: "O leitor finalmente entenderá cada versículo dos salmos com explicações claras e práticas, tornando a leitura da Bíblia mais acessível e significativa."
    },
    {
      icon: BookOpen,
      title: "Resolução de Dúvidas Bíblicas Comuns:",
      description: "O leitor terá respostas para os versículos mais desafiadores ou mal interpretados, eliminando frustrações e incertezas em seu estudo da Bíblia."
    },
    {
      icon: Home,
      title: "Aprofundamento Espiritual e Conexão com Deus:",
      description: "Com uma visão mais clara dos salmos, o leitor sentirá um crescimento espiritual, maior proximidade com os ensinamentos de Jesus e renovação de sua fé."
    }
  ];

  return (
    <div className="space-y-10 bg-[#efefef] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <h3 className="text-center text-destructive font-extrabold text-3xl md:text-5xl tracking-tight">
          IDEAL PARA VOCÊ QUE DESEJA:
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="bg-white border-0 rounded-[18px] shadow-sm">
              <CardContent className="pt-10 pb-8 px-8 text-center space-y-4">
                <item.icon className="w-20 h-20 text-black mx-auto" strokeWidth={1.5} />
                <h4 className="font-extrabold text-[20px] text-destructive leading-tight">
                  {item.title}
                </h4>
                <p className="text-[15px] text-card-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border-0 rounded-[18px] shadow-sm mt-2">
          <CardContent className="py-8 px-8 text-left">
            <div className="flex items-start gap-6">
              <Heart className="w-16 h-16 text-black flex-shrink-0" strokeWidth={1.5} />
              <div className="space-y-2">
                <h4 className="font-extrabold text-[20px] text-destructive leading-tight">
                  Aplicação Prática dos Ensinamentos de Salmos:
                </h4>
                <p className="text-[15px] text-card-foreground/80 leading-relaxed">
                  O Estudo ajudará o leitor a traduzir os ensinamentos bíblicos para ações concretas em sua vida diária,
                  fortalecendo sua fé e seus relacionamentos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-2">
          <CTAButton href="#planos" variant="hero">
            QUERO ADQUIRIR O MEU
          </CTAButton>
        </div>
      </div>
    </div>
  );
}