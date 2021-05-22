import React from 'react'
import { Color as Cl} from "../dataType"

interface Props {
    active: boolean
    color: Cl,
    onClick: () => void
}

const ColorButton: React.FC<Props> = ({ active, color, onClick }) => {
    return (
        <button className={"color-button"}  style={{ borderColor: active? "blue" : "darkgray", backgroundColor: color }} onClick={() => onClick()} />
    )
}

export default ColorButton;