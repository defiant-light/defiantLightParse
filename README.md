#Defiant-Light: Faux Poe
## Team

  - __Product Owner__: Luke Davis
  - __Scrum Master__: Todd Skinner
  - __Development Team Members__: Arun Suresh, Eric Benson

##The Big Idea
There's currently no platform to monetize machine-generated content in a way that capitalizes on the increadible volume possible using generative processes, and the near-zero marginal cost of creating an additional units of content. We've addressed this by using bitcoin as a means of paying for the algorithmically-generated content (in this case poor imitations of Edgar Allan Poe poetry) and Mandrill to deliver that content to the customer.

## Chain of Events

1. A Customer goes to your site and clicks a button that says 'Pay with Bitcoin' (or something like that...)
1. Coinbase processes the bitcoin payment, because of the nature of the bitcoin payment network this may take 10 minutes or more
1. When that bitcoin payment clears, Coinbase will send an HTTP POST to a custom url that you set up (the aftermentioned 'callback url') to let you know the payment has been processed. In the repo all the code that handles the callback url is in cloud/app.js
1. From the JSON payload of that POST you'll extract the email (this should already be handled in the app.js file)
1. Generate content (text is the easiest to handle, because it can be injected directly into the body of the email, and doesn't require an attachment or anything fancy like spinning up Phantom JS) and inject it into the email.
1. Use Mandrill to send that email to the customer

## Requirements
To Use with your own generative content you'll just need 4 things:  

1. a Coinbase account  
1. a Parse account  
1. a Mandrill account
1. a JS module that creates content on the fly  (of course you could just use/modify faux-poe.js)

## Usage
1. Clone the repo  
1. Log into Mandrill and get your api key
1. Set up your Parse account:  
  1. Install the parse cli in the project's root directory on your machine
  2. Add a creds.js file to the cloud directory and put the path to that file in your .gitignore
  3. Within that creds.js file add your mandrill api key 
  4. Also add a parseUsername and parsePassword to the creds file - this doesn't actually need to be your Parse username or password (in fact I would advise against it) these are just used later in the callback url so something like aaa and bbb are fine.
  5. Make whatever asthetic changes you'd like to the index.html file in the public directory
  6. Use the parse deploy command from the command line
1. Log into Coinbase
  1. Go to Merchant Tools (on the left) > Tools (at the top - this is where you'll get the code necessary for people to pay you in btc) > advanced options,
  2. Click the checkbox next to 'Collect email address from customer'. 
  3. In the Callback Url text area you'll tell Coinbase what url to notify once a payment clears. You'll input something like: https://aaa:bbb@yourprojectname.parseapp.com/cburl 
  4. This will generate the code for the 'Pay with Bitcoin' button that you'll put into your index.html file
  5. Paste that code into the appropriate place in your index.html file (it's marked with comments - if you don't paste your own code in, I'll be the one who gets paid every time somebody hits that button)
1. PROFIT!


## Development
 - Moving forward, the logical next step would be to use something like Phantom JS (or anything that will let you generate content that's not just text - images, music, etc...) to extend breadth of possible products offered  
 - Additionally creating a system by which multiple products could be purchased would turn this single


## Dependencies

- parse cli
- faux-poe
- express
- a Parse account
- a Coinbase account
- a Mandrill account
