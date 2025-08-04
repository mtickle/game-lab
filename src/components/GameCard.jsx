// src/components/GameCard.jsx

function GameCard({ imageUrl, imageAlt, title, description, playUrl, buttonText }) {
    return (
        <div className="bg-[#fffdf7] p-4 rounded-2xl shadow-md border-2 border-[#e2dccc] flex flex-col justify-between gap-4 transition-transform hover:scale-105">
            {/* Top section with image and text */}
            <div>
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-48 bg-gray-300 rounded-lg object-cover mb-4"
                />
                <h3 className="font-semibold text-gray-800 text-xl mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* "Play it now" button */}
            <a
                target="_blank"
                href={playUrl}
                className="inline-block w-full text-center mt-2 bg-blue-500 text-white font-bold px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
                {buttonText}
            </a>
        </div>
    );
}

export default GameCard;