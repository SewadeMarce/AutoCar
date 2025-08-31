/**
 * Transforme les données de commande brutes du backend en un format adapté pour le frontend.
 * @param {Array} rawOrders Le tableau de commandes brutes.
 * @returns {Array} Un tableau de commandes formatées.
 */

export function transformBackendOrders(backendData) {
  if (!backendData || !Array.isArray(backendData)) {
    console.error("Données de commande invalides reçues pour la transformation.");
    return [];
  }

  return backendData.flatMap(order => {
    return order.items.map(item => {
      const start = new Date(item.startDate);
      const end = new Date(item.endDate);
      const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;
      const { image, name } = item.car

      return {
        _id: item._id,
        name: name,
        image: image,
        startDate: new Date(item.startDate).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        endDate: new Date(item.endDate).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        duration,
        total: item.price * item.quantity,
        status: item.status,
        date: new Date(order.createdAt).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
    });
  });
};

