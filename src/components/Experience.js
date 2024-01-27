import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { projects } from "./data/Projects";

const CollabDetails = ({ collaborations }) => {
    return collaborations.map((collab) => (
        <Details
            key={collab.company}
            position={collab.position}
            company={collab.company}
            companyLink={collab.companyLink}
            time={collab.time}
            address={collab.address}
            work={collab.work}
        />
    ));
};

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    const displayWork = (works) => {
        return works.split(". ").map(function (description, index) {
            return (
                <li key={index} className="list-disc ms-9">
                    {description}
                </li>
            );
        });
    };
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <div className="text-justify font-medium text-md w-full md:text-sm">
                    <ul>{displayWork(work)}</ul>
                </div>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    const collaborations = projects.collaborations;
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light" >
                Experiences
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full dark:text-light">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] "
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 dark:text-light/75">
                    <CollabDetails collaborations={collaborations} />
                </ul>
            </div>
        </div>
    );
};
export default Experience;
