import drawing from "../../assets/images/features/mdi_drawing.png";
import draw from "../../assets/images/features/mdi_draw.png";
import brush from "../../assets/images/features/mdi_brush.png";
import { VideoFeature } from "./VideoFeature";

export const Feature = () => {
  return (
    <div className="bg-white font-graphik py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-600">
            Most calendars are designed for teams. Slate is designed for
            freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img src={drawing} alt="OpenType features" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              OpenType features
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img src={draw} alt="Design with real data" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Design with real data
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src={brush}
                alt="Fastest way to take action"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fastest way to take action
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
        </div>

        <VideoFeature />
      </div>
    </div>
  );
};
