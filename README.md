# sms-app
SMS Management Application API

## Development
This application was developed using Node, Express, Sequelize and Postgres.

## Installation
1. Start up your terminal (or Command Prompt on Windows OS).
2. Ensure that you have node installed on your PC.
3. Clone the repository by entering the command in your terminal:
  ```git clone https://github.com/phemmz/sms-app.git```
4. Navigate to the project root folder using cd sms-app on your terminal (or command prompt).
5. After cloning, install the application's dependencies with the command `npm install`.
6. Run `yarn start && yarn serve:dev` to start the app in development mode.<br>

## Key Features
### Contact
- Users can create contact
- Users can delete a contact
- Users can get all contacts
- Users can get a particular contact

### Message
- Users can send a message
- Users can get all messages that belongs to a user

## API
### POST `/api/v1/contact`
#### Body
```
{
  "name": "phemmz",
  "phoneNumber": "02348381277"
}
```

#### Response
201:
```
{
  "success": true,
  "message": "Contact created successfully",
  "contacts": {
    "name": "phemmz",
    "phoneNumber": 02348381277,
    "updatedAt": "2019-06-19T05:45:25.377Z",
    "createdAt": "2019-06-19T05:45:25.377Z"
  }
}
```

404:
```
{
  "success": false,
  "message": "Contact already exist",
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

### GET `/api/v1/contacts`
#### Response
200:
```
{
  "success": true,
  "message": "Contacts retrieved",
  "contacts": [
    {
      "name": "phemmz",
      "phoneNumber": 02348381277,
      "updatedAt": "2019-06-19T05:45:25.377Z",
      "createdAt": "2019-06-19T05:45:25.377Z"
    }
  ]
}
```

404:
```
{
  "success": true,
  "message": "No contact found",
  "contacts": []
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

### GET `/api/v1/contacts/:phoneNumber`
params - phoneNumber

#### Response
200:
```
{
  "success": true,
  "message": "Contact retrieved",
  "contact": {
    "name": "phemmz",
    "phoneNumber": 02348381277,
    "updatedAt": "2019-06-19T05:45:25.377Z",
    "createdAt": "2019-06-19T05:45:25.377Z"
  }
}
```

404:
```
{
  "success": true,
  "message": "Contact not found",
  "contact": null
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

### DELETE `/api/v1/contact/:phoneNumber`
param - phoneNumber

#### Response
200:
```
{
  "success": true,
  "message": "Contact successfully deleted!"
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

### POST `/api/v1/message`
#### Body
```
{
  "message": "Hello",
  "senderId": "02348381277",
  "receiverId": "02348381278"
}
```

#### Response
201:
```
{
  "success": true,
  "message": "Message sent successfully,
  "messageDetails": {
    "message": "Hello",
    "senderId": "02348381277",
    "receiverId": "02348381278"
  }
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

### GET `/api/v1/messages/:messageStatus/:phoneNumber`
params:
  - messageStatus
  - phoneNumber

#### Response
200:
```
{
  "success": true,
  "messages": [
    {
      "name": "phemmz",
      "phoneNumber": 02348381277,
      "sentMessages": [],
      "receivedMessages": []
    }
  ]
}
```

500:
```
{
  "success": false,
  "error": "Server failed, please try again!"
}
```

## How To Contribute
- Fork this repository
- Clone the repository
- Create your feature branch locally with ``` git checkout -b your-feature-branch-name ```
- Commit your changes using ``` git commit -m 'Commit name' ```
- Push your changes to your remote branch with ``` git push -u origin your-feature-branch-name ```
- Open a pull request to the develop branch, and describe how your feature works

## License
The MIT License

#### Author: Adetunji Femi
