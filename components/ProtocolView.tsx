import React from 'react';
import { PROTOCOL_STEPS } from '../constants';

interface ProtocolViewProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProtocolView: React.FC<ProtocolViewProps> = ({ isVisible, onClose }) => {
  return (
    <div 
      className={`fixed inset-y-0 right-0 w-full md:w-[500px] bg-[#050b14] border-l border-cyan-900/50 transform transition-transform duration-300 ease-out z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Vertical Scanline decor */}
      <div className="absolute inset-y-0 left-1 w-px bg-gradient-to-b from-transparent via-cyan-800 to-transparent opacity-50"></div>

      <div className="h-full flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-cyan-500">
                 <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
                 <path d="M50 10V90" stroke="currentColor" strokeWidth="1" />
                 <path d="M10 50H90" stroke="currentColor" strokeWidth="1" />
             </svg>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-cyan-900/50 bg-[#020617]/95 backdrop-blur-sm relative z-10">
          <div>
            <h2 className="font-hud text-3xl font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
              PROTOCOLO DE ELITE
            </h2>
            <p className="text-sm text-cyan-700 mt-2 uppercase tracking-[0.3em] font-bold">
              Checklist Operacional V.2.0
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded hover:bg-cyan-900/20 text-cyan-600 hover:text-cyan-300 transition-colors border border-transparent hover:border-cyan-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="text-sm font-mono text-cyan-500/60 mb-6 border-l-4 border-rose-500 pl-4 py-2">
            "A EXCELÊNCIA É UM HÁBITO. SIGA O PROTOCOLO SEM DESVIOS."
          </div>
          
          <div className="space-y-2">
            {PROTOCOL_STEPS.map((step, index) => (
              <div key={index} className="flex gap-5 group relative py-4 border-b border-cyan-900/20 hover:bg-cyan-900/10 transition-colors px-3 rounded-r">
                {/* Connector Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-cyan-900/30 group-hover:bg-cyan-500/50 transition-colors"></div>

                <div className="flex-shrink-0 w-8 text-right font-hud font-bold text-xl text-cyan-700 group-hover:text-cyan-400 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <p className="text-base text-slate-400 leading-relaxed group-hover:text-cyan-100 transition-colors w-full whitespace-pre-line font-light">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 pb-4 text-sm text-slate-500 border-t border-cyan-900/50 mt-8">
            <p className="font-hud font-bold text-rose-500 mb-4 tracking-widest uppercase text-base">Fontes de Dados</p>
            <ul className="space-y-4 break-words font-mono text-xs uppercase tracking-wide">
              <li className="flex gap-3">
                <span className="text-cyan-600">[REF.01]</span>
                <span className="text-slate-400">Sinskey T et al. J Ultrasound Med. 2019.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600">[REF.02]</span>
                <span className="text-slate-400">ACEP Sonoguide. Vascular Access.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-600">[REF.03]</span>
                <span className="text-slate-400">MSD Manual. US-guided Peripheral IV.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolView;