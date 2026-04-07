"use client";

import dynamic from "next/dynamic";

const FloatingMenu = dynamic(() => import("./FloatingMenu"), { ssr: false });

export default function ClientFloatingMenu() {
  return <FloatingMenu />;
}
