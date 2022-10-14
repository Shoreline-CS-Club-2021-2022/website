# CS club website for shoreline community college

Here we will be working on the Computer Science clubs website

## Getting Setup
You can clone the repository using a variety of git clients or using the terminal:
```bash
git clone -b frontend https://github.com/Shoreline-CS-Club-2021-2022/website.git
```

Once you have the repository cloned, first you need to install all the npm packages:
```bash
npm install
```

You will also want to setup a secret. Make a copy of the `.env.example` called `.env`. Then add `secret` to the end of the `SECRET=` line.

Then you can host a local version of the website on your computer using:
```bash
npm run start
```

Connect to your local website by navigating to [`http://localhost:3000/`](http://localhost:3000/).
