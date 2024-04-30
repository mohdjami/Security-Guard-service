import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineClose,
  AiOutlineEllipsis,
  AiOutlinePlus,
  AiOutlineWarning,
} from "react-icons/ai";
import { BiCalendar, BiHistory } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Cctv, ConstructionIcon, LassoSelect } from "lucide-react";
import { MdLocalPolice, MdSecurity } from "react-icons/md";
import {
  BsActivity,
  BsCheck2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsFire,
  BsMoonStars,
  BsSun,
} from "react-icons/bs";
import { FaSort, FaUserAlt } from "react-icons/fa";
import { ImSpinner8, ImStatsBars } from "react-icons/im";
import { LuSettings } from "react-icons/lu";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";
import { RxDashboard, RxMixerHorizontal } from "react-icons/rx";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  // Providers
  google: AiFillGoogleCircle,
  github: AiFillGithub,

  // Dashboard Icons
  dashboard: RxDashboard,
  activity: BsActivity,
  settings: LuSettings,
  stats: ImStatsBars,
  fire: BsFire,
  security: MdSecurity,
  loss: TbDeviceAnalytics,
  police: MdLocalPolice,
  cctv: Cctv,
  construction: ConstructionIcon,
  select: LassoSelect,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
};

export const Icons: IconsType = icons;
