// --- 1. DAILY CONTENT DATA (Sourced from Excerpts) ---
// Note: Content is summarized from the sources provided in the query.
const dailyContent = [
    // Day 1: WEEK 1 - The Call to Active Faith
    { day: 1, week: 1, title: "The Fence and the Garden", quote: "Beyond Passive Righteousness", 
      insight: "The 'Fence' (doing no harm) is necessary, but the 'Garden' (doing the most good) is the final goal. The Priest and Levite failed through omission.", 
      challenge: "Identify one 'Thou shalt not' (fence) and plan one corresponding 'Thou shalt do good' (garden) action.", 
      prayer: "Help me move from a life of mere avoidance to a life of active, joyful, and purposeful action.", audioSrc:"./deepdive/Day1.m4a" },
    // Day 2
    { day: 2, week: 1, title: "God’s Poiēma: The Dignity of Purpose", quote: "We are God’s handiwork (Poiēma), created in Christ Jesus for good works.", 
      insight: "You are God’s masterpiece. Service flows from your settled identity, freeing you from the fear of failure or need for man's approval.", 
      challenge: "Write out and declare Ephesians 2:10 over yourself at least three times today.", 
      prayer: "Let my life be a poem of Your grace that others can read.", audioSrc:"/deepdive/Day2.m4a" },
    // Day 3
    { day: 3, week: 1, title: "The Eager Heart: Service from Delight, Not Duty", quote: "Jesus purified for himself a people that are his very own, eager to do what is good.", 
      insight: "Eagerness (*zēlōtēs*) is fueled by gratitude for redemption. Transform service from reluctant duty ('I have to') into joyful delight ('I get to').", 
      challenge: "When an interruption occurs, perform a mental 'reframe': 'I get to do this as an act of service to Christ'.", 
      prayer: "Transform my sense of duty into a spirit of delight, and make me a 'zealot' for good works.", audioSrc:"/deepdive/Day3.m4a" },
    // Day 4
    { day: 4, week: 1, title: "The Engine of Totality: Loving God with All", quote: "Love the Lord your God with all your heart and with all your soul and with all your mind.", 
      insight: "This vertical love is the foundation. If this engine is not running, horizontal service (doing good) becomes humanistic and exhausting.", 
      challenge: "Identify the weakest area (Heart, Soul, or Mind) and spend 10-15 minutes strengthening it today.", 
      prayer: "Let this total love be the engine that drives my entire life, so that everything I do becomes an act of worship to You.", audioSrc:"/deepdive/Day4.m4a" },
    // Day 5
    { day: 5, week: 1, title: "Love in Shoe Leather: The Inseparable Link", quote: "If anyone says, 'I love God,' and hates his brother, he is a liar.", 
      insight: "Horizontal love for your neighbor is the only reliable evidence of vertical love for God. Love is an active verb, demonstrated through tangible, costly action.", 
      challenge: "Identify one relational gap and commit to one tangible, practical act of 'shoe leather' care for that person today.", 
      prayer: "Help me to love my neighbor as myself, with practical, costly, and active compassion.", audioSrc:"/deepdive/Day5.m4a" },
    // Day 6
    { day: 6, week: 1, title: "The Plērōma: Love Fulfills the Law", quote: "Love is the fulfillment of the law.", 
      insight: "Plērōma means 'to fill it up to the brim.' The Fence ('Do not steal') finds its Plērōma in the Garden ('Be radically generous').", 
      challenge: "Choose one prohibitive command (fence) and brainstorm a corresponding positive action (plērōma) that actively fulfills its loving purpose.", 
      prayer: "Give me a Plērōma heart that seeks to overflow with goodness and fulfills the law through active love.", audioSrc:"/deepdive/Day6.m4a" },
    // Day 7
    { day: 7, week: 1, title: "The Proactive Posture: Seeking Peace and Pursuing It", quote: "Seek peace and pursue it (Shalom).", 
      insight: "The required posture is that of a shalom-pursuer, actively running toward brokenness and initiating change, unlike a passive peace-consumer.", 
      challenge: "Identify one relationship that lacks shalom (wholeness) and initiate a conversation today that moves toward peace or clarity.", 
      prayer: "Give me the courage to initiate one conversation for peace today, and make me an agent of Your whole-making love.", audioSrc:"/deepdive/Day7.m4a" },
    // Day 8: WEEK 2 - The Heart of the Matter
    { day: 8, week: 2, title: "The Question That Limits: Why We Look for Loophole", quote: "But he, wanting to justify himself, asked Jesus, 'And who is my neighbor?'", 
      insight: "This question, rooted in pride, is the search for a loophole to limit compassion. Jesus refused to define boundaries for love.", 
      challenge: "Identify one group you instinctively filter out and perform one small, anonymous act of service for someone connected to that group.", 
      prayer: "Tear down my prejudices and give me the heart of Jesus, which breaks for the very people I try to avoid.", audioSrc:"/deepdive/Day8.m4a" },
    // Day 9
    { day: 9, week: 2, title: "The Failure of Inaction: The Sin of the Passersby", quote: "He passed by on the other side.", 
      insight: "The Priest and Levite's failure was the sin of omission (inaction). They prioritized their convenience and purity over their moral duty, making them accomplices to suffering.", 
      challenge: "Commit to not immediately dismissing the first plea or opportunity for help you encounter today. Ask, 'Is this the man in the ditch for me today?'.", 
      prayer: "Heal my spiritual inertia and wake me up to the opportunities You provide. Make me an actor, not just a reactor.", audioSrc:"/deepdive/Day9.m4a" },
    // Day 10
    { day: 10, week: 2, title: "The Profile of Proactive Mercy: The Samaritan’s Five Acts", quote: "When he saw him, he had compassion.", 
      insight: "The Samaritan model: Compassion, Proximity (crossed the road), Practicality (bandaging), Sacrifice (his donkey/time), and Completeness (the blank check/follow-through).", 
      challenge: "Pick one of the Samaritan's five acts (Compassion, Proximity, Practicality, Sacrifice, or Completeness) and intentionally apply it today.", 
      prayer: "Give me the Samaritan’s heart—his compassion, his willingness to get close, and his commitment to completeness.", audioSrc:"/deepdive/Day10.m4a" },
    // Day 11
    { day: 11, week: 2, title: "The Counter-Cultural Command: Overcoming Evil with Good", quote: "Do not be overcome by evil, but overcome evil with good.", 
      insight: "The Kingdom's 'third way,' rejecting fight or flight. Proactive goodness breaks the cycle of animosity and demonstrates the Gospel.", 
      challenge: "Identify one conflict. Plan one proactive, unexpected act of kindness, patience, or grace to inject into that situation.", 
      prayer: "Give me the supernatural strength to overcome the evil I face with Your good. Let me be an overcomer.", audioSrc:"/deepdive/Day11.m4a" },
    // Day 12
    { day: 12, week: 2, title: "Surrendering the Right to Retaliation", quote: "Do not repay anyone evil for evil... It is mine to avenge; I will repay.", 
      insight: "Vengeance is spiritual theft. We must surrender the right to retaliation (the fence) before we can offer a blessing (the garden). Clenched fists cannot offer goodness.", 
      challenge: "When you feel wronged, consciously state: 'Vengeance belongs to God' to halt the cycle of retaliation.", 
      prayer: "I consciously surrender my 'right' to retaliation. I trust You to be the Judge. Halt the cycle of retaliation in my heart.", audioSrc:"/deepdive/Day12.m4a" },
    // Day 13
    { day: 13, week: 2, title: "The Weapon of Blessing: The Radical Act of Prayer", quote: "Love your enemies and pray for those who persecute you.", 
      insight: "Prayer is the most profound act of good. It disarms bitterness in our own hearts and releases God's vertical power into the horizontal conflict.", 
      challenge: "Identify one person who opposes you. Commit to praying for God’s genuine blessing on them, by name, for three full minutes today.", 
      prayer: "I pray that You would free my heart from all bitterness and fill it with Your supernatural love.", audioSrc:"/deepdive/Day13.m4a" },
    // Day 14
    { day: 14, week: 2, title: "The Freedom of Forgiveness: Releasing the Debt", quote: "Unless you forgive your brother or sister from your heart.", 
      insight: "Our willingness to release the 100-denarii debt is fueled by the 10,000-talent debt God forgave us. Unforgiveness is a blockage to doing the most good.", 
      challenge: "Reflect on the 10,000-talent grace. Identify one '100-denarii' grievance and consciously release that debt.", 
      prayer: "I choose to forgive them and I release them from the debt they owe me. Unclog my heart, so that Your goodness and grace can flow freely through me.", audioSrc:"/deepdive/Day14.m4a" },
    // Day 15: WEEK 3 - The Inner Workings
    { day: 15, week: 3, title: "Fruit, Not Works: The Power of Supernatural Growth", quote: "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", 
      insight: "Goodness is a 'fruit of the Spirit' that grows naturally through surrender, not a 'work' achieved through striving or straining. Straining leads to burnout or pride.", 
      challenge: "When you feel the friction of 'striving' (anxiety, frustration), stop immediately. Pray: 'Holy Spirit, I am straining. Please take over'.", 
      prayer: "Today, fill me with a fresh sense of gratitude for my salvation. Transform my sense of duty into a spirit of delight.", audioSrc:"/deepdive/Day15.m4a" },
    // Day 16
    { day: 16, week: 3, title: "Abiding in the Vine: The Source of Sustained Goodness", quote: "Remain in me, as I also remain in you... Apart from me, you can do nothing.", 
      insight: "All fruitfulness is 100% dependent on 'abiding' (*menō*). Our connection to Christ is more important than our activity for Christ.", 
      challenge: "Use transitions in your day (doorways, ending a call) as a 10-second 'abiding' pause: 'Help me remain in the Vine right now'.", 
      prayer: "Let my first priority not be my activity for You, but my connection with You. Teach me the discipline of abiding.", audioSrc:"/deepdive/Day16.m4a" },
    // Day 17
    { day: 17, week: 3, title: "Walking by the Spirit: The Daily Discipline of Yielding", quote: "So I say, walk by the Spirit, and you will not gratify the desires of the flesh.", 
      insight: "Abiding is put into practice through the daily discipline of yielding control, saying 'No' to the desires of the flesh and 'Yes' to the promptings of the Spirit in real-time.", 
      challenge: "Identify one area of 'habitual resistance.' When the impulse comes, pause, say 'I yield, Holy Spirit,' and ask Him for strength to do the opposite.", 
      prayer: "I give You the keys. I want to 'walk' by You, not by my own impulses.", audioSrc:"/deepdive/Day17.m4a" },
    // Day 18
    { day: 18, week: 3, title: "The Humility Revolution: Overthrowing the 'Self'", quote: "Humility comes before honor.", 
      insight: "Pride (the 'self' on the throne) is the root of all spiritual failure. Humility is the necessary overthrow of the 'self'—not thinking less of yourself, but thinking of yourself less.", 
      challenge: "When you feel the urge to defend yourself or win an argument, stop. Quietly pray: 'Lord, I'm trying to justify myself again. I don't need to'.", 
      prayer: "I renounce my need to be right, my need to be seen, my need to be comfortable. I ask You to take the throne of my heart.", audioSrc:"/deepdive/Day18.m4a" },
    // Day 19
    { day: 19, week: 3, title: "Grace in the Low Places: The Posture of Humility", quote: "God opposes the proud but shows favor to the humble.", 
      insight: "Humility is the conduit for God's grace. Grace flows like water to the 'low places,' requiring accurate self-assessment and total reliance on God.", 
      challenge: "Practice intellectual humility. In your next conversation, resist offering your opinion first; focus entirely on asking questions and listening.", 
      prayer: "Help me to find the 'low place' today. Empty me of 'self' so that You can fill me with Your grace.", audioSrc:"/deepdive/Day19.m4a" },
    // Day 20
    { day: 20, week: 3, title: "The Mindset of Christ: The Scandal of Self-Emptying", quote: "He made himself nothing (kenōsis), taking the very nature of a servant.", 
      insight: "Kenōsis (self-emptying) is the radical act of laying down our 'rights' (to comfort, to be right) to serve others. We are free to empty ourselves because our identity is secure in Christ.", 
      challenge: "Identify one 'right' (e.g., right to quiet evening) that you cling to. Find one opportunity to consciously relinquish that right for the specific purpose of serving someone else.", 
      prayer: "I want the freedom that comes from kenōsis, from self-emptying. Show me one 'right' I can lay down for Your sake.", audioSrc:"/deepdive/Day20.m4a" },
    // Day 21
    { day: 21, week: 3, title: "Taking Up the Towel: Servanthood as the Highest Rank", quote: "I have set you an example that you should do as I have done for you.", 
      insight: "The towel is the daily practice of kenōsis. True greatness is measured by our willingness to perform humble, menial, unappreciated tasks, like Jesus washing the disciples' feet.", 
      challenge: "Find one humble, necessary, and unappreciated task ('towel') and do it without seeking recognition or thanks, as an act of service to Christ.", 
      prayer: "Show me the 'towel' You want me to take up. Help me to serve in the unseen, menial, and necessary ways.", audioSrc:"/deepdive/Day21.m4a" },
    // Day 22: WEEK 4 - The Mind of Christ
    { day: 22, week: 4, title: "More Than a Good Heart: The Need for Divine Strategy", quote: "Good works, which God prepared in advance for us to do.", 
      insight: "A good heart is insufficient. Good intentions without Divine Strategy often lead to unintentional chaos. Doing the most good requires precision and alignment with God's will.", 
      challenge: "Practice the 'holy halt.' Identify one significant decision you are planning and consciously halt your plans until you have sought God's wisdom.", 
      prayer: "Teach me the discipline of waiting for Your divine strategy before I act.", audioSrc:"/deepdive/Day22.m4a" },
    // Day 23
    { day: 23, week: 4, title: "The Two Wisdoms: Recognizing Earthly Vs. Heavenly", quote: "The wisdom that comes from heaven is first of all pure; then peace-loving, gentle...", 
      insight: "Wisdom from Below is rooted in 'selfish ambition' (producing disorder). Wisdom from Above is pure, peace-loving, gentle, and full of good fruit.", 
      challenge: "Review a recent decision you made. Analyze it based on the fruit in James 3:17: Was it peace-loving and gentle, or rooted in selfish ambition?.", 
      prayer: "I want the 'wisdom from above' that heals rather than hurts. Purify my motives and expose my 'self'.", audioSrc:"/deepdive/Day23.m4a" },
    // Day 24
    { day: 24, week: 4, title: "The Gracious Giver: Asking for Wisdom in Faith", quote: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.", 
      insight: "God gives wisdom generously and without shame. We must ask with single-minded faith, trusting His character completely, and rejecting double-mindedness.", 
      challenge: "Identify one area of confusion. Petition God for wisdom in that area with complete faith, and thank Him in advance for the answer.", 
      prayer: "I come to You in single-minded faith because I need Your 'wisdom from above.' I thank You in advance that You will give it to me.", audioSrc:"/deepdive/Day24.m4a" },
    // Day 25
    { day: 25, week: 4, title: "God’s Lamp: The Unchanging Guidance of the Word", quote: "Your word is a lamp for my feet and a light on my path.", 
      insight: "The written Word is the primary objective source of divine strategy. It acts as a lamp, showing us the very next step, and defining our 'good' against the culture's shifting feelings.", 
      challenge: "Choose one current situation where you need wisdom and find one specific verse or story that can be your 'lamp' for that situation today.", 
      prayer: "Forgive me for trying to walk in the dark. I commit to turning to Your Word first before I make a move.", audioSrc:"/deepdive/Day25.m4a" },
    // Day 26
    { day: 26, week: 4, title: "God’s People: The Safety of Godly Counsel", quote: "Plans fail for lack of counsel, but with many advisers they succeed.", 
      insight: "God's People are the second objective source of wisdom, providing a safety net against our blind spots and 'selfish ambition.' Humility requires communal accountability.", 
      challenge: "Seek out godly counsel regarding one small challenge. Ask a trusted Christian mentor: 'What do you see here?' or 'Can you pray for me about this?'.", 
      prayer: "Forgive me for my pride and my isolating self-reliance. Give me the 'humble heart' to seek out and receive godly advice without defensiveness.", audioSrc:"/deepdive/Day26.m4a" },
    // Day 27
    { day: 27, week: 4, title: "God’s Spirit: The Inner Guide to Good Works", quote: "Walking by the Spirit.", 
      insight: "The Spirit is the imminent Guide who illuminates the Word and gives the inner prompt to move us from inaction to the specific prepared work. We must cultivate inner silence to hear Him.", 
      challenge: "Spend five minutes in complete silence. Ask the Holy Spirit: 'What is the one good work You have prepared for me to focus on today?.", 
      prayer: "Reveal to me the specific, prepared opportunities You want me to walk in today, and give me the courage to obey immediately.", audioSrc:"/deepdive/Day27.m4a" },
    // Day 28: WEEK 5 - The Tools for the Task
    { day: 28, week: 5, title: "You Are Uniquely Gifted: God’s Distribution of Power", quote: "To each one the manifestation of the Spirit is given for the common good.", 
      insight: "Every believer is uniquely gifted with spiritual tools for purpose. We reject the pride that says our gift is everything and the fear that says our gift is too small.", 
      challenge: "Reflect on your natural passions and abilities. Ask the Holy Spirit: 'Which of these, Lord, do You intend to use as a spiritual gift for the common good?'.", 
      prayer: "Thank You for making me a unique part of Your body. Show me my tools, and make me ready to use them for Your glory.", audioSrc:"/deepdive/Day28.m4a" },
    // Day 29
    { day: 29, week: 5, title: "Stewarding Your Gift: The Responsibility of Multipliers", quote: "I was afraid, and I went and hid your talent in the ground.", 
      insight: "God expects us to invest and multiply our gifts. The third servant buried his out of fear. Burying your gift is the sin of inaction.", 
      challenge: "Overcome the 'fear of the first step.' Commit to using one of your confirmed (or suspected) spiritual gifts in one small, low-risk way today—stop burying and start investing.", 
      prayer: "Forgive me for the times I have been the third servant. Show me one way to invest my gift today, and help me to be a 'multiplier'.", audioSrc:"/deepdive/Day29.m4a" },
    // Day 30
    { day: 30, week: 5, title: "The Purpose of Prophecy: Speaking Truth with Love", quote: "The one who prophesies speaks to people for their strengthening, encouraging and comfort.", 
      insight: "Prophecy is the plērōma of speech. It is using words as tools for healing and building, delivered with love. Truth without love is brutality.", 
      challenge: "Find an opportunity to use your words for 'strengthening, encouraging, or comfort.' Speak one specific, timely word of encouragement to a person today.", 
      prayer: "Give me the gift of prophecy, the ability to speak Your truth, in Your love, for the strengthening, encouraging, and comfort of others.", audioSrc:"/deepdive/Day30.m4a" },
    // Day 31
    { day: 31, week: 5, title: "The Practical Gift of Service: Getting Your Hands Dirty", quote: "If it is serving (diakonia), then serve.", 
      insight: "This is the 'towel-taking,' 'shoe-leather' gift—love in practical works. The server is supernaturally compelled to meet unseen, menial needs, acting as the antidote to inaction.", 
      challenge: "Find one practical, menial, and unseen act of service to do. Do it anonymously, for an 'Audience of One'.", 
      prayer: "Give me the humble, practical, 'eager' gift of service. Help me to find my joy in serving, not in being seen.", audioSrc:"/deepdive/Day31.m4a" },
    // Day 32
    { day: 32, week: 5, title: "The Strategic Gift of Giving: Releasing God’s Resources", quote: "If it is giving, then give generously.", 
      insight: "The funding gift: the ability to find joy in generously and strategically funding God’s work. It is the Good Samaritan's 'blank check' and the antidote to materialism.", 
      challenge: "Identify one luxury you can sacrifice or cut back on. Strategically re-allocate that money to increase your giving.", 
      prayer: "Give me the 'eager heart' and the freedom of a cheerful, generous, and strategic giver. Make me a conduit for Your resources, not a reservoir.", audioSrc:"/deepdive/Day32.m4a" },
    // Day 33
    { day: 33, week: 5, title: "The Quiet Gift of Mercy: Caring for the Afflicted", quote: "If it is to show mercy, do it cheerfully.", 
      insight: "A supernatural empathy that feels the pain of others and is moved to alleviate it. Doing it 'cheerfully' separates divine mercy from human pity and brings hope into suffering.", 
      challenge: "Show up and offer the gift of your 'cheerful,' hopeful presence to someone who is emotionally afflicted (lonely, grieving, sick).", 
      prayer: "Give me Your gift of mercy. Break my heart for what breaks Yours. Make me a safe place for the afflicted.", audioSrc:"/deepdive/Day33.m4a" },
    // Day 34
    { day: 34, week: 5, title: "The Hidden Gift of Administration: Goodness in Order", quote: "If it is to lead, do it diligently.", 
      insight: "The 'helmsman' gift. It brings order and sustainability to ministry, steering 'good intentions' away from chaos. It is 'wisdom from above' creating systems for good to flow effectively.", 
      challenge: "Find one area of chaos (desk, schedule) and 'diligently' apply the gift of 'steering.' Bring clear, efficient shalom order to it as a spiritual act of service.", 
      prayer: "Show me one area of chaos where I can bring Your 'wisdom from above' and create the order that allows 'good' to flourish.", audioSrc:"/deepdive/Day34.m4a" },
    // Day 35: WEEK 6 - The Spheres of Action
    { day: 35, week: 6, title: "The First Mission Field: Family as the Training Ground", quote: "Our life is often a 'crucible' that exposes our flaws.", 
      insight: "The family is the primary, most difficult mission field. If we cannot practice humility, forgiveness, and active service here, we cannot do it anywhere. The friction refines our character.", 
      challenge: "Identify the one family member you find most challenging. Perform one non-negotiable, 'towel-taking' act of service for them, expecting no thanks.", 
      prayer: "Help me to love the most difficult, and to do the most good, in this first and most important mission field.", audioSrc:"/deepdive/Day35.m4a" },
    // Day 36
    { day: 36, week: 6, title: "Love in the Greenhouse: Nurturing Spouses and Children", quote: "Husbands, love your wives, just as Christ loved the church and gave himself up for her.", 
      insight: "The home requires intentional cultivation. Commands are based on mutual submission: Sacrificial love (husbands), respectful honor (wives), and nurturing encouragement (parents).", 
      challenge: "Apply the specific Ephesians 5 or 6 command relevant to your role (sacrifice, honor, or nurturing encouragement).", 
      prayer: "Give me the kenōsis heart of Christ. Teach me to love sacrificially, to lay down my rights, and to nurture.", audioSrc:"/deepdive/Day36.m4a" },
    // Day 37
    { day: 37, week: 6, title: "Work as Worship: The Audience of One", quote: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", 
      insight: "The workplace is a sacred sphere. Our work is worship, freeing us from people-pleasing. We do it with a whole heart for the 'Audience of One'.", 
      challenge: "Identify the one task you dislike the most in your job. Perform that task with excellence as an act of worship, praying: 'Lord, I am doing this for You'.", 
      prayer: "Today, I consecrate my work to You. Every email, every meeting, every task, it is all worship.", audioSrc:"/deepdive/Day37.m4a" },
    // Day 38
    { day: 38, week: 6, title: "Excellence as Witness: Integrity in the Marketplace", quote: "Do it, not only when their eye is on you... but with sincerity of heart.", 
      insight: "Our excellence and integrity are our loudest and most credible sermon. Proactive honesty, punctuality, and diligence overcome the 'passersby' who cut corners.", 
      challenge: "Identify one area where you are tempted to 'cut corners.' Attack that task with absolute, visible integrity and excellence, going the extra mile.", 
      prayer: "May my integrity be a 'garden' of goodness in a 'fence-based' world. Let my work speak of Your excellence.", audioSrc:"/deepdive/Day38.m4a" },
    // Day 39
    { day: 39, week: 6, title: "Salt and Light: Taking Goodness Publicly", quote: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.", 
      insight: "We are 'salt' (the preservative force, opposing decay) and 'light' (the visible guide, shining through good deeds). The purpose is to point the world to the Artist.", 
      challenge: "Choose to be either 'Salt' (opposing injustice) or 'Light' (a public act of kindness) intentionally today.", 
      prayer: "Make me bold, make me salty. Make me bright, a force that guides and illuminates Your goodness.", audioSrc:"/deepdive/Day39.m4a" },
    // Day 40
    { day: 40, week: 6, title: "The Final Score: What Matters Most in Eternity", quote: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.", 
      insight: "The ultimate motivation: The King's final judgment focuses on how we treated the 'least of these.' The person in need is Jesus in disguise. The sin of the 'Goats' was omission.", 
      challenge: "Find one specific, tangible way to serve 'the least of these' (e.g., donate food, visit the lonely). As you do it, remember you are serving Christ Himself.", 
      prayer: "Open my eyes to see You in the 'least of these.' Let my life be a 'garden' full of 'good fruit'.", audioSrc:"/deepdive/Day40.m4a" },
    // Bonus Day 1
    { day: 41, week: 7, title: "Bonus Day 1: The Habit of Review", quote: "This was not the finish line... this was merely the starting line.", 
      insight: "The Habit of Review is a daily rudder to sustain transformation, checking three areas: Posture (Towel Check), Power (Vine Check), and Purity (Wisdom Check).", 
      challenge: "Create one simple, sustainable daily habit (e.g., setting an alarm for review or placing a physical towel as a reminder) that carries the campaign forward.", 
      prayer: "Give me the discipline to create a sustainable 'Habit of Review' that keeps me aligned with You.", audioSrc:"/deepdive/Day41.m4a" },
    // Bonus Day 2
    { day: 42, week: 7, title: "Bonus Day 2: The Community Commitment", quote: "The Christian life is not a solitary race; it is a team sport played together.", 
      insight: "We need partnership for Accountability (the fence), Encouragement (the garden), and Collective Power (uniting diverse gifts). We are a 'city on a hill' together.", 
      challenge: "Reach out to your partner or small group and commit to one tangible act of 'good' you will do together in the next 30 days. Move from 'me' to 'we'.", 
      prayer: "Unite our gifts, our strategies, and our hearts, so that together we can be a brilliant light that 'does the most good' for Your glory.", audioSrc:"/deepdive/Day42.m4a" },
];

