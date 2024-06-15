// eslint-disable-next-line
import React from "react";
import { linksData } from "./linksData";
import Dropdown from "./dropdown";

function Footer() {
  return (
    <footer className="footer birthdayFooter">
      <div className="links">
        {/* Using map function to create a div for each element and with its links and name */}
        <div>
          {linksData.map((item, index) => (
            <div key={index}>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="footerdetails">
        <Dropdown />
        <div className="copyright">&copy; 2024 Instagram from Meta</div>
      </div>
    </footer>
  );
}

export default Footer;
