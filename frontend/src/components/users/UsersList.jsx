import React from "react";
import User from "./User";
import { useQuery } from "react-query";
import { getUsers } from "@/lib/actions";

const UsersList = () => {
  const { data: users, isLoading } = useQuery("users", getUsers);

  if (isLoading) {
    return (
      <div className="py-5 grid lg:grid-cols-4  md:grid-cols-3 gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <User key={index} skeleton />
        ))}
      </div>
    );
  }

  return (
    <div className="py-5 grid lg:grid-cols-4  md:grid-cols-3 gap-3">
      {users.data.users.map((user) => (
        <User key={user._id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
