import styles from "../style";
import { heromobile, pinkline, textimg } from "../assets";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col h-auto ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} md:items-start items-center flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex sm:hidden flex-row justify-between items-center w-full mb-6">
          <h1 className="italic font-poppins text-center sm:text-left font-medium ss:text-[14px] w-full text-[17px] text-white">
            Igniting a Revolution in HR Innovation
          </h1>
          <div class="absolute top-70 mt-10 right-20">
            <img src={pinkline} alt="pinkline" className=" w-30 h-3" />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div className="absolute z-[0] w-[10%] h-[10%] right-10 bottom-10 pink__gradient" />
          <h1 className="flex-1 font-poppins font-semibold text-center md:text-left ss:text-[72px] text-[30px] text-white">
            getlinkedTech <br className="sm:block hidden" />{" "}
            <span className="text-white">Hackathon</span>{" "}
            <span className="text-[#D434FE]">
              1.0{""}
              <img
                src={textimg}
                alt="discount"
                className="h-[30px] w-[64px] sm:w-[120px] sm:h-[84px] object-contain inline-block "
              />{" "}
            </span>{" "}
          </h1>
        </div>

        <p
          className={`text-[17px] text-center md:text-left text-white max-w-[470px] mt-5`}
        >
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>

        <div class={`items-center mt-5`}>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-[#d434fe] to-[#903aff] rounded text-sm px-10 py-3 text-center mr-3 md:mr-0 "
          >
            Get started
          </button>
        </div>

        <div className="mt-10">
          <div className="flex gap-5">
            <CountdownTimer />
          </div>
        </div>
      </div>

      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="hidden sm:flex flex-row items-center mb-2">
          <h1 className="italic font-poppins text-right font-medium ss:text-[34px] w-full text-[18px] text-white">
            Igniting a Revolution in HR Innovation
          </h1>

          <div class="absolute top-70 mt-16 right-30">
            <img src={pinkline} alt="pinkline" className=" w-60 h-3" />
          </div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          {/* <img
            src={ignitehero}
            alt="heroimg"
            className="w-[100%] h-[100%] sm:h-[600px] aspect-square object-contain relative z-[5]"
          /> */}
          <img
            src={heromobile}
            alt="heroimg"
            className="w-[100%] h-[100%] sm:h-[600px] aspect-square object-contain relative z-[5]"
          />

          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
          {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full pink__gradient bottom-40" /> */}
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
        </div>
      </div>

      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        
        <img src={ignitehero} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

     
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div> */}
    </section>
  );
};

export default Hero;
