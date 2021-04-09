import { FaBackward } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import React from 'react';

import { btn } from './BackButton.module.scss';

export default () => (
    <IconContext.Provider value={{ size: '2em' }}>
        <div className={btn}>
            <Link to="/">
                <FaBackward />
            </Link>
        </div>
    </IconContext.Provider>
);
