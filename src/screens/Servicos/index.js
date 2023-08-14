import {
  FlatList
} from "react-native";
import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";
const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 80,
    descricao: "Nao de banho no seu gato",
  },
  {
    id: 2,
    nome: "vacina raiva",
    preco: 30,
    descricao: "Vacina contra a raiva",
  },
  {
    id: 3,
    nome: "Tosa",
    preco: 50,
    descricao: "Cortaremos o pelo de seu pet",
  },
];
export default function Servicos() {
  return (
    <>
      <TelaPadrao>
          <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
          />
      </TelaPadrao>
    </>
  );
}
