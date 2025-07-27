

export default function SkillCard({title, skills}){
    return (
        <div className="bg-white/80 h-80 w-96 dark:bg-[#1f1f1f]/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center 
            hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-500 will-change-transform"
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200">
                {title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {
                    skills.map((skill, index) => (
                        <div className="flex flex-col items-center space-y-2" key={index}>
                            <div className="text-4xl hover:scale-125 hover:rotate-180 transition-all duration-500">
                                {skill.icon}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}