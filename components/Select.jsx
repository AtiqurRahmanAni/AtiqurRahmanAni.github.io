import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useState } from "react";

const options = [
  { id: 1, value: 0.001 },
  { id: 2, value: 0.002 },
  { id: 3, value: 0.003 },
  { id: 4, value: 0.004 },
  { id: 5, value: 0.005 },
];

export const Select = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          "relative block w-full rounded-lg bg-gray-500/70 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {selected.value}
        <FontAwesomeIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-white/85"
          aria-hidden="true"
          icon={faAngleDown}
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-gray-500/50 bg-gray-500/80 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <FontAwesomeIcon
              className="invisible group-data-[selected]:visible text-white/85"
              icon={faCheck}
            />
            <div className="text-sm/6 text-white">{option.value}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default Select;
