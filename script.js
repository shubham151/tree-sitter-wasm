import { Parser, Language, Query } from "web-tree-sitter";

async function main() {
  await Parser.init({
    locateFile() {
      return "/tree-sitter.wasm";
    },
  });

  const parser = new Parser();
  const TypeScript = await Language.load("/static/tree-sitter-typescript.wasm");
  parser.setLanguage(TypeScript);
  const code = `{
  "name": "untracked",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "untracked",
      "version": "1.0.0",
      "hasInstallScript": true,
      "dependencies": {
        "@electron-toolkit/preload": "^3.0.1",
        "@electron-toolkit/utils": "^4.0.0",
        "electron-updater": "^6.3.9",
        "tree-sitter-typescript": "^0.23.2",
        "web-tree-sitter": "^0.25.4"
      },
      "devDependencies": {
        "@electron-toolkit/eslint-config-prettier": "^3.0.0",
        "@electron-toolkit/eslint-config-ts": "^3.0.0",
        "@electron-toolkit/tsconfig": "^1.0.1",
        "@sveltejs/vite-plugin-svelte": "^5.0.3",
        "@types/node": "^22.14.1",
        "electron": "^35.1.5",
        "electron-builder": "^25.1.8",
        "electron-vite": "^3.1.0",
        "eslint": "^9.24.0",
        "eslint-plugin-svelte": "^3.5.1",
        "prettier": "^3.5.3",
        "prettier-plugin-svelte": "^3.4.0",
        "svelte": "^5.26.1",
        "svelte-check": "^4.1.5",
        "typescript": "^5.8.3",
        "vite": "^6.2.6"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.27.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.27.5.tgz",
      "integrity": "sha512-KiRAp/VoJaWkkte84TvUd9qjdbZAdiqyvMxrGl1N6vzFogKmaLgoM3L1kgtLicp2HP5fBJS8JrZKLVIZGVJAVg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.27.4",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.27.4.tgz",
      "integrity": "sha512-bXYxrXFubeYdvB0NhD/NBB3Qi6aZeV20GOWVI47t2dkecCEoneR4NPVcb7abpXDEvejgrUfFtG6vG/zxAKmg+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.27.3",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.27.3",
        "@babel/helpers": "^7.27.4",
        "@babel/parser": "^7.27.4",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.27.4",
        "@babel/types": "^7.27.3",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.27.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.27.5.tgz",
      "integrity": "sha512-ZGhA37l0e/g2s1Cnzdix0O3aLYm66eF8aufiVteOgnwxgnRP8GoyMj7VWsgWnQbVKXyge7hqrFh2K2TQM6t1Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.27.5",
        "@babel/types": "^7.27.3",
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.27.3.tgz",
      "integrity": "sha512-dSOvYwvyLsWBeIRyOeHXp5vPj5l1I011r52FM1+r1jCERv+aFXYk4whgQccYEGYxK2H3ZAIA8nuPkQ0HaUo3qg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.27.6",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.27.6.tgz",
      "integrity": "sha512-muE8Tt8M22638HU31A3CgfSUciwz1fhATfoVai05aPXGor//CdWDCbnlY1yvBPo07njuVOCNGCSp/GTt12lIug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.27.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.27.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.27.5.tgz",
      "integrity": "sha512-OsQd175SxWkGlzbny8J3K8TnnDD0N3lrIUtB92xwyRpzaenGZhxDvxN/JgU00U3CDZNj9tPuDJ5H0WS4Nt3vKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.27.3"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.27.1.tgz",
      "integrity": "sha512-8Z4TGic6xW70FKThA5HYEKKyBpOOsucTOD1DjU3fZxDg+K3zBJcXMFnt/4yQiZnf5+MiOMSXQ9PaEK/Ilh1DeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.27.4",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.27.4.tgz",
      "integrity": "sha512-oNcu2QbHqts9BtOWJosOVJapWjBDSxGCpFvikNR5TGDYDQf3JwpIoMzIKrvfoti93cLfPJEG4tH9SPVeyCGgdA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.27.3",
        "@babel/parser": "^7.27.4",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.27.3",
        "debug": "^4.3.1",
        "globals": "^11.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse/node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.27.6",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.27.6.tgz",
      "integrity": "sha512-ETyHEk2VHHvl9b9jZP5IHPavHYk57EhanlRRuae9XCpb/j5bDCbPPMOBfCWhnl/7EDJz0jEMCi/RhccCE8r1+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@develar/schema-utils": {
      "version": "2.6.5",
      "resolved": "https://registry.npmjs.org/@develar/schema-utils/-/schema-utils-2.6.5.tgz",
      "integrity": "sha512-0cp4PsWQ/9avqTVMCtZ+GirikIA36ikvjtHweU4/j8yLtgObI0+JUPhYFScgwlteveGB1rt3Cm8UhN04XayDig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.0",
        "ajv-keywords": "^3.4.1"
      },
      "engines": {
        "node": ">= 8.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/@electron-toolkit/eslint-config-prettier": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@electron-toolkit/eslint-config-prettier/-/eslint-config-prettier-3.0.0.tgz",
      "integrity": "sha512-YapmIOVkbYdHLuTa+ad1SAVtcqYL9A/SJsc7cxQokmhcwAwonGevNom37jBf9slXegcZ/Slh01I/JARG1yhNFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-config-prettier": "^10.0.1",
        "eslint-plugin-prettier": "^5.2.3"
      },
      "peerDependencies": {
        "eslint": ">= 9.0.0",
        "prettier": ">= 3.0.0"
      }
    },
    "node_modules/@electron-toolkit/eslint-config-ts": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@electron-toolkit/eslint-config-ts/-/eslint-config-ts-3.1.0.tgz",
      "integrity": "sha512-MowZQKd3yxXSDLack5QvjQwYHhpOJFoWBGBwJ/k+DCd7NUSendplECbQGFp86tPQYPUrPBPceR/hdsSAnaY5ZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint/js": "^9.24.0",
        "globals": "^16.0.0",
        "typescript-eslint": "^8.29.1"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@electron-toolkit/preload": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@electron-toolkit/preload/-/preload-3.0.2.tgz",
      "integrity": "sha512-TWWPToXd8qPRfSXwzf5KVhpXMfONaUuRAZJHsKthKgZR/+LqX1dZVSSClQ8OTAEduvLGdecljCsoT2jSshfoUg==",
      "license": "MIT",
      "peerDependencies": {
        "electron": ">=13.0.0"
      }
    },
    "node_modules/@electron-toolkit/tsconfig": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@electron-toolkit/tsconfig/-/tsconfig-1.0.1.tgz",
      "integrity": "sha512-M0Mol3odspvtCuheyujLNAW7bXq7KFNYVMRtpjFa4ZfES4MuklXBC7Nli/omvc+PRKlrklgAGx3l4VakjNo8jg==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@electron-toolkit/utils": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@electron-toolkit/utils/-/utils-4.0.0.tgz",
      "integrity": "sha512-qXSntwEzluSzKl4z5yFNBknmPGjPa3zFhE4mp9+h0cgokY5ornAeP+CJQDBhKsL1S58aOQfcwkD3NwLZCl+64g==",
      "license": "MIT",
      "peerDependencies": {
        "electron": ">=13.0.0"
      }
    },
    "node_modules/@electron/asar": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/@electron/asar/-/asar-3.4.1.tgz",
      "integrity": "sha512-i4/rNPRS84t0vSRa2HorerGRXWyF4vThfHesw0dmcWHp+cspK743UanA0suA5Q5y8kzY2y6YKrvbIUn69BCAiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "commander": "^5.0.0",
        "glob": "^7.1.6",
        "minimatch": "^3.0.4"
      },
      "bin": {
        "asar": "bin/asar.js"
      },
      "engines": {
        "node": ">=10.12.0"
      }
    },
    "node_modules/@electron/asar/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@electron/asar/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@electron/get": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@electron/get/-/get-2.0.3.tgz",
      "integrity": "sha512-Qkzpg2s9GnVV2I2BjRksUi43U5e6+zaQMcjoJy0C+C5oxaKl+fmckGDQFtRpZpZV0NQekuZZ+tGz7EA9TVnQtQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.1.1",
        "env-paths": "^2.2.0",
        "fs-extra": "^8.1.0",
        "got": "^11.8.5",
        "progress": "^2.0.3",
        "semver": "^6.2.0",
        "sumchecker": "^3.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "global-agent": "^3.0.0"
      }
    },
    "node_modules/@electron/notarize": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@electron/notarize/-/notarize-2.5.0.tgz",
      "integrity": "sha512-jNT8nwH1f9X5GEITXaQ8IF/KdskvIkOFfB2CvwumsveVidzpSc+mvhhTMdAGSYF3O+Nq49lJ7y+ssODRXu06+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.1.1",
        "fs-extra": "^9.0.1",
        "promise-retry": "^2.0.1"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@electron/notarize/node_modules/fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@electron/notarize/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@electron/notarize/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@electron/osx-sign": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@electron/osx-sign/-/osx-sign-1.3.1.tgz",
      "integrity": "sha512-BAfviURMHpmb1Yb50YbCxnOY0wfwaLXH5KJ4+80zS0gUkzDX3ec23naTlEqKsN+PwYn+a1cCzM7BJ4Wcd3sGzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "compare-version": "^0.1.2",
        "debug": "^4.3.4",
        "fs-extra": "^10.0.0",
        "isbinaryfile": "^4.0.8",
        "minimist": "^1.2.6",
        "plist": "^3.0.5"
      },
      "bin": {
        "electron-osx-flat": "bin/electron-osx-flat.js",
        "electron-osx-sign": "bin/electron-osx-sign.js"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/@electron/osx-sign/node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@electron/osx-sign/node_modules/isbinaryfile": {
      "version": "4.0.10",
      "resolved": "https://registry.npmjs.org/isbinaryfile/-/isbinaryfile-4.0.10.tgz",
      "integrity": "sha512-iHrqe5shvBUcFbmZq9zOQHBoeOhZJu6RQGrDpBgenUm/Am+F3JM2MgQj+rK3Z601fzrL5gLZWtAPH2OBaSVcyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/gjtorikian/"
      }
    },
    "node_modules/@electron/osx-sign/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@electron/osx-sign/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@electron/rebuild": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/@electron/rebuild/-/rebuild-3.6.1.tgz",
      "integrity": "sha512-f6596ZHpEq/YskUd8emYvOUne89ij8mQgjYFA5ru25QwbrRO+t1SImofdDv7kKOuWCmVOuU5tvfkbgGxIl3E/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@malept/cross-spawn-promise": "^2.0.0",
        "chalk": "^4.0.0",
        "debug": "^4.1.1",
        "detect-libc": "^2.0.1",
        "fs-extra": "^10.0.0",
        "got": "^11.7.0",
        "node-abi": "^3.45.0",
        "node-api-version": "^0.2.0",
        "node-gyp": "^9.0.0",
        "ora": "^5.1.0",
        "read-binary-file-arch": "^1.0.6",
        "semver": "^7.3.5",
        "tar": "^6.0.5",
        "yargs": "^17.0.1"
      },
      "bin": {
        "electron-rebuild": "lib/cli.js"
      },
      "engines": {
        "node": ">=12.13.0"
      }
    },
    "node_modules/@electron/rebuild/node_modules/fs-extra": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
      "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@electron/rebuild/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@electron/rebuild/node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@electron/rebuild/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@electron/universal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@electron/universal/-/universal-2.0.1.tgz",
      "integrity": "sha512-fKpv9kg4SPmt+hY7SVBnIYULE9QJl8L3sCfcBsnqbJwwBwAeTLokJ9TRt9y7bK0JAzIW2y78TVVjvnQEms/yyA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@electron/asar": "^3.2.7",
        "@malept/cross-spawn-promise": "^2.0.0",
        "debug": "^4.3.1",
        "dir-compare": "^4.2.0",
        "fs-extra": "^11.1.1",
        "minimatch": "^9.0.3",
        "plist": "^3.1.0"
      },
      "engines": {
        "node": ">=16.4"
      }
    },
    "node_modules/@electron/universal/node_modules/fs-extra": {
      "version": "11.3.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.0.tgz",
      "integrity": "sha512-Z4XaCL6dUDHfP/jT25jJKMmtxvuwbkrD1vNSMFlo9lNLY2c5FHYSQgHPRZUjAB26TpDEoW9HCOgplrdbaPV/ew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/@electron/universal/node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@electron/universal/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@electron/universal/node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.5.tgz",
      "integrity": "sha512-9o3TMmpmftaCMepOdA5k/yDw8SfInyzWWTjYTFCX3kPSDJMROQTb8jg+h9Cnwnmm1vOzvxN7gIfB5V2ewpjtGA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.5.tgz",
      "integrity": "sha512-AdJKSPeEHgi7/ZhuIPtcQKr5RQdo6OO2IL87JkianiMYMPbCtot9fxPbrMiBADOWWm3T2si9stAiVsGbTQFkbA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.5.tgz",
      "integrity": "sha512-VGzGhj4lJO+TVGV1v8ntCZWJktV7SGCs3Pn1GRWI1SBFtRALoomm8k5E9Pmwg3HOAal2VDc2F9+PM/rEY6oIDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.5.tgz",
      "integrity": "sha512-D2GyJT1kjvO//drbRT3Hib9XPwQeWd9vZoBJn+bu/lVsOZ13cqNdDeqIF/xQ5/VmWvMduP6AmXvylO/PIc2isw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.5.tgz",
      "integrity": "sha512-GtaBgammVvdF7aPIgH2jxMDdivezgFu6iKpmT+48+F8Hhg5J/sfnDieg0aeG/jfSvkYQU2/pceFPDKlqZzwnfQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.5.tgz",
      "integrity": "sha512-1iT4FVL0dJ76/q1wd7XDsXrSW+oLoquptvh4CLR4kITDtqi2e/xwXwdCVH8hVHU43wgJdsq7Gxuzcs6Iq/7bxQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.5.tgz",
      "integrity": "sha512-nk4tGP3JThz4La38Uy/gzyXtpkPW8zSAmoUhK9xKKXdBCzKODMc2adkB2+8om9BDYugz+uGV7sLmpTYzvmz6Sw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.5.tgz",
      "integrity": "sha512-PrikaNjiXdR2laW6OIjlbeuCPrPaAl0IwPIaRv+SMV8CiM8i2LqVUHFC1+8eORgWyY7yhQY+2U2fA55mBzReaw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.5.tgz",
      "integrity": "sha512-cPzojwW2okgh7ZlRpcBEtsX7WBuqbLrNXqLU89GxWbNt6uIg78ET82qifUy3W6OVww6ZWobWub5oqZOVtwolfw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.5.tgz",
      "integrity": "sha512-Z9kfb1v6ZlGbWj8EJk9T6czVEjjq2ntSYLY2cw6pAZl4oKtfgQuS4HOq41M/BcoLPzrUbNd+R4BXFyH//nHxVg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.5.tgz",
      "integrity": "sha512-sQ7l00M8bSv36GLV95BVAdhJ2QsIbCuCjh/uYrWiMQSUuV+LpXwIqhgJDcvMTj+VsQmqAHL2yYaasENvJ7CDKA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.5.tgz",
      "integrity": "sha512-0ur7ae16hDUC4OL5iEnDb0tZHDxYmuQyhKhsPBV8f99f6Z9KQM02g33f93rNH5A30agMS46u2HP6qTdEt6Q1kg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.5.tgz",
      "integrity": "sha512-kB/66P1OsHO5zLz0i6X0RxlQ+3cu0mkxS3TKFvkb5lin6uwZ/ttOkP3Z8lfR9mJOBk14ZwZ9182SIIWFGNmqmg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },

`;
  console.time("parse");
  const tree = parser.parse(code);
  console.timeEnd("parse");
  console.log(tree.rootNode.toString());

  const ecmaQueryRes = await fetch("/static/ecma/highlights.scm");
  const ecmaQueryText = await ecmaQueryRes.text();

  const tsQueryRes = await fetch("/static/queries/highlights.scm");
  const tsQueryText = await tsQueryRes.text();
  // const tsQueryText = "";

  const combinedQueryText = ecmaQueryText + "\n" + tsQueryText;
  const query = new Query(TypeScript, combinedQueryText);

  const captures = query.captures(tree.rootNode);
  console.time("highlight");
  const html = highlightWithQuery(code, captures);
  // console.log(html);
  console.timeEnd("highlight");
  document.getElementById("tree-output").innerHTML = html;
}

function highlightWithQuery(code, captures) {
  // captures.sort((a, b) => {
  //   if (a.node.startIndex !== b.node.startIndex) {
  //     return a.node.startIndex - b.node.startIndex;
  //   }
  //   return b.node.endIndex - a.node.endIndex;
  // });

  let result = "";
  let pos = 0;
  let skipUntil = 0;

  // 2 maps (one for escape, another for span)
  for (const { node, name } of captures) {
    if (node.endIndex <= skipUntil) {
      continue;
    }

    if (node.startIndex > pos) {
      result += escapeHTML(code.slice(pos, node.startIndex));
    }
    const cssClassList = name.split(".").join(" ");
    result += `<span class="${cssClassList}">${escapeHTML(
      code.slice(node.startIndex, node.endIndex)
    )}</span>`;

    pos = node.endIndex;
    skipUntil = pos;
  }

  if (pos < code.length) {
    result += escapeHTML(code.slice(pos));
  }

  return result;
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

window.addEventListener("DOMContentLoaded", main);
