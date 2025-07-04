import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center relative"
          style={{ backgroundImage: "url('/images/golf-course-hero.jpg')" }}
        >
        {/* Green overlay */}
        <div className="absolute inset-0 bg-[#165937] bg-opacity-40 z-0" />

          {/* Hero content */}
          <div className="relative z-10 bg-black bg-opacity-50 p-10 md:p-16 rounded-2xl shadow-2xl max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold font-[var(--font-playfair)] mb-6 leading-tight">
            Khayalethu Golf Reserve
          </h1>
            <p className="text-xl md:text-2xl font-[var(--font-poppins)] mb-8">
              A Visionary Rural Golf Estate in the Eastern Cape
            </p>
            <Button className="text-lg px-8 py-3 bg-white text-[#165937] hover:bg-[#dfeee6] transition rounded-full shadow-lg">
              Download Pitch Deck
            </Button>
          </div>
        </div>

      {/* About Section */}
        <section className="bg-[#fdf8f1] py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/grazing-land.jpg"
              alt="Grazing Land"
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
            <div>
              <h2 className="text-5xl font-bold mb-6 font-[var(--font-playfair)] text-[#1a1a1a]">
                Why Khayalethu?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 font-[var(--font-poppins)]">
                Nestled in the rolling hills of the Eastern Cape, Khayalethu is a visionary development
                on 490 hectares of serene former farmland. This rural golf estate blends nature,
                modern comfort, and opportunity — inviting both investors and families to be part of something extraordinary.
              </p>
            </div>
          </div>
        </section>


      {/* Features Section */}
      <div className="bg-white py-20 px-10 text-center">
        <h2 className="text-4xl font-semibold mb-10">Estate Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Golf Course</h3>
              <p>18-hole championship course designed for all levels of play.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Eco Lodge</h3>
              <p>Nature-inspired lodging perfect for retreats, weddings, and getaways.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Residential Homes</h3>
              <p>Plots and turnkey homes tailored for rural luxury living.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Partner With Us</h2>
        <p className="mb-6 text-lg">We welcome developers and investors to join this bold vision. Let’s build something extraordinary together.</p>
        <Button className="text-lg px-6 py-3">Contact Mmeli Mjekula</Button>
      </div>
    </div>
  );
}
