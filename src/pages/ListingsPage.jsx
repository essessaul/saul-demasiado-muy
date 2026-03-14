import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { searchAvailableProperties } from "../services/propertyService";
import { useRentalSearch } from "../context/RentalSearchContext";

export default function ListingsPage() {
  const [query, setQuery] = useState("");
  const [properties, setProperties] = useState([]);
  const { search } = useRentalSearch();

  useEffect(() => {
    searchAvailableProperties(search).then(setProperties);
  }, [search]);

  const filtered = useMemo(() => {
    return properties.filter((p) =>
      [p.name, p.category, p.location, ...(p.amenities || [])].join(" ").toLowerCase().includes(query.toLowerCase())
    );
  }, [query, properties]);

  return (
    <section className="section">
      <div className="container">
        <div className="price-row" style={{ alignItems: "flex-end", marginBottom: 24 }}>
          <div>
            <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Vacation Rentals</div>
            <h1 className="page-title" style={{ color: "#0f172a" }}>Browse vacation rental listings.</h1>
            <p className="muted" style={{ maxWidth: 760, lineHeight: 1.7 }}>
              Results below are filtered by your homepage search for dates and number of guests inside Playa Escondida.
            </p>
            {(search.checkIn || search.checkOut || search.guests) ? (
              <p className="muted" style={{ marginTop: ".75rem" }}>
                Search: {search.checkIn || "Any check-in"} → {search.checkOut || "Any check-out"} • Guests: {search.guests || "Any"}
              </p>
            ) : null}
          </div>
          <div style={{ width: "min(360px, 100%)", position: "relative" }}>
            <Search size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search listings" style={{ paddingLeft: 42 }} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="notice">
            No units matched those dates and guest count. Try different dates or fewer guests.
          </div>
        ) : (
          <div className="module-grid">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
