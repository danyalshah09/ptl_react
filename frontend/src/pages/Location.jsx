export default function Location() {
  return (
    <div className="bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Air Travel */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">By Air</h3>
            <p className="text-gray-600"><strong>Islamabad to Gilgit:</strong> 1-hour flight (PIA operates daily flights, subject to weather conditions)</p>
            <p className="text-gray-600"><strong>Karachi to Gilgit:</strong> 4-hour flight with a stopover in Islamabad</p>
            <p className="text-gray-600"><strong>Lahore to Gilgit:</strong> 2-hour flight with a stopover in Islamabad</p>

            <img 
              src="./assets/location/byair.PNG"
              className="rounded-lg shadow-md w-full h-auto object-cover"
              alt="Flight to Gilgit"
              loading="lazy"
            />
          </div>

          {/* Road Travel */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">By Car</h3>
            <p className="text-gray-600"><strong>Gilgit to Passu Tourist Lodge:</strong> 3-hour drive (125 km) via the scenic Karakoram Highway</p>
            <p className="text-gray-600">The journey offers breathtaking views of mountains, rivers, and valleys.</p>
            
            <img 
              src="./assets/location/gilgit.PNG" 
              alt="Mountain drive"
              className="rounded-lg shadow-md w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Nearby Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Karimabad Hunza", distance: "60 km", time: "1.5-hour drive", image: "./assets/location/karimabad1.jpg" },
              { name: "Baltit Fort", distance: "60 km", time: "1.5-hour drive", image: "./assets/location/baltit.jpg" },
              { name: "Attabad Lake", distance: "35 km", time: "45-min drive", image: "./assets/location/attabad_lake.jpg" },
              { name: "Hussaini Suspension Bridge", distance: "5 km", time: "10-min drive", image: "./assets/location/hussaini_suspension.jpg" },
              { name: "Borith Lake", distance: "7 km", time: "15-min drive", image: "./assets/location/borith.jpg" },
              { name: "Passu Village", distance: "1 km", time: "5-min walk", image: "./assets/location/passu.jpg" },
              { name: "Batura Lake", distance: "10 km", time: "20-min drive", image: "./assets/location/batura.jpeg" },
              { name: "Khunjerab Border", distance: "85 km", time: "2-hour drive", image: "./assets/location/khunjerab.jpeg" },
              { name: "Sost Dryport", distance: "35 km", time: "40-min drive", image: "./assets/location/sost.jpeg" },
            ].map((attraction, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.distance} • {attraction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
