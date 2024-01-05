import CarCard from "../CarCard";
import "./styles.css";

export default function Main() {
  return (
    <>
    <main className="ct-main">
      <section>
        <div className="ct-main-description-container">
          <h2>Venha nos visitar</h2>
        </div>
        <div className="ct-car-card">
          <CarCard />
          <CarCard />
        </div>
      </section>
    </main>
    </>
    
  );
}
