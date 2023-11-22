import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactSelect from "react-select";
import { getAllProperties } from "../../apiClient/property";
import PropertyCard from "./propertyCard/PropertyCard";
import { dummyStateData, propertyDataType } from "../../data/dummyData";


const formateOptions = (states) => {
  return states?.map((state) => {
    return {
      label: state?.name,
      value: state?.id,
      ...states,
    };
  });
};

const Home = () => {
  const [stateOptions, setStateOptions] = useState(
    formateOptions(dummyStateData)
  );
  const [propertyType, setPropertyType] = useState(
    formateOptions(propertyDataType)
  );
  const [selectedState, setSelectedState] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedDate, setSelectedDate] = useState();
  const [price, setPrice] = useState(5000);
  const [query, setQuery] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  useEffect(()=>{
    getAllProperties().then((res)=>{
      setPropertyList(res?.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className="mx-[100px] flex flex-col mt-10 gap-6">
      <div className="w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here for properties"
          className="w-full h-10 rounded-lg px-4 py-2 border-blue-300 border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col lg:flex-row bg-gray-200 rounded-lg py-4 px-4 gap-4">
        <div className="w-[200px] h-10 flex">
          <ReactSelect
            placeholder="Select Location"
            className="w-full h-full"
            options={stateOptions}
            value={selectedState}
            isClearable
            onChange={(state) => setSelectedState(state)}
          />
        </div>

        <div className="w-[200px] h-10 flex">
          <ReactSelect
            placeholder="Property Type"
            className="w-full h-full"
            options={propertyType}
            value={selectedPropertyType}
            isClearable
            onChange={(type) => setSelectedPropertyType(type)}
          />
        </div>

        <div>
          <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Date"
            isClearable
            className="border border-blue-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex w-[200px] h-10 rounded-lg px-4 py-2 bg-white items-center justify-center">
          <div className="flex flex-col w-full justify-start">
            <p className="text-xs">Price {price}</p>
            <input
              type="range"
              value={price}
              min={0}
              max={5000}
              step={100}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <button className="flex w-[200px] h-10 rounded-lg px-4 bg-blue-300 py-2 items-center justify-center hover:bg-blue-500 font-semibold text-lg">
          Apply
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
        {propertyList?.map((property)=>{
          return (
            <PropertyCard property={property}/>
          );
        })}
        
      </div>
    </div>
  );
};

export default Home;



