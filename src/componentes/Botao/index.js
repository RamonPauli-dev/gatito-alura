import { Text, TouchableOpacity } from "react-native";
import funcaoEstilosBotao from "./estilosBotao";

export default function Botao({pequeno = false, invertido = false, valor, acao, estilos }) {
    const estilosPadrao = funcaoEstilosBotao(pequeno, invertido)
  return (
    <TouchableOpacity  onPress={acao} style={[estilosPadrao.botao, estilos]}>
      <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
  );
}
