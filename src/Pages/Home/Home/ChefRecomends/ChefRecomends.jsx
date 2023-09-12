import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide5.jpg'

const ChefRecomends = () => {
  return (
   <div>
    <SectionTitle
    subHeading={'Should try'}
    heading={"chef recomends"}
    ></SectionTitle>
     <div className='flex text-center my-20 mx-[24px] space-x-4 '>
     
      <div className="card w-96 bg-base-100 bg-slate-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            className="rounded-xl w-[400px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title uppercase">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline  border-b-4 text-orange-600">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 bg-slate-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            className="rounded-xl w-[400px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
          <button className="btn btn-outline  border-b-4 text-orange-600">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 bg-slate-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img3}
            alt="Shoes"
            className="rounded-xl w-[400px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
          <button className="btn btn-outline  border-b-4 text-orange-600">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ChefRecomends;
