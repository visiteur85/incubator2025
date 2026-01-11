import { UserCard } from "./UserCard.tsx";

export const Users = () => {
  const users = [
    {
      id: 1,
      name: "John",
      age: 32,
      email: "john@gmail.com",
      avatar:
        "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/8e48616d-361a-42bd-807e-ec2d970b0037_Alice.png",
    },
    {
      id: 2,
      name: "Alice",
      age: 17,
      email: "alice@yahoo.com",
      avatar:
        "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/8e48616d-361a-42bd-807e-ec2d970b0037_Alice.png",
    },
    { id: 3, name: "Mike", age: 44, email: "mike@hotmail.com" },
    {
      id: 4,
      name: "Sarah",
      age: 29,
      email: "sarah@gmail.com",
      avatar:
        "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/8e48616d-361a-42bd-807e-ec2d970b0037_Alice.png",
    },
  ];
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          age={user.age}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </>
  );
};
