import React from 'react';
import { LinkList } from './LinkList';

export function Footer() {
    return (
        <footer className="footer">
            <h3>&copy; 2017 Maison. All rights reserved</h3>
            <ul>
               <LinkList/>
            </ul>
        </footer>);
}

