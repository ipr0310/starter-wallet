import { useState } from "react";
import {
  createCredentialDefaultArgs,
  getCredentialDefaultArgs,
} from "./dummyCredentials";

export const Authenticator = () => {
  // register / create a new credential
  const registerCredential = () => {
    navigator.credentials
      .create(createCredentialDefaultArgs)
      .then((cred: any) => {
        console.log("NEW CREDENTIAL", cred);

        // normally the credential IDs available for an account would come from a server
        // but we can just copy them from above...
        const idList = [
          {
            id: cred.rawId,
            transports: ["internal"],
            type: "public-key",
          },
        ];

        getCredentialDefaultArgs.publicKey.allowCredentials = idList;
        return navigator.credentials.get(getCredentialDefaultArgs);
      })
      .then((assertion) => {
        console.log("ASSERTION");
        alert(assertion);
      })
      .catch((err) => {
        console.log("ERROR");
        alert(err);
      });
  };

  return (
    <div>
      <p className="text-md mb-3 text-center">
        Register a credential using the button below and choose if you would
        like to authenticate using FaceID, your fingerprint or USB Security Key.
      </p>

      <button
        onClick={registerCredential}
        className="bg-amber-100 px-4 py-2 rounded-md w-full"
      >
        Register Credential
      </button>
    </div>
  );
};
