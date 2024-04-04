import React from "react";

const sizes = {
  "3xl": "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
  "2xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xl: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "5xl": "text-[68px] font-bold md:text-5xl",
  "4xl": "text-[54px] font-bold md:text-[46px] sm:text-[40px]",
  "7xl": "text-[108px] font-bold md:text-5xl",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
  "6xl": "text-[84px] font-bold md:text-5xl",
  xs: "text-lg font-bold",
  lg: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
