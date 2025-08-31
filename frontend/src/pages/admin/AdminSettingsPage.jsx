// Paramètres admin
const AdminSettingsPage = ({ settings, setSettings }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState(settings);

  const handleSave = () => {
    setSettings(formData);
    alert('Paramètres sauvegardés avec succès !');
  };

  const tabs = [
    { id: 'general', label: 'Général', icon: '⚙️' },
    { id: 'pricing', label: 'Tarification', icon: '💰' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'maintenance', label: 'Maintenance', icon: '🔧' }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Paramètres</h1>

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

        <div className="bg-gray-900 rounded-lg p-6">
          {activeTab === 'general' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Paramètres généraux</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email de contact</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Adresse</label>
                  <textarea
                    rows="3"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Tarification</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Frais d'assurance (USD)</label>
                  <input
                    type="number"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.insuranceFee}
                    onChange={(e) => setFormData({ ...formData, insuranceFee: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Taux de taxe (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.taxRate}
                    onChange={(e) => setFormData({ ...formData, taxRate: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Remise fidélité (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded"
                    value={formData.loyaltyDiscount}
                    onChange={(e) => setFormData({ ...formData, loyaltyDiscount: parseFloat(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                {[
                  { key: 'newBooking', label: 'Nouvelle réservation' },
                  { key: 'cancellation', label: 'Annulation de réservation' },
                  { key: 'paymentReceived', label: 'Paiement reçu' },
                  { key: 'reminderCheckout', label: 'Rappel de restitution' }
                ].map(notification => (
                  <label key={notification.key} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.notifications[notification.key]}
                      onChange={(e) => setFormData({
                        ...formData,
                        notifications: {
                          ...formData.notifications,
                          [notification.key]: e.target.checked
                        }
                      })}
                      className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                    />
                    <span>{notification.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Maintenance du site</h2>
              <div className="space-y-6">
                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.maintenanceMode}
                      onChange={(e) => setFormData({ ...formData, maintenanceMode: e.target.checked })}
                      className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded"
                    />
                    <span>Mode maintenance activé</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message de maintenance</label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    value={formData.maintenanceMessage}
                    onChange={(e) => setFormData({ ...formData, maintenanceMessage: e.target.value })}
                    placeholder="Site temporairement indisponible pour maintenance..."
                  ></textarea>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-400 mb-2">Actions de maintenance</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-left">
                      Vider le cache
                    </button>
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-left">
                      Sauvegarder la base de données
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors text-left">
                      Réinitialiser les sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSave}
            className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Sauvegarder les paramètres
          </button>
        </div>
      </div>
    </div>
  );
};