import React from 'react';

export const ClientLogos: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-full px-5 py-3.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-x-auto text-neutral-900 gap-4 select-none">
      
      {/* 1. Coinbase */}
      <div className="flex items-center shrink-0">
        <span className="font-bold text-[15px] tracking-tight font-sans text-neutral-900">
          coinbase
        </span>
      </div>

      {/* 2. Spotify */}
      <div className="flex items-center gap-1 shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-neutral-900" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <span className="font-bold text-[13px] tracking-tight font-sans text-neutral-900">
          Spotify
        </span>
      </div>

      {/* 3. Slack */}
      <div className="flex items-center gap-1 shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-neutral-900" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
        <span className="font-bold text-[13px] tracking-tight font-sans text-neutral-900">
          slack
        </span>
      </div>

      {/* 4. Dropbox */}
      <div className="flex items-center gap-1 shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-neutral-900" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2L0 6.5l6 4.5 6-4.5L6 2zm12 0l-6 4.5 6 4.5 6-4.5L18 2zM0 15.5l6 4.5 6-4.5-6-4.5-6 4.5zm18-4.5l-6 4.5 6 4.5 6-4.5-6-4.5zM6 21.5l6-4.5 6 4.5-6 4.5-6-4.5z" />
        </svg>
        <span className="font-bold text-[13px] tracking-tight font-sans text-neutral-900">
          Dropbox
        </span>
      </div>

      {/* 5. Medium / Monogram */}
      <div className="flex items-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-neutral-900" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      </div>

    </div>
  );
};
