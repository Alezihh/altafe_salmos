export function MaterialPreview() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
        VEJA UM DOS MATERIAIS QUE VOCÊ VAI<br />
        RECEBER NA PRÁTICA!
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg p-4 shadow-xl">
          <img
            src="/Salmo-91-min-724x1024.png"
            alt="Exemplo de conteúdo - Salmo 91"
            className="w-full h-auto rounded"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x500/ffffff/333333?text=Conte%C3%BAdo+B%C3%ADblico";
            }}
          />
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-xl">
          <img
            src="/1-min-724x1024.png"
            alt="Exemplo de aplicação prática"
            className="w-full h-auto rounded"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x500/ffffff/333333?text=Aplica%C3%A7%C3%A3o+Pr%C3%A1tica";
            }}
          />
        </div>
      </div>
    </div>
  );
}
