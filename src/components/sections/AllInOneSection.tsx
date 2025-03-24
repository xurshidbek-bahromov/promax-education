import React from "react";
import AllInOneCard from "../cards/AllInOneCard";

function AllInOneSection() {
  const data = [
    {
      icon: "/images/paper_icon.png",
      title: "loreum ipsum dolor",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo. ",
    },
    {
      icon: "/images/calendar_icon.png",
      title: "lorem ipsum dolor",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo. ",
    },
    {
      icon: "/images/user_group_icon.png",
      title: "lorem ipsum dolor",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo. ",
    },
  ];
  return (
    <section>
      <p className="mt-10 font-bold text-[30px] md:text-[36px] text-secondary text-center">
        All-In-One <span className="text-primary">Studying</span>
      </p>
      <p className="text-[#696984] text-[20px] mb-8 text-center">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-8 lg:grid-cols-3 justify-between mt-32">
        {data.map((feature, index) => (
          <AllInOneCard {...feature} key={index} />
        ))}
      </div>
    </section>
  );
}

export default AllInOneSection;
