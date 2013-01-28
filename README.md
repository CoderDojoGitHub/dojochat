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
