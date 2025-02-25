import React, { useRef, useEffect } from "react";

function ParticlesBackground() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    createParticles();

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  function createParticles() {
    const num = 50;
    const arr = [];
    const canvas = canvasRef.current;
    for (let i = 0; i < num; i++) {
      arr.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2 + 2,
      });
    }
    particles.current = arr;
  }

  function handleClick(e) {
    // Simple pop effect on clicked dot
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    for (let p of particles.current) {
      const dist = Math.hypot(p.x - clickX, p.y - clickY);
      if (dist < p.radius) {
        // pop
        p.radius *= 2;
        p.vx = (Math.random() - 0.5) * 5;
        p.vy = (Math.random() - 0.5) * 5;
        setTimeout(() => {
          particles.current = particles.current.filter((pt) => pt !== p);
        }, 300);
        break;
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // behind normal content
        pointerEvents: "none", // allow clicks on underlying elements
        background: "transparent", // no color, so your page background shows
      }}
    />
  );
}

export default ParticlesBackground;
