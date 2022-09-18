import { FC } from "react";
import { NavLink } from 'react-router-dom';
import './NavigationLink.scss';

interface NavigationLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: any;
}

const NavigationLink: FC<NavigationLinkProps> = ({ to, children, onClick }) => {

    return (
        <NavLink to={to} className='navigation-link' onClick={onClick ? onClick : ''}>
            {children}
        </NavLink>
    )
}

export default NavigationLink;