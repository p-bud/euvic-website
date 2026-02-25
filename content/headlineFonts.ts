import { IMPORTED_HEADLINE_FONTS } from "@/content/importedFonts";

export type HeadlineFontOption = {
  value: string;
  label: string;
  family: string;
};

export const BASE_HEADLINE_FONTS: HeadlineFontOption[] = [
  { value: "host", label: "Host Grotesk", family: "Host Grotesk" },
  { value: "sincerity", label: "Sincerity", family: "Sincerity" },
  { value: "ortica", label: "Ortica", family: "Ortica Linear" },
  { value: "sneaky", label: "Sneaky Times", family: "Sneaky Times" },
  { value: "basteleur", label: "Basteleur", family: "Basteleur" },
  { value: "aujournuit", label: "Aujournuit", family: "Aujournuit" },
  { value: "stellage", label: "Stellage Test", family: "Stellage Test Display" },
  { value: "hauser", label: "Hauser Test", family: "Hauser Test" }
];

export const SM_HEADLINE_FONTS: HeadlineFontOption[] = [
  { value: "sm-affairstest-italic", label: "SM AffairsTest-Italic", family: "SM AffairsTest-Italic" },
  { value: "sm-affairstest-mono", label: "SM AffairsTest-Mono", family: "SM AffairsTest-Mono" },
  { value: "sm-affairstest-regular", label: "SM AffairsTest-Regular", family: "SM AffairsTest-Regular" },
  { value: "sm-hausertest-10hairline", label: "SM HauserTest-10Hairline", family: "SM HauserTest-10Hairline" },
  { value: "sm-hausertest-20-80multiform", label: "SM HauserTest-20-80Multiform", family: "SM HauserTest-20-80Multiform" },
  { value: "sm-hausertest-40light", label: "SM HauserTest-40Light", family: "SM HauserTest-40Light" },
  { value: "sm-hausertest-60regular", label: "SM HauserTest-60Regular", family: "SM HauserTest-60Regular" },
  { value: "sm-maxevillemonotest-bold", label: "SM MaxevilleMonoTest-Bold", family: "SM MaxevilleMonoTest-Bold" },
  { value: "sm-maxevillemonotest-boldconstruct", label: "SM MaxevilleMonoTest-BoldConstruct", family: "SM MaxevilleMonoTest-BoldConstruct" },
  { value: "sm-maxevillemonotest-construct", label: "SM MaxevilleMonoTest-Construct", family: "SM MaxevilleMonoTest-Construct" },
  { value: "sm-maxevillemonotest-regular", label: "SM MaxevilleMonoTest-Regular", family: "SM MaxevilleMonoTest-Regular" },
  { value: "sm-maxevilletest-bold", label: "SM MaxevilleTest-Bold", family: "SM MaxevilleTest-Bold" },
  { value: "sm-maxevilletest-boldconstruct", label: "SM MaxevilleTest-BoldConstruct", family: "SM MaxevilleTest-BoldConstruct" },
  { value: "sm-maxevilletest-boldconstructitalic", label: "SM MaxevilleTest-BoldConstructitalic", family: "SM MaxevilleTest-BoldConstructitalic" },
  { value: "sm-maxevilletest-bolditalic", label: "SM MaxevilleTest-BoldItalic", family: "SM MaxevilleTest-BoldItalic" },
  { value: "sm-maxevilletest-construct", label: "SM MaxevilleTest-Construct", family: "SM MaxevilleTest-Construct" },
  { value: "sm-maxevilletest-constructitalic", label: "SM MaxevilleTest-ConstructItalic", family: "SM MaxevilleTest-ConstructItalic" },
  { value: "sm-maxevilletest-regular", label: "SM MaxevilleTest-Regular", family: "SM MaxevilleTest-Regular" },
  { value: "sm-maxevilletest-regularitalic", label: "SM MaxevilleTest-RegularItalic", family: "SM MaxevilleTest-RegularItalic" },
  { value: "sm-maxevilletest-tekst", label: "SM MaxevilleTest-Tekst", family: "SM MaxevilleTest-Tekst" },
  { value: "sm-maxevilletest-tekstitalic", label: "SM MaxevilleTest-TekstItalic", family: "SM MaxevilleTest-TekstItalic" },
  { value: "sm-reformatamonotest-bold", label: "SM ReformatAMonoTest-Bold", family: "SM ReformatAMonoTest-Bold" },
  { value: "sm-reformatamonotest-regular", label: "SM ReformatAMonoTest-Regular", family: "SM ReformatAMonoTest-Regular" },
  { value: "sm-reformatatest-bold", label: "SM ReformatATest-Bold", family: "SM ReformatATest-Bold" },
  { value: "sm-reformatatest-bolditalic", label: "SM ReformatATest-BoldItalic", family: "SM ReformatATest-BoldItalic" },
  { value: "sm-reformatatest-display", label: "SM ReformatATest-Display", family: "SM ReformatATest-Display" },
  { value: "sm-reformatatest-italic", label: "SM ReformatATest-Italic", family: "SM ReformatATest-Italic" },
  { value: "sm-reformatatest-regular", label: "SM ReformatATest-Regular", family: "SM ReformatATest-Regular" },
  { value: "sm-reformatbmonotest-bold", label: "SM ReformatBMonoTest-Bold", family: "SM ReformatBMonoTest-Bold" },
  { value: "sm-reformatbmonotest-regular", label: "SM ReformatBMonoTest-Regular", family: "SM ReformatBMonoTest-Regular" },
  { value: "sm-reformatbtest-bold", label: "SM ReformatBTest-Bold", family: "SM ReformatBTest-Bold" },
  { value: "sm-reformatbtest-bolditalic", label: "SM ReformatBTest-BoldItalic", family: "SM ReformatBTest-BoldItalic" },
  { value: "sm-reformatbtest-display", label: "SM ReformatBTest-Display", family: "SM ReformatBTest-Display" },
  { value: "sm-reformatbtest-italic", label: "SM ReformatBTest-Italic", family: "SM ReformatBTest-Italic" },
  { value: "sm-reformatbtest-regular", label: "SM ReformatBTest-Regular", family: "SM ReformatBTest-Regular" },
  { value: "sm-rietveldtest-bold", label: "SM RietveldTest-Bold", family: "SM RietveldTest-Bold" },
  { value: "sm-rietveldtest-monobold", label: "SM RietveldTest-MonoBold", family: "SM RietveldTest-MonoBold" },
  { value: "sm-rietveldtest-monoregular", label: "SM RietveldTest-MonoRegular", family: "SM RietveldTest-MonoRegular" },
  { value: "sm-rietveldtest-regular", label: "SM RietveldTest-Regular", family: "SM RietveldTest-Regular" },
  { value: "sm-solaristest-bold", label: "SM SolarisTest-Bold", family: "SM SolarisTest-Bold" },
  { value: "sm-solaristest-bolditalic", label: "SM SolarisTest-BoldItalic", family: "SM SolarisTest-BoldItalic" },
  { value: "sm-solaristest-italic", label: "SM SolarisTest-Italic", family: "SM SolarisTest-Italic" },
  { value: "sm-solaristest-light", label: "SM SolarisTest-Light", family: "SM SolarisTest-Light" },
  { value: "sm-solaristest-lightitalic", label: "SM SolarisTest-LightItalic", family: "SM SolarisTest-LightItalic" },
  { value: "sm-solaristest-regular", label: "SM SolarisTest-Regular", family: "SM SolarisTest-Regular" },
  { value: "sm-stellagetest-constructed", label: "SM StellageTest-Constructed", family: "SM StellageTest-Constructed" },
  { value: "sm-stellagetest-constructeditalic", label: "SM StellageTest-ConstructedItalic", family: "SM StellageTest-ConstructedItalic" },
  { value: "sm-stellagetest-display", label: "SM StellageTest-Display", family: "SM StellageTest-Display" },
  { value: "sm-stellagetest-italic", label: "SM StellageTest-Italic", family: "SM StellageTest-Italic" },
  { value: "sm-stellagetest-regular", label: "SM StellageTest-Regular", family: "SM StellageTest-Regular" },
];

export const HEADLINE_FONTS: HeadlineFontOption[] = [...BASE_HEADLINE_FONTS, ...SM_HEADLINE_FONTS, ...IMPORTED_HEADLINE_FONTS];
