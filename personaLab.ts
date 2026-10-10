import type { Category } from "../types";

export const personaLab: Category = {
  id: "persona-lab",
  num: "05",
  name: "persona lab",
  color: "#FFF4A3",
  tagline: "who you act like vs who you are.",
  quizzes: [
    {
      id: "the-chill-facade-index",
      title: "the \"chill\" facade index",
      blurb: "how much pure anxiety is hiding behind your deadpan delivery?",
      questions: [
        {
          text: "you just received a text that completely ruined your plans for the weekend. how do you respond?",
          options: [
            "\"no worries at all, totally get it!\" while physically throwing my phone onto the bed in a fit of rage.",
            "\"all good\" followed by me sitting in absolute silence for twenty minutes mourning the loss of the plan.",
            "i leave it on read for four hours to prove i am too busy and unbothered to care, then reply \"cool.\"",
            "i send back a funny meme about being canceled on to mask the fact that i am genuinely hurt.",
          ],
        },
        {
          text: "your room is a complete disaster, but you have a zoom call or someone is coming over. what is the protocol?",
          options: [
            "shove absolutely everything into the closet, under the bed, or out of frame so the visible square looks flawless.",
            "apologize profusely for the mess the second they perceive it, even if they didn't actually notice.",
            "leave it messy and make a self deprecating joke about how feral my living space is to beat them to the punch.",
            "i don't let people see my space. i will take the call in my car or meet them at a coffee shop instead.",
          ],
        },
        {
          text: "you are secretly hyper-fixated on a new hobby or interest, but a friend asks what you've been up to lately.",
          options: [
            "i downplay it entirely. \"oh just hanging out, watching some shows, nothing crazy.\"",
            "i casually mention it, but only the parts that sound cool, leaving out the fact that i spent twelve hours researching it yesterday.",
            "i dump a massive amount of information on them, instantly regret it, and then say \"but yeah anyway whatever.\"",
            "i pretend i just discovered it yesterday so i don't look like a total obsessive nerd.",
          ],
        },
        {
          text: "someone asks if you are okay because you look a little stressed. what is your physical reaction?",
          options: [
            "i force my shoulders down, adjust my face into a blank stare, and say \"yeah i'm literally fine.\"",
            "i laugh aggressively loud and say \"i'm just tired!\" which is my default cover up for emotional collapse.",
            "i get weirdly defensive because i thought my mask was bulletproof and i hate being perceived accurately.",
            "i immediately pivot and ask them how they are doing to get the spotlight off my face.",
          ],
        },
      ],
      results: [
        {
          title: "the pressurized cynic",
          callout: "you walk around acting like nothing matters, but your internal resting heart rate is terrifying. you use sarcasm and deadpan humor to convince everyone that you are untouchable. you pretend to be chill because you think caring about things makes you look weak. caring isn't cringe, you are just terrified of being disappointed.",
        },
        {
          title: "the frantic minimalist",
          callout: "on the outside, you present a clean, neutral, unbothered aesthetic. you dress simple, you text simple, you act simple. but behind the scenes, you are micromanaging every single detail to maintain that illusion. you are paddling like a duck under water just to look like you are gliding smoothly on the surface.",
        },
        {
          title: "the ironic shield",
          callout: "you hide your actual passions, hurt feelings, and stress behind a thick wall of irony. if you make a joke about your own misery first, nobody else can use it against you. you act like you are in on the joke of your own life, but secretly you just want to be taken seriously for five minutes without having to be the funny one.",
        },
        {
          title: "the deflecting mirror",
          callout: "you are a master of redirecting attention. you act like a great listener and a chill friend, but it's just a tactic to keep people from looking too closely at your own life. you act completely unbothered because you refuse to let anyone see the cracks in your armor. let people perceive you, it won't kill you.",
        },
      ],
    },
    {
      id: "the-intimidating-armor",
      title: "the intimidating armor",
      blurb: "you dress like a villain but you secretly cry at dog videos on tiktok.",
      questions: [
        {
          text: "you are walking in public and realize you have a fierce resting angry face on. what do you do?",
          options: [
            "absolutely nothing. i want people to think i am mean so they stay out of my physical space.",
            "slightly soften my eyes or quickly check my phone so i look mysterious instead of just hostile.",
            "suddenly overcompensate by giving a tight, awkward smile to the next person who makes eye contact.",
            "keep the face on, but secretly hope someone cool approaches me anyway and sees past it.",
          ],
        },
        {
          text: "what dictates your daily outfit choices the most?",
          options: [
            "the exact level of unapproachable i want to be that day. dark colors mean do not speak to me.",
            "comfort masked as fashion. i want to look like i'm in a band but feel like i'm in pajamas.",
            "an imagined scenario of running into someone i hate and needing to look vastly superior to them.",
            "wanting to look put together so nobody realizes how chaotic my internal monologue is right now.",
          ],
        },
        {
          text: "someone actually pushes past your scary exterior and gives you a sweet, genuine compliment.",
          options: [
            "my brain short circuits. i mumble a very quiet thank you and immediately look at the floor.",
            "i say \"i know\" or make a sarcastic remark because accepting sincerity makes my skin crawl.",
            "i act completely unfazed on the outside, but i will remember this exact moment for the next six years.",
            "i instantly compliment them back with something twice as nice out of pure social panic.",
          ],
        },
        {
          text: "how do you act in a group chat versus how you act in a physical room with those same people?",
          options: [
            "i am a loud, chaotic menace online, but in person i sit in the corner and barely speak.",
            "i type in perfect lowercase with zero punctuation online to look chill, but in person i am highly animated.",
            "i am exactly the same. the intimidating aura translates perfectly across all mediums.",
            "i am super warm and supportive in texts, but my physical face just constantly looks like i am judging them.",
          ],
        },
      ],
      results: [
        {
          title: "the soft goth",
          callout: "you dress like you are about to curse someone's bloodline, but your internal soul is basically a golden retriever. you use dark clothes, sharp eyeliner, or a blank stare as a physical fence because you are highly sensitive to other people's energy. you want to protect your peace, but sometimes you accidentally scare off the people who actually want to know you.",
        },
        {
          title: "the keyboard warrior",
          callout: "you have a massive disconnect between your digital persona and your physical reality. online, you are bold, funny, and assertive. you drop hot takes and carry the group chat. but the second you are in a crowded room, you lose your voice and shrink into your hoodie. your digital confidence is a crutch, try speaking up in real time.",
        },
        {
          title: "the accidental snob",
          callout: "you aren't actually mean, you are just socially terrified. your anxiety manifests as a completely blank, icy stare that makes everyone think you are judging them. you want people to talk to you, but your body language is screaming at them to back away. you have to actually initiate contact if you want to break the ice.",
        },
        {
          title: "the aesthetic fortress",
          callout: "you use fashion as armor. if your outfit is perfect, nobody can tell that you only got three hours of sleep and your life is a mess. you project intimidation because you want people to respect you before they even hear you speak. it works, but it also makes you incredibly lonely at the top of your self built pedestal.",
        },
      ],
    },
    {
      id: "the-fake-extrovert-stamina-test",
      title: "the fake extrovert stamina test",
      blurb: "how many hours can you pretend to be the life of the party before your soul leaves your body?",
      questions: [
        {
          text: "you are at a social event and you hit your exact socialization limit. what happens to your personality?",
          options: [
            "the charismatic mask drops instantly. my face goes completely flat and i stare blankly at the wall.",
            "i get weirdly hyper and start talking faster and louder because my brain is running on empty adrenaline.",
            "i slowly drift toward the kitchen, the pet, or the bathroom to hide and recharge for ten minutes.",
            "i don't let it drop. i force myself to keep smiling until i get in the car, where i immediately collapse.",
          ],
        },
        {
          text: "what is your signature move when you don't want to talk but still want to seem engaged?",
          options: [
            "nodding aggressively and saying \"no exactly, one hundred percent\" to everything they say.",
            "asking them a long, open ended question about themselves so they talk for twenty minutes uninterrupted.",
            "laughing at literally anything they say, even if it wasn't a joke, just to fill the dead air.",
            "maintaining intense eye contact while entirely planning my grocery list in my head.",
          ],
        },
        {
          text: "you are known in your group as the \"fun, outgoing one.\" how accurate is this label?",
          options: [
            "completely fake. i am just deeply afraid of awkward silences and i overcompensate to save the room.",
            "half true. i am fun for exactly three hours, and then i require three business days of pure isolation to recover.",
            "true, but only because i absorb the energy of whoever i am with. if they are quiet, i become quiet too.",
            "totally false. i am just loud. people confuse being loud with being extroverted.",
          ],
        },
        {
          text: "what does your perfect, ideal weekend look like versus what you actually tell people you did?",
          options: [
            "i did absolutely nothing, but i tell people i was \"running errands and catching up on stuff\" so i sound productive.",
            "i played video games in the dark, but i tell people i had a \"super chill self care weekend.\"",
            "i hung out with one specific person the whole time, but i make it sound like i was constantly busy.",
            "i rot in bed, and i proudly tell people i rotted in bed because i refuse to lie about my lack of energy.",
          ],
        },
      ],
      results: [
        {
          title: "the silence filler",
          callout: "you are not an extrovert, you are just socially anxious. you act like the life of the party because you cannot physically handle the tension of a quiet room. you tell jokes, ask questions, and carry conversations not because you want to, but because you feel like it is your job to keep everyone entertained. you can resign from that job whenever you want.",
        },
        {
          title: "the survival charismatic",
          callout: "you have mastered the art of the three hour sprint. you can be the most charming, engaging person in the room for a very specific window of time. after that window closes, you turn into a complete zombie. you put on a massive performance because you want to be liked, but the crash afterward is destroying your weekend peace.",
        },
        {
          title: "the interviewer disguise",
          callout: "people think you are super social and outgoing because you talk to everyone, but really you just interview them. you ask a million questions so they do all the talking and you never have to reveal anything real about yourself. you act like a talk show host to avoid being a genuine participant in the conversation.",
        },
        {
          title: "the reluctant mascot",
          callout: "your friends assigned you the role of the \"loud, fun friend\" years ago, and now you feel trapped in it. you act crazy and energetic because that is what they expect from you. if you showed up quiet and tired, they would think something is terribly wrong. you need to tell them that you are allowed to have low energy days without it being a crisis.",
        },
      ],
    },
    {
      id: "the-cynics-romantic-heart",
      title: "the cynic's romantic heart",
      blurb: "you act like love is a scam, but you have a secret wedding pinterest board.",
      questions: [
        {
          text: "your friends are gushing over a couple they saw online or in a movie. what is your verbal contribution?",
          options: [
            "\"it won't last, wait until they have to pay rent together.\"",
            "\"yeah they're cute i guess,\" while secretly hiding the fact that the video made me want to cry.",
            "i make a gagging noise and complain about how embarrassing public displays of affection are.",
            "i analyze the body language and point out a tiny flaw to prove they are actually toxic behind closed doors.",
          ],
        },
        {
          text: "someone you actually like starts showing genuine, unironic interest in you. what is your first reflex?",
          options: [
            "pure disgust. the second they like me back, i instantly lose interest and think they are cringe for liking me.",
            "i ignore their texts for hours to prove i am super independent and don't need their attention.",
            "i make fun of them, tease them relentlessly, and act like a mean older sibling instead of flirting.",
            "i assume it is a joke, a trap, or a dare, because nobody could possibly just like me normally.",
          ],
        },
        {
          text: "what is sitting at the very bottom of your liked videos or saved posts?",
          options: [
            "deeply devastating poetry or edits about soulmates and finding the right person.",
            "absolutely nothing. i am too paranoid to save anything romantic in case someone ever sees my screen.",
            "highly specific scenarios of domestic peace, like making coffee in a shared kitchen.",
            "toxic, dramatic relationship aesthetics that i pretend i hate but secretly find extremely cinematic.",
          ],
        },
        {
          text: "why do you project such a cold, unbothered attitude toward dating and romance?",
          options: [
            "because trying hard and still getting rejected is the most humiliating thing i can possibly imagine.",
            "because i am waiting for someone to see past the coldness and fight to prove they actually care.",
            "because the people my age are genuinely exhausting and i refuse to settle for bare minimum effort.",
            "because i built my whole personality on being the \"independent, sarcastic friend\" and i can't break character now.",
          ],
        },
      ],
      results: [
        {
          title: "the closeted hopeless romantic",
          callout: "you talk the biggest game about how romance is dead, but your internal world is a romantic comedy. you roll your eyes at couples in public, but you go home and listen to love songs in the dark. you use cynicism as a shield because you want a perfect, cinematic love story and you are terrified you will never actually get it.",
        },
        {
          title: "the ick manufacturer",
          callout: "you act like nobody is good enough for you, but really you are just terrified of intimacy. the second someone shows interest, you invent a reason to get the \"ick.\" they type too fast, they breathe weird, they like a bad movie. you use fake high standards to keep yourself safe from ever having to be vulnerable with another human being.",
        },
        {
          title: "the intellectual coward",
          callout: "you analyze love instead of feeling it. you act like you are above romance because you view it as irrational and messy. you quote psychology, attachment styles, and statistics to explain why dating is stupid. you use your big brain to protect your very fragile heart. you can't outsmart falling in love.",
        },
        {
          title: "the tough-love deflector",
          callout: "you act like a bully to the people you actually like. you tease them, roast them, and act completely unbothered by their presence because expressing genuine affection makes you feel weak. you want them to read your mind and know that your sarcasm actually means \"please don't leave,\" but they just think you're kind of mean.",
        },
      ],
    },
    {
      id: "the-academic-corporate-illusion",
      title: "the academic/corporate illusion",
      blurb: "everyone thinks you have it together. your bedroom floor says otherwise.",
      questions: [
        {
          text: "what does your workspace or desk look like right before a massive deadline?",
          options: [
            "a perfectly curated aesthetic setup with a lit candle, color coded notes, and an iced coffee. i haven't started working yet.",
            "completely buried in empty cups, loose papers, and chaos. i am working in the center of a trash tornado.",
            "i don't use the desk. i am working from my bed, hunched over like a gargoyle in absolute darkness.",
            "spotless. i spent three hours deep cleaning my entire room to avoid actually doing the assignment.",
          ],
        },
        {
          text: "someone tells you \"wow, you are always so on top of things!\" what is your internal monologue?",
          options: [
            "\"if you could see the duct tape and panic holding my life together, you would call the authorities.\"",
            "\"thank you, i sacrificed my entire social life and mental health to achieve this aesthetic.\"",
            "\"i literally submitted that project at 11:59 pm while actively weeping, but sure.\"",
            "\"i know. i am a machine.\" (i am secretly deeply burnt out and running on spite).",
          ],
        },
        {
          text: "how do you organize your tasks and responsibilities?",
          options: [
            "i buy a beautiful, fifty dollar planner, use it flawlessly for three days, and never open it again.",
            "i have fourteen different lists scattered across my phone notes, sticky notes, and the back of my hand.",
            "i keep it all in my head and rely entirely on a constant state of low level anxiety to remember things.",
            "i use a hyper complex digital database that took me longer to build than the actual work takes to do.",
          ],
        },
        {
          text: "how do you handle failing or getting a bad grade/review on something you actually tried on?",
          options: [
            "i act like i didn't care anyway. \"whatever, that class is useless.\"",
            "i hide it completely. nobody will ever know. i will forge a fake reality before i admit defeat.",
            "i completely spiral, question my entire future, and decide i am destined to live in the woods.",
            "i immediately pivot to a new aesthetic. if i can't be the smart one, i will be the mysterious creative one.",
          ],
        },
      ],
      results: [
        {
          title: "the aesthetic procrastinator",
          callout: "you act like a highly productive academic weapon, but you are just playing dress-up. you spend more time setting up your workspace, making schedules, and romanticizing the idea of studying than you do actually working. you use productivity aesthetics as a mask to hide the fact that you have zero actual time management skills.",
        },
        {
          title: "the duck syndrome",
          callout: "on the surface, you are gliding gracefully. you get good grades, you show up on time, and you look put together. under the water, you are paddling frantically in a state of pure panic. you refuse to ask for help because your entire identity is built on being the \"capable one.\" let the illusion drop before you break down.",
        },
        {
          title: "the chaotic genius",
          callout: "you present yourself as a disaster. you complain about being behind, you work in a messy room, and you always talk about how much you are struggling. but secretly, you always pull it off at the last second and get top marks. you act like a mess so people lower their expectations, which makes your inevitable success look even more impressive.",
        },
        {
          title: "the imposter architect",
          callout: "you have convinced everyone, maybe even yourself, that you know what you are doing. you use complex systems, big words, and a serious demeanor to look like a professional. but internally, you feel like a fraud who is one bad day away from being exposed. spoiler alert: everyone is faking it, your mask is just better.",
        },
      ],
    },
    {
      id: "the-i-dont-care-paradox",
      title: "the \"i don't care\" paradox",
      blurb: "you claim you don't care about anything, yet you are currently stressed out.",
      questions: [
        {
          text: "you are playing a casual, low-stakes game with friends and you are losing badly. how do you act?",
          options: [
            "i start purposely playing worse or messing around to prove i am not trying, so my loss doesn't count.",
            "i act super bored, check my phone, and say \"are we almost done with this?\"",
            "i get quiet, smile tightly, and secretly plot my revenge for the next round while pretending i'm chill.",
            "i aggressively double down, stop talking, and sweat bullets trying to win the stupid game.",
          ],
        },
        {
          text: "someone leaves you on read in the middle of a decent conversation. what is your strategy?",
          options: [
            "i immediately delete the app or swipe out of the chat so i don't have to look at the humiliation.",
            "i post something looking incredible on my story thirty minutes later to prove i am busy and thriving.",
            "i rationalize it. \"they fell asleep, they got busy, it doesn't matter,\" while checking it every ten minutes.",
            "i permanently change my opinion of them and mentally demote them to acquaintance status.",
          ],
        },
        {
          text: "you trip in public, drop something, or do something minorly embarrassing. what is the persona response?",
          options: [
            "i laugh out loud by myself to show everyone around me that i am totally in on the joke.",
            "i do not break my stride. i keep a completely deadpan face and walk away like it was a performance art piece.",
            "i look angrily at the ground or the object, blaming the architecture of the world for my mistake.",
            "i instantly look at my phone to create a barrier between me and the perceived judgment of strangers.",
          ],
        },
        {
          text: "why is \"i don't care\" your favorite catchphrase?",
          options: [
            "because if i admit i care and things still go wrong, i have no excuse and my ego will shatter.",
            "because i am so overwhelmed by how much i actually care about everything that turning it off is my only defense.",
            "because caring implies effort, and i am terrified of putting in effort and being perceived as a try-hard.",
            "because i want to be viewed as an untouchable, mysterious figure who is above normal human emotions.",
          ],
        },
      ],
      results: [
        {
          title: "the closeted try-hard",
          callout: "you spend an exhausting amount of energy trying to look like you aren't trying at all. you want the good grades, the victory, and the praise, but you refuse to let anyone see you sweat for it. you sabotage your own efforts so you always have the excuse of \"i wasn't even trying anyway.\" it is okay to want things out loud.",
        },
        {
          title: "the apathy shield",
          callout: "you say \"i don't care\" fifty times a day, but your internal stress levels are through the roof. you use apathy as a shield against disappointment. if you pretend nothing matters to you, then nobody can ever take anything away from you. you are numbing your own joy just to avoid the possibility of sadness.",
        },
        {
          title: "the ego preserver",
          callout: "you act too cool for everything. games, trends, school spirit, social events. you sit on the sidelines acting like you are above it all, but secretly you are just terrified of looking silly. you judge people who participate because you wish you had the confidence to just be goofy and care about things without overthinking it.",
        },
        {
          title: "the defensive ghost",
          callout: "when things get slightly difficult or awkward, you evaporate. you claim you don't care about the text, the argument, or the event, so you just walk away. you use \"i don't care\" to justify your complete lack of communication and conflict resolution skills. you care deeply, you are just running away from the friction.",
        },
      ],
    },
    {
      id: "the-humor-defense-mechanism",
      title: "the humor defense mechanism",
      blurb: "if you stop making jokes for five minutes, what happens to the vibe?",
      questions: [
        {
          text: "the room you are sitting in goes completely, dead silent. nobody is talking. what do you do?",
          options: [
            "immediately drop the most unhinged, out of pocket comment just to shatter the tension.",
            "sit there comfortably. silence doesn't bother me, i'm not the court jester.",
            "physically vibrate with anxiety, make a weird noise, or ask a stupid question to force conversation.",
            "start softly roasting the person next to me to instigate a fun argument.",
          ],
        },
        {
          text: "a friend comes to you crying about a serious problem. your brain's immediate instinct is:",
          options: [
            "try to make a lighthearted joke about the situation to cheer them up, which immediately misreads the room.",
            "suppress every funny thought in my head, force my face into a serious mask, and act like a therapist.",
            "turn the attention to myself by telling a funny story about a time i messed up even worse.",
            "make a joke about how uncomfortable crying makes me, deflecting my inability to handle emotions.",
          ],
        },
        {
          text: "how do you respond when someone actually roasts you with a genuinely funny, but slightly mean, joke?",
          options: [
            "i laugh the loudest out of anyone to prove i am a good sport, but i memorize the exact wording to analyze later.",
            "i fire back immediately with something twice as mean. if we are playing this game, i am winning it.",
            "i act like i didn't hear it or didn't understand it, ruining the punchline entirely.",
            "i agree with them entirely and double down on the self-deprecation so they have nothing left to attack.",
          ],
        },
        {
          text: "what is the underlying theme of ninety percent of your jokes?",
          options: [
            "my own misery, lack of sleep, or inability to function as a normal human being.",
            "pointing out the absurd, cringey behavior of everyone else around me.",
            "completely surreal, meaningless internet brain-rot that makes no sense to outsiders.",
            "extremely sarcastic agreements to terrible ideas.",
          ],
        },
      ],
      results: [
        {
          title: "the self-deprecating shield",
          callout: "your persona is the lovable loser, but your reality is someone who is terrified of being critiqued. you make fun of your own flaws, looks, and mistakes before anyone else can do it. you act like you are the punchline because you think it makes you bulletproof. stop insulting yourself for laughs, your brain is starting to believe the jokes.",
        },
        {
          title: "the court jester",
          callout: "you are the designated funny friend. you act like a stand-up comedian twenty-four hours a day because you think humor is the only value you bring to the group. you are terrified that if you stop performing and just exist quietly, people will realize you are boring and leave you. you are allowed to just be a person, not a circus act.",
        },
        {
          title: "the aggressive deflector",
          callout: "you use humor like a weapon. you are highly sarcastic, quick to roast, and constantly teasing people. you project a confident, mean-funny persona because you refuse to let anyone get close enough to see your soft spots. if everyone is busy laughing or defending themselves, they can't ask you how you actually feel.",
        },
        {
          title: "the chaotic tension breaker",
          callout: "you cannot handle negative emotions. the second someone is sad, angry, or quiet, you use humor to forcefully change the channel. you act like the chaotic, funny friend, but really you just lack the emotional endurance to sit with heavy feelings. sometimes the room doesn't need a joke, it just needs you to listen.",
        },
      ],
    },
    {
      id: "the-artificial-mystery",
      title: "the artificial mystery",
      blurb: "are you actually mysterious, or do you just lack basic communication skills?",
      questions: [
        {
          text: "you are at a gathering and you are sitting in the corner not talking. what is the internal reason?",
          options: [
            "i am observing everyone, mentally taking notes, and waiting for someone interesting enough to talk to.",
            "i literally cannot think of a single normal thing to say and my brain is completely empty.",
            "i want someone to look across the room, wonder who the quiet person is, and come approach me.",
            "i am severely overstimulated by the lights and noise and i am just trying to survive until i can leave.",
          ],
        },
        {
          text: "what does your social media presence look like?",
          options: [
            "highly cryptic. blurry photos, no captions, zero context. i want people to guess what my life is like.",
            "i don't post at all because every time i try, i think it looks desperate and cringe, so i delete it.",
            "i post constantly, but exclusively chaotic memes or aesthetic re-posts. nothing about my actual personal life.",
            "i curate my profile to look like an indie film protagonist who only exists in coffee shops and bookstores.",
          ],
        },
        {
          text: "someone asks you a direct, personal question about your life or your past. how do you answer?",
          options: [
            "i give a super vague, one-sentence answer and immediately ask them a question to deflect.",
            "i overshare instantly, completely ruining the quiet persona i spent three hours building.",
            "i make a sarcastic joke and refuse to give them a straight answer to keep them guessing.",
            "i act like the question is invasive, even if it's normal, to make myself seem more complex.",
          ],
        },
        {
          text: "why do you secretly love being called \"hard to read\"?",
          options: [
            "because it means my mask is working and nobody can see the absolute panic happening behind my eyes.",
            "because i grew up feeling overlooked, so manufacturing an air of mystery is my way of forcing people to pay attention.",
            "because i think being understood means being average, and i desperately want to be seen as complex.",
            "i actually hate it. i want to be understood so badly, i just literally don't know how to express myself.",
          ],
        },
      ],
      results: [
        {
          title: "the forced enigma",
          callout: "you act like a dark, mysterious stranger from a novel, but it is a complete performance. you post cryptic stories, give short answers, and sit in corners because you are desperate to be found interesting. you think silence equals depth. drop the act. being warm and talkative doesn't make you basic, it makes you approachable.",
        },
        {
          title: "the terrified observer",
          callout: "people think you are a quiet, observant mastermind who sees everything. the reality? you are just paralyzed by social anxiety. you act mysterious by default because you are too afraid to speak up and say the wrong thing. you use the \"quiet and mysterious\" label to cover up the fact that you just don't know how to start a conversation.",
        },
        {
          title: "the deflection master",
          callout: "you project a persona of someone who has a rich, secret life that nobody knows about. you deflect personal questions and keep your social media vague. but the truth is, you keep people guessing because you are terrified that if they actually got to know the real you, they would find you completely ordinary. ordinary is fine.",
        },
        {
          title: "the aesthetic wallflower",
          callout: "you have built your entire persona around the aesthetic of isolation. you romanticize being the loner, the outsider, the misunderstood genius. but secretly, you are incredibly lonely. you act like you don't want to be included, but you are just waiting for someone to force their way past your walls.",
        },
      ],
    },
    {
      id: "the-therapist-mask",
      title: "the therapist mask",
      blurb: "fixing their problems so you don't have to look at your own burning house.",
      questions: [
        {
          text: "you are having a genuinely terrible mental health day. a friend texts you saying they are having a crisis. what do you do?",
          options: [
            "immediately shove my own feelings into a box, put on my therapist voice, and call them to fix their life.",
            "ignore the text for six hours, then say \"sorry was busy, you okay?\" after the crisis has passed.",
            "tell them i am also having a crisis, turning it into a weird competition of who is doing worse today.",
            "give them very brief, generic advice so i can say i helped without actually spending any energy.",
          ],
        },
        {
          text: "why are you the person everyone in the group comes to for advice?",
          options: [
            "because i project an aura of having my entire life perfectly planned out and under control.",
            "because i am completely objective and i will give them the harsh truth that nobody else will say.",
            "because i never judge them, mostly because i am secretly doing way more toxic things in my own life.",
            "because i basically forced them to. i meddle in their business until they rely on me.",
          ],
        },
        {
          text: "what happens when someone tries to give YOU unsolicited advice?",
          options: [
            "i get instantly defensive. i am the one who fixes things, i do not need to be fixed by amateurs.",
            "i nod, smile, and say \"yeah that makes sense,\" and then do absolutely whatever i was going to do anyway.",
            "i feel completely exposed and humiliated that someone noticed i was struggling.",
            "i pivot the conversation immediately to point out a flaw in their logic to regain the upper hand.",
          ],
        },
        {
          text: "how do you actually cope with your own deep, unresolved issues?",
          options: [
            "i don't. i stay constantly busy solving other people's drama so the noise drowns out my own thoughts.",
            "i intellectualize them. i read psychology articles about my trauma instead of actually feeling it.",
            "i bottle them up until i have a completely irrational meltdown over something minor, like dropping a spoon.",
            "i craft an aesthetic around my sadness and post about it vaguely online instead of going to therapy.",
          ],
        },
      ],
      results: [
        {
          title: "the deflective healer",
          callout: "you act like the wise, stable parent of your friend group. you listen, you soothe, you solve. but this persona is a massive shield. you focus entirely on fixing other people's messy lives because looking at your own unresolved issues is too terrifying. you are using their drama as a distraction. you are allowed to take the cape off and be the mess for a day.",
        },
        {
          title: "the intellectual wall",
          callout: "you act like a clinical psychologist. you know all the buzzwords: gaslighting, attachment styles, narcissism. you project a persona of someone who is totally healed and self-aware. but the reality is you just over-analyze your feelings so you don't have to physically experience them. knowing why you are sad is not the same as actually processing it.",
        },
        {
          title: "the superior savior",
          callout: "you act like the generous, selfless friend who always gives great advice. but secretly, you enjoy it when your friends are struggling because it puts you in a position of power. dispensing wisdom makes you feel superior and in control. you project stability because you are terrified of being viewed as vulnerable or needy.",
        },
        {
          title: "the exhausted pillar",
          callout: "you project a persona of absolute, unshakable strength. you never complain, you never ask for help, and you carry everyone else's secrets. you act like you don't need anyone, but internally you are screaming for just one person to ask you how you are actually doing. you have to stop acting bulletproof if you want people to help you carry the weight.",
        },
      ],
    },
    {
      id: "the-low-maintenance-romantic",
      title: "the \"low-maintenance\" romantic",
      blurb: "you pretend you want to be left alone to avoid the humiliation of asking for attention.",
      questions: [
        {
          text: "you are dating someone or talking to a crush, and they haven't complimented you or given you attention in a few days. what is the persona response?",
          options: [
            "i act even colder and more distant than them. if they give me fifty percent, i give them ten percent.",
            "i casually mention other people or plans i have to prove my life is vibrant and full without them.",
            "i completely shut down, act totally fine, but harbor a deep, silent resentment that ruins my entire week.",
            "i post a really good photo on my story. i will not ask for attention, i will simply bait the trap.",
          ],
        },
        {
          text: "what is your stance on big romantic gestures (flowers, grand dates, public affection)?",
          options: [
            "i publicly call them cringe and say i just want to chill at home, but secretly i would die for flowers.",
            "i act like i'm above them because i'm \"too practical,\" but really i just know nobody will ever do it for me.",
            "i joke that they are basically manipulation tactics, deflecting from the fact that i crave being spoiled.",
            "i genuinely hate them. they make me feel perceived, trapped, and highly uncomfortable.",
          ],
        },
        {
          text: "how do you handle your own birthday?",
          options: [
            "i tell everyone \"please don't do anything big, i hate birthdays,\" and then get deeply depressed when they listen to me.",
            "i plan the entire thing myself because i refuse to trust anyone else to care enough to do it right.",
            "i disappear. i turn my phone on do not disturb and act like it's just a normal tuesday.",
            "i act chill leading up to it, but wear the most insane outfit possible on the actual day to demand silent attention.",
          ],
        },
        {
          text: "why do you project this specific \"chill, low-maintenance, whatever happens happens\" persona?",
          options: [
            "because being the \"cool\" partner/friend is the only way i know how to guarantee people won't find me annoying.",
            "because if i ask for what i actually want and they say no, the rejection will physically destroy me.",
            "because i watched someone else be high-maintenance and get made fun of for it, so i swung in the complete opposite direction.",
            "because i actually am low-maintenance, until my internal pressure cooker explodes every six months.",
          ],
        },
      ],
      results: [
        {
          title: "the closeted princess",
          callout: "you act like the coolest, most low-maintenance person on earth. you say you don't need texts, gifts, or grand gestures. but your reality is the exact opposite. you want the cinematic romance, the attention, and the flowers, but you are too proud and terrified of rejection to simply ask for them. people cannot read your mind. ask for the bare minimum.",
        },
        {
          title: "the preemptive rejector",
          callout: "you act like you don't care about romance or attention because you are trying to beat them to the punch. you think if you demand nothing, you can never be disappointed when they give you nothing. your \"chill\" persona is just a trauma response. you are settling for crumbs and pretending you are on a diet.",
        },
        {
          title: "the passive aggressive martyr",
          callout: "you tell everyone you don't want a big deal made out of your birthday or your achievements. you project complete humility. but when people actually listen to you and do nothing, you hold a massive, silent grudge against them. you are testing people to see if they will read your mind and spoil you anyway. it is a rigged game.",
        },
        {
          title: "the aesthetic minimalist",
          callout: "you project a persona of someone who is too indie, too dark, or too practical for traditional romance. you scoff at couples and hate typical dates. but this is just an aesthetic shield to cover up the fact that you feel completely unlovable in a traditional sense. you push romance away before it can push you away. let yourself be a little cringe.",
        },
      ],
    },
  ],
};