// --- 2. GLOBAL STATE AND NAVIGATION ---
let currentDay = 1; // For PWA demo, can be calculated dynamically: (Date.now() - campaignStartDate) / (1000 * 60 * 60 * 24)

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation buttons active state
    const navButtons = document.querySelectorAll('#nav-menu button');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('onclick').includes(`'${sectionId}'`)) {
            button.classList.add('active');
        }
    });

    // Load content specific to the newly active section
    if (sectionId === 'daily-praxis') {
        loadDailyContent();
    } else if (sectionId === 'journey-map') {
        loadJourneyMap();
    } else if (sectionId === 'dashboard') {
        loadDashboard();
    } else if (sectionId === 'resources') {
        loadDeepDive();
    }
}

// --- 3. DYNAMIC CONTENT LOADING ---

function loadDashboard() {
    const totalDays = dailyContent.length;
    const completionPercentage = Math.min(100, (currentDay / totalDays) * 100).toFixed(0);
    const currentWeek = dailyContent[currentDay - 1] ? dailyContent[currentDay - 1].week : 7;
    const weekMap = { 1: "Call to Active Faith", 2: "Heart of the Matter", 3: "Inner Workings", 4: "Mind of Christ", 5: "Tools for the Task", 6: "Spheres of Action", 7: "After the Journey" };

    document.getElementById('progress-status').innerHTML = 
        `Day ${currentDay} of ${totalDays} | Week ${currentWeek}: ${weekMap[currentWeek]} (${completionPercentage}%)`;
    document.getElementById('progress-bar').style.width = completionPercentage + '%';
}


