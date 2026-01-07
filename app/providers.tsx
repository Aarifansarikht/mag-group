"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import SplashScreen from "@/components/ui/SplashScreen";

export function Providers({ children }: React.PropsWithChildren) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check session storage to see if user has already seen the splash in this session
    const hasSeenSplash = sessionStorage.getItem("mag_splash_seen");

    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      // Set the flag and remove splash after animation duration (2.5s)
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("mag_splash_seen", "true");
      }, 2400); // Slightly less than 2.5s to ensure clean cut

      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {showSplash && <SplashScreen />}
      {children}
    </NextThemesProvider>
  );
}