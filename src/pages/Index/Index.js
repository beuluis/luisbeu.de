import React, { Component } from 'react';

import Email from '../../components/EmailWrapper/EmailWrapper';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import Teapot from '../../components/Teapot/Teapot';

class Index extends Component {
    constructor() {
        super();
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <>
                <Teapot />
                <Logo />
                <Email />
                <Footer />
            </>
        );
    }
}

export default Index;
