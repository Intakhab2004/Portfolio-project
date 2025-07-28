"use client"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const projects = [
    {
        id: 1,
        title: "True Feedback",
        description: "A platform where user can send message anonymously using unique URL.",
        image: "/trueFeedback.png",
        github: "https://github.com/Intakhab2004/TrueFeedback",
        live: "https://true-feedback-livid.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI", "TypeScript"]
    },

    {
        id: 2,
        title: "StudyNotion",
        description: "An EdTech platform for students to get online courses.",
        image: "/studyNotion.png",
        github: "https://github.com/Intakhab2004/StudyNotion",
        live: "https://study-notion-nu-flax.vercel.app/",
        tech: ["React.js", "TailwindCSS", "Express.js", "MongoDB"]
    },

    {
        id: 3,
        title: "My Portfolio",
        description: "A responsive Portfolio website developed using Next.js, TailwindCSS.",
        image: "/portfolio.png",
        github: "https://github.com/Intakhab2004/StudyNotion",
        live: "https://study-notion-nu-flax.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "Shadcn UI", "React-icons"]
    }
]


export default function Projects(){
    return (
        <section className="w-full px-6 py-16 bg-gradient-to-br from-[#f8fafc] to-[#a6bddb] text-gray-800 dark:from-[#0f0f0f] 
            dark:to-[#2e2d2d] dark:text-gray-100 transition-colors duration-500"
        >
            <div className="flex flex-col gap-y-4 justify-center items-center text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-pink-600">
                    My Projects
                </span>
                <div className="h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-teal-600 to-pink-600"></div>
            </div>

            <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gray-700 hover:scale-105 overflow-hidden 
                                flex flex-col transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-60 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 
                                    dark:group-hover:text-blue-400 transition-colors duration-300"
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-5 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {
                                        project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900
                                                    text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>

                                {/* Links */}
                                <div className="flex justify-between items-center pt-4 mt-auto border-t border-gray-300 dark:border-gray-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                                            hover:text-black/90 dark:hover:text-white/90 transition-colors"
                                    >
                                        <FaGithub className="text-lg" />
                                        Code
                                    </a>

                                    {
                                        project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 
                                                    hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                                            >
                                                <FaExternalLinkAlt className="text-lg" />
                                                Live
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

