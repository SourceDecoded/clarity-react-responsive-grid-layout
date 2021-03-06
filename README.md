# clarity-react-responsive-grid-layout

![NPM version](https://img.shields.io/npm/v/clarity-react-responsive-grid-layout.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/clarity-react-responsive-grid-layout.svg?style=flat)
![NPM total downloads](https://img.shields.io/npm/dt/clarity-react-responsive-grid-layout.svg?style=flat)
![NPM monthly downloads](https://img.shields.io/npm/dm/clarity-react-responsive-grid-layout.svg?style=flat)

A responsive grid layout for React apps.
The minimal API is to create a `clarity-react-responsive-grid-layout`, populate it with an array of card components, and add the desired card width and padding between cards.

## Install
```bash
npm clarity-react-responsive-grid-layout
```

## Features
* Responsive grid layout for cards.

## Dependencies
### Version 15.x.x
* `react`
* `react-dom`

## Minimal Example
```js
import React from "react";
import GridLayout from "clarity-react-responsive-grid-layout";
import {TestCard} from "../../../components";
import styles from "./styles";

const TestComponent = props => {
    const { style } = props;

    const createCardComponents = () => {
        return [<TestCard />, <TestCard />, <TestCard />, <TestCard />, <TestCard />];
    };

    return (
        <div style={Object.assign({}, styles.container, style)}>
            <GridLayout style={styles.gridLayout} cardWidth={400} padding={24} cards={createCardComponents()} />
        </div>
    );
};

export default TestComponent;
```

## Props
#### `cardWidth` number
* The desired width for all cards.

#### `padding` number
* The desired padding between cards. 
* NOTE: Padding on top, bottom, left and right of gridLayout should be set through the style prop.

#### `cards` [React.Component]
* The array of card components that will be rendered in order on the gridLayout.

#### `leftAlign` boolean
* Align the cards to the left side of the grid.
* NOTE: If not supplied the default is to center the cards on the grid.