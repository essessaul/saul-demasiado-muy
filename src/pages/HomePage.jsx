
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3, Calendar, ClipboardList, CreditCard, Globe, Home, Link2, Search, Settings, ShieldCheck, Sparkles, Star, UserCircle2, Users } from "lucide-react";
import { Badge, Button, Card } from "../components/ui";
import StatCard from "../components/StatCard";
import logo from "../assets/logo.png";
import saulCartoon from "../assets/saul_cartoon.png";
import { useRentalSearch } from "../context/RentalSearchContext";

const vipRentals = [
  {
    name: "VIP Oceanfront Collection",
    text: "Premium short-term units with the strongest views, best terraces, and highest guest appeal.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    rate: "From $390 / night"
  },
  {
    name: "Family Favorites",
    text: "High-demand condos and suites ideal for weekend escapes and holiday stays.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    rate: "Most booked"
  },
  {
    name: "Long Stay Picks",
    text: "Comfortable units for guests who want more space, better value, and more time on property.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    rate: "Extended stay"
  }
];

export default function HomePage() {
  const navigate = useNavigate();
  const { search, setSearch } = useRentalSearch();

  function handleSearchChange(event) {
    const { name, value } = event.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  }

  function submitSearch() {
    navigate("/listings");
  }

  const modules = [
    [Search, "Vacation Rentals", "Short-term rental inventory focused entirely on Playa Escondida.", "/listings"],
    [CreditCard, "Direct Booking Flow", "Booking draft creation with payment-ready structure.", "/listings"],
    [Settings, "Admin Dashboard", "Manage reservations, availability, pricing, and reporting.", "/admin"],
    [UserCircle2, "Owner Services", "Show owners occupancy, revenue, and payout visibility.", "/owner-services"],
    [Link2, "For Sale", "A secondary section for units available for purchase.", "/for-sale"],
    [ClipboardList, "Operations", "Housekeeping, maintenance, and task tracking foundation.", "/admin"]
  ];

  return (
    <>
      <section className="section hero">
        <div className="container">
          <div className="brand-banner" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
            <img src={logo} alt="Playa Escondida Vacation Homes" style={{ height: 86, objectFit: "contain" }} />
            <Badge variant="outline">Short-term rentals at Playa Escondida</Badge>
          </div>

          <div className="hero-stage">
            <div className="hero-top-search">
              <div className="hero-search-grid">
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Check-in</div>
                  <div style={{ position: "relative" }}>
                    <Calendar size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="date" name="checkIn" value={search.checkIn} onChange={handleSearchChange} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Check-out</div>
                  <div style={{ position: "relative" }}>
                    <Calendar size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="date" name="checkOut" value={search.checkOut} onChange={handleSearchChange} style={{ paddingLeft: 40 }} />
                  </div>
                </div>
                <div>
                  <div className="muted" style={{ marginBottom: ".4rem", fontSize: ".9rem" }}>Guests</div>
                  <div style={{ position: "relative" }}>
                    <Users size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input type="number" min="1" name="guests" value={search.guests} onChange={handleSearchChange} placeholder="Number of guests" style={{ paddingLeft: 40 }} />
                  </div>
                </div>
              </div>

              <div className="header-actions" style={{ marginTop: "1rem" }}>
                <Button onClick={submitSearch}>Search Rentals</Button>
                <span className="muted">All listings are inside Playa Escondida Resort & Marina</span>
              </div>
            </div>

            <div className="hero-title-block">
              <div className="soft-section-title">Vacation rentals</div>
              <h1 className="page-title" style={{ color: "#0f172a", marginTop: ".5rem", maxWidth: "640px" }}>
                A cinematic rental-first homepage made to bring in bookings.
              </h1>
              <p className="muted" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620 }}>
                Search first, inspire second. Guests land on dates and guests immediately, then see Playa Escondida in a stronger full-screen style experience.
              </p>
            </div>

            <div className="hero-floating-card">
              <div className="label-chip"><Sparkles size={15} /> VIP spotlight</div>
              <h3 style={{ margin: ".9rem 0 .4rem" }}>Featured rental collection</h3>
              <p className="muted" style={{ lineHeight: 1.65 }}>
                Give more recognition to the units you most want to move — premium views, stronger margins, or priority inventory.
              </p>
              <div className="notice" style={{ marginTop: "1rem" }}>
                Ideal for highlighting VIP rentals, weekend favorites, or top-producing units directly from the homepage.
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Link to="/listings"><Button variant="light">See Featured Rentals</Button></Link>
              </div>
            </div>

            <div className="hero-broker-cutout">
              <img src={saulCartoon} alt="Saul Playa cartoon" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div style={{ maxWidth: 860, marginBottom: "1rem" }}>
            <div className="soft-section-title">Rental listings</div>
            <h2 style={{ fontSize: "2rem", margin: ".5rem 0 1rem" }}>Featured rentals and VIP recognition below the main search.</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              This section is designed to showcase the rental listings that deserve more attention first.
            </p>
          </div>

          <div className="vip-strip">
            <Card>
              <div className="summary-card vip-card-large">
                <div className="vip-media">
                  <img src={vipRentals[0].image} alt={vipRentals[0].name} />
                </div>
                <div>
                  <div className="label-chip"><Star size={15} /> VIP rentals</div>
                  <h3 style={{ marginTop: "1rem" }}>{vipRentals[0].name}</h3>
                  <p className="muted" style={{ lineHeight: 1.7 }}>{vipRentals[0].text}</p>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: ".8rem" }}>{vipRentals[0].rate}</div>
                  <div style={{ marginTop: "1rem" }}>
                    <Link to="/listings"><Button>Browse VIP Units</Button></Link>
                  </div>
                </div>
              </div>
            </Card>

            {vipRentals.slice(1).map((item) => (
              <Card key={item.name}>
                <div className="summary-card">
                  <div className="vip-media" style={{ height: 200 }}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h3 style={{ marginTop: "1rem" }}>{item.name}</h3>
                  <p className="muted" style={{ lineHeight: 1.65 }}>{item.text}</p>
                  <div style={{ fontWeight: 700, marginTop: ".75rem" }}>{item.rate}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          <StatCard icon={Home} title="Rental Inventory" value="25+" note="All inside Playa Escondida" />
          <StatCard icon={BarChart3} title="Average Nightly Rate" value="$312" note="Portfolio level" />
          <StatCard icon={ShieldCheck} title="Occupancy" value="74%" note="Rolling 30 days" />
          <StatCard icon={Globe} title="Direct Booking Focus" value="Primary" note="Sales section is secondary" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 860, marginBottom: "1.5rem" }}>
            <div className="soft-section-title">Main sections</div>
            <h2 style={{ fontSize: "2rem", margin: ".5rem 0 1rem" }}>Vacation Rentals first. For Sale and Owner Services as supporting sections.</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              The homepage now brings rental traffic and booking leads first. Buyers and owners can still navigate to their dedicated sections.
            </p>
          </div>
          <div className="three-col" style={{ marginBottom: "2rem" }}>
            <Card>
              <div className="module-card">
                <h3>Vacation Rentals</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Main marketing section with date and guest search for Playa Escondida stays.</p>
                <Link to="/listings"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
            <Card>
              <div className="module-card">
                <h3>For Sale</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Secondary section for ownership opportunities and real-estate inquiries.</p>
                <Link to="/for-sale"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
            <Card>
              <div className="module-card">
                <h3>Owner Services</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>Owner-facing performance, statements, payouts, and support tools.</p>
                <Link to="/owner-services"><Button variant="light">Open Section</Button></Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container module-grid">
          {modules.map(([Icon, title, text, link]) => (
            <Card key={title}>
              <div className="module-card">
                <div className="brand-mark" style={{ width: 48, height: 48, borderRadius: 18 }}><Icon size={20} /></div>
                <h3 style={{ marginTop: 20 }}>{title}</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>{text}</p>
                <Link to={link}><Button variant="light">Open</Button></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
