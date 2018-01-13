# Experiment with local package in Azure

Directory "/app" contains a package created with "express --view=hbs app".
This is a local package.

top level contains package.json declaring "./app" as a dependency and a "index.js" containning "app.listen(port,..." to use this local package.

"npm install" in top level installs dependencies transitively including those of /azure_test/app/package.json".
This works on Windows 10 PC running npm 5.6.0
