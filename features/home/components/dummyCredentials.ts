// must be a cryptographically random number sent from a server
let challengeBytes = new Uint8Array(16).buffer;

// sample arguments for registration
export const createCredentialDefaultArgs: any = {
  publicKey: {
    // Relying Party (a.k.a. - Service):
    rp: {
      name: "Signum Network FOSS",
    },

    // Whatever User Data:
    user: {
      id: new Uint8Array(16),
      name: "debbya@signum.network",
      displayName: "Core Team",
    },

    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7, // "ES256" as registered in the IANA COSE Algorithms registry
      },
      {
        type: "public-key",
        alg: -257, // Value registered by this specification for "RS256"
      },
    ],

    attestation: "direct",
    timeout: 60000,
    excludeList: [],
    challenge: challengeBytes,
  },
};

// sample arguments for login
export let getCredentialDefaultArgs: any = {
  publicKey: {
    timeout: 60000,
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};
