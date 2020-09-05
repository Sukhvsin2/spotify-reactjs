import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

const DataLayer = ({ initalState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </DataLayerContext.Provider>
);

export default DataLayer;

export const useDataLayerValue = () => useContext(DataLayerContext);
