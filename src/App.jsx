import cardGameImage from '@assets/card-game.png';
import diceGameImage from '@assets/dice-game.png';
import spaceGameImage from '@assets/space-game.png';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';


function App() {

  return (
    <div className="container mx-auto p-4">
      <Header />

      <div className="grid grid-cols-[1fr_auto] gap-4 p-6 bg-white shadow-sm mb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-b-3xl shadow-sm mb-4">
          {/* --- Game Card 1 --- */}
          <div className="bg-[#fffdf7] p-4 rounded-2xl shadow-md border-2 border-[#e2dccc] flex flex-col justify-between gap-4">
            <div>
              {/* Screenshot Placeholder */}
              <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={diceGameImage}
                  alt="A screenshot of the Dice Game"
                  className="w-full h-40 bg-gray-300 rounded-lg object-cover mb-4"
                />
              </div>
              {/* Content */}
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Dice Breaker Lab</h3>
              <p className="text-sm text-gray-600">
                A brief and engaging description of the dice game goes right here.
              </p>
            </div>
            {/* Link */}
            <a
              target='_blank'
              href="https://mtickle.github.io/dice-game/"
              className="inline-block w-full text-center mt-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Play it now
            </a>
          </div>

          {/* --- Game Card 2 --- */}
          <div className="bg-[#fffdf7] p-4 rounded-2xl shadow-md border-2 border-[#e2dccc] flex flex-col justify-between gap-4">
            <div>
              {/* Screenshot Placeholder */}
              <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={cardGameImage}
                  alt="A screenshot of the Dice Game"
                  className="w-full h-40 bg-gray-300 rounded-lg object-cover mb-4"
                />
              </div>
              {/* Content */}
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Card Breaker Lab</h3>
              <p className="text-sm text-gray-600">
                A brief and engaging description of the card game goes right here.
              </p>
            </div>
            {/* Link */}
            <a
              target='_blank'
              href="https://mtickle.github.io/card-game/"
              className="inline-block w-full text-center mt-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Play it now
            </a>
          </div>

          {/* --- Game Card 3 --- */}
          <div className="bg-[#fffdf7] p-4 rounded-2xl shadow-md border-2 border-[#e2dccc] flex flex-col justify-between gap-4">
            <div>
              {/* Screenshot Placeholder */}
              <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={spaceGameImage}
                  alt="A screenshot of the Dice Game"
                  className="w-full h-40 bg-gray-300 rounded-lg object-cover mb-4"
                />
              </div>
              {/* Content */}
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Galactic Map Lab</h3>
              <p className="text-sm text-gray-600">
                A brief and engaging description of the space game goes right here.
              </p>
            </div>
            {/* Link */}
            <a
              target='_blank'
              href="http://mtickle.github.io/space-game/"
              className="inline-block w-full text-center mt-2 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View it now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
