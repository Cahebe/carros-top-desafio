import carImg from "../../assets/carro.png";
import './styles.css';

export default function CarCard() {
  return (
    <div className="ct-car-card-container">
      <img src={carImg} alt="Carro" />
      <p>Lorem ipsum dolor</p>
    </div>
  );
}
