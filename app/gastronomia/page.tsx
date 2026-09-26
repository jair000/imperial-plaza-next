"use client";

import { useMemo, useState } from "react";
import "./Gastronomia.css";

const restaurants = [
  {
    name: "AL PLATO",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Comida",
    discount: true,
  },
  {
    name: "BEMBOS",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Hamburguesas",
    discount: true,
  },
  {
    name: "CHILIS",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Comida",
    discount: false,
  },
  {
    name: "CHINAWOK",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Comida asiática",
    discount: true,
  },
  {
    name: "CINNABON",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Postres",
    discount: false,
  },
  {
    name: "DOÑA FELA",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Comida",
    discount: false,
  },
  {
    name: "DUNKIN",
    hours: "10:00am - 10:00pm",
    floor: "Piso 1",
    status: "ABIERTO",
    theme: "green",
    category: "Cafetería",
    discount: true,
  },
  {
    name: "EMBARCADERO 41",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Mariscos",
    discount: false,
  },
  {
    name: "TOTTUS",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Supermercado",
    discount: true,
  },
  {
    name: "PAPA JOHNS",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Pizza",
    discount: true,
  },
  {
    name: "PIZZA HUT",
    hours: "10:00am - 10:00pm",
    floor: "Piso 1",
    status: "ABIERTO",
    theme: "green",
    category: "Pizza",
    discount: false,
  },
  {
    name: "SUBWAY",
    hours: "10:00am - 10:00pm",
    floor: "Piso 2",
    status: "ABIERTO",
    theme: "green",
    category: "Sandwiches",
    discount: true,
  },
];

/* =========================================================
   CATEGORÍAS
   Se declara fuera del componente para evitar
   que se cree nuevamente en cada render.
   ========================================================= */

const categories = [
  "Todas",
  ...Array.from(new Set(restaurants.map((restaurant) => restaurant.category))),
];

/* =========================================================
   ICONO DE BÚSQUEDA
   ========================================================= */

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />

      <path d="M16 16L21 21" />
    </svg>
  );
}

/* =========================================================
   ICONO DE UBICACIÓN
   ========================================================= */

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />

      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

/* =========================================================
   ICONO DE RELOJ
   ========================================================= */

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />

      <path d="M12 7v5l3.5 2.5" />
    </svg>
  );
}

/* =========================================================
   LOGOS DE RESTAURANTES
   ========================================================= */

function RestaurantMark({ name }: { name: string }) {
  const lower = name.toLowerCase();

  if (lower.includes("tottus")) {
    return (
      <div className="restaurant-logo logo-tottus">
        TOTTUS
        <br />
        AL PLATO
      </div>
    );
  }

  if (lower.includes("bembos")) {
    return <div className="restaurant-logo logo-bembos">BEMBOS</div>;
  }

  if (lower.includes("chilis")) {
    return <div className="restaurant-logo logo-chilis">chili&apos;s</div>;
  }

  if (lower.includes("chinawok")) {
    return (
      <div className="restaurant-logo logo-chinawok">
        china
        <br />
        wok
      </div>
    );
  }

  if (lower.includes("cinnabon")) {
    return <div className="restaurant-logo logo-cinnabon">CINNABON</div>;
  }

  if (lower.includes("doña fela") || lower.includes("dona fela")) {
    return (
      <div className="restaurant-logo logo-dona">
        Dona
        <br />
        Fela
      </div>
    );
  }

  if (lower.includes("dunkin")) {
    return <div className="restaurant-logo logo-dunkin">DUNKIN&apos;</div>;
  }

  if (lower.includes("embarcadero")) {
    return (
      <div className="restaurant-logo logo-embarcadero">Embarcadero 41</div>
    );
  }

  if (lower.includes("al plato")) {
    return <div className="restaurant-logo logo-alplato">AL PLATO</div>;
  }

  if (lower.includes("papa johns")) {
    return (
      <div className="restaurant-logo logo-papajohns">
        PAPA
        <br />
        JOHNS
      </div>
    );
  }

  if (lower.includes("pizza hut")) {
    return <div className="restaurant-logo logo-pizzahut">PIZZA HUT</div>;
  }

  if (lower.includes("subway")) {
    return <div className="restaurant-logo logo-subway">SUBWAY</div>;
  }

  return <div className="restaurant-logo logo-default">{name}</div>;
}

/* =========================================================
   PÁGINA
   ========================================================= */

