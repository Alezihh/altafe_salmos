import { CTAButton } from "./CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export function PricingSection() {
  const completePlanItems = ["150 Salmos Explicado Versículo por Versículo", "31 Provérbios Explicado Versículo por Versículo", "Evangelho de Matheus Explicado Versículo por Versículo", "Evangelho de Marcos Explicado Versículo por Versículo", "Evangelho de Lucas Explicado Versículo por Versículo", "Evangelho de João Explicado Versículo por Versículo", "100 Versículos do Antigo Testamento - Explicados", "100 Versículos do Novo Testamento - Explicados", "Coleção Ouro - 200 Versículos Reveladores - Explicado"];
  const basicCheckoutUrl = import.meta.env.VITE_CHECKOUT_URL_BASIC || "#SALMOS";
  const completeCheckoutUrl = import.meta.env.VITE_CHECKOUT_URL_COMPLETE || "#SALMOS";
  return <div className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <ChevronDown className="w-12 h-12 text-foreground animate-bounce" />
          </div>
          <ChevronDown className="w-12 h-12 text-foreground mx-auto animate-bounce" style={{
          animationDelay: '0.2s'
        }} />
          
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            ESCOLHA a melhor opção para você:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plano Básico */}
          <Card className="border-2 relative rounded-[18px] overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-4xl font-extrabold text-center">Plano Básico</h3>
              
              <div className="flex justify-center">
                <img src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png" alt="Plano Básico" className="w-64 h-auto" />
              </div>

              <p className="text-center text-sm text-muted-foreground">
                150 Salmos Explicado Versículo por Versículo<br />
                (em PDF)
              </p>

              <div className="text-center space-y-2">
                <div className="text-5xl font-extrabold text-primary">
                  R$ 17,90
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 3x de R$6,52 no cartão
                </p>
              </div>

              <CTAButton href={basicCheckoutUrl} variant="hero" className="w-full">
                QUERO SOMENTE O BÁSICO
              </CTAButton>

              <p className="text-center text-sm">
                <span className="text-destructive font-semibold">ATENÇÃO:</span> Temos uma oferta{" "}
                <span className="underline font-bold">ainda mais VANTAJOSA</span> para você logo abaixo
              </p>

              <div className="flex justify-center pt-4">
                <ChevronDown className="w-8 h-8 text-foreground animate-bounce" />
              </div>
              <ChevronDown className="w-8 h-8 text-foreground mx-auto animate-bounce" style={{
              animationDelay: '0.2s'
            }} />
            </CardContent>
          </Card>

          {/* Plano Completo */}
          <Card className="border-4 border-green-500 relative shadow-2xl rounded-[18px] overflow-hidden animate-pulse-block">
            {/* Faixa amarela topo */}
            <div className="w-full bg-[#f7ff00] text-center py-3">
              <span className="font-extrabold text-xl">PLANO COMPLETO</span>
            </div>
            
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <Badge className="bg-green-600 text-white font-bold mb-4">
                  ✅ TODOS OS BÔNUS INCLUSO
                </Badge>
              </div>

              <div className="flex justify-center">
                <img src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png" alt="Plano Completo" className="w-64 h-auto" />
              </div>

              <p className="text-center text-sm font-semibold">
                Todos Materiais na Versão PDF (Receba Imediato)
              </p>

              <div className="rounded-md overflow-hidden border">
                {completePlanItems.map((item, index) => (
                  <div key={index} className={`flex items-start gap-2 px-4 py-3 bg-white ${index !== completePlanItems.length - 1 ? 'border-b' : ''}`}>
                    <span className="text-green-600 mt-0.5">✅</span>
                    <span className="text-sm text-black">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm">
                  De <span className="line-through text-muted-foreground">R$197,00</span> por:
                </p>
                <div className="text-5xl font-extrabold text-primary">
                  R$ 27,90
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 6x de R$5,18 no cartão
                </p>
                <Badge className="bg-green-600 text-white font-bold">
                  ✅ Você economiza R$169,10
                </Badge>
              </div>

              <CTAButton href={completeCheckoutUrl} variant="hero" className="w-full">
                QUERO O PLANO COMPLETO
              </CTAButton>

              <p className="text-center text-xs text-muted-foreground">
                <span className="font-semibold">APROVEITE AGORA:</span> Você não vai encontrar esse preço depois!
              </p>

              <div className="flex justify-center gap-4 pt-2 opacity-70">
                <img src="https://eubiblia.com/wp-content/uploads/2025/02/icons-meio-de-pagamento-e1738718378460.png" alt="Formas de pagamento" className="h-8" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}