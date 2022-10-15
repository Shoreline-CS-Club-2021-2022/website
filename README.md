# CS club website for shoreline community college

Here we will be working on the Computer Science clubs website

## Getting Setup

### Cloning

You can clone the repository using a variety of [git clients](https://desktop.github.com/) **or** using the terminal.

For people working on the **frontend**:
```bash
git clone -b frontend https://github.com/Shoreline-CS-Club-2021-2022/website.git
```

For people working on the **backend**:
```bash
git clone -b backend https://github.com/Shoreline-CS-Club-2021-2022/website.git
```

Or, if you're using a GUI git client like [Github Desktop](https://desktop.github.com/), make sure to switch to the `frontend` or `backend` branch as approapriate. These branches may appear as `origin/frontend` or `origin/backend` if you haven't used them before.

### Project Setup

Once you have the repository cloned, first you need to install all the npm packages:
```bash
npm install
```

You will also want to setup a secret. Make a copy of the `.env.example` called `.env`. Then add `secret` to the end of the `SECRET=` line.

### Running Locally

Then you can host a local version of the website on your computer using:
```bash
npm run start
```

Connect to your local website by navigating to [`http://localhost:3000/`](http://localhost:3000/).
