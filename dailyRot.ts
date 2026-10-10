import type { Category } from "../types";

export const dailyRot: Category = {
  id: "daily-rot",
  num: "01",
  name: "daily rot",
  color: "#FFB6D9",
  tagline: "routine, screen time & academic survival.",
  quizzes: [
    {
      id: "the-morning-collapse-protocol",
      title: "the morning collapse protocol",
      blurb: "your alarm goes off and your soul immediately files for resignation.",
      questions: [
        {
          text: "your first alarm goes off. what is the actual sequence of events?",
          options: [
            "i hit snooze, renegotiate with myself for nine more minutes, and do this four more times until i am late.",
            "i stare at the ceiling in complete silence for ten full minutes calculating if school is even real.",
            "i grab my phone instantly and scroll until the second alarm forces me to actually sit up.",
            "i get up immediately out of pure spite for my future self, then regret it while brushing my teeth.",
          ],
        },
        {
          text: "what does your \"getting ready\" process look like when you are already running late?",
          options: [
            "a chaotic sprint where i brush my teeth while putting on socks and somehow still forget my charger.",
            "i slow down even more. if i am already late, the outfit and hair have to be perfect as compensation.",
            "i abandon the entire concept of breakfast, deodorant placement accuracy, and matching shoes.",
            "i stand in front of my closet in a frozen panic because nothing feels like the right vibe for surviving today.",
          ],
        },
        {
          text: "you look in the mirror before leaving. what is the dominant thought?",
          options: [
            "\"this is the best i can do with the materials given and i refuse to care more.\"",
            "\"if i tilt my head at this exact angle and fix one strand, i can almost pass as a functional person.\"",
            "\"i look like i lost a fight with my own bed and the bed clearly won.\"",
            "\"i look fine, but my eyes are screaming that i only slept for four hours.\"",
          ],
        },
        {
          text: "how do you actually leave the house?",
          options: [
            "i do a full lap back inside three times for my keys, headphones, and the one paper i need.",
            "i slam the door and walk out with pure main character energy even though i am twelve minutes late.",
            "i leave quietly and slowly, already exhausted by the performance of being a person in public.",
            "i stand on the porch or in the hallway scrolling for one last hit of dopamine before facing reality.",
          ],
        },
      ],
      results: [
        {
          title: "the snooze negotiator",
          callout: "your entire morning is a hostage situation between you and your alarm clock. you live in nine-minute increments of fake rest that somehow make you more tired. you are not bad at mornings, you are just addicted to the illusion of more time. the sun is not your enemy, your lack of a real cutoff is.",
        },
        {
          title: "the aesthetic emergency",
          callout: "even when you are late, the vibe cannot be compromised. you would rather show up sweaty and late with a perfect outfit than on time looking mid. your morning routine is less about function and more about damage control for your self image. sometimes mismatched socks will not end your social life.",
        },
        {
          title: "the ceiling philosopher",
          callout: "you lose the day before it even starts by staring at the ceiling and spiraling. your bed is not a resting place, it is a thinking chamber where every unfinished assignment and awkward memory visits you at once. get up before your brain starts a podcast about your failures.",
        },
        {
          title: "the dopamine doorstepper",
          callout: "you cannot cross a threshold without one last scroll. leaving the house feels like logging off from your real life and entering a worse server. you delay reality until the last possible second, then wonder why your whole day feels laggy. the phone can wait. the bus cannot.",
        },
      ],
    },
    {
      id: "the-assignment-autopsy",
      title: "the assignment autopsy",
      blurb: "you opened the doc. you typed the title. you have done nothing else for forty minutes.",
      questions: [
        {
          text: "you have a big assignment due in two days. what is your actual starting ritual?",
          options: [
            "i create a new folder, rename three files, and adjust the margins before writing a single sentence.",
            "i reread the instructions twelve times until the words stop meaning anything.",
            "i tell myself i will start after one quick break, which turns into a three hour rabbit hole.",
            "i do the easiest, most useless part first so i can feel productive without real thinking.",
          ],
        },
        {
          text: "you finally start writing and hit a difficult paragraph. what happens?",
          options: [
            "i switch to a different subject entirely and call it \"productive procrastination.\"",
            "i open a new tab to research one tiny detail and emerge forty minutes later on a wiki about shipwrecks.",
            "i write three chaotic sentences in all caps in my notes app, then copy them over like they are genius.",
            "i freeze, reread what i already wrote, and decide the whole thing is terrible so i should restart.",
          ],
        },
        {
          text: "it is the night before it is due. what is the emotional weather in your room?",
          options: [
            "quiet panic with lo-fi music and a false sense of cinematic focus.",
            "feral chaos. snacks everywhere, multiple drafts, and whispered threats at my laptop.",
            "numb acceptance. i am no longer a student, i am a vessel through which mediocre paragraphs flow.",
            "fake calm. i keep saying \"i got this\" out loud while my eye twitches.",
          ],
        },
        {
          text: "how do you feel the second you finally submit it?",
          options: [
            "pure empty relief, followed by the terrifying realization that i have another one due friday.",
            "i refuse to look at it ever again. if i reread even one sentence i will combust.",
            "i immediately text someone \"i am free\" like i just escaped a hostage situation.",
            "mild disappointment in myself mixed with pride that i once again got away with it.",
          ],
        },
        {
          text: "what is your honest relationship with outlines?",
          options: [
            "i make beautiful color coded outlines and then ignore them completely while writing.",
            "outlines feel like doing the assignment twice so i skip them and suffer later.",
            "i outline in my head while walking and then forget every brilliant point the second i sit down.",
            "i only outline when i am avoiding the actual writing, which is always.",
          ],
        },
      ],
      results: [
        {
          title: "the formatting gremlin",
          callout: "you will spend twenty minutes choosing a font before writing a thesis. your brain loves the safe, controllable parts of schoolwork and panics at the thinking parts. you hide in setup tasks because starting the real work means risking being bad at it. open the doc and write one ugly paragraph on purpose.",
        },
        {
          title: "the research black hole",
          callout: "you are not studying, you are recreationally disappearing into tabs. every assignment becomes an excuse to learn everything except the thing you need. your curiosity is real, but right now it is just dressed up procrastination. close the extra tabs. your future self is not going to thank you for the shipwreck trivia.",
        },
        {
          title: "the deadline feral",
          callout: "you do your best work when the fear finally outweighs the resistance. you hate this about yourself, but the night before has become your only real office hours. you are not lazy, you are addicted to the adrenaline of almost failing. one day the gamble will not pay off. start while it is still boring.",
        },
        {
          title: "the restart addict",
          callout: "you delete more sentences than you keep. every draft has to feel perfect from line one or you scrap the whole thing. you are not revising, you are avoiding the discomfort of a bad first version. messy writing is still writing. stop burning the draft every time it looks human.",
        },
      ],
    },
    {
      id: "the-phone-in-bed-disease",
      title: "the phone in bed disease",
      blurb: "you said you would only check one notification. that was forty five minutes ago.",
      questions: [
        {
          text: "you get into bed with the sincere goal of sleeping. what actually happens?",
          options: [
            "i plug my phone in across the room like a responsible adult, then walk over to check it five minutes later.",
            "i scroll until my thumb hurts and my eyes burn, waiting for sleep to ambush me mid video.",
            "i watch the same comfort show for the hundredth time because silence makes my brain too loud.",
            "i open my notes app or classroom app \"just to check one thing\" and accidentally spiral into tomorrow's stress.",
          ],
        },
        {
          text: "what is the specific content that ruins your sleep schedule the most?",
          options: [
            "short videos that feel like nothing but somehow consume an entire hour.",
            "long paragraph text conversations that should have been a morning problem.",
            "academic tabs and \"quick research\" that turns into a guilt spiral about how behind i am.",
            "looking at other people's stories and quietly ranking my entire life against theirs.",
          ],
        },
        {
          text: "you finally put the phone down. what is the aftertaste in your brain?",
          options: [
            "empty static. i cannot remember a single thing i just saw but i feel overstimulated anyway.",
            "sudden heavy dread about everything i still have not done.",
            "a false sense of connection, like i was social, even though i spoke to no one.",
            "irritation with myself that is not strong enough to change anything tomorrow night.",
          ],
        },
        {
          text: "what is your phone's role in your morning vs night personality?",
          options: [
            "at night it is my best friend. in the morning it is my parole officer reminding me i wasted time.",
            "it is the same. i am never fully offline, only buffering.",
            "at night i use it to feel something. in the morning i use it to avoid feeling anything.",
            "i need it to sleep and also blame it for why i cannot sleep. we are in a toxic situationship.",
          ],
        },
      ],
      results: [
        {
          title: "the infinite scroll hostage",
          callout: "your bed is no longer a place to rest, it is a content consumption chamber. you are not even enjoying half of what you watch, you are just scared of the quiet. the second the screen goes dark, your thoughts get loud, so you keep the noise going. put the phone further than your arm can reach or admit you like the cage.",
        },
        {
          title: "the academic haunt",
          callout: "even your wind down is infected by school. you open one innocent tab and suddenly you are rereading feedback, checking due dates, and spiraling about your gpa at 1 am. your brain does not know the difference between nighttime and a study hall. give it a cutoff or it will never clock out.",
        },
        {
          title: "the comparison night shift",
          callout: "you go to bed fine and wake up insecure because you spent forty minutes watching everyone else's highlight reel in the dark. your phone turns into a museum of lives you think you should be living. nobody is as okay as they look at midnight, stop using their stories as a measuring tape for your worth.",
        },
        {
          title: "the comfort loop prisoner",
          callout: "you watch the same things over and over because new content requires energy you do not have. your nighttime routine is emotional anesthesia. it works until it does not, and then you are just tired and overstimulated with nothing to show for it. boredom will not kill you. try it for ten minutes.",
        },
      ],
    },
    {
      id: "the-school-hallway-economy",
      title: "the school hallway economy",
      blurb: "four minutes between classes and somehow it is still a full social and emotional obstacle course.",
      questions: [
        {
          text: "the bell rings and you step into a crowded hallway. what is your default navigation mode?",
          options: [
            "head down, headphones in, speed walking like i am late to a flight.",
            "scanning for my people immediately so i do not have to exist as a solo unit.",
            "slow strategic weaving while pretending i am not stressed by the bodies everywhere.",
            "stopping multiple times because someone says hi and i cannot socially reject a greeting.",
          ],
        },
        {
          text: "you make accidental eye contact with someone you kind of know but not enough to talk to. what happens?",
          options: [
            "sharp nod. the universal \"i see you, do not speak\" contract.",
            "awkward half smile that immediately feels too much, so i look away in shame.",
            "full fake bright \"hey!\" followed by zero follow up conversation.",
            "sudden deep interest in my locker combination or a poster on the wall.",
          ],
        },
        {
          text: "how do you handle the social performance of lunch?",
          options: [
            "same seat, same people, same script. deviation causes mild panic.",
            "i wander until i find a place that feels least embarrassing to occupy alone.",
            "i eat quickly or barely eat because i am too busy managing conversations.",
            "i take the long way and show up late so i can control how long i have to stay.",
          ],
        },
        {
          text: "you forgot something in a classroom on the other side of the building. what is the emotional cost?",
          options: [
            "catastrophic. crossing the school during passing period feels like a public walk of shame.",
            "annoying but fine. i treat it like a side quest and put a song on.",
            "i would rather take the zero or borrow from someone than do that walk.",
            "i go, but i rehearse what my face should look like the entire way there.",
          ],
        },
        {
          text: "what is your hallway reputation versus your internal reality?",
          options: [
            "people think i am cold or unbothered. i am just overstimulated and trying not to cry about a quiz.",
            "people think i am social. i am actually running on pure automatic greetings and no battery.",
            "people think i am chill and mysterious. i am lost and calculating the fastest exit.",
            "people think i have it together because i walk fast. i walk fast because if i slow down i will unravel.",
          ],
        },
      ],
      results: [
        {
          title: "the hallway ghost",
          callout: "you treat school transitions like stealth missions. headphones on, eyes down, zero stops. you think this makes you efficient, but it also makes you invisible even to people who might actually want to talk to you. isolation is not the same thing as protection.",
        },
        {
          title: "the social autopilot",
          callout: "you say hi to everyone, laugh at everything, and keep the hallway peace, but none of it is really you. you are performing likability in four minute bursts until lunch drains what is left. by final period your face hurts from fake ease. you can walk past someone without hosting a mini interaction.",
        },
        {
          title: "the overstimulated strategist",
          callout: "crowded halls scramble your nervous system. every accidental shoulder bump and eye contact feels like too much data. you plan routes, timing, and facial expressions just to survive the pass. school is already hard without turning the hallway into a tactics game. find one quiet anchor point and breathe.",
        },
        {
          title: "the pack dependent",
          callout: "being seen alone feels socially dangerous to you. you hunt for your people immediately because solo existence in public triggers some ancient embarrassment instinct. you are allowed to walk by yourself without looking like you got expelled from the group chat. independence will not kill your reputation.",
        },
      ],
    },
    {
      id: "the-1159-religion",
      title: "the 11:59 religion",
      blurb: "if it is not due in the next hour, it is a problem for imaginary future you.",
      questions: [
        {
          text: "when do you typically start the bulk of an assignment?",
          options: [
            "the day it is assigned, because the anxiety of not starting is worse than the work.",
            "exactly one night before, like a sacred cursed tradition i never escape.",
            "the morning it is due, fueled by panic and a suspicious amount of confidence.",
            "in random bursts weeks apart, then a final unholy sprint at the end.",
          ],
        },
        {
          text: "what does your browser look like during a deadline night?",
          options: [
            "one doc, one pdf, one music tab. anything else will destroy me.",
            "twenty seven tabs, three of which are the same article opened for different reasons.",
            "the assignment tab plus an entire second life of distractions i keep \"minimized.\"",
            "so many tabs my laptop makes a noise a laptop should not make.",
          ],
        },
        {
          text: "you hit submit with minutes or seconds left. what is the ritual after?",
          options: [
            "i sit completely still for a full minute like i just diffused a bomb.",
            "i immediately open the next assignment because the adrenaline still needs a victim.",
            "i go numb on my phone and refuse to process that i live like this.",
            "i tell myself \"never again\" with complete sincerity that will die by thursday.",
          ],
        },
        {
          text: "what is the story you tell yourself about why you work like this?",
          options: [
            "i work better under pressure. this is a lie i enjoy.",
            "i cannot force myself to care until fear does the motivating for me.",
            "if i finish early i will just obsessively edit and make it worse.",
            "every other part of my life is so packed that deadlines become the only clock i obey.",
          ],
        },
      ],
      results: [
        {
          title: "the adrenaline scholar",
          callout: "you have built your academic identity around the rush of almost failing. you call it your process, but it is just chronic crisis creation. you are capable of starting earlier, you just do not trust yourself without a countdown clock yelling at you. one day the wifi will die at 11:58 and the universe will collect its debt.",
        },
        {
          title: "the early anxiety machine",
          callout: "you start immediately not because you are disciplined, but because unfinished work physically haunts you. you live so far ahead of deadlines that you never get to feel done. your brain treats every assignment like a ticking threat even when it is weeks away. breathe. not everything is an emergency yet.",
        },
        {
          title: "the tab hoarder sprinter",
          callout: "your deadline energy is pure chaos with a body count of open tabs. you tell yourself you need all those resources, but half of them are just comfort clutter. you work best in a mess until the mess becomes the reason you cannot think. close what you are not reading. your ram is not infinite and neither are you.",
        },
        {
          title: "the eternal \"never again\" liar",
          callout: "after every near miss submission you swear you will change your life. you will not, not with shame alone. you do not need a new personality, you need a smaller rule, like starting the first ten minutes the day you get it. stop making vows. make a dent.",
        },
      ],
    },
    {
      id: "the-planner-graveyard",
      title: "the planner graveyard",
      blurb: "your third new notebook this semester already has two pages filled and a broken dream.",
      questions: [
        {
          text: "you buy or download a new planning system. what happens by day five?",
          options: [
            "it is pristine because i am too scared to ruin it with imperfect handwriting or wrong tasks.",
            "it is already abandoned and buried under my bed next to the last three victims.",
            "i overfill it with color coding, icons, and categories until using it takes longer than the work.",
            "i use it religiously for one specific class and completely ignore it for everything else.",
          ],
        },
        {
          text: "where do most of your important deadlines actually live?",
          options: [
            "in my head, protected by anxiety and occasional random panic flashes at 3 pm.",
            "in my phone notes app under six different titles like \"do\" \"real do\" and \"no seriously.\"",
            "on random sticky notes, papers, and the back of my hand.",
            "in the official classroom app which i avoid opening because it causes nausea.",
          ],
        },
        {
          text: "how do you react when you remember a forgotten assignment at the last minute?",
          options: [
            "cold dread, then robotic execution. my body moves before my emotions finish loading.",
            "immediate self hatred spiral about how i will never be a functional adult.",
            "weird calm. this is my natural habitat and i know the emergency route by heart.",
            "i bargain. maybe it is optional. maybe the teacher will forget. maybe i will move countries.",
          ],
        },
        {
          text: "what is your relationship with to do lists?",
          options: [
            "writing the list gives me the same dopamine as doing the tasks, so i stop there.",
            "i write impossible lists that would take three days and then feel defeated by lunch.",
            "i only write the tasks i have already done so i can check them off and feel powerful.",
            "lists make me feel trapped, so i avoid them and live in a fog of vague urgency.",
          ],
        },
      ],
      results: [
        {
          title: "the stationery romantic",
          callout: "you keep buying new planners because the fantasy of becoming organized is comforting. the clean pages feel like a potential new personality. but the second real life gets messy, the system dies. you do not need a prettier notebook. you need one ugly system you will actually touch when you are tired.",
        },
        {
          title: "the anxiety filing cabinet",
          callout: "your brain is the only planner you trust, which means you live with constant low grade dread that you forgot something. you call it freestyle living. it is actually just unpaid overtime for your nervous system. externalize one thing. a single list can hold what your brain has been clenching for months.",
        },
        {
          title: "the over systemizer",
          callout: "your productivity setup is so elaborate it has become another form of procrastination. you spend more time managing the tools than doing the work. color codes and nested folders feel like control, but they are just a prettier maze. simplify until it is almost embarrassing. if it takes more than thirty seconds to update, you will abandon it.",
        },
        {
          title: "the emergency only operator",
          callout: "you do not use systems, you use adrenaline. as long as you catch things at the last minute, you call it fine. it works until it does not, and the older you get the less cute the chaos becomes. build a boring two minute daily check. future you is tired of surviving on miracles.",
        },
      ],
    },
    {
      id: "the-caffeine-personality-transplant",
      title: "the caffeine personality transplant",
      blurb: "without your drink you are not a student. you are a malfunctioning npc.",
      questions: [
        {
          text: "what is your actual reason for the caffeine?",
          options: [
            "taste and ritual. the drink is a personality prop that signals \"i am working.\"",
            "pure necessity. without it my brain runs on buffering screens and static.",
            "emotional support. the warm or cold cup in my hand makes me feel held.",
            "academic cosplay. i saw productive people drink it and assumed it was the missing software.",
          ],
        },
        {
          text: "how do you act differently once it hits your system?",
          options: [
            "i become weirdly optimistic and start making ambitious to do lists i will betray by 4 pm.",
            "i get laser focused for forty minutes, then crash into a shame nap or doomscroll.",
            "i get jittery, talk faster, and bounce my leg until everyone around me is also stressed.",
            "nothing. i have built such a tolerance that i am basically drinking expensive water with vibes.",
          ],
        },
        {
          text: "it is late afternoon and the caffeine has abandoned you. what remains?",
          options: [
            "a hollow tiredness that feels personal, like a betrayal.",
            "sudden hunger and irritability disguised as a personality shift.",
            "the realization that i used the drink to avoid admitting i need actual sleep.",
            "stubborn continuation. i will keep working even if i am only producing elegant nonsense.",
          ],
        },
        {
          text: "your order gets messed up or is unavailable. what is the emotional response?",
          options: [
            "genuine crisis. the day structure has collapsed and i need a minute.",
            "quiet rage at the barista, the universe, and my own dependency.",
            "forced adaptation. i pick something else and act unbothered while grieving.",
            "i take it as a sign i should drink water and touch grass, then ignore that sign.",
          ],
        },
        {
          text: "how do you talk about your caffeine habit to other people?",
          options: [
            "like a cute quirky trait. \"i am nothing without my iced coffee lol\"",
            "like a medical condition. \"do not speak to me until i have had my first cup\"",
            "i downplay it because i do not want to admit how much i rely on it.",
            "i romanticize it as part of my academic aesthetic, dark circles included.",
          ],
        },
      ],
      results: [
        {
          title: "the ritual addict",
          callout: "you do not even need the caffeine as much as you need the ceremony. the walk, the order, the first sip, the illusion that now the work will begin. the drink is a productivity placebo with a receipt. it is fine to love a ritual. just stop pretending it is the only thing standing between you and total collapse.",
        },
        {
          title: "the crash cycle pilot",
          callout: "your day is a wave pool of spikes and wipeouts. you use caffeine to jumpstart a brain that is actually asking for sleep, water, and a realistic workload. the focus feels good until the crash turns you mean and useless. this is not a personality. it is a loop. fix the base layer before adding more fuel.",
        },
        {
          title: "the tolerance ghost",
          callout: "you keep increasing the dose just to feel normal. the drink does not elevate you anymore, it just prevents the headache and the fog. you are maintaining, not enhancing. that is the quiet scary stage of dependency. switch one cup for water and see how loud your body starts talking.",
        },
        {
          title: "the aesthetic stimulant",
          callout: "half of your habit is image. the cup is a prop that says busy, smart, and slightly tortured in a hot way. you are allowed to like the vibe, but if the aesthetic is covering up burnout, it is just branding for exhaustion. you can be a student without turning your nervous system into a marketing campaign.",
        },
      ],
    },
    {
      id: "the-weekend-guilt-oven",
      title: "the weekend guilt oven",
      blurb: "you rested for two hours and somehow still feel behind on being alive.",
      questions: [
        {
          text: "it is saturday morning and you have no immediate plans. what is the first feeling?",
          options: [
            "relief so strong it is almost suspicious, like i got away with something.",
            "pressure to use the time \"well\" before it evaporates into nothing.",
            "disorientation. without a schedule i do not know who i am supposed to be.",
            "the urge to sleep until my body forcibly ejects me from bed via hunger.",
          ],
        },
        {
          text: "you spend a day mostly rotting in bed or on the couch. by evening, what is the monologue?",
          options: [
            "\"i needed this\" said unconvincingly while opening classroom tabs.",
            "\"i wasted my life\" as if one lazy saturday canceled my future.",
            "\"i should have at least done laundry\" and other moving goalposts.",
            "\"this was perfect\" followed by anxiety about having to be a person again tomorrow.",
          ],
        },
        {
          text: "how do you handle homework on weekends?",
          options: [
            "i do it friday after school so the weekend feels clean and earned.",
            "i promise saturday morning, start sunday night, finish in a cold sweat.",
            "i sprinkle tiny bits throughout so it ruins every day equally.",
            "i ignore it until the dread becomes a living roommate in my room.",
          ],
        },
        {
          text: "your friend asks if you want to hang out, but you already planned a solo rest day. what do you do?",
          options: [
            "cancel the rest day immediately. social plans are rarer than peace.",
            "say yes and resent it the entire time while checking the clock.",
            "say no and then spiral about being a bad friend who will die alone.",
            "propose a low energy alternative like \"come rot with me\" and hope they understand.",
          ],
        },
      ],
      results: [
        {
          title: "the productivity haunted",
          callout: "even your rest is supervised by a ghost manager. you cannot enjoy doing nothing without calculating what you should be doing instead. weekends become a guilt oven where every hour of peace is taxed by shame. rest is not a reward for finishing everything. it is part of the work. clock out.",
        },
        {
          title: "the binge rester",
          callout: "you run on empty all week, then crash so hard on the weekend that recovery looks like disappearance. you call it laziness, but it is debt collection. your body is invoicing you for the late nights and forced smiles. if you rest in small amounts during the week, the weekend will not feel like a coma.",
        },
        {
          title: "the schedule dependent",
          callout: "without class bells and forced structure, you unravel. free time makes you anxious because you have to choose who to be. you fill the weekend with tiny obligations just to avoid the void. boredom is a skill. practice existing without an assignment sheet telling you your purpose.",
        },
        {
          title: "the social vs solitude split",
          callout: "you need alone time desperately, but you also fear missing out and being forgotten. so you half rest, half panic, and fully enjoy neither. a real rest day includes not performing availability. friends who like you will survive one unanswered invitation. protect one block of time like it is sacred.",
        },
      ],
    },
    {
      id: "the-group-project-pathology",
      title: "the group project pathology",
      blurb: "there are four names on the slides. two of them are decorative.",
      questions: [
        {
          text: "you get put in a random group. what is your opening move?",
          options: [
            "immediately take control because i do not trust strangers with my grade.",
            "wait in polite silence to see who the anxious overachiever is so i can follow them.",
            "crack a joke, keep the vibe friendly, and hope competence magically appears later.",
            "quietly accept that i will either do everything or do nothing. there is no middle.",
          ],
        },
        {
          text: "someone in the group is clearly not pulling weight. what is your response style?",
          options: [
            "do their part myself while complaining in a private chat with someone else.",
            "send a soft passive message like \"hey just checking in on the progress haha.\"",
            "address it directly and risk being called bossy for wanting basic fairness.",
            "detach completely. if they sink us, at least i will not have spent extra energy.",
          ],
        },
        {
          text: "how do you feel during the actual presentation?",
          options: [
            "hyper aware of every mistake, even the ones that are not mine.",
            "weirdly proud of the slides and dead inside about the teamwork that got us there.",
            "praying nobody asks a question about the section i only half understood.",
            "performing confidence so hard that i temporarily believe we are a real unit.",
          ],
        },
        {
          text: "after the project ends, what is the emotional residue?",
          options: [
            "lingering resentment that will resurface every time i see their name in a hallway.",
            "relief so strong i briefly love school again.",
            "a vow to work alone forever, broken immediately by the next assigned group.",
            "quiet respect for one person and permanent distrust of two others.",
          ],
        },
        {
          text: "what role do you almost always end up playing?",
          options: [
            "the project manager who did not apply for the job.",
            "the designer who makes everything look better than it deserves.",
            "the writer who turns three messy ideas into one coherent frankenstein.",
            "the ghost who does a small task early and then emotionally leaves the chat.",
          ],
        },
      ],
      results: [
        {
          title: "the reluctant ceo",
          callout: "you take over group projects because control feels safer than disappointment. you would rather burn out doing five people's jobs than trust a stranger with a shared grade. your standards are high, but your boundaries are nonexistent. leadership is not the same as silent martyrdom. assign a task and let it be imperfect.",
        },
        {
          title: "the soft enforcer",
          callout: "you try to keep the peace while drowning. your check in messages are so gentle they can be ignored, and then you steam about it later. you want fairness without friction, and that combination rarely exists. clear is kind. say the real sentence before resentment becomes your entire personality.",
        },
        {
          title: "the vibe first contributor",
          callout: "you keep the group from imploding socially, crack jokes, and make meetings less awful. the problem is you sometimes prioritize harmony over actual progress. a good mood will not format the bibliography. pair your social skills with one concrete deliverable and you become unstoppable.",
        },
        {
          title: "the strategic ghost",
          callout: "you have been burned enough times to stop fully investing. you do a small visible piece, stay polite, and emotionally check out. it protects you, but it also makes you part of the exact problem you hate. pick one project to show up for completely and rebuild your group karma on purpose.",
        },
      ],
    },
    {
      id: "the-grade-refresh-reflex",
      title: "the grade refresh reflex",
      blurb: "you refreshed the portal so many times it became a personality trait.",
      questions: [
        {
          text: "when do you check your grades the most aggressively?",
          options: [
            "right after a test, even though i know it will not be there yet.",
            "late at night when i am already vulnerable and looking for a reason to spiral.",
            "only when i absolutely have to, like a horror movie i skip through.",
            "constantly, in tiny little peeks throughout the day like a slot machine.",
          ],
        },
        {
          text: "you see a grade that is lower than expected. what is the internal sequence?",
          options: [
            "instant calculation of how this ruins my average, my future, and my identity.",
            "anger at the teacher, the rubric, the question wording, and modern society.",
            "numb shutdown. i close the tab and pretend the portal is a bad dream.",
            "motivation spike. i become a temporary academic weapon for forty eight hours.",
          ],
        },
        {
          text: "you see a higher grade than you deserved. how do you react?",
          options: [
            "pure relief mixed with guilt, like i got away with a crime.",
            "suspicion. maybe it is a mistake and the universe will correct it later.",
            "quiet validation. maybe i am actually smart and not just drowning.",
            "no reaction outwardly, but i walk a little different for the rest of the day.",
          ],
        },
        {
          text: "how much of your self worth is currently outsourced to numbers in a portal?",
          options: [
            "a catastrophic amount. letters on a screen decide if i am allowed to feel okay.",
            "a moderate amount that i keep trying to talk myself out of.",
            "less than before, but a bad grade can still take out my whole evening.",
            "i pretend zero, then prove myself wrong the next time i refresh.",
          ],
        },
        {
          text: "what do you do while waiting for a grade to be posted?",
          options: [
            "refresh, look away, refresh again, make a deal with fate, refresh again.",
            "distract myself so hard i forget, then remember all at once and get nauseous.",
            "ask three people if they have gotten theirs back yet and compare panic levels.",
            "rewrite history in my head about how i actually did fine, probably.",
          ],
        },
      ],
      results: [
        {
          title: "the portal gambler",
          callout: "checking grades has become a compulsion loop. you refresh like you are waiting for a text from destiny. every update has the power to rewrite your mood, your day, and your entire sense of self. you are more than a fluctuating average. schedule specific check times or the portal will own your nervous system.",
        },
        {
          title: "the identity spiraler",
          callout: "a single unexpected grade does not just disappoint you, it rewrites your whole story about who you are. you go from capable to doomed in seconds. this is not standards, this is fusion. your worth got tangled with performance so tightly you cannot tell them apart. separate the report card from the person holding it.",
        },
        {
          title: "the selective delusionist",
          callout: "you live in a carefully managed fog around academics. you avoid the portal, avoid the email, avoid the truth, then act shocked when reality arrives all at once. denial is a short term mercy and a long term ambush. look early, look briefly, and make a plan while you still have options.",
        },
        {
          title: "the bounce back machine",
          callout: "bad grades light a temporary fire under you. you grind, improve, recover, and then forget everything you learned the second the threat passes. you are motivated by fear more than systems. if you can bottle even ten percent of that recovery energy on a normal tuesday, you will stop needing the crisis.",
        },
      ],
    },
  ],
};
