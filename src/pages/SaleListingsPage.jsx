import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "../components/ui";
import logo from "../assets/logo.png";

const saleListings = [
  {
    id: "SALE-AP801",
    name: "Unit AP-801",
    type: "Beachfront Apartment",
    price: "$450,000",
    location: "Playa Escondida Resort & Marina",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Premium beachfront unit with strong lifestyle appeal and attractive long-term value."
  },
  {
    id: "SALE-VILLA12",
    name: "Villa 12",
    type: "Luxury Villa",
    price: "$895,000",
    location: "Playa Escondida Resort & Marina",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious villa concept for buyers seeking ownership, privacy, and resort access."
  },
  {
    id: "SALE-PH3",
    name: "Marina Penthouse PH-3",
    type: "Penthouse",
    price: "$1,250,000",
    location: "Playa Escondida Resort & Marina",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    description: "High-end penthouse offering panoramic views and premium positioning for resale or personal use."
  }
];

export default function SaleListingsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner">
          <img src={logo} alt="Playa Escondida Vacation Homes" style={{ height: 84, objectFit: "contain" }} />
        </div>

        <div style={{ maxWidth: 840 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>
            For Sale
          </div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Property listings for sale.</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            This tab is for units and properties available for purchase, separate from vacation rentals.
          </p>
        </div>

        <div className="module-grid" style={{ marginTop: 24 }}>
          {saleListings.map((item) => (
            <Card key={item.id}>
              <div className="property-card">
                <img src={item.image} alt={item.name} />
                <div className="meta-row" style={{ marginTop: 16 }}>
                  <Badge>{item.type}</Badge>
                  <Badge variant="outline">For Sale</Badge>
                </div>
                <h3 style={{ marginTop: 16, marginBottom: 6 }}>{item.name}</h3>
                <div className="muted">{item.location}</div>
                <p className="muted" style={{ lineHeight: 1.6 }}>{item.description}</p>
                <div className="price-row" style={{ marginTop: 20 }}>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{item.price}</div>
                    <div className="muted" style={{ fontSize: 12 }}>asking price</div>
                  </div>
                  <Link to="/admin">
                    <Button>Request Info</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
