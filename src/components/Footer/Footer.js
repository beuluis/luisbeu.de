import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

import { footer } from './Footer.module.scss';

export default () => (
    <div className={footer}>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/beuluis"
            title="Github"
        >
            <FaGithubSquare />
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/beuluis/"
            title="LinkedIn"
        >
            <FaLinkedin />
        </a>
        <Link to="/legal-notice">Legal Notice</Link>
        <Link to="/privacy">Privacy</Link>
    </div>
);
