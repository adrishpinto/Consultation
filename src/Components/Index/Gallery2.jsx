import { useRef, useState, useEffect } from "react";

const images = Array.from(
  { length: 10 },
  (_, i) =>
    new URL(
      `../../assets/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
      import.meta.url,
    ).href,
);

export default function Slider() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [perView, setPerView] = useState(3);

  const total = images.length;
  const maxIndex = total - perView;

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 768) setPerView(2);
      else setPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const newMax = total - perView;
    if (index > newMax) {
      setIndex(newMax);
    }
  }, [perView, total]);

  const scroll = (dir) => {
    const container = sliderRef.current;
    if (!container) return;

    const itemWidth = container.offsetWidth / perView;
    const maxIndex = total - perView;

    let newIndex = index + dir;

    if (newIndex < 0) newIndex = maxIndex;
    if (newIndex > maxIndex) newIndex = 0;

    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: "smooth",
    });

    setIndex(newIndex);
  };

  const handleClick = (i) => setSelectedIndex(i);

  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % total);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const isActive = (i) => {
    for (let j = 0; j < perView; j++) {
      if ((index + j) % total === i) return true;
    }
    return false;
  };

  const translateX = -(index * 12);

  const visibleEnd = Math.min(index + perView, total);

  return (
    <div className="w-full p-6 rounded-2xl bg-gradient-to-br from-[#F5D0DF] via-[#EEC4D2] to-[#E8B8CB] mt-20">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[#8C3A5C] text-xs uppercase tracking-widest">
            Collection
          </h3>
          <h2 className="text-[#8C3A5C] text-xl font-semibold">Gallery</h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="px-3 py-1 bg-white/50 rounded-lg"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            className="px-3 py-1 bg-white/50 rounded-lg"
          >
            →
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="flex overflow-hidden gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="min-w-full sm:min-w-[calc(100%/2-10px)] md:min-w-[calc(100%/3-15px)] flex-shrink-0"
          >
            <div
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => handleClick(i)}
            >
              <img
                src={src}
                alt={`img-${i}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden mt-4 flex justify-center">
        <div
          className="flex gap-2 transition-transform duration-300"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                isActive(i) ? "bg-[#8C3A5C] scale-125" : "bg-[#B76A8C]/40"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-[#8C3A5C] mt-2">
        {String(visibleEnd).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </p>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-3xl"
          >
            ←
          </button>

          <img
            src={images[selectedIndex]}
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-3xl"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}