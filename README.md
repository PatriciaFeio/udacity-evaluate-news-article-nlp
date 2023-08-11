# Evaluate a News Article with NLP

## Simulation



<br>

# Table of contents

[top]: #top

- [Simulation](#simulation)
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

<br>

## Overview

This is the forth and final mandatory project for the **Front End Developer Nanodegree Program** sponsored by the **Bertelsmann Next Generation Tech Booster Scholarship Program**.

The aim of this project is to create a web tool that enables users to analyze articles or blogs using Natural Language Processing (NLP).

For this project we used Sentiment Analysis which is MeaningCloud's solution for perfomming a detailed multilingual sentiment analysis of texts from different sources ([to know more, visit page here]([https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis](https://www.meaningcloud.com/developer/sentiment-analysis)))

<br>

## Installation

1. [Clone](https://github.com/PatriciaFeio/udacity-evaluate-news-article-nlp.git) or download this project to your machine.

2. Install Node.js ([visit Node.js page here](https://nodejs.org/en/download)) and the required dependencies by running this command on the project directory:

```
npm install
```

3. Create a MeaningCloud Api free account [here](https://www.meaningcloud.com/developer/create-account) and know you can generate your APIKey.

4. Create a .env file at the root directory of the project and save your APIKey, like so:

```
API_KEY=YOUR API KEY HERE
```

5. Build with Webpack:

```
npm run build-prod
```

6. Start the server:

```
npm run start
```

7. Access the application through [http://localhost:8081](http://localhost:8081/)

8. Execute tests with Jest:

```
npm run test
```
