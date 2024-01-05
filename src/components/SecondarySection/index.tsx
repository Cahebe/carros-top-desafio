import "./styles.css";
import CommentsCard from "../CommentsCard";

export default function SecondarySection() {
    return (
        <section className="secondary-section-container">
          <div className="content-container">
            <h2>O que estão dizendo</h2>
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
          </div>
        </section>
    );
  }