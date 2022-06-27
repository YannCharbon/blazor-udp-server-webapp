# Blazor UDP server webapp for Mbed Wi-SUN nodes

This is a Blazor .NET Core UDP server application that is meant to be used with the [](https://github.com/YannCharbon/mbed-os-mesh-simple-udp-app) project. It allows to visualize all the Wi-SUN nodes inside the mesh network and to control them.

## Usage
### Pre-compiled binaries

You can find pre-compiled binaries for Linux 64 bits under `/bin/Debug/net6.0/publish`. You can simply run `./BlazorUdpServerApp` inside this folder. The console tells what is the connection URL.

### Compile by yourself

To be able to modify and compile the sources, you will need to [Install the .NET SDK or the .NET Runtime on Ubuntu](https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu).

- To compile the code : `dotnet watch`
- To publish the source binaries : `dotnet publish`
- To clean the build directory : `dotnet clean`
- To kill the process in case of socket failure : `pkill BlazorUDPServerApp`