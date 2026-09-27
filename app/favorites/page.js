"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteProvider";

export default function FavoritesPage() {
  const [users, setUsers] = useState([]);
  const { favorites } = useFavorite();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const favoriteUsers = users.filter((user) => favorites.includes(user.id));

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-400">Favorite</p>
        <h1 className="mt-1 text-4xl font-bold">My Favorite Users</h1>
        <p className="mt-2 text-neutral-400">
          Data ini diambil langsung dari FavoriteContext.
        </p>

        {favoriteUsers.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favoriteUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-neutral-500">
            Belum ada user yang difavoritkan.
          </p>
        )}
      </div>
    </main>
  );
}