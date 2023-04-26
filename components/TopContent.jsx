import { getCurrentUser } from "../app/utils/data";
import Image from "next/image";

const userData = getCurrentUser();

function TopContent() {
  return (
    <div className=" barge flex flex-col items-center mt-14 mb-14 justify-center">
      <Image
        src={userData.avatar}
        alt="Profile Image"
        className=" rounded-full m-0   "
        height={145}
        width={145}
      />
      <p className="h1">{userData.name}</p>
    </div>
  );
}

export default TopContent;
