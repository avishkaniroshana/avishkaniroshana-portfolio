import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "btn-primary focus:ring-primary",
    secondary: "btn-secondary focus:ring-secondary",
    outline: "btn-outline focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
