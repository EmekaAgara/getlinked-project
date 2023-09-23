import { google, thinkimg } from "../assets";
import styles, { layout } from "../style";

const Overview = () => (
  <section id="overview" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={thinkimg}
        alt="thinkimg"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Introduction to getlinked <br className="sm:block hidden" />{" "}
        <span className="text-[#D434FE]">techHackathon 1.0</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        as clear as day: to shape the future. Whether you're a coding genius, a
        design maverick, or a concept wizard, you'll have the chance to
        transform your ideas into reality. Solving real-world problems, pushing
        the boundaries of technology, and creating solutions that can change the
        world, that's what we're all about!
      </p>
    </div>
  </section>
);

export default Overview;
