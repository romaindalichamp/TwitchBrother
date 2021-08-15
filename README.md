# TwitchBrother

A page to compare Rainbow Six Siege / Far Cry and Assassin's Creed Odyssey streaming

The number of viewers are updating more or less every 2 seconds.

* You need first to download and install the backend application (Java Spring Boot) before to run
  this one.
* Follow the link: https://github.com/fukakai/TwitchBrotherBack

## About

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fukakai_TwitchBrother&metric=alert_status)](https://sonarcloud.io/dashboard?id=fukakai_TwitchBrother)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fukakai_TwitchBrother&metric=coverage)](https://sonarcloud.io/dashboard?id=fukakai_TwitchBrother)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fukakai_TwitchBrother&metric=security_rating)](https://sonarcloud.io/dashboard?id=fukakai_TwitchBrother)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fukakai_TwitchBrother&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=fukakai_TwitchBrother)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fukakai_TwitchBrother&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=fukakai_TwitchBrother)

- Production URL: https://twitch-brother.herokuapp.com/
  - not functional yet, the application is fully deployed but heroku is blocking it because of a
    memory leak - it seems it is due to the websocket

## Run in local

- Open an administrative powershell
  - make sure npm is installed: `https://docs.npmjs.com/getting-started/`
  - install python with `npm install --global windows-build-tools` from an administrative powershell
  - clone the repository and navigate inside
  - run `npm install`
  - run `npm install -g @angular/cli`
- Run `ng serve` or `ng serve --configuration development` in local.
- Navigate to `http://localhost:4200/`.

## Powered By

- Angular: @schematics/angular 12.2.0
- Bootstrap: bootstrap@5.1.0
- JQuery: jquery@3.6.0
- rxjs 6.6.7
- typescript 4.3.5
- SconarCloud: https://sonarcloud.io
- esLint: eslint/schematics@12.3.1
- Stomp: @stomp/ng2-stompjs@8.0.0
- SockJs: sockjs-client@1.5.1
- apexcharts@3.27.3
- bootstrap: bootstrap@5.1.0
