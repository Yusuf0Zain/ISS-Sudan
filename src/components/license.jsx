import styled from 'styled-components'

const License = () => {
return (
    <StyledLicense>
        <div className="license">
            <h1>ISS SUDAN UTM</h1>
        <p>Official Website for the International Student Society of Sudan at UTM</p>
        <p>© 2025 ISS-Sudan | All Rights Reserved</p>
        <img className="inline-block mr-2 align-middle logo-img" src="/logoW.png"/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>مالك نزلت تحت شديد؟</p>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
    </StyledLicense>
    );
};

const StyledLicense = styled.div`
.license {
  position: relative;
  z-index: 2;
  background-color: rgb(8, 39, 76);
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  color: white;
  font: 1.2rem;
} 
.license::before{
  content: '';
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 2rem;
  display: block;
  background: linear-gradient(
    -45deg, transparent 33.33%,
    #08274c 33.33%, #08274c 66.666%,
    transparent 66.66%
  ),
  linear-gradient(
    45deg, transparent 33.33%,
    #08274c 33.33%, #08274c 66.66%,
    transparent 66.66%
  );
  background-size: 3rem 6rem;
  animation: sonicZigzag 1s linear infinite;
}
@keyframes sonicZigzag {
  0% {
    background-position: 0 0, 3rem 0;
  }
  100% {
    background-position: 3rem 0, 6rem 0;
  }
}
`;

export default License;
