# Sodashop-VendingMachine

This repo is based on a kata that Guy Royse introduced me to.  I have built it to explore EmberJS's octane release features.
https://github.com/guyroyse/vending-machine-kata

Kata objectives
====================

In this exercise you will build a soda vending machine.  It will accept money, make change, maintain inventory, and dispense products.  All the things that you might expect a soda vending
machine to accomplish.

The point of this kata to to provide an larger than trivial exercise that can be used to practice TDD.  A significant portion of the effort will be in determining what tests should be
written and, more importantly, written next.

Features
========

Accept Coins
------------

_As a vendor_  
_I want a soda vending machine that accepts coins_  
_So that I can collect money from the customer_  

The soda vending machine will accept valid coins (nickels, dimes, and quarters) and reject invalid ones (pennies).  When a valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated.  When there are no coins inserted, the machine displays INSERT COIN.  Rejected coins are placed in the coin return.

NOTE: The temptation here will be to create Coin objects that know their value.  However, this is not how a real vending machine works.  Instead, it identifies coins by their weight and size and then assigned a value to what was inserted.  You will need to do something similar.  This can be simulated using strings, constants, enums, symbols, or something of that nature.

Select Product
--------------

_As a vendor_  
_I want customers to select sodas_
_So that I can give them an incentive to put money in the machine_  

There are an assortment of sodas.  When the respective button is pressed and enough money has been inserted, the soda is dispensed and the machine displays THANK YOU.  If the display is checked again, it will display INSERT COINS and the current amount will be set to $0.00.  If there is not enough money inserted then the machine displays PRICE and the price of the soda and subsequent checks of the display will display either INSERT COINS or the current amount as appropriate.
