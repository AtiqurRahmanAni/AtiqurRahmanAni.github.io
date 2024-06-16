import Section from "@/components/Section";
import React from "react";

const Home = () => {
  return (
    <div className="pb-4">
      <div className="text-justify text-lg mt-6 md:mt-0">
        <p className="font-medium text-lg">Hello!👋</p>
        <p className="mt-3">
          This is Md Atiqur Rahman. I was a former Junior Software Engineer at{" "}
          <a
            href="https://pioneeralpha.com/"
            className="text-[#52adc8] font-semibold"
            target="_blank"
          >
            Pioneer Alpha Ltd.
          </a>{" "}
          Currently, I am working as a Part Time Lecturer at the Department of
          CSE,{" "}
          <a
            href="https://aust.edu/"
            className="text-[#52adc8] font-semibold"
            target="_blank"
          >
            Ahsanullah University of Science and Technology
          </a>
          . I graduated from the same university with a Bachelor&apos;s degree
          in Computer Science and Engineering. I am a passionate programmer with
          expertise in C, C++, and Python. I have hands-on experience in
          robotics and have completed various projects. I am very much
          interested in the field of Robotics and Computer Vision works.
        </p>
        <p className="mt-5">
          From the beginning of my university life, I have had a strong passion
          for programming, participating in numerous programming competitions
          and occasionally joining robotics competitions. In my third year,
          second semester, I published my first research paper, kickstarting my
          journey in research. My research interests include robotics, natural
          language processing (NLP) and computer vision. I have successfully
          applied these technologies to various real-life projects.
        </p>
      </div>
      <div className="mt-8">
        <div className="mb-4">
          <h2 className="font-semibold text-2xl text-gray-600">
            Recent News ⚡
          </h2>
          <div className="mt-[2px] h-[1.5px] w-full bg-gray-300/40" />
        </div>
        <div>
          <ul className="list-disc list-outside pl-5">
            <li className="text-md">
              <div className="inline">
                <span className="text-red-700">April 23:</span>{" "}
                <a
                  href="https://www.techscience.com/CMES/online/detail/20790"
                  className="text-[#52adc8]"
                  target="_blank"
                >
                  GliomaCNN: An Effective Lightweight CNN Model in Assessment of
                  Classifying Brain Tumor from Magnetic Resonance Images Using
                  Explainable AI
                </a>{" "}
                got accepted in{" "}
                <a
                  href="https://www.techscience.com/journal/CMES"
                  className="text-[#52adc8]"
                  target="_blank"
                >
                  CMES
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
