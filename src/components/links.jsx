import { useState } from 'react';
import Links from '../data/socialLinks.json';
import styled, { css } from 'styled-components';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <svg width={0} height={0} style={{position: 'absolute'}}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="#1c274c" d={isOpen ? "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"} />
        </svg>
      </ToggleButton>

      <ButtonsContainer isOpen={isOpen}>
        {Links.map((link) => {
          const colorString = link.color || '';
          const fromColor = '#' + (colorString.split('from-#')[1]?.split(' ')[0] || '06db29');
          const toColor = '#' + (colorString.split('to-#')[1] || '6efa9a');
          
          return (
            <ButtonWrapper key={link.id}>
              <SocialLink 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                fromColor={fromColor}
                toColor={toColor}
              >
                <SocialIcon src={link.icon} alt={link.name} />
              </SocialLink>
            </ButtonWrapper>
          );
        })}
      </ButtonsContainer>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ToggleButton = styled.button`
  background: #e3d8b3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  
  &:hover {
    background: #e3d8b3;
    transform: scale(1.1);
  }

  ${({ isOpen }) => isOpen && css`
    transform: rotate(180deg);
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #1c274c;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  transform: translateX(${({ isOpen }) => isOpen ? '0' : '-100%'});
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  pointer-events: ${({ isOpen }) => isOpen ? 'all' : 'none'};
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease-out;
  clip-path: url(#squircleClip);
  background: #e3d8b3;
  
  &:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: ${({ fromColor, toColor }) => 
      `linear-gradient(to bottom right, ${fromColor}, ${toColor})`};
    
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: filter 0.3s ease;
`;

export default Button;