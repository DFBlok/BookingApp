//Doctor Table
// Define the Doctor interface to structure the data
export interface Doctor {
  Name: string;
  Address: string;
  Patient: string;
  Year_of_Experience: number;
  StartTime: string;
  EndTime: string;
  About: string;
  categories: string[];
  Phone: string;
  image: string;
  Premium: boolean;
}

//Doctor Table == data
export const doctors: Doctor[] = [
  {
    Name: "Dr. John Doe",
    Address: "123 Health St, Medic City",
    Patient: "John Smith",
    Year_of_Experience: 15,
    StartTime: "09:00",
    EndTime: "17:00",
    About:
      "Dr. John Doe is a specialist in internal medicine with over 15 years of experience.",
    categories: ["Internal Medicine", "General Physician"],
    Phone: "+1234567890",
    image: "/images/doctors/johndoe.jpg",
    Premium: true,
  },
  {
    Name: "Dr. Jane Smith",
    Address: "456 Wellness Ave, Care Town",
    Patient: "Alice Brown",
    Year_of_Experience: 8,
    StartTime: "10:00",
    EndTime: "16:00",
    About:
      "Dr. Jane Smith is a pediatrician dedicated to the care of children for over 8 years.",
    categories: ["Pediatrics"],
    Phone: "+0987654321",
    image: "/images/doctors/janesmith.jpg",
    Premium: false,
  },
  // Add more doctor entries as needed
];

//---------------------------Category Table ----------------
//----------------------------------------------------------
// Define the Category interface with an ID, name, icon, and doctor
export interface Category {
  id: number;
  name: string;
  icon: string; // Path to the icon file
  doctor: string; // Name of the doctor
}

// Create an array of category data
export const categories: Category[] = [
  {
    id: 2,
    name: "Cardiologist",
    icon: "/icons/cardiologist.png", // Assuming icons are stored in the icons folder
    doctor: "Dr. Michael van der Merwe",
  },
  {
    id: 1,
    name: "Dentist",
    icon: "/icons/tooth.png",
    doctor: "Dr. Yin",
  },
  {
    id: 9,
    name: "Eye Specialist",
    icon: "/icons/eye_specialist.png",
    doctor: "Dr. Ahmed Patel",
  },
  {
    id: 4,
    name: "General Doctor",
    icon: "/icons/general_doctor.png",
    doctor: "Dr. Nia Khumalo",
  },
  {
    id: 7,
    name: "Psychotropic",
    icon: "/icons/psychotropic.png",
    doctor: "Dr. Maya Singh",
  },
  {
    id: 8,
    name: "Surgeon",
    icon: "/icons/surgeon.png",
    doctor: "Dr. Nia Khumalo",
  },
  {
    id: 3,
    name: "Neurology",
    icon: "/icons/neurology.png",
    doctor: "Dr. Thabo Mokoena",
  },
  {
    id: 5,
    name: "Orthopedic",
    icon: "/icons/orthopedic.png",
    doctor: "Dr. Lisa Van Rooyen",
  },
  {
    id: 6,
    name: "Otology",
    icon: "/icons/otology.png",
    doctor: "Dr. Sandra Banks",
  },
];
