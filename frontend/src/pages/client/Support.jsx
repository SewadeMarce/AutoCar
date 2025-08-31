import { useState } from "react";

// Support client
const Support = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', message: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?', time: '10:30' },
    { id: 2, sender: 'user', message: 'J\'ai une question concernant ma location de demain.', time: '10:32' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const [tickets, setTickets] = useState([
    {
      id: 'T-001',
      subject: 'Problème avec la réservation',
      status: 'open',
      priority: 'high',
      created: '2024-01-15',
      lastUpdate: '2024-01-16'
    },
    {
      id: 'T-002',
      subject: 'Question sur l\'assurance',
      status: 'closed',
      priority: 'medium',
      created: '2024-01-10',
      lastUpdate: '2024-01-12'
    }
  ]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulation réponse automatique
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'support',
          message: 'Merci pour votre message. Un de nos agents va vous répondre sous peu.',
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Support Client</h1>

        {/* Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-900 p-1 rounded-lg">
          {[
            { id: 'chat', label: 'Chat en direct', icon: '💬' },
            { id: 'tickets', label: 'Mes tickets', icon: '🎫' },
            { id: 'faq', label: 'FAQ', icon: '❓' },
            { id: 'contact', label: 'Nous contacter', icon: '📞' }
          ].map(tab => (
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

        {/* Chat en direct */}
        {activeTab === 'chat' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Chat en direct</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">En ligne</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg h-96 p-4 mb-4 overflow-y-auto">
              {messages.map(message => (
                <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-700 text-white'
                    }`}>
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{message.time}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Tickets */}
        {activeTab === 'tickets' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Mes tickets de support</h2>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                + Nouveau ticket
              </button>
            </div>

            <div className="space-y-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">#{ticket.id} - {ticket.subject}</h3>
                      <p className="text-sm text-gray-400">Créé le {ticket.created} • Mis à jour le {ticket.lastUpdate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs rounded ${ticket.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        ticket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                        {ticket.priority === 'high' ? 'Urgent' : ticket.priority === 'medium' ? 'Moyen' : 'Faible'}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${ticket.status === 'open' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                        {ticket.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Comment modifier ma réservation ?",
                  answer: "Vous pouvez modifier votre réservation depuis votre espace client, section 'Mes commandes', jusqu'à 24h avant la prise en charge."
                },
                {
                  question: "Quelle est la politique d'annulation ?",
                  answer: "Annulation gratuite jusqu'à 48h avant la location. Entre 24h et 48h, des frais de 25% s'appliquent."
                },
                {
                  question: "L'assurance est-elle incluse ?",
                  answer: "Oui, une assurance de base est incluse. Vous pouvez souscrire à une assurance premium lors de la réservation."
                },
                {
                  question: "Puis-je conduire à l'étranger ?",
                  answer: "Oui, avec l'autorisation préalable et moyennant un supplément selon la destination."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg">
                  <details className="p-4">
                    <summary className="font-semibold cursor-pointer hover:text-yellow-400">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-gray-300">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Urgence 24h/24</h3>
                    <p className="text-gray-400">+971 21 658 369</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Support par email</h3>
                    <p className="text-gray-400">support@autocar.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Bureau principal</h3>
                    <p className="text-gray-400">Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-gray-400">7j/7, 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Nous écrire</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <select className="w-full bg-gray-800 text-white px-4 py-3 rounded">
                    <option>Question générale</option>
                    <option>Problème technique</option>
                    <option>Réclamation</option>
                    <option>Suggestion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Support