"use client";

import { useMemo, useState } from "react";
import "./sostenibilidad.css";

type TabKey = "ambiental" | "social" | "resultados";

type InitiativeItem = {
  title: string;
  copy: string;
  accent: string;
  kind: "eco" | "social" | "results";
};

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "ambiental", label: "Ambiental" },
  { key: "social", label: "Social" },
  { key: "resultados", label: "Resultados" },
];

const certificationCards = [
  {
    name: "Certificaciones Ambientales",
    description:
      "Obtuvimos el sello de dos estrellas en el Programa de Sostenibilidad del Ayuntamiento de Madrid.",
    tag: "Certificaciones Ambientales",
    tone: "green",
  },
  {
    name: "Reconocimientos",
    description:
      "Fuimos reconocidos por el Instituto de la Sostenibilidad por nuestro compromiso con la innovación responsable.",
    tag: "Reconocimientos",
    tone: "gold",
  },
  {
    name: "Indices Sostenibilidad",
    description:
      "Obtuvimos la calificación A en el área de sostenibilidad y gobierno corporativo.",
    tag: "Indices Sostenibilidad",
    tone: "blue",
  },
  {
    name: "Indices Sostenibilidad",
    description:
      "Certificado por la asociación de buenas empresas (ABE) por la calidad de nuestras prácticas sostenibles.",
    tag: "Indices Sostenibilidad",
    tone: "blue",
  },
  {
    name: "Sustainability Yearbook",
    description:
      "Por cuarto año consecutivo fuimos incluidos en el ranking más reconocido de sostenibilidad global.",
    tag: "Indices Sostenibilidad",
    tone: "red",
  },
  {
    name: "Great Place To Work",
    description:
      "Una vez más somos reconocidos como un referente en bienestar y compromiso con personas y equipos.",
    tag: "Reconocimientos",
    tone: "gold",
  },
  {
    name: "ISO",
    description:
      "Obtuvimos la certificación ISO 14001 para reforzar nuestro sistema de gestión ambiental.",
    tag: "Certificaciones Ambientales",
    tone: "green",
  },
  {
    name: "Empresa con Gestión Sostenible",
    description:
      "Por seguir un modelo de negocio alineado con criterios ESG y competitividad responsable.",
    tag: "Certificaciones Ambientales",
    tone: "green",
  },
];

const contentByTab: Record<
  TabKey,
  {
    intro: string;
    initiatives: InitiativeItem[];
    counters: Array<{ value: string; label: string; tag: string }>;
  }
> = {
  ambiental: {
    intro:
      "Nuestra estrategia de sostenibilidad refleja el genuino compromiso que tenemos con las personas y el entorno.",
    initiatives: [
      {
        title: "Sello sostenibilidad",
        copy: "Leer más →",
        accent: "green",
        kind: "eco",
      },
      {
        title: "Inversión Social Estratégica",
        copy: "Leer más →",
        accent: "gold",
        kind: "social",
      },
      {
        title: "Emprender es Crecer Más",
        copy: "Leer más →",
        accent: "blue",
        kind: "results",
      },
    ],
    counters: [
      {
        value: "+128.000 m³",
        label: "de agua reutilizada o tratada",
        tag: "ambiental",
      },
      {
        value: "+7.800",
        label: "toneladas de residuos fueron compostadas o recicladas",
        tag: "ambiental",
      },
      {
        value: "+1.450",
        label: "toneladas de residuos detectados en nuestras operaciones",
        tag: "ambiental",
      },
      {
        value: "+500",
        label: "estacionamientos para bicicletas y motocicletas",
        tag: "ambiental",
      },
      {
        value: "+50",
        label: "organizaciones de la sociedad civil apoyadas",
        tag: "social",
      },
      {
        value: "+1.800 m²",
        label: "para iniciativas comunitarias",
        tag: "social",
      },
      {
        value: "+1.200",
        label: "horas de formación en arte y voluntariado",
        tag: "social",
      },
      {
        value: "79%",
        label: "de nuestra energía directa proviene de fuentes renovables",
        tag: "ambiental",
      },
    ],
  },
  social: {
    intro:
      "Alineamos acciones sociales con impacto real, fortaleciendo comunidades y oportunidades para la gente.",
    initiatives: [
      {
        title: "Música, comunidad y alianzas que transforman vidas",
        copy: "Leer más →",
        accent: "gold",
        kind: "social",
      },
      {
        title: "Inversión Social Estratégica",
        copy: "Leer más →",
        accent: "green",
        kind: "eco",
      },
      {
        title: "Emprender es Crecer Más",
        copy: "Leer más →",
        accent: "blue",
        kind: "results",
      },
    ],
    counters: [
      {
        value: "+2.300",
        label: "personas capacitadas en emprendimiento",
        tag: "social",
      },
      {
        value: "+600",
        label: "jóvenes vinculados a programas de formación",
        tag: "social",
      },
      {
        value: "+180",
        label: "aliados estratégicos del ecosistema social",
        tag: "social",
      },
      {
        value: "92%",
        label: "de satisfacción de participantes en programas",
        tag: "social",
      },
      { value: "+40", label: "eventos comunitarios realizados", tag: "social" },
      { value: "+75", label: "organizaciones beneficiadas", tag: "social" },
      {
        value: "1.200",
        label: "horas de voluntariado institucional",
        tag: "social",
      },
      {
        value: "8.4/10",
        label: "promedio de valoración del impacto",
        tag: "social",
      },
    ],
  },
  resultados: {
    intro:
      "Nuestras métricas muestran el avance real de la estrategia: más eficiencia, más impacto y más bienestar colectivo.",
    initiatives: [
      {
        title: "Sello sostenibilidad",
        copy: "Leer más →",
        accent: "green",
        kind: "eco",
      },
      {
        title: "Inversión Social Estratégica",
        copy: "Leer más →",
        accent: "gold",
        kind: "social",
      },
      {
        title: "Emprender es Crecer Más",
        copy: "Leer más →",
        accent: "blue",
        kind: "results",
      },
    ],
    counters: [
      {
        value: "+128.000 m³",
        label: "de agua recuperada y reutilizada",
        tag: "ambiental",
      },
      {
        value: "+7.800",
        label: "toneladas de residuos gestionados",
        tag: "ambiental",
      },
      {
        value: "+1.450",
        label: "puntos de reciclaje activos",
        tag: "ambiental",
      },
      {
        value: "+500",
        label: "estacionamientos para bicicletas",
        tag: "ambiental",
      },
      { value: "+50", label: "organizaciones apoyadas", tag: "social" },
      {
        value: "+1.800 m²",
        label: "espacios para actividades comunitarias",
        tag: "social",
      },
      {
        value: "+1.200",
        label: "beneficiarios con formación continua",
        tag: "social",
      },
      {
        value: "79%",
        label: "de energía renovable en operación",
        tag: "ambiental",
      },
    ],
  },
};

