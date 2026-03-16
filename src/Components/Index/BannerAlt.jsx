import React, { useEffect, useRef } from "react";

const Banner = () => {
  const lineRef = useRef(null);

  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          width: "52%",
          backgroundColor: "#FDFAF8",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 64px 0 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Subtle decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,44,79,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "520px" }}>
          {/* Eyebrow label */}
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#B89AAF",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            Mental Health & Wellbeing
          </p>

          <h1
            style={{
              fontSize: "clamp(52px, 5.5vw, 80px)",
              lineHeight: "1.05",
              fontWeight: "400",
              color: "#5B2C4F",
              margin: "0 0 8px 0",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-1px",
            }}
          >
            Aiva
            <br />
            <span style={{ fontStyle: "italic", color: "#7D4470" }}>
              Counselling
            </span>
          </h1>

          {/* Thin decorative rule */}
          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "#C4A0BB",
              margin: "28px 0",
            }}
          />

          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: "#7A7070",
              lineHeight: "1.8",
              fontFamily: "'Georgia', serif",
            }}
          >
            A warm and understanding space prioritizing your well-being. Our
            experienced team of psychologists offers compassionate,
            evidence-based support in a safe environment. Whether you seek
            healing, clarity, or resilience, we're here to support you on your
            journey toward a healthier, more fulfilling life.
          </p>

          {/* CTA */}
          <button
            style={{
              marginTop: "40px",
              padding: "14px 36px",
              backgroundColor: "transparent",
              border: "1px solid #5B2C4F",
              color: "#5B2C4F",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "'Georgia', serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#5B2C4F";
              e.target.style.color = "#FDFAF8";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#5B2C4F";
            }}
          >
            Book a Session
          </button>
        </div>
      </div>

      {/* Vertical divider */}
      <div
        style={{
          position: "absolute",
          left: "52%",
          top: "10%",
          height: "80%",
          width: "1px",
          backgroundColor: "#D4C4CE",
          zIndex: 3,
          transform: "translateX(-50%)",
        }}
      />

      {/* Right Side */}
      <div
        style={{
          width: "48%",
          background: "linear-gradient(145deg, #EDE5F2 0%, #DDD0E8 60%, #C9B8D8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Layered soft orbs for depth */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,44,79,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Large italic quote */}
        <div
          style={{
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "20px",
              color: "#5B2C4F",
              opacity: 0.55,
              lineHeight: "1.6",
              letterSpacing: "0.2px",
            }}
          >
            "Healing begins with being heard."
          </p>
        </div>

        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "1px solid rgba(91,44,79,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(91,44,79,0.1)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
};

export default Banner;