import type { Category } from "../types";

export const canonEvents: Category = {
  id: "canon-events",
  num: "03",
  name: "canon events",
  color: "#FF6FB5",
  tagline: "toxic traits, mistakes & social pathology.",
  quizzes: [
    {
      id: "the-apology-audit",
      title: "the apology audit",
      blurb: "how do you act when you are objectively the villain of the story?",
      questions: [
        {
          text: "you just realized halfway through an argument that you are completely in the wrong. what is your next move?",
          options: [
            "double down on my original point but change the wording slightly so it sounds like a totally different argument.",
            "suddenly start crying or acting extremely overwhelmed so they have to stop being mad and comfort me instead.",
            "go completely silent, stare at the wall, and refuse to engage until the tension becomes unbearable for them.",
            "admit i am wrong, but instantly bring up something bad they did three months ago to balance the scales.",
            "make a self deprecating joke about how stupid i am so they feel bad for being mad at me.",
          ],
        },
        {
          text: "what is your exact definition of a sincere apology?",
          options: [
            "explaining all the context and external factors that forced me to make the mistake so they understand my side.",
            "saying sorry but adding \"if i made you feel that way\" so i don't have to take full accountability for the action.",
            "buying them a coffee, sending a funny meme, or acting completely normal the next day to smooth it over silently.",
            "a long paragraph where i psychoanalyze my own childhood trauma to explain why i acted toxic.",
          ],
        },
        {
          text: "someone sends you a long, serious text calling out your bad behavior. what is your physical reaction?",
          options: [
            "a massive wave of defensive heat in my chest followed by immediately typing a paragraph back without thinking.",
            "i leave it on read for twelve hours because processing the fact that someone is mad at me makes me feel sick.",
            "i screenshot it, send it to a different friend, and ask them to validate that the other person is overreacting.",
            "i critique the way they wrote the text, focusing on their grammar or tone instead of the actual issue they brought up.",
          ],
        },
        {
          text: "how long does it take for you to forgive yourself after doing something embarrassing or mean?",
          options: [
            "literally five minutes. i justify it in my head and move on completely.",
            "i hold onto it for years and let it randomly haunt me while i am trying to fall asleep at 2 am.",
            "i never really forgive myself, i just build a wall of irony around the memory so nobody can tell i care.",
            "i rely entirely on the other person forgiving me. if they are over it, i am over it.",
          ],
        },
        {
          text: "what happens when someone refuses to accept your apology?",
          options: [
            "i get angry that they are holding a grudge and convince myself they are the toxic one now.",
            "i panic and apologize six more times in increasingly desperate ways until they cave.",
            "i shrug and walk away. i did my part, their emotional regulation is not my problem.",
            "i secretly plan to distance myself from them permanently because i hate being perceived as the bad guy.",
          ],
        },
      ],
      results: [
        {
          title: "the defensive deflector",
          callout: "you are physically allergic to the phrase \"i was wrong.\" when cornered, you use logic, semantics, and old grudges to spin the narrative until the other person forgets what they were even mad about. you treat arguments like debate club, but relationships are not courtrooms. you can lose an argument without losing your dignity.",
        },
        {
          title: "the victim card architect",
          callout: "when you mess up, you immediately weaponize your own tears, anxiety, or self hatred. you make yourself so small and pathetic that the person who was originally hurt ends up having to comfort you. this is manipulative, even if you don't do it on purpose. let people be mad at you without making it a crisis about your self worth.",
        },
        {
          title: "the silent eraser",
          callout: "you refuse to do verbal apologies. instead, you try to reset the vibe by offering a snack, a meme, or a change of subject. you think ignoring the conflict makes it go away, but it just builds quiet resentment in everyone around you. people need to hear you say the actual words, not just see you act nice the next morning.",
        },
        {
          title: "the context historian",
          callout: "you wrap every apology in a thick layer of excuses. you think if someone understands why you did the toxic thing, it cancels out the fact that it hurt them. you use therapy speak to psychoanalyze your own bad behavior instead of just owning it. an explanation is not an apology.",
        },
      ],
    },
    {
      id: "the-grudge-index",
      title: "the grudge index",
      blurb: "how long do you keep the receipts before you burn the house down?",
      questions: [
        {
          text: "an old friend who treated you terribly two years ago just posted a massive life achievement. how do you react?",
          options: [
            "immediately check their profile from a fake account to find something wrong with the picture.",
            "block them. seeing them succeed physically makes my stomach hurt and i refuse to perceive them.",
            "i actually feel nothing. they have been dead to me for so long that they are just a stranger on a screen.",
            "send the post to our mutual friend with a sarcastic comment about how fake they are being online.",
            "i feel a weird pang of sadness and wonder if they ever actually think about what they did to me.",
          ],
        },
        {
          text: "what is your strategy for archiving digital memories of people who wronged you?",
          options: [
            "i keep all the texts, screenshots, and photos hidden in a locked folder just in case i ever need to prove a point.",
            "i go on a scorched earth deleting spree the night the friendship ends and wipe every trace of them.",
            "i leave the photos up on my feed because they fit the aesthetic and i refuse to ruin my grid for them.",
            "i crop them out of the photos but keep the pictures to prove that i still had fun without them.",
          ],
        },
        {
          text: "someone gives you a backhanded compliment wrapped as a joke. what is your counter attack?",
          options: [
            "laugh awkwardly in the moment, then spend the next three weeks secretly judging everything they wear.",
            "immediately hit them back with a slightly sharper, meaner joke masked in the exact same friendly tone.",
            "act like i literally didn't understand the joke and make them explain it out loud until it sounds embarrassing.",
            "ignore it completely, but add a permanent mental strike next to their name in my internal ledger.",
          ],
        },
        {
          text: "how do you handle being forced to hang out in a group with someone you secretly hate?",
          options: [
            "i am overly nice to them. so nice that it makes them deeply uncomfortable and paranoid.",
            "i give them absolute, chilling silence and only speak to the people sitting directly next to me.",
            "i drop tiny, passive aggressive comments that only the two of us understand to slowly drive them crazy.",
            "i dominate the conversation and make sure everyone else is laughing so they feel entirely left out.",
          ],
        },
      ],
      results: [
        {
          title: "the petty archivist",
          callout: "you do not forgive and you certainly do not forget. you keep a mental folder of every slight, backhanded compliment, and toxic moment you have ever experienced. you hold onto grudges because they make you feel protected, but carrying that much bitterness is making you exhausted. burn the receipts.",
        },
        {
          title: "the cold detachment",
          callout: "when someone crosses your line, they cease to exist. you don't fight, you don't plot revenge, you just flip a switch in your brain and delete their presence from your reality. it is a highly effective defense mechanism, but it also means you cut people off at the first sign of friction instead of working through normal conflict.",
        },
        {
          title: "the passive aggressive sniper",
          callout: "you are terrified of direct confrontation, so you channel all your anger into subtle, invisible warfare. you use sarcasm, excluded group plans, and backhanded jokes to punish people who hurt you. you think you are being clever, but everyone can feel the toxic energy radiating off you. just tell them you are mad.",
        },
        {
          title: "the obsessed rival",
          callout: "you claim you hate this person, but you know exactly what they are doing, who they are dating, and what they posted four hours ago. your grudge has morphed into a weird, twisted obsession where you are constantly competing with a ghost. the best revenge is actually moving on, not stalking their spotify activity.",
        },
      ],
    },
    {
      id: "the-group-chat-pathology",
      title: "the group chat pathology",
      blurb: "what is your specific brand of social toxicity in a shared digital space?",
      questions: [
        {
          text: "the group chat has been completely dead for three days. what is your contribution?",
          options: [
            "dropping a random, out of context tiktok link with zero explanation and leaving again.",
            "asking a highly controversial, chaotic question just to watch everyone start arguing.",
            "nothing. i refuse to be the first person to speak, i will wait for someone else to break the silence.",
            "sending a slightly dramatic text about my own life to see who actually cares enough to reply.",
          ],
        },
        {
          text: "two people in the group are having a tense, serious argument in the chat. what is your role?",
          options: [
            "sitting entirely quiet in the chat while secretly texting a third friend on the side to gossip about it.",
            "stepping in as the unpaid mediator trying to force everyone to see both sides and calm down.",
            "dropping a meme or a completely unrelated question right in the middle of their fight.",
            "liking or emphasizing the messages of the person i agree with without actually typing a word.",
          ],
        },
        {
          text: "you suggest a plan and nobody replies for four hours. what does your brain do?",
          options: [
            "immediately delete the message to erase the humiliation of being ignored.",
            "text \"wow okay then\" to guilt trip everyone into responding out of pity.",
            "assume everyone has a separate group chat without me where they are currently making fun of my idea.",
            "shrug and make plans with a completely different friend group instead.",
          ],
        },
        {
          text: "what is your biggest toxic trait when it comes to keeping secrets in a group?",
          options: [
            "i tell the secret to \"just one other person\" who i trust, entirely defeating the point of the secret.",
            "i hint that i know something huge but refuse to say what it is just to hold power over the room.",
            "i forget what is a secret and what is public knowledge and accidentally bring it up at the worst time.",
            "i use secrets as leverage in my head, categorizing everyone based on the dirt i have on them.",
          ],
        },
        {
          text: "how do you react when someone new is added to your established group chat?",
          options: [
            "i become weirdly territorial and act slightly colder to them to prove i am the core member.",
            "i overcompensate by being super welcoming to the point where it feels unnatural and forced.",
            "i analyze their texting style and grammar to decide if they fit our vibe before engaging.",
            "i retreat and stop talking as much because the dynamic feels ruined now.",
          ],
        },
      ],
      results: [
        {
          title: "the phantom instigator",
          callout: "you love the drama, but you refuse to get your hands dirty. you drop chaotic links, ask loaded questions, and watch the group chat burn from the sidelines. you use side chats to gossip while playing innocent in the main group. you treat your friends like reality tv characters instead of actual people.",
        },
        {
          title: "the fragile center",
          callout: "you require constant validation from the group chat to feel secure. if people don't laugh at your joke or reply to your plan, you immediately spiral into guilt trips, deleted messages, or passive aggressive silence. the group chat is not a mirror for your self worth, people are just busy putting their phones down.",
        },
        {
          title: "the conversational narcissist",
          callout: "you only participate in the group chat when the topic is directly related to you. if people are talking about a movie, a test, or their own lives, you disappear. but the second you have a minor inconvenience, you flood the chat with paragraphs. you are using your friends as a sounding board, not a conversation.",
        },
        {
          title: "the detached lurker",
          callout: "you read every single message, track every single fight, and know everyone's business, but you contribute absolutely nothing. you are the fbi agent of the group chat. people think you are just busy, but in reality, you just like having access to the social circle without having to put in the effort of being a real friend.",
        },
      ],
    },
    {
      id: "the-jealousy-metric",
      title: "the jealousy metric",
      blurb: "what happens in your brain when someone else gets exactly what you wanted?",
      questions: [
        {
          text: "your best friend just got a massive opportunity (a relationship, a job, an award) that you have been struggling to get for a year. what is your first raw thought?",
          options: [
            "\"they only got that because they got lucky, they didn't even work as hard as i did for it.\"",
            "\"i am fundamentally broken and the universe is actively keeping me from being happy.\"",
            "\"i need to immediately pretend i am thrilled for them so nobody realizes how much i want to cry.\"",
            "\"how can i copy the exact steps they took so i can get the same thing next month?\"",
          ],
        },
        {
          text: "you see someone on social media who has your exact dream aesthetic and lifestyle. what do you do?",
          options: [
            "quietly judge the tiny details of their life to prove to myself that they are actually miserable behind the scenes.",
            "scroll endlessly through their page, compare every aspect of my life to theirs, and ruin my own day.",
            "completely mute or block them because perceiving someone cooler than me makes me irrationally angry.",
            "buy three items of clothing they have in an attempt to absorb their personality.",
          ],
        },
        {
          text: "how do you act when you introduce two of your friends and they start hanging out without you?",
          options: [
            "i immediately distance myself from both of them because i feel replaced and humiliated.",
            "i make passive aggressive comments about how they are \"besties now\" whenever i see them.",
            "i convince myself i never really liked either of them anyway and pretend i don't care.",
            "i try to force myself into all their plans so they can't develop inside jokes without me.",
          ],
        },
        {
          text: "someone compliments a unique trait of yours, but then praises someone else in the room for the exact same thing. what happens?",
          options: [
            "the compliment is immediately ruined for me. if we both have it, it is no longer special.",
            "i smile, but silently analyze the other person to see who is actually better at it.",
            "i hype the other person up loudly to hide the fact that my ego just took a massive hit.",
            "i bring up a different, totally unrelated skill i have to regain the spotlight.",
          ],
        },
      ],
      results: [
        {
          title: "the bitter detective",
          callout: "when someone succeeds, your toxic reflex is to invalidate it. you look for their flaws, attribute their success to luck, and judge them silently. you think pulling others down in your head makes your lack of progress feel better. it doesn't. their success is not a spotlight on your failure.",
        },
        {
          title: "the self destructing comparison",
          callout: "you don't get mad at other people for succeeding, you get mad at yourself. jealousy sends you into a dark spiral of self hatred where you convince yourself you are falling behind in life. you use other people's highlight reels as a weapon to beat up your own self esteem. get off the internet.",
        },
        {
          title: "the territorial mimic",
          callout: "when you see someone with the vibe, friend, or success you want, you try to absorb it. you copy their outfits, force your way into their circles, and mirror their habits. you are so desperate to have what they have that you are completely losing your own authentic identity in the process.",
        },
        {
          title: "the spotlight monopolist",
          callout: "you need to be the most unique, special, and interesting person in every room. if someone else shares your aesthetic, gets a compliment, or matches your energy, you feel threatened. you cannot handle sharing the stage. you need to realize that other people shining does not turn your lights off.",
        },
      ],
    },
    {
      id: "the-oversharing-reflex",
      title: "the oversharing reflex",
      blurb: "why do you tell strangers your deepest traumas at 2 am?",
      questions: [
        {
          text: "you just met someone new at a party and you are sitting alone with them. what comes out of your mouth?",
          options: [
            "a highly curated, funny story about a terrible thing that happened to me, delivered like a stand up routine.",
            "absolute silence. i ask them questions about themselves so i don't have to reveal a single personal detail.",
            "my entire childhood backstory, three recent anxieties, and a secret i haven't even told my best friend.",
            "a fake, slightly cooler version of my life that makes me sound way more interesting and stable than i am.",
          ],
        },
        {
          text: "why do you usually end up oversharing in the first place?",
          options: [
            "because any silence in a conversation feels physically agonizing and i use words to fill the void.",
            "because i want the other person to feel bad for me so they go easy on me and lower their expectations.",
            "because i think treating trauma like casual trivia makes me look mysterious and edgy.",
            "because i get a temporary high from feeling deeply connected to someone, even if it's completely fake.",
          ],
        },
        {
          text: "it is the morning after you spilled all your secrets to someone. how do you feel?",
          options: [
            "a crushing, nauseating wave of vulnerability hangover. i want to move to a new city and change my name.",
            "completely fine. i don't actually care about the things i shared, i just used them as conversation starters.",
            "paranoid that they are currently using my secrets against me in a different group chat.",
            "i immediately text them again to trauma dump even more because the floodgates are officially open.",
          ],
        },
        {
          text: "someone tries to offer you genuine emotional support after you overshare. what is your reaction?",
          options: [
            "i immediately make a joke to deflect the sincerity because actual pity makes my skin crawl.",
            "i absorb the attention completely and keep complaining so they continue comforting me.",
            "i get defensive, act like it's not a big deal, and make them feel weird for caring.",
            "i switch the topic instantly. i just wanted to hear myself talk, i didn't actually want help.",
          ],
        },
      ],
      results: [
        {
          title: "the vulnerability hangover victim",
          callout: "you use oversharing as a panic response to awkwardness. you spill your guts to fill the silence, and then spend the next 48 hours agonizing over how cringey and exposed you feel. you are treating strangers like therapists because you are terrified of silence. you are allowed to just sit there and say nothing.",
        },
        {
          title: "the stand-up tragic",
          callout: "you wrap your darkest, most personal issues in heavy irony and present them as funny anecdotes. you trauma dump on people, but because you are laughing, they don't know how to react. you think it makes you look healed and self-aware, but it really just makes the people around you deeply uncomfortable.",
        },
        {
          title: "the engineered intimacy",
          callout: "you use trauma dumping to speed-run relationships. you drop heavy secrets on new people to force a false sense of deep connection. it works temporarily, but because the foundation is built on heavy baggage instead of actual trust, the friendship burns out in three weeks. slow down and talk about normal things.",
        },
        {
          title: "the emotional sponge",
          callout: "you share your problems because you are addicted to the pity and comfort of others. you don't actually want solutions or therapy, you just want an audience to validate that your life is hard. you drain the energy of everyone around you because every conversation inevitably circles back to your misery.",
        },
      ],
    },
    {
      id: "the-self-sabotage-blueprint",
      title: "the self-sabotage blueprint",
      blurb: "how do you ruin a perfectly good situation just to feel in control?",
      questions: [
        {
          text: "things in your life are finally going incredibly well. you are happy. what does your brain do?",
          options: [
            "scan the horizon obsessively looking for the hidden disaster that is definitely about to ruin everything.",
            "get extremely bored. peace feels like stagnation, so i start a completely unnecessary argument.",
            "convince myself that i tricked everyone and i don't actually deserve any of this success.",
            "distance myself from the people i love so they can't abandon me when things inevitably go wrong.",
          ],
        },
        {
          text: "you have a massive, life changing project or paper due in exactly three days. where are you?",
          options: [
            "redesigning my entire notion template and cleaning my baseboards instead of opening the document.",
            "sitting on my bed paralyzed by anxiety, watching hours of video essays while a knot forms in my stomach.",
            "doing the entire thing right now, but deciding it's completely worthless and contemplating deleting it all.",
            "starting five completely new, unrelated hobbies to convince myself i am still being productive.",
          ],
        },
        {
          text: "someone tells you they love you, or really care about you, with complete sincerity. your internal reaction?",
          options: [
            "\"they are lying, or they are just saying that because they want something from me.\"",
            "\"they only love the version of me i created for them, if they saw the real me they would run.\"",
            "a sudden, overwhelming urge to push them away or act cold to see if they will fight to stay.",
            "i cringe. genuine affection feels suffocating and makes me want to physically escape the room.",
          ],
        },
        {
          text: "how do you handle your own personal goals when nobody is watching or holding you accountable?",
          options: [
            "i abandon them immediately. if there is no audience to praise me, i do not see the point of trying.",
            "i set the bar so impossibly high that i fail on day two, which proves my theory that i am a failure.",
            "i constantly change the goal right before i reach it so i can remain in a permanent state of striving.",
            "i research the goal for three weeks, buy all the supplies, and then literally never start.",
          ],
        },
      ],
      results: [
        {
          title: "the chaos manufacturer",
          callout: "you have spent so much of your life in survival mode that actual peace feels terrifying. when your life is stable, you feel bored and paranoid. you pick fights, break habits, and ruin good relationships just to get that familiar hit of chaotic adrenaline. you are setting your own house on fire just to have something to do.",
        },
        {
          title: "the perfectionist paralyzer",
          callout: "your toxic trait is believing that if you can't do something flawlessly, you shouldn't do it at all. you sabotage yourself by waiting for the \"perfect moment\" or the \"perfect mood\" which literally never arrives. you use procrastination as a shield to protect your ego from the reality of being a messy beginner.",
        },
        {
          title: "the preemptive ejector",
          callout: "you destroy relationships and opportunities before they can destroy you. you push people away, act cold, and quit early because you want to be the one holding the gun. you think leaving first makes you powerful, but it's actually just cowardice. you are guaranteeing your own loneliness just to avoid being surprised by it.",
        },
        {
          title: "the imposter architect",
          callout: "no matter what you achieve, you refuse to let yourself enjoy it. you credit your success to luck, timing, or manipulation. you sabotage your own happiness by constantly moving the goalposts so you never actually get to feel proud of yourself. let yourself win for five minutes without finding a flaw in the victory.",
        },
      ],
    },
    {
      id: "the-conflict-evasion-strategy",
      title: "the conflict evasion strategy",
      blurb: "what lies do you tell yourself to avoid having a slightly uncomfortable conversation?",
      questions: [
        {
          text: "a friend owes you a decent amount of money and it has been three weeks. how do you get it back?",
          options: [
            "i don't. i eat the cost and harbor deep, silent resentment toward them for the rest of my life.",
            "i text them a highly aggressive venmo request at 2 am with zero context and go to sleep.",
            "i bring up a totally unrelated topic about how broke i am right now, hoping they take the hint.",
            "i make a self deprecating joke about paying rent and sandwich the request between three laughing emojis.",
          ],
        },
        {
          text: "someone is doing a behavior that is actively driving you insane (chewing loudly, interrupting, being late). what do you do?",
          options: [
            "sigh heavily, shift my body language, and look annoyed, but say \"nothing\" when they ask what's wrong.",
            "completely distance myself from them and stop hanging out with them without ever explaining why.",
            "snap at them over something completely different and unrelated because the pressure built up too high.",
            "complain about it to five different mutual friends behind their back but smile to their face.",
          ],
        },
        {
          text: "you are drafting a text to confront someone about something they did wrong. what does the draft look like?",
          options: [
            "five paragraphs of pure emotional devastation that i will eventually delete and replace with \"we need to talk.\"",
            "a cold, clinical, hyper-logical bullet point list of every boundary they crossed.",
            "i type and delete the message for three hours, then decide my feelings are stupid and text \"hey what's up\" instead.",
            "a message that softens the blow so much that it doesn't even sound like i'm mad anymore.",
          ],
        },
        {
          text: "why do you actually hate confrontation?",
          options: [
            "because i cry when i get angry, and crying makes me feel weak and out of control.",
            "because i am terrified that if i show any friction, the other person will abandon me completely.",
            "because i don't trust myself not to absolutely destroy the other person with words i can't take back.",
            "because it's exhausting and i genuinely do not have the energy to care about fixing the issue.",
          ],
        },
      ],
      results: [
        {
          title: "the resentful doormat",
          callout: "you avoid conflict by just absorbing the damage. you let people borrow money, cross boundaries, and waste your time, and you tell yourself you are just being \"chill.\" you aren't chill, you are terrified. you are trading your own self respect for temporary peace, and it is slowly turning you into a bitter person.",
        },
        {
          title: "the passive aggressive pressure cooker",
          callout: "you refuse to address issues directly, so they leak out of you in toxic, subtle ways. you sigh, roll your eyes, make sarcastic comments, and complain to third parties. you want people to read your mind and fix the problem without you having to be brave enough to say the words. grow up and speak clearly.",
        },
        {
          title: "the ghosting pacifist",
          callout: "instead of having a ten minute uncomfortable conversation, you will end a five year friendship. you use silence, distance, and ghosting as your primary conflict resolution tools. you think you are protecting your peace, but you are actually just leaving a trail of confused, hurt people in your wake.",
        },
        {
          title: "the emotional backpedaler",
          callout: "you get the courage to confront someone, but the second they look slightly upset, you immediately back down. you soften your texts, apologize for being mad, and take all the blame just to smooth things over. you are more concerned with their comfort than your own boundaries. stand your ground for once.",
        },
      ],
    },
    {
      id: "the-attention-deficit",
      title: "the attention deficit",
      blurb: "how do you act when you feel completely ignored for more than ten minutes?",
      questions: [
        {
          text: "you are telling a story in a group setting and someone talks over you. nobody notices you stopped talking. what do you do?",
          options: [
            "pull out my phone, physically turn my body away from the group, and refuse to speak for the next hour.",
            "aggressively interrupt the person who interrupted me by getting twice as loud and repeating my sentence.",
            "wait for a pause, then say \"anyway, as i was saying before i was cut off...\" while glaring at them.",
            "smile, nod along to the new conversation, and internalize the belief that what i have to say is worthless.",
          ],
        },
        {
          text: "you post a photo or video you felt super confident about, and it completely flops. what is the protocol?",
          options: [
            "delete it within twenty minutes. if it is not perceived by the masses, it does not exist.",
            "leave it up to prove i don't care about numbers, but check it obsessively every three minutes.",
            "post something chaotic, sad, or vague on my story immediately after to force people to interact with me.",
            "suddenly decide the app is toxic, complain about the algorithm, and log off in a bad mood.",
          ],
        },
        {
          text: "your friend has been talking about their own problems for thirty minutes and hasn't asked about you once. what is your move?",
          options: [
            "suddenly invent a massive, dramatic crisis in my own life to yank the spotlight back to me.",
            "give them completely flat, one word responses until they finally realize i am annoyed.",
            "zone out completely, let my eyes glaze over, and just nod while planning my grocery list in my head.",
            "forcefully interject with a story about myself that relates to their problem, but make it sound way worse.",
          ],
        },
        {
          text: "what is your most toxic method of fishing for compliments?",
          options: [
            "posting a photo where i look amazing but adding a caption complaining about how ugly i look.",
            "fishing for reassurance by saying \"i'm such a bad friend\" so they are forced to say \"no you're not!\"",
            "complimenting them first, solely because the social contract forces them to compliment me back.",
            "going completely silent and looking sad until someone is forced to ask what is wrong and comfort me.",
          ],
        },
      ],
      results: [
        {
          title: "the silent punisher",
          callout: "when you don't get the attention you want, you throw a quiet, invisible tantrum. you shut down, stare at your phone, and project a dark aura to punish the room for ignoring you. you want people to beg you to speak, but most of the time they just think you're in a bad mood. use your words if you want to be included.",
        },
        {
          title: "the crisis architect",
          callout: "you treat attention as a zero-sum game, and if you aren't winning, you will manufacture a crisis. you post vague sad stories, trauma dump, or invent drama just to force people to look at you. relying on pity and panic to keep people engaged with you is exhausting for everyone involved.",
        },
        {
          title: "the validation accountant",
          callout: "your entire self worth is tethered to a digital slot machine. if a post flops, your outfit gets ignored, or a text goes unanswered, you immediately spiral into feeling worthless. you delete posts to hide your \"failure\" because you view attention as currency. you need to find a way to like yourself when the room is empty.",
        },
        {
          title: "the conversational hijacker",
          callout: "you are incapable of letting someone else hold the microphone. if someone tells a story, yours is crazier. if someone is sad, your trauma is worse. you disguise this as \"relating\" to them, but really you just cannot stand the physical sensation of not being the main character of every dialogue. learn to just listen.",
        },
      ],
    },
    {
      id: "the-false-empathy-check",
      title: "the false empathy check",
      blurb: "are you actually a good listener or are you just waiting for your turn to speak?",
      questions: [
        {
          text: "a friend is crying over a breakup that you warned them was going to happen six months ago. what do you say?",
          options: [
            "\"i am so sorry, that is awful,\" while secretly feeling a massive ego boost because i was right all along.",
            "\"i told you so, you need to block them right now and move on.\"",
            "i try to instantly distract them with a fun plan or a joke because crying makes me feel physically trapped.",
            "i relate it back to a terrible breakup i went through and talk about my own ex for twenty minutes.",
          ],
        },
        {
          text: "when someone comes to you with a deep, emotional problem, how do you categorize it in your head?",
          options: [
            "a puzzle that i need to aggressively solve for them with logic, even if they just wanted to vent.",
            "a burden. i nod and smile, but internally i am exhausted that they are using me as a therapist again.",
            "a bonding opportunity. i dig for all the juicy details and gossip under the guise of \"being there for them.\"",
            "a performance. i say all the right therapy words, but i don't actually feel any emotional connection to it.",
          ],
        },
        {
          text: "someone describes a situation that you genuinely cannot relate to at all. how do you respond?",
          options: [
            "i pretend i completely understand, use generic phrases like \"that's so crazy,\" and hope they stop talking.",
            "i force a connection by bringing up something mildly similar that happened to me, missing the point entirely.",
            "i hit them with toxic positivity. \"everything happens for a reason! you got this!\"",
            "i play devil's advocate and try to explain the other side of the situation, immediately invalidating their feelings.",
          ],
        },
        {
          text: "why do you typically offer advice to people?",
          options: [
            "because i want to feel wise, important, and needed by the people around me.",
            "because watching people make stupid decisions stresses me out and i want to control the outcome.",
            "because it is the fastest way to wrap up the conversation so i can go back to doing my own thing.",
            "because i want them to owe me a favor or see me as their savior later down the line.",
          ],
        },
      ],
      results: [
        {
          title: "the detached mechanic",
          callout: "you view people's emotional pain as a math equation that needs solving. you interrupt their crying to give them bullet-point action plans. you think you are being helpful, but really, emotions make you uncomfortable, so you try to fix the problem as fast as possible to make the feelings go away. just let people be sad.",
        },
        {
          title: "the toxic optimist",
          callout: "you cannot handle sitting in the dark with someone. when someone tells you a tragedy, you hit them with \"good vibes only\" or \"look on the bright side.\" you use fake positivity to bulldoze over their pain because holding space for negativity ruins your curated aesthetic. it's okay to admit that things just suck sometimes.",
        },
        {
          title: "the narrative thief",
          callout: "you disguise your narcissism as empathy. whenever someone opens up to you, you manage to steer the conversation back to your own life within three sentences. you think saying \"i went through the exact same thing!\" is helpful, but it really just steals their moment to be heard. stop trying to out-suffer everyone.",
        },
        {
          title: "the emotional voyeur",
          callout: "you love when people bring you their problems, not because you care about healing them, but because you love the drama. you dig for the messy details and act like a supportive friend, but really you just want a front row seat to the chaos. you are treating their real life crisis like a podcast episode.",
        },
      ],
    },
    {
      id: "the-covert-narcissism-scale",
      title: "the covert narcissism scale",
      blurb: "how do you secretly convince yourself you are the only real person in the room?",
      questions: [
        {
          text: "you are at a party where everyone is listening to mainstream music and talking about popular trends. what is your internal monologue?",
          options: [
            "\"i am fundamentally deeper and more complex than everyone in this room, they are all just npcs.\"",
            "\"i need to act exactly like them so they accept me, even though i secretly hate all of this.\"",
            "\"i am going to casually name drop an obscure artist to prove my cultural superiority.\"",
            "\"i feel so alienated and misunderstood, my life is a tragic indie film and no one gets it.\"",
          ],
        },
        {
          text: "someone tries to introduce you to a movie, song, or hobby that you have secretly been into for three years. what happens?",
          options: [
            "i lie and say i haven't heard of it, let them explain it, and judge their basic understanding of it.",
            "i immediately cut them off and aggressively list five obscure facts about it to prove i was there first.",
            "i scoff and say \"yeah, i liked them back before they blew up on tiktok, they're kind of ruined now.\"",
            "i act polite, but permanently lower my respect for the thing because the masses have discovered it.",
          ],
        },
        {
          text: "how do you handle genuine, constructive criticism from a teacher, boss, or peer?",
          options: [
            "i nod, agree with them, and then completely ignore the advice because i secretly know my way is better.",
            "i convince myself they are just intimidated by my potential or secretly jealous of my natural talent.",
            "i hyper-fixate on the tiny flaw they pointed out until my entire self worth crumbles into dust.",
            "i argue with them on a technicality to prove that their criticism is actually invalid based on semantics.",
          ],
        },
        {
          text: "what is your core belief about your own future?",
          options: [
            "i am destined for massive, cinematic greatness, and the current boring phase of my life is just the backstory.",
            "i am going to fail completely because the world is rigged against people who are as sensitive as me.",
            "i will eventually be discovered by someone who recognizes my hidden genius without me having to try hard.",
            "i will have to fake my way through everything because everyone else is pretending too, i'm just smarter about it.",
          ],
        },
        {
          text: "you do a nice favor for a friend and they say \"thank you,\" but they don't make a huge deal out of it. how do you feel?",
          options: [
            "secretly furious. i track the favor in my head and expect a parade for doing the bare minimum.",
            "i remind them of it casually three times over the next week so they don't forget they owe me.",
            "completely fine, i actually prefer not being perceived when i do good things.",
            "i feel hollow. if i don't get immense, overwhelming praise, the good deed feels completely pointless.",
          ],
        },
      ],
      results: [
        {
          title: "the tortured genius",
          callout: "you use your feeling of being \"misunderstood\" as a shield against trying. you convince yourself you are deeper, smarter, and more complex than everyone else to justify why you feel so isolated. you label people as basic or shallow because you are terrified of actually attempting to connect with them. you are not a tragic hero, you're just pretentious.",
        },
        {
          title: "the underground gatekeeper",
          callout: "your entire personality is built on knowing things before other people do. you treat music, fashion, and hobbies like exclusive clubs, and you get actively angry when they become popular. this isn't having good taste, this is a desperate need to feel special. let people enjoy things without auditing their fan credentials.",
        },
        {
          title: "the silent superior",
          callout: "you don't brag out loud, but your internal monologue is a constant broadcast of how much better you are than everyone else. you smile politely while secretly dismissing everyone's opinions, tastes, and advice. you think this makes you quietly confident, but it's actually just covert arrogance covering up a deep fear of being average.",
        },
        {
          title: "the transactional martyr",
          callout: "you do nice things for people entirely for the applause. you view friendships, favors, and support as a currency system where you are always keeping score. when people don't worship you for being a \"good person,\" you get deeply resentful. you need to learn how to do something kind without demanding a spotlight for it.",
        },
      ],
    },
  ],
};
