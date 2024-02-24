<p align="center">
<a href="https://github.com/deifos/soloinvoice" target="_blank">
<img src="https://github.com/deifos/images/blob/main/placeholder.JPG" width="100%" alt="Banner" />
</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/contributors/deifos/soloinvoice" alt="GitHub contributors" />
  <img src="https://img.shields.io/github/discussions/deifos/soloinvoice" alt="GitHub discussions" />
  <img src="https://img.shields.io/github/issues/deifos/soloinvoice" alt="GitHub issues" />
  <img src="https://img.shields.io/github/issues-pr/deifos/soloinvoice" alt="GitHub pull request" />
</p>

Soloinvoice is a Simple WEB app to get the invoices from your stripe customers and print them as PDF, You need to get an API key from stripe from the project you want to get the invoices from and add it to the .env file, make sure is just read only key.

```properties
STRIPE_SECRET_KEY=xxx
```

## 🔍 Table of Contents

-   [💻 Stack](#stack)

-   [📝 Project Summary](#project-summary)

-   [⚙️ Setting Up](#setting-up)

-   [🚀 Run Locally](#run-locally)

-   [🙌 Contributors](#contributors)

-   [📄 License](#license)

## 💻 Stack

-   [react](https://reactjs.org/): Essential for building user interfaces.
-   ShadcnUI Components
-   [next](https://nextjs.org/): Framework for React applications, including server-side rendering.
-   [date-fns](https://date-fns.org/): Date utility library for parsing and formatting dates.
-   [stripe](https://stripe.com/): Payment processing integration.
-   [eslint](https://eslint.org/): Linting tool for maintaining code quality.
-   [typescript](https://www.typescriptlang.org/): Superset of JavaScript providing static typing.

## 📝 Project Summary

-   [**app**](app): Main application logic and entry point.
-   [**app/api**](app/api): API related functionalities and endpoints.
-   [**app/api/get-invoices**](app/api/get-invoices): Specific endpoint for retrieving invoices.
-   [**components**](components): Reusable UI components.
-   [**components/ui**](components/ui): UI-specific components.
-   [**lib**](lib): External libraries or utility functions.
-   [**public**](public): Static assets and files for public access.

## ⚙️ Setting Up

#### Your Environment Variable

-   Step 1

-   Step 2

## 🚀 Run Locally

1.Clone the soloinvoice repository:

```sh
git clone https://github.com/deifos/soloinvoice
```

2.Install the dependencies with one of the package managers listed below:

```bash
pnpm install
bun install
npm install
yarn install
```

3.Start the development mode:

```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors

<table class="-mb-1" style="border:1px solid #404040;text-align:center;width:100%">
<tbody><tr class="-my-2"><td class="-my-1" colspan="1" rowspan="1" style="width:14.29%;border:1px solid #404040;"><p><a target="_blank" rel="noopener noreferrer nofollow" class="text-blue-500 hover:text-blue-600 dark:text-blue-300 hover:text-blue-400 no-underline hover:underline hover:underline-offset-2 transition-colors cursor-pointer" href="https://github.com/deifos"><img class="inline !m-0" src="https://avatars.githubusercontent.com/u/3372909?v=4?s=100" alt="deifos" width="100px;"> <br><strong>deifos</strong> </a><br><a target="_blank" rel="noopener noreferrer nofollow" class="text-blue-500 hover:text-blue-600 dark:text-blue-300 hover:text-blue-400 no-underline hover:underline hover:underline-offset-2 transition-colors cursor-pointer" href="https://github.com/deifos/soloinvoice/commits?author=deifos"> 4 contributions</a></p></td></tr></tbody>
</table>

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [**GNU General Public License v3.0**](https://github.com/deifos/soloinvoice/blob/main/LICENSE) file for details.
