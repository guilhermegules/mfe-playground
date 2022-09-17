# Micro Frontend Playground

## Module Federation

**Module Federation** is a type of JavaScript architecture, and allows a JS application to dynamically load code from another application and in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by federated code, Webpack will download the missing dependency from that federated build origin.

**Terminology**

- **Module federation:** the same idea as Apollo GraphQL federation - but applied to JS Modules. In the browser and in node.js
- **A host:** a Webpack build that is initialized first during a page load
- **A remote:** Another Webpack build, where part of it is consumed by a “host”
- **Bidirectional-hosts:** When a bundle or Webpack build can work as a host or as a remote. Either consuming other applications or being consumed by others at runtime

<img src="https://cdn-images-1.medium.com/max/1200/1*LYa-AhLhP0-3q2O9liL13w.png" width="300" />

## Web Components

Web components are reusable client-side compoentns based on web standards and supported by all major browsers. With them we have a excelent way of encapsulating functionality from the rest of our code. Not only that, but it's possible reuse them in every web application and web page.

> The primary benefit of Web Components is that we can use them everywhere. With any framework, or even without a framework. - [vuejs.org](https://vuejs.org/guide/extras/web-components.html)

