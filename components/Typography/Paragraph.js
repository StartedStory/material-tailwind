import React from 'react';
import PropTypes from 'prop-types';

const colors = {
    white: 'text-gray-200',
    blueGray: 'text-blue-gray-700',
    gray: 'text-gray-700',
    brown: 'text-brown-700',
    deepOrange: 'text-deep-orange-700',
    orange: 'text-orange-700',
    amber: 'text-amber-700',
    yellow: 'text-yellow-700',
    lime: 'text-lime-700',
    lightGreen: 'text-light-green-700',
    green: 'text-green-700',
    teal: 'text-teal-700',
    cyan: 'text-cyan-700',
    lightBlue: 'text-light-blue-700',
    blue: 'text-blue-700',
    indigo: 'text-indigo-700',
    deepPurple: 'text-deep-purple-700',
    purple: 'text-purple-700',
    pink: 'text-pink-700',
    red: 'text-red-700',
};

export default function Paragraph({ children, color, ...rest }) {
    return (
        <p
            {...rest}
            className={`${colors[color]} text-base font-light leading-relaxed mt-0 mb-4`}
        >
            {children}
        </p>
    );
}

Paragraph.defaultProps = {
    color: 'blueGray',
};

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
};
