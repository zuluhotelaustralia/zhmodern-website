import React from "react"
import { FaDiscord, FaWikipediaW, FaQuestionCircle } from "react-icons/fa"

import logo from "../../assets/images/logo.svg"

import * as styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
      <div className="flex items-center">
        <ul className={styles.links}>
          <li>
            <a href="">
              <FaQuestionCircle /> About
            </a>
          </li>
          <li>
            <a href="">
              <FaDiscord /> Discord
            </a>
          </li>
          <li>
            <a href="">
              <FaWikipediaW /> Wiki
            </a>
          </li>
        </ul>
        <a href="#" className={styles.playNowButton}>
          <h3>Play Now</h3>
        </a>
      </div>
    </header>
  )
}

export default Header
