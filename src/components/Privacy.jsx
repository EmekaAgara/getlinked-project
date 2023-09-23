import { check, privacy } from "../assets";
import styles, { layout } from "../style";

const Privacy = () => (
  <section id="faq" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Privacy Policy and
        <br /> <span className="text-[#D434FE]">Terms</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Last updated on September 12, 2023{" "}
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Below are our privacy & policy, which outline a lot of goodies, its our
        aim to always take at our participant.{" "}
      </p>

      <div className="p-10 mt-16 border border-[#D434FE]">
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At getlinked tech Hackathon 1.0, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you participate in our tech hackathon event. By participating in our
          event, you consent to the practices described in this policy.
        </p>
        <h2
          className={`font-bold text-[14px] text-[#D434FE] pt-5 w-full text-left  md:text-left`}
        >
          Licensing Policy
          <br />{" "}
          <span className="text-white">
            Here are some terms of our Standard License :
          </span>
        </h2>

        <p className="flex-1 pt-8 text-sm md:text-left text-slate-300">
          <img
            src={check}
            alt="discount"
            className="h-[25px] w-[25px] mr-4 object-contain inline-block "
          />{" "}
          The Standard License grants you a non-exclusive{" "}
          <br className="flex sm:hidden" /> right to navigate and register for
          our event{" "}
        </p>

        <p className="flex-1 pt-8 text-sm md:text-left text-slate-300">
          <img
            src={check}
            alt="discount"
            className="h-[25px] w-[25px] mr-4 object-contain inline-block "
          />{" "}
          You are licensed to use the item available{" "}
          <br className="flex sm:hidden" /> at any free source sites, for your
          project developement{" "}
        </p>

        <div class={`items-center flex mt-5`}>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-[#d434fe] to-[#903aff] rounded text-sm px-10 py-3 text-center mr-3 md:mr-0 "
          >
            Get started
          </button>
        </div>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={privacy} alt="faqimg" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Privacy;