export default function GastronomiaPage() {
  const [view, setView] = useState<"restaurants" | "categories" | "discounts">(
    "restaurants",
  );

  const [query, setQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Todas");

  /* =====================================================
     RESTAURANTES VISIBLES
     ===================================================== */

  const visibleRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name
        .toLowerCase()
        .includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "Todas" ||
        restaurant.category === selectedCategory;

      const matchesDiscount = view !== "discounts" || restaurant.discount;

      return matchesSearch && matchesCategory && matchesDiscount;
    });
  }, [query, selectedCategory, view]);

  /* =====================================================
     RESULTADOS DE CATEGORÍAS
     ===================================================== */

  const categoryResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories
      .filter((category) => category !== "Todas")
      .filter((category) => category.toLowerCase().includes(normalizedQuery));
  }, [query]);

  /* =====================================================
     CAMBIAR DE VISTA
     ===================================================== */

  function showRestaurants() {
    setView("restaurants");
    setSelectedCategory("Todas");
    setQuery("");
  }

  function showCategories() {
    setView("categories");
    setSelectedCategory("Todas");
    setQuery("");
  }

  function showDiscounts() {
    setView("discounts");
    setSelectedCategory("Todas");
    setQuery("");
  }

  return (
    <main className="gastronomia-page">
      <section className="gastronomia-shell">
        {/* =================================================
            TÍTULO
           ================================================= */}

        <h1>ENCUENTRA TU RESTAURANTE FAVORITO</h1>

        {/* =================================================
            BARRA DE HERRAMIENTAS
           ================================================= */}

        <div className="toolbar">
          {/* RESTAURANTES */}

          <button
            type="button"
            className={`filter-tab ${view === "restaurants" ? "active" : ""}`}
            onClick={showRestaurants}>
            <span className="tab-icon">🍽️</span>
            RESTAURANTES
          </button>

          {/* CATEGORÍAS */}

          <button
            type="button"
            className={`filter-tab ${view === "categories" ? "active" : ""}`}
            onClick={showCategories}>
            <span className="tab-icon">🏷️</span>
            CATEGORÍAS
            <span className="caret">⌄</span>
          </button>

          {/* DESCUENTOS */}

          <button
            type="button"
            className={`filter-tab ${view === "discounts" ? "active" : ""}`}
            onClick={showDiscounts}>
            <span className="tab-icon">🏷️</span>
            DESCUENTOS
          </button>

          {/* BUSCADOR */}

          <label
            className="search-panel"
            aria-label={
              view === "categories" ? "Buscar categoría" : "Buscar restaurante"
            }>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={
                view === "categories"
                  ? "Buscar categoría"
                  : "Buscar Restaurante"
              }
            />

            <button type="button" aria-label="Buscar">
              <SearchIcon />
            </button>
          </label>
        </div>

        {/* =================================================
            FILTROS DE CATEGORÍA
           ================================================= */}

        {view !== "categories" && (
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category ? "category-selected" : ""
                }
                onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        )}

        {/* =================================================
            VISTA DE CATEGORÍAS
           ================================================= */}

        {view === "categories" ? (
          <div className="restaurant-grid">
            {categoryResults.length > 0 ? (
              categoryResults.map((category) => {
                const count = restaurants.filter(
                  (restaurant) => restaurant.category === category,
                ).length;

                return (
                  <article
                    key={category}
                    className="restaurant-card category-card">
                    <div className="category-icon">🍴</div>

                    <div className="restaurant-info">
                      <h2>{category}</h2>

                      <p>
                        {count} {count === 1 ? "restaurante" : "restaurantes"}
                      </p>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="no-results">
                <div>🔎</div>

                <h2>No encontramos categorías</h2>

                <p>Intenta con otro término de búsqueda.</p>
              </div>
            )}
          </div>
        ) : (
          /* =================================================
             VISTA DE RESTAURANTES / DESCUENTOS
             ================================================= */

          <div className="restaurant-grid">
            {visibleRestaurants.length > 0 ? (
              visibleRestaurants.map((restaurant) => (
                <article key={restaurant.name} className="restaurant-card">
                  {/* ESTADO */}

                  <div className="status-pill">{restaurant.status}</div>

                  {/* DESCUENTO */}

                  {restaurant.discount && (
                    <div className="discount-pill">DESCUENTO</div>
                  )}

                  {/* LOGO */}

                  <div className="restaurant-logo-wrap">
                    <RestaurantMark name={restaurant.name} />
                  </div>

                  {/* INFORMACIÓN */}

                  <div className="restaurant-info">
                    <h2>{restaurant.name}</h2>

                    <div className="meta-row">
                      <ClockIcon />

                      <span>{restaurant.hours}</span>
                    </div>

                    <div className="meta-row">
                      <PinIcon />

                      <span>{restaurant.floor}</span>
                    </div>

                    <div className="restaurant-category">
                      {restaurant.category}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <div>🔎</div>

                <h2>No encontramos restaurantes</h2>

                <p>Intenta con otro nombre o categoría.</p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
