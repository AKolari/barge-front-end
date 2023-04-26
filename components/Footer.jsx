import Image from "next/image";
import cargoBlack from "..//images/cargo-black.svg";

function Footer() {
  return (
    <footer className="barge flex justify-between items-center">
      <p className="h2">Copyright 2023</p>
      <Image src={cargoBlack} alt="LinkBarge" height={37} width={44} />
    </footer>
  );
}

export default Footer;
