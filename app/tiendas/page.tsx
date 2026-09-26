"use client";

import "./tiendas.css";
import { useMemo, useState, type ReactNode } from "react";
type Store = { name: string; floor: string; tone: string; logo: string };
type Category = { name: string; count: number; icon: IconName };
type IconName =
  | "bag"
  | "shoe"
  | "shirt"
  | "sport"
  | "child"
  | "food"
  | "fun"
  | "other"
  | "search"
  | "chevron"
  | "pin";

function Icon({
  name,
  size = 22,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    bag: (
      <>
        <path d="M6 8h12l1 13H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2M9 12v1m6-1v1" />
      </>
    ),
    shoe: (
      <>
        <path d="M3 17c4 0 6-2 8-6l2 3 7 2v3H3v-2Z" />
        <path d="M12 14l2 1m-5 0 2 1" />
      </>
    ),
    shirt: (
      <>
        <path d="m8 4 4 2 4-2 4 4-3 3v9H7v-9L4 8l4-4Z" />
        <path d="M10 6h4" />
      </>
    ),
    sport: (
      <>
        <path d="M4 18h16M6 18l3-7m9 7-3-7M8 11l4-3 4 3" />
        <circle cx="12" cy="5" r="2" />
      </>
    ),
    child: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M8 21v-7l4-3 4 3v7M9 16h6" />
      </>
    ),
    food: (
      <>
        <path d="M6 3v8m3-8v8M4 3v5a3 3 0 0 0 6 0V3m-3 8v10M16 3v18m0-18c3 2 3 6 0 8" />
      </>
    ),
    fun: (
      <>
        <path d="M4 5c3 0 5 2 8 0s5 0 8 0M4 19c3 0 5-2 8 0s5 0 8 0" />
        <path d="M6 5v14m12-14v14" />
      </>
    ),
    other: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m12 8 .8 2.4L15 12l-2.2 1.6L12 16l-.8-2.4L9 12l2.2-1.6L12 8Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    pin: (
      <>
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const stores: Store[] = [
  { name: "ADAMS CABALLEROS", floor: "Piso 1", tone: "red", logo: "ADAMS" },
  { name: "ADIDAS", floor: "Piso 2", tone: "black", logo: "adidas" },
  { name: "ADIDAS KIDS", floor: "Piso 2", tone: "black", logo: "adidas kids" },
  {
    name: "AL PLATO",
    floor: "Piso 2",
    tone: "green",
    logo: "TOTTUS\nAL PLATO",
  },
  { name: "ANIME PERÚ", floor: "Piso 2", tone: "blue", logo: "ANIME PERÚ" },
  {
    name: "ARENA",
    floor: "Piso 2",
    tone: "black",
    logo: "arena\nWATER INSTINCT",
  },
  { name: "ARUMA", floor: "Piso 1", tone: "pink", logo: "aruma" },
  {
    name: "ASIAN FAN STORE",
    floor: "Piso 2",
    tone: "blue",
    logo: "ASIAN FAN\nSTORE",
  },
  { name: "BATA", floor: "Piso 1", tone: "black", logo: "BATA" },
  { name: "BEMBOS", floor: "Piso 2", tone: "red", logo: "BEMBOS" },
  { name: "CAT", floor: "Piso 1", tone: "yellow", logo: "CAT" },
  { name: "CROCS", floor: "Piso 2", tone: "teal", logo: "crocs" },
];

const categories: Category[] = [
  { name: "Accesorios", count: 123, icon: "bag" as IconName },
  { name: "Calzado", count: 64, icon: "shoe" as IconName },
  { name: "Vestuario", count: 85, icon: "shirt" as IconName },
  { name: "Deporte y Outdoor", count: 32, icon: "sport" as IconName },
  { name: "Infantil", count: 26, icon: "child" as IconName },
  { name: "Gastronomía", count: 64, icon: "food" as IconName },
  { name: "Entretención", count: 29, icon: "fun" as IconName },
  { name: "Otros", count: 32, icon: "other" as IconName },
];

export default function Page() {
  const [view, setView] = useState<"stores" | "categories">("stores");
  const [query, setQuery] = useState("");

  const visibleStores = useMemo(
    () =>
      stores.filter((store) =>
        store.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  const visibleCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <main className="mall-page">
      <section className="finder" id="tiendas">
        <h1>Buscador de {view === "stores" ? "Tiendas" : "Categorías"}</h1>
        <p>Encuentra tu tienda favorita</p>
        <div className="filters-label">Filtrar por</div>
        <div className="filter-row">
          <div className="tabs" role="tablist" aria-label="Filtrar resultados">
            <button
              className={view === "stores" ? "selected" : ""}
              onClick={() => {
                setView("stores");
                setQuery("");
              }}
              role="tab"
              aria-selected={view === "stores"}>
              <Icon name="bag" size={21} />
              Tiendas
            </button>
            <button
              className={view === "categories" ? "selected" : ""}
              onClick={() => {
                setView("categories");
                setQuery("");
              }}
              role="tab"
              aria-selected={view === "categories"}>
              <Icon name="bag" size={21} />
              Categorías
            </button>
          </div>
          <div className="divider" />
          <label className="search-box">
            <span className="sr-only">
              Buscar {view === "stores" ? "tienda" : "categoría"}
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Buscar ${view === "stores" ? "tienda" : "categoría"}...`}
            />
            <button aria-label="Buscar">
              <Icon name="search" size={17} />
            </button>
          </label>
        </div>

        <p className="result-count">
          {view === "stores"
            ? `Mostrando ${visibleStores.length} de 277 tiendas encontradas`
            : `Mostrando ${visibleCategories.length} de ${categories.length} categorías encontradas`}
        </p>
        <div className="result-grid">
          {view === "stores"
            ? visibleStores.map((store) => (
                <article className="result-card store-card" key={store.name}>
                  <div className="open-pill">
                    <span />
                    10:00 - 22:00
                  </div>
                  <div className={`store-logo ${store.tone}`}>
                    {store.logo.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <strong>{store.name}</strong>
                    <span>
                      <Icon name="pin" size={16} />
                      {store.floor}
                    </span>
                  </div>
                </article>
              ))
            : visibleCategories.map((category) => (
                <article
                  className="result-card category-card"
                  key={category.name}>
                  <div className="category-art">
                    <Icon name={category.icon} size={48} />
                  </div>
                  <div className="card-footer">
                    <strong>{category.name}</strong>
                    <span>{category.count} tiendas encontradas</span>
                  </div>
                </article>
              ))}
        </div>
      </section>
    </main>
  );
}
