
import React, {  useState } from "react";

import { Phone, Mail, MapPin, Calendar, Clock, Filter, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous recontacterons bientôt.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-center">Contactez-nous</h1>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-400">UAE - Dubai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-400">+971 21 658 369</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">info-car@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-gray-400">Lun - Dim: 24h/24</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
                    <span className="font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
                    <span className="font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors">
                    <span className="font-bold">in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="Adresse"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />

                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact