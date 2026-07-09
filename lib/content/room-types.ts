import type { RoomType } from "./types";

export const roomTypes: RoomType[] = [
  {
    id: "gl-standard",
    name: "Standard Room",
    division: "guest-lodge",
    photo: "/images/guest-lodge/standard-room.jpg",
    price: 650,
    priceUnit: "night",
    amenities: ["Wi-Fi", "Workspace", "En-suite bathroom", "DSTV"],
  },
  {
    id: "gl-deluxe",
    name: "Deluxe Room",
    division: "guest-lodge",
    photo: "/images/guest-lodge/deluxe-room.jpg",
    price: 850,
    priceUnit: "night",
    amenities: ["Wi-Fi", "Workspace", "En-suite bathroom", "DSTV", "Mini fridge"],
  },
  {
    id: "sa-single",
    name: "Single Room",
    division: "student-accommodation",
    photo: "/images/student-accommodation/single-room.jpg",
    price: 3200,
    priceUnit: "month",
    leaseTerm: "10-month lease (Feb–Nov)",
    amenities: ["Wi-Fi", "Study desk", "Shared kitchen", "Security"],
  },
  {
    id: "sa-shared",
    name: "Shared Room",
    division: "student-accommodation",
    photo: "/images/student-accommodation/shared-room.jpg",
    price: 2200,
    priceUnit: "month",
    leaseTerm: "10-month lease (Feb–Nov)",
    amenities: ["Wi-Fi", "Study desk", "Shared kitchen", "Security"],
  },
];
