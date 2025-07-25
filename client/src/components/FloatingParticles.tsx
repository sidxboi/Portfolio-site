import { useEffect, useState } from "react";

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    const particleData = [
      { id: 1, top: "20%", left: "10%", delay: "0s" },
      { id: 2, top: "40%", left: "80%", delay: "2s" },
      { id: 3, top: "60%", left: "20%", delay: "4s" },
      { id: 4, top: "80%", left: "70%", delay: "6s" },
      { id: 5, top: "30%", left: "50%", delay: "3s" },
      { id: 6, top: "70%", left: "90%", delay: "5s" },
    ];
    setParticles(particleData);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
