import styles from "./style";
import {
  Rules,
  Overview,
  Faq,
  Footer,
  Navbar,
  Timeline,
  Hero,
  Judging,
  Prizes,
  Privacy,
  Partners,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div
      className={`border-b border-gray-800 ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Overview />
        <Rules />
        <Judging />
        <Faq />
        <Timeline />
        <Prizes />
        <Partners />
        <Privacy />

        {/* <Footer bg-[#100B20] /> */}
      </div>
    </div>

    <div
      className={`bg-[#100B20] ${styles.paddingX} ${styles.flexCenter} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
