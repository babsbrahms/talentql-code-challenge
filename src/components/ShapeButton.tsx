import React from 'react'
import { Shape} from "../dataType"

interface Props {
    active: boolean
    shape: Shape,
    onClick: () => void
}

const ShapeButton: React.FC<Props> = ({ active, shape, onClick }) => {
    return (
        <button data-testid={shape} className={"shape-button"} style={{ borderColor: active? "blue" : "darkgray" }} onClick={() => onClick()}>
            {shape}
        </button>
    )
}

export default ShapeButton;