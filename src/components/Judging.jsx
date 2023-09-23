import { judging } from "../assets";
import styles, { layout } from "../style";

const Judging = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={judging}
        alt="billing"
        className="w-[100%] h-[100%] object-contain relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Judging Criteria <br />{" "}
        <span className="text-[#D434FE]">Key attributes</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <span className="font-bold text-[#FF26B9]">
          Innovation and Creativity:{" "}
        </span>
        Evaluate the uniqueness and creativity of the solution. Consider whether
        it addresses a real-world problem in a novel way or introduces
        innovative features.
        <br />
        <br />
        <span className="font-bold text-[#FF26B9]">Functionality: </span>
        Assess how well the solution works. Does it perform its intended
        functions effectively and without major issues? Judges would consider
        the completeness and robustness of the solution.
        <br />
        <br />
        <span className="font-bold text-[#FF26B9]">Impact and Relevance: </span>
        Determine the potential impact of the solution in the real world. Does
        it address a significant problem, and is it relevant to the target
        audience? Judges would assess the potential social, economic, or
        environmental benefits.
        <br />
        <br />
        <span className="font-bold text-[#FF26B9]">Technical Complexity: </span>
        Evaluate the technical sophistication of the solution. Judges would
        consider the complexity of the code, the use of advanced technologies or
        algorithms, and the scalability of the solution.
        <br />
        <br />
        <span className="font-bold text-[#FF26B9]">
          Adherence to Hackathon Rules:{" "}
        </span>{" "}
        Judges will Ensure that the team adhered to the rules and guidelines of
        the hackathon, including deadlines, use of specific technologies or
        APIs, and any other competition-specific requirements.
        <br />
        <br />
      </p>

      <div class={`items-center mt-5`}>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-[#d434fe] to-[#903aff] rounded text-sm px-10 py-3 text-center mr-3 md:mr-0 "
        >
          Get started
        </button>
      </div>
    </div>
  </section>
);

export default Judging;
