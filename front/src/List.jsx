import { useEffect, useState } from "react";
import { api } from "./api";
import Form from "./Form";
import EditForm from "./EditForm";

export default function List({ role }) {
  const [items, setItems] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await api.get(
      `/entity?title=${titleFilter}&category=${categoryFilter}`
    );
    setItems(res.data);
  };

  useEffect(() => {
    load();
  }, [titleFilter, categoryFilter]);

  return (
    <div>
      <h2>Список</h2>

      <input
        placeholder="Фильтр по названию"
        onChange={e => setTitleFilter(e.target.value)}
      />

      <input
        placeholder="Фильтр по категории"
        onChange={e => setCategoryFilter(e.target.value)}
      />

      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.title} — {i.author} — {i.category} — {i.price} — {i.date}

            {role === "admin" && (
              <>
                <button onClick={() => setEditing(i)}>Редактировать</button>
                <button onClick={() => api.delete("/entity/" + i.id).then(load)}>
                  Удалить
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {role === "admin" && <Form onSaved={load} />}

      {editing && (
        <EditForm
          item={editing}
          onSaved={() => {
            setEditing(null);
            load();
          }}
          onCancel={() => setEditing(null)}
        />
      )}
    </div>
  );
}
