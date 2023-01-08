import { IconCup, IconKnife } from "assets/icons/iconsDefined";
import recordLogo3 from "assets/images/d01.jpg";
import recordLogo6 from "assets/images/d02.jpg";
import recordLogo4 from "assets/images/l01.jpg";
import recordLogo5 from "assets/images/l02.jpg";
import recordLogo2 from "assets/images/l03.jpg";
import recordLogo1 from "assets/images/m01.jpg";
import recordLogo7 from "assets/images/s01.jpg";
import { some } from "utils/helpers";

export const RECORD_LIST: some[] = [
  {
    id: 1,
    type: "Morning",
    icon: IconKnife,
  },
  {
    id: 2,
    type: "Lunch",
    icon: IconKnife,
  },
  {
    id: 3,
    type: "Dinner",
    icon: IconKnife,
  },
  {
    id: 4,
    type: "Snack",
    icon: IconCup,
  },
];

export const dataRecordsFake: some[] = [
  {
    id: 1,
    imgUrl: recordLogo1,
    type: "Morning",
    time: "05.21",
  },
  {
    id: 2,
    imgUrl: recordLogo2,
    type: "Lunch",
    time: "05.21",
  },
  {
    id: 3,
    imgUrl: recordLogo3,
    type: "Dinner",
    time: "05.21",
  },
  {
    id: 4,
    imgUrl: recordLogo4,
    type: "Snack",
    time: "05.21",
  },
  {
    id: 5,
    imgUrl: recordLogo1,
    type: "Morning",
    time: "05.20",
  },
  {
    id: 6,
    imgUrl: recordLogo5,
    type: "Lunch",
    time: "05.20",
  },
  {
    id: 7,
    imgUrl: recordLogo6,
    type: "Dinner",
    time: "05.20",
  },
  {
    id: 8,
    imgUrl: recordLogo7,
    type: "Snack",
    time: "05.20",
  },
];
