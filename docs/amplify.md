AWS Amplify is a pretty great. It lets you add lots of production quality features to your web and mobile apps hat you'd just have to do by hand otherwise. It's a managed service and tool chain for mobile and web apps.

 - Get started with [the Amplify Docs](https://docs.amplify.aws/start/q/integration/react).

 - To install Amplify, [follow these instructions](https://docs.amplify.aws/cli/start/install).

In a nutshell, here's what's in the Amplify framework.

| Feature |  What it does | How we use it in C-19 Autobody |
| --- | ---| ---|
| API | Lets you define arbitrary APIs using REST or GraphQL. API endpoints can be backed by AWS Lambdas. GraphQL endpoint are backed by DynamoDB. | We use some of the available GraphQL queries and mutations.|
| Auth | Uses AWS Cognito to create a full-featured sign-up, sign-on, forgot my password, and so on.| We use all the things. We get a full-featured authentication experience out-of-the-box with very little extra effort. |
| DataStore | A cross-device data storage synchronization that uses GraphQL. You can also subscribe to changes in data from other users and devices. This works whether you're online or offline: Synchronization uses optimistic locking. | As we're storing data through the DataStore API, the data will be stored in DynamoDB. Other devices (even browser tabs) will subscribe and update in realtime. |
| Interactions | Amplify lets you integrate with Amazon Alexa for chat bots and similar | |
| Predictions | Integrates Amazon Machine Learning. | |
| PubSub | Amplify provides connectivity to message systems. | |
| Push Notifications | Uses Amazon Pinpoint for segmentation and campaigns | |
| Storage | Can upload images and other data to S3 from an application | |

## Let's install AWS Amplify in your project

Inside your React Material project folder, execute

```
amplify init
```

OK. So this is a lot of stuff all of a sudden. 

Don't panic. Just mostly accept the defaults and add `c-19-autobody` as the projects name and `dev` as the environment.

Here's what it looks like in my terminal

!!! warning
    TBD: just create a table of the questions/responses

```shell
» amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project c-19-autobody
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify Console app: d15ddnbwqjrf7u
⠧ Initializing project in the cloud...

...

✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

» 
```

Run 

```shell
amplify status
```

There's nothing much to do just yet. Let's check everything still works with `yarn start`.

It still works with any luck. (You can run this command after every step to make sure you're following along.)

## Add an Amplify managed API

```shell
amplify add api
```

You'll be asked a few more things. 

!!! warning
    TBD: so what are they?

When you're asked "Do you want to edit the schema now?" say yes and replace the contents with

```
type Vehicle @model {
  id: ID!
  make: String!
  model: String!
  mileage: Int
}
```

## Deploy the back-end resources to the cloud

!!! note
    The `amplify add ...` commands generally capture and save configuration. Some other commands set things up from this configuration. `amplify push` generates code from the GraphQL schema, for example.  

```shell
amplify push
```

Enter `Y` for all the prompts.

All this definitely doesn't do anything interesting yet: We're just setting up all the moving parts. Verify the UI still works, `yarn start`.

## The upshot

TBD: what we did