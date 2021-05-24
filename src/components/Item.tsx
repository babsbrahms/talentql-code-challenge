import React from 'react'
import { Shape, Color} from "../dataType"

let shapes = {
    oval: (color: Color) => <ellipse className="item oval" cx="50%" cy="50%" rx="30" ry="49" fill={color} stroke={color} />,
    round: (color: Color) => <circle className="item round" cx="50%" cy="50%" r="49" fill={color} stroke={color}  />,
    triangle: (color: Color) => <polygon className="item triangle" points="50,0 0,100 100,100" fill={color} stroke={color} />,
    rectangle: (color: Color) => <rect className="item rectangle" x="0" y="25%" width="100" height="50" fill={color} stroke={color}  />,
    square: (color: Color) =>  <rect className="item square" width="100" height="100" fill={color} stroke={color}  />,

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
