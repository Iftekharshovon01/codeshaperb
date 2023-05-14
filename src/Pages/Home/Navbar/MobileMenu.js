import Accordion from 'react-bootstrap/Accordion';

function MobileMenu({ menus }) {
    return (
        <Accordion>
            {menus.map((menu) => {
                return (<Accordion.Item eventKey={menu.id}>
                    <Accordion.Header>{menu.title}</Accordion.Header>
                    <Accordion.Body>
                        {menu.children?.map((submenu) => {
                            return (<Accordion.Item eventKey={submenu.id}>
                                <Accordion.Header>{submenu.title}</Accordion.Header>
                            </Accordion.Item>)
                        })}
                    </Accordion.Body>
                </Accordion.Item>)
            })}

            {/* <ul className='d-flex flex-column '>
                {menus.map(menu => (
                    <ul className='nav-pages'>
                        {Object.entries(menu).map(([title, items]) => (
                            <li>
                                <h2>{title}</h2>
                                <ul className='nav-page-nested'>
                                    {items.map(item => (
                                        <li className='nav-page-nested-single'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                ))}

                <li className='nav-pages-single'><div href='.'>Contact</div>
                </li>
                <li className='nav-pages-single'><div href='.'>
                    <div className="nav-offer">
                        <div href='.'><FontAwesomeIcon className='icon' icon={faBagShopping} /><a>Special Offer</a></div>
                    </div>
                </div>
                </li>
            </ul> */}
        </Accordion>
    );
}

export default MobileMenu;