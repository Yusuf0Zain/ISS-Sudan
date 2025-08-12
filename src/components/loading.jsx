import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(38, 100%, 65%, 0.49); /* Optional: semi-transparent background */
  z-index: 9999; /* Ensure it appears above other content */

  .loader {
    position: relative;
    border-radius: 50%;
    height: 96px;
    width: 96px;
    animation: rotate_3922 1.2s linear infinite;
    background-color: #CB0000;
    background-image: linear-gradient(#CB0000, #FFC700, #c79c00);
  }

  .loader span {
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: #cb0000;
    background-image: linear-gradient(#ff0000, #ffc800, #ffc800);
  }

  .loader span:nth-of-type(1) {
    filter: blur(5px);
  }

  .loader span:nth-of-type(2) {
    filter: blur(10px);
  }

  .loader span:nth-of-type(3) {
    filter: blur(25px);
  }

  .loader span:nth-of-type(4) {
    filter: blur(50px);
  }

  .loader::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #ffffffff;
    border: solid 5px #ffffff;
    border-radius: 50%;
  }

  @keyframes rotate_3922 {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;