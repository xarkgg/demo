import React from 'react';

export const PhoneMockupEffy: React.FC = () => {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#003FC0] overflow-hidden relative shadow-inner shrink-0 flex items-end justify-center">
      {/* iPhone Bezel Peeking from bottom */}
      <div className="w-[88%] h-[92%] bg-[#0B1528] rounded-t-2xl p-1.5 shadow-2xl relative translate-y-1 border-t border-[#023EC0]/40">
        {/* Screen */}
        <div className="w-full h-full bg-[#080D1A] rounded-t-xl overflow-hidden relative p-1.5 flex flex-col justify-between">
          
          {/* Dynamic Island pill */}
          <div className="w-6 h-1.5 bg-black rounded-full mx-auto mb-1.5" />

          {/* App Icons Grid */}
          <div className="grid grid-cols-4 gap-1 w-full mt-0.5">
            {/* Calendar */}
            <div className="w-3.5 h-3.5 rounded-sm bg-white flex flex-col items-center justify-center">
              <span className="text-[4px] font-bold text-[#003FC0] leading-none">THU</span>
              <span className="text-[5px] font-bold text-black leading-none">6</span>
            </div>
            {/* Photos */}
            <div className="w-3.5 h-3.5 rounded-sm bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600" />
            {/* Camera */}
            <div className="w-3.5 h-3.5 rounded-sm bg-neutral-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>
            {/* Mail */}
            <div className="w-3.5 h-3.5 rounded-sm bg-[#003FC0] flex items-center justify-center">
              <div className="w-2 h-1 bg-white rounded-xs" />
            </div>

            {/* Row 2 */}
            <div className="w-3.5 h-3.5 rounded-sm bg-emerald-500" />
            <div className="w-3.5 h-3.5 rounded-sm bg-cyan-500" />
            <div className="w-3.5 h-3.5 rounded-sm bg-blue-600" />
            <div className="w-3.5 h-3.5 rounded-sm bg-sky-400" />

            {/* Row 3 */}
            <div className="w-3.5 h-3.5 rounded-sm bg-indigo-500" />
            <div className="w-3.5 h-3.5 rounded-sm bg-blue-400" />
            <div className="w-3.5 h-3.5 rounded-sm bg-blue-700" />
            <div className="w-3.5 h-3.5 rounded-sm bg-teal-500" />
          </div>

          {/* Subtle phone wallpaper glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003FC0]/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
