
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className=" mx-auto  text-center my-12 md:w-3/12">
            <p className="text-orange-500 mb-4">--- {subHeading} ---</p>
            <h3 className="uppercase text-4xl py-4 border-y-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;