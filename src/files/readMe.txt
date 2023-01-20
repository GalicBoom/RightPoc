BIBLIOTECAS UTILIZADAS NA POC:
- VITE (✓)
- GENERATE-REACT-CLI (✓)
- STYLED-COMPONENTS (✓) - Alternativa ao Tailwind
- ROUTER5 (✓) - Alternativa ao React Router
- JEST (✓)
- JASMINE (✓)
- REACT-HOOK-FORM (✓)
- Fetch Node API (✓) - Alternativa ao Axios
- RECOIL (✓) - Alternativa ao Redux
- STORYBOOK (?)



LISTA DE COMANDOS EXECUTADOS:

VITE:
npm init vite
npm install
npm run dev
---------/-----------
GENERATE-REACT-CLI:
npm i generate-react-cli
npx generate-react-cli component styles
---------/-----------
STYLED-COMPONENTS:
npm install --save styled-components
---------/-----------
ROUTER5:
npm install --save react-router5
npm i router5-plugin-logger
npm i router5-plugin-browser
---------/-----------
JEST
npm install --save-dev jest
package.json -> Scripts ->  "test": "jest" *
npm test

* configuração de arquivo
---------/-----------
JASMINE
npm install --save-dev jasmine
npx jasmine init (criando diretorio spec e arquivo de configuração do jasmine)
package.json -> Scripts ->  "test": "jasmine" *
spec\support\jasmine.json -> spec_files -> "**/*[sS]pec.?(m)jsx" *
spec\support\jasmine.json -> spec_dir -> "src/tests" *
npm test

* configuração de arquivo
---------/-----------
RECOIL
npm install recoil
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false; * (https://github.com/facebookexperimental/Recoil/releases/tag/0.7.6)

* configuração de arquivo
---------/-----------
REACT-HOOK-FORM
npm install react-hook-form
---------/-----------
STORYBOOK
