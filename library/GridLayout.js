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
            cards: this.props.cards || [],
            padding: this.props.padding || 0,
            cardWidth: this.props.cardWidth || 0,
            gridWidth: 0,
            gridHeight: 0
        };

        this._renderCards = this._renderCards.bind(this);
        this._updateDimensions = this._updateDimensions.bind(this);
    }

    _renderCards() {
        const cardsPerRow = Math.floor(this.state.gridWidth / (this.state.cardWidth + this.state.padding));
        const width = ((cardsPerRow * (this.state.cardWidth + this.state.padding)) - this.state.padding) + "px";

        return (
            <div style={Object.assign({}, styles.cardsContainer, { width })}>
                {this.state.cards.map((card, index) => {
                    const paddingRight = (index + 1) % cardsPerRow !== 0 ? "24px" : 0;
                    const paddingTop = (index + 1) > cardsPerRow ? "24px" : 0;

                    return (
                        <div style={Object.assign({}, styles.card, { paddingRight, paddingTop })} key={"CARD_" + index}>
                            {card}
                        </div>
                    )
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
        window.removeEventListener("resize");
    }

    render() {
        const { style } = this.props;

        return (
            <div style={style} ref={gridElement => this.grid = gridElement}>
                {this._renderCards()}
            </div>
        );
    }
}

export default GridLayout;