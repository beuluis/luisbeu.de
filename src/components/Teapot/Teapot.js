import { isMobile } from 'react-device-detect';
import React from 'react';
import Sketch from 'react-p5';

import { wrapper } from './Teapot.module.scss';
import teapotModel from './assets/teapot.obj';

let model;

export default () => {
    const preload = (p5) => {
        model = p5.loadModel(teapotModel, true);
    };

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
            canvasParentRef,
        );
    };

    const draw = (p5) => {
        p5.background(0);
        if (isMobile) {
            p5.scale(p5.windowWidth / 200);
        } else {
            p5.scale(p5.windowWidth / 500);
        }
        p5.ambientLight(255, 0, 255);
        p5.directionalLight(255, 255, 255, 0, 0, 1);

        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.015);
        p5.normalMaterial();
        p5.model(model);
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    return (
        <Sketch
            className={wrapper}
            preload={preload}
            setup={setup}
            draw={draw}
            windowResized={windowResized}
        />
    );
};
