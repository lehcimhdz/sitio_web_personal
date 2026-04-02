
'use client';

const DataFlowBackground = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-slate-900/80" />

      {/* Animated Data Streams (Straight Pipelines) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>

        {/* Pipeline 1: Top Left to Right */}
        <path
          d="M-100,100 L200,100 L200,300 L500,300 L500,150 L1200,150"
          fill="none"
          stroke="url(#pipeline-gradient)"
          strokeWidth="2"
          className="animate-pipeline-slow"
        />

        {/* Pipeline 2: Middle Left to Bottom Right */}
        <path
          d="M-100,500 L100,500 L100,700 L400,700 L400,600 L1200,600"
          fill="none"
          stroke="url(#pipeline-gradient)"
          strokeWidth="2"
          className="animate-pipeline-medium"
        />

        {/* Pipeline 3: Bottom Left to Top Right (Circuit style) */}
        <path
          d="M-100,800 L300,800 L300,400 L600,400 L600,200 L1200,200"
          fill="none"
          stroke="url(#pipeline-gradient)"
          strokeWidth="2"
          strokeOpacity="0.5"
          className="animate-pipeline-fast"
        />
      </svg>

      <style jsx>{`
        .animate-pipeline-slow {
          stroke-dasharray: 100 1000;
          animation: flow 20s linear infinite;
        }
        .animate-pipeline-medium {
          stroke-dasharray: 150 800;
          animation: flow 15s linear infinite;
          animation-delay: 2s;
        }
        .animate-pipeline-fast {
           stroke-dasharray: 80 600;
           animation: flow 12s linear infinite;
           animation-delay: 5s;
        }
        @keyframes flow {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
};

export default DataFlowBackground;
