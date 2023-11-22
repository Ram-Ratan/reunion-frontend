import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Bed from "../../assets/svg/Bed";
import Bathroom from "../../assets/svg/Bathroom";
import XMark from "../../assets/svg/XMark";
import HomeIcon from "../../assets/svg/HomeIcon";
import ReactSelect from "react-select";

const dummyStateData = [
  {
    id: 1,
    name: "Maharastra",
  },
  {
    id: 2,
    name: "Rajsthan",
  },
  {
    id: 3,
    name: "Bihar",
  },
  {
    id: 4,
    name: "Madhay Pradesh",
  },
  {
    id: 5,
    name: "Karnatka",
  },
];

const propertyDataType = [
  {
    id: 1,
    name: "Commercial",
  },
  {
    id: 2,
    name: "Industrial",
  },
  {
    id: 3,
    name: "Housing",
  },
];

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

  return (
    <div className="mx-[100px] flex flex-col mt-10 gap-6">
      <div className="w-full">
        <input
          type="text"
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
          placeholder="Search here for properties"
          className="w-full h-10 rounded-lg px-4 py-2 border-blue-300 border focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex w-full bg-gray-200 rounded-lg py-4 px-4 gap-4">
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border-2">
          <div className="flex h-[65%] w-full bg-red-200 rounded-t-lg object-cover">
            <img
              src="https://reunionhq.in/blog/content/images/size/w1200/2023/09/real-estate-good-view-malaysia-2022-11-11-20-08-16-utc.jpg"
              alt="img"
              className="rounded-t-lg w-full"
            />
          </div>

          <div className="h-[35%] w-full bg-gray-50 rounded-b-lg px-4 py-2">
            <div className="flex gap-1 items-center">
              <p className="font-normal text-sm text-gray-600">Price</p>
              <p className="font-semibold text-lg text-blue-500">5000</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Property name</p>
              <p className="font-normal text-sm text-gray-500">Address</p>
            </div>
            <div className="flex border-t-2 mt-3 justify-between">
              <div className="flex gap-2 items-center">
                <Bed /> 2 Beds
              </div>
              <div className="flex gap-2 items-center">
                <Bathroom /> 2 Bathroom
              </div>
              <div className="flex gap-2 items-center">
                <HomeIcon />
                <div className="flex gap-1 items-center">
                  <p>2 </p>
                  <XMark />
                  <p>2</p>
                  <p>Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border-2">
          <div className="h-[65%] w-full bg-red-200 rounded-t-lg">
            <img
              src="https://reunionhq.in/blog/content/images/size/w1200/2023/09/real-estate-good-view-malaysia-2022-11-11-20-08-16-utc.jpg"
              alt="img"
              className="rounded-t-lg"
            />
          </div>

          <div className="h-[35%] w-full bg-gray-50 rounded-b-lg px-4 py-2">
            <div className="flex gap-1 items-center">
              <p className="font-normal text-sm text-gray-600">Price</p>
              <p className="font-semibold text-lg text-blue-500">5000</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Property name</p>
              <p className="font-normal text-sm text-gray-500">Address</p>
            </div>
            <div className="flex border-t-2 mt-3 justify-between">
              <div className="flex gap-2 items-center">
                <Bed /> 2 Beds
              </div>
              <div className="flex gap-2 items-center">
                <Bathroom /> 2 Bathroom
              </div>
              <div className="flex gap-2 items-center">
                <HomeIcon />
                <div className="flex gap-1 items-center">
                  <p>2 </p>
                  <XMark />
                  <p>2</p>
                  <p>Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border-2">
          <div className="h-[65%] w-full bg-red-200 rounded-t-lg">
            <img
              src="https://reunionhq.in/blog/content/images/size/w1200/2023/09/real-estate-good-view-malaysia-2022-11-11-20-08-16-utc.jpg"
              alt="img"
              className="rounded-t-lg"
            />
          </div>

          <div className="h-[35%] w-full bg-gray-50 rounded-b-lg px-4 py-2">
            <div className="flex gap-1 items-center">
              <p className="font-normal text-sm text-gray-600">Price</p>
              <p className="font-semibold text-lg text-blue-500">5000</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Property name</p>
              <p className="font-normal text-sm text-gray-500">Address</p>
            </div>
            <div className="flex border-t-2 mt-3 justify-between">
              <div className="flex gap-2 items-center">
                <Bed /> 2 Beds
              </div>
              <div className="flex gap-2 items-center">
                <Bathroom /> 2 Bathroom
              </div>
              <div className="flex gap-2 items-center">
                <HomeIcon />
                <div className="flex gap-1 items-center">
                  <p>2 </p>
                  <XMark />
                  <p>2</p>
                  <p>Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border"></div>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border"></div>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border"></div>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-md border-gray-300 hover:border-blue-300 border"></div>
      </div>
    </div>
  );
};

export default Home;
