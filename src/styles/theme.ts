export const lightTheme: any = {
  body: "#d2d7dc",
  color1: "#001429",
  color2: "#003152",
  color3: "#738b9c",
  color4: "#001429",
  hover: "#588bae",
  btn: "#0d52bd",
  intro: "#003152",
  themeIcons: "#001429",
  cursor: "#fff",
};
export const darkTheme: any = {
  body: "#001429",
  color1: "#e3ebec",
  color2: "#d2d7dc",
  color3: "#b1bec8",
  color4: "#79f6fc",
  hover: "#79f6fc",
  btn: "#79f6fc",
  intro: "#79f6fc",
  themeIcons: "#fccf3e",
  cursor: "#79f6fc",
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
