import "./App.css";
import logo from "./assets/abdi-logo.png";
import rice from "./assets/rice.png";
import sugar from "./assets/sugar.png";
import oil from "./assets/oil.png";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">Abdi Importer</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#mission">Mission</a>
          <a href="#process">Process</a>
          <a href="#trust">Trust</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <img src={logo} alt="Abdi Importer" className="logo-large" />

        <h1>Supplying Quality Food Products Across Ethiopia</h1>

        <p className="hero-subtitle">
          Reliable Supply • Trusted Partnership • Competitive Prices
        </p>

        <a
          href="https://wa.me/251977235676"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Contact on WhatsApp
        </a>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Abdi Importer is an Ethiopian import and distribution company focused
          on supplying quality food products including rice, sugar, and cooking
          oil. We aim to build trust, reliable supply, and long-term business
          relationships across Ethiopia.
        </p>
      </section>

      <section id="products">
        <h2>Our Products</h2>

        <div className="products">
          <div className="card">
            <img src={rice} alt="Rice" className="product-img" />
            <h3>Rice</h3>
            <p>
              Premium imported rice supplied to wholesalers, retailers, hotels
              and distributors.
            </p>
          </div>

          <div className="card">
            <img src={sugar} alt="Sugar" className="product-img" />
            <h3>Sugar</h3>
            <p>
              High-quality sugar products with reliable supply across Ethiopia.
            </p>
          </div>

          <div className="card">
            <img src={oil} alt="Cooking Oil" className="product-img" />
            <h3>Cooking Oil</h3>
            <p>
              Premium cooking oil for commercial, retail and household markets.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery">
        <h2>Our Product Gallery</h2>

        <div className="products">
          <div className="card">
            <img src={rice} alt="Premium Rice" className="product-img" />
            <h3>Premium Rice</h3>
          </div>

          <div className="card">
            <img src={sugar} alt="Quality Sugar" className="product-img" />
            <h3>Quality Sugar</h3>
          </div>

          <div className="card">
            <img src={oil} alt="Cooking Oil" className="product-img" />
            <h3>Cooking Oil</h3>
          </div>
        </div>
      </section>

      <section id="mission">
        <h2>Mission & Vision</h2>

        <div className="products">
          <div className="card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide quality food products at competitive prices while
              building trusted business relationships with customers and
              partners.
            </p>
          </div>

          <div className="card">
            <h3>🌍 Our Vision</h3>
            <p>
              To become a reliable food import and distribution company serving
              customers across Ethiopia.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Our Promise</h3>
            <p>
              We focus on honest communication, dependable supply, and long-term
              partnership.
            </p>
          </div>
        </div>
      </section>

      <section id="process">
        <h2>How We Work</h2>

        <div className="products">
          <div className="card">
            <h3>1️⃣ Contact Us</h3>
            <p>
              Customers contact us by phone or WhatsApp for product inquiries.
            </p>
          </div>

          <div className="card">
            <h3>2️⃣ Request Product</h3>
            <p>
              We discuss the needed product, quantity, location, and delivery
              requirement.
            </p>
          </div>

          <div className="card">
            <h3>3️⃣ Confirm Supply</h3>
            <p>
              We confirm product availability, price, and delivery arrangement
              clearly.
            </p>
          </div>

          <div className="card">
            <h3>4️⃣ Delivery Support</h3>
            <p>
              We support customers with reliable communication until the product
              is received.
            </p>
          </div>
        </div>
      </section>

      <section id="trust">
        <h2>Why Customers Can Trust Us</h2>

        <div className="products">
          <div className="card">
            <h3>✅ Quality First</h3>
            <p>
              We focus on carefully selected food products suitable for business
              and household markets.
            </p>
          </div>

          <div className="card">
            <h3>💬 Clear Communication</h3>
            <p>
              Customers receive clear information about product availability,
              price, and delivery support.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Honest Partnership</h3>
            <p>
              As a growing company, we focus on honesty, service, and long-term
              customer trust.
            </p>
          </div>
        </div>
      </section>

      <section id="customers">
        <h2>Customers We Serve</h2>

        <div className="products">
          <div className="card">
            <h3>🏪 Retailers</h3>
            <p>
              Food shops and local retailers looking for consistent product
              supply.
            </p>
          </div>

          <div className="card">
            <h3>📦 Wholesalers</h3>
            <p>
              Wholesale customers who need reliable bulk food product
              availability.
            </p>
          </div>

          <div className="card">
            <h3>🏨 Hotels & Institutions</h3>
            <p>
              Businesses and institutions needing regular rice, sugar, and oil
              supply.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Need Rice, Sugar or Cooking Oil?</h2>
        <p>
          Contact Abdi Importer today for product availability, pricing, and
          supply discussion.
        </p>

        <a
          href="https://wa.me/251977235676"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Send WhatsApp Message
        </a>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>

        <div className="contact-box">
          <p>📞 Mobile: +251 912 727 737</p>
          <p>💬 WhatsApp: +251 977 235 676</p>
          <p>📍 Address: Addis Ababa, Jemo 1</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Jemo+1"
            target="_blank"
            rel="noreferrer"
            className="map-btn"
          >
            View Location on Google Maps
          </a>
        </div>
      </section>

      <footer>
        <h3>Abdi Importer Trading</h3>
        <p>Supplying Quality Food Products Across Ethiopia</p>
        <p>Rice • Sugar • Cooking Oil</p>
        <p>📞 +251 912 727 737</p>
        <p>📍 Addis Ababa, Ethiopia</p>
        <p>© 2026 Abdi Importer Trading. All rights reserved.</p>
      </footer>

      <a
        href="https://wa.me/251977235676"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
    </div>
  );
}

export default App;