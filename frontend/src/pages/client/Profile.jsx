import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

// Profil utilisateur
const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    drivingLicense: user?.drivingLicense || '',
    address: user?.address || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    emergencyContact: user?.emergencyContact || ''
  });

  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Domicile', address: '123 Rue de la Paix, Paris 75001', isDefault: true },
    { id: 2, label: 'Bureau', address: '456 Avenue des Affaires, La Défense', isDefault: false }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', isDefault: true, expiry: '12/25' },
    { id: 2, type: 'card', last4: '8888', brand: 'Mastercard', isDefault: false, expiry: '08/26' }
  ]);

  const handleSave = () => {
    alert('Profil mis à jour avec succès !');
  };

  const tabs = [
    { id: 'personal', label: 'Informations personnelles', icon: '👤' },
    { id: 'addresses', label: 'Adresses', icon: '📍' },
    { id: 'payment', label: 'Paiements', icon: '💳' },
    { id: 'preferences', label: 'Préférences', icon: '⚙️' }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Mon Profil</h1>

        {/* Navigation des onglets */}
        <div className="flex space-x-1 mb-8 bg-gray-900 p-1 rounded-lg">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors ${activeTab === tab.id
                ? 'bg-yellow-400 text-black'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden md:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="bg-gray-900 rounded-lg p-6">
          {activeTab === 'personal' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations personnelles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date de naissance</label>
                  <input
                    type="date"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Numéro de permis</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.drivingLicense}
                    onChange={(e) => setProfileData({ ...profileData, drivingLicense: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact d'urgence</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={profileData.emergencyContact}
                    onChange={(e) => setProfileData({ ...profileData, emergencyContact: e.target.value })}
                  />
                </div>
              </div>
              <button
                onClick={handleSave}
                className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Sauvegarder les modifications
              </button>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Mes adresses</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  + Nouvelle adresse
                </button>
              </div>
              <div className="space-y-4">
                {addresses.map(address => (
                  <div key={address.id} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{address.label}</h3>
                          {address.isDefault && (
                            <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                              Par défaut
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400">{address.address}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-yellow-400 hover:text-yellow-300">Modifier</button>
                        <button className="text-red-400 hover:text-red-300">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Moyens de paiement</h2>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  + Ajouter une carte
                </button>
              </div>
              <div className="space-y-4">
                {paymentMethods.map(method => (
                  <div key={method.id} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded flex items-center justify-center">
                          <span className="text-xs font-bold">{method.brand}</span>
                        </div>
                        <div>
                          <p className="font-semibold">**** **** **** {method.last4}</p>
                          <p className="text-sm text-gray-400">Expire {method.expiry}</p>
                        </div>
                        {method.isDefault && (
                          <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
                            Par défaut
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-yellow-400 hover:text-yellow-300">Modifier</button>
                        <button className="text-red-400 hover:text-red-300">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Préférences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'email_offers', label: 'Offres spéciales par email', checked: true },
                      { id: 'sms_reminders', label: 'Rappels SMS', checked: false },
                      { id: 'push_notifications', label: 'Notifications push', checked: true },
                      { id: 'newsletter', label: 'Newsletter mensuelle', checked: true }
                    ].map(pref => (
                      <label key={pref.id} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked={pref.checked}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                        />
                        <span>{pref.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Langue et région</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Langue</label>
                      <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                        <option>Français</option>
                        <option>English</option>
                        <option>العربية</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Devise</label>
                      <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>AED (د.إ)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  Sauvegarder les préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile