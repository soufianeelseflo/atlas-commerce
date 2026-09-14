# Run Atlas Commerce on your computer

You do not need to know Git or write any code to open this project locally.

## What you need

- A Windows PC or a Mac
- An internet connection for the first setup
- Node.js installed

## Step 1 - Install Node.js

1. Open your browser.
2. Go to https://nodejs.org
3. Download the current **LTS** version.
4. Run the installer and keep the default options.
5. Restart your computer if the installer asks you to.

## Step 2 - Download this project

1. On this GitHub repository page, click the green **Code** button near the top.
2. Click **Download ZIP**.
3. When the ZIP file finishes downloading, open your Downloads folder.
4. Extract the ZIP file.
   - Windows: right-click the ZIP, choose **Extract All**.
   - Mac: double-click the ZIP.
5. Open the extracted `atlas-commerce` folder.

## Step 3 - Open a terminal inside the project folder

### Windows

1. Open the extracted project folder in File Explorer.
2. Click the address bar at the top.
3. Type `powershell` and press Enter.
4. A blue or black PowerShell window should open inside that folder.

### Mac

1. Open the Terminal app.
2. Type `cd `, including the space after `cd`.
3. Drag the extracted project folder from Finder into the Terminal window.
4. Press Enter.

## Step 4 - Install the project packages

In the terminal, type:

```bash
npm install
```

Press Enter and wait until it finishes.

## Step 5 - Start the website

Type:

```bash
npm run dev
```

Press Enter.

When the terminal says the app is ready, open your browser and go to:

http://localhost:3000

## Useful pages to click through

- Storefront: http://localhost:3000/
- Product catalogue: http://localhost:3000/shop
- Cart and checkout flow: http://localhost:3000/cart
- Operations dashboard: http://localhost:3000/admin
- Orders: http://localhost:3000/admin/orders
- Inventory: http://localhost:3000/admin/inventory

## How to stop it

Go back to the terminal and press:

`Ctrl + C`

## If port 3000 is already busy

Next.js may automatically choose another port such as 3001. Use the address shown in the terminal.

## Production check

If you want to verify that the project can build for production, run:

```bash
npm run typecheck
npm run build
```

If both commands finish successfully, the TypeScript check and production build passed.

## Need help?

If you are reviewing this project for a contract and get stuck at any step, send me a screenshot of the terminal message. I can guide you through it in plain language.