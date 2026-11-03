---
title: Rhythm-game touch controller
summary: A DIY capacitive touch controller for games like maimai, with its own touch-sensing PCB and low-latency USB input.
tags: [PCB, Embedded, Hardware]
featured: true
order: 1
status: in progress
cover: ../../assets/projects/touch-controller/touchboard-render.png
coverAlt: 3D render of the Touchboard, a blue PCB with a central chip and four connectors for 34 touch channels.
---
A custom touch controller for rhythm games. The hard part isn't reading one touch sensor, it's reading a lot of them quickly enough that the controller still feels instant.

## The board
The Touchboard is my touch-sensing PCB. It reads 34 touch channels through four connectors (1–9, 10–18, 19–27 and 28–34), with a resistor on every channel and a programming header (SWD) on the edge so I can flash and debug it in place.

## The panel
![The prototype panel: touch pads under a round acrylic sheet, with the button ring around the edge.](../../assets/projects/touch-controller/touch-panel-prototype.jpg)

*The prototype panel: copper touch pads under the acrylic, buttons and wiring around the ring.*

## What I'm working on
- **Sensing:** reading touch pads through the acrylic reliably, without false touches.
- **Speed:** total scan time across all 34 zones, and how that adds up against the latency I'm aiming for.
- **Input:** reporting to the PC over USB HID at a high report rate.

<!-- TODO: add scan-time measurements once you have them. -->
