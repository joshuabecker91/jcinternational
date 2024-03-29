import React from "react";
import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  // FaLinkedinIn,
  // FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/jacob.castanon.9" },
  // { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jacobcastanon" },
  // { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
