import { useState, useEffect, useRef } from "react";

const images = Array.from(
  { length: 10 },
  (_, i) =>
    new URL(
      `../../assets/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
      import.meta.url,
    ).href,
);

const GAP = 20;

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [lbAnim, setLbAnim] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const autoTimer = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const VISIBLE = isMobile ? 1 : 3;

  // Infinite: clone last VISIBLE at front, first VISIBLE at end
  const cloned = [
    ...images.slice(-VISIBLE),
    ...images,
    ...images.slice(0, VISIBLE),
  ];
  const offset = VISIBLE;

  function slideWidth() {
    const vw = viewportRef.current?.offsetWidth || 900;
    return (vw - GAP * (VISIBLE - 1)) / VISIBLE;
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
  }, [isMobile]);
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
    } else if (current < 0) {
      next = current + images.length;
    }
    if (next !== current) {
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
    autoTimer.current = setInterval(() => {
      if (lightbox === null) navigate(1);
    }, 3500);
  }

  useEffect(() => {
    resetAuto();
    return () => clearAuto();
  }, [lightbox]);

  const activeDot = ((current % images.length) + images.length) % images.length;

  // Lightbox
  function openLightbox(idx) {
    setLightbox(idx);
    setTimeout(() => setLbAnim(true), 10);
  }
  function closeLightbox() {
    setLbAnim(false);
    setTimeout(() => setLightbox(null), 280);
  }
  function lbNavigate(dir) {
    setLightbox((prev) => (prev + dir + images.length) % images.length);
  }

  useEffect(() => {
    if (lightbox !== null) {
      const handler = (e) => {
        if (e.key === "ArrowRight") lbNavigate(1);
        if (e.key === "ArrowLeft") lbNavigate(-1);
        if (e.key === "Escape") closeLightbox();
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }
  }, [lightbox]);

  // Touch / swipe support for main track
  const touchStartX = useRef(null);
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) navigate(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  }

  // Touch support for lightbox
  const lbTouchStart = useRef(null);
  function lbTouchStartHandler(e) {
    lbTouchStart.current = e.touches[0].clientX;
  }
  function lbTouchEndHandler(e) {
    if (lbTouchStart.current === null) return;
    const diff = lbTouchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) lbNavigate(diff > 0 ? 1 : -1);
    lbTouchStart.current = null;
  }

  const cardHeight = isMobile ? 260 : undefined;

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(135deg, #F5D0DF 0%, #EEC4D2 60%, #E8B8CB 100%)",
          borderRadius: 20,
          padding: isMobile ? "28px 0 22px" : "36px 0 28px",
          minHeight: isMobile ? 420 : 480,
          height: isMobile ? 420 : 480,
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 20 : 28,
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
              "radial-gradient(ellipse,rgba(200,100,140,0.08) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "0 20px" : "0 32px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "rgba(100,50,70,0.45)",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Collection
            </p>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "rgba(90,40,60,0.85)",
                margin: 0,
                fontFamily: "Georgia,serif",
              }}
            >
              Gallery
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => navigate(dir)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.35)",
                  border: "0.5px solid rgba(180,100,130,0.25)",
                  color: "rgba(100,40,65,0.7)",
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.35)")
                }
              >
                {dir === -1 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>

        {/* Track */}
        <div
          ref={viewportRef}
          style={{
            overflow: "hidden",
            padding: isMobile ? "0 20px" : "0 32px",
            position: "relative",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{ display: "flex", gap: GAP, willChange: "transform" }}
          >
            {cloned.map((src, i) => {
              const realIdx = (i - offset + images.length * 10) % images.length;
              const isCenter = isMobile
                ? true // on mobile every visible card is "center"
                : realIdx === activeDot;
              return (
                <div
                  key={i}
                  onClick={() => openLightbox(realIdx)}
                  style={{
                    flexShrink: 0,
                    width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                    height: isMobile ? cardHeight : isCenter ? 300 : 260,
                    borderRadius: 14,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    transition:
                      "height 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s, transform 0.5s",
                    transform: isCenter ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isCenter
                      ? "0 20px 60px rgba(160,60,90,0.25), 0 0 0 1px rgba(255,255,255,0.5)"
                      : "0 8px 24px rgba(160,60,90,0.12)",
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
                      filter: isCenter ? "brightness(1)" : "brightness(0.8)",
                      transition: "filter 0.5s",
                    }}
                  />
                  {isCenter && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
                        borderRadius: 14,
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "rgba(0,0,0,0.3)",
                      backdropFilter: "blur(6px)",
                      border: "0.5px solid rgba(255,255,255,0.2)",
                      borderRadius: 8,
                      padding: "3px 9px",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.7)",
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
                      ? "rgba(130,50,80,0.7)"
                      : "rgba(160,80,110,0.25)",
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
              color: "rgba(120,50,75,0.4)",
              letterSpacing: "0.1em",
            }}
          >
            {String(activeDot + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
          {!isMobile && (
            <span
              style={{
                fontSize: 11,
                color: "rgba(120,50,75,0.35)",
                letterSpacing: "0.08em",
              }}
            >
              click any image to view
            </span>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          onTouchStart={lbTouchStartHandler}
          onTouchEnd={lbTouchEndHandler}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: lbAnim ? "rgba(80,20,40,0.85)" : "rgba(80,20,40,0)",
            backdropFilter: lbAnim ? "blur(10px)" : "blur(0px)",
            transition: "background 0.28s ease, backdrop-filter 0.28s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              opacity: lbAnim ? 1 : 0,
              transform: lbAnim ? "scale(1)" : "scale(0.88)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              padding: isMobile ? "0 16px" : 0,
              width: isMobile ? "100%" : "auto",
            }}
          >
            {/* Big image */}
            <div
              style={{
                width: isMobile ? "100%" : 480,
                maxWidth: isMobile ? 420 : undefined,
                height: isMobile ? 300 : 360,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow:
                  "0 32px 80px rgba(80,20,40,0.55), 0 0 0 1px rgba(255,255,255,0.15)",
              }}
            >
              <img
                src={images[lightbox]}
                alt={`lightbox-${lightbox}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Counter */}
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                letterSpacing: "0.12em",
              }}
            >
              {String(lightbox + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            {/* Arrows */}
            <div style={{ display: "flex", gap: 16 }}>
              {[
                [-1, "←"],
                [1, "→"],
              ].map(([dir, label]) => (
                <button
                  key={dir}
                  onClick={() => lbNavigate(dir)}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 20,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.18s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Dot strip */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  style={{
                    height: 5,
                    width: i === lightbox ? 18 : 5,
                    borderRadius: 9999,
                    background:
                      i === lightbox
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(255,255,255,0.25)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.3s ease, background 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Swipe hint on mobile */}
            {isMobile && (
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                }}
              >
                swipe to navigate
              </span>
            )}

            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: -14,
                right: isMobile ? 2 : -14,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
