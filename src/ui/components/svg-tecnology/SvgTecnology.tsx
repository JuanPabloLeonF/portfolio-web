import React, { useState, useRef, useEffect } from 'react';
import './SvgTecnology.css';
import { TypeTecnology } from '../../../domain/models/tecnology';

interface SvgTecnologyProps {
  data: TypeTecnology;
  dataSelected: boolean;
  onDataSelectedOutput: (data: TypeTecnology) => void;
}

export const SvgTecnology: React.FC<SvgTecnologyProps> = ({ data, dataSelected, onDataSelectedOutput }) => {
  const [activateStylesHover, setActivateStylesHover] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.setAttribute('data-name', data.name);
    }
  }, [data.name]);

  const handleSelectData = () => {
    onDataSelectedOutput(data);
  };

  const handleHoverItem = (isHovered: boolean) => {
    setActivateStylesHover(isHovered);
  };

  const boxShadowStyle = dataSelected || activateStylesHover
    ? `0px 0px 8px 1px ${data.color}`
    : 'none';

  const borderStyle = `1px solid ${data.color}`;

  return (
    <div
      aria-label={data.name}
      title={data.name}
      className="div"
      ref={divRef}
      onClick={handleSelectData}
      onMouseOver={() => handleHoverItem(true)}
      onMouseOut={() => handleHoverItem(false)}
      style={{
        boxShadow: boxShadowStyle,
        border: borderStyle,
      }}
    >
      <img src={data.urlImg} alt={data.name} width="100" height="100" />
    </div>
  );
};