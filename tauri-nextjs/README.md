## Overview

This application uses tauri as medium of communication between rust and frontend framework (Next JS in this application) 

Before running this app, there are some dependencies that need to be installed (Like java, rust is a compiled language)

### setup for windows 

- Install C++ build tools 
- Install Windows 10 SDK Kit 

You can find the documentation to install these both tools [here](https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-windows). In the same documentation you can also find the steps for linux and macOS system as well 

### Install Rustup (Installer and manager for rust language) 

`winget install --id Rustlang.Rustup`

For Linux and MacOs go through the [docs](https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-windows) to add RustUp and install Rust.

### Make sure WebView is installed on windows 
If not, then install it using Microsoft's [evergreen bootstrapper](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section)

### Start the application 
Since this application uses yarn as the package manager 
Run `yarn` in the root folder of the application 

Run `yarn run tauri dev` to start the application. It will open the application in a new window. 