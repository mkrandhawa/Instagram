import React from 'react';

export default function NavItem(props) {
    const { icon: Icon, label } = props;
    return (
        <div className={label.toLowerCase()}>
            <div className="icon">
            <span><Icon  fontSize='large'/></span>
            </div>
            <div className="navItem">
            <span>{label}</span>
            </div>
        </div>
    );
}
