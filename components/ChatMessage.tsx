import React from 'react';
import { Message, Sender } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === Sender.AI;

  return (
    <div className={`flex w-full ${isAI ? 'justify-start' : 'justify-end'} mb-8 animate-fade-in group`}>
      <div className={`flex max-w-[95%] md:max-w-[85%] ${isAI ? 'flex-row' : 'flex-row-reverse'} gap-5`}>
        
        {/* Avatar - HUD Hexagon Style */}
        <div className="flex-shrink-0 mt-1">
          <div className={`w-12 h-12 flex items-center justify-center relative ${isAI ? 'text-cyan-400' : 'text-rose-500'}`}>
             {/* Hexagon shape utilizing CSS clip-path or SVG background */}
             <div className={`absolute inset-0 opacity-20 ${isAI ? 'bg-cyan-500' : 'bg-rose-500'} blur-sm`}></div>
             <div className={`w-full h-full border ${isAI ? 'border-cyan-500 bg-cyan-950/30' : 'border-rose-500 bg-rose-950/30'} flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                {isAI ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
             </div>
          </div>
        </div>

        {/* Content Container */}
        <div className={`flex flex-col ${isAI ? 'items-start' : 'items-end'} w-full`}>
          {/* Metadata Header */}
          <div className="flex items-center gap-3 mb-2 px-1">
            <span className={`font-hud text-xs font-bold uppercase tracking-widest ${isAI ? 'text-cyan-600' : 'text-rose-600'}`}>
              {isAI ? 'MENTOR_UNIT_01' : 'USER_ID_OPERATOR'}
            </span>
            <span className="text-xs text-slate-600 font-mono">
              [{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' })}]
            </span>
          </div>
          
          {/* Message Bubble */}
          <div className={`relative px-8 py-5 text-base md:text-lg leading-relaxed whitespace-pre-wrap backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] ${
            isAI 
              ? 'bg-cyan-950/20 text-cyan-50 border-l-2 border-cyan-500 border-t border-r border-b border-cyan-900/30 rounded-tr-xl rounded-br-xl rounded-bl-xl' 
              : 'bg-rose-950/20 text-rose-50 border-r-2 border-rose-500 border-t border-l border-b border-rose-900/30 rounded-tl-xl rounded-bl-xl rounded-br-xl'
          }`}>
            {/* Decorative corner markers for HUD feel */}
            <div className={`absolute w-2.5 h-2.5 border-t border-${isAI ? 'cyan' : 'rose'}-500/50 top-0 ${isAI ? 'left-0' : 'right-0'}`}></div>
            
            {message.text}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatMessage;