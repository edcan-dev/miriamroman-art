import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Galería - Miriam Denessi Román Ordaz',
  description: 'Galería - Miriam Denessi Román Ordaz',
  keywords: ['pintora', 'galeria', 'galería', 'miriam roman', 'miriam gaan', 'art&love d roman']
 };
export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen bg-white justify-center">
      <h1>Galeria Page</h1>
    </div>
  );
}