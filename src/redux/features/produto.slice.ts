import { createSlice } from "@reduxjs/toolkit";

interface Produto {
  nome: string;
  preco: number;
  estoque: number;
}

interface ProdutoState {
  produtos: Produto[];
}

const initialState: ProdutoState = {
  produtos: [
    {
      nome: "Sabonete",
      preco: 1.9,
      estoque: 10,
    },
  ],
};

const produtoSlice = createSlice({
  name: "produtoSlice",
  initialState: initialState,

  reducers: {
    addProduto(state, action) {
      state.produtos.push(action.payload);
    },
  },
});

export const { addProduto } = produtoSlice.actions;
export default produtoSlice.reducer;
