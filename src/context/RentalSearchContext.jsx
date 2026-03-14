import React, { createContext, useContext, useMemo, useState } from "react";

const RentalSearchContext = createContext(null);

export function RentalSearchProvider({ children }) {
  const [search, setSearch] = useState({
    checkIn: "",
    checkOut: "",
    guests: ""
  });

  const value = useMemo(() => ({ search, setSearch }), [search]);

  return (
    <RentalSearchContext.Provider value={value}>
      {children}
    </RentalSearchContext.Provider>
  );
}

export function useRentalSearch() {
  return useContext(RentalSearchContext);
}
