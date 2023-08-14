import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import estilo from "./style";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };
  return (
    <>
      <TouchableOpacity style={estilo.informacao} onPress={inverteExpandir}>
        <Text style={estilo.nome}>{nome}</Text>
        <Text style={estilo.descricao}>{descricao}</Text>
        <Text style={estilo.preco}>
          {Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expandir && (
        <View style={estilo.carrinho}>
          <View>
            <View style={estilo.valor}>
              <Text style={estilo.descricao}>Quantidade:</Text>
              <CampoInteiro
                estilos={estilo.quantidade}
                valor={quantidade}
                acao={atualizaQuantidadeTotal}
              />
            </View>
            <View style={estilo.valor}>
              <Text style={estilo.descricao}>Total:</Text>
              <Text style={estilo.preco}>
                {Intl.NumberFormat("pr-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <Botao valor="Adicionar ao carrinho" acao={() => {}} />
        </View>
      )}

      <View style={estilo.divisor} />
    </>
  );
}
