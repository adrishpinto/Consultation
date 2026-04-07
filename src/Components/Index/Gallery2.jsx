import { useState, useEffect, useRef } from "react";

const images = Array.from(
  { length: 10 },
  (_, i) =>
    new URL(
      `../../assets/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
      import.meta.url,
    ).href,
);
const Gallery2 = () => {
    return (  );
}
 
export default Gallery2;