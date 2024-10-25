import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

interface Todo {
  id: number;
  text: string;
  status: boolean;
}

interface StoreToDoProps {
  data?: Todo[];
  onDelete : (id : number) => void;
}

function CompletedOnes({ data , onDelete }: StoreToDoProps) {

  

  return (
    <div className="completed-todo's">
      <hr />
      <h1 className="">Completed TODO</h1>
      <br />
      <div className="todos space-y-0 text-lg">
        {data?.filter((todo) => todo.status === true).map((item) => (
          <h1 key={item.id} className="flex items-center text-gray-500 text-xl font-semibold gap-2 line-through hover:bg-gray-200">
            <AiOutlineCheck className="text-green-500" size={24} /> 
            {item.text}
            <button onClick={() => {onDelete(item.id)}}>
              <AiOutlineClose className="text-gray-700 hover:text-red-600" />
            </button>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default CompletedOnes;
