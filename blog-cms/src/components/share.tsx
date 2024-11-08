import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BsTwitterX, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import CoppyButton from "./copy";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  {
    Icon: BsTwitterX,
    link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-black",
  },
  {
    Icon: BsFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500",
  },
  {
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-500",
  },
  {
    Icon: BsWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500",
  },
];

export default function ShareButton({ slug }: { slug: string }) {
  const domain = "https://konohablog.vercel.app/blog/";
  return (
    <div className="sticky top-[120px]">
      <p className=" uppercase font-bold text-[10px] ">Share to : </p>
      <div className="flex text-xl gap-2 my-2">
      <CoppyButton link={`${domain}${slug}`}/>
        {share.map((item, idx) => {
          return (
            <Link
              key={idx}
              target="_blank"
              href={`${item.link}${domain}${slug}`}
              className={`${item.style}`}
            >
              <item.Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
