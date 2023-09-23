import { rulesimg } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Rules = () => (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Rules and <br /> <span className="text-[#D434FE]">Guidlines</span>
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

    <div className={layout.sectionImg}>
      <img src={rulesimg} alt="rulesimg" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Rules;
