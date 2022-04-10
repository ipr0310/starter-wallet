import { QrCodeReader } from "./components/QrCodeReader";
import { Authenticator } from "./components/Authenticator";

export const TestingFeature = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
      <p className="text-xl w-full text-center">Welcome to Wallet Template</p>
      <p className="pt-2 text-center">Your app is set up</p>
      <div className="w-full border-t border-gray-300 my-4"></div>

      <div className="flex-col items-center justify-between mt-2">
        <Authenticator />

        <div className="w-full border-t border-gray-300 my-4"></div>

        <QrCodeReader />
      </div>
    </div>
  );
};
