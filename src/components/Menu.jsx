import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services", subMenu: true },
  { id: 4, name: "Testimonials", url: "/testimonials" },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Front-end Development" },
  { id: 2, name: "Back-end Development" },
  { id: 3, name: "Database Management" },
  //   { id: 4, name: "" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium  ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul
                    className="bg-white absolute top-6 left-0 min-w-[220px] px-1 py-1 text-black shadow-lg transition-all duration-300 ease-in-out" // Transition added for dropdown menu
                  >
                    {subMenuData?.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          href={`/category/${subMenu.name}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li
                            className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.05] hover:pl-4 transition-all duration-300 ease-out border-b" // Transition added for hover effects
                          >
                            {subMenu.name}
                            <span className="opacity-50 text-sm">
                              {subMenu.doc_count}{" "}
                              {/* {`(${c.products.data.length})`} */}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
