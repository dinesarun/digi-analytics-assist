# [Digi Analytics UI React Typescript ⚡️](https://github.com/jaisaravanan-dev/digi-analytics-assist)

### Introduction

Digi Analytics UI is an exemplary React project designed to demonstrate the integration of analytics tools such as Amplitude and Microsoft Clarity.

This project provides a comprehensive guide on how to set up and use these tools to gain valuable insights into user behavior and improve your web application's performance.

### Quick Start

Install WorkDaily UI by running either of the following:

- Install NodeJS LTS from [NodeJs Official Page](https://nodejs.org/en) (NOTE: Product only works with LTS version).

Clone the repository with the following command:

```bash
git clone git@github.com:jaisaravanan-dev/digi-analytics-assist.git
```

Or

```bash
git clone https://github.com/jaisaravanan-dev/digi-analytics-assist.git
```

Run in terminal this command:

```bash
npm install
```


### Integrate with Amplitude

To initialize Amplitude in your project, follow these steps:

1. Add your amplitude API key as .env.local(Create a new file .env and copy keys from .env.local) and Replace with your actual Amplitude API key:

```bash
REACT_APP_AMPLITUDE_API_KEY=<Your Amplitude API Key>
```

2. Initialize Amplitude in your project. Open `analyticsinitializer.js` and add the following code:

```javascript
import amplitude from '@amplitude/analytics-browser';

amplitude.init('YOUR_API_KEY_HERE');

export default amplitude;
```

3. Use the initialized client to log events:

```javascript
amplitude.track('YOUR_EVENT_NAME', {
  // Add your event properties here
});
```



Then run this command to start your local server

```bash
npm start
```

To integrate with Amplitude