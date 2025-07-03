
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/golf-course-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-2xl">
          <h1 className="text-5xl font-bold mb-4">Khayalethu Golf Reserve</h1>
          <p className="text-xl mb-6">A Visionary Rural Golf Estate in the Eastern Cape</p>
          <Button className="text-lg px-6 py-3">Download Pitch Deck</Button>
        </div>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center bg-gray-50">
        <img src="/images/grazing-land.jpg" alt="Grazing Land" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-4xl font-semibold mb-4">Why Khayalethu?</h2>
          <p className="text-lg">
            Located on 490 hectares of scenic former farmland, Khayalethu offers a rare opportunity to blend luxury living,
            eco-tourism, and rural development in one of South Africa's most peaceful natural settings.
          </p>
        </div>
      </div>

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