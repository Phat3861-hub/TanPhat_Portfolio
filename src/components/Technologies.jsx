import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Fill className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Fill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSass className="text-7xl text-pink-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-7xl text-purple-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAntdesign className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapFill className="text-7xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsFill className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-cyan-200" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithub className="text-7xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
