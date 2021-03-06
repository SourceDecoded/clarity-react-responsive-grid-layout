import React, { Component } from "react";

const styles = {
    cardsContainer: {
        margin: "0 auto"
    },
    card: {
        display: "inline-block"
    }
};

class GridLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridWidth: 0,
            gridHeight: 0
        };

        this._renderCards = this._renderCards.bind(this);
        this._updateDimensions = this._updateDimensions.bind(this);
    }

    _renderCards() {
        let cardsPerRow = Math.floor(this.state.gridWidth / (this.props.cardWidth + this.props.padding));

        if (cardsPerRow === 0) {
            cardsPerRow = 1;
        }

        if (cardsPerRow > this.props.cards.length) {
            cardsPerRow = this.props.cards.length;
        }

        const width = cardsPerRow * (this.props.cardWidth + this.props.padding) - this.props.padding + "px";

        return (
            <div style={Object.assign({}, this.props.leftAlign ? {} : styles.cardsContainer, { width })}>
                {this.props.cards.map((card, index) => {
                    const paddingRight = (index + 1) % cardsPerRow !== 0 ? `${this.props.padding}px` : 0;
                    const paddingTop = index + 1 > cardsPerRow ? `${this.props.padding}px` : 0;

                    return (
                        <div style={Object.assign({}, styles.card, { paddingRight, paddingTop })} key={"CARD_" + index}>
                            {card}
                        </div>
                    );
                })}
            </div>
        );
    }

    _updateDimensions() {
        const gridWidth = this.grid.clientWidth;
        const gridHeight = this.grid.clientHeight;

        this.setState({
            gridWidth,
            gridHeight
        });
    }

    componentDidMount() {
        this._updateDimensions();
        window.addEventListener("resize", this._updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._updateDimensions);
    }

    render() {
        const { style } = this.props;

        return (
            <div style={style} ref={gridElement => (this.grid = gridElement)}>
                {this._renderCards()}
            </div>
        );
    }
}

export default GridLayout;
