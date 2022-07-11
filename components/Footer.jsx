import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  const [instagram, setInstagram] = useState(false);
  const [message, setMessage] = useState(false);
  const [phone, setPhone] = useState(false);
  const [key, setKey] = useState(false);
  const [google, setGoogle] = useState(false);

  const hoverInstagranShow = () => {
    setInstagram(true);
  };
  const hoverInstagranLeave = () => {
    setInstagram(false);
  };
  const hoverMessageShow = () => {
    setMessage(true);
  };
  const hoverMessageLeave = () => {
    setMessage(false);
  };

  const hoverPhoneShow = () => {
    setPhone(true);
  };
  const hoverPhoneLeave = () => {
    setPhone(false);
  };

  const hoverKeyShow = () => {
    setKey(true);
  };
  const hoverKeyLeave = () => {
    setKey(false);
  };

  const hoverGoogleShow = () => {
    setGoogle(true);
  };
  const hoverGoogleLeave = () => {
    setGoogle(false);
  };

  const scrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-full px-[30px] py-[40px] mt-[30px">
        <div className="flex justify-center">
          <div>
            <img src="/assets/images/backgroundFooter.png" alt="footer" />
          </div>
          <div className=" h-fit w-full  absolute flex justify-center pt-[10px] cursor-pointer transition  delay-150  hover:-translate-y-1   ">
            <Image
              onClick={() => scrollClick()}
              width={10}
              height={13}
              className=""
              src="/assets/images/Go Up.png"
              alt="go up"
            />
          </div>
          <div className="flex justify-center w-full mt-[60px] absolute">
            <Image
              width={118}
              height={42}
              className=""
              src="/assets/images/makeenFooterLogo.png"
              alt="makeen logo"
            />
          </div>
          <p className="absolute opacity-70 leading-[35px] mt-[123px] text-[#ECF9FD] w-full flex justify-center h-fit px-[280px] text-[10px] lg:text-[14px] text-center font-iranYekan	">
            آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد فرصت های
            شغلی برای جوانان این سرزمینه. ما توی آکادمی مکین با استفاده از
            متدولوژی آموزشی منحصر به فرد ، کمک میکنیم تا آدم های با انگیزه بتونن
            به رویاهاشون .برسن. ما توی مکین ، فقط به دانشجوها آموزش نمیدیم. ما
            .بهشون آینده میدیم
          </p>

          <div className="absolute mt-[270px] flex justify-between px-[390px] w-full">
            <div className="relative">
              <div
                onMouseEnter={() => hoverGoogleShow()}
                onMouseLeave={() => hoverGoogleLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0_3px_9px_0px] hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-gradient-[129deg] from-[#FFEEBB]  to-[#fac4bf]  bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <Image
                  src="/assets/images/google-maps-logo.png"
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  alt="google-map pic"
                  className="self-center shadow-white"
                />
              </div>
              {google ? (
                <p className="bg--500 text-[#ECF9FD] w-max absolute top-[50px] right-[-50px] font-iranYekan	 		">
                  موقعیت ما بر روی نقشه
                </p>
              ) : null}
            </div>
            <div className="relative">
              <div
                onMouseEnter={() => hoverKeyShow()}
                onMouseLeave={() => hoverKeyLeave()}
                className="w-[35px] h-[35px]  hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%] bg-[#ebecec] cursor-pointer"
              >
                <Image
                  src="/assets/images/key.png"
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  className="self-center"
                  alt="key pic"
                />
                {key ? (
                  <p className="-red-500 text-[#ECF9FD] w-[250px] absolute top-[50px] text-center font-[14px] -[-40px] font-iranYekan">
                    تهران، مترو علم و صنعت، خيابان فرجام، پلاک 495، طبقه پنجم
                  </p>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <div
                onMouseEnter={() => hoverPhoneShow()}
                onMouseLeave={() => hoverPhoneLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%] bg-gradient-[132deg] from-[#ecf9fd] to-[#DAF2FB] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <Image
                  src="/assets/images/phone.png"
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  alt="phone pic"
                  className="self-center"
                />
              </div>
              {phone ? (
                <p className="bg--500 text-[#ECF9FD] w-max absolute top-[50px] right-[-40px] font-iranYekan">
                  021-77188185-6
                </p>
              ) : null}
            </div>
            <div className="--400 relative">
              <div
                onMouseEnter={() => hoverMessageShow()}
                onMouseLeave={() => hoverMessageLeave()}
                className="w-[35px] h-[35px] hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center rounded-[50%] bg-gradient-[132deg] from-[#FFF2EA] to-[#f8e1d4] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <Image
                  src="/assets/images/message.png"
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  className="self-center"
                  alt="message pic"
                />
              </div>
              {message ? (
                <p className="bg--500 text-[#ECF9FD] w-fit absolute top-[50px] right-[-40px] font-iranYekan">
                  Info@makeen.ir
                </p>
              ) : null}
            </div>
            <div className="--400 w-[100px] relative">
              <div
                onMouseEnter={() => hoverInstagranShow()}
                onMouseLeave={() => hoverInstagranLeave()}
                className="w-[35px] h-[35px] relative hover:shadow-[0px_3px_9px_px] hover:shadow-[#fff] flex justify-items-center justify-center  rounded-[50%]  bg-gradient-[132deg] from-[#E6EAED] to-[#bcc2c7] bg-origin-padding bg-no-repeat cursor-pointer"
              >
                <Image
                  src="/assets/images/instagram.png"
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  className="self-center"
                  alt="instagram pic"
                />
              </div>
              {instagram ? (
                <p className="bg--500 text-[#ECF9FD] w-fit absolute right-[10px] top-[50px] font-iranYekan ">
                  @makeenacademy
                </p>
              ) : null}
            </div>
          </div>

          <ul className=" font-iranYekan mt-[340px] flex-row-reverse	px-[290px] pt-[60px] flex justify-evenly text-right w-full h-fit absolute text-[16px] ">
            <hr className="absolute w-[60%] px-[120px] border-[#294359] " />
            <Link href="/">
              <li className=" flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer  pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                دوره ها
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                ثبت نام دوره
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درخواست همکاری
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300 ">
                بوت کمپ
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                درباره مکین
              </li>
            </Link>
            <Link href="/">
              <li className="flex justify-center text-[#768b9b] hover:text-white hover:cursor-pointer   pb-[17px]  mt-[35px] transition font-semibold leading-[25px]  opacity-50 relative  hover:opacity-100 cursor-pointer before:content-[''] before:absolute before:h-1 before:w-[80px] before:top-full before:bg-menu_item before:bg-50_50 before:bg-no-repeat before:bg-0_100 before:rounded-[10px] before:transition-menu_item_transition hover:before:bg-100_100 ease-in-out before:duration-300">
                بلاگ
              </li>
            </Link>
          </ul>
          <p className="absolute mt-[520px] pb-[10px] text-center text-[#00213E] opacity-50 after:content-['©'] after:ml-2 ">
            .تمام حق و حقوق این سایت متعلق به موسسه ایده آل رسانه مکین می باشد
          </p>
        </div>

        {/* <img className=" absolute left-[-40px] w-[500px] top-[200px] " src="/assets/images/Group 115@2x.png" alt="halghe" /> */}
      </footer>
    </>
  );
};

export default Footer;
