import { useState } from "react";
import { api } from "./api";

export default function Form({ onSaved }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const save = async () => {
    await api.post("/entity", {
      title,
      author,
      category,
      price,
      date
    });
    onSaved();
  };

  return (
    <div>
      <h3>Добавить запись</h3>

      <input placeholder="Название" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Автор" onChange={e => setAuthor(e.target.value)} />
      <input placeholder="Категория" onChange={e => setCategory(e.target.value)} />
      <input placeholder="Цена" onChange={e => setPrice(e.target.value)} />
      <input placeholder="Дата" onChange={e => setDate(e.target.value)} />

      <button onClick={save}>Добавить</button>
    </div>
  );
}
