import React, { useEffect, useState } from "react";
import Styles from "./booking.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Booking = () => {
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted!");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={Styles.booking}>
        <h2 className={Styles.title}>Booking Form</h2>
        <h3 className={Styles.info}>Information</h3>

        <form onSubmit={handleSubmit} className={Styles.form}>
          <label htmlFor="name" className={Styles.label}>
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className={Styles.input}
          />

          <label htmlFor="email" className={Styles.label}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={Styles.input}
          />

          <label htmlFor="destination" className={Styles.label}>
            Destination
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter your destination"
            required
            className={Styles.input}
          />

          <div className={Styles.dates}>
            <DatePicker
              label="Check-In"
              value={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              minDate={new Date()}
              renderInput={(params) => (
                <TextField {...params} fullWidth className={Styles.input} />
              )}
            />

            <DatePicker
              label="Check-Out"
              value={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={checkInDate || new Date()}
              renderInput={(params) => (
                <TextField {...params} fullWidth className={Styles.input} />
              )}
            />
          </div>

          <label htmlFor="guests" className={Styles.label}>
            Guests
          </label>
          <input
            id="guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
            className={Styles.input}
          />

          <button type="submit" className={Styles.submitButton}>
            Book Now
          </button>
        </form>
      </section>
    </LocalizationProvider>
  );
};

export default Booking;
