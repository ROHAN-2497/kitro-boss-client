import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="feature bg-fixed text-white  p-10 my-20">
           <SectionTitle
        subHeading={"Check it Out"}
        heading={"from our menu"}

      ></SectionTitle>
  
    <div className="md:flex bg-black justify-center items-center mb-12 pb-36 pt-12 px-36 gap-10">
     
      <div>
   
        <img src={featuredimg} alt="" />
      </div>
      <div className="text-white md:ml-10">
        <p>March 20, 2023</p>
        <h3 className="text-3xl">WHERE CAN I GET SOME?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className="btn btn-outline  border-0 border-b-4 text-orange-500">Read More</button>
      </div>
    </div>
    </div>
  );
};

export default Featured;
