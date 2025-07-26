export function SimpleBeamsBackground({ children, className }) {
  return (
    <div className={`relative min-h-screen bg-neutral-950 overflow-hidden ${className}`}>
      {/* Static beam-like elements */}
      <div className="absolute inset-0 flex justify-center">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="h-full w-px bg-gradient-to-b from-purple-500/20 via-indigo-500/20 to-transparent mx-4"
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}