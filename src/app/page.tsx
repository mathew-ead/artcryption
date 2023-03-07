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
import Tick from "../../public/assets/images/tick.png"
import Refresh from "../../public/assets/images/refresh.png"
import Timeline from "../../public/assets/images/timeline.png"
import Badge from "../../public/assets/images/badge.png"
import Artcryption from "../../public/assets/images/artcryption.png"
import Twitter from "../../public/assets/images/twitter.svg"
import Facebook from "../../public/assets/images/facebook.svg"
import Instagram from "../../public/assets/images/instagram.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="max-[1300px]:h-full h-[1440px] bg-[url('../../public/assets/images/banner.png')] bg-cover bg-center">
        <div className="max-[800px]:pr-[10px] max-[800px]:pt-[20px] flex pr-[90px] text-white pt-[20px] items-center font-semibold justify-end text-[37px] leading-[44px]">
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
        <p className="max-[650px]:text-[28px] text-[38px] max-[800px]:pt-[30px] max-[800px]:text-center max-[1300px]:text-end max-[1300px]:pr-[10px] max-[1300px]:pt-[30px] max-[1300px]:pl-0 pl-[875px] pt-[490px] text-center font-medium leading-[44px] text-white">nft dropping soon</p>
        <div className=" max-[800px]:pl-[10px]  max-[800px]:pt-[20px]  max-[800px]:text-center pl-[100px] pt-[150px]">
          <p className="text-[23.6px] relative leading-[30px] max-[800px]:before:mx-auto before:content-[''] before:mb-[20px] before:border-t before:border-white before:w-[10%] before:block">Vitamin D,<br/> by AIMSIR Studio</p>
          <p className="pt-[20px] text-[18.5px] leading-[30px] text-white">curated by Bompas & Parr & <br/> MA Creative & Louisa St. Pierre</p>
        </div>
        <div className="w-11/12 max-[650px]:mx-auto">
          <div className="max-[650px]:w-[80%] max-[1300px]:pb-10 max-[650px]:text-center max-[650px]:mx-auto w-[30%] mr-0 ml-auto">
            <p className="pt-[250px] pb-[10px] text-[23.6px] leading-[30px] text-white">Join Waitlist</p>
            <div className="rounded-[10px] p-[5px] flex border border-white w-full text-black bg-transparent items-center">
              <input className="ml-[8px] pt-[6px] pb-[8px] h-[32px] text-[1rem] text-white w-full bg-transparent outline-none" type="text" placeholder="Enter your email" />
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

      <div className="max-w-[1440px] mx-auto">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] text-[38px] font-semibold leading-[46px] text-black">Featured</h2>
          <div className="pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
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
          <div className="pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
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
                  <p className="pt-[10px] text-[20px] leading-[20px]">Ovocence</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Jérémy Hervo</p>
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
                  <p className="pt-[10px] text-[20px] leading-[20px]">Canapé#1</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Jérémy Hervo</p>
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
                  <p className="pt-[10px] text-[20px] leading-[20px]">Canapé#2</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Jérémy Hervo</p>
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
                  <p className="pt-[10px] text-[20px] leading-[20px]">Canapé#3</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Jérémy Hervo</p>
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
          <div className="pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Adam G</p>
          </div>
          <div className="flex flex-wrap">
            <div className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4">
              <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                <Image
                  className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
                  src={Product8}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Anglerfish 2019</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Adam G</p>
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
                  src={Product9}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Chris-Crossing</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Adam G</p>
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
                  src={Product10}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]">Crowbar 2019</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Adam G</p>
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
                  src={Product11}
                  width={220}
                  height={220}
                  alt="UK flag"
                />
                <div className="pl-[8px] pt-[3px] pr-[10px]">
                  <p className="pt-[10px] text-[20px] leading-[20px]" title="Desert Session 2021">Desert Session ...</p>
                  <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">Adam G</p>
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

      <div className="max-w-[1440px] mx-auto text-black">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] text-[38px] leading-[46px] font-bold">Why Artcryption?</h2>
          <p className="pt-[20px] pb-[40px] text-[34px] leading-[36px] font-medium">Sell, protect and share your NFTs, creative assets & IP online</p>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Tick}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Time-Stamped Digital Certificates</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Tick}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Create NFTs and one-of-a-kind collectibles</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Tick}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Resale Royalties & Split Royalties</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Refresh}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Interoperable</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Timeline}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Track buyers, provenance and price history</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                <figure className="mr-[20px] min-w-[35px]">
                  <Image
                    src={Badge}
                    width={35}
                    height={35}
                    alt="UK flag"
                  />
                </figure>
                <p>Alternative copyright protection</p>
              </div>
            </div>
          </div>
          <div className="pt-[38px] pb-[19px]">
            <p>Join Our Community</p>
            <div>
              <button className="my-[10px] mr-[10px] p-[7px] px-[12px] text-[14px] leading-[24px] rounded-[20px] border border-black">LinkedIn</button>
              <button className="my-[10px] mr-[10px] p-[7px] px-[12px] text-[14px] leading-[24px] rounded-[20px] border border-black">Instagram</button>
              <button className="my-[10px] mr-[10px] p-[7px] px-[12px] text-[14px] leading-[24px] rounded-[20px] border border-black">Discord</button>
              <button className="my-[10px] mr-[10px] p-[7px] px-[12px] text-[14px] leading-[24px] rounded-[20px] border border-black">Twitter</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-[60px] pb-[40px]">
        <div className="flex justify-center flex-wrap">
          <div className="w-full text-center lg:text-start lg:w-2/12">
            <p className="text-[36px] leading-[43px] pt-[10px] font-semibold">Join Waitlist</p>
          </div>

          <div className="sm:w-2/3 lg:w-5/12 lg:pl-[20px] pt-5 lg:pt-[7px]">
            <div className="w-[300px] sm:w-[79%] mx-auto lg:ml-0">
              <div className="rounded-[15px] p-[5px] flex border border-white text-black bg-transparent items-center mb-[10px] mt-[3]">
                <input className="ml-[8px] pt-[6px] pb-[8px] h-[32px] text-[1rem] text-white w-full bg-transparent outline-none" type="text" placeholder="Enter your email" />
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
              <p className="pl-[10px] pt-[5px] text-[12px] leading-[14px]">Subscribe to join waitlist and also get access to the latest news and drops</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#dcdce0] text-black">
        <div className="max-w-[1440px] relative mx-auto">
          <h2 className="text-[45px] sm:text-[60px] lg:text-[110px] font-haffer font-bold pb-[20px] pl-[20px] lg:pl-[40px] leading-[normal]">artcryption</h2>
          <figure>
            <Image
              className="absolute top-[90px] -right-[10px] sm:top-0 sm:right-[50px]"
              src={Artcryption}
              width={117}
              height={121}
              alt="UK flag"
            />
          </figure>
          <div className="flex flex-wrap pb-[20px] lg:pb-0">
            <div className="w-full lg:w-4/12 xl:w-1/2">
              <p className="w-[66.66%] lg:w-full text-[16px] leading-[22px] pt-[20px] pl-[20px] lg:pl-[40px]">Artcryption is a platform for creators to share, protect and sell their works showcasing the best in creativity.</p>
            </div>
            <div className="w-full py-6 lg:py-0 lg:w-3/12 xl:w-1/6">
              <ul className="text-[16px] leading-[16px] pl-[20px] lg:pl-[90px]">
                <li className="pb-[20px]">Drops</li>
                <li className="pb-[20px]">About</li>
                <li className="pb-[20px]">How It works</li>
                <li className="pb-[20px]">Curators</li>
                <li className="pb-[20px]">Feed</li>
              </ul>
            </div>
            <div className="w-[80%] lg:w-5/12 pl-[20px] lg:pl-[40px] xl:w-4/12">
              <p className="-mt-[20px] text-[16px] leading-[26px] pb-0 lg:pb-[20px] font-semibold">Newsletter</p>
              <p className="w-[80%] text-[14px] text-[#6f6f6f] leading-[22px] pb-1 lg:pb-[35px]">Subscribe to join the waitlist and get latest news, drops and events.</p>
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <div className="w-full">
                  <input className="p-[4px] pl-[12px] py-[8px] border border-black w-full rounded-[10px] text-black outline-none bg-transparent" type="text"/>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-[20px] pr-[10px]">
                  <button className="uppercase bg-black text-white h-[42px] min-w-[110px] w-full xl:w-[128px] text-[16px] leading-[28px] rounded-[10px] font-medium">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap p-[10px] bg-[#f5f5f5]">
          <div className="flex w-full lg:w-4/12 justify-center lg:justify-start">
            <figure className="ml-[10px]">
              <Image
                src={Twitter}
                width={17}
                height={17}
                alt="UK flag"
              />
            </figure>
            <figure className="ml-[10px]">
              <Image
                src={Facebook}
                width={17}
                height={17}
                alt="UK flag"
              />
            </figure>
            <figure className="ml-[10px]">
              <Image
                src={Instagram}
                width={17}
                height={17}
                alt="UK flag"
              />
            </figure>
          </div>
          <p className="lg:w-5/12 py-6 lg:py-0 text-center lg:text-start w-full text-[12px] text-black leading-[14px] lg:pl-[50px] tracking-[1.44px]">© Artcryption Inc. 2021, All Rights Reserved</p>
          <ul className="lg:w-3/12 w-full px-[10px] flex justify-between items-center text-[12px] text-right uppercase">
            <li>press</li>
            <li>privacy</li>
            <li>terms</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
