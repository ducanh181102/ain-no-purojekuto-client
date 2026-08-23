export const BorderWidth = {
  topSmallBorder: "0.5px 0 0 0",
  rightSmallBorder: "0 0.5px 0 0",
  bottomSmallBorder: "0 0 0.5px 0",
  leftSmallBorder: "0 0 0 0.5px",

  smallBorder: "0.5px",
  mediumBorder: "1px",
  largeBorder: "2px",

  topMediumBorder: "1px 0 0 0",
  rightMediumBorder: "0 1px 0 0",
  bottomMediumBorder: "0 0 1px 0",
  leftMediumBorder: "0 0 0 1px",

  topLargeBorder: "2px 0 0 0",
  rightLargeBorder: "0 2px 0 0",
  bottomLargeBorder: "0 0 2px 0",
  leftLargeBorder: "0 0 0 2px",

  noBorder: "0",
} as const;

export const BorderStyle = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",
  double: "double",
  none: "none",
  hidden: "hidden",
  groove: "groove",
  ridge: "ridge",
  inset: "inset",
  outset: "outset",
} as const;