import React from "react";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const Product = ({ data }) => {
  return (
    <div className="flex flex-col border-2 rounded-2xl p-4 h-65 w-48 gap-2">
      <img src={data.img} alt="Prod-img" width={120} className="max-h-32 min-h-32 object-contain" />
      <h2 className="font-bold text-[#454848] overflow-hidden">{data.title}</h2>
      <div>
        <span>
          {Array.from({ length: data.star }, (_, i) => (
            <MdOutlineStar key={i} className="inline text-amber-500" />
          ))}
          {Array.from({ length: 5 - data.star }, (_, i) => (
            <MdOutlineStarOutline key={i} className="inline text-amber-500" />
          ))}
        </span> 
        <span className="text-xs text-[#656565]">{data.reviews}</span>
      </div>
      <div>
        <span className="text-[#e85959] line-through">{data.prevPrice}</span>
        <span className="font-bold text-[#424141]"> {data.newPrice} </span>
      </div>
    </div>
  );
};

export default Product;
