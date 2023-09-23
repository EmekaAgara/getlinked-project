import { faqimg } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faq = () => (
  <section id="faq" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center  md:text-left`}>
        Frequently Asked
        <br /> <span className="text-[#D434FE]">Questions</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We got answers to the questions that you might want to ask about{" "}
        <span className="font-bold">getlinked Hackathon 1.0</span>
      </p>

      <div className="w-full pt-8">
        <div className="w-full max-w-lg rounded-2xl bg-transparent p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Can I work on a project I already started before the
                    hackathon?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#D434FE]`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What happens if I need help during the hackathon?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What happens if I don't have an idea for a project?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Can I join a team or do I have to come with one?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What happens after the hackathon ends</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-transparent py-4 text-left text-sm font-medium text-white hover:text-gray-200 border-b border-[#D434FE] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Can I work on a project I started before the hackathon?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-300">
                  Frequently Asked Questions We got answers to the questions
                  that you might want to ask about getlinked Hackathon 1.0.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={faqimg} alt="faqimg" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Faq;
