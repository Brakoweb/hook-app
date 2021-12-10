import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0});
    const {x, y} = coords;

    useEffect(() => {
        const mouseMove = ({x, y}) =>{
            const coords = {x: x, y: y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>Coords: x:{x} y:{y}</h3>
        </div>
    )
}
