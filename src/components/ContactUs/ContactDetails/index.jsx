import { MapPin, Phone, Mail } from "lucide-react";
import PropTypes from "prop-types";

export function ContactDetails({ isMobile }) {
  return (
    <div>
      <div className="space-y-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
            isMobile ? "" : "hidden md:block"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-4 h-4 text-blue-600 mb-1" />
            <p className="text-gray-600 text-sm">
              6386 Spring St undefined Anchorage, Georgia 12473 United States
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-4 h-4 text-blue-600 mb-1" />
            <p className="text-gray-600 text-sm">(843) 555-0130</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="w-4 h-4 text-blue-600 mb-1" />
            <p className="text-gray-600 text-sm">willie.jennings@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactDetails.propTypes = {
  isMobile: PropTypes.bool,
};
