import Section from "@/components/Section";
import { honours } from "@/constant";
import React from "react";

const Honours = () => {
  return (
    <Section heading="Honours & Awards">
      <div className="mt-4">
        <ul className="space-y-1.5 text-lg list-disc list-inside">
          {honours.map((item, idx) => (
            <li key={idx} className="indent-2 list-item">
              {item.title}{" "}
              {item.certificate && (
                <span>
                  [
                  <a
                    href={item.certificate}
                    className="text-[#52adc8] font-semibold hover:underline hover:underline-offset-2"
                    target="_blank"
                  >
                    Certificate
                  </a>
                  ]
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Honours;
