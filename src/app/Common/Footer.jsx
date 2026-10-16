import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white flex flex-col justify-center items-center gap-5 p-5 md:p-20">
      <h1 className="text-4xl"><span className="font-bold">Keen</span>Keeper</h1>
      <p className="text-xs md:text-sm text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <p>Social Links</p>
      <div className="flex items-center gap-5">
        <button className="p-3 bg-white rounded-full text-black "><FaXTwitter/></button>
        <button className="p-3 bg-white rounded-full text-black "><FaFacebookF/></button>
        <button className="p-3 bg-white rounded-full text-black "><SiDiscord/></button>
      </div>
      <div className="border-b border-gray-400 h-1 w-full"></div>
      <div className="text-xs flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center w-full">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;