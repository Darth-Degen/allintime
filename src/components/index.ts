import dynamic from "next/dynamic";

//icons
const SunIcon = dynamic(() => import("./@icons/SunIcon"));
const MoonIcon = dynamic(() => import("./@icons/MoonIcon"));
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const MenuCloseIcon = dynamic(() => import("./@icons/MenuCloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const StarIcon = dynamic(() => import("./@icons/StarIcon"));
const VirtuousLifestyleIcon = dynamic(
  () => import("./@icons/VirtuousLifestyleIcon")
);
const GlobeIcon = dynamic(() => import("./@icons/GlobeIcon"));
const NoteIcon1 = dynamic(() => import("./@icons/NoteIcon1"));
const NoteIcon2 = dynamic(() => import("./@icons/NoteIcon2"));
//atoms
const DropdownButton = dynamic(() => import("./atoms/DropdownButton"));
const DropdownItem = dynamic(() => import("./atoms/DropdownItem"));
const BrandBox = dynamic(() => import("./atoms/BrandBox"));
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const Button = dynamic(() => import("./atoms/Button"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadAnimation = dynamic(() => import("./atoms/LoadAnimation"));
const LoadCircle = dynamic(() => import("./atoms/LoadCircle"));
const TabBarItem = dynamic(() => import("./atoms/TabBarItem"));
const Underline = dynamic(() => import("./atoms/Underline"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const QuoteBox = dynamic(() => import("./atoms/QuoteBox"));
const QuoteImage = dynamic(() => import("./atoms/QuoteImage"));
const QuoteTabs = dynamic(() => import("./atoms/QuoteTabs"));
const CrewneckFlavortext1 = dynamic(
  () => import("./atoms/CrewneckFlavortext1")
);
const CrewneckFlavortext2 = dynamic(
  () => import("./atoms/CrewneckFlavortext2")
);
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const Logo = dynamic(() => import("./molecules/Logo"));
const ThemeChanger = dynamic(() => import("./molecules/ThemeChanger"));
const QuoteWindow = dynamic(() => import("./molecules/QuoteWindow"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const TabBar = dynamic(() => import("./molecules/TabBar"));
const ScrollItem = dynamic(() => import("./molecules/ScrollItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const Menu = dynamic(() => import("./molecules/Menu"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const LandingBanner = dynamic(() => import("./molecules/LandingBanner"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const MerchQuotes = dynamic(() => import("./organisms/MerchQuotes"));
const Footer = dynamic(() => import("./organisms/Footer"));
const GalleryModal = dynamic(() => import("./organisms/GalleryModal"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const MerchView1 = dynamic(() => import("./templates/MerchView1"));
const MerchView2 = dynamic(() => import("./templates/MerchView2"));
const PikaView = dynamic(() => import("./templates/PikaView"));
const NiceFknCrew = dynamic(() => import("./templates/NiceFknCrew"));

export {
  PageHead,
  Logo,
  Header,
  MerchQuotes,
  LandingBanner,
  Footer,
  PageLayout,
  SunIcon,
  StarIcon,
  MoonIcon,
  ThemeChanger,
  QuoteWindow,
  Dropdown,
  DropdownButton,
  ArrowIcon,
  DropdownItem,
  NumberInput,
  TextInput,
  CheckBox,
  BrandBox,
  Button,
  LoadAnimation,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  GlobeIcon,
  NoteIcon1,
  NoteIcon2,
  VirtuousLifestyleIcon,
  NavItem,
  TabBarItem,
  TabBar,
  ScrollItem,
  ExchangeIcon,
  CloseIcon,
  MenuCloseIcon,
  Modal,
  Underline,
  Menu,
  DownloadIcon,
  IconBar,
  SplashScreen,
  LandingView,
  MerchView1,
  MerchView2,
  PikaView,
  NiceFknCrew,
  ImageShimmer,
  QuoteBox,
  QuoteImage,
  QuoteTabs,
  CrewneckFlavortext1,
  CrewneckFlavortext2,
  GalleryModal,
};
