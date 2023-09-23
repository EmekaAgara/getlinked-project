import styles from "../style";

const Timeline = () => (
  <div>
    <h2 className={`${styles.heading2} text-center  md:text-center`}>
      Timeline
    </h2>
    <p
      className={`${styles}font-poppins font-medium text-center text-dimWhite text-[14px] leading-[24.8px]  pb-20 mt-5`}
    >
      Here is the breakdown of the time we anticipate <br /> using for the
      upcoming event
    </p>

    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#D434FE] before:via-[#D434FE] before:to-[#D434FE]">
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10  group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          1
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            <time class="hidden lg:flex"></time>
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Hackathon Announcement
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            The getlinked tech hackathon 1.0 is formally announced{" "}
            <br className="hidden sm:flex" /> to the general public and teams
            begin to get ready to register.
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-transparent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

        <div class="w-[calc(100%-4rem)] items-end md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              November 18, 2023
            </time>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          2
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            <time class="hidden lg:flex"></time>
            {/* <time class="hidden lg:flex"></time> */}
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Teams Registeration Begins
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            Interested teams can now show their interest in the{" "}
            <br className="hidden sm:flex" />
            getlinked tech hackathon 1.0 2023 by proceeding to register
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-transparent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

        <div class="w-[calc(100%-4rem)] items-end md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              November 18, 2023
            </time>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          3
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            <time class="hidden lg:flex"></time>
            {/* <time class="hidden lg:flex"></time> */}
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Teams Registeration Ends
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            Interested participants are no longer allowed to{" "}
            <br className="hidden sm:flex" /> register
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-transparent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

        <div class="w-[calc(100%-4rem)] items-end md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            {/* <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]"></time> */}
            <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              November 18, 2023
            </time>
          </div>
          {/* <div class="text-white text-sm text-left sm:text-left">
          The getlinked tech hackathon 1.0 is formally announced <br /> to the
          general public and teams begin to get ready to register.
        </div> */}
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          4
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            <time class="hidden lg:flex"></time>
            {/* <time class="hidden lg:flex"></time> */}
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Announcement of the accepted teams{" "}
              <br className="hidden sm:flex" /> and ideas
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            All teams whose idea has been accepted into getlinked{" "}
            <br className="hidden sm:flex" /> tech hackathon 1.0 2023 are
            formally announced
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-transparent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

        <div class="w-[calc(100%-4rem)] items-end md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            {/* <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]"></time> */}
            <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              November 18, 2023
            </time>
          </div>
          {/* <div class="text-white text-sm text-left sm:text-left">
          The getlinked tech hackathon 1.0 is formally announced <br /> to the
          general public and teams begin to get ready to register.
        </div> */}
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          5
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            <time class="hidden lg:flex"></time>
            {/* <time class="hidden lg:flex"></time> */}
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Getlinked Hackathoon 1.0 Officially Begins
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            Accepted teams can now proceed to build their{" "}
            <br className="hidden sm:flex" />
            ground breaking skill driven solutions
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-transparent text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

        <div class="w-[calc(100%-4rem)] items-end md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            {/* <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]"></time> */}
            <time class="hidden sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              November 18, 2023
            </time>
          </div>
          {/* <div class="text-white text-sm text-left sm:text-left">
          The getlinked tech hackathon 1.0 is formally announced <br /> to the
          general public and teams begin to get ready to register.
        </div> */}
        </div>
      </div>

      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-gradient-to-r from-fuchsia-600 to-purple-600 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          6
        </div>

        <div class="w-[calc(100%-4rem)] items-start md:w-[calc(50%-2.5rem)] p-4">
          <div class="flex items-left justify-between space-x-2 mb-1">
            {/* <div class="font-bold text-slate-900"></div> */}
            {/* <div class="flex font-caveat sm:text-transparent font-bold text-lg text-[#D434FE]">
            Hackathon Announcement
          </div> */}
            <time class="hidden lg:flex"></time>
            {/* <time class="hidden lg:flex"></time> */}
            <time class=" sm:flex font-caveat font-bold text-lg text-[#D434FE]">
              Demo Day
            </time>
          </div>
          <div class="text-white pl-2 pb-2  text-sm text-left sm:text-right">
            Teams get the opportunity to pitch their projects to the judges{" "}
            <br className="hidden sm:flex" /> The winner of the hackathon will
            also be announced on this day
          </div>
          <time class="flex pl-2 sm:hidden font-caveat font-bold text-lg text-[#D434FE]">
            November 18, 2023
          </time>
        </div>
      </div>
    </div>
  </div>
);

export default Timeline;
