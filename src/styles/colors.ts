export type PossibleThemes = "light" | "dark";

type HEXString = `#${string}`;
type RGBString = `${number},${number},${number}`;
type HEXRGBField = { rgb: RGBString; hex: HEXString };

export interface MyTheme {
  pageBackground: HEXString;
  textOnBackground: HEXString;
  lighterTextOnBackground: HEXString;

  card: {
    title: HEXString;
    background: HEXString;
    border: RGBString;
    sidePanel: RGBString;
  };

  inputBorder: HEXString;

  primary: HEXRGBField;
  lightPrimary: HEXString;
}

type AppTheme = {
  [Property in PossibleThemes]: MyTheme;
};

interface IPallete {
  black: HEXRGBField;
  white: HEXRGBField;
  gray: {
    [key: number]: HEXRGBField;
  };
  blue: {
    [key: number]: HEXRGBField;
  };
}

const PALLETE: IPallete = {
  white: {
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
  },
  black: {
    hex: "#000000",
    rgb: "0, 0, 0",
  },
  gray: {
    50: {
      hex: "#F5F7FA",
      rgb: "245, 247, 250",
    },
    200: {
      hex: "#bbc2c9",
      rgb: "187, 194, 201",
    },
    400: {
      hex: "#6c7175",
      rgb: "108, 113, 117",
    },
    700: {
      hex: "#202224",
      rgb: "32, 34, 36",
    },
    800: {
      hex: "#16191C",
      rgb: "22, 25, 28",
    },
  },
  blue: {
    300: {
      hex: "#4292f5",
      rgb: "66, 146, 245",
    },
    400: {
      hex: "#3D75BB",
      rgb: "61,117,187",
    },
  },
};

const colors: AppTheme = {
  light: {
    pageBackground: PALLETE.gray[50].hex,
    textOnBackground: PALLETE.black.hex,
    lighterTextOnBackground: PALLETE.gray[400].hex,
    card: {
      title: PALLETE.gray[400].hex,
      background: PALLETE.white.hex,
      border: PALLETE.black.rgb,
      sidePanel: PALLETE.gray[700].rgb,
    },
    primary: PALLETE.blue[400],
    lightPrimary: PALLETE.blue[300].hex,
    inputBorder: PALLETE.gray[200].hex,
  },
  dark: {
    pageBackground: PALLETE.gray[800].hex,
    textOnBackground: PALLETE.white.hex,
    lighterTextOnBackground: PALLETE.gray[200].hex,
    card: {
      title: PALLETE.gray[200].hex,
      background: PALLETE.gray[700].hex,
      border: PALLETE.gray[50].rgb,
      sidePanel: PALLETE.white.rgb,
    },
    primary: PALLETE.blue[300],
    lightPrimary: PALLETE.blue[400].hex,
    inputBorder: PALLETE.gray[400].hex,
  },
};

export default colors;
