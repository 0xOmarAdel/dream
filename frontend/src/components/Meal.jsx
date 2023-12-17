import { FaStar } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="col-span-1 flex flex-col items-center p-5 shadow-md rounded-md text-center">
      <img
        src="https://cafeu.vercel.app/img/product/12.png"
        alt=""
        className="w-full bg-gray-200 rounded-md"
      />
      <div className="mt-3 flex flex-row gap-1 text-lg text-primary">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="mt-1 text-lg text-gray-600 leading-6">Lorem ipsum dolor sit amet.</p>
      <div className="mt-2 flex flex-row gap-1.5 text-sm">
        <span className="border px-1 py-0.5">S</span>
        <span className="border px-1 py-0.5">M</span>
        <span className="border px-1 py-0.5">L</span>
      </div>
      <div className="flex flex-row">
        
      </div>
    </div>
  );
};

export default Product;
