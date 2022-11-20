# Assignment 1

![Browser flow](Week-1\Assignemnt-1.1\Browser_process.png)

## What is the functionality of the browser?
Browsers are fully-functional software suites that can interpret and display HTML Web pages, applications, JavaScript, AJAX and other content hosted on Web servers. Many browsers offer plug-ins which extend the capabilities of the software so it can display multimedia information (including sound and video), or the browser can be used to perform tasks such as videoconferencing, to design web pages or add anti-phishing filters and other security features to the browser.

## High level components of a browser
The browser's main components are :

The user interface:

This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

The browser engine: marshals actions between the UI and the rendering engine.

The rendering engine :

responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

Networking:

For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

UI backend:

Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

JavaScript interpreter.

Used to parse and execute JavaScript code.

Data storage.

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

## Rendering engine and its use
A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS).

## Parsers (HTML, CSS, etc)
1. parse HTML character by character
2. tokenize HTML tag by tag
3. create the nodes of DOM Tree from the tokens, and mount the nodes on the tree
4. compute CSS rules and apply them on the nodes of the DOM Tree

## Script Processor
The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies.

## Tree construction
First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node. To construct the render tree, the browser roughly does the following: Starting at the root of the DOM tree, traverse each visible node.
## Order of script processing
If we aren't dynamically loading scripts or marking them as defer or async, then scripts are loaded in the order encountered in the page. It doesn't matter whether it's an external script or an inline script - they are executed in the order they are encountered in the page.
