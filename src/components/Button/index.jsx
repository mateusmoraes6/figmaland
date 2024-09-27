import PropTypes from "prop-types";

export const Button = ({ children, variant = "primary", isBold = false, className = '' }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 rounded-[35px] font-graphik text-xl leading-5 ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-white text-primary"
      }
      ${isBold && 'font-graphik-bold'}
      ${className}
      `}
    >
      {children}
    </button>
  );
};

// Validações
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
  isBold: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
