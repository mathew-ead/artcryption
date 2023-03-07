import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Arrow from "../../public/assets/images/arrow.png"
import Product1 from "../../public/assets/images/product1.png"
import Product2 from "../../public/assets/images/product2.png"
import Product3 from "../../public/assets/images/product3.png"
import Product4 from "../../public/assets/images/product4.png"
import Product5 from "../../public/assets/images/product5.png"
import Product6 from "../../public/assets/images/product6.png"
import Product7 from "../../public/assets/images/product7.png"
import Product8 from "../../public/assets/images/product8.png"
import Product9 from "../../public/assets/images/product9.png"
import Product10 from "../../public/assets/images/product10.png"
import Product11 from "../../public/assets/images/product11.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="max-[1300px]:h-full h-[1440px] bg-[url('../../public/assets/images/banner.png')] bg-cover bg-center">
        <div className="max-[800px]:pr-[10px] max-[800px]:pt-[20px] flex pr-[90px] text-white pt-[20px] items-center font-semibold justify-end font-kern text-[37px] leading-[44px]">
          <p className="text-white max-[650px]:text-[24px]">Enter</p>
          <figure>
            <Image
              className="max-[650px]:pt-[5px] pt-[10px] ml-[10px]"
              src={Arrow}
              width={29}
              height={29}
              alt="UK flag"
            />
          </figure>
        </div>
        <h1 className="max-[650px]:text-[50px] max-[800px]:pt-[59px] max-[800px]:text-center max-[800px]:pl-0 text-[74px] pl-[100px] pt-[19px] font-bold leading-[66px] font-haffer text-white">artcryption</h1>
        <p className="max-[650px]:text-[28px] text-[38px] max-[800px]:pt-[30px] max-[800px]:text-center max-[1300px]:text-end max-[1300px]:pr-[10px] max-[1300px]:pt-[30px] max-[1300px]:pl-0 pl-[875px] pt-[490px] text-center font-medium leading-[44px] font-kern text-white">nft dropping soon</p>
        <div className=" max-[800px]:pl-[10px]  max-[800px]:pt-[20px]  max-[800px]:text-center pl-[100px] pt-[150px]">
          <p className="text-[23.6px] relative leading-[30px] font-kern max-[800px]:before:mx-auto before:content-[''] before:mb-[20px] before:border-t before:border-white before:w-[10%] before:block">Vitamin D,<br/> by AIMSIR Studio</p>
          <p className="pt-[20px] font-kern text-[18.5px] leading-[30px] text-white">curated by Bompas & Parr & <br/> MA Creative & Louisa St. Pierre</p>
        </div>
        <div className="w-11/12 max-[650px]:mx-auto">
          <div className="max-[650px]:w-[80%] max-[1300px]:pb-10 max-[650px]:text-center max-[650px]:mx-auto w-[30%] mr-0 ml-auto">
            <p className="pt-[250px] pb-[10px] font-kern text-[23.6px] leading-[30px] text-white">Join Waitlist</p>
            <div className="rounded-[10px] p-[5px] flex border border-white w-full text-black bg-transparent items-center">
              <input className="ml-[8px] pt-[6px] pb-[8px] h-[32px] text-[1rem] w-full bg-transparent" type="text" placeholder="Enter your email" />
              <button className="p-[5px] text-[1.5rem]">
              <Image
                className=""
                src={Arrow}
                width={24}
                height={24}
                alt="UK flag"
              />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto overflow-hidden">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] font-kern text-[38px] font-semibold leading-[46px] text-black">Featured</h2>
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Digital Canapés</p>
            <p className="-mt-[10px] -mb-[10px] text-[#707070] text-[14px] leading-[36px]">view</p>
          </div>
          <div className="flex flex-wrap">
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product1}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin A</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product2}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin C</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product3}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin D</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product1}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin A</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Digital Canapés</p>
          </div>
          <div className="flex flex-wrap">
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product4}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin A</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product5}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin C</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product6}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin D</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product7}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Vitamin A</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">AIMSIR Studio</p>
                  <div className="flex justify-between lg:flex-col items-start xl:flex-row">
                    <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">TBD ETH</p>
                    <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
