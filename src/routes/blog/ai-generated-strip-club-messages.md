---
title: AI Generated Strip Club Messages
date: 2021-12-22
---

![Exploding computer](/assets/img/exploding_computer.gif "Google's computers begging for mercy after training")

# WHAT!?

Yes, ladies and gentlemen, I’ve successfully stopped the habit of making blog posts relating to this site and made something of use. So without further ado, I’ll get into the meat of this now.

For this project I made, I decided to make a model for GPT-2 to create messages from the Discord server I usually talk to, “the strip club”. Truly the biggest clusterfuck of teenagers spitting out the most random shit imaginable, ever since December 10, 2020.

My main inspiration for this project entirely lies on [Colon](https://www.youtube.com/c/GDColon)’s video about [*AI Generated Geometry Dash Comments*](https://www.youtube.com/watch?v=EpSRlZTh0U8), great comedic video, would rate 5/5 knee slaps 💥. Apart from the video, ever since I encountered OpenAI’s GPT-3 API, I’ve been interested in utilizing it inside one of my projects, but for this one, I instead used GPT-2. No other reason other than I couldn’t be arsed to wait for the API access and the pricing for GPT-3’s fine-tuning service, with GPT-2 being able to do it, well free really.

# Process

## Getting the data (like I’m Meta)

If we’re trying to fine-tune an AI, we’re going to need some data. Discord doesn’t give us a way to export entire channels as a big fat, probably less than 50 megabyte on this scale text file, which I’d expect seeing as not many people would be doing this. Thankfully, we have a tool called [`discord-scraper`](https://github.com/lnxcz/discord-scraper), a program that scrapes an `x` amount of messages using the Discord API. I did modify it slightly for my needs, removing the attachment links as this would be a purely text-only training file and modifying the format I wanted it to be in.

## Fine-tuning time

I’ll keep this short and sweet. I don’t do Python. Quite literally, my only experience is boring command line programs and self-bots. So I was going in this blind. I took an 8 hour TensorFlow course, created my own model of GPT-2 by myself. I solved world hunger using only the power of armour stands and... that didn’t happen. I followed a YouTube tutorial to use and fine-tune from a text file using a module called [`gpt-2-simple`](https://github.com/minimaxir/gpt-2-simple). Listen, I wasn’t going to manually do it from the [`openai/gpt-2`](https://github.com/openai/gpt-2) repo. It was going to reach this at some point and that point was this.

For the actual process of fine-tuning our AI, firstly I loaded up a Jupyter notebook inside of Google Colab since I sure was hell not going to even touch/train it on my laptop. I picked a GPU for my hardware acceleration to not have to wait 5000 years for it to train. Setup some code cells such as setting the TF version, installing all the packages, mounting Google Drive and lastly, doing the function to train, making me wait an eternity (or about 1 hour and 20 minutes).

I probably won’t be releasing the model to the public out of privacy for the people whose messages are tied to their Discord tag that are of a pretty sensitive nature. I might retrain it with the tags and other identifiable information in the content of the messages, but only time will tell if I’ll ever release those versions of the model. Sorry.

## Text Generation

After all this work. The scraping, the module downloading, some other stuff that’s probably important. I arrived here. It’s time to use the model. I installed [`gpt-2-simple`](https://github.com/minimaxir/gpt-2-simple), set it up to use my model using:

```py
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

gpt2.generate(sess, run_name='run1')
```

And behold, 2 days of work and even more because of planning, returned this:

```
[REDACTED]: &uncaption

[REDACTED]: &uncaption

[REDACTED]: &caption jordan

[REDACTED]: &uncaption

[REDACTED]: &caption

[REDACTED]: &uncaption

[REDACTED]: &caption

[REDACTED]: &caption

[REDACTED]: &uncaption

[REDACTED]: &caption

[REDACTED]: &caption

[REDACTED]: &uncaption

[REDACTED]: &caption **the
```

Turns out our inability to use our bot-only channels backfired on us. And this happened a lot too with some of us and our tendency to repeat the exact same words as reactions every time returned a long list of someone saying “this” over and over again.

# What’s Next? / Conclusion

You may be asking: “Where’s the content? Did you waste 5 minutes of my precious lifetime because of this shitty AI project I made?”

The answer is probably. When we’re done working on another video reading all of our favourite ones out, you’ll get to see them. So wait approximately 10 years for us to upload that video. It’ll totally be worth it.

[![YouTube channel - the strip club](https://img.shields.io/badge/YouTube-the%20strip%20club-red?logo=youtube)](https://www.youtube.com/channel/UC3oGNruOQCIP6I-yFjldw4g)