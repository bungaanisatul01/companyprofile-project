"use client";
import { useContext, useState } from "react";
import { FavoriteContext } from "@/context/FavoriteContext";

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const isFavorite = (userId) => favorites.includes(userId);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}