# Physical Demo

Talking and drawing pictures is grand, but there's no better way to learn than
by doing. This activity turns the students into the network layer!

## Setup

The students will each need an "IP" to be known by. Unless you're running an
impressively popular webinar, we won't need the full IPv6 range, so simple
integers will suffice.

1. Print out `ips.html`, included in this demo folder.
    - Or make your own identifiers, just so long as they're unique and easily
      described.
2. Hand out a random IP to each student, perhaps as they come in.
    - Make sure they keep it a secret, we haven't explored the network yet.
3. Keep track of which IPs are assigned; you'll need to pick a recipient.
4. Pick a physical "message" to send

## Prerequisites

If the class is expected to have any idea what's going on, you'll need to take
them through the basics of
[how networks work](https://github.com/CoderDojoSF/dojochat#the-internets-postal-service),
specifically the
[Bellman-Ford algorithm](https://en.wikipedia.org/wiki/Bellman-ford). No need to
go into formalities or inductive proofs, just draw a simple network and make
sure they grok how one node finds a path to another.

## Goal

You, the mentor, have a message to send to one of the students. Write it down,
or pick out a sticker, piece of candy, etc. Anything that comes in packet form
is appropriate.

## Rules

The students are allowed to talk to other students one "hop" away, where a "hop"
will depend on your class setup. Make it simple and close-range. The only
important thing is that no one can move around or otherwise reconfigure their
"links". For example:

- Anyone North/South/East/West of where a student is sitting
- Anyone within arms-reach
- Anyone a student can reliably toss the packet to

As they search, they're only allowed to say a few things. You don't necessarily
need to spell these out, but make sure no one's going to circumvent the network
topology by yelling "I'm number 4! Over here, send it to me!".

- I'm looking for [number]
- I'm [number]!
- I know how to get to [number]

## Go!

Now that everyone has an address and knows who their neighbors are, it's time to
send your message. Pick a "node" near you and whisper the IP of your desired
recipient. Then step back and watch them whisper furiously amongst themselves as
they execute their programming (muahahahaaa). If you handed out numbers
randomly, you really won't know where it is, but this is why you wanted to keep
track of which ones were assigned, so you know it does exist.

Once the student you linked to gets a response and tells you they know in which
direction to send your message, hand it over and ask them to deliver it. If all
has gone well, your packet will make its way smoothly to its destination.

## Bonus

After a few rounds, when they've gotten a hang of it, pause in the middle of a
run and pick a few nodes to play
[chubby bunny](https://en.wikipedia.org/wiki/Chubby_bunny), thereby rendering
them nonresponsive. Hope rerouting emerges naturally.

