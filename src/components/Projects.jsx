
import Heading from './Heading'

import booklyPreviwImage from '../assets/images/booklyPreview.png'
import quickLinkPreviewImage from '../assets/images/quicklinkPreview.png'
import PlatePal from '../assets/images/PlatePal.png'
import techmartPreviewImage from '../assets/images/techmartPreview.png'
import NeuraBlog from '../assets/images/NeuraBlog.png'
import { VideoPlayer } from './VideoPlayer'
import { Icons } from '../assets/Data/Icons.js'
import konvoPreviewImage from '../assets/images/konvoPreview.png'

const Projects = () => {
    const projects = [
        {
            title: 'NeuraBlog',
            description: 'NeuraeBlog is a cutting-edge blogging platform that combines the power of artificial intelligence with intuitive user experience to create the ultimate content creation tool. Built with modern web technologies, this platform empowers writers, content creators, and businesses to produce high-quality blog content with AI-driven assistance.',
            previewImage: NeuraBlog,
            techstack: [{
                name: "Next js",
                icon: Icons.reactIcon
            },
            {
                name:"TypeScript",
                icon:Icons.jsIcon
            },
            {
                name: "Express",
                icon: Icons.expressIcon
            }
                , {
                name: "Node",
                icon: Icons.nodeIcon
            },
            {
                name: "Imagekit"
                , icon: Icons.imagekiticon
            },
            {
                name:"Context",
                icon:Icons.restAPiIcon
            },
            {
                name: "Tailwind",
                icon: Icons.tailwindtIcon,


            },
            {
                name: "CSS",
                icon: Icons.cssIcon,

            },
            ],
            githubLink: 'https://github.com/yashyadav05/NeuraBlog',
            liveLink: 'https://neura-blog.vercel.app/'

        },
        {
            title: 'PlatePal',
            description: 'GoodFood is a modern and engaging food website offering a wide variety of delicious cuisines with an intuitive and visually appealing user interface. Built using cutting-edge technologies like React, Tailwind CSS, Express.js, MongoDB, and Firebase Authentication, the platform ensures a seamless user experience, secure login, and efficient performance. From browsing diverse food options to placing orders effortlessly, GoodFood showcases my expertise in full-stack development and crafting user-centric designs.',
            previewImage: PlatePal,
            techstack: [{
                name: "React js",
                icon: Icons.reactIcon,

            }, {
                name: "MongoDB",
                icon: Icons.mongodbIcon
            }, {
                name: 'NodeJS',
                icon: Icons.nodeIcon
            },
            {
                name: "Tailwind",
                icon: Icons.tailwindtIcon,

            },
            {
                name: "CSS",
                icon: Icons.cssIcon,

            }, {

                name: 'Firebase',
                icon: Icons.firebaseIcon
            },{
                name:'Imagekit',
                icon:Icons.imagekiticon
            }
            ],
            liveLink: 'https://plate-pal-virid.vercel.app/',
            githubLink: 'https://github.com/yashyadav05/PlatePal'

        },
        
        
    ]
    return (
        <div id='projects' className='text-start w-full max-w-[1180px] px-4 py-5 m-auto '>
            <Heading title={'My Work'} />
            <div className='w-full my-8 flex flex-col gap-40'>
                {
                    projects?.map((project, index) =>
                        <div key={index} className={` md:flex   gap-3  ${index % 2 !== 0 ? 'flex-row-reverse' : ''} `} >
                            {

                                project.videoLink ? (<div className='min-h-[350px] max-h-[500px] flex rounded-xl overflow-hidden flex-1 cursor-pointer  shadow-xl ease-in-out duration-500  items-center justify-center'>
                                    <VideoPlayer link={project?.videoLink} />
                                    {/* <VideoPlayer videoId={'wYq8i0eHhvCAS7bS'} /> */}

                                </div>) :
                                    (<div onClick={() => window.open(project?.liveLink, '_blank')} style={{ backgroundImage: `url(${project?.previewImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='h-[350px] rounded-xl overflow-hidden flex-1 cursor-pointer hover:scale-105 ease-in-out duration-500'>


                                    </div>)





                            }



                            <div className='flex-1 mt-6 h-full text-start '>
                                <h1 className='text-4xl font-bold text-white'>{project?.title}</h1>
                                <p className='text-xl text-[var(--secondary-color)] my-4'>{project?.description}</p>
                                <div className='flex gap-1 my-10 '>
                                    <p className='text-[var(--primary-color)] font-semibold text-2xl '>Tech stack:</p>
                                    <div className='flex items-center gap-2 flex-wrap'>
                                        {
                                            project?.techstack?.map((tech, index) => tech?.icon ? <img src={tech?.icon} className='w-8' /> : <p key={index} className='text-white font-semibold text-xl'>{" , " + tech?.name}</p>)
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center text-white flex-wrap'>
                                    {
                                        project?.liveLink && (
                                            <button onClick={() => window.open(project?.liveLink, '_blank')} className='px-5 py-2 text-lg bg-[var(--primary-color)] rounded-full flex gap-2 items-center hover:bg-[var(--dark-primary-color)] transition duration-300 ease-in-out'><i class="fa-solid fa-globe"></i>View</button>
                                        )
                                    }
                                    {
                                        project?.githubLink && <button onClick={() => window.open(project?.githubLink, '_blank')} className='px-5 py-2 text-lg border-2 border-white rounded-full flex gap-2 items-center hover:bg-white hover:text-black transition duration-300
                                        ease-in-out'><i class="fa-brands fa-github"></i>Github</button>
                                    }
                                    {
                                        project?.videoLink && (
                                            <button onClick={() => window.open(project?.videoLink, '_blank')} className='px-5 py-2 text-lg border-2 border-white rounded-full flex gap-2 items-center hover:bg-white hover:text-black transition duration-300
                                        ease-in-out'><i class="fa-solid fa-circle-play"></i>Demo</button>
                                        )
                                    }
                                </div>
                            </div>

                        </div>)
                }




            </div>

        </div>
    )
}

export default Projects