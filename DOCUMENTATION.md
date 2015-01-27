### Table of Contents

1. [Public APIs/Libraries used](#Public APIs/Libraries used)
1. [Application Flow](#Application Flow)

## Public APIs/Libraries used

Express

Parse

Mandrill

- Allows for creating, sending, and tracking emails
- We used Mandrill to send buyers their purchased digital content via email attachments

ChanceJS

- Creates a randomly generated sequence of numbers, characters, strings, etc.
- Based on the one product we are selling right now, we used ChanceJS to randomly generate short Edgar Allen Poe poems. 

## Application Flow

1. User clicks on the 'Pay with Bitcoin' button.
1. Request gets sent to Coinbase API 
1. Request gets sent to Parse
1. After Email and Bitcoin ID get validated, Background job runs because of 10 or so minute lagtime between payment and process of payment.
1. Once payment is processed, Mandrill sends out an email to buyer.

