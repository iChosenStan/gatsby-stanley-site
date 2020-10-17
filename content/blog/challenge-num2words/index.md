---
title: "Challenge: Convert Amount to Words"
date: "2019-11-01T22:40:32.169Z"
description: A solution which I submitted on a facebook group named Programmer Ako using Python and without importing any library.
thumbnail: "https://i.imgur.com/jtLzt6s.png"
tags: [
    {
        tag: "python",
        style: "bg-yellow-500 text-white"
    },
    {
        tag: "challenge",
        style: "bg-red-400 text-white"
    },
]
---
A solution which I submitted on a facebook group named ***Programmer Ako*** using Python and without importing any library.

> Generally, this could easily be done with libraries. However, to make this challenge a little bit more challenging, I decided not to import any python libraries.
## Solution
```python
ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
tens = ['Twenty', 'Thirty','Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
misc = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattuordecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Centillion']
get_text = lambda amount, text='': (text+(ones[amount] if amount < 20 else get_text(amount%10, tens[amount//10-2]+ ' ') if amount >= 20 and amount < 100 else get_text(amount%100, ones[amount//100] + ' Hundred ')))
amount_in_words = lambda amount, text='':(''.join([(get_text(int(amount[0+3*i:3+3*i])) + ' ' + misc[(len(amount)//3)-i-1] + ' ') for i in range(len(amount)//3)]))
print(amount_in_words((lambda x:x.zfill(3*(-(-len(x)//3))))(str(input('Enter amount: ')))))
```