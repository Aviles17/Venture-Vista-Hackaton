import React from 'react'
import logo from '../assets/icons/logo.svg'
import { FaYoutube, FaInstagram, FaXTwitter, FaDribbble } from 'react-icons/fa6'

const Foot = () => {
    const socialLinks = [
        { label: "YouTube", icon: FaYoutube },
        { label: "Instagram", icon: FaInstagram },
        { label: "Twitter", icon: FaXTwitter },
    ];

    const links = [
        [
          { label: "Compañia", key: "header-1" },
          { label: "Sobre Nosotros", key: "item-1-1" },
          { label: "Blog", key: "item-1-2" },
          { label: "Contactactanos", key: "item-1-3" },
          ],
        [
          { label: "Soporte", key: "header-2" },
          { label: "Centro de ayuda", key: "item-2-1" },
          { label: "Terminos de servicio", key: "item-2-2" },
          { label: "Legal", key: "item-2-3" },
          { label: "Politica de Privacidad", key: "item-2-4" },
        ],
    ];

    const year = new Date().getFullYear();

    return (
        <div className="app flex items-end justify-center font-poppins footer">
        <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-blue-900 text-white w-full p-4 relative">
            <div className="  ">
            <div className="footer-img flex items-center">
                <img
                src={logo}
                alt="Venture Vista log"
                className="w-16 h-auto"
                />
                <span className="text-3xl font-bold pl-2 text-white">
                Venture Vista
                </span>
            </div>
            <div className="infos text-gray-400">
                <span>Copyright © {year} Venture Vista. </span>
                <span>All rights reserved.</span>
            </div>
            <div className="footer-icons flex items-center space-x-3">
                {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                    <Icon
                    key={`social-${index}`}
                    className="w-14 h-14 p-2 rounded-full bg-blue-700 hover:bg-white hover:text-blue-700 cursor-pointer"
                    />
                );
                })}
            </div>
            </div>
            <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
            {links.map((col, index) => {
                return (
                <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                    {col.map((link, index) => {
                    return (
                        <li
                        key={`link-${col}-${index}`}
                        className={`text-gray-200 cursor-pointer ${
                            link.key === "header-1" || link.key === "header-2"
                            ? "text-2xl text-white"
                            : ""
                        }`}
                        >
                        {link.label}
                        </li>
                    );
                    })}
                </ul>
                );
            })}
            </div>
            <div className="footer-form flex flex-col  ">
            <label className="text-lg font-semibold text-white">
                Enterate de nuestras ofertas
            </label>
            <input
                type="email"
                placeholder="Suscribete a nuestro boletin"
                className="mt-2 w-full border-none rounded-lg py-3 px-6 text-black"
            />
            </div>
        </div>
        </div>
    )
}

export default Foot