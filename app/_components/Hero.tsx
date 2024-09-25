import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src="/doctors.jpg"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Book <span className="text-blue-600">Appointment</span> with
                your favorite <span className="text-blue-600">Doctors</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Our platform makes it easy to schedule appointments with trusted
                healthcare professionals. Whether you need a routine check-up or
                specialized care, we connect you with top doctors in your area.
                Choose your preferred time and consult with confidence, knowing
                that your health is our priority. Book your appointment today
                and take the first step toward a healthier tomorrow.
              </p>

              <Button className="mt-10 bg-blue-600">Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
