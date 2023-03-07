import Image from "next/image";
import Product1 from "../../../public/assets/images/product1.png"

const Card = () => {

  const cardData = [
    {
      id: 1,
      image: Product1,
      title: "itamin A",
      by: "AIMSIR Studio",
      from:"TBD ETH"
    }, 
    {
      id: 2,
      image: Product1,
      title: "itamin A",
      by: "AIMSIR Studio",
      from:"TBD ETH"
    },
    {
      id: 3,
      image: Product1,
      title: "itamin A",
      by: "AIMSIR Studio",
      from:"TBD ETH"
    },
    {
      id: 4,
      image: Product1,
      title: "itamin A",
      by: "AIMSIR Studio",
      from:"TBD ETH"
    }
  ]

    return (
        <>
        <div className="max-w-[1440px] mx-auto overflow-hidden">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] font-kern text-[38px] font-semibold leading-[46px] text-black">Featured</h2>
          <div className="font-kern pt-[50px] text-black pb-[20px] pr-[13px] text-end text-[28px] leading-[36px]">
            <p>Digital Canapés</p>
            <p className="-mt-[10px] -mb-[10px] text-[#707070] text-[14px] leading-[36px]">view</p>
          </div>
          <div>
            {
              cardData?.map((card) => {
                return (
                  <>
                  <div className="px-[10px] text-black w-1/4" key={card.id}>
                  <div className="card-shadow h-[340px] rounded-[15px] p-[16px] pb-[24px]">
                    <Image
                      className="max-[650px]:pt-[5px] pt-[10px] ml-[10px]"
                      src={card.image}
                      width={220}
                      height={220}
                      alt="UK flag"
                    />
                    <div className="pl-[8px] pr-[10px]">
                      <p className="pt-[10px] text-[20px] leading-[20px]">{card.title}</p>
                      <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">{card.by}</p>
                      <div className="flex justify-between">
                        <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">{card.from}</p>
                        <button className="leading-[20px] text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">Waitlist</button>
                      </div>
                    </div>
                  </div>
                </div>
                </>
                )
              })
            }
          </div>          
        </div>
      </div>
        </>
      );
    }
export default Card