import { createSlice } from "@reduxjs/toolkit";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  createdAt: string;
  updatedAt: string;
}

interface ProdutoState {
  produtos: Produto[];
}

const initialState: ProdutoState = {
  produtos: [],
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
