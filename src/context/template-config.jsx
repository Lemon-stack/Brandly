/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

export const ConfigContext = React.createContext();

export default function ConfigProvider({ children }) {
  const [template, setTemplate] = useState(null);

  const contextValue = { template, setTemplate };
  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
