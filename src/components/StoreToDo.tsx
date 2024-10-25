import { FiEdit } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface Todo {
  id: number;
  text: string;
  status: boolean;
}

interface StoreToDoProps {
  data?: Todo[];
  onCompletion: (id: number) => void;
  onDelete: (id : number) => void;
  onEdit : (todo : Todo) => void;
}

function StoreToDo({ data, onCompletion , onDelete , onEdit }: StoreToDoProps) {

  return (
    <div className="">
      <ul className="space-y-2 text-xl">
        {data?.map((item) => (
          <li
            className=" hover:bg-gray-200 flex items-center gap-4 "
            key={item.id}
          >
            <div className="">
              <input
                onChange={() => onCompletion(item.id)}
                checked={item.status}
                type="checkbox"
                id={`todo-${item.id}`}
              />
            </div>
            <div className="block truncate w-2/3">
              <span className="text-wrap" style={{textDecoration : item.status ? "line-through" : "none"}}>{item.text}</span>
            </div>
            <div className="flex justify-end gap-5 w-1/4">
              <button onClick={() => onEdit(item)} className="text-gray-700 hover:text-cyan-600">
                <FiEdit size={20} />
              </button>
              <button onClick={() => {onDelete(item.id)}} className="text-gray-700 hover:text-red-600">
                <AiOutlineClose />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoreToDo;
