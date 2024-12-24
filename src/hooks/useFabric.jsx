import { FabricContext } from "@/context";
import { useContext } from "react";

export default function useFabric() {
  const context = useContext(FabricContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}
