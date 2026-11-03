---
title: UMIGURI LED bridge
summary: A Windows app that sends UMIGURI's LED data straight to a Tasoller controller over serial.
tags: [Python, Desktop app, Serial]
repo: https://github.com/Curfewshino/UMIGURI-LED-Bridge
order: 4
status: in progress
---
A small Windows app that sits between the game and a Tasoller's lighting. It receives LED state from UMIGURI over its WebSocket, maps it onto the controller's layout and sends it to the firmware over a COM port.

## How it works
- Receives lighting data from the game over WebSockets.
- Maps 16 cells and 15 guide walls onto the 31-element layout the firmware expects.
- Sends each frame to the controller over a serial (COM) port.
- A Tkinter window lets you pick the port and see whether it's connected.

Built with Python, Tkinter, WebSockets and ctypes for the Windows side.

<!-- TODO: add a screenshot of the window and a short clip of the lights working. -->
