import React, { createContext, useContext, useMemo } from "react";
import { AppServicesContainer } from "../../services/AppServicesContainer";

export const ServicesContext = createContext<AppServicesContainer | null>(null);

export const useServices = (): AppServicesContainer => {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be inside ServicesProvider");
  return ctx;
};

export const ServicesProvider = ({ children }: React.PropsWithChildren) => {
  const container = useMemo(() => new AppServicesContainer(), []);
  return <ServicesContext.Provider value={container}>{children}</ServicesContext.Provider>;
};

export default ServicesProvider;
