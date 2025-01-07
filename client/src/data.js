import { FaBed,FaCrown, FaHotel, FaRegBuilding, FaDoorOpen, FaWheelchair ,FaBuilding, FaBriefcase, FaHome ,FaMoneyBillAlt,FaSwimmingPool      } from 'react-icons/fa';

import {
  
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {  MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Single Room",
    icon: <FaBed />,
    description: "This room Designed for one person. Features a single bed. Ideal for solo travelers.!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Double Room",
    icon: <FaBed />,
    description: "This room Designed for two people. Features a double bed!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Twin Room",
    icon: <FaBed />,
    description: "This room Designed for two people. Features two separate single beds!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "King Room",
    icon: <FaCrown />,
    description: "This room Features a king-size bed. Ideal for couples or solo travelers who want extra space.!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Suite",
    icon: <FaHotel  />,
    description: "This room is Larger than a standard room. Includes a bedroom and a separate living area. Often comes with luxury amenities.!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Presidential Suite",
    icon: <FaRegBuilding  />,
    description: "The most luxurious room in the hotel. Includes multiple bedrooms, a living room, a dining area, and high-end amenities.!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Connecting Rooms",
    icon: <FaDoorOpen />,
    description: "wo separate rooms connected by a door. Ideal for families or groups who want privacy while staying close.!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Accessible Room",
    icon: <FaWheelchair  />,
    description: "Designed for guests with disabilities. Includes features like wheelchair accessibility, grab bars, and wider doorways.!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Penthouse Suite",
    icon: <FaBuilding  />,
    description: "Located on the top floor of the hotel. Offers panoramic views, luxury furnishings, and exclusive services.!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Executive Room",
    icon: <FaBriefcase  />,
    description: "Geared toward business travelers. Includes workspaces, high-speed internet, and access to business services.!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Extended Stay Room",
    icon: <FaHome  />,
    description: "Designed for long-term stays. Includes kitchenettes or full kitchens and laundry facilities.!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Economy Room",
    icon: <FaMoneyBillAlt />,
    description: "Basic accommodations with fewer amenities. Ideal for budget-conscious travelers.!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Duplex Room",
    icon: <FaBuilding  />,
    description: "A two-level room connected by a staircase. Ideal for families or guests wanting a unique layout!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Pool Access Room",
    icon: <FaSwimmingPool />,
    description: "Rooms that provide direct access to a swimming pool from a private patio or terrace!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Honeymoon Suite",
    icon: <IoDiamond />,
    description: "Includes romantic decor, a jacuzzi, with added features like private balconies or special views!",
  },
];


export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
