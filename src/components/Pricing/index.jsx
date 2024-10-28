import PropTypes from "prop-types";

const PricingCard = ({ type, price, isPopular }) => {
  return (
    <div
      className={`rounded-2xl p-6 w-full max-w-sm mx-auto mb-6 ${
        isPopular ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{type}</h3>
        <p className="text-sm mb-4">
          Organize across all <br /> apps by hand
        </p>

        <div className="flex items-baseline justify-center mb-6">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-sm ml-1">$ Per Month</span>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-sm">Pricing Feature</p>
          <p className="text-sm">Pricing Feature</p>
          <p className="text-sm">Pricing Feature</p>
          <p className="text-sm">Pricing Feature</p>
          <p className="text-sm">Pricing Feature</p>
        </div>

        <button
          className={`w-full py-3 rounded-full font-medium ${
            isPopular ? "bg-white text-blue-500" : "bg-blue-500 text-white"
          }`}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
};

export default function Pricing() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl font-semibold mb-2">Pricing</h2>
        <p className="text-lg">Most calendars are designed for teams.</p>
        <p className="text-lg">Slate is designed for freelancers</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto">
          <PricingCard type="FREE" price="0" />
          <PricingCard type="STANDARD" price="10" isPopular={true} />
          <PricingCard type="BUSINESS" price="99" />
        </div>
      </div>
    </div>
  );
}
