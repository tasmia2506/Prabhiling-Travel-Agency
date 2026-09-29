import React, { useState } from "react";

export const PearlButton = ({
  label = "BOOK A TRIP",
  className = "",
  style = {},
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "42px",
    padding: "0 20px",
    backgroundColor: isHovered ? "#E6B800" : "#FFD63D",
    color: "#2C2D27",
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    fontSize: "0.8125rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    borderRadius: "50px",
    border: "none",
    boxShadow: isHovered
      ? "0 6px 18px rgba(230, 184, 0, 0.5)"
      : isActive
      ? "0 2px 6px rgba(230, 184, 0, 0.3)"
      : "0 4px 14px rgba(230, 184, 0, 0.4)",
    transform: isActive
      ? "translateY(1px)"
      : isHovered
      ? "translateY(-1px)"
      : "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "all 0.2s ease-out",
    outline: "none",
    ...style
  };

  const arrowStyle = {
    display: "inline-block",
    marginLeft: "0.45rem",
    transform: isHovered ? "translateX(3px)" : "none",
    transition: "transform 0.2s ease-out"
  };

  return (
    <button
      className={`pearl-button ${className}`}
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <span className="pearl-button-label">
        {children || label}
      </span>

      <span
        className="pearl-button-arrow"
        style={arrowStyle}
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
};

export default PearlButton;
