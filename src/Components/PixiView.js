import React, { Component } from 'react';
import { GLView } from 'expo-gl';
import PIXI from 'expo-pixi';

export default class PixiView extends Component {
    render() {
        return (
            <GLView
            style={{ flex: 1 }}
            onContextCreate={async context => {
              const app = new PIXI.Application({ context });
              const sprite = await PIXI.Sprite.fromExpoAsync(
                'http://i.imgur.com/uwrbErh.png',
              );
              app.stage.addChild(sprite);
            }}
          />
        );
    }
}