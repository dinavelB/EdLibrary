import "../../../CSS/MainBoard.css";

export default function MainBoard() {
  return (
    <section className="mainboard-container">
      <div className="mainboard-category">
        <h3 id="bookname">Book Name</h3>
        <h3 id="category">Category</h3>
        <h3 id="id">Book number</h3>
        <h3 id="status">Status</h3>
        <h3 id="actions">Action</h3>
        <div className="book-dets"></div>
      </div>
    </section>
  );
}
