# DojoChat

## Requirements

You'll need something to edit code with. If you don't have a program you like
already, try one of these:

### Windows

Download and install **Notepad++**

* [http://download.tuxfamily.org/notepadplus/6.1.3/npp.6.1.3.Installer.exe](http://download.tuxfamily.org/notepadplus/6.1.3/npp.6.1.3.Installer.exe)

### Mac OSX

Download and open **Text Wrangler**

* [http://ash.barebones.com/TextWrangler_4.0.1.dmg](http://ash.barebones.com/TextWrangler_4.0.1.dmg)

## How networks work

Networks are just a bunch of computers connected together with wires. Each
computer can only talk to the other computers it's wired to, and they all
cooperate to get messages from one place to another.

### What's your address?

The first thing you need if you want to send a package to someone is their
address - same thing with computers. When you want to go to google.com, the
first thing your laptop needs is the address where Google lives on the internet.

This is handled by DNS - the Domain Name System. DNS is like the yellow pages,
your school directory, or your family's address book. When you want to send a
card to the President telling him to put more coding in schools, you can ask
your parents for the President's address. Similarly, when your computer wants to
talk to Google's computers, it can ask DNS for Google's address.

If you open up your terminal, you can see what it looks like:

    $ host google.com
    google.com has address 173.194.46.0

Now your computer knows that Google lives at `173.194.46.0` (that's called an IP
address), and it can start sending messages.

### The Internet's Postal Service

Your computer probably isn't connected directly to Google. It's connected to
some other computer (your wireless router, maybe) that's connected to another
computer (whoever provides your internet service - probably AT&T or Comcast)
that's connected to more computers, until eventually we reach Google. So sending
a messages is like a big game of telephone, except the message doesn't get all
screwed up.

So once your computer knows Google's address, it asks your router if it knows
how to get there, just like if you were new to San Francisco, you might ask
someone at the Caltrain station if they know how to get to GitHub. You say "Hey,
where's `173.194.46.0`?". If your router doesn't know the answer, it'll ask the
other computers it's connected to, and they'll ask on down the line, until
someone says "Oh, you found me! This is `173.194.46.0`!". Then the computer who
found Google will tell whoever asked it, and the whole thing comes back until
your router says to you "Ok, I found `173.194.46.0`". Now your computer doesn't
know where Google is exactly, but it knows that if it hands a message to your
router, the router has found a way to get it to Google. We don't want to do this
every time, so everyone along the way will remember how they can get to Google
in case someone asks them again.

### Sending Messages

Now we know Google's address, and a computer we're connected to knows how to get
a message there. We don't need to know the details, just like how when you mail
a letter to the President you don't need to know whether it drives or flies, or
if it goes through Arkansas or Illinois. You just hand the letter to your
postman, and he promises it will arrive safely. So when we want to send
something to Google at `173.194.46.0`, we hand the addressed message to our
router and it passes it along wherever it needs to go.

If you do want to see the path your message takes, you can check it out in your
terminal:

    $ traceroute 173.194.46.0
    traceroute to 173.194.46.0 (173.194.46.0), 64 hops max, 52 byte packets
     1  homeportal (192.168.1.254)  487.005 ms  274.202 ms  333.592 ms
     2  76-218-68-2.lightspeed.sntcca.sbcglobal.net (76.218.68.2)  946.502 ms  203.002 ms  63.178 ms
     3  71.145.0.144 (71.145.0.144)  204.815 ms  147.880 ms  179.078 ms
     4  * * *
     5  * * *
     6  12.83.39.145 (12.83.39.145)  26.235 ms
        12.83.39.137 (12.83.39.137)  28.148 ms  24.364 ms
     7  12.122.114.21 (12.122.114.21)  79.211 ms  25.422 ms  25.751 ms
     8  12.249.231.14 (12.249.231.14)  72.722 ms *  70.846 ms
     9  209.85.249.3 (209.85.249.3)  26.680 ms
        209.85.249.5 (209.85.249.5)  27.040 ms  27.016 ms
    10  209.85.250.63 (209.85.250.63)  30.497 ms  27.746 ms
        209.85.250.64 (209.85.250.64)  35.129 ms
    11  64.233.174.204 (64.233.174.204)  36.443 ms  35.323 ms
        64.233.174.206 (64.233.174.206)  35.944 ms
    12  64.233.174.143 (64.233.174.143)  72.535 ms  70.256 ms
        64.233.174.141 (64.233.174.141)  69.641 ms
    13  72.14.237.220 (72.14.237.220)  77.694 ms
        72.14.237.216 (72.14.237.216)  70.355 ms
        72.14.237.220 (72.14.237.220)  71.405 ms
    14  209.85.240.79 (209.85.240.79)  69.778 ms  70.002 ms  69.205 ms
    15  * dfw06s27-in-f0.1e100.net (173.194.46.0)  72.253 ms  70.288 ms

So you can see it takes 15 steps for me to send something to Google. Some of the
steps (6 and 9-13) even have a few options to pick from, so our messages could
get to Google several different ways, like how you can drive from San Francisco
to Palo Alto on Highway 101 or Highway 280. One of the ways might be faster, so
you and the internet will pick that one, but if something goes wrong like
there's a big crash on 101, you can take a different route and still get there.
Computers crash too, so the internet was built to automatically use the best
route and switch to a new one of something goes wrong.
