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

- **Lab 13: Message Queues**
In this phase, we are going to implement a system to guarantee that notification payloads are read by their intended subscriber. Rather than just triggering an event notification and hope that client applications respond, we’re going to implement a “Queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.
In this final phase, we’ll be implementing a “Queue” feature on the Server, allowing Driver and Vendor clients to subscribe to messages added for pickup and delivered events within their respective client queues.
In Phase 3, we are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and “scanning” package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver any packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive “delivery” notifications from the Queue system.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/caps/actions)
- [Socket.io Docs](https://socket.io/docs/v4/client-installation/)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Collaborators

- Ryan Gallaway
- Reece Renninger
- Chat GPT

### User/Developer Stories

- As a **vendor**, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
- As a **vendor**, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
- As a **driver**, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
- As a **driver**, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
- As a **driver**, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

- As a **developer**, I want to create a system of tracking who is subscribing to each event.
- As a **developer**, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
- As a **developer**, I want to create a system for communicating when events have been delivered and received by subscribers.
- As a **developer**, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
- As a **developer**, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

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
4. `npm install socket.io-client`
5. Refactor the event system to emit events over socket.io instead of using the Node.js core events module.

- **Lab 13: Message Queues**

1. Continue working in my ‘caps’ repository, in a new branch called ‘queue’.
2. Adding a new module that guarantees that payloads from events are delivered to any Client Module that are listening for specific events.
3. Refactoring `Server` and `Client` modules to persist payloads on the server side and remove them once recieved by the client.

#### `.env` requirements (where applicable)

for now I have none and do not require one

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Socket server communication between 3 seperate instances of the application communicating via main server index.

#### Tests

- How do you run tests?
  - `npm test`

- Any tests of note?
  - The tests have been written to test the functionality of the handlers and the events that are emitted from them.

- Describe any tests that you did not complete, skipped, etc

#### UML

- [Lab11UML](./assets/lab11UML.png)
- [Lab12UML](./assets/lab12UML.png)
