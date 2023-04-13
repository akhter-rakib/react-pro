import { userInfo } from "os";
import React, { useState } from "react";
type UserInfo = {
  name: string;
  email: string;
};
const UserTypeAssertionExmpl = () => {
  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  const changeUser = () => {
    setUser({
      name: "Rakib",
      email: "rakibccj@gmail.com",
    });
  };

  return (
    <div>
      Your Use Name {user.name}
      And Mail {user.email}
      <button onClick={changeUser}>Hello Rakib Changed Me Please</button>
    </div>
  );
};
export default UserTypeAssertionExmpl;
