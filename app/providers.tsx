"use client";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import useCMDK from "@/components/ui/cmdk";
import { ThemeProvider } from "@/components/theme-provider"

export const AppContext = createContext<{
  setShowCMDK: Dispatch<SetStateAction<boolean>>;
}>({
  setShowCMDK: () => {},
});

export default function Providers({ children }: { children: ReactNode }) {
  const { CMDK, setShowCMDK } = useCMDK();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <SessionProvider>
      <AppContext.Provider
        value={{
          setShowCMDK,
        }}
      >
        <CMDK />
        <Toaster />
        {children}
        <Analytics />
        <TailwindIndicator />
      </AppContext.Provider>
    </SessionProvider>
    </ThemeProvider>
  );
}
