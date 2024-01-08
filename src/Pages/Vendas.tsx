import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
  const { data } = useData();
  if (!data) return;
  return (
    <ul>
      {data.map((venda) => (
        <li>
          <VendaItem key={venda.id} venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
