import { useState } from "react";
import { api } from "./api";

export default function EditForm({ item, onSaved, onCancel }) {
  const [title, setTitle] = useState(item.title);
  const [author, setAuthor] = useState(item.author);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price);
  const [date, setDate] = useState(item.date);

  const save = async () => {
    await api.put("/entity/" + item.id, {
      title,
      author,
      category,
      price,
      date
    });
    onSaved();
  };

  return (
    <div style={{ border: "1px solid black", padding: 10, marginTop: 10 }}>
      <h3>Редактировать</h3>

      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      <input value={category} onChange={e => setCategory(e.target.value)} />
      <input value={price} onChange={e => setPrice(e.target.value)} />
      <input value={date} onChange={e => setDate(e.target.value)} />

      <button onClick={save}>Сохранить</button>
      <button onClick={onCancel}>Отмена</button>
    </div>
  );
}
