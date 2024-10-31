"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const BookAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState<{ time: string }[]>([]);
  /*  const [selectedTimeSlot, setSelectedTimeSlot] = useState(); */
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(
    undefined
  );
  /* const [note, setNote] = useState(); */
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };
  const isPastDay = (day: any) => {
    return day < new Date();
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3 rounded-full bg-blue-600">
            Book Appointment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2  ">
                  {/* Calendar */}
                  <div className="flex flex-col gap-3 items-baseline">
                    <h2 className="flex gap-2 items-center">
                      <CalendarDays className="text-blue-500 h-5 w-5" />
                      Select Date
                    </h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      /* onSelect={setDate} */
                      onSelect={(day) => day && setDate(day)} // Handle potentially undefined day
                      disabled={isPastDay}
                      className="rounded-md border "
                    />
                  </div>
                  {/* Time Slot */}
                  <div className="mt-3 md:mt-0">
                    <h2 className="flex gap-2 items-center mb-3">
                      <Clock className="text-blue-600 h-5 w-5" />
                      Select Time Slot
                    </h2>
                    <div className="grid grid-cols-3 gap-2 border rounded-lg p-4">
                      {timeSlot?.map((item, index) => (
                        <h2
                          onClick={() => setSelectedTimeSlot(item.time)}
                          className={`p-2 border cursor-pointer text-center hover:bg-blue-500 hover:text-white rounded-full ${item.time == selectedTimeSlot && "bg-blue-600 text-white"}`}
                        >
                          {item.time}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
                <Textarea
                  className="mt-3"
                  placeholder="Note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <>
                <Button
                  type="button"
                  className="text-red-500 border-red-500"
                  variant="outline"
                >
                  Close
                </Button>
                <Button
                  type="button"
                  disabled={!(date && selectedTimeSlot)}
                  className="bg-blue-600 "
                >
                  Submit
                </Button>
              </>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
