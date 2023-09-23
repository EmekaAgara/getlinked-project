import { partners } from "../assets";
import styles, { layout } from "../style";

const Partners = () => (
  <div>
    <h2 className={`${styles.heading2} pt-20 text-center  md:text-center`}>
      Partners and Sponsors
    </h2>
    <p
      className={`${styles}font-poppins font-medium text-center text-dimWhite text-[14px] leading-[24.8px]  pb-10 mt-5`}
    >
      Getlinked Hackathon 1.0 is honored to have the following major
      <br className="hidden sm:flex" /> companies as its partners and sponsors
    </p>

    <div className={layout.sectionImgReverse}>
      <img
        src={partners}
        alt="partners"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </div>
);

export default Partners;
