import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

export default function NavItem({ children, active, ripple, ...rest }) {
    const rippleEffect = new Ripple();

    return (
        <li
            {...rest}
            className={`${active === 'dark' && 'bg-black bg-opacity-20'} ${
                active === 'light' && 'bg-white bg-opacity-20'
            } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`}
            onMouseUp={(e) => {
                ripple === 'dark' && rippleEffect.create(e, 'dark');
                ripple === 'light' && rippleEffect.create(e, 'light');
            }}
        >
            {children}
        </li>
    );
}

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.string,
    className: PropTypes.string,
    ripple: PropTypes.string,
};
