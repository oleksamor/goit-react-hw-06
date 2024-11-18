import { useSelector } from "react-redux";

export const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);

  return (
    <div>
      <button>All {filter === "all" && "is active"}</button>
      <button>Active {filter === "active" && "is active"}</button>
      <button>Completed {filter === "completed" && "is active"}</button>
    </div>
  );
};
