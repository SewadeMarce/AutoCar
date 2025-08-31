
// ✅ Composant Status
export const Status = () => {


    return (<>
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-2xl bg-neutral-900 p-8 rounded-2xl shadow-xl border border-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-100 tracking-wide uppercase">
                    Checkout
                </h1>
                <p className="text-gray-400 text-center mb-6">
                    Finalisez votre réservation de voiture de luxe
                </p>

            </div>
        </div>

        <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-xl text-center border border-gray-800">
                <h2 className="text-3xl font-bold text-green-400 mb-4">Paiement Réussi 🎉</h2>
                <p className="text-gray-300 mb-4">
                    Merci pour votre confiance ! Un email de confirmation a été envoyé à{" "}
                    <span className="font-semibold text-white">{customerEmail}</span>.
                </p>
                <p className="text-gray-400">
                    Pour toute question, contactez-nous à{" "}
                    <a href="mailto:orders@example.com" className="text-blue-400 hover:underline">
                        orders@example.com
                    </a>
                </p>
            </div>
        </section>
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
            <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Redirection...</h2>
                <p>Votre session de paiement est en cours.</p>
            </div>
        </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
            <div className="text-center p-12 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
                <i className="fa-solid fa-car text-6xl text-lime-400 mb-6 animate-pulse"></i>
                <h1 className="text-4xl font-extrabold text-lime-400 mb-4">Félicitations !</h1>
                <p className="text-xl text-gray-300 mb-6">Votre achat a été effectué avec succès.</p>
                <p className="text-gray-400">
                    Un e-mail de confirmation sera envoyé à <span className="text-white font-semibold">{customerEmail}</span>.
                    <br />
                    Pour toute question, veuillez nous contacter à <a href="mailto:contact@luxurycars.com" className="text-lime-400 hover:underline">contact@luxurycars.com</a>.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-8 px-6 py-3 bg-lime-400 text-gray-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                    Retourner à l'accueil
                </button>
            </div>
        </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-inter">
            <div className="text-center p-8 bg-gray-900 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 text-red-500">Erreur de paiement</h2>
                <p>Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer ou contacter le support.</p>
                <button
                    onClick={() => navigate('/checkout')}
                    className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                    Réessayer
                </button>
            </div>
        </div>
    </>
    );
}


