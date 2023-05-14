import { faBagShopping, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [activeMenu, setActiveMenu] = useState(null)

    const menus = [
        {
            id: '01',
            title: "Home",
            children: [
                {
                    id: '101',
                    title: "Winter",
                },
                {
                    id: '102',
                    title: "Summer",
                },
                {
                    id: '103',
                    title: "Autumn",
                }
            ]
        },
        {
            id: '02',
            title: "Shop",
            children: [
                {
                    id: '201',
                    title: "Shirts",
                },
                {
                    id: '202',
                    title: "T-Shirts",
                },
                {
                    id: '203',
                    title: "Trowsers",
                }
            ]
        },
        {
            id: '03',
            title: "Pages",
            children: [
                {
                    id: '301',
                    title: "Constraction",
                },
                {
                    id: '302',
                    title: "Affiliation",
                },
            ]

        },
        {
            id: '04',
            title: "Blog",
            children: [
                {
                    id: '401',
                    title: "Tour",
                },
                {
                    id: '402',
                    title: "MOU",
                },
                {
                    id: '403',
                    title: "Clients",
                }
            ]

        },
        {
            id: '05',
            title: "About",

        },
        {
            id: '06',
            title: "Contact",
        },
    ];

    return (
        <>

            <div className="head-shopping-menue" onClick={handleShow}>
                <Link>
                    <svg className='head-shoping-icon' width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 20H26M2 2H26H2ZM2 11H26H2Z" stroke="#71717A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></Link>
            </div>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileMenu menus={menus}></MobileMenu>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;