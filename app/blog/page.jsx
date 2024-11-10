import React from "react";
import { blogItems } from "@/constant";
import Section from "@/components/Section";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <Section heading="Blogs">
      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
        {blogItems.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col pb-4"
          >
            <div>
              <Image
                src={item.coverPic}
                className="w-full h-full"
                alt="Cover photo"
                priority
                quality={100}
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
                {item.description}
              </p>
            </div>
            <div className="mt-auto px-4 space-x-2">
              {item.gitLink && (
                <Button btnText="Git Link" link={item.gitLink} />
              )}
              {item.demoLink && (
                <Button btnText="Project Demo" link={item.demoLink} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
