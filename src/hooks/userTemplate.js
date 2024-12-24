import { ConfigContext } from "@/context/template-config";
import { useContext } from "react";

export default function useTemplate() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}
