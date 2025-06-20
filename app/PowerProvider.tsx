import { useEffect, type ReactNode } from "react";

interface PowerProviderProps {
  children: ReactNode;
}

export default function PowerProvider({ children }: PowerProviderProps) {
  useEffect(() => {
    const initApp = async () => {
      try {
        const { initialize } = await import(
          "@pa-client/power-code-sdk/lib/Lifecycle"
        );

        await initialize();
        console.log("Power Platform SDK initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Power Platform SDK:", error);
      }
    };

    initApp();
  }, []);

  return <>{children}</>;
}
