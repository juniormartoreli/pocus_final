import React, { useState, useRef, useEffect } from 'react';
import { Message, Sender } from './types';
import { sendMessageToGemini } from './services/geminiService';
import ChatMessage from './components/ChatMessage';
import ProtocolView from './components/ProtocolView';
import { GenerateContentStreamResult } from '@google/genai';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      text: 'Sistema Iniciado. Sou seu Mentor Sênior em POCUS e Acesso Vascular Avançado.\n\nInsira seus parâmetros de dúvida ou inicie o protocolo clínico.',
      sender: Sender.AI,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showProtocol, setShowProtocol] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [inputValue]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: Sender.USER,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Create placeholder for AI message
    const aiMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      {
        id: aiMessageId,
        text: '',
        sender: Sender.AI,
        timestamp: new Date(),
      },
    ]);

    try {
      const streamResult: GenerateContentStreamResult = await sendMessageToGemini(userText);
      
      let accumulatedText = '';
      
      // Fixed iteration: Iterate over the result object directly
      for await (const chunk of streamResult) {
        const chunkText = chunk.text; 
        if (chunkText) {
            accumulatedText += chunkText;
            setMessages((prev) => 
                prev.map((msg) => 
                    msg.id === aiMessageId ? { ...msg, text: accumulatedText } : msg
                )
            );
        }
      }

    } catch (error) {
      console.error("Error communicating with Mentor:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "ERRO DE SISTEMA: Interrupção na conexão neural. Solicito repetição dos dados.",
          sender: Sender.AI,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#020617] relative overflow-hidden font-sans text-cyan-50">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 z-50 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      
      {/* Header */}
      <header className="flex-shrink-0 h-24 bg-[#020617]/90 backdrop-blur-md border-b border-cyan-900/50 flex items-center justify-between px-6 md:px-8 z-40 relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="flex items-center gap-5 group cursor-default">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
            <div className="absolute inset-0 border border-rose-500/50 rounded-lg transform -rotate-12 scale-75"></div>
            {/* Linear Transducer Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 relative z-10 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14v5H5z" /> {/* Head */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9v8a2 2 0 002 2h4a2 2 0 002-2V9" /> {/* Body */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3" /> {/* Cable */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 6h10" opacity="0.5" /> {/* Detail */}
            </svg>
          </div>
          <div>
            <h1 className="font-hud text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 tracking-widest uppercase drop-shadow-[0_0_2px_rgba(34,211,238,0.5)]">
              POCUS<span className="text-rose-500">.AI</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-rose-500 rounded-full animate-pulse"></div>
              <p className="text-xs text-cyan-600 uppercase tracking-[0.25em] font-semibold">
                Elite Mentor
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowProtocol(!showProtocol)}
          className="relative group overflow-hidden px-6 py-3 rounded bg-[#0f172a] border border-cyan-800 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative flex items-center gap-3 font-hud font-bold text-lg text-cyan-400 group-hover:text-cyan-100 tracking-wider">
            <span className="hidden md:inline">PROTOCOL_V.1</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex z-10">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-full relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && messages[messages.length - 1].sender === Sender.USER && (
               <div className="flex justify-start animate-pulse">
                 <div className="flex items-center gap-2 text-cyan-500/70 font-hud text-base ml-2 border border-cyan-900/30 bg-cyan-950/10 px-5 py-3 rounded-r-xl border-l-2 border-l-cyan-500">
                   <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_5px_#22d3ee] rounded-full animate-ping"></div>
                   <span className="tracking-widest ml-2">PROCESSANDO DADOS...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex-shrink-0 p-6 bg-[#020617]/95 border-t border-cyan-900/50 backdrop-blur relative">
             {/* Decorative corners */}
             <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-500/50"></div>
             <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-500/50"></div>

             <div className="max-w-5xl mx-auto relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-rose-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="> Insira dados do caso ou solicite análise técnica..."
                  className="relative block w-full bg-[#0b1221] text-cyan-100 placeholder-cyan-800/50 rounded-xl pl-6 pr-16 py-5 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 resize-none min-h-[70px] max-h-[200px] border border-cyan-900 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] font-mono text-base md:text-lg"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-4 bottom-4 p-2.5 bg-cyan-900/30 text-cyan-400 rounded hover:bg-cyan-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
             </div>
             <div className="text-center mt-4 flex justify-center gap-6 text-xs text-cyan-900 uppercase tracking-widest font-hud font-semibold">
               <span>SYS.READY</span>
               <span>•</span>
               <span>AI.CONNECTION: STABLE</span>
               <span>•</span>
               <span>SECURE.CHANNEL</span>
             </div>
          </div>
        </div>

        {/* Sidebar Overlay */}
        <ProtocolView isVisible={showProtocol} onClose={() => setShowProtocol(false)} />
        
        {/* Backdrop for mobile when protocol is open */}
        {showProtocol && (
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setShowProtocol(false)}
          />
        )}
      </main>
    </div>
  );
};

export default App;