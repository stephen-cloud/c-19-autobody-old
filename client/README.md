# What's all this then?

Here's a TL;DR for the series of stories here (TBD). 

This are just the basic recipes. See the stories for all the details.

# You'll need these things to get started

## `yarn` package manager

See these instructions

```
https://classic.yarnpkg.com/en/docs/install
```

## AWS account

```
zzz
```

### AWS profile

```
xxx
```

# Create skeleton React application

```
yarn create react-app my-app --template typescript
```

```
yarn start
```

# Make it an AWS Amplify app

See

```
https://docs.amplify.aws/start/q/integration/react
```

```
amplify init
```

```
amplify status
```

shows nothing much to do. 

```
yarn start
```
still works with any luck. (You can do this after every step to make sure you're following along.)

Add AWS Amplify and React dependencies

```
yarn add aws-amplify @aws-amplify/ui-react
```

# Make it a super simple React Material app

```
yarn add @material-ui/core
```

Replace `App.tsx` with this

```
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" >Welcome to C-19 Autobody</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
```

# Create a back-end application

```
amplify add api
```

```
amplify push
```

## Update the schema to be something about Autobody shops

Replace the contents of `amplify/backend/api/client/schema.graphql` with

```
type Part @model {
  id: ID!
  description: String!
  price: Float
}
```

