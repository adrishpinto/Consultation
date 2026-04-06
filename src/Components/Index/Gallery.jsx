import { useState, useEffect, useRef } from "react";

const images = Array.from(
  { length: 10 },
  (_, i) =>
    new URL(
      `../../assets/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
      import.meta.url,
    ).href,
);

const VISIBLE = 3;
const GAP = 20;

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const autoTimer = useRef(null);

  // Infinite: clone last VISIBLE at front, first VISIBLE at end
  const cloned = [
    ...images.slice(-VISIBLE),
    ...images,
    ...images.slice(0, VISIBLE),
  ];
  const offset = VISIBLE; // real index 0 lives at cloned[VISIBLE]

  function slideWidth() {
    const vw = viewportRef.current?.offsetWidth || 900;
    return (vw - GAP * (VISIBLE - 1) - 64) / VISIBLE;
  }

  function getTranslate(idx) {
    const sw = slideWidth();
    return (idx + offset) * (sw + GAP);
  }

  function jumpTo(idx, animate = true) {
    const track = trackRef.current;
    if (!track) return;
    if (!animate) track.style.transition = "none";
    else track.style.transition = "transform 0.6s cubic-bezier(0.4,0,0.2,1)";
    track.style.transform = `translateX(-${getTranslate(idx)}px)`;
  }

  useEffect(() => {
    jumpTo(current, false);
  }, []);

  useEffect(() => {
    jumpTo(current);
  }, [current]);

  function handleTransitionEnd() {
    setSliding(false);
    const track = trackRef.current;
    if (!track) return;
    let next = current;
    if (current >= images.length) {
      next = current - images.length;
      setCurrent(next);
      track.style.transition = "none";
      track.style.transform = `translateX(-${getTranslate(next)}px)`;
    } else if (current < 0) {
      next = current + images.length;
      setCurrent(next);
      track.style.transition = "none";
      track.style.transform = `translateX(-${getTranslate(next)}px)`;
    }
  }

  function navigate(dir) {
    if (sliding) return;
    setSliding(true);
    setCurrent((p) => p + dir);
    resetAuto();
  }

  function clearAuto() {
    if (autoTimer.current) clearInterval(autoTimer.current);
  }
  function resetAuto() {
    clearAuto();
    autoTimer.current = setInterval(() => navigate(1), 3500);
  }

  useEffect(() => {
    resetAuto();
    return () => clearAuto();
  }, []);

  const activeDot = ((current % images.length) + images.length) % images.length;

  return (
    <div
      className="bg-[#5B2C4F]"
      style={{
        borderRadius: 20,
        padding: "36px 0 28px",
        minHeight: 480,
        height: 480,
        display: "flex",
        flexDirection: "column",
        gap: 28,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(120,80,255,0.08) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Collection
          </p>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              margin: 0,
            }}
          >
            Gallery
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            ←
          </button>
          <button
            onClick={() => navigate(1)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            →
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={viewportRef}
        style={{ overflow: "hidden", padding: "0 32px", position: "relative" }}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{ display: "flex", gap: GAP, willChange: "transform" }}
        >
          {cloned.map((src, i) => {
            const realIdx = (i - offset + images.length * 10) % images.length;
            const isCenter = realIdx === activeDot;
            return (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                  height: isCenter ? 300 : 260,
                  borderRadius: 14,
                  overflow: "hidden",
                  position: "relative",
                  transition:
                    "height 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s, transform 0.5s",
                  transform: isCenter ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: isCenter
                    ? "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.12)"
                    : "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={src}
                  alt={`gallery-${realIdx}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: isCenter ? "brightness(1)" : "brightness(0.55)",
                    transition: "filter 0.5s",
                  }}
                />
                {/* Overlay shimmer on active */}
                {isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
                      borderRadius: 14,
                    }}
                  />
                )}
                {/* Index badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(6px)",
                    border: "0.5px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: "3px 9px",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {String(realIdx + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots + counter */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                clearAuto();
                setCurrent(i);
                resetAuto();
              }}
              style={{
                height: 6,
                width: i === activeDot ? 20 : 6,
                borderRadius: 9999,
                background:
                  i === activeDot
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.18)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s",
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
          }}
        >
          {String(activeDot + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Gallery;
