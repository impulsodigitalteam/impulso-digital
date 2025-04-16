"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Gif = () => {
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  return (
    <Image
      src={
        timestamp ? `/img/arrow.webp?${timestamp}` : "/img/arrow-fallback.webp"
      }
      alt="Arrow"
      width={0}
      height={0}
      style={{ width: "100%", height: "auto" }}
      priority
      unoptimized
    />
  );
};

export default Gif;
