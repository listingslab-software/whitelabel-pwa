# Whitelabel PWA

Open Source Progressive Web App Framework using;

- React
- Firebase
- Material UI (Google Material Design System)

## Plugins

The way plugins are added is not great. Basically we are using the 
project's __.gitignore__ file to ignore the **/src/plugins** 
directory in order to clone the plugin repo into the correct place

This'll get reimplemented as NPM/Github packages in due course

```bash
cd <your-pwa>
cd ./src/plugins/
git clone https://github.com/listingslab-software/plugin-pushtotalk PushToTalk

# then periodically ....
git fetch && git pull
```

## WIP

These plugins are in development

- [Animated SVG](https://animated-svg.web.app/)
- [PushToTalk](https://push-to-talk.app)