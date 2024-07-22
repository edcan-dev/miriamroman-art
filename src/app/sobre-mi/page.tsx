import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre Mi - Miriam Denessi Román Ordaz',
  description: 'Sobre Mi - Miriam Denessi Román Ordaz',
  keywords: ['pintora', 'miriam roman', 'miriam gaan', 'art&love d roman']
 };

export default function SobreMiPage() {
  return (
    <div className="flex min-h-screen bg-white justify-center">
      <h1>Sobre Mi Page</h1>
    </div>
  );
}