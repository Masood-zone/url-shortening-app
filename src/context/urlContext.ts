import { UrlContext } from ".";

export const useUrlContext = () => {
  const context = UrlContext;
  if (!context) {
    throw new Error("useUrlContext must be used within a UrlProvider");
  }
  return context;
};
