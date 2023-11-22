import React from 'react'
import Bed from '../../../assets/svg/Bed';
import Bathroom from '../../../assets/svg/Bathroom';
import HomeIcon from '../../../assets/svg/HomeIcon';
import XMark from '../../../assets/svg/XMark';

const PropertyCard = ({property}) => {
  return (
    <div className="flex flex-col w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border-2 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex h-[65%] w-full rounded-t-lg object-cover">
        <img
          src={property?.imageURL}
          alt="img"
          className="rounded-t-lg w-full"
        />
      </div>

      <div className="h-[35%] w-full bg-gray-50 rounded-b-lg px-4 py-2">
        <div className="flex gap-1 items-center">
          <p className="font-normal text-sm text-gray-600">Price</p>
          <p className="font-semibold text-lg text-blue-500">
            {property?.price}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg">{property?.name}</p>
          <p className="font-normal text-sm text-gray-500">
            {property?.address}
          </p>
        </div>
        <div className="flex border-t-2 mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <Bed /> {property?.noOfBed} Bed
          </div>
          <div className="flex gap-2 items-center">
            <Bathroom /> {property?.noOfBathrooms} Bathroom
          </div>
          <div className="flex gap-2 items-center">
            <HomeIcon />
            <div className="flex gap-1 items-center">
              <p>{property?.length}</p>
              <XMark />
              <p>{property?.breadth}</p>
              <p>Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard