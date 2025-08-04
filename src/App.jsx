import cardGameImage from '@assets/card-game.png';
import diceGameImage from '@assets/dice-game.png';
import midiAppImage from '@assets/midi-app.png';
import patrolXImage from '@assets/patrolx.png';
import spaceGameImage from '@assets/space-game.png';
import vinDecoderImage from '@assets/vin-decoder.png';
import GameCard from '@components/GameCard';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

const games = [
  {
    title: 'Dice Breaker AI Lab',
    description: 'A Yahztee-inspired dice game where the AI plays forever. Also, charts and graphs.',
    imageUrl: diceGameImage,
    imageAlt: 'A screenshot of the Dice Game',
    playUrl: 'https://mtickle.github.io/dice-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Card Breaker AI Lab',
    description: 'An Uno-inspired card game where the AI plays forever. Also, charts and graphs here too.',
    imageUrl: cardGameImage,
    imageAlt: 'A screenshot of the Card Game',
    playUrl: 'https://mtickle.github.io/card-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Space Game',
    description: 'An experiment in procedural generation and space exploration. Pan, scan, and click to explore the universe.',
    imageUrl: spaceGameImage,
    imageAlt: 'A screenshot of the Space Game',
    playUrl: 'https://mtickle.github.io/space-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'VIN Decoder',
    description: 'Enter a VIN to decode it. This tool provides detailed information about vehicles based on their VIN.',
    imageUrl: vinDecoderImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/vin-app/',
    buttonText: 'Try it now',
  },
  {
    title: 'MIDI Decoder',
    description: 'Understand how MIDI commands are issued from MIDI controllers and how they can be processed in JavaScript. Requires a MIDI controller.',
    imageUrl: midiAppImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/midi-app/',
    buttonText: 'Try it now',
  },
  {
    title: 'PatrolX Interface',
    description: 'Front end of a data collection tool.',
    imageUrl: patrolXImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/patrolx-interface/',
    buttonText: 'Try it now',
  },
];

function App() {


  return (
    <div className="container mx-auto p-4">
      <Header />

      <div className="p-6 md:p-8 bg-white rounded-b-3xl shadow-sm mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game) => (
            <GameCard
              key={game.title}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              imageAlt={game.imageAlt}
              playUrl={game.playUrl}
              buttonText={game.buttonText}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
