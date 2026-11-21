import React, { useState, useRef, useEffect } from 'react';
import { chatbotCatalog } from '../data/portfolioData';
import { 
  Bot, 
  Send, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';

export default function ChatbotPrototype({ isOpen, onClose, onSelectDemo }) {
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'bot',
      text: "Hello! I am Sachin's Portfolio Discovery Assistant. What kind of project, technical capability, or role requirements are you exploring today?",
      suggestions: [
        "Need a RAG & GenAI Engineer",
        "Looking for Python & Financial Data Science",
        "Need forensic Excel & Data Reconciliation",
        "Show me backend REST APIs & MySQL experience"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Rule-based NLP intent and requirement parser
  const parseRequirements = (text) => {
    const lower = text.toLowerCase();
    
    const tags = [];
    let detectedCategory = null;

    if (lower.includes('rag') || lower.includes('llm') || lower.includes('genai') || lower.includes('embedding') || lower.includes('vector') || lower.includes('ast') || lower.includes('chroma')) {
      tags.push('rag', 'llm', 'vector search', 'generative ai');
      detectedCategory = 'Generative AI';
    }
    
    if (lower.includes('finance') || lower.includes('financial') || lower.includes('xbrl') || lower.includes('mca') || lower.includes('stat') || lower.includes('iqr') || lower.includes('anomaly') || lower.includes('outlier') || lower.includes('profit')) {
      tags.push('financial', 'data science', 'statistics', 'anomaly detection');
      detectedCategory = 'Financial Analytics';
    }

    if (lower.includes('excel') || lower.includes('trade') || lower.includes('logistics') || lower.includes('reconciliation') || lower.includes('formula') || lower.includes('xlookup') || lower.includes('index') || lower.includes('dashboard') || lower.includes('bi')) {
      tags.push('excel', 'data quality', 'reconciliation', 'bi');
      detectedCategory = 'Data Quality & BI';
    }

    if (lower.includes('sql') || lower.includes('mysql') || lower.includes('api') || lower.includes('fastapi') || lower.includes('crud') || lower.includes('backend') || lower.includes('database') || lower.includes('crm')) {
      tags.push('backend', 'mysql', 'rest api', 'relational');
      if (!detectedCategory) detectedCategory = 'Backend & Systems';
    }

    if (lower.includes('ml') || lower.includes('machine learning') || lower.includes('catboost') || lower.includes('xgboost') || lower.includes('classification') || lower.includes('hackathon')) {
      tags.push('machine learning', 'catboost', 'classification');
      if (!detectedCategory) detectedCategory = 'Machine Learning';
    }

    return { lower, tags, detectedCategory };
  };

  const handleSend = (textToSend = inputVal) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, sender: 'user', text }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const { lower, tags, detectedCategory } = parseRequirements(text);
      
      // Match against catalog
      let matchedItems = [];
      let explanation = "";
      let followUp = null;

      if (tags.length === 0) {
        // Vague query -> follow up question
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: "Could you specify the primary technical discipline or business problem you are prioritizing? For example, are you evaluating Generative AI/RAG, Statistical Data Modeling, Forensic Data Cleansing, or Relational Backend APIs?",
            suggestions: [
              "Generative AI & RAG",
              "Statistical Data Analytics",
              "Excel Data Reconciliation",
              "Relational MySQL & APIs"
            ]
          }
        ]);
        setIsTyping(false);
        return;
      }

      // Rank catalog items based on tag matches
      matchedItems = chatbotCatalog.map(item => {
        let score = 0;
        tags.forEach(t => {
          if (item.tags.includes(t)) score += 2;
          if (item.title.toLowerCase().includes(t)) score += 3;
          if (item.technologies.toLowerCase().includes(t)) score += 2;
        });
        return { ...item, matchScore: score };
      }).filter(item => item.matchScore > 0).sort((a, b) => b.matchScore - a.matchScore);

      // Construct response
      if (matchedItems.length > 0) {
        const topMatch = matchedItems[0];
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: `Based on your requirement for ${detectedCategory || 'your technical specifications'}, I recommend exploring **${topMatch.title}**:`,
            recommendation: topMatch,
            additionalMatches: matchedItems.slice(1, 3),
            suggestions: [
              "Tell me more about the architecture",
              "What other projects are available?",
              "Can I see another demonstration?"
            ]
          }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: "I analyzed your requirements. While Sachin's portfolio encompasses multiple domains, here are the top matching portfolio capabilities:",
            recommendation: chatbotCatalog[0],
            suggestions: ["Explore RAG Platform", "Explore Financial Pipeline"]
          }
        ]);
      }

      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'reset-1',
        sender: 'bot',
        text: "Conversation reset. What technical requirements, project domains, or evaluation criteria would you like to explore?",
        suggestions: [
          "Need a RAG & GenAI Engineer",
          "Looking for Python & Financial Data Science",
          "Need forensic Excel & Data Reconciliation",
          "Show me backend REST APIs & MySQL experience"
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl h-[650px] max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  Portfolio Discovery Assistant
                </h3>
                <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.2 rounded-full uppercase">
                  Prototype
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Rule-based requirement extractor & offering recommendation engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="bg-amber-50 px-4 py-2 text-[11px] text-amber-800 border-b border-amber-200 flex items-center justify-between shrink-0 font-medium">
          <span>
            ⚡ <strong>Candidate Note:</strong> Functional rule-based prototype working locally with zero external API dependencies. Architecture ready for LLM API integration.
          </span>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-xs shadow-sm'
                  : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200 shadow-xs'
              }`}>
                <p className="whitespace-pre-line">{msg.text}</p>

                {/* Structured Recommendation Card */}
                {msg.recommendation && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 space-y-2.5">
                    <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider font-mono">
                          {msg.recommendation.category}
                        </span>
                        <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-100/60 px-2 py-0.2 rounded-full">
                          Top Match
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm mt-1">
                        {msg.recommendation.title}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        <strong>Best For:</strong> {msg.recommendation.bestFor}
                      </p>
                      <div className="text-[11px] text-slate-500 mt-1 font-mono">
                        <strong>Tech:</strong> {msg.recommendation.technologies}
                      </div>
                    </div>

                    {/* Why this matches explanation */}
                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/70 text-xs text-amber-900">
                      <strong>💡 Why this matches your criteria:</strong>
                      <p className="mt-0.5 text-amber-800 leading-snug">
                        {msg.recommendation.explanation}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        if (msg.recommendation.id === 'cat-rag') onSelectDemo('rag-platform');
                        else if (msg.recommendation.id === 'cat-finance') onSelectDemo('financial-pipeline');
                        else if (msg.recommendation.id === 'cat-trade') onSelectDemo('global-trade');
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>Launch Interactive Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Suggested Quick Replies */}
              {msg.suggestions && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                  {msg.suggestions.map((sug, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSend(sug)}
                      className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-xs"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 p-3 rounded-xl bg-white border border-slate-200 w-24 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 shrink-0">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Describe what you are looking for (e.g., 'Looking for RAG with Python')..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition-colors shadow-xs shrink-0"
              title="Send Requirement"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
