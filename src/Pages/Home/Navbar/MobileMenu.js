import Accordion from 'react-bootstrap/Accordion';

function MobileMenu({ menus }) {
    return (
        <Accordion>
            {menus.map(function (menu) {
                return (
                    menu.children && menu.children.length > 0 ?
                        (
                            <Accordion.Item eventKey={menu.id}>
                                <Accordion.Header>{menu.title}</Accordion.Header>
                                <Accordion.Body>
                                    {menu.children?.map((submenu) => {

                                        return (
                                            <li className='nested-mobile-menue' eventKey={submenu?.id}><a href='.'>{submenu?.title}</a></li>
                                        )
                                    })}

                                </Accordion.Body>
                            </Accordion.Item>
                        ) : (
                            <Accordion.Item eventKey={menu.id}>
                                <Accordion.Header className='accordion-items'>{menu.title}</Accordion.Header>
                            </Accordion.Item>
                        )
                )
            })}
        </Accordion>
    );
}

export default MobileMenu;