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

const ProdutoSlice = createSlice({
  name: "produtoSlice",
  initialState: initialState,
});
