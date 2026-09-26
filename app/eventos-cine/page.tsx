"use client";

import { useMemo, useState } from "react";
import "./Cinema.css";

const weekDays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

const events = [
  {
    title: "Gustavo Cerati con Fernando Sosa",
    date: "sábado, 26 de septiembre",
    time: "19:00 - 20:00",
    dateKey: "2026-09-26",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    accent: "teal",
  },
  {
    title: "Zaperoko & amigos",
    date: "domingo, 27 de septiembre",
    time: "17:00 - 20:00",
    dateKey: "2026-09-27",
    image:
      "https://images.unsplash.com/photo-1516280440614-2f3d8f0c4f5d?auto=format&fit=crop&w=900&q=80",
    accent: "green",
  },
  {
    title: "¡Gran inauguración Plaza Gastronómica!",
    date: "miércoles, 30 de septiembre",
    time: "18:00 - 21:00",
    dateKey: "2026-09-30",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    accent: "green",
  },
];

const monthNames = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0",
  )}`;
}

function getCalendarDays(year: number, month: number) {
  // JS: domingo = 0, lunes = 1...
  // Nosotros queremos que lunes sea 0.
  const firstDay = new Date(year, month, 1).getDay();
  const mondayFirst = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonthDays = new Date(year, month, 0).getDate();

  const days = [];

  // Días del mes anterior
  for (let i = mondayFirst - 1; i >= 0; i--) {
    days.push({
      day: previousMonthDays - i,
      currentMonth: false,
    });
  }

  // Días del mes actual
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      currentMonth: true,
    });
  }

  // Completar hasta 42 celdas
  let nextDay = 1;

  while (days.length < 42) {
    days.push({
      day: nextDay,
      currentMonth: false,
    });

    nextDay++;
  }

  return days;
}

export default function EventosYCinePage() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8, 1));

  const [selectedDate, setSelectedDate] = useState("2026-09-25");

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const calendarDays = useMemo(
    () => getCalendarDays(year, month),
    [year, month],
  );

  const selectedEvents = useMemo(() => {
    return events.filter((event) => event.dateKey === selectedDate);
  }, [selectedDate]);

  const eventDates = useMemo(() => {
    return new Set(events.map((event) => event.dateKey));
  }, []);

  function previousMonth() {
    setCurrentMonth(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1));
  }

  function selectDay(day: number) {
    const dateKey = formatDateKey(year, month, day);

    setSelectedDate(dateKey);
  }

  return (
    <main className="cinema-page">
      {/* ================= HERO ================= */}

      <section className="cinema-hero">
        <div className="hero-left">
          <div className="hero-decor hero-decor-top" />
          <div className="hero-decor hero-decor-bottom" />

          <div className="hero-logo-wrap">
            <div className="hero-logo-box">
              <span className="cinemark-word">CINEMARK</span>
            </div>

            <div className="hero-badge" aria-label="Cine">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5Zm2.5-1.5h11a1 1 0 0 1 1 1v.5H5.5v-.5a1 1 0 0 1 1-1Zm.5 6h3.5v2H7v-2Zm6 0h4v2h-4v-2ZM7 14h3.5v2H7v-2Zm6 0h4v2h-4v-2Z" />
              </svg>
            </div>
          </div>

          <h1>¡ES HORA DE CINE!</h1>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image" />
        </div>
      </section>

      {/* ================= CALENDARIO ================= */}

      <section className="cinema-schedule">
        <aside className="calendar-panel">
          <div className="calendar-header">
            <button
              type="button"
              aria-label="Mes anterior"
              onClick={previousMonth}>
              ‹
            </button>

            <span>
              {monthNames[month]} DE {year}
            </span>

            <button
              type="button"
              aria-label="Mes siguiente"
              onClick={nextMonth}>
              ›
            </button>
          </div>

          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {calendarDays.map(({ day, currentMonth }, index) => {
              const dateKey = currentMonth
                ? formatDateKey(year, month, day)
                : "";

              const hasEvent = currentMonth && eventDates.has(dateKey);

              const isSelected = dateKey === selectedDate;

              const isToday =
                currentMonth &&
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              return (
                <button
                  type="button"
                  key={`${day}-${index}`}
                  className={[
                    "calendar-day",
                    !currentMonth ? "muted" : "",
                    isSelected ? "selected" : "",
                    isToday ? "today" : "",
                    hasEvent ? "has-event" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={!currentMonth}
                  onClick={() => selectDay(day)}>
                  <span>{day}</span>

                  {hasEvent && <i className="event-dot" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ================= EVENTOS ================= */}

        <div className="events-panel">
          <div className="events-header">
            <span className="events-label">Próximos Eventos</span>
          </div>

          <div className="selected-date-label">
            Eventos del <strong>{selectedDate}</strong>
          </div>

          <div className="event-list">
            {selectedEvents.length > 0 ? (
              selectedEvents.map((event) => (
                <article
                  key={event.title}
                  className={`event-card ${event.accent}`}>
                  <div className="event-image-wrap">
                    <img src={event.image} alt={event.title} />
                  </div>

                  <div className="event-body">
                    <h2>{event.title}</h2>

                    <div className="event-meta">
                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 2v3m8-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 14v-5h8v5H8Z" />
                        </svg>

                        <span>{event.date}</span>
                      </div>

                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 7v5l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span>{event.time}</span>
                      </div>
                    </div>

                    <button type="button" className="event-button">
                      Ver Más
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-events">
                <div className="no-events-icon">🎬</div>

                <h3>No hay eventos este día</h3>

                <p>Selecciona otra fecha en el calendario.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
