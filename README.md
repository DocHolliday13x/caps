# LAB - Class 11

## Project: caps

### Author: Ryan Eastman

### Problem Domain

- **Lab 11: Events**
Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.
This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

- **Lab 12: Socket.io**
Continue working on a multi-day build of our delivery tracking system, creating an event observable over a network with Socket.io.
In this phase, we’ll be moving away from using Node Events for managing a pool of events, instead refactoring to using the Socket.io libraries. This allows communication between Server and Client applications.
The intent here is to build the data services that would drive a suite of applications where we can see pickups and deliveries in real-time.
The goal of this lab is to create a namespaced Socket.io event server, and to configure Vendor and Driver client modules.
The Socket Server will create a namespace of `caps` that will receive all CAPS event traffic.
Each Vendor and Driver client will connect to the `caps` namespace.
The server will emit specific events to each socket that is listening for their designated events from the global event pool defined in the server.
Each Vendor will only emit and listen for specific events based on thier `Vendor ID` (store name). This will be managed by rooms within Socket.io.
Each Driver will "pick up" a package when the vendor notifies the Server that an "order" is ready and simulate "in-transit" and "delivered" events with timers.
Expected output of the 3 running applications should be the same as it was in Phase 2.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/caps/actions)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Collaborators

- Ryan Gallaway
- Reece Renninger
- Nick Mullaney
- Justin Mathieu

### User/Developer Stories

- As a **vendor**, I want to alert the system when I have a package to be picked up.
- As a **driver**, I want to be notified when there is a package to be delivered.
- As a **driver**, I want to alert the system when I have picked up a package and it is in transit.
- As a **driver**, I want to alert the system when a package has been delivered.
- As a **vendor**, I want to be notified when my package has been delivered.
- As a **developer**, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications.

### Setup

- **Lab 11: Events**

1. create repo
2. clone repo
3. get up, make coffee
4. npm init -y
5. npm install eslint jest

- **Lab 12: Socket.io**

1. Continue working in my ‘caps’ repository, in a new branch called ‘socket.io’.
2. Install the socket.io library into my application.
3. `npm install socket.io`
4. Refactor the event system to emit events over socket.io instead of using the Node.js core events module.

#### `.env` requirements (where applicable)

for now I have none and do not require one

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/hello` - specific route to hit

#### Tests

- How do you run tests?
  - `npm test`
- Any tests of note?

- Describe any tests that you did not complete, skipped, etc

#### UML

- [UML](./assets/lab11UML.png)
