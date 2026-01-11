type PropsType = {
  name: string;
  age: number;
  email: string;
  avatar?: string;
};

export const UserCard = ({ name, age, avatar, email }: PropsType) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "30%" }}>
      {avatar ? <img src={avatar} alt="" /> : "Photo not found"}
      <p>{name}</p>
      {age > 18 ? age : `${age} not adult`}
      <p>{email}</p>
    </div>
  );
};
