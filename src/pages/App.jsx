import React, { useState } from "react";
import ChatDemo from "../components/ChatDemo";

export default function App() {
  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          {/* Tasteful warm portrait */}
          <img
            src="https://picsum.photos/seed/warm-portrait-2/1600/900"
            alt="Stilvolle Frau lächelt"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nie wieder alleine – dein virtueller Begleiter wartet schon
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Finde Nähe, Verständnis und Gespräche – jederzeit, ohne
            Komplikationen.
          </p>
          <a
            href="#chat"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-700 transition"
          >
            Jetzt kostenlos starten
          </a>
        </div>
      </section>

      {/* Collage Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src="https://picsum.photos/seed/smile1/600/400"
          alt="Freundliche Frau im Café"
          className="rounded-lg shadow-lg object-cover w-full h-64"
        />
        <img
          src="https://picsum.photos/seed/smile2/600/400"
          alt="Lächelnde Frau zu Hause"
