import React from "react";
import Sybazzar from "../../assets/logo/sybazzar.png";
import Upakart from "../../assets/logo/upakart.png";
import Saathimart from "../../assets/logo/sathimart.png";
import Commerce from "../../assets/logo/waftcommerce.svg";
import SamsungPlaza from "../../assets/logo/samsungplaza.png";
import SaathimartDetail from "../../assets/Projects/saathimart.jpg";
import SamsungPlazaDetail from "../../assets/Projects/samsungplaza.jpg";
import SybazzarDetail from "../../assets/Projects/sybazzar.png";
import WaftcommerceDetail from "../../assets/Projects/waftcommerce.png";
import UpakartDetail from "../../assets/Projects/upakart.jpg";

const compArray = [
  {
    id: 1,
    label: "sybazaar",
    img: Sybazzar,
    link: "",
    detailImg: SybazzarDetail,
    details:
      "SYBazzar is an e-commerce marketplace that started its operation in 2022, serving various categories ranging from FMCG, apparel, and electronics inside Nepal. Sybazzar helps sellers to boost their business by providing them with a user-friendly platform, logistical services, cash handling services, product photography, warehousing, and so on. SYbazzar is focused on providing an excellent customer experience through ease-of-purchase, comprehensive customer care, and hassle-free shopping and returns experience. SYbazzar has the vision to connect local sellers to global consumers and hence impact the eCommerce industry by putting one brick at a time.",
    name: "Sybazzar",
  },
  {
    id: 2,
    label: "upakart",
    img: Upakart,
    link: "",
    detailImg: UpakartDetail,
    details:
      "UPAKART is one of the most fascinating project that has been facilitated under Digital Shikhar Pvt. Ltd. We are an online marketplace for buying and selling products. The goal is to make local products available to every people through our online marketplace and also provide customers' everyday needs at a lesser cost, with a larger selection, and more convenient services. We are ready to provide a diverse range of products and services to serve Nepal's small and medium businesses.",
    name: "SamsungPlaza",
  },
  {
    id: 3,
    label: "sathimart",
    img: Saathimart,
    link: "",
    detailImg: SaathimartDetail,
    details:
      "Saathimart's journey started 11 years ago in 2009 from a manufacturing company. After gaining experience for more than 10 years in distributorship, retail and wholesale market in Nepal, we came up with the idea of Saathimart; a retail and online business idea. The company that would enable small as well big entrepreneurs to extend their scope by offering an online platform, enabling young and experienced entrepreneurs through affiliate marketing to earn in Nepal.",
    name: "Saathimart",
  },
  {
    id: 4,
    label: "commerce",
    img: Commerce,
    link: "",
    detailImg: WaftcommerceDetail,
    details:
      "WaftCommerce is an eCommerce development platform developed by Waft Technology Pvt. Ltd. in 2019. It is an platform based on MERN Stack to develop small to enterprise-level ecommerce applications. We provide all solutions to eCommerce-related problems and guide you to develop/grow your eCommerce business.",
    name: "Waftcommerce",
  },
  {
    id: 5,
    label: "samsungplaza",
    img: SamsungPlaza,
    link: "",
    detailImg: SamsungPlazaDetail,
    details:
      "Samsung plaza, the exclusive Retailers of Samsung products in Nepal is a part of Golchha Group. In an era of ever changing technology, and to cater the market demand in the field of mobile phones & consumer electronics Samsung Plaza has always been a pionner with its operation expanding more than a decade. Samsung Digital Plaza strives to create a unique consumer experience to our customers through full range of products and exciting offers. Our main motive is to ensure ease to our customers by saving time, varieties of alternatives and home delivery.",
    name: "Samsung Plaza",
  },
];

const Projects = () => {
  return (
    <>
      <div className="flex justify-center gap-2 items-baseline pb-14">
        <span className="text-2xl">Featured</span>
        <span className="text-2xl semi-bold">Projects</span>
      </div>
      <div className="flex items-center gap-4 justify-center relative">
        {compArray.map((each) => (
          <div key={each.id} className="flex gap-1 items-center">
            <div
              className={`grayscale hover:grayscale-0 duration-200 border-opacity-40 mx-auto p-4 px-8 cursor-pointer`}
            >
              <img
                src={each.img}
                alt={each.label}
                className="object-contain h-20 w-40"
                //   id={`logo#${each.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
