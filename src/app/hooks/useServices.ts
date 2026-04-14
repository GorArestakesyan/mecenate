import { ServicesContext } from "@providers/ServicesProvider/ServicesProvider";
import { AppServicesContainer } from "@services";
import { useContext } from "react";

export const useServices = (): AppServicesContainer => {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be inside ServicesProvider");
  return ctx;
};
