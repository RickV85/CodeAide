# CodeAide

## Overview

CodeAide is a virtual assistant for software developers that are looking for support in their coding, but do not want to receive answers to the problem that they are working through. CodeAide assists a developer by coaching them through the problem, providing helpful feedback and links to additional materials to learn more about the topic at hand. The idea came to me while working on challenging LeetCode problems to expand my abilities as an engineer. ChatGPT has the tendency to want to solve the problem for you, returning a code sample of how to solve it, and this is not productive to the learning experience I was looking for.

## Tech

This is a Next.js application using TypeScript, MaterialUI, ContextAPI, Jest and ChatGPT. I used Vercel's ai/react package that adds convenience functions for creating a chatbot with OpenAI's ChatGPT. Next.js's API functionality is used to create an endpoint that interacts with OpenAI's API and delivers an engineered system prompt and settings. Data structure created with classes and were tested with Jest.

## Features and usage

### Chat

The main function of the app is to provide a user, specifically a software developer, an easy to use chatbot that can assist them with code challenges and foster their learning experience as a teacher would. ChatGPT3.5 Turbo provides the user with lightning fast responses that will not produce a solution to the problem, only assistance with their issues and resources. The user can use the Submit button or the return/enter key to submit their input. The shift + return key will create new lines. They can create new conversations at any time with the "New Chat" button below Submit.

### History

The secondary feature of this app is it's History functionality that saves conversations in the browser's local storage. As soon as a conversation is started, it is saved to local storage. Then, it can be recalled anytime to review or continue a previous conversation. The conversations in History can also be deleted by clicking the "X" icon on the right side of the tile.

### Mobile friendly

This app was created with the mobile user in mind, although it is more likely to be used in a desktop setting considering its purpose. The mobile view features an accordion menu that allows a user to swap between the Chat and History views.

## Set up instructions

Clone the repo to your local machine

Open the repo in an IDE

Install dependencies with "npm i"

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).