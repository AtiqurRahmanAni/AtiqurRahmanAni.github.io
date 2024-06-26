import { Field, Select } from "@headlessui/react";
import clsx from "clsx";

export const SelectOption = ({ options, className, selected, setSelected }) => {
  return (
    <div className={`${className} || ""`}>
      <Field>
        <div className="relative">
          <Select
            className={clsx(
              "relative block w-full rounded-lg bg-gray-500/70 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              "*:text-black"
            )}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      </Field>
    </div>
  );
};

export default SelectOption;
