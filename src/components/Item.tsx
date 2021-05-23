import React from 'react'
import { Shape, Color} from "../dataType"

let shapes = {
    oval: (color: Color) => <ellipse cx="50%" cy="50%" rx="30" ry="45" fill={color} stroke={color} />,
    round: (color: Color) => <circle cx="50%" cy="50%" r="50" fill={color} stroke={color}  />,
    triangle: (color: Color) => <polygon points="62.5,15 25,100 100,100" fill={color} stroke={color} />,
    rectangle: (color: Color) => <rect x="0" y="25%" width="100" height="50" fill={color} stroke={color}  />,
    square: (color: Color) =>  <rect width="100" height="100" fill={color} stroke={color}  />,

}
interface Props {
    shape: Shape
    color: Color
}

const Item = ({ shape, color }: Props) => {
    return (
        <div>
            <svg width="100" height="100" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                {shapes[shape](color)}
            </svg>
        </div>
    )
}



export default Item
