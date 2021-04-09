import React from 'react';

import { emailWrapper } from './EmailWrapper.module.scss';

export default () => (
    <div className={emailWrapper}>
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
            {process.env.REACT_APP_EMAIL}
        </a>
    </div>
);
