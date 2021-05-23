import React, { Component } from 'react'
import ShapeButton from "../components/ShapeButton";
import ColorButton from "../components/ColorButton";
import Item from "../components/Item";
import { Shape, Color } from "../dataType";
import { SColors, SShapes, SItems} from "./appType"
import db from "../database.json";
import "../styles/appPage.css";


interface Props { 
    selectedColors: SColors
    selectedShapes: SShapes
}

interface State { 
    selectedItems: SItems,
    selectedColors: SColors
    selectedShapes: SShapes
    title: string
}



export class AppPage extends Component<Props, State> {

    static defaultProps = {
        selectedColors: [{ selected: true, color: "red"}, { selected: true, color: "royalblue"}, { selected: true, color: "green"}, { selected: true, color: "yellow"}, { selected: true, color: "lightblue"}, { selected: true, color: "darkgray"}],
        selectedShapes: [{ selected: true, shape: "oval"}, { selected: true, shape: "round"}, { selected: true, shape: "triangle"}, { selected: true, shape: "square"}, { selected: true, shape: "rectangle"}],
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedItems: [],
            selectedColors: [],
            selectedShapes: [],
            title: "All items"
        }
    }

    componentDidMount() {
        const { selectedShapes, selectedColors} = this.props;
        let dbVal = db as SItems
        this.setState({
            selectedItems: dbVal,
            selectedShapes: [...selectedShapes],
            selectedColors: [...selectedColors]
        })
    }


    toggleShape = (index: number) => {
        const { selectedShapes } = this.state;
        const { selectedShapes: shapes} = this.props;

        selectedShapes[index] = {...selectedShapes[index], selected: !selectedShapes[index].selected}

        this.setState(() => {
            let isEmpty = selectedShapes.every(x => x.selected === false)

            if (isEmpty) {
                return {
                    selectedShapes: [...shapes]
                }
            } else {
                return {
                    selectedShapes: [...selectedShapes]
                }
            }
            
        }, () => {
            this.calculateSelectedItems()
        })
    }

    toggleColor = (index: number) => {
        const { selectedColors } = this.state;
        const { selectedColors: colors} = this.props;

        selectedColors[index] = {...selectedColors[index], selected: !selectedColors[index].selected}

        this.setState(() => {
            let isEmpty = selectedColors.every(x => x.selected === false)

            if (isEmpty) {
                return {
                    selectedColors: [...colors]
                }
            } else {
                return {
                    selectedColors: [...selectedColors]
                }
            }
        }, () => {
            this.calculateSelectedItems()
        })
    }

    calculateSelectedItems = () => {
        const { selectedColors, selectedShapes } = this.state;

        const colors = selectedColors.filter((x) => x.selected === true).map(x => x.color);

        const shapes = selectedShapes.filter((x) => x.selected === true).map(x => x.shape);

        let dbVal = db as SItems
        let items = dbVal.filter((x) => {
            if (colors.includes(x.color) && shapes.includes(x.shape)) {
                return x;
            }
        });

        let title = this.getFilterTitle(shapes, selectedShapes.length, colors, selectedColors.length)

        this.setState({
            selectedItems: [...items],
            title
        })
    }

    getFilterTitle = (shapes: Shape[], maxShape: number, colors: Color[], maxColor: number): string => {
        let val = "";


        if ((shapes.length === maxShape) && (colors.length === maxColor)) {
            val = "All items"
        } else if (((colors.length === maxColor) && (shapes.length > 2)) || ((shapes.length === maxShape) && (colors.length > 2))) {
            val = "Multiple items"
        } else if ((shapes.length === maxShape) && (colors.length === 1)) {
            val = `All ${colors[0]} items`
        } else if ((colors.length === maxColor) && (shapes.length === 1)) {
            val = `All ${shapes[0]} items`
        } else if ((shapes.length > 2) && (colors.length === 1)) {
            val = `Multiple ${colors[0]} items`
        } else if ((colors.length > 2) && (shapes.length === 1)) {
            val = `Multiple ${shapes[0]} items`
        } else if ((shapes.length === 1) && (colors.length === 1)) {
            val = `${shapes[0][0]}${shapes[0].slice(1)} ${colors[0]} items`
        }


        return val;
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
