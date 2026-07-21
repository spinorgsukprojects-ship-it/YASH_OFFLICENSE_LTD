"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("yashofflicense-cookie-consent") !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white p-4 shadow-soft">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          We use essential cookies to make this website work and may use basic preference storage for cookie consent. Read our{" "}
          <Link className="font-bold text-royal" href="/cookie-policy">Cookie Policy</Link>.
        </p>
        <button
          className="btn btn-primary shrink-0"
          onClick={() => {
            localStorage.setItem("yashofflicense-cookie-consent", "accepted");
            setVisible(false);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
