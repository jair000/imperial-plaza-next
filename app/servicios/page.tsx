"use client";

import { useState } from "react";
import "./servicios.css";

type Service = {
  id: string;
  name: string;
  icon: string;
  description?: string;
  locations: string[];
  floor: string;
  hours: string;
};

const services: Service[] = [
  {
    id: "elevators",
    name: "Ascensores",
    icon: "⇅",
    description:
      "Contamos con ascensores para facilitar tu visita y conectar todos los niveles.",
    floor: "Piso 1",
    locations: ["Frente a Paris", "En el casino Luckia"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "accessible",
    name: "Baños para discapacitados",
    icon: "♿",
    description:
      "Contamos con baños ambientados para la comodidad de las personas con algún tipo de discapacidad.",
    floor: "Piso 1",
    locations: [
      "Al lado de Tottus y al lado de Sodimac",
      "Al lado de Coney Park",
      "Al lado de Cinemark",
    ],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "atm",
    name: "Cajeros",
    icon: "▣",
    description:
      "Contamos con 6 cajeros automáticos: BCP, Globalnet, BBVA y Scotiabank.",
    floor: "Piso 1",
    locations: ["En Plaza Conquistadores", "Frente a Renzo Costa"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "info",
    name: "Centro de atención al cliente",
    icon: "ⓘ",
    description:
      "Contamos con un centro de atención en el cuál podrás resolver todas tus dudas y/o consultas.",
    floor: "Piso 1",
    locations: ["Al lado de la pileta"],
    hours:
      "Lunes a Domingo de 10:00 am - 1:00 pm\nLunes a Domingo de 2:00 pm - 8:00 pm",
  },
  {
    id: "moto",
    name: "Estacionamiento de motos",
    icon: "♢",
    description:
      "Contamos con estacionamiento para motos, donde podrás dejarla segura para disfrutar de tu visita.",
    floor: "Piso 1",
    locations: ["Entrada de Integra Médica"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "parking",
    name: "Estacionamientos preferenciales",
    icon: "♙",
    description:
      "Contamos con estacionamientos preferenciales para minusválidos, adultos mayores y embarazadas.",
    floor: "Piso 1",
    locations: [
      "Entrada de Alfredo Mendiola",
      "Calle “A”, entrada de Integra médica",
      "Entrada avenida Pacífico",
    ],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "stroller",
    name: "Préstamo de sillas de ruedas y coches de bebé",
    icon: "◡",
    description:
      "Te prestamos sillas de ruedas y coches para bebés para que puedas disfrutar de tu visita.",
    floor: "Piso 1",
    locations: [
      "Ingreso de Mendiola, frente a Mifarma",
      "Ingreso de Industrial, frente a Movistar",
    ],
    hours: "Lunes a Domingo de 10:00 am - 9:00 pm",
  },
  {
    id: "taxi",
    name: "Taxis privados",
    icon: "▱",
    description:
      "En MegaPlaza nos preocupamos por tu seguridad, por eso podrás encontrar taxis privados de la empresa Los Portales.",
    floor: "Piso 1",
    locations: ["Entrada de Alfredo Mendiola", "Entrada de avenida industrial"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "wifi",
    name: "WIFI gratuito",
    icon: "◔",
    description:
      "Contamos con WIFI gratuito para que puedas disfrutar y compartir los mejores momentos de tu visita sin necesidad de gastar tus datos.",
    floor: "",
    locations: [
      "Cinemark",
      "Paseo Colón",
      "Zona de la ex pecera",
      "Patio de comidas",
      "Falabella",
    ],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "banks",
    name: "Bancos",
    icon: "⌂",
    floor: "Piso 1",
    locations: ["Entrada Alfredo Mendiola", "Entrada Avenida Industria"],
    hours:
      "Lunes a Viernes 9:00 am a 6:00 pm\nSábado y Domingo 9:00 am a 1:00 pm",
  },
  {
    id: "bike",
    name: "Bicicletero",
    icon: "♢",
    description:
      "Contamos con un bicicletero donde por S/1 (tarifa plana) podrás dejar tu bicicleta segura para disfrutar de tu visita.",
    floor: "Piso 1",
    locations: ["Entrada de Integra Médica"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "money",
    name: "Casas de cambio",
    icon: "$",
    description:
      "Contamos con una casa de cambio de divisas donde podrás realizar tus transacciones de forma segura.",
    floor: "Piso 1",
    locations: ["Entrada de avenida industrial, frente al BCP"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "stairs",
    name: "Escaleras eléctricas",
    icon: "⌁",
    floor: "Piso 1",
    locations: [
      "Entrada de Alfredo Mendiola",
      "Patio de comidas",
      "Plaza Conquistadores",
      "Plaza Libertadores",
      "Boulevard",
    ],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "parking-lot",
    name: "Estacionamientos",
    icon: "Ⓔ",
    description: "Contamos con amplia Playa de estacionamientos.",
    floor: "Piso 1",
    locations: [
      "Ingreso Av. Alfredo Mendiola (Cerrado)",
      'Ingreso Calle "A", entrada de Integra médica',
      "Ingreso Av. Pacífico",
    ],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "milk",
    name: "Lactario",
    icon: "♧",
    description:
      "Contamos con un espacio gratuito equipado para ti y tu bebé, en donde podrás alimentarlo o cambiarlo.",
    floor: "Piso 2",
    locations: ["Pasadizo entre Plaza Libertadores y Plaza Feliz"],
    hours: "Lunes a Domingo de 9:00 am - 8:00 pm",
  },
  {
    id: "sat",
    name: "SAT",
    icon: "♜",
    description:
      "Tiene como finalidad: organizar, administrar, fiscalizar y recaudar todos los ingresos tributarios de la Municipalidad Metropolitana de Lima.",
    floor: "Piso 2",
    locations: ["Al frente de Montalvo"],
    hours: "Lunes a Sábado de 9:15 am - 6:00 pm",
  },
  {
    id: "topico",
    name: "Tópico",
    icon: "+",
    description:
      "Contamos con un Tópico debidamente equipado para atenderte cuando sea necesario.",
    floor: "Piso 1",
    locations: ["Entre Tottus y The Cult"],
    hours: "Lunes a Domingo de 10:00 am - 10:00 pm",
  },
];

function ServiceIcon({ value }: { value: string }) {
  return (
    <span className="service-glyph" aria-hidden="true">
      {value}
    </span>
  );
}

const serviceOrder = [
  "elevators",
  "banks",
  "accessible",
  "bike",
  "atm",
  "money",
  "info",
  "stairs",
  "moto",
  "parking-lot",
  "parking",
  "milk",
  "stroller",
  "sat",
  "taxi",
  "topico",
  "wifi",
];

export default function Page() {
  const [activeId, setActiveId] = useState("elevators");
  const active =
    services.find((service) => service.id === activeId) ?? services[0];
  return (
    <main className="services-page">
      <section className="services-shell" aria-labelledby="services-title">
        <header className="services-heading">
          <h1 id="services-title">
            <em>MÁS</em> SERVICIOS
          </h1>
          <p>Conoce los servicios que tenemos para ti</p>
        </header>
        <div className="services-layout">
          <div className="service-list" role="list">
            {serviceOrder
              .map((id) => services.find((service) => service.id === id))
              .filter((service): service is Service => Boolean(service))
              .map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`service-item ${activeId === service.id ? "selected" : ""}`}
                  aria-pressed={activeId === service.id}
                  onClick={() => setActiveId(service.id)}>
                  <span className="service-icon">
                    <ServiceIcon value={service.icon} />
                  </span>
                  <span>{service.name}</span>
                </button>
              ))}
          </div>
          <aside className="service-panel" aria-live="polite">
            <div className="panel-header">
              <ServiceIcon value={active.icon} />
              <strong>{active.name}</strong>
            </div>
            <div className="panel-content">
              {active.description && (
                <p className="description">{active.description}</p>
              )}
              <section className="detail-section">
                <h2>
                  <span>⌖</span> UBICACIÓN
                </h2>
                {active.floor && <p className="floor">{active.floor}</p>}
                <ul>
                  {active.locations.map((location) => (
                    <li key={location}>
                      <span className="dot" />
                      {location}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="detail-section hours">
                <h2>
                  <span>◷</span> HORARIO
                </h2>
                <p>{active.hours}</p>
              </section>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
