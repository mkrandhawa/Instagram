import React from 'react';

export default function NavItem(props) {
    const { icon: Icon, label } = props;
    return (
        <div className={label.toLowerCase()}>
            <span><Icon /></span>
            <span className="navItem">{label}</span>
        </div>
    );
}
