import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Qual é a forma de pagamento?",
    answer: "Você pode fazer o pagamento pelo pix ou cartão de crédito."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim! Utilizamos as plataformas mais seguras do mercado, com certificação SSL e criptografia de dados para garantir sua segurança."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar ou não se adaptar ao material, devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Como vou ter acesso ao Material?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente por e-mail o acesso ao material completo em formato digital (PDF). Simples e rápido!"
  }
];

export function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card border-2 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline text-card-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-card-foreground/80 text-base pt-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
