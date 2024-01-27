import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import { motion } from "framer-motion";
import { projects } from "../components/data/Projects";
import Technologies from "../components/Technologies";
import TransitionEffect from "../components/TransitionEffect";

const DisplayProjects = () => {
    const personalProjects = projects.personnalProjects;
    return personalProjects.map(function (project, index) {
        const title = project.name;
        const img = project.img;
        const summary = project.summary;
        const link = project.live_demo_url;
        const github = project.gitHub_url;
        const technologies = project.technologies;

        if (project.colSize === 12) {
            return (
                <FeaturedProject
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                />
            );
        } else {
            return (
                <Project
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                />
            );
        }
    });
};

const FeaturedProject = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-12">
            <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                <div className="absolute top-0 left-0 -right-3 -z-10 w-[101.5%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto flex justify-center items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                    />
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-3xl font-bold text-primary dark:text-primaryDark lg:text-2xl">
                            {title}
                        </h2>
                    </Link>

                    <p className="my-2 font-medium text-dark dark:text-light text-justify sm:text-sm">
                        {summary}
                    </p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>
                    <div className="mt-5 flex items-center">
                        <Link href={github} target="_blank" className="w-10">
                            <GithubIcon />
                        </Link>
                        <Link
                            href={link}
                            target="_blank"
                            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                        >
                            Demo live
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const Project = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-6 sm:col-span-12">
            <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
                <div className="absolute top-0 left-0 -right-3 -z-10 w-[101.5%] h-[101.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-full cursor-pointer overflow-hidden rounded-lg"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                    />
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-3xl font-bold text-primary dark:text-primaryDark lg:text-2xl">
                            {title}
                        </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light 4xl:h-[70px] 2xl:h-[70px] xl:h-[100px] lg:h-[130px] md:h-[160px] md:flex md:items-stretch sm:h-auto">
                        <span className="text-justify md:self-center">{summary}</span>
                    </p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>

                    <div className="w-full mt-5 flex items-center justify-between">
                        <Link
                            href={link}
                            target="_blank"
                            className="text-lg font-semibold underline md:text-base"
                        >
                            Demo live
                        </Link>
                        <Link href={github} target="_blank" className="w-8 md:w-6">
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const FramerImage = motion(Image);

const Projects = () => {
    return (
        <>
            <Head>
                <title>Gaurav | Projects</title>
                <meta name="description" content="Gaurav | Projects" />
                <meta property="og:title" content="Gaurav | Projects" />
                <meta
                    property="og:description"
                    content="Gaurav | Projects"
                />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:pt-8">
                    <AnimatedText
                        text="Imagination Trumps Knowledge! "
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <DisplayProjects />
                    </div>
                </Layout>
            </main>
        </>
    );
};
export default Projects;
