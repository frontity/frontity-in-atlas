# Frontity in Atlas (WP Engine)

This is the Frontity project that is powering the site https://wpengine.frontity.org.

**Both WordPress and Frontity are running in WP Engine**:

- WordPress is running in the [WP Engine](https://wpengine.com/) managed hosting service.
- Frontity is running in [Atlas](https://wpengine.com/atlas), the new Headless WordPress platform of WP Engine.

# Installation

If you want to run Frontity in Atlas, follow this steps:

## 1. Install the CLI

First, install the Atlas CLI.

```
npm i @wpengine/headless-cli -g
```

_Docs: https://developers.wpengine.com/docs/headless/guides_

## 2. Login and connect with GitHub

The next step is to login to your WP Engine account:

```
wpe alpha auth login
```

And then connect with GitHub

```
wpe alpha auth login github
```

In order to work with headless apps, we need to set our account context. Your account name can be found in the WP Engine User Portal in the top left of the navigation bar. To set the account context, run:

```
wpe alpha context set account YOUR_ACCOUNT_NAME
```

_Docs: https://developers.wpengine.com/docs/headless/guides/getting-started/deploy-app/cli#authenticate-with-the-platform-via-the-cli_

## 3. Create a `wpe.json` File

Create a `wpe.json` file in the root of your project.

For example, this is the one we used for this project:

```json
{
  "name": "frontity-in-atlas",
  "repo": "frontity/frontity-in-atlas",
  "region": "US-C",
  "environments": [
    {
      "name": "Production",
      "branch": "master",
      "wp_environment_name": "frontity-in-atlas"
    }
  ]
}
```

_Docs: https://developers.wpengine.com/docs/headless/guides/getting-started/deploy-app/cli#create-a-wpejson-file_

## 4. Add npm scripts

Atlas needs two npm scripts:

- `wpe-build`: To build the app.
- `start`: To run the app.

Add them to your `package.json`:

```json
"scripts": {
    "dev": "frontity dev",
    "build": "frontity build",
    "start": "frontity serve --port 8080",
    "wpe-build": "frontity build"
  },
```

> ℹ️ If you want to run Frontity in Embedded mode, add a `--public-path` option to the build script with the URL of your Atlas deployment.

## 5. Deploy!

Finally, create the application using:

```
wpe alpha apps create -f wpe.json
```

That's it. The app will be deployed.

From now on, a new build will be generated each time you push code to your repository.

_Docs: https://developers.wpengine.com/docs/headless/guides/getting-started/deploy-app/cli#deploy-your-app_

# » Frontity Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

- 📖 **[Docs](https://docs.frontity.org)**: this is the place to learn how to build amazing sites with Frontity.
- 👨‍👩‍👧‍👦 **[Community](https://community.frontity.org/)**: use our forum to [ask any questions](https://community.frontity.org/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Frontity](https://community.frontity.org/c/showcases)!
- 🐞 **[GitHub](https://github.com/frontity/frontity)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.frontity.org/)!
- 🗣 **Social media**: a more informal place to interact with Frontity users, reach out to us on [Twitter](https://twitter.com/frontity).
- 💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://frontity.org/)

### » Get involved 🤗

Got questions or feedback about Frontity? We'd love to hear from you. Use our [community forum](https://community.frontity.org) yo ! ❤️

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute)
