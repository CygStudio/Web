import React from 'react';

type StrokeTextProps = {
  text: string;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: string;
  textClass?: string;
};

const StrokeText: React.FC<StrokeTextProps> = ({
  text,
  textColor = 'white',
  strokeColor = 'black',
  strokeWidth = '10',
  textClass = '',
}) => {
  return (
    <div className="relative inline-block">
      <span
        className="absolute inset-0 text-transparent"
        style={{
          WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span className={`relative ${textClass}`} style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
};

export default StrokeText;
