import { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaImage({ src, alt, className = '', loading = 'lazy' }: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1A1A1A] via-[#141414] to-[#222222] text-neutral-400 p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
          <Dumbbell className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-medium tracking-wide text-neutral-300 max-w-[22ch]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
