import { getSocialLinks } from "../app/utils/data";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import snapchat from "../images/snapchat.svg";
import Image from "next/image";

const links = getSocialLinks();

function SocialLinks() {
  return (
    <div className=" barge flex justify-around ">
      {links.map(function (i) {
        return (
          <div key={i.id}>
            {i.title === "Facebook" && (
              <Image
                src={facebook}
                alt={i.title}
                height={37}
                width={45}
              ></Image>
            )}
            {i.title === "Twitter" && (
              <Image src={twitter} alt={i.title} height={37} width={45}></Image>
            )}
            {i.title === "Instagram" && (
              <Image
                src={instagram}
                alt={i.title}
                height={37}
                width={45}
              ></Image>
            )}
            {i.title === "Snapchat" && (
              <Image
                src={snapchat}
                alt={i.title}
                height={37}
                width={45}
              ></Image>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
