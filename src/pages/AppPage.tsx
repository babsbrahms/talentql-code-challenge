import React, { Component } from 'react'
import ShapeButton from "../components/ShapeButton";
import ColorButton from "../components/ColorButton";
import Item from "../components/Item";
import db from "../database.json";
import { Shape, Color } from "../dataType";
import "../styles/appPage.css";


interface Props { }

interface State { 
    selectedItems: Array<{ shape: Shape, color: Color }>,
    selectedColors: Array<{ selected: boolean, color: Color }>
    selectedShapes: Array<{ shape: Shape, selected: boolean }>
    title: string
}

export class AppPage extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedItems: [],
            selectedColors: [{ selected: true, color: "darkgray"}, { selected: true, color: "green"}, { selected: true, color: "lightblue"}, { selected: true, color: "red"},  { selected: true, color: "royalblue"},  { selected: true, color: "yellow"},],
            selectedShapes: [{ selected: true, shape: "oval"}, { selected: true, shape: "rectangle"}, { selected: true, shape: "round"}, { selected: true, shape: "square"}, { selected: true, shape: "triangle"}],
            title: "All items"
        }
    }

    componentDidMount() {
        let dbVal = db as Array<{ shape: Shape, color: Color }>
        this.setState({
            selectedItems: dbVal
        })
    }


    toggleShape = (index: number) => {
        const { selectedShapes } = this.state;

        selectedShapes[index] = {...selectedShapes[index], selected: !selectedShapes[index].selected}

        this.setState({
            selectedShapes: [...selectedShapes]
        }, () => {
            this.calculateSelectedItems()
        })
    }

    toggleColor = (index: number) => {
        const { selectedColors } = this.state;

        selectedColors[index] = {...selectedColors[index], selected: !selectedColors[index].selected}

        this.setState({
            selectedColors: [...selectedColors]
        }, () => {
            this.calculateSelectedItems()
        })
    }

    calculateSelectedItems = () => {

    }

    render() {
        const { selectedColors, selectedShapes, title, selectedItems } = this.state;
        return (
            <div className="container">
                <h2>Filters</h2>
                <section>
                    <h4 className="sub-lead">Shapes</h4>
                    {selectedShapes.map(({ shape, selected}, index) => <ShapeButton key={shape} shape={shape} active={selected} onClick={() => this.toggleShape(index)} />)}
                </section>

                <section>
                    <h4 className="sub-lead">Colors</h4>
                    {selectedColors.map(({ color, selected}, index) => <ColorButton key={color} color={color} active={selected} onClick={() => this.toggleColor(index)}  />)}
                </section>

                
                <section >
                    <h2 className="lead-text">{title} <span>({selectedItems.length})</span></h2>

                    <div className="grid-container">
                    {selectedItems.map(({ color, shape}, index) => <Item key={`${shape}-${index}`} color={color} shape={shape} />)}
                    </div>
                </section>

            </div>
        )
    }
}

export default AppPage
