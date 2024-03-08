"use client";

import { User } from "@/models/Users";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const fetchUser = (id: number) =>
  fetch(`https://dummyjson.com/users/${id}`).then((res) => res.json());

const UserDetails = ({ id }: { id: number }) => {
  const { data: user } = useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Image src={user.image} width={200} height={200} alt={user.username} />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>
        {user.address.city}, {user.address.state}
      </p>
    </div>
  );
};

export default UserDetails;
