import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-lg font-medium",
  s: "text-sm font-medium",
  xl: "text-xl font-medium",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_bf font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
