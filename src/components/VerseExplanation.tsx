export function VerseExplanation() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Imagem adicional solicitada */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src="https://eubiblia.com/wp-content/uploads/2025/01/2-min.png"
          alt="Exemplo de página com explicação por versículo"
          className="w-full h-auto"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/800x1200/ffffff/333333?text=Exemplo+de+P%C3%A1gina";
          }}
        />
      </div>
    </div>
  );
}
