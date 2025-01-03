import pic_1 from "./pictures/pic_1.jpg"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"
import { queryToken } from "../Startpage/Searchbar/Searchbar"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

/* eslint-disable */

// Aula (University) related URLs
const dissertation = "https://coventry.aula.education/#/dashboard/375c24d6-f2a9-45ad-b981-ede9fb1dcd7b/community/common-room";
const arti_brains = "https://coventry.aula.education/#/dashboard/4955d313-b27a-4067-8417-22f8fc193449/community/common-room"
const intelligent = "https://coventry.aula.education/#/dashboard/ea63164b-e7b2-4642-b912-07484c873aae/community/common-room";

export const links: linkGroup[] = [
  {
    title: "Main",
    links: [
      {
        label: "GitHub",
        value: "https://github.com/",
      },
      {
        label: "Jellyfin",
        value: "http://localhost:8096/web/index.html",
      },
      {
        label: "Prowlarr",
        value: "http://localhost:9696/search",
      },
      {
        label: "YouTube",
        value: "https://youtube.com/",
      },
    ],
  },
  {
    title: "University",
    links: [
      {
        label: "Aula",
        value: "https://coventry.aula.education/",
      },
      // for some ridiculous reason, it doesn't allow aula spaces
      {
        label: "6001CEM",
        value: dissertation,
      },
      {
        label: "6057CEM",
        value: arti_brains,
      },
      {
        label: "6058CEM",
        value: intelligent,
      },
      {
        label: "ChatGPT",
        value: "https://chat.openai.com",
      },
    ],
  },
  {
    title: "Personal",
    links: [
      {
        label: "Beeper",
        value: "https://chat.beeper.com/"
      },
      {
        label: "Ente Auth",
        value: "https://auth.ente.io/auth"
      },
      {
        label: "Ente Photos",
        value: "https://web.ente.io/gallery"
      },
      {
        label: "Instagram",
        value: "https://instagram.com"
      },
      {
        label: "LinkedIn",
        value: "https://linkedin.com/"
      },
      {
        label: "Proton Mail",
        value: "https://mail.proton.me/",
      },
    ],
  },
  {
    title: "Gaming",
    links: [
      {
        label: "Destiny Item Manager",
        value: "https://app.destinyitemmanager.com/4611686018517084183/d2/inventory",
      },
      {
        label: "Engram Blue",
        value: "https://engram.blue/",
      },
      {
        label: "Mobalytics",
        value: "https://mobalytics.gg/destiny-2/builds",
      },
    ],
  },
  {
    title: "Music",
    links: [
      {
        label: "My Mix - YouTube",
        value: "https://www.youtube.com/watch?v=Mvvsa5HAJiI&list=RDMM&start_radio=1",
      },
    ],
  },
  {
    title: "Piracy",
    links: [
      {
        label: "Cobalt",
        value: "https://cobalt.tools/"
      },
      {
        label: "FMHY",
        value: "https://fmhy.net"
      },
      {
        label: "Lucida",
        value: "https://lucida.to/"
      },
      {
        label: "Megathread",
        value: "https://rentry.co/megathread",
      },
      {
        label: "r/Piracy",
        value: "https://reddit.com/r/Piracy",
      },
      {
        label: "qBittorrent WebUI",
        value: "http://127.0.0.1:8080/#/",
      },
    ],
  },
]

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
]

export const searchEngines: dataElem[] = [
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
]

export type FastForwards = Record<string, string>

export interface Search {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    maps: "https://www.openstreetmap.org",
    gpt: "https://chat.openai.com",
    gh: "https://github.com/",
    yt: "https://youtube.com/",
  },
}

export interface colorsType {
  [key: string]: string
  "--bg-color": string
  "--default-color": string
  "--accent-color": string
  "--accent-color2": string
}

export interface Theme {
  name: string
  colors: colorsType
  image: string
}

export const themes: Theme[] = [
  {
    name: "Catppuccin",
    image:
      "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
    colors: {
      "--bg-color": "#24273A",
      "--default-color": "#CAD3F5",
      "--accent-color": "#C6A0F6",
      "--accent-color2": "#8AADF4",
    },
  },
  {
    name: "DeathAndMilk",
    image: pic_1,
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E6E6E6",
      "--accent-color": "#FFB4E6",
      "--accent-color2": "#B4FFE6",
    },
  },
  {
    name: "Pop!OS",
    image:
      "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
    colors: {
      "--bg-color": "#333136",
      "--default-color": "#2BC5EB",
      "--accent-color": "#FCD307",
      "--accent-color2": "#2BC5EB",
    },
  },
  {
    name: "Dark Souls",
    image:
      "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
    colors: {
      "--bg-color": "#32323C",
      "--default-color": "#A0A08C",
      "--accent-color": "#9A6650",
      "--accent-color2": "#461E28",
    },
  },
  {
    name: "S.E.Lain",
    image:
      "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
    colors: {
      "--bg-color": "#0a1a25",
      "--default-color": "#a6b7ab",
      "--accent-color": "#94656b",
      "--accent-color2": "#57182e",
    },
  },
  {
    name: "Kitties",
    image:
      "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
    colors: {
      "--bg-color": "#495662",
      "--default-color": "#d1f1fa",
      "--accent-color": "#80aad4",
      "--accent-color2": "#e8a9b7",
    },
  },
  {
    name: "pretty chill",
    image:
      "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
    colors: {
      "--bg-color": "#397d76",
      "--default-color": "#f1daba",
      "--accent-color": "#c5bdb5",
      "--accent-color2": "#93a662",
    },
  },
  {
    name: "Tartarus",
    image:
      "https://64.media.tumblr.com/8de9e4d31a132f7617ecc05e6a0f8807/tumblr_nd048m6QFH1tqptlzo1_500.gifv",
    colors: {
      "--bg-color": "#282828",
      "--default-color": "#D4BE98",
      "--accent-color": "#7DAEA3",
      "--accent-color2": "#A9B665",
    },
  },
  {
    name: "Pastel Aesthetic",
    image: "https://i.imgur.com/bZHurZn.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#F3C9CB",
      "--accent-color": "#6D79BF",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Bohemian",
    image: "https://i.imgur.com/gcZ6fmk.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#D6B29A",
      "--accent-color": "#B35000",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Modern Boho",
    image: "https://i.imgur.com/HkEcwGl.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#C66B3C",
      "--accent-color": "#F6BC7C",
      "--accent-color2": "#54573C",
    },
  },
  {
    name: "Gruvbox Inspired Green",
    image: "https://i.imgur.com/ISjs7cg.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#CC9A52",
      "--accent-color": "#647D44",
      "--accent-color2": "#FCE4B4",
    },
  },
  {
    name: "Beach",
    image: "https://i.imgur.com/gcW1jul.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E3C9BC",
      "--accent-color": "#91C6CC",
      "--accent-color2": "#F0F8FA",
    },
  },
]
