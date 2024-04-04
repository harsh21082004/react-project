import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[27px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    green_A400_teal_500: "border-2 border-solid green_A400_teal_500_border",
  },
  gradient: {
    green_A400_3f_teal_500_3f: "bg-gradient",
    green_A400_teal_500: "bg-gradient1 text-white-A700",
  },
};
const sizes = {
  md: "h-[43px] pl-6 pr-[9px] text-sm",
  sm: "h-[36px] px-1.5",
  xl: "h-[50px] px-[25px] text-[21px]",
  lg: "h-[46px] px-[35px] text-lg",
  xs: "h-[29px] px-[17px] text-sm",
  "4xl": "h-[80px] px-2.5",
  "3xl": "h-[54px] px-7 text-base",
  "2xl": "h-[54px] px-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "2xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["md", "sm", "xl", "lg", "xs", "4xl", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["outline", "gradient"]),
  color: PropTypes.oneOf(["green_A400_teal_500", "green_A400_3f_teal_500_3f"]),
};

export { Button };
