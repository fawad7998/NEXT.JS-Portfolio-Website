const Technologies = ({ tech1, tech2, tech3 }) => {
    return (
        <>
            <div className="text-xs sm:text-[10px] text-primaryRed dark:text-primaryDarkOrange">
                {tech1}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryPurple dark:text-primaryDarkYellow mx-3">
                {tech2}
            </div>
            <div className="text-xs sm:text-[10px] text-primaryBlue dark:text-primaryDark">
                {tech3}
            </div>
        </>
    );
};

export default Technologies;
