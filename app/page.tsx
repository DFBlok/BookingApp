import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import "../styles/globals.css";
import DoctorLits from "./_components/DoctorLits";

export default function Home() {
  return (
    <div className="">
      <Hero />

      {/* Catergory & Search */}
      <CategorySearch />
      {/* populate doctor list */}
      <DoctorLits />
    </div>
  );
}
