import React from 'react'
import styled from 'styled-components'

const UiIcon = ({
    className,
    src,
    width,
    height,
    color,
    hoverColor,
    onClick
}) => {
    return (
        <Icon
            onClick={onClick}
            className={className}
            src={src}
            width={width}
            height={height}
            color={color}
            hoverColor={hoverColor}
        />
    )
}

const Icon = styled.div`
    webkitmask: url(${props => props.src});
    mask: url(${props => props.src});
    -webkit-mask-size: cover;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color};
    transition: background-color 0.2s;
    &:hover {
        background-color: ${p => (p.hoverColor ? p.hoverColor : p.color)};
    }
`

export default UiIcon