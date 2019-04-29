# **Midterm Project**

For our midterm project we built a web app from start to finish using ES6, Node, Express, Bootstrap, CSS, jQuery, PostgreSQL, Twilio and Knex. 
We chose to build our app for a "client" wanting a website for online ordering for pick-up service for their restaurant. Customers can visit the website, see a detailed menu with various menu options, add desired items to a cart, and place that order online. Our website uses Twilio to implement SMS notifications for both the admin (restaurant owner/staff recives SMS notification when an order is placed and heads to the /admin page to input a ready time and cofirm order), and the customer (who recieves a SMS notification when their order is confirmed and is given the time their order will be ready for pickup.)


## Final Product
_*Here are a couple screenshots of the finished website*_

## PIZZA GUYS homepage! Detailed and attractive menu.
![Alt text](https://github.com/Gimorhee/PizzaGuys---Food-Pick-up-Ordering/blob/master/public/images/pizza%20guys%20homepage.png)

## The page user sees when they place and order and the restaurant admin confirms that order!
![Alt text](https://github.com/Gimorhee/PizzaGuys---Food-Pick-up-Ordering/blob/master/public/images/order%20confirmation.png?raw=true)



## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. To see the admin page from the perspective of the "restaurant owner" once you have placed the order - got to <http://localhost:8080/admin> and input a ready time - the confirmation order page will refresh to display the ready time once you've inputted it on /admin! (Unfortunatley you will not be able to see the SMS that the admin recieves as it is linked to our group's phone number!)



