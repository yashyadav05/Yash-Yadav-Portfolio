import React from 'react'
import Heading from './Heading'
import { Icons } from '../assets/Data/Icons.js'
import SkillCard from './SkillCard'

const {
    reactIcon,
    nodeIcon,
    tailwindtIcon,
    mongodbIcon,
    htmlIcon,
    cssIcon,
    jsIcon,
    pythonIcon,
    firebaseIcon,
    javaIcon,
    graphqlIcon,
    nextjsIcon,
    clerkIcon,
    convexIcon,
    githubIcon,
    gitIcon,
    leetcodeIcon,
    tsIcon,
    postgresQlIcon,
    reduxIcon,
    restAPiIcon,
    expressIcon,
    jwtIcon,
    socketIcon,
    liveBlocksIcon,
    cloudinaryIcon,
    mysqlIcon,
    prismaIcon
} = Icons

const Skills = () => {
    const skills = {
        Frontend: [
            {
                skill: 'Next.js',
                icon: nextjsIcon,
                link: 'https://nextjs.org/',
                hoverColor: ''
            },
            {
                skill: 'React.js',
                icon: reactIcon,
                link: 'https://react.dev/',
                hoverColor: ''
            },
            {
                skill: 'Tailwind CSS',
                icon: tailwindtIcon,
                link: 'https://tailwindcss.com/',
                hoverColor: ''
            },
            {
                skill: 'JavaScript',
                icon: jsIcon,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                hoverColor: ''
            },
            {
                skill: 'TypeScript',
                icon: tsIcon,
                link: 'https://www.typescriptlang.org/',
                hoverColor: ''
            },
            {
                skill: "Redux",
                icon: reduxIcon,
                link: "https://redux-toolkit.js.org/",
                hoverColor: ""
            },
            {
                skill: 'HTML5',
                icon: htmlIcon,
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                hoverColor: ''
            },
            {
                skill: 'CSS3',
                icon: cssIcon,
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                hoverColor: ''
            },
            {
                skill: 'Git',
                icon: gitIcon,
                link: 'https://git-scm.com/',
                hoverColor: ''
            },
            {
                skill: 'GitHub',
                icon: githubIcon,
                link: 'https://github.com/yashyadav05',
                hoverColor: ''
            },
            {
                skill: 'Python',
                icon: pythonIcon,
                link: 'https://www.python.org/',
                hoverColor: ''
            },
            {
                skill: 'Java',
                icon: javaIcon,
                link: 'https://www.oracle.com/java/technologies/',
                hoverColor: ''
            },
            {
                skill: 'Problem Solving',
                icon: leetcodeIcon,
                link: 'https://leetcode.com/u/yashyadav05/',
                hoverColor: ''
            }
        ],
        Backend: [
            {
                skill: 'Node.js',
                icon: nodeIcon,
                link: 'https://nodejs.org/en',
                hoverColor: ''
            },
            {
                skill: 'Express.js',
                icon: expressIcon,
                link: 'https://expressjs.com/',
                hoverColor: ''
            },
            {
                skill: 'REST API',
                icon: restAPiIcon,
                link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
                hoverColor: ''
            },
            {
                skill: 'MongoDB',
                icon: mongodbIcon,
                link: 'https://www.mongodb.com/',
                hoverColor: ''
            },
            {
                skill: "MySQL",
                icon: mysqlIcon,
                link: "https://www.mysql.com/",
                hoverColor: ''
            },
            {
                skill: 'Cloudinary',
                icon: cloudinaryIcon,
                link: 'https://cloudinary.com/',
                hoverColor: ''
            },
            {
                skill: 'LiveBlocks',
                icon: liveBlocksIcon,
                link: 'https://liveblocks.io/',
                hoverColor: ''
            },
            {
                skill: 'Firebase',
                icon: firebaseIcon,
                link: 'https://firebase.google.com/',
                hoverColor: ''
            },
            {
                skill: "Socket.io",
                icon: socketIcon,
                link: "https://socket.io/",
                hoverColor: ""
            },
            {
                skill: 'JWT',
                icon: jwtIcon,
                link: 'https://jwt.io/',
                hoverColor: ''
            }
        ]
    }

    return (
        <div id='skills' className='text-start w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 m-auto min-h-[90vh]'>
            <Heading title={'My Skills'} />
            
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 my-8 sm:my-12 lg:my-16'>
                {Object.keys(skills).map((category, index) => (
                    <div 
                        key={index} 
                        className='group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10'
                    >
                        {/* Background gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        
                        {/* Content */}
                        <div className='relative p-6 sm:p-8 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]'>
                            {/* Category Header */}
                            <div className='flex items-center gap-3 mb-6 sm:mb-8'>
                                <div className='w-1 h-8 bg-emerald-500 rounded-full'></div>
                                <h3 className='text-xl sm:text-2xl text-white font-bold'>
                                    {category}
                                </h3>
                                <div className='flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent'></div>
                            </div>
                            
                            {/* Skills Grid */}
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
                                {skills[category]?.map((skill, skillIndex) => (
                                    <SkillCard 
                                        skill={skill} 
                                        key={skillIndex}
                                    />
                                ))}
                            </div>
                            
                            {/* Decorative elements */}
                            <div className='absolute top-4 right-4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse'></div>
                            <div className='absolute bottom-4 left-4 w-1 h-1 bg-emerald-300/50 rounded-full animate-ping'></div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Optional: Skills summary stats */}
            <div className='flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12'>
                <div className='text-center px-4 py-2'>
                    <div className='text-2xl sm:text-3xl font-bold text-emerald-400'>
                        {skills.Frontend.length + skills.Backend.length}+
                    </div>
                    <div className='text-sm sm:text-base text-gray-300 font-medium'>
                        Technologies
                    </div>
                </div>
                <div className='w-px h-12 bg-emerald-500/30 hidden sm:block'></div>
                <div className='text-center px-4 py-2'>
                    <div className='text-2xl sm:text-3xl font-bold text-emerald-400'>
                        {Object.keys(skills).length}
                    </div>
                    <div className='text-sm sm:text-base text-gray-300 font-medium'>
                        Categories
                    </div>
                </div>
               
               
            </div>
        </div>
    )
}

export default Skills
