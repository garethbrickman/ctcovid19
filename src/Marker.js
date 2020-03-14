import React, { useRef, useState, useEffect } from 'react';
import './Marker.css';

function useHover() {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const enter = () => setHovered(true)
  const leave = () => setHovered(false)

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter)
    ref.current.addEventListener('mouseleave', leave)
    return () => {
      ref.current.removeEventListener('mouseenter', enter)
      ref.current.removeEventListener('mouseleave', leave)
    }
  }, [ref])

  return [ref, hovered]
}

const Marker = (props) => {
    const { color, name, confirmedCases} = props;
    const [ref, hovered] = useHover()
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        ref={ref}
      >
        {hovered && <div className="confirmedCases">{confirmedCases} Confirmed Cases</div>}
      </div>
    );
  };

  export default Marker;