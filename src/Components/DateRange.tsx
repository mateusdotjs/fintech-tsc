import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
 const {inicio, setInicio, final, setFinal, data} = useData()
console.log(data)
  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <DateInput
        label={"Início"}
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label={"Final"}
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
