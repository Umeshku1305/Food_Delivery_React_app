import { FaExternalLinkAlt } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineDomain } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerBold } from "react-icons/pi";

 const Categories = [
    {
        id:1,
        name:"All",
        icon:<FaExternalLinkAlt className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:2,
        name:"Breakfast",
        icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600"  />
    },

    {
        id:3,
        name:"Soups",
        icon:  <LuSoup className="w-[60px] h-[60px] text-green-600"  />
    },

    {
        id:4,
        name:"Pasta",
        icon:  <FaBowlFood className="w-[60px] h-[60px] text-green-600"  />
    },

    {
        id:5,
        name:"Main_course",
        icon:  <MdOutlineDomain className="w-[60px] h-[60px] text-green-600"  />
    },

    {
        id:6,
        name:"pizza",
        icon:  <GiFullPizza className="w-[60px] h-[60px] text-green-600"  />

    },

    {
        id:7,
        name:"Burger",
        icon:  <PiHamburgerBold className="w-[60px] h-[60px] text-green-600"  />
    },
]

export default Categories;