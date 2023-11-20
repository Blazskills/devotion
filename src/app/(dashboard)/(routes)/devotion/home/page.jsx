import React from "react";
import { FaHamburger } from "react-icons/fa";

export const metadata = {
  title: "The Apostolic Church Nigeria Daily Bible reading",
  description: "Here is TACN online daily bible reading",
};

const DevotionHome = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="m-auto">
        <div className="text-center">
          <p className="text-xl uppercase text-purple-700 font-serif font-extrabold">
            Welcome to Daily Devotion
          </p>
          <p className="text-base capitalize text-purple-400 font-serif font-normal pt-5">
            Kindly click the left side bar to view all the months
          </p>
          <div className="lg:max-w-3xl px-3">
            <p className="text-start text-base  font-serif font-normal py-5 ">
              Embark on a transformative journey through a year of daily
              reflections, exploring the boundless grace and wisdom found in the
              Scriptures. Each day, immerse yourself in a carefully curated
              passages, its timeless teachings resonate in your heart. &quot;365
              Days of Grace&quot; invites you to cultivate a daily rhythm of
              reflection, prayer, and connection with the divine. Join us on
              this year-long adventure as we discover the enduring love and
              guidance that God&quot;s Word provides. May this devotion be a
              source of inspiration, growth, and spiritual nourishment
              throughout the entire year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevotionHome;
