"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  fetchEmailAddress,
  fetchPhoneNumber,
} from "@/_actions/contact-actions";

import ContactForm from "./contact-form";

import contactData from "@/_data/general-data.json";

const {
  contact: { address },
} = contactData;

const ContactComponent = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showspinnerPhone, setShowspinnerPhone] = useState(false);
  const [showspinnerEmail, setShowspinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowspinnerPhone(true);
    const phoneNumber = await fetchPhoneNumber();
    setShowPhone(phoneNumber);
    setShowspinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowspinnerEmail(true);
    const emailAddress = await fetchEmailAddress();
    setShowEmail(emailAddress);
    setShowspinnerEmail(false);
  };

  return (
    <section className="grid gap-8 max-w-[1280px] mx-auto desktop:grid-cols-2 desktop:pt-25">
      <div className="grid gap-10 place-items-center phone:place-items-start">
        <div className="grid gap-10 px-7 place-items-center phone:place-items-start">
          <h2>Contact</h2>
          <ul className="grid gap-5">
            <li className="grid gap-3 items-center phone:grid-cols-[75px_1fr]">
              <h3 className="text-subheading text-center phone:text-left">
                Email:
              </h3>
              {showEmail === "Show email address" ? (
                <button
                  onClick={handleShowEmailAddress}
                  className="text-paragraph text-link-blue text-center py-3 px-2 -my-3 -mx-2 hover:cursor-pointer phone:text-left tablet:p-0 tablet:m-0 italic tablet:hover:text-black/80"
                  aria-label="Show email address"
                >
                  {showspinnerEmail ? (
                    <div className="mx-auto spinner phone:mx-0"></div>
                  ) : (
                    showEmail
                  )}
                </button>
              ) : (
                <Link
                  href={`mailto:${showEmail}`}
                  className="text-paragraph text-center text-link-blue phone:text-left tablet:hover:text-pink tablet:hover:text-black/80"
                >
                  {showEmail}
                </Link>
              )}
            </li>
            <li className="grid gap-3 items-center phone:grid-cols-[75px_1fr]">
              <h3 className="text-subheading text-center phone:text-left">
                Phone:
              </h3>
              {showPhone === "Show phone number" ? (
                <button
                  onClick={handleShowPhoneNumber}
                  className="text-paragraph text-link-blue text-center py-3 px-2 -my-3 -mx-2 hover:cursor-pointer phone:text-left tablet:p-0 tablet:m-0 italic tablet:hover:text-black/80"
                  aria-label="Show phone number"
                >
                  {showspinnerPhone ? (
                    <div className="mx-auto spinner phone:mx-0"></div>
                  ) : (
                    showPhone
                  )}
                </button>
              ) : (
                <Link
                  href={`tel:${showPhone}`}
                  className="text-paragraph text-center text-link-blue phone:text-left tablet:hover:text-pink tablet:hover:text-black/80"
                >
                  {showPhone}
                </Link>
              )}
            </li>
            <li className="grid gap-3 min-[584px]:items-center phone:grid-cols-[75px_1fr]">
              <h3 className="text-subheading text-center phone:text-left">
                Address:
              </h3>
              <Link
                href="https://maps.app.goo.gl/KofDkkUsyECt7ezc6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <address className="text-link-blue font-light text-center phone:text-left desktop:hover:text-black/80">
                  {address}
                </address>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-light-green p-7 w-full">
          <ContactForm />
        </div>
      </div>
      <Image
        src="/images/swift-tool-hire-9.jpeg"
        alt="Swift Tool Hire"
        width={620}
        height={800}
        className="hidden desktop:block h-full w-full object-cover"
      />
    </section>
  );
};

export default ContactComponent;
