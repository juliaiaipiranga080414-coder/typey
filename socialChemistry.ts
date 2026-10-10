import type { Category } from "../types";

export const socialChemistry: Category = {
  id: "social-chemistry",
  num: "04",
  name: "social chemistry",
  color: "#B4E7CE",
  tagline: "friendship dynamics, loyalty & drama.",
  quizzes: [
    {
      id: "the-third-wheel-index",
      title: "the third wheel index",
      blurb: "what happens when your two best friends make a silent inside joke right in front of you?",
      questions: [
        {
          text: "you are walking down a slightly narrow sidewalk with two other friends. what is your physical position?",
          options: [
            "i am the one who naturally gets pushed to the back, walking behind them while staring at their backs.",
            "i physically force my way into the middle and walk on the grass if i have to. i refuse to be left behind.",
            "i walk ahead of them and lead the way so it looks like they are following me.",
            "i constantly shift positions, trying to talk to whichever one is paying more attention to me.",
          ],
        },
        {
          text: "your two close friends hang out without you and post it on their story. what is your immediate internal reaction?",
          options: [
            "absolute devastation. i convince myself they have a secret pact to phase me out of the group.",
            "i reply to the story saying \"omg without me??\" to guilt trip them under the guise of a joke.",
            "i pretend i didn't see it, but i intentionally take four business days to reply to their next text.",
            "i genuinely don't care, i was probably busy rotting in bed anyway and didn't want to go.",
          ],
        },
        {
          text: "they bring up an inside joke or a memory from a day you weren't there. how do you handle the next sixty seconds?",
          options: [
            "i fake laugh along with them so i don't look bitter, but my smile is completely dead in the eyes.",
            "i interrupt and say \"okay anyway\" to forcefully change the subject back to something i understand.",
            "i ask them to explain the joke, which immediately ruins the humor and makes it awkward for them.",
            "i pull out my phone and stop listening completely until they are done excluding me.",
          ],
        },
        {
          text: "what is your survival strategy when you are the mutual friend introducing two people from different circles?",
          options: [
            "i over-explain everything and act like a frantic game show host trying to force them to like each other.",
            "i sit back quietly and observe them, secretly terrified they will like each other more than they like me.",
            "i act completely different depending on which one i am making eye contact with.",
            "i dominate the conversation so they are both just listening to me instead of talking to each other.",
          ],
        },
      ],
      results: [
        {
          title: "the sidewalk trailer",
          callout: "you are fundamentally terrified of taking up space. when the dynamic shifts even slightly, you accept defeat, step off the sidewalk, and assume the role of the outcast. you convince yourself you are the least liked friend because it is easier to play the victim than to actually speak up and assert your place in the group. stop walking behind people who aren't even leading.",
        },
        {
          title: "the territorial middle child",
          callout: "you have severe FOMO and a terrifying competitive streak. the second you feel left out, you aggressively force your way back into the center of attention. you guilt trip people for hanging out without you because you view friendship as a hierarchy and you refuse to lose your spot at the top. let your friends have other dynamics, it doesn't diminish your value.",
        },
        {
          title: "the passive aggressive ghost",
          callout: "instead of communicating that you feel left out, you punish people with silence. you see them hang out, your feelings get hurt, and your immediate reaction is to ice them out so they have to beg for your attention. you are creating a self-fulfilling prophecy where you end up alone just to prove that nobody cares about you.",
        },
        {
          title: "the diplomatic bridge",
          callout: "you are the glue that holds everyone together, but it is exhausting you. you manage everyone's feelings, translate inside jokes, and make sure nobody feels left out, but nobody is doing that for you in return. you are so focused on maintaining the social chemistry of the group that you forgot to actually just exist as a person.",
        },
      ],
    },
    {
      id: "the-unpaid-therapist-audit",
      title: "the unpaid therapist audit",
      blurb: "do you actually want to help them, or do you just like knowing their life is messier than yours?",
      questions: [
        {
          text: "a friend texts you \"i need to vent.\" what is your actual, unfiltered first thought?",
          options: [
            "\"oh thank god, some drama to distract me from my own boring life.\"",
            "\"i literally do not have the mental capacity for this right now, but i have to say yes.\"",
            "\"okay, time to fix their life because they clearly cannot make a good decision without me.\"",
            "\"i hope they ask me about my day first before they launch into a thirty minute monologue.\"",
          ],
        },
        {
          text: "you give a friend incredible, logical advice about a toxic situation. the next day, they do the exact opposite of what you said. how do you react?",
          options: [
            "i get genuinely, aggressively angry. if you aren't going to listen to me, do not waste my time.",
            "i sigh, say \"well i'm here for you,\" and prepare to listen to them complain about the exact same thing again tomorrow.",
            "i completely detach. i nod along but stop offering any real advice because they are a lost cause.",
            "i secretly feel validated. watching them mess up makes me feel like the smart, stable one in the friendship.",
          ],
        },
        {
          text: "when was the last time you went to this specific friend with a heavy problem of your own?",
          options: [
            "literally never. my brand is being the strong, mysterious one who has everything completely figured out.",
            "i tried once, but they somehow managed to relate it back to themselves within three minutes, so i stopped.",
            "i only tell them my problems after i have already completely solved them, so i don't look weak.",
            "all the time. our friendship is just us aggressively trauma dumping on each other in alternating shifts.",
          ],
        },
        {
          text: "what is the tone of your advice when your friend is actively crying?",
          options: [
            "highly clinical and detached. i give them action steps, bullet points, and a timeline to fix the issue.",
            "purely validating. i just say \"that is so messed up\" and agree with whatever crazy thing they are saying.",
            "tough love. i tell them the brutal truth about how they ruined their own life, even while they are weeping.",
            "i awkwardly pat their back and try to make a joke to cut the tension because crying terrifies me.",
          ],
        },
      ],
      results: [
        {
          title: "the savior complex",
          callout: "you do not want equal friendships, you want projects. you love being the therapist friend because it gives you a massive superiority complex. fixing their messy lives distracts you from the fact that you refuse to look at your own problems. you give great advice, but you use your stability as a weapon to stay in control of the dynamic.",
        },
        {
          title: "the exhausted sponge",
          callout: "you have zero emotional boundaries. you absorb everyone else's stress, panic, and sadness until you feel physically sick, but you refuse to tell them to stop. you think being a good friend means being a human garbage can for other people's negative energy. you are going to burn out and ghost everyone if you don't learn how to say \"i can't listen right now.\"",
        },
        {
          title: "the cold logician",
          callout: "you are a terrible therapist because you lack basic empathy. when a friend comes to you crying, you treat them like a broken laptop that needs troubleshooting. you get angry when people make emotional decisions because you view everything through cold, rigid logic. sometimes people just need to complain, they don't need a keynote presentation on how to fix it.",
        },
        {
          title: "the drama consumer",
          callout: "you don't actually care about helping your friends, you just love the entertainment. you encourage them to make messy choices, dig for details, and hype up their toxic relationships because it is basically reality tv for you. you are treating their actual life crisis like a podcast episode. check your empathy.",
        },
      ],
    },
    {
      id: "the-friendship-breakup-autopsy",
      title: "the friendship breakup autopsy",
      blurb: "platonic heartbreak is worse than romantic heartbreak. how toxic was your exit?",
      questions: [
        {
          text: "you and a close friend have a massive falling out. how does the actual breakup happen?",
          options: [
            "a huge, cinematic screaming match where we both say the most devastating things possible to each other.",
            "a slow, agonizing fade out where we just text less and less until we are basically strangers.",
            "i send one massive, definitive paragraph outlining their flaws, then block them before they can reply.",
            "i completely ghost them out of nowhere and refuse to ever explain what they did wrong.",
          ],
        },
        {
          text: "you see them in public six months later. what is the protocol?",
          options: [
            "i stare straight ahead, lock my jaw, and pretend they are literally invisible air.",
            "i panic, turn around, and hide in a different aisle until they leave the building.",
            "i give them a tight, fake smile and a nod just to prove i am the bigger, more mature person.",
            "i actively try to look like i am having the time of my life with whoever i am currently walking with.",
          ],
        },
        {
          text: "what happens to the secrets they told you when you were still best friends?",
          options: [
            "they stay in the vault forever. i might hate them, but i have morals and i don't leak classified intel.",
            "i use them as social currency. i tell my new friends the secrets to prove how toxic the old friend was.",
            "i don't leak the big secrets, but i definitely drop hints and subtle shade online that only they would understand.",
            "i completely forget them because i deleted the entire era from my brain to cope with the loss.",
          ],
        },
        {
          text: "how do you talk about them when mutual friends bring them up?",
          options: [
            "i act super casual and say \"yeah we just drifted, wish them the best\" while secretly hoping they fail.",
            "i physically cannot stop myself from rolling my eyes or making a snarky comment about their new vibe.",
            "i give a hyper-detailed, incredibly biased presentation of exactly what they did to ruin the friendship.",
            "i refuse to let anyone say their name in my presence. the topic is strictly off limits.",
          ],
        },
        {
          text: "what is the real, hidden reason the friendship actually ended?",
          options: [
            "i felt like i was putting in 90% of the effort and they were just stringing me along for convenience.",
            "we got too close, too codependent, and the dynamic became a toxic, suffocating prison.",
            "they got a new relationship or friend group and i felt replaced, so i burned the bridge first.",
            "i realized they were secretly competing with me and i refuse to be friends with a rival.",
          ],
        },
      ],
      results: [
        {
          title: "the scorched earth bomber",
          callout: "when a friendship ends, you make sure nothing survives the blast radius. you send devastating paragraphs, block on all platforms, and force mutual friends to pick a side. you destroy the bridge so thoroughly because you are terrified that if you leave the door open even a crack, you will crawl back to them.",
        },
        {
          title: "the silent ghost",
          callout: "you avoid conflict like the plague. instead of communicating that your feelings are hurt or the dynamic is shifting, you just evaporate into thin air. you leave your ex-friends completely in the dark, wondering what they did wrong for years. it feels clean to you, but to them, it is psychological torture. learn to have a closing conversation.",
        },
        {
          title: "the petty archivist",
          callout: "you claim you are over the friendship, but you still check their instagram from a burner account every three weeks. you keep tabs on their new friends, judge their new outfits, and drop passive aggressive shade in your own posts. you are still letting a person you claim to hate dictate your emotional state. let them go.",
        },
        {
          title: "the fake diplomat",
          callout: "you are desperate to look like the \"bigger person.\" you do the slow fade, give fake smiles in public, and tell mutuals that you \"wish them well.\" but underneath the polite aesthetic, you are deeply resentful. you bottle up all your anger just to maintain a perfect social image. you are allowed to be mad that someone hurt you.",
        },
      ],
    },
    {
      id: "the-secret-keepers-burden",
      title: "the secret keeper's burden",
      blurb: "what is the actual half-life of a secret once it enters your brain?",
      questions: [
        {
          text: "someone says \"okay, promise you won't tell anyone, but...\" what is your immediate internal thought?",
          options: [
            "\"i will take this to my grave, my loyalty is absolute and unquestionable.\"",
            "\"i am definitely going to tell exactly one person who has zero connection to this group.\"",
            "\"i give it 48 hours before i accidentally let this slip while i'm not paying attention.\"",
            "\"excellent. another piece of leverage to store in the mental filing cabinet.\"",
          ],
        },
        {
          text: "you find out a massive, devastating secret about someone in your outer circle. what do you do with it?",
          options: [
            "absolutely nothing. their business is their business, and i don't want the bad karma.",
            "i immediately run to my closest friend so we can analyze it for three hours like a true crime podcast.",
            "i drop incredibly vague, ominous hints around them just to watch them sweat.",
            "i treat them completely differently because i cannot hide my judgment, even if i don't say the secret out loud.",
          ],
        },
        {
          text: "a friend asks for your advice on a situation, but you have secret information that proves they are being lied to. what is the move?",
          options: [
            "i tell them the truth immediately. loyalty means protecting my friends from looking stupid, no matter the fallout.",
            "i try to guide them to figure it out on their own so i don't have to be the one who blows up their life.",
            "i stay quiet because i promised the other person i wouldn't say anything, and a promise is a promise.",
            "i panic, make up an excuse to leave the conversation, and avoid them until the drama resolves itself.",
          ],
        },
        {
          text: "what happens when you accidentally let a secret slip in front of the wrong person?",
          options: [
            "i backtrack aggressively, make a terrible joke, and act like i made the whole thing up.",
            "i freeze, widen my eyes, and basically confirm the secret by acting incredibly suspicious.",
            "i swear the person who heard it to absolute secrecy, essentially trapping them in the web with me.",
            "i own it. i ruined the secret, so i just spill the rest of the details and accept the chaos.",
          ],
        },
      ],
      results: [
        {
          title: "the steel vault",
          callout: "you are the rarest breed of friend: an actual, literal vault. when a secret enters your brain, the code is thrown away. you never leak, you never gossip, and you never use it as leverage. the downside? you are carrying around so much heavy, toxic information about everyone else's lives that it is weighing down your own mental health.",
        },
        {
          title: "the exclusive leak",
          callout: "you swear you are good at keeping secrets, but your definition of \"nobody\" actually means \"my partner, my sister, and my one friend who lives in another state.\" you launder secrets through safe channels because the pressure of holding gossip makes you physically vibrate. you are a liability, but at least you are careful about who you leak to.",
        },
        {
          title: "the accidental liability",
          callout: "you don't mean to be a bad friend, you just have a terrible memory and zero filter. you forget who is allowed to know what, and you constantly bring up classified intel at the worst possible dinner parties. people still love you, but they have learned to stop telling you anything that could legally destroy them.",
        },
        {
          title: "the information broker",
          callout: "you view secrets as social currency. you collect gossip, rumors, and vulnerabilities not because you care, but because knowing things gives you power. you use \"i know a secret but i can't tell you\" to make yourself seem interesting. you are playing a dangerous game of social chess, and eventually, everyone is going to stop trusting you.",
        },
      ],
    },
    {
      id: "the-energy-vampire-diagnostic",
      title: "the energy vampire diagnostic",
      blurb: "who is actually draining who in this relationship?",
      questions: [
        {
          text: "you have been hanging out with a friend for six hours. how is the dynamic functioning right now?",
          options: [
            "we are sitting in complete, comfortable silence doing our own things on our phones.",
            "i have been talking non-stop for the last two hours and they are just nodding and saying \"wow.\"",
            "i am carrying the entire conversation, asking them questions, and desperately trying to keep the vibe alive.",
            "we are both complaining intensely about everything wrong with our lives, feeding off each other's negativity.",
          ],
        },
        {
          text: "your friend comes over and immediately starts venting about the same problem they have had for a year. what do you do?",
          options: [
            "zone out entirely. i nod, say \"that's crazy,\" and let my brain float into another dimension to survive.",
            "get visibly annoyed, give them a harsh reality check, and tell them to stop complaining if they won't fix it.",
            "absorb all their anxiety until i literally feel sick to my stomach and need a three-hour nap after they leave.",
            "use it as an opportunity to pivot the conversation back to something annoying that happened to *me* today.",
          ],
        },
        {
          text: "how do you generally leave a hangout when you are ready to go home?",
          options: [
            "i abruptly stand up, announce i am tired, and walk out the door within forty seconds.",
            "i drag out the goodbye for forty-five minutes, standing in the doorway talking until my legs hurt.",
            "i wait for them to look tired or check their phone so i can pretend *they* want the hangout to end.",
            "i create a fake excuse about having to do chores or wake up early because i feel guilty for wanting to leave.",
          ],
        },
        {
          text: "what is the primary reason you usually cancel plans?",
          options: [
            "i genuinely exhausted my social battery at school/work and cannot physically form sentences anymore.",
            "i got a slightly better or more interesting offer from someone else and chose that instead.",
            "i got overwhelmed by the logistics (getting ready, driving, spending money) and the effort felt too high.",
            "i convinced myself my friends didn't actually want to see me and were just inviting me out of pity.",
          ],
        },
      ],
      results: [
        {
          title: "the emotional leech",
          callout: "you are the energy vampire. you monopolize conversations, repeat the same complaints for months without changing anything, and use your friends as captive audiences for your monologues. you think you are just \"venting,\" but you leave every room heavier than when you walked in. ask your friends how they are doing for once.",
        },
        {
          title: "the anxious pleaser",
          callout: "you are the one being drained, and it is entirely your own fault. you over-accommodate, over-listen, and refuse to end hangouts because you are terrified of being a bad host or a bad friend. you absorb everyone else's chaotic energy because you have zero boundaries. your social battery is dead because you never plug it out.",
        },
        {
          title: "the silent black hole",
          callout: "you don't talk much, but you drain the room with your intense, heavy silence. you force the other person to carry the entire conversation, make all the decisions, and manage the vibe. hanging out with you feels like pulling teeth because you give absolutely zero energy back. participate in the friendship or go home.",
        },
        {
          title: "the doom-loop twin",
          callout: "you and your best friend are draining each other. you get together and immediately enter an echo chamber of complaining, judging, and stressing about the future. you feed off each other's toxic energy until you are both miserable. you need to learn how to hang out without using misery as your primary bonding activity.",
        },
      ],
    },
    {
      id: "the-low-maintenance-lie",
      title: "the \"low maintenance\" lie",
      blurb: "you call it being a chill friend. your therapist calls it avoidant attachment.",
      questions: [
        {
          text: "you haven't spoken to a good friend in five weeks. what is your internal narrative about this?",
          options: [
            "\"we are just so low maintenance! we can go months without talking and pick right back up.\"",
            "\"i am the worst friend alive, they definitely hate me, but now it's been too long so i can't text first.\"",
            "\"i just assumed they were busy, if they wanted to talk to me they would have texted me.\"",
            "\"i literally just forgot they existed because my brain lacks basic object permanence for humans.\"",
          ],
        },
        {
          text: "a friend double-texts you asking if you are mad at them because you've been distant. how do you reply?",
          options: [
            "i laugh it off, say \"omg no just busy!\" and then continue to put in zero actual effort.",
            "i get intensely defensive. i hate when people put pressure on me to perform friendship on their schedule.",
            "i feel a wave of intense guilt, write a massive apology paragraph, and promise to do better.",
            "i ignore the text for another day because the pressure of their anxiety is making me want to run away.",
          ],
        },
        {
          text: "how do you handle making plans for the weekend?",
          options: [
            "i strictly say \"maybe, i'll let you know\" so i am not trapped in a commitment if i want to rot in bed.",
            "i wait for someone else to orchestrate the entire thing, then just show up if i feel like it.",
            "i am the group admin. i plan the time, location, and rides, and resent everyone for making me do it.",
            "i agree to everything on tuesday, and by friday i am looking for any excuse to cancel.",
          ],
        },
        {
          text: "what does emotional support look like from you?",
          options: [
            "sending them a relatable tiktok every four days instead of actually asking how their mental health is.",
            "giving them a ride somewhere or buying them food. acts of service so i don't have to use emotional words.",
            "completely disappearing when things get heavy because i don't know how to handle big feelings.",
            "sitting with them in silence, mostly just offering my physical presence without much input.",
          ],
        },
      ],
      results: [
        {
          title: "the object permanence failure",
          callout: "your claim of being a \"low maintenance\" friend is actually just severe forgetfulness and emotional laziness. out of sight means literally out of mind for you. you let friendships starve to death because you cannot be bothered to send a basic check-in text. people want to feel valued, not like an afterthought you occasionally remember exists.",
        },
        {
          title: "the fear of engulfment",
          callout: "you keep people at arm's length on purpose. you label yourself \"chill,\" but the reality is you are terrified of expectations. the second a friend needs you, relies on you, or double-texts you, you feel suffocated and pull away. you are confusing independence with isolation. let people rely on you a little bit.",
        },
        {
          title: "the fake chill",
          callout: "you pretend to be low maintenance because you are terrified of being seen as \"clingy.\" you let people ignore you, cancel on you, and put in minimal effort, and you swallow your hurt feelings to maintain the cool, unbothered aesthetic. you are allowed to have standards. demand better friends.",
        },
        {
          title: "the acts-of-service ghost",
          callout: "you avoid deep emotional intimacy by replacing it with logistics. you will drive a friend to the airport, buy them dinner, or fix their laptop, but if they ask you to have a deep conversation about your feelings, you shut down completely. you are a useful friend, but you are not a close friend. open up.",
        },
      ],
    },
    {
      id: "the-social-chameleon",
      title: "the social chameleon",
      blurb: "how much of your current personality was stolen from your favorite person?",
      questions: [
        {
          text: "you start hanging out with someone new who has a very specific aesthetic and music taste. within two weeks, what happens?",
          options: [
            "nothing. i am too stubborn and set in my ways to change my vibe for anyone.",
            "i start dropping their specific slang words into my vocabulary completely by accident.",
            "i secretly revamp my spotify playlists and buy two shirts that match their vibe so we look cohesive.",
            "i completely overhaul my entire personality and abandon my old interests to perfectly mirror theirs.",
          ],
        },
        {
          text: "your best friend expresses a very strong, negative opinion about a movie you actually really liked. what do you say?",
          options: [
            "\"really? i kind of liked it,\" but i immediately backtrack and agree with their critique so things aren't weird.",
            "\"you are completely wrong and here is a thesis statement on why your taste is garbage.\"",
            "i just nod and say \"yeah i can see that,\" completely hiding my true opinion to avoid a pointless debate.",
            "i instantly change my mind. if they hated it, i must have missed the flaws, so i hate it now too.",
          ],
        },
        {
          text: "you are forced to spend a week completely alone, with no friends around. how does your personality hold up?",
          options: [
            "i thrive. i immediately revert back to my weirdest, most authentic self that nobody else gets to see.",
            "i feel incredibly empty and bored. i don't know what to watch or do without someone else leading the way.",
            "i spend the whole week texting them constantly to keep the tether alive because i hate being by myself.",
            "i start acting like five different people, trying to figure out which aesthetic i actually want to keep.",
          ],
        },
        {
          text: "someone from an older friend group meets your current best friend. what is the vibe?",
          options: [
            "incredibly awkward. they are seeing two completely different versions of my personality colliding in real time.",
            "totally fine. i am the exact same person with every single group i interact with.",
            "i feel super protective and get quiet, letting my current friend do all the talking.",
            "i act way cooler and meaner than usual to prove to my new friend that i am not a loser.",
          ],
        },
      ],
      results: [
        {
          title: "the identity mirror",
          callout: "you do not have a concrete sense of self. you are a social chameleon who absorbs the slang, style, and opinions of whoever you are standing next to. you do this because you think blending in guarantees that they will like you. the problem is, when you are left entirely alone, you have no idea who you actually are.",
        },
        {
          title: "the stubborn contrarian",
          callout: "you are the anti-chameleon. instead of copying your friends, you actively try to be as different as possible just to prove your independence. if they like something, you hate it. if they dress up, you dress down. your need to be unique is just as exhausting and reactionary as someone who copies everything. just be normal.",
        },
        {
          title: "the subtle absorber",
          callout: "you keep your core identity, but you steal tiny, microscopic traits from everyone you meet. a phrase here, a gesture there, a music genre there. your personality is a frankenstein monster built from the best parts of your social circle. it's not inherently toxic, but you need to make sure you aren't burying your own voice.",
        },
        {
          title: "the codependent twin",
          callout: "you don't just mirror your friend, you merge with them. you want people to see you as a packaged deal. you use \"we\" instead of \"i,\" share the same enemies, and coordinate outfits. you have completely lost the boundary between where you end and they begin. this dynamic always ends in a massive, explosive identity crisis.",
        },
      ],
    },
    {
      id: "the-loyalty-paradox",
      title: "the loyalty paradox",
      blurb: "your friend is completely in the wrong. do you back them up or humble them?",
      questions: [
        {
          text: "your friend is getting into a heated argument with a stranger in public, and your friend is objectively being unreasonable. what do you do?",
          options: [
            "jump in and aggressively defend my friend. loyalty means i back them blindly in public, no questions asked.",
            "physically drag my friend away by the arm, apologizing to the stranger over my shoulder.",
            "stand there in silent horror, looking at my phone and pretending i do not know the person screaming.",
            "tell my friend to calm down and politely tell them they are overreacting right in front of the stranger.",
          ],
        },
        {
          text: "a close friend does something genuinely toxic to their partner/ex. they come to you to vent about the fallout. what is your response?",
          options: [
            "i immediately hype them up, call the ex crazy, and validate their toxic behavior because they are my friend.",
            "i give them a brutal, unfiltered reality check. \"you ruined this, you are the villain, go apologize.\"",
            "i softly say \"yeah, that was maybe not the best move...\" and then immediately change the subject.",
            "i play both sides. i validate their feelings, but secretly text the ex to make sure they are okay.",
          ],
        },
        {
          text: "you hear someone talking badly about your friend behind their back. the catch? the criticism is 100% accurate.",
          options: [
            "i shut it down immediately. nobody talks about my friend but me, even if they are stating facts.",
            "i awkwardly nod and say \"yeah, they can be a lot sometimes...\" betraying my friend to fit in with the group.",
            "i stay quiet, gather the intel, and report back to my friend exactly what was said so they can retaliate.",
            "i agree with the criticism, but defend my friend's underlying intentions so they don't sound entirely evil.",
          ],
        },
        {
          text: "what is your golden rule of friendship loyalty?",
          options: [
            "i will cover up a crime for you, no questions asked. ride or die.",
            "i will defend you in public, but i will completely destroy your ego in private.",
            "i am loyal to the truth first. if you are acting terrible, i am not going down with your ship.",
            "i am only as loyal as you are to me. the second you slip up, i am out.",
          ],
        },
      ],
      results: [
        {
          title: "the blind soldier",
          callout: "your version of loyalty is actually just toxic enabling. you back your friends up even when they are destroying their own lives or hurting other people. you think being a \"ride or die\" makes you a good friend, but you are just acting as a hype-man for their worst decisions. true friends hold each other accountable.",
        },
        {
          title: "the brutal judge",
          callout: "you value objective morality more than social loyalty. if your friend is wrong, you will humble them immediately, even in public. you think this makes you a superior, honest person, but your delivery is so harsh that your friends are secretly terrified of your judgment. you can correct someone without acting like their disappointed parent.",
        },
        {
          title: "the public defender, private critic",
          callout: "you have mastered the paradox. in public, you will defend your friend like a rabid dog, refusing to let anyone disrespect them. but the second you get them in the car, you absolutely rip them to shreds for acting stupid. this is actually the healthiest dynamic on the list, as long as you make sure they actually listen to your private critiques.",
        },
        {
          title: "the silent coward",
          callout: "you have zero spine. when your friend is acting toxic, you stay quiet. when someone talks behind their back, you nod along. you are so afraid of being in the line of fire that you refuse to stand for anything. you aren't loyal to your friends or the truth—you are only loyal to keeping yourself comfortable.",
        },
      ],
    },
    {
      id: "the-plan-cancelers-guilt",
      title: "the plan canceler's guilt",
      blurb: "the complex mathematics of getting out of a hangout without ruining the friendship.",
      questions: [
        {
          text: "it is 4 pm. you have plans at 7 pm that you desperately want to cancel. what is step one?",
          options: [
            "begin acting slightly sick or tired in the group chat right now to lay the groundwork for a medical exit.",
            "wait until 6:30 pm and send a chaotic text about a family emergency that cannot be questioned.",
            "just tell the truth. \"i am exhausted and i want to rot in bed tonight, i'm so sorry.\"",
            "i don't cancel. i force myself to get ready while staring angrily in the mirror, and i go miserable.",
          ],
        },
        {
          text: "you successfully canceled the plan. how do you spend the time you reclaimed?",
          options: [
            "completely paralyzed by guilt. i sit on my phone unable to relax because i feel like a terrible person.",
            "euphoric. i put on my pajamas, eat a great snack, and experience the greatest joy known to humanity.",
            "i end up doing chores, homework, or something productive to justify why i couldn't go out.",
            "i stalk their stories all night to see if they had fun without me, simultaneously relieved and jealous.",
          ],
        },
        {
          text: "the friend texts you back: \"aw that sucks, no worries!\" what is your internal translation of that text?",
          options: [
            "\"they hate me, they know i'm lying, this friendship is permanently damaged.\"",
            "\"thank god, they didn't really want to hang out either, we are both free.\"",
            "\"they are definitely talking trash about how flakey i am to the rest of the group right now.\"",
            "\"great, the transaction is closed. moving on.\"",
          ],
        },
        {
          text: "you are on the other side. a friend cancels on you last minute. how do you react?",
          options: [
            "i am genuinely thrilled. getting canceled on is like a free gift of time from the universe.",
            "i take it deeply personally, assume they hate me, and hold a grudge for the next three weeks.",
            "i act super chill, but i mentally put them in the \"flakey friend\" category and stop inviting them to things.",
            "i panic and immediately try to reschedule for tomorrow so the plan doesn't die completely.",
          ],
        },
      ],
      results: [
        {
          title: "the elaborate liar",
          callout: "you are incapable of just saying you are tired. instead, you invent complex illnesses, family drama, and wild inconveniences to get out of dinner plans. you lie because you are a people pleaser who cannot handle the thought of someone being slightly disappointed in you. stop writing fiction and just say you want to stay home.",
        },
        {
          title: "the relief junkie",
          callout: "you say yes to plans just to experience the dopamine rush of canceling them later. you love the idea of hanging out, but the logistics of leaving your house disgust you. you are burning through your social capital. eventually, people are going to stop inviting you because nobody likes a flake who only exists in theory.",
        },
        {
          title: "the resentful attendee",
          callout: "you never cancel. even when you have a migraine, a bad day, or zero social battery, you force yourself to show up. the problem? you project an aura of misery the entire time you are there. you make everyone else feel bad because you are clearly suffering. if you don't want to be there, do everyone a favor and cancel.",
        },
        {
          title: "the guilt-ridden ghost",
          callout: "you cancel plans out of exhaustion, but you punish yourself so severely that you don't even enjoy the rest you gained. you spend the whole night staring at the ceiling feeling like a terrible, toxic friend. you need to accept that taking a night off does not make you a villain. enjoy your peace without the panic.",
        },
      ],
    },
    {
      id: "the-social-orbit-pathology",
      title: "the social orbit pathology",
      blurb: "are you the sun, a planet, or just space debris floating through the group?",
      questions: [
        {
          text: "your two separate friend groups are merging for a party. what is your behavior like?",
          options: [
            "i am the frantic host, buzzing between groups, translating inside jokes, and panicking if conversation stalls.",
            "i latch onto the one person i trust the most and refuse to leave their side the entire night.",
            "i sit back and watch them interact like a proud scientist observing a social experiment.",
            "i get overwhelmed by the overlapping versions of my personality and quietly escape to the kitchen.",
          ],
        },
        {
          text: "what is your absolute preferred way to socialize?",
          options: [
            "a massive, loud group setting where i can bounce around and don't have to talk deeply to anyone.",
            "strictly one-on-one. i need deep, focused eye contact and uninterrupted conversation to feel connected.",
            "a solid trio or core four. enough people to keep the energy up, but small enough to fit in one car.",
            "playing a multiplayer video game on voice chat where i don't have to physically perceive anyone.",
          ],
        },
        {
          text: "you find out three of your friends grabbed coffee without inviting you. it wasn't a big deal, just a spontaneous thing. how do you react?",
          options: [
            "i immediately re-evaluate my ranking in the group and decide i must be the least important member.",
            "i don't care at all. i prefer not being invited to every single mundane thing, it takes the pressure off.",
            "i drop a passive aggressive comment in the group chat like \"wow looks fun wish i knew about it!\"",
            "i convince myself it's because i am too busy and important, shielding my ego from the sting of rejection.",
          ],
        },
        {
          text: "someone in the group makes a unilateral decision for everyone (picking the restaurant, the movie, etc) without asking. what do you do?",
          options: [
            "complain bitterly to the person sitting next to me, but say \"yeah sounds great!\" to the group.",
            "immediately challenge them. nobody dictates the plans without a democratic vote if i am present.",
            "i am thrilled. making decisions is agonizing for me, please just tell me where to stand and what to eat.",
            "i use it as an excuse to leave early. \"oh i actually don't like sushi, i'll just catch you guys later.\"",
          ],
        },
      ],
      results: [
        {
          title: "the territorial core",
          callout: "you view yourself as the sun of your friend group. you orchestrate the plans, manage the group chat, and expect everyone to orbit around you. when people hang out without you, you view it as a personal betrayal. you are a great leader, but you need to stop acting like a dictator. friendships aren't monarchies.",
        },
        {
          title: "the floating satellite",
          callout: "you drift on the absolute edge of the social circle. you show up to the big events, laugh at the jokes, but nobody actually knows anything deep about you. you avoid one-on-one hangs because they require vulnerability. you are a safe, easy friend, but you are incredibly lonely because you refuse to actually land on a planet.",
        },
        {
          title: "the group chat glue",
          callout: "you are the frantic bridge connecting everyone. you organize the logistics, smooth over the fights, and make sure the quiet person gets to speak. you hold the entire social chemistry together, but you are deeply resentful that nobody ever checks on *you*. step back for a week and see if the group survives without you managing it.",
        },
        {
          title: "the isolated sniper",
          callout: "you prefer one-on-one dynamics because you cannot handle the chaos of a group. when forced into a large setting, you become cynical, sit in the corner, and make judgmental comments about the loud people. you think you are above the group drama, but really you just lack the social endurance to exist in a crowd. stop acting superior just because you have a low social battery.",
        },
      ],
    },
  ],
};