export default function SostenibilidadPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("ambiental");

  const current = useMemo(() => contentByTab[activeTab], [activeTab]);

  return (
    <main className="sustainability-page">
      <section className="hero-sustainability">
        <div className="hero-illustration">
          <div className="bike-scene">
            <div className="sun" />
            <div className="person person-left">
              <div className="head" />
              <div className="body" />
              <div className="arm arm-left" />
              <div className="arm arm-right" />
              <div className="bike bike-left">
                <span className="wheel wheel-left" />
                <span className="wheel wheel-right" />
                <span className="frame" />
              </div>
            </div>

            <div className="grass grass-left" />
            <div className="grass grass-right" />
            <div className="recycle-pile recycle-left" />
            <div className="recycle-pile recycle-right" />

            <div className="person person-right">
              <div className="head" />
              <div className="body" />
              <div className="arm arm-left" />
              <div className="arm arm-right" />
              <div className="bike bike-right">
                <span className="wheel wheel-left" />
                <span className="wheel wheel-right" />
                <span className="frame" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-center-mark">
          <div className="mark-ring">
            <span>CAMBIANDO</span>
            <span>JUNTOS</span>
            <small>CREANDO FUTURO</small>
          </div>
        </div>

        <div className="hero-copy">
          <p>
            Un nuevo sello que identifica todas nuestras iniciativas para
            impactar positivamente y construir un futuro mejor, juntos.
          </p>
        </div>

        <div className="hero-dots" aria-label="Indicadores">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="story-section">
        <div className="story-text">{current.intro}</div>

        <div className="tabs" aria-label="Pestañas">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="initiatives-grid">
          {current.initiatives.map((item) => (
            <article
              key={item.title}
              className={`initiative-card ${item.accent}`}>
              <div className="card-art">
                <div className="badge">♡</div>
                <div className="mini-mark">
                  <span>CAMBIANDO</span>
                  <span>JUNTOS</span>
                </div>
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>
                <button type="button">{item.copy}</button>
              </div>
            </article>
          ))}
        </div>

        {activeTab === "resultados" && (
          <>
            <div className="results-section">
              <div className="results-header">NUESTROS RESULTADOS</div>
              <div className="results-grid">
                {current.counters.map((item, index) => (
                  <div key={`${item.value}-${index}`} className="result-card">
                    <div className="result-value">{item.value}</div>
                    <div className="result-label">{item.label}</div>
                    <span className={`result-tag ${item.tag}`}>{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <div className="results-header certifications-header">
                CERTIFICACIONES &amp; RECONOCIMIENTOS
              </div>
              <div className="certifications-grid">
                {certificationCards.map((card, index) => (
                  <article key={`${card.name}-${index}`} className="cert-card">
                    <div
                      className={`cert-mark ${card.tone}`}
                      aria-hidden="true"
                    />
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <span className="cert-badge">{card.tag}</span>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="feature-banner">
          <div className="feature-visual">
            <div className="people-hands" />
          </div>

          <div className="feature-copy">
            <h4>
              Conoce más sobre nuestra estrategia corporativa de sostenibilidad.
            </h4>
            <button type="button">Haz click aquí</button>
          </div>
        </div>
      </section>
    </main>
  );
}
