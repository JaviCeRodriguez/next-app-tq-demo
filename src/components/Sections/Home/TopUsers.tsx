"use client";

import UserCard from "@/components/Cards/User";
import { UsersResponse } from "@/models/Users";
import { useQuery } from "@tanstack/react-query";

const fetchTopUsers = () =>
  fetch("https://dummyjson.com/users?limit=8").then((res) => res.json());

export default function TopUsers() {
  const { data } = useQuery<UsersResponse, Error>({
    queryKey: ["topUsers"],
    queryFn: fetchTopUsers,
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
