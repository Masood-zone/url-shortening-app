// src/context/UrlContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";

interface UrlContextType {
  urls: Array<{ shortenedUrl: string; prevUrl: string }>;
  addUrl: (newUrl: { shortenedUrl: string; prevUrl: string }) => void;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [urls, setUrls] = useState<
    Array<{ shortenedUrl: string; prevUrl: string }>
  >([]);

  useEffect(() => {
    // Load existing URLs from localStorage on component mount
    const storedUrls = localStorage.getItem("urls");
    if (storedUrls) {
      setUrls(JSON.parse(storedUrls));
    }
  }, []);

  const addUrl = (newUrl: { shortenedUrl: string; prevUrl: string }) => {
    setUrls((prevUrls) => [...prevUrls, newUrl]);
    // Save URLs to localStorage after adding a new one
    localStorage.setItem("urls", JSON.stringify([...prevUrls, newUrl]));
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (context === undefined) {
    throw new Error("useUrlContext must be used within a UrlProvider");
  }
  return context;
};
