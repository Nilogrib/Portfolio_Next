"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";

const projects = [
  {
    title: "Tomato",
    desc: "Working implementation of a fully functional food delivery app with a separate admin panel",
    devStack: "HTML, CSS, React JS, Mongo DB, Express JS, Node JS",
    link: "https://food-del-frontend-9yw5.onrender.com/",
    git: "https://github.com/Nilogrib/food-del",
    src: proj1,
  },
  {
    title: "Moviepedia",
    desc: "A movie recommendation system and encyclopedia based on NLP",
    devStack: "Python, Streamlit, scikit-learn, Pandas, NTLK",
    link: "https://drive.google.com/drive/folders/1ZmW3WbXiSmQk92ZJFMB_0QHbyBxJdKQG?usp=sharing",
    git: "https://github.com/Nilogrib/Moviepedia",
    src: proj3,
  },
  {
    title: "Portfolio",
    desc: "Modern and Fully Responsive Portfolio App with React and Tailwind CSS",
    devStack: "HTML, React JS, Tailwind CSS, Next JS, Framer Motion",
    link: "https://portfolio-next-1guf.vercel.app/",
    git: "https://github.com/Nilogrib/Portfolio_Next",
    src: proj2,
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
        Selected<span className="text-orange-400"> Projects</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <a href={project.link} className="mr-6">
                Link
              </a>
              <a href={project.git}>Github</a>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                width={600}
                height={400}
                className="w-full max-w-[600px] h-auto object-contain border rounded-lg border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
