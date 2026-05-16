"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfileImage() {
  const [src, setSrc] = useState<string>("/headshot.jpg");

  return (
    <Image
      src={src}
      alt="Profile photo"
      fill
      className="object-cover"
      priority
      onError={() => setSrc("/headshot-placeholder.svg")}
    />
  );
}

