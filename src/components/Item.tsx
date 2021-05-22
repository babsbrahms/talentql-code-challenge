import React from 'react'


interface Props {
    shape: "oval" | "round" | "triangle" | "rectangle" | "square"
    color: "red" | "royalblue" | "green" | "yellow" | "lightblue" | "darkgray"
}

const Item = ({ shape, color }: Props) => {
    return (
        <div>
            {shape} - {color}
        </div>
    )
}
 

export default Item