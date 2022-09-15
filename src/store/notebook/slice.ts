import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './types';
import { getNotebookClusterStatus, startNotebookCluster, stopNotebookCluster } from './thunks';
import { NotebookApiStatus } from 'services/api/notebook/model';

export const notebookState: initialState = {
  isLoading: false,
  url: null,
  status: NotebookApiStatus.unverified,
};

const notebookSlice = createSlice({
  name: 'notebook',
  initialState: notebookState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
    reset: () => ({
      ...notebookState,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
  },
  extraReducers: (builder) => {
    // START cluster
    builder.addCase(startNotebookCluster.pending, (state) => ({
      ...state,
      isLoading: true,
      status: NotebookApiStatus.createInProgress,
      error: undefined,
    }));
    builder.addCase(startNotebookCluster.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(startNotebookCluster.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      status: NotebookApiStatus.unverified,
      isLoading: false,
    }));
    // GET cluster
    builder.addCase(getNotebookClusterStatus.pending, (state) => ({
      ...state,
      isLoading: true,
      error: undefined,
    }));
    builder.addCase(getNotebookClusterStatus.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      status: action.payload.status,
      url: action.payload.url!,
    }));
    builder.addCase(getNotebookClusterStatus.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      status: NotebookApiStatus.unverified,
      isLoading: false,
    }));
    // STOP cluster
    builder.addCase(stopNotebookCluster.pending, (state) => ({
      ...state,
      isLoading: true,
      status: NotebookApiStatus.deleteInProgress,
      url: null,
      error: undefined,
    }));
    builder.addCase(stopNotebookCluster.fulfilled, (state) => ({
      ...state,
      isLoading: true,
      status: NotebookApiStatus.deleteInProgress,
      url: null,
    }));
    builder.addCase(stopNotebookCluster.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      status: NotebookApiStatus.createComplete,
      isLoading: false,
    }));
  },
});

export const notebookActions = notebookSlice.actions;
export default notebookSlice.reducer;