function loadDailyContent() {
    const dayIndex = currentDay - 1;
    if (dayIndex >= 0 && dayIndex < dailyContent.length) {
        const dayData = dailyContent[dayIndex];
        
        document.getElementById('daily-title').textContent = `Day ${dayData.day}: ${dayData.title}`;
        document.getElementById('daily-quote').textContent = dayData.quote;
        document.getElementById('daily-insight').textContent = dayData.insight;
        document.getElementById('daily-challenge').textContent = dayData.challenge;
        document.getElementById('daily-prayer-prompt').textContent = dayData.prayer;
        
        // Load existing journal entry if available
        const savedEntry = localStorage.getItem(`journal-day-${currentDay}`);
        document.getElementById('journal-entry').value = savedEntry || "";
        document.getElementById('save-status').textContent = savedEntry ? "Reflection loaded." : "";
    }
}

function loadDeepDive() {
    console.log("loadDeepDive() was called!");
    const dayIndex = currentDay - 1;
    if (dayIndex >= 0 && dayIndex < dailyContent.length) {

        const dayData = dailyContent[dayIndex];
        const audioContainer = document.getElementById('audioContainer');

        audioContainer.innerHTML = ""; // clear old

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.preload = "metadata"; // loads faster

        // Fix path
        let src = dayData.audioSrc;
        // If leading slash causes issues, uncomment:
        // src = "./" + src.replace(/^\//, "");

        // Create proper <source>
        const source = document.createElement("source");
        source.src = src;
        source.type = "audio/mp4"; // correct MIME type for .m4a
        audio.appendChild(source);

        // Force browser to process source
        audio.load();

        // Debug message (optional)
        const debugMsg = document.createElement("div");
        debugMsg.textContent = "Audio file: " + src;

        audioContainer.appendChild(debugMsg);
        audioContainer.appendChild(audio);
    }
}


