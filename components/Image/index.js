import React from 'react'
import styled, { withTheme } from 'styled-components'
import { UiIcon } from 'components'

const UiImage = ({
    onClick,
    className,
    src,
    ratio,
    backgroundSize,
    theme,
    borderRadius,
    backgroundPosition
}) => {
    return (
        <Wrapper
            borderRadius={borderRadius}
            zoom={zoom}
            onClick={onClick}
            className={className}
        >
            <Image
                src={src}
                ratio={ratio}
                backgroundSize={backgroundSize}
                backgroundPosition={backgroundPosition}
            />
        </Wrapper>
    )
}
const Icon = styled(props => <UiIcon {...props}></UiIcon>)`
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.2s;
`
const Image = styled.div`
    position: relative;
    z-index: 1;
    background-image: url(${p => p.src});
    background-position: ${p =>
        p.backgroundPosition ? p.backgroundPosition : 'center'};
    background-size: ${p => (p.backgroundSize ? p.backgroundSize : 'cover')};
    background-repeat: no-repeat;
    padding-top: calc(100% / (${p => p.ratio}));
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s;
        background: linear-gradient(
            0deg,
            rgba(51, 51, 51, 0.5),
            rgba(51, 51, 51, 0.5)
        );
    }
`
const Wrapper = styled.div`
    position: relative;
    border-radius: ${p => p.borderRadius || '0'};
    cursor: ${p => (p.zoom ? 'pointer' : 'default')};
    overflow: hidden;

    &:hover {
        ${Image} {
            &:before {
                opacity: ${p => (p.zoom ? '1' : '0')};
            }
        }
        ${Icon} {
            opacity: 1;
        }
    }
`
export default withTheme(UiImage)