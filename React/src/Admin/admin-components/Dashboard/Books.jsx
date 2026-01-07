import { useState } from "react";
import "../../../CSS/Books.css";

import { createPortal } from "react-dom";

function AddBookPopup({ close }) {
  return createPortal(
    <section className="addbook-c" onClick={close}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Book's Title" />
        <label htmlFor="">Author</label>
        <input type="text" placeholder="Author's name" />
      </div>
    </section>,

    document.getElementById("modal-root")
  );
}

export default function Books() {
  const [btnclick, setBtnClicked] = useState(false);

  const open = (param) => {
    setBtnClicked(param);
  };

  const close = () => {
    setBtnClicked(false);
  };
  return (
    <section className="books-h">
      <div className="actions">
        <button id="add-book" onClick={() => open(true)}>
          Add Book
        </button>
      </div>
      <div className="listsbooks">
        <ul></ul>
      </div>
      {btnclick && <AddBookPopup close={close} />}
    </section>
  );
}
