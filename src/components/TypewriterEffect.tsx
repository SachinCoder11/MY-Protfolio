import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  texts, 
  speed = 100, 
  delay = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting && displayText === texts[currentIndex]) {
      // Full text reached, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText === '') {
      // Text fully deleted, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Either typing or deleting
      const nextChar = isDeleting
        ? displayText.slice(0, -1)
        : texts[currentIndex].slice(0, displayText.length + 1);
      
      timeout = setTimeout(() => {
        setDisplayText(nextChar);
      }, isDeleting ? speed / 2 : speed);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, delay]);
  
  return (
    <div className="font-mono text-2xl md:text-3xl font-semibold text-cyan-400">
      {displayText}
      <span className="animate-blink border-r-2 border-cyan-400 ml-1">&nbsp;</span>
    </div>
  );
};

export default TypewriterEffect;