function loadJourneyMap() {
    const accordion = document.getElementById('weekly-accordion');
    accordion.innerHTML = '';
    
    let currentWeek = 0;
    let weekTitle = '';
    let weekContent = '';
    
    dailyContent.forEach((dayData, index) => {
        if (dayData.week !== currentWeek) {
            // Close previous week if exists
            if (currentWeek !== 0) {
                accordion.innerHTML += `
                    <div class="week-header" onclick="toggleAccordion(this)">Week ${currentWeek}: ${weekTitle}</div>
                    <div class="week-content">${weekContent}</div>
                `;
            }
            // Start new week
            currentWeek = dayData.week;
            weekTitle = getWeekTitle(currentWeek);
            weekContent = '';
        }

        weekContent += `<p><strong>Day ${dayData.day}:</strong> ${dayData.title}</p>`;
        
        // Handle the last day
        if (index === dailyContent.length - 1) {
             accordion.innerHTML += `
                <div class="week-header" onclick="toggleAccordion(this)">Week ${currentWeek}: ${weekTitle}</div>
                <div class="week-content">${weekContent}</div>
            `;
        }
    });
}

function getWeekTitle(weekNum) {
    const titles = {
        1: "The Call to Active Faith",
        2: "The Heart of the Matter – A Love That Acts",
        3: "The Inner Workings – Power, Posture, and Practice",
        4: "The Mind of Christ – Wisdom, Strategy, and Guidance",
        5: "The Tools for the Task – Your Divine Gifting",
        6: "The Spheres of Action – Family, Work, and World",
        7: "Bonus Section: After the Journey"
    };
    return titles[weekNum] || "Campaign Review";
}

function toggleAccordion(headerElement) {
    const content = headerElement.nextElementSibling;
    const isExpanded = content.classList.contains('expanded');
    
    // Collapse all first
    document.querySelectorAll('.week-content').forEach(c => c.classList.remove('expanded'));

    // Expand target
    if (!isExpanded) {
        content.classList.add('expanded');
    }
}

// --- 4. JOURNAL FUNCTIONALITY ---

function saveJournal() {
    const entry = document.getElementById('journal-entry').value;
    localStorage.setItem(`journal-day-${currentDay}`, entry);
    
    const saveStatus = document.getElementById('save-status');
    saveStatus.textContent = 'Reflection saved successfully!';
    setTimeout(() => {
        saveStatus.textContent = '';
    }, 3000);
}


// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current day has been set in local storage, otherwise use 1
    // (For a real PWA, you'd calculate currentDay dynamically based on date)
    // For this demo, we keep it at 1 unless manually changed in the script setup.
    
    showSection('dashboard');
    loadDashboard();
});