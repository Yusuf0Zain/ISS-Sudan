import { ReactComponent as YourSvg } from '../assets/pattern.svg';
const MovingPattern = () => {
  const svgPattern = <YourSvg />;
  const patternsNeeded = Math.ceil(window.innerWidth / 100) * 2;
return (
    <div className="movePattern">
      {Array.from({ length: patternsNeeded }).map((_, index) => (
        <div key={index} className="pattern-item">
          {svgPattern}
        </div>
      ))}
    </div>
  );
};


export default MovingPattern;