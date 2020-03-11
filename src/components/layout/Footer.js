import React from 'react';
import { Link } from "gatsby";

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Power your business with done-for-you content marketing covering strategy, planning and production.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <Link to="./terms">Terms &amp; Conditions</Link>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/privacy">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <p>Tel: 07782090659</p>
          </li>
          <li>
          <a href="mailto:hello@strategically.co">Email the team</a>
          </li>
          <li>
          <a href="https://strategically.outgrow.us/strategically-2">Get a quote</a>
          </li>

        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
