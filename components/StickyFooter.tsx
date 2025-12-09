
import React from 'react';
import { Play, Unlock } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const StickyFooter: React.FC = () => {
  const handleRedirect = () => {
    window.open(TELEGRAM_LINK, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#141414]/95 backdrop-blur-sm border-t border-gray-800 p-3 md:p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] animate-slide-up">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        
        {/* Texto de Urgência (Escondido em telas muito pequenas para dar espaço ao botão) */}
        <div className="hidden xs:flex flex-col">
          <div className="flex items-center gap-2 text-[#46d369] font-bold text-xs md:text-sm">
            <Unlock className="w-3 h-3 md:w-4 md:h-4" />
            <span>ACESSO LIBERADO</span>
          </div>
          <p className="text-gray-400 text-[10px] md:text-xs">
            As vagas para o canal VIP encerram em breve.
          </p>
        </div>

        {/* Botão Principal */}
        <button 
          onClick={handleRedirect}
          className="flex-1 bg-[#E50914] hover:bg-[#b2070f] text-white font-black text-sm md:text-lg uppercase tracking-wide py-3 px-6 rounded shadow-[0_0_15px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 transition-transform active:scale-95 animate-pulse"
        >
          <Play className="w-5 h-5 fill-white" />
          ENTRAR AGORA
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
