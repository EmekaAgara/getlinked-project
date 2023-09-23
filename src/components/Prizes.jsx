import { medals, prizes } from "../assets";
import styles, { layout } from "../style";

const Prizes = () => (
  <section id="product" className={layout.section}>
    <div className={`${layout.sectionInfo} flex sm:hidden pt-20`}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Prizes and <br /> <span className="text-[#D434FE]">Rewards</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Highlight of the prizes or rewards for winners and for participants.
      </p>

      <div class={`items-center mt-5`}></div>
    </div>
    <div className={layout.sectionImgReverse}>
      <img
        src={prizes}
        alt="prizes"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo}  sm:flex hidden`}>
      <h2 className={`${styles.heading2} pl-32 text-center  md:text-left`}>
        Prizes and <br /> <span className="text-[#D434FE]">Rewards</span>
      </h2>
      <p className={`${styles.paragraph} pl-32 max-w-[470px] mt-5`}>
        Highlight of the prizes or rewards for winners and for participants.
      </p>

      <div class={`items-center mt-5`}></div>
      <div className={`${layout.sectionImgReverse} hidden sm:flex`}>
        <img
          src={medals}
          alt="prizes"
          className="w-[100%] h-[100%] object-contain relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
    </div>
    <div className={`${layout.sectionImgReverse} flex sm:hidden`}>
      <img
        src={medals}
        alt="prizes"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Prizes;
