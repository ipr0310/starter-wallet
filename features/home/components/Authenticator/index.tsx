import { useState } from "react";
import {
  createCredentialDefaultArgs,
  getCredentialDefaultArgs,
} from "./dummyCredentials";

export const Authenticator = () => {
  const [dummyText, SetText] = useState("");
  const [errorText, SetErrorText] = useState("");

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
        console.log(assertion);
        SetText(JSON.stringify(assertion));
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
        SetErrorText(JSON.stringify(err));
      });
  };

  return (
    <div>
      <p className="text-md mb-3 text-center">
        Register a credential using the button below and choose if you would
        like to authenticate using FaceID, your fingerprint or USB Security Key.
      </p>

      {!dummyText && (
        <p className="mb-5">Waiting for authentication feedback</p>
      )}
      {dummyText && (
        <div className="w-full flex-col">
          <p className="mb-2"> Text:</p>
          <p className="mb-10">{dummyText}</p>
        </div>
      )}

      {!errorText && <p>Waiting for error feedback</p>}
      {errorText && (
        <div className="w-full flex-col">
          <p className="mb-2"> Error Text:</p>
          <p className="mb-10">{errorText}</p>
        </div>
      )}

      <button
        onClick={registerCredential}
        className="bg-amber-100 px-4 py-2 rounded-md w-full mt-5"
      >
        Register Credential
      </button>
    </div>
  );
};
