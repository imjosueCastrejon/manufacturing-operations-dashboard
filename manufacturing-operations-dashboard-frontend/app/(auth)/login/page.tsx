"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [systemClock, setSystemClock] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      setSystemClock(`${h}:${m}:${s}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        alert("Operational access granted. Initializing Plant Dashboard...");
        setIsSuccess(false);
      }, 1000);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center overflow-hidden font-inter">
      {/* Background Schematic Layer */}
      <div className="absolute inset-0 z-0">
        <div className="grid-pattern absolute inset-0"></div>
        <Image
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale opacity-5"
          alt="A highly detailed architectural schematic of a modern manufacturing factory floor layout."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJUPq1RKEYyg0Fsjya0_LRrBPdj6dOji2OlYt0NHVcSLvT9vvLv1IV1VyMEulzdNchWEXOTdg3VWR-mOCjq8dAR--VIvAnCV7xrIQyCC3POQ39YtAgdUygOfJiRwMD7UAuO6LSqSAyz0B9Ha5W96bQlT6-PD0ZS6Teajgo9Bu1QeARd0zmvnlDIzy-g23j84oPobwbRQZC0wLXpUMIsG5tSVOAX7xwZ-9C9vfyHlQi6MDkJ4o99fwfZkxlsJU34HsUfgOYwvreKWW0"
          fill
          priority
        />
      </div>

      {/* Main Authentication Container */}
      <main className="relative z-10 w-full max-w-[440px] px-md">
        {/* Header Branding */}
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center space-x-sm mb-sm">
            <span className="material-symbols-outlined text-primary text-[32px]">
              precision_manufacturing
            </span>
            <h1 className="text-headline-md text-on-surface uppercase tracking-tight font-semibold">
              Plant Ops
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-xs">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <p className="text-label-caps text-on-surface-variant uppercase font-bold">
              Torreón-01 System Online
            </p>
          </div>
        </div>

        {/* Auth Card */}
        <div className="auth-card-blur border border-outline-variant p-xl shadow-sm rounded-none relative overflow-hidden">
          {/* Decorative Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
          <div className="mb-lg">
            <h2 className="text-headline-md text-on-surface mb-xs font-semibold">
              Operational Authentication
            </h2>
            <p className="text-body-sm text-on-surface-variant">
              Access restricted to authorized personnel only.
            </p>
          </div>

          <form className="space-y-md" onSubmit={handleSubmit}>
            {/* Employee ID */}
            <div className="space-y-xs">
              <label
                className="text-label-caps text-on-surface-variant block uppercase font-bold"
                htmlFor="employee-id"
              >
                Employee ID / Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  badge
                </span>
                <input
                  className="w-full h-[36px] pl-[36px] pr-sm bg-surface-container-low border border-outline-variant focus:border-on-tertiary-container focus:outline-none text-body-md text-on-surface placeholder:text-outline transition-all"
                  id="employee-id"
                  name="employee-id"
                  placeholder="TRC-XXXXX"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-xs">
              <div className="flex justify-between items-end">
                <label
                  className="text-label-caps text-on-surface-variant uppercase font-bold"
                  htmlFor="password"
                >
                  Security Password
                </label>
                <a
                  className="text-label-caps text-on-tertiary-container hover:underline uppercase font-bold"
                  href="#"
                >
                  Reset
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  lock
                </span>
                <input
                  className="w-full h-[36px] pl-[36px] pr-sm bg-surface-container-low border border-outline-variant focus:border-on-tertiary-container focus:outline-none text-body-md text-on-surface placeholder:text-outline transition-all"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Remember Terminal */}
            <div className="flex items-center space-x-sm pt-xs">
              <input
                className="w-4 h-4 rounded-none border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 bg-surface-container-low cursor-pointer"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <label
                className="text-body-sm text-on-surface-variant select-none cursor-pointer"
                htmlFor="remember"
              >
                Remember this terminal for 24h
              </label>
            </div>

            {/* Action Button */}
            <button
              className={`w-full h-[40px] ${
                isSuccess ? "bg-[#10b981]" : "bg-primary-container"
              } text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-sm mt-lg`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin">
                  sync
                </span>
              ) : isSuccess ? (
                <span className="material-symbols-outlined">check_circle</span>
              ) : (
                <>
                  <span className="text-label-caps uppercase tracking-widest font-bold">
                    System Authorization
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    verified_user
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Card Footer Status */}
          <div className="mt-xl pt-md border-t border-outline-variant flex justify-between items-center">
            <div className="flex items-center space-x-xs">
              <span className="material-symbols-outlined text-outline text-[16px]">
                shield
              </span>
              <span className="text-label-caps text-outline uppercase font-bold">
                System Status: Secure
              </span>
            </div>
            <div className="flex items-center space-x-xs">
              <span className="tabular-nums text-on-surface-variant font-medium text-sm">
                {systemClock}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Meta Information */}
        <div className="mt-lg flex flex-col items-center space-y-sm">
          <p className="text-label-caps text-on-surface-variant uppercase opacity-60 font-bold">
            Unauthorized Access Prohibited
          </p>
        </div>
      </main>

      {/* Side Status Rail (Visual Ornament) */}
      <div className="fixed right-lg top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-md border-l border-outline-variant pl-md">
        <div className="space-y-xs">
          <p className="text-label-caps text-outline uppercase font-bold">
            Gateway Node
          </p>
          <p className="tabular-nums text-on-surface-variant font-medium">
            TRC-AUTH-06
          </p>
        </div>
        <div className="space-y-xs">
          <p className="text-label-caps text-outline uppercase font-bold">
            Security Protocol
          </p>
          <p className="tabular-nums text-on-surface-variant font-medium">
            AES-256 / RSA
          </p>
        </div>
        <div className="space-y-xs">
          <p className="text-label-caps text-outline uppercase font-bold">
            Uptime
          </p>
          <p className="tabular-nums text-on-surface-variant font-medium">
            99.982%
          </p>
        </div>
      </div>
    </div>
  );
}