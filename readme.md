# simple-lobby-node

[![Build Status](https://travis-ci.org/Vengarioth/simple-lobby-node.svg?branch=master)](https://travis-ci.org/Vengarioth/simple-lobby-node)

The nodejs backend implementation of the _simple-lobby-service_. There is also an sdk  for unity3d (soon).

# Motivation
Working on a hobby project? Tired of manually handling host ips for your playtesting sessions? Implementing a lobby is a tedious and boring task, especially during prototyping when you really want to work on your game instead. So look no further! This project was created to eliminate that pain point. Set up a lobby service within minutes using _simple-lobby-service_.

# Getting started
So far _simple lobby_ has a nodejs backend and a unity3d sdk. All you need to do is set up the backend on a local machine, server or cloud service, download the SDK and pass the server address to the SDK. From there on you can query the server for open lobbys, create lobbys to let others discover you.

## Server setup
Just run the following commands in order, assuming you have _git_, _nodejs_ and _npm_ installed. The setup script will guide you through the creation of your config.

```
git clone git@github.com:Vengarioth/simple-lobby-node.git
cd simple-lobby-node
npm install
npm run setup
npm run start
```

### As an npm package
(soon)

## SDK setup
### From source (git)
(soon)

### Unity Asset Store
(soon)

# Contribution
We accept pull requests!

# Licence
MIT
