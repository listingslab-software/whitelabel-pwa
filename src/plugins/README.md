## Plugins

The way plugins are added is not great. Basically we are using the 
project's __.gitignore__ file to ignore the **/src/plugins** 
directory in order to clone the plugin repo into the correct place

This'll get reimplemented as NPM/Github packages in due course

```bash
# Close the repo
cd <your-pwa>
cd ./src/plugins/
git clone https://github.com/listingslab-software/plugin-pushtotalk PushToTalk

# Then periodically update it ....
git fetch && git pull
```