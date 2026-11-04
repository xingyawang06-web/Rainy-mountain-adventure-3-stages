'use strict';
// Teaching data extracted from the two repository Word documents.
const CONTENT = {
  "paragraphs": {
    "1": "A single knoll rises out of the plain in Oklahoma, north and west of the Wichita Range. For my people, the Kiowas, it is an old landmark, and they gave it the name Rainy Mountain. The hardest weather in the world is there. Winter brings blizzards, hot tornadic winds arise in the spring, and in summer the prairie is an anvil's edge. The grass turns brittle and brown, and it cracks beneath your feet. There are green belts along the rivers and creeks, linear groves of hickory and pecan, willow and witch hazel. At a distance in July or August the steaming foliage seems almost to writhe in fire. Great green and yellow grasshoppers are everywhere in the tall grass, popping up like corn to sting the flesh, and tortoises crawl about on the red earth, going nowhere in the plenty of time. Loneliness is an aspect of the land. All things in the plain are isolate; there is no confusion of objects in the eye, but one hill or one tree or one man. To look upon that landscape in the early morning, with the sun at your back, is to lose the sense of proportion. Your imagination comes to life, and this, you think, is where Creation was begun.",
    "2": "I returned to Rainy Mountain in July. My grandmother had died in the spring, and I wanted to be at her grave. She had lived to be very old and at last infirm. Her only living daughter was with her when she died, and I was told that in death her face was that of a child.",
    "3": "I like to think of her as a child. When she was born, the Kiowas were living the last great moment of their history. For more than a hundred years they had controlled the open range from the Smoky Hill River to the Red, from the headwaters of the Canadian to the fork of the Arkansas and Cimarron. In alliance with the Comanches, they had ruled the whole of the southern Plains. War was their sacred business, and they were among the finest horsemen the world has ever known. But warfare for the Kiowas was preeminently a matter of disposition rather than of survival, and they never understood the grim, unrelenting advance of the U.S. Cavalry. When at last, divided and illprovisioned, they were driven onto the Staked Plains in the cold rains of autumn, they fell into panic. In Palo Duro Canyon they abandoned their crucial stores to pillage and had nothing then but their lives. In order to save themselves, they surrendered to the soldiers at Fort Sill and were imprisoned in the old stone corral that now stands as a military museum. My grandmother was spared the humiliation of those high gray walls by eight or ten years, but she must have known from birth the affliction of defeat, the dark brooding of old warriors.",
    "4": "Her name was Aho, and she belonged to the last culture to evolve in North America. Her forebears came down from the high country in western Montana nearly three centuries ago. They were a mountain people, a mysterious tribe of hunters whose language has never been positively classified in any major group. In the late seventeenth century they began a long migration to the south and east. It was a journey toward the dawn, and it led to a golden age. Along the way the Kiowas were befriended by the Crows, who gave them the culture and religion of the Plains. They acquired horses, and their ancient nomadic spirit was suddenly free of the ground. They acquired Tai-me, the sacred Sun Dance doll, from that moment the object and symbol of their worship, and so shared in the divinity of the sun. Not least, they acquired the sense of destiny, therefore courage and pride. When they entered upon the southern Plains they had been transformed. No longer were they slaves to the simple necessity of survival; they were a lordly and dangerous society of fighters and thieves, hunters and priests of the sun. According to their origin myth, they entered the world through a hollow log. From one point of view, their migration was the fruit of an old prophecy, for indeed they emerged from a sunless world.",
    "5": "Although my grandmother lived out her long life in the shadow of Rainy Mountain, the immense landscape of the continental interior lay like memory in her blood. She could tell of the Crows, whom she had never seen, and of the Black Hills, where she had never been. I wanted to see in reality what she had seen more perfectly in the mind's eye, and traveled fifteen hundred miles to begin my pilgrimage.",
    "6": "Yellowstone, it seemed to me, was the top of the world, a region of deep lakes and dark timber, canyons and waterfalls. But, beautiful as it is, one might have the sense of confinement there. The skyline in all directions is close at hand, the high wall of the woods and deep cleavages of shade. There is a perfect freedom in the mountains, but it belongs to the eagle and the elk, the badger and the bear. The Kiowas reckoned their stature by the distance they could see, and they were bent and blind in the wilderness.",
    "7": "Descending eastward, the highland meadows are a stairway to the plain. In July the inland slope of the Rockies is luxuriant with flax and buckwheat, stonecrop and larkspur. The earth unfolds and the limit of the land recedes. Clusters of trees, and animals grazing far in the distance, cause the vision to reach away and wonder to build upon the mind. The sun follows a longer course in the day, and the sky is immense beyond all comparison. The great billowing clouds that sail upon it are shadows that move upon the grain like water, dividing light. Farther down, in the land of the Crows and Blackfeet, the plain is yellow. Sweet clover takes hold of the hills and bends upon itself to cover and seal the soil. There the Kiowas paused on their way; they had come to the place where they must change their lives. The sun is at home on the plains. Precisely there does it have the certain character of a god. When the Kiowas came to the land of the Crows, they could see the darklees of the hills at dawn across the Bighorn River, the profusion of light on the grain shelves, the oldest deity ranging after the solstices. Not yet would they veer southward to the caldron of the land that lay below; they must wean their blood from the northern winter and hold the mountains a while longer in their view. They bore Tai-me in procession to the east.",
    "8": "A dark mist lay over the Black Hills, and the land was like iron. At the top of a ridge I caught sight of Devil's Tower upthrust against the gray sky as if in the birth of time the core of the earth had broken through its crust and the motion of the world was begun. There are things in nature that engender an awful quiet in the heart of man; Devil's Tower is one of them. Two centuries ago, because they could not do otherwise, the Kiowas made a legend at the base of the rock. My grandmother said:\n“Eight children were there at play, seven sisters and their brother. Suddenly the boy was struck dumb; he trembled and began to run upon his hands and feet. His fingers became claws, and his body was covered with fur. Directly there was a bear where the boy had been. The sisters were terrified; they ran, and the bear after them. They came to the stump of a great tree, and the tree spoke to them. It bade them climb upon it, and as they did so it began to rise into the air. The bear came to kill them, but they were just beyond its reach. It reared against the tree and scored the bark all around with its claws. The seven sisters were borne into the sky, and they became the stars of the Big Dipper.”\nFrom that moment, and so long as the legend lives, the Kiowas have kinsmen in the night sky. Whatever they were in the mountains, they could be no more. However tenuous their well-being, however much they had suffered and would suffer again, they had found a way out of the wilderness.",
    "9": "My grandmother had a reverence for the sun, a holy regard that now is all but gone out of mankind. There was a wariness in her, and an ancient awe. She was a Christian in her later years, but she had come a long way about, and she never forgot her birthright. As a child she had been to the Sun Dances; she had taken part in those annual rites, and by them she had learned the restoration of her people in the presence of Tai-me. She was about seven when the last Kiowa Sun Dance was held in 1887 on the Washita River above Rainy Mountain Creek. The buffalo were gone. In order to consummate the ancient sacrifice--to impale the head of a buffalo bull upon the medicine tree--a delegation of old men journeyed into Texas, there to beg and barter for an animal from the Goodnight herd. She was ten when the Kiowas came together for the last time as a living Sun Dance culture. They could find no buffalo; they had to hang an old hide from the sacred tree. Before the dance could begin, a company of soldiers rode out from Fort Sill under orders to disperse the tribe. Forbidden without cause the essential act of their faith, having seen the wild herds slaughtered and left to rot upon the ground, the Kiowas backed away forever from the medicine tree. That was July 20, 1890, at the great bend of the Washita. My grandmother was there. Without bitterness, and for as long as she lived, she bore a vision of deicide.",
    "10": "Now that I can have her only in memory, I see my grandmother in the several postures that were peculiar to her: standing at the wood stove on a winter morning and turning meat in a great iron skillet; sitting at the south window, bent above her beadwork, and afterwards, when her vision failed, looking down for a long time into the fold of her hands; going out upon a cane, very slowly as she did when the weight of age came upon her; praying. I remember her most often at prayer. She made long, rambling prayers out of suffering and hope, having seen many things. I was never sure that I had the right to hear, so exclusive were they of all mere custom and company. The last time I saw her she prayed standing by the side of her bed at night, naked to the waist, the light of a kerosene lamp moving upon her dark skin. Her long, black hair, always drawn and braided in the day, lay upon her shoulders and against her breasts like a shawl. I do not speak Kiowa, and I never understood her prayers, but there was something inherently sad in the sound, some merest hesitation upon the syllables of sorrow. She began in a high and descending pitch, exhausting her breath to silence; then again and again--and always the same intensity of effort, of something that is, and is not, like urgency in the human voice. Transported so in the dancing light among the shadows of her room, she seemed beyond the reach of time. But that was illusion; I think I knew then that I should not see her again.",
    "11": "Houses are like sentinels in the plain, old keepers of the weather watch. There, in a very little while, wood takes on the appearance of great age. All colors wear soon away in the wind and rain, and then the wood is burned gray and the grain appears and the nails turn red with rust. The windowpanes are black and opaque; you imagine there is nothing within, and indeed there are many ghosts, bones given up to the land. They stand here and there against the sky, and you approach them for a longer time than you expect. They belong in the distance; it is their domain.",
    "12": "Once there was a lot of sound in my grandmother's house, a lot of coming and going, feasting and talk. The summers there were full of excitement and reunion. The Kiowas are a summer people; they abide the cold and keep to themselves, but when the season turns and the land becomes warm and vital they cannot hold still; an old love of going returns upon them. The aged visitors who came to my grandmother's house when I was a child were made of lean and leather, and they bore themselves upright. They wore great black hats and bright ample shirts that shook in the wind. They rubbed fat upon their hair and wound their braids with strips of colored cloth. Some of them painted their faces and carried the scars of old and cherished enmities. They were an old council of warlords, come to remind and be reminded of who they were. Their wives and daughters served them well. The women might indulge themselves; gossip was at once the mark and compensation of their servitude. They made loud and elaborate talk among themselves, full of jest and gesture, fright and false alarm. They went abroad in fringed and flowered shawls, bright beadwork and German silver. They were at home in the kitchen, and they prepared meals that were banquets.",
    "13": "There were frequent prayer meetings, and great nocturnal feasts. When I was a child I played with my cousins outside, where the lamplight fell upon the ground and the singing of the old people rose up around us and carried away into the darkness. There were a lot of good things to eat, a lot of laughter and surprise. And afterwards, when the quiet returned, I lay down with my grandmother and could hear the frogs away by the river and feel the motion of the air.",
    "14": "Now there is a funeral silence in the rooms, the endless wake of some final word. The walls have closed in upon my grandmother's house. When I returned to it in mourning, I saw for the first time in my life how small it was. It was late at night, and there was a white moon, nearly full. I sat for a long time on the stone steps by the kitchen door. From there I could see out across the land; I could see the long row of trees by the creek, the low light upon the rolling plains, and the stars of the Big Dipper. Once I looked at the moon and caught sight of a strange thing. A cricket had perched upon the handrail, only a few inches away from me. My line of vision was such that the creature filled the moon like a fossil. It had gone there, I thought, to live and die, for there, of all places, was its small definition made whole and eternal. A warm wind rose up and purled like the longing within me.",
    "15": "The next morning I awoke at dawn and went out on the dirt road to Rainy Mountain. It was already hot, and the grasshoppers began to fill the air. Still, it was early in the morning, and the birds sang out of the shadows. The long yellow grass on the mountain shone in the bright light, and a scissortail hied above the land. There, where it ought to be, at the end of a long and legendary way, was my grandmother's grave. Here and there on the dark stones were ancestral names. Looking back once, I saw the mountain and came away."
  },
  "checkpoints": [
    {
      "title": "Origins",
      "guiding": "Where did the Kiowas come from, and how did they originally live?",
      "challenges": [
        {
          "title": "Locate the Origins",
          "question": "Where did the Kiowas originally live?",
          "options": [
            "In the high country of western Montana.",
            "On the southern Plains of Oklahoma."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            4
          ],
          "feedback": "Their early homeland was in the northern highlands.",
          "notes": ""
        },
        {
          "title": "Discover Their Early Life",
          "question": "How did the Kiowas originally live?",
          "options": [
            "As nomadic people who relied on horses ",
            "As mountain hunters who depended on hunting for survival"
          ],
          "answers": [
            1
          ],
          "type": "single",
          "refs": [
            4
          ],
          "feedback": "Find the words describing their early way of life.",
          "notes": ""
        }
      ],
      "clue": "Clue Card 1 — Origins\n• Original Homeland: The high country in western Montana\n• Original Way of Life: Mountain people and hunters",
      "guide": "Gate 1 — Origins\nText  P4\nGuiding Question  Where did the Kiowas come from, and how did they originally live?\nChallenge 1 — Locate the Origins\nQuestion  Where did the Kiowas originally live?\nA. In the high country of western Montana.\nB. On the southern Plains of Oklahoma.\nCorrect Answer  A\nEvidence  P4: original homeland\nFollow-up / Feedback  Their early homeland was in the northern highlands.\nChallenge 2 — Discover Their Early Life\nQuestion  How did the Kiowas originally live?\nA. As nomadic people who relied on horses \nB. As mountain hunters who depended on hunting for survival\nCorrect Answer  B\nEvidence  P4: early hunting and later transformation\nFollow-up / Feedback  Find the words describing their early way of life.\nAfter students answer both multiple-choice questions correctly, display an Evidence Challenge:\n“Which expressions in Paragraph 4 support your answers?”\nStudents discuss and identify the relevant textual evidence.\nThe teacher uses a Confirm Evidence button to reveal the evidence and unlock the clue card.\nClue Card 1 — Origins\n• Original homeland: The high country in western Montana\n• Original way of life: Mountain people and hunters\n• Historical stage: Before acquiring horses and undergoing their later cultural transformation\nCompletion  Gate completed; clues saved to the team collection."
    },
    {
      "title": "Migration & Transformation",
      "guiding": "How did migration transform the Kiowas and their way of life?",
      "challenges": [
        {
          "title": "Trace the Journey",
          "question": "According to Paragraph 4, in which direction did the Kiowas migrate, and which region did they eventually enter?",
          "options": [],
          "answers": [
            "south",
            "east",
            "southern"
          ],
          "type": "blanks",
          "refs": [
            4
          ],
          "feedback": "Well done! You have traced the Kiowas’ migration route.",
          "notes": "Evidence Challenge:\nFind the expressions in Paragraph 4 that support your answers.\nExpected Textual Evidence:\n• “to the south and east”\n• “the southern Plains”\nCorrect Feedback:\nWell done! You have traced the Kiowas’ migration route.\nIncorrect Feedback:\nCheck Paragraph 4 again. Pay attention to the direction of migration and the region the Kiowas entered.\n"
        },
        {
          "title": "Discover the Transformation",
          "question": "What major changes did the Kiowas experience during their migration?",
          "options": [
            "Lifestyle",
            "Political Institutions",
            "Cultural Practices and Religious Beliefs",
            "Collective Values and Identity",
            "Relationship with the Environment"
          ],
          "answers": [
            0,
            2,
            3,
            4
          ],
          "type": "multi",
          "refs": [
            4,
            6,
            7,
            8
          ],
          "feedback": "Discuss the evidence supporting each selection.",
          "notes": "Evidence Challenge\nFind textual evidence to support each of your choices.\nExpected Textual Evidence:\n* A. Lifestyle (P4): Acquisition of horses; nomadic spirit freed of the ground; no longer slaves to the simple necessity of survival.\n* C. Cultural Practices and Religious Beliefs (P4, P7–8): Tai-me; Sun Dance; divinity of the sun; Devil’s Tower legend.\n* D. Collective Values and Identity (P4, P6): A sense of destiny, courage, and pride; fighters, hunters, and priests of the sun; reckoning their stature by the distance they could see.\n* E. Relationship with the Environment (P6–8): The contrast between forests and open landscapes; the experience of leaving the northern mountains; the spiritual connection between the Kiowas, Devil’s Tower, and the night sky.\nDistractor Explanation:\n* B. Political Institutions: The referenced paragraphs do not provide sufficient evidence of changes in the Kiowas’ political institutions during migration.\nTeaching Sequence:\nStudents select the relevant categories → identify textual evidence → discuss and confirm their interpretations → proceed to the next challenge. \n"
        },
        {
          "title": "The Legend of Devil’s Tower",
          "question": "What does the legend of the seven sisters reveal?",
          "options": [
            "A mythical explanation for the origin of a natural landscape feature",
            "A spiritual connection between the Kiowas and the stars",
            "The belief that Devil’s Tower was a sacred site for religious ceremonies",
            "The belief that the stars protected the Kiowas from dangers during migration"
          ],
          "answers": [
            0,
            1
          ],
          "type": "multi",
          "refs": [
            8
          ],
          "feedback": "Discuss the evidence supporting each selection.",
          "notes": "Evidence Challenge\nFind textual evidence to support your choices.\nExpected Textual Evidence and Interpretation:\n* A. The mythical origin of a natural landscape feature: The tree stump rises into the air, and the bear leaves claw marks on its surface. The legend provides a mythical explanation for the formation and appearance of Devil’s Tower.\n* B. A spiritual connection with the stars: The seven sisters become the stars of the Big Dipper. The author describes them as “their kinsmen in the night sky,” suggesting an enduring spiritual connection between the Kiowas and the stars.\nDistractor Explanations:\n* C: The legend gives Devil’s Tower cultural and spiritual significance but does not establish it as a site for religious ceremonies.\n* D: The seven sisters become stars, but the text does not state that the stars protect the Kiowas during migration.\nConcluding Reflection — Migration & Transformation\nAfter students complete the Evidence Challenge, draw their attention to the author’s concluding reflection:\nKey Textual Evidence:\n* “Whatever they were in the mountains, they could be no more.”\n* “they had found a way out of the wilderness.”\n\nTeacher’s Guiding Question:\nWhat do these two statements suggest about the Kiowas’ transformation?\nExpected Understanding:\nThe Kiowas’ migration was more than a geographical journey. It marked a transformation in their way of life, cultural and religious traditions, and collective values and identity.\nLeaving the wilderness represents both a physical movement away from the mountainous forests and a broader transition into a new stage of tribal history.\nDespite the hardships they had experienced and would face again, the Kiowas had become a different people.\nTeaching Sequence:\nStudents select the correct interpretations → identify supporting evidence → discuss the cultural significance of the legend → interpret the author’s concluding reflection → complete Challenge 3. \n"
        }
      ],
      "clue": "Clue Card 2 — Migration & Transformation\n• Migration Route: From western Montana to the Southern Plains\n• Major Transformations: Lifestyle; Cultural practices and religious beliefs; Collective values and identity; Relationship with the environment.",
      "guide": "Gate 2 — Migration & Transformation\nText  P4, P6–P8\nGuiding Question  How did migration transform the Kiowas and their way of life?\nChallenge 1 — Trace the Journey\nText: Paragraph 4\nQuestion: According to Paragraph 4, in which direction did the Kiowas migrate, and which region did they eventually enter?\nComplete the migration route:\nThe high country in western Montana\n↓\nTo the ________ and ________\n↓\nThe ________ Plains\nCorrect Answers:\n1. south\n2. east\n3. southern\nEvidence Challenge:\nFind the expressions in Paragraph 4 that support your answers.\nExpected Textual Evidence:\n• “to the south and east”\n• “the southern Plains”\nCorrect Feedback:\nWell done! You have traced the Kiowas’ migration route.\nIncorrect Feedback:\nCheck Paragraph 4 again. Pay attention to the direction of migration and the region the Kiowas entered.\nChallenge 2 — Discover the Transformation\nQuestion Type: Multiple Selection (Select All That Apply)\nText Reference: Paragraphs 4 and 6–8\nQuestion: What major changes did the Kiowas experience during their migration?\nSelect all that apply. Find textual evidence to support your choices.\nOptions:\nA. Lifestyle\nB. Political Institutions\nC. Cultural Practices and Religious Beliefs\nD. Collective Values and Identity\nE. Relationship with the Environment\nCorrect Answers: A, C, D, E\nIncorrect Answer: B\nEvidence Challenge\nFind textual evidence to support each of your choices.\nExpected Textual Evidence:\n* A. Lifestyle (P4): Acquisition of horses; nomadic spirit freed of the ground; no longer slaves to the simple necessity of survival.\n* C. Cultural Practices and Religious Beliefs (P4, P7–8): Tai-me; Sun Dance; divinity of the sun; Devil’s Tower legend.\n* D. Collective Values and Identity (P4, P6): A sense of destiny, courage, and pride; fighters, hunters, and priests of the sun; reckoning their stature by the distance they could see.\n* E. Relationship with the Environment (P6–8): The contrast between forests and open landscapes; the experience of leaving the northern mountains; the spiritual connection between the Kiowas, Devil’s Tower, and the night sky.\nDistractor Explanation:\n* B. Political Institutions: The referenced paragraphs do not provide sufficient evidence of changes in the Kiowas’ political institutions during migration.\nTeaching Sequence:\nStudents select the relevant categories → identify textual evidence → discuss and confirm their interpretations → proceed to the next challenge. \nChallenge 3 — The Legend of Devil’s Tower\nQuestion Type: Multiple Selection (Select All That Apply)\nText Reference: Paragraphs 8: The Seven Sisters Legend and the Author’s Reflection\nQuestion: What does the legend of the seven sisters reveal?\nSelect all that apply. Find textual evidence to support your choices.\nOptions:\nA. A mythical explanation for the origin of a natural landscape feature\nB. A spiritual connection between the Kiowas and the stars\nC. The belief that Devil’s Tower was a sacred site for religious ceremonies\nD. The belief that the stars protected the Kiowas from dangers during migration\nCorrect Answers: A, B\nIncorrect Answers: C, D\nEvidence Challenge\nFind textual evidence to support your choices.\nExpected Textual Evidence and Interpretation:\n* A. The mythical origin of a natural landscape feature: The tree stump rises into the air, and the bear leaves claw marks on its surface. The legend provides a mythical explanation for the formation and appearance of Devil’s Tower.\n* B. A spiritual connection with the stars: The seven sisters become the stars of the Big Dipper. The author describes them as “their kinsmen in the night sky,” suggesting an enduring spiritual connection between the Kiowas and the stars.\nDistractor Explanations:\n* C: The legend gives Devil’s Tower cultural and spiritual significance but does not establish it as a site for religious ceremonies.\n* D: The seven sisters become stars, but the text does not state that the stars protect the Kiowas during migration.\nConcluding Reflection — Migration & Transformation\nAfter students complete the Evidence Challenge, draw their attention to the author’s concluding reflection:\nKey Textual Evidence:\n* “Whatever they were in the mountains, they could be no more.”\n* “they had found a way out of the wilderness.”\n\nTeacher’s Guiding Question:\nWhat do these two statements suggest about the Kiowas’ transformation?\nExpected Understanding:\nThe Kiowas’ migration was more than a geographical journey. It marked a transformation in their way of life, cultural and religious traditions, and collective values and identity.\nLeaving the wilderness represents both a physical movement away from the mountainous forests and a broader transition into a new stage of tribal history.\nDespite the hardships they had experienced and would face again, the Kiowas had become a different people.\nTeaching Sequence:\nStudents select the correct interpretations → identify supporting evidence → discuss the cultural significance of the legend → interpret the author’s concluding reflection → complete Challenge 3. \nAfter students complete all three challenges, present an integrated summary of their findings.\nClue Card 2 — Migration & Transformation\n1. Migration Route\n* Origin: The high country of western Montana\n* Direction: Southward and eastward\n* Destination region: The southern Plains\n2. Major Transformations\n* Lifestyle: Acquisition of horses; greater mobility; transformation beyond basic survival.\n* Cultural Practices and Religious Beliefs: Tai-me, Sun Dance, and worship of the sun.\n* Collective Values and Identity: A growing sense of destiny, courage, and pride; a transformed society of fighters, hunters, and priests of the sun.\n* Relationship with the Environment: Movement from mountainous forests toward open landscapes; cultural and spiritual connections with natural landmarks and the night sky.\n3. Mythology and Cultural Traditions\n* Devil’s Tower: A natural landmark explained through the legend of the seven sisters.\n* The Big Dipper: The seven sisters become stars, establishing an enduring spiritual connection between the Kiowas and the night sky.\n4. Key Textual Insight\n “Whatever they were in the mountains, they could be no more.”\n “they had found a way out of the wilderness.”\nCentral Understanding:\nThe Kiowas’ migration was more than a geographical journey. It marked a profound transformation in their way of life, cultural and religious traditions, collective values, and identity.\nTeaching Sequence:\n\nStudents complete Challenges 1–3 → review and integrate their textual evidence → teacher confirms the findings → collect Clue Card 2 — Migration & Transformation.\nThe collected clue card will be used in the Final Gate’s Tribal History mind-mapping activity.\nCompletion  Gate 2 completed; clues saved to the team collection."
    },
    {
      "title": "Rise & Decline",
      "guiding": "How did the Kiowas rise to power, and what happened during their decline?",
      "challenges": [
        {
          "title": "Historical Sequence",
          "question": "Arrange the events chronologically.",
          "options": [
            "Rise to power → military defeat → disruption of traditional ceremonies.",
            "Military defeat → acquisition of horses → rise to power."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            3,
            9
          ],
          "feedback": "This is a broad historical sequence, not a single causal chain.",
          "notes": ""
        },
        {
          "title": "Understand Their Glory",
          "question": "What characterized their period of power?",
          "options": [
            "Cultural exchange and trade with neighboring tribes.",
            "Skilled horsemen and powerful warriors on the southern Plains."
          ],
          "answers": [
            1
          ],
          "type": "single",
          "refs": [
            3,
            4
          ],
          "feedback": "Identify the text’s details about their power.",
          "notes": ""
        },
        {
          "title": "Understand Their Loss",
          "question": "What does the account of the last Sun Dances reveal?",
          "options": [
            "Disruption of a central religious and cultural tradition.",
            "The Kiowas had no religious traditions."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            9
          ],
          "feedback": "Was the decline only military and political? Explain.",
          "notes": ""
        }
      ],
      "clue": "Clue Card\n• Power and prosperity on southern Plains\n• Skilled horsemen and warriors\n• Military defeat and surrender\n• Disruption of Sun Dance and traditional life",
      "guide": "Gate 3 — Rise & Decline\nText  P3–P4, P9\nGuiding Question  How did the Kiowas rise to power, and what happened during their decline?\nChallenge 1 — Historical Sequence\nQuestion  Arrange the events chronologically.\nA. Rise to power → military defeat → disruption of traditional ceremonies.\nB. Military defeat → acquisition of horses → rise to power.\nCorrect Answer  A\nEvidence  P3, P9\nFollow-up / Feedback  This is a broad historical sequence, not a single causal chain.\nChallenge 2 — Understand Their Glory\nQuestion  What characterized their period of power?\nA. Cultural exchange and trade with neighboring tribes.\nB. Skilled horsemen and powerful warriors on the southern Plains.\nCorrect Answer  B\nEvidence  P3–P4\nFollow-up / Feedback  Identify the text’s details about their power.\nChallenge 3 — Understand Their Loss\nQuestion  What does the account of the last Sun Dances reveal?\nA. Disruption of a central religious and cultural tradition.\nB. The Kiowas had no religious traditions.\nCorrect Answer  A\nEvidence  P9\nFollow-up / Feedback  Was the decline only military and political? Explain.\nClue Card\n• Power and prosperity on southern Plains\n• Skilled horsemen and warriors\n• Military defeat and surrender\n• Disruption of Sun Dance and traditional life\nCompletion  Gate completed; clues saved to the team collection."
    },
    {
      "title": "Aho’s Life and Memories",
      "guiding": "How was Aho’s life connected to Kiowa history and cultural traditions?",
      "challenges": [
        {
          "title": "Aho’s Place in History",
          "question": "What was the Kiowas’ historical situation when Aho was born?",
          "options": [
            "The Kiowas were still enjoying the height of their power and freedom.",
            "The Kiowas had already been defeated, and Aho was born into the aftermath of their defeat."
          ],
          "answers": [
            1
          ],
          "type": "single",
          "refs": [
            3
          ],
          "feedback": "How was her life shaped by historical change?",
          "notes": ""
        },
        {
          "title": "Memory of Ancestral Lands",
          "question": "Why did lands Aho had never seen still matter?",
          "options": [
            "She had witnessed the glory of every ancestral place in person.",
            "She inherited a cultural connection to the ancestral past."
          ],
          "answers": [
            1
          ],
          "type": "single",
          "refs": [
            5
          ],
          "feedback": "Find “like memory in her blood”; distinguish inherited and personal memory.",
          "notes": ""
        },
        {
          "title": "Aho and Cultural Traditions",
          "question": "What do her Sun Dance memories suggest?",
          "options": [
            "She retained connections to Kiowa religious traditions.",
            "She remembered the Sun Dance mainly as a social gathering."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            9
          ],
          "feedback": "Identify beliefs and practices significant to Aho.",
          "notes": ""
        }
      ],
      "clue": "Clue Card\n• Birth during historical change\n• Inherited memories of ancestral lands\n• Reverence for the sun\n• Sun Dance memories and Kiowa traditions",
      "guide": "Gate 4 — Aho’s Life and Memories\nText  P3, P5, P9\nGuiding Question  How was Aho’s life connected to Kiowa history and cultural traditions?\nChallenge 1 — Aho’s Place in History\nQuestion  What was the Kiowas’ historical situation when Aho was born?\nA. The Kiowas were still enjoying the height of their power and freedom.\nB. The Kiowas had already been defeated, and Aho was born into the aftermath of their defeat.\nCorrect Answer  B\nEvidence  P3\nFollow-up / Feedback  How was her life shaped by historical change?\nChallenge 2 — Memory of Ancestral Lands\nQuestion  Why did lands Aho had never seen still matter?\nA. She had witnessed the glory of every ancestral place in person.\nB. She inherited a cultural connection to the ancestral past.\nCorrect Answer  B\nEvidence  P5\nFollow-up / Feedback  Find “like memory in her blood”; distinguish inherited and personal memory.\nChallenge 3 — Aho and Cultural Traditions\nQuestion  What do her Sun Dance memories suggest?\nA. She retained connections to Kiowa religious traditions.\nB. She remembered the Sun Dance mainly as a social gathering.\nCorrect Answer  A\nEvidence  P9\nFollow-up / Feedback  Identify beliefs and practices significant to Aho.\nClue Card\n• Birth during historical change\n• Inherited memories of ancestral lands\n• Reverence for the sun\n• Sun Dance memories and Kiowa traditions\nCompletion  Gate completed; clues saved to the team collection."
    },
    {
      "title": "Momaday’s Memories",
      "guiding": "What does Momaday remember about his grandmother and family life?",
      "challenges": [
        {
          "title": "Remembering Aho",
          "question": "Which details does Momaday recall from his personal experiences with his grandmother?",
          "options": [
            "Aho’s daily activities, prayers, and childhood presence.",
            "Aho’s stories about ancestral lands and Kiowa history."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            10
          ],
          "feedback": "Find two details; note Aho’s prayers in Kiowa, not understood by Momaday.",
          "notes": ""
        },
        {
          "title": "Remembering Family Gatherings",
          "question": "What does he recall at Aho’s home?",
          "options": [
            "Kiowa visitors, shared meals, prayers, singing and family activities.",
            "A home entirely isolated from Kiowa community life."
          ],
          "answers": [
            0
          ],
          "type": "single",
          "refs": [
            12,
            13
          ],
          "feedback": "Collect people, activities, cultural practices and childhood experiences.",
          "notes": ""
        },
        {
          "title": "Stories Across Generations",
          "question": "What connects Devil’s Tower legend with his family memories?",
          "options": [
            "Aho’s stories inspired him to visit Devil’s Tower and discover the legend himself. ",
            "Aho passed down the legend, connecting him to Kiowa traditions"
          ],
          "answers": [
            1
          ],
          "type": "single",
          "refs": [
            8
          ],
          "feedback": "How can storytelling connect generations?",
          "notes": ""
        }
      ],
      "clue": "Clue Card\n• Aho’s daily life and prayers in Kiowa\n• Family gatherings and shared practices\n• Childhood memories\n• Stories passed between generations",
      "guide": "Cate 5 — Momaday’s Memories\nText  P10–P13; connection to P8\nGuiding Question  What does Momaday remember about his grandmother and family life?\nChallenge 1 — Remembering Aho\nQuestion  Which details does Momaday recall from his personal experiences with his grandmother?\nA. Aho’s daily activities, prayers, and childhood presence.\nB. Aho’s stories about ancestral lands and Kiowa history.\nCorrect Answer  A\nEvidence  P10\nFollow-up / Feedback  Find two details; note Aho’s prayers in Kiowa, not understood by Momaday.\nChallenge 2 — Remembering Family Gatherings\nQuestion  What does he recall at Aho’s home?\nA. Kiowa visitors, shared meals, prayers, singing and family activities.\nB. A home entirely isolated from Kiowa community life.\nCorrect Answer  A\nEvidence  P12–P13\nFollow-up / Feedback  Collect people, activities, cultural practices and childhood experiences.\nChallenge 3 — Stories Across Generations\nQuestion  What connects Devil’s Tower legend with his family memories?\nA. Aho’s stories inspired him to visit Devil’s Tower and discover the legend himself. \nB. Aho passed down the legend, connecting him to Kiowa traditions\nCorrect Answer  B\nEvidence  P8\nFollow-up / Feedback  How can storytelling connect generations?\nClue Card\n• Aho’s daily life and prayers in Kiowa\n• Family gatherings and shared practices\n• Childhood memories\n• Stories passed between generations\nCompletion  Cate completed; clues saved to the team collection."
    }
  ]
};

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize = value => value.trim().toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const list = items => `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
const paragraphRefs = refs => refs.map(n => `P${n}`).join(', ');
// Shared original-text reader. Mapping is also used by the next phase's knowledge maps.
const EVIDENCE_LINKS = {
  land: [{label:'Landscape',refs:[1]},{label:'Family Connection',refs:[2,15]},{label:'Historical Connection',refs:[1,5,15]}],
  history: [{label:'Clue Card 1 — Origins',refs:[4]},{label:'Clue Card 2 — Migration & Transformation',refs:[4,6,7,8]},{label:'Clue Card 3 — Rise & Decline',refs:[3,4,9]}],
  memory: [{label:'Clue Card 4 — Aho’s Life & Memories',refs:[3,5,9]},{label:'Clue Card 5 — Momaday’s Memories',refs:[8,10,11,12,13]}]
};
let evidenceView=null, presenter=false;
let keyActivity=false, unlockAnimation=null, revealedBranch=-1;
function source(refs) {
 return `<button type="button" class="text-return" data-text-refs="${refs.join(',')}">Return to the Text · ${paragraphRefs(refs)}</button>`;
}
function knowledgeEvidenceHTML(){
 const links=[EVIDENCE_LINKS.land,EVIDENCE_LINKS.history,EVIDENCE_LINKS.memory][activeKey];
 return `<div class="evidence-links">${links.map(link=>`<button type="button" data-text-refs="${link.refs.join(',')}">${escapeHTML(link.label)} · ${paragraphRefs(link.refs)}</button>`).join('')}</div>`;
}
function screenIdentity(){
 const mode=teacher?'rehearsal':'student';
 if(evidenceView)return `${mode}:text:${evidenceView.refs[evidenceView.index]}`;
 if(currentStage===2&&!keyActivity&&state().presentation!=='gate')return `${mode}:presentation:${state().presentation==='opening'?'opening':state().presentationStep==='assignment'?`assignment-${state().assignmentTask||1}`:state().presentationStep==='landscape'?'landscape':'tree'}`;
 return `${mode}:stage:${currentStage}:gate:${checkpoint??'map'}:question:${checkpoint===null?'':state().checkpoints[checkpoint].step}:key:${currentStage===2?(keyActivity?activeKey:'gate'):''}`;
}
function openEvidence(refs){
 const valid=[...new Set(refs)].filter(n=>Object.prototype.hasOwnProperty.call(CONTENT.paragraphs,n));if(!valid.length)return;
 if(!evidenceView)evidenceView={refs:valid,index:0,origin:{stage:currentStage,checkpoint,key:activeKey,keyActivity,scroll:window.scrollY,details:[...document.querySelectorAll('#adventure details')].map(el=>el.open)}};
 else {evidenceView.refs=valid;evidenceView.index=0;}
 feedback='';render();focusMain();
}
function closeEvidence(){
 if(!evidenceView)return;const saved=evidenceView.origin;evidenceView=null;
 currentStage=saved.stage;checkpoint=saved.checkpoint;activeKey=saved.key;keyActivity=saved.keyActivity;feedback='';render();
 document.querySelectorAll('#adventure details').forEach((el,i)=>el.open=!!saved.details[i]);
 requestAnimationFrame(()=>{window.scrollTo({top:saved.scroll,behavior:'instant'});window.Annotations?.refresh();});
}
function evidenceHTML(){
 const {refs,index}=evidenceView,n=refs[index];
 return `<section class="panel evidence-reader"><div class="evidence-controls"><button data-action="back-evidence">${currentStage===2?(keyActivity?'Back to Knowledge Map':'Back to Cultural Identity Tree'):'Back to Activity'}</button><button data-action="text-previous" ${index===0?'disabled':''}>← Previous paragraph</button><button data-action="text-next" ${index===refs.length-1?'disabled':''}>Next paragraph →</button></div><h2>Return to the Text</h2><nav aria-label="Evidence paragraphs">${refs.map((p,i)=>`<button data-text-index="${i}" aria-pressed="${i===index}">P${p}</button>`).join('')}</nav><article><h3>Paragraph ${n}</h3><p class="original-passage" data-ink-region="paragraph-${n}">${escapeHTML(CONTENT.paragraphs[n])}</p></article></section>`;
}
function teacherNotes(html){return presenter?`<details class="teacher-notes"><summary>Teacher notes · not shown in student mode</summary>${html}</details>`:'';}
const LANDSCAPE = [
  {phrase:'blizzards', area:'Snow-filled winter sky', x:11,y:20,w:17,h:22, meaning:'Severe snowstorms with strong winds.', quote:'Winter brings blizzards'},
  {phrase:'tornadic winds',area:'Spiraling spring wind',x:24,y:29,w:13,h:24,meaning:'Violent winds associated with tornadoes.',quote:'hot tornadic winds arise in the spring'},
  {phrase:'brittle and brown grass',area:'Dry foreground grass',x:29,y:61,w:15,h:15,meaning:'Dry, brown grass that breaks or cracks easily.',quote:'The grass turns brittle and brown, and it cracks beneath your feet.'},
  {phrase:'steaming foliage seems almost to writhe in fire',area:'Sunlit, hazy leaves',x:89,y:32,w:16,h:23,meaning:'In intense summer heat, the foliage appears to twist or move as if burning. This is a vivid comparison, not a report of a forest fire.',quote:'At a distance in July or August the steaming foliage seems almost to writhe in fire.'},
  {phrase:'grasshoppers',area:'Grasshopper on the foreground rock',x:14,y:63,w:13,h:15,meaning:'Insects described as green and yellow, jumping in the tall grass.',quote:'Great green and yellow grasshoppers are everywhere in the tall grass'},
  {phrase:'tortoises',area:'Tortoise on the red earth',x:62,y:84,w:22,h:23,meaning:'Slow-moving land reptiles crawling over the red earth.',quote:'tortoises crawl about on the red earth, going nowhere in the plenty of time.'},
  {phrase:'linear groves of hickory and pecan',area:'Row of trees along the water',x:61,y:46,w:22,h:13,meaning:'Groups of hickory and pecan trees growing in lines along rivers and creeks.',quote:'There are green belts along the rivers and creeks, linear groves of hickory and pecan, willow and witch hazel.'},
  {phrase:'a single knoll',area:'Solitary central hill',x:47,y:36,w:25,h:13,meaning:'One small, rounded hill rising from the plain.',quote:'A single knoll rises out of the plain in Oklahoma, north and west of the Wichita Range.'},
  {phrase:'rivers and creeks',area:'Water winding through the landscape',x:84,y:67,w:23,h:15,meaning:'Waterways with green vegetation along their banks.',quote:'There are green belts along the rivers and creeks'}
];
const RECONSTRUCTION = [
  {name:'Climate', choices:['Winter blizzards, spring tornadic winds, intense summer heat','Year-round mild, cool weather'], answer:0},
  {name:'Vegetation', choices:['Brittle brown grass and green belts along waterways','An unbroken tropical rainforest'], answer:0},
  {name:'Animals in P1', choices:['Grasshoppers and tortoises','Elk and bears'], answer:0},
  {name:'Geography', choices:['A solitary knoll, open plain, rivers, creeks, and red earth','A coast surrounded by glaciers'], answer:0}
];
const EVIDENCE = [
  [ [[4,'the high country in western Montana']], [[4,'They were a mountain people, a mysterious tribe of hunters']] ],
  [ [[4,'to the south and east'],[4,'the southern Plains']], [[4,'They acquired horses'],[4,'They acquired Tai-me, the sacred Sun Dance doll'],[4,'the sense of destiny, therefore courage and pride'],[6,'The Kiowas reckoned their stature by the distance they could see']], [[8,'it began to rise into the air'],[8,'scored the bark all around with its claws'],[8,'they became the stars of the Big Dipper'],[8,'the Kiowas have kinsmen in the night sky'],[8,'Whatever they were in the mountains, they could be no more.'],[8,'they had found a way out of the wilderness.']] ],
  [ [[3,'they had ruled the whole of the southern Plains'],[3,'they surrendered to the soldiers at Fort Sill'],[9,'under orders to disperse the tribe']], [[3,'among the finest horsemen the world has ever known'],[4,'hunters and priests of the sun']], [[9,'Forbidden without cause the essential act of their faith']] ],
  [ [[3,'she must have known from birth the affliction of defeat, the dark brooding of old warriors.']], [[5,'like memory in her blood'],[5,'the Black Hills, where she had never been']], [[9,'My grandmother had a reverence for the sun'],[9,'she never forgot her birthright']] ],
  [ [[10,'turning meat in a great iron skillet'],[10,'bent above her beadwork'],[10,'I do not speak Kiowa, and I never understood her prayers']], [[12,'feasting and talk'],[13,'There were frequent prayer meetings, and great nocturnal feasts.'],[13,'I played with my cousins outside']], [[8,'My grandmother said:'],[8,'the Kiowas have kinsmen in the night sky']] ]
];
const KEYS = [
 {refs:[1,2,5,15],name:'Ancestral Land',branches:'Landscape; Aho’s grave; family and ancestral connections'},
 {refs:[3,4,6,7,8,9],name:'Tribal History',branches:'Origins; migration and transformation; rise and decline; traditions and beliefs'},
 {refs:[3,5,8,9,10,11,12,13],name:'Family Memories',branches:'Aho’s experiences; prayers and storytelling; gatherings; Momaday’s childhood'}
];
const ROOT_QUESTIONS = ['Why did Momaday make this journey?','If he wanted only to visit Aho’s grave, why recount Kiowa origins, migration, history and traditions?','What do ancestral land, tribal history and family memories have in common?','How do these elements help Momaday understand who he is?'];
const LEARNER_REFLECTION = ['Vocabulary recognition and application','Textual interpretation','Evidence collection and reconstruction','Understanding of cultural identity and its development'];
const OBSERVER_REFLECTION = ['How did the game support or limit learning?','How did team discussion affect participation?','How did the teacher scaffold the tasks?','Which teaching strategies could be adapted for future teaching?'];
function freshState() {
  return {matched:[], selected:null, landscape:{}, reconstruction:{}, reconstructed:false, stage1:false,
    checkpoints:CONTENT.checkpoints.map(c => ({step:0, solved:false, evidence:{}, confirmed:[], complete:false, answers:{}, finalDiscussion:''})),
    keys:KEYS.map(() => ({revealed:0,answerShown:false,discussion:'',unlocked:false})),mapPosition:0,mapFacing:1,mapWalk:null,gateOpen:false,presentation:'gate',presentationStep:'landscape',assignmentTask:1,openingStarted:0,celebrationPending:false,celebrationPlayed:false,canopy:0,roots:0,trunk:false,growth:[],growthDraft:'',growthKind:'Experiences',rootDiscussion:'',reflections:{},complete:false};
}
let studentState=freshState(), teacherState=freshState(), teacher=false;
let currentStage=-1, checkpoint=null, activeKey=0, soundEnabled=false, audio=null;
const toneVoices=new Set();
let feedback='';
const state=()=>teacher?teacherState:studentState;
let announcementTimer=null;
function notify(message) { clearTimeout(announcementTimer);const banner=$('#announcement');banner.textContent=message;banner.classList.remove('quiet');if(message)announcementTimer=setTimeout(()=>banner.classList.add('quiet'),3500); }
function tone(success=true) {
  if(!soundEnabled)return;
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    audio.resume().catch(()=>{});
    const t=audio.currentTime;
    [success?392:196,success?523:164,success?659:146].forEach((frequency,i)=>{
      const osc=audio.createOscillator(),gain=audio.createGain();osc.type='sine';osc.frequency.value=frequency;
      gain.gain.setValueAtTime(0,t+i*.1);gain.gain.linearRampToValueAtTime(.07,t+i*.1+.015);gain.gain.exponentialRampToValueAtTime(.001,t+i*.1+.22);
      osc.connect(gain);gain.connect(audio.destination);const voice={osc,gain};toneVoices.add(voice);osc.onended=()=>{toneVoices.delete(voice);osc.disconnect();gain.disconnect();};osc.start(t+i*.1);osc.stop(t+i*.1+.24);
    });
  }catch {soundEnabled=false;$('#sound').textContent='Sound unavailable';notify('Sound is unavailable. All activities still work.');}
}
function unlockedStage(n){return teacher||n===0||(n===1?state().stage1:state().checkpoints.every(c=>c.complete));}
function goStage(n) {
  closeMenuForJourney();
  if(!Number.isInteger(n)||n<0||n>2)return;
  if(!unlockedStage(n)){notify(n===1?'Complete the landscape activities first. Teachers can use Teacher access.':'Collect all five checkpoint clues first. Teachers can use Teacher access.');return;}
  evidenceView=null;keyActivity=false;currentStage=n;checkpoint=null;feedback='';render();focusMain();
}
function focusMain() {
 const arrival=document.querySelector('[data-action="continue-journey-arrival"]');
 if(arrival){arrival.focus({preventScroll:true});return;}
 $('#adventure').focus({preventScroll:true});
 window.scrollTo({top:0,behavior:'instant'});
}
function focusMap(){if(currentStage===1&&checkpoint===null&&!evidenceView)window.scrollTo({top:0,behavior:'instant'});}

function render(){
  pauseTravel();
  const bankScroll=$('.phrase-bank')?.scrollTop||0;
  const s=state();
  document.querySelectorAll('[data-stage]').forEach(button=>{
    const n=Number(button.dataset.stage);button.disabled=!unlockedStage(n);
    if(n===currentStage)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');
  });
  $('#mode-note').textContent=teacher?'Teacher rehearsal · independent access to every stage and gate. Rehearsal progress is separate from the student journey.':'Student journey · progress stays while switching screens. Teacher presentation controls are optional; student progression does not require Teacher Access. Reloading clears this session.';
  $('#annotation-toggle').hidden=!(presenter);
  window.Annotations?.setTeacher(presenter);
  $('#previous').disabled=currentStage<=0;
  $('#next').disabled=currentStage<0||currentStage===2||!unlockedStage(currentStage+1);
  $('#map-return').disabled=!unlockedStage(1);
  $('#progress').textContent=currentStage<0?'Adventure home':`Stage ${currentStage+1} of 3${checkpoint!==null?` · Gate ${checkpoint+1}`:''}`;
  document.body.classList.toggle('in-adventure',currentStage>=0);
  $('#mode-badge').textContent=[teacher?'Rehearsal':'',presenter?'Teacher Access':''].filter(Boolean).join(' · ');
  $('#mode-note').hidden=currentStage<0;
  $('#teaching-guide').innerHTML=presenter?`<details><summary>10-minute demonstration guide</summary>${list(['Briefly recall clues from the five Gates.','Guide students through three progressively completed mind maps.','Students induce the names of the three categories.','Unlock the final gate and arrive at Rainy Mountain.','Use P14–P15 to discuss the journey’s meaning.','Build three roots of the Cultural Identity Tree.','Pose the open question of cultural growth.','Assign the Chinese cultural roots reflection and four-group microteaching tasks.'])}</details>`:'';
  $('#adventure').className=currentStage<0?'home-screen':`stage-${currentStage}`;
  $('#adventure').innerHTML=evidenceView?evidenceHTML():currentStage<0?homeHTML():currentStage===0?landscapeHTML():currentStage===1?(checkpoint===null?mapHTML():checkpointHTML()):gateHTML();
  decorateInterface();
  if($('.phrase-bank'))$('.phrase-bank').scrollTop=bankScroll;
  animateGate=false;
  unlockAnimation=null;
  revealedBranch=-1;
  window.Annotations?.mount(screenIdentity());
  observeMap();
  startTravel();
  notify(feedback);
  treeReveal='';
  syncDoorOpening();
  syncVictoryCelebration();
}
const LEARNING_OBJECTIVES=[
 {title:'Textual Understanding',description:'Understand key vocabulary, expressions, and complex sentences in the text; identify key information and organize textual clues to interpret the text.'},
 {title:'Understanding Cultural Identity',description:'Synthesize textual evidence to identify Momaday’s cultural roots and explain how these roots shape his cultural identity.'},
 {title:'Chinese Cultural Exploration and Reflection',description:'Explore one aspect of their own Chinese cultural roots and reflect on its personal significance through lived experiences.'},
 {title:'Transfer to Teaching Practice',description:'Evaluate the AI-assisted gamified and interactive teaching approaches experienced in class and apply selected strategies in a microteaching activity.'}
];
const interfaceSheets=new Map();
function sheetKey(id){return `${screenIdentity()}:${currentStage===2?state().presentationStep:''}:${id}`;}
function makeSheet(node,id,label,initial=false){
 if(!node)return null;
 const key=sheetKey(id),details=document.createElement('details');details.className=`game-sheet sheet-${id}`;details.dataset.sheet=id;
 const summary=document.createElement('summary');summary.textContent=label;details.append(summary);
 const body=document.createElement('div');body.className='sheet-body';
 const close=document.createElement('button');close.type='button';close.className='close-sheet';close.textContent=`Close ${label} ×`;close.addEventListener('click',()=>{details.open=false;interfaceSheets.set(key,false);window.scrollTo({top:0,behavior:'instant'});summary.focus({preventScroll:true});window.Annotations?.refresh();});body.append(close);
 node.replaceWith(details);body.append(node);details.append(body);details.open=interfaceSheets.has(key)?interfaceSheets.get(key):initial;
 details.addEventListener('toggle',()=>{interfaceSheets.set(key,details.open);window.Annotations?.refresh();});return details;
}
function decorateInterface(){
 const main=$('#adventure');
 if(currentStage<0)return;
 main.classList.toggle('reading-screen',!!evidenceView||!!$('.checkpoint,.knowledge-map,.assignment-screen'));
 if(evidenceView)return;
 const intro=main.querySelector('.intro,.gate-heading');if(intro)makeSheet(intro,'instructions',intro.querySelector('h2')?.textContent||'Instructions');
 if(currentStage===0){
  const bank=$('.phrase-bank');makeSheet(bank,'vocabulary','Vocabulary · P1',state().selected===null);
  const layout=$('.landscape-layout');const notes=layout?.nextElementSibling;if(notes)makeSheet(notes,'field-notes','Field Notes & Reconstruction',state().matched.length===9);
  const selected=state().selected;if(selected!==null){const drawer=main.querySelector('[data-sheet="vocabulary"]');drawer.open=false;interfaceSheets.set(sheetKey('vocabulary'),false);}
  else if(state().matched.length<9){const drawer=main.querySelector('[data-sheet="vocabulary"]');drawer.open=true;interfaceSheets.set(sheetKey('vocabulary'),true);}
 }
 if(currentStage===1&&checkpoint===null){const collection=$('.map-shell')?.nextElementSibling;if(collection)makeSheet(collection,'collection','Route & Clue Cards');}
 if(currentStage===2&&!keyActivity){
  const status=$('.gate-status');if(status)makeSheet(status,'keys','Collected Keys');
  const discussion=$('.presentation-discussion');if(discussion){
   const controls=discussion.querySelector('.presentation-controls');discussion.before(controls);
   if(state().presentationStep==='landscape')discussion.hidden=true;
   else makeSheet(discussion,'discussion','Discussion & Return to the Text');
  }
 }
}
function setMenu(open){$('#adventure-menu').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',String(open));if(open)$('#menu-close').focus({preventScroll:true});}
function closeMenuForJourney(){setMenu(false);}
function resizeInterface(){document.documentElement.style.setProperty('--screen-height',`${innerHeight}px`);window.Annotations?.refresh();}
function homeHTML(){return `<section class="welcome"><div class="home-introduction"><div><p class="eyebrow">Read · Explore · Connect</p><h1>Rainy Mountain Adventure</h1><h2>Follow the landscape. Discover the connections.</h2><p>Explore N. Scott Momaday’s <cite>The Way to Rainy Mountain</cite> through close reading, evidence, and team discussion.</p><ol class="stage-introduction"><li>Unlock the Landscape — language and visual reconstruction.</li><li>Journey Through History and Memory — five gates.</li><li>Finding Our Cultural Roots — three keys and an identity tree.</li></ol><button class="begin-adventure" data-action="begin">Begin / resume exploration →</button></div><img class="explorers" src="assets/explorers.png" alt="Q-style explorers ready for their journey"></div><section class="learning-objectives" aria-labelledby="objectives-title"><h2 id="objectives-title">Learning Objectives</h2><ul>${LEARNING_OBJECTIVES.map(o=>`<li><h3 class="objective-title">${o.title}</h3><p class="objective-description">${o.description}</p></li>`).join('')}</ul></section></section>`;}

function landscapeHTML(){
 const s=state();
 return `<section><div class="panel intro"><p class="eyebrow">Stage 1 · P1</p><h2>Unlock the Landscape</h2><p class="guiding">What does Rainy Mountain look like?</p><p>Select a textual expression, then click the landscape area that represents it. You can also use Tab and Enter on numbered regions.</p><p class="small">This illustration combines seasons and exaggerates scale. Identify what the text describes; P1 does not say winter blizzards and summer heat occur together. Tree species are identified by the text, not by botanical details in the artwork.</p>${source([1])}</div>
 <div class="landscape-layout"><aside class="panel phrase-bank"><h3>Expressions from P1</h3><p>${s.matched.length} / ${LANDSCAPE.length} matched</p>${LANDSCAPE.map((f,i)=>`<button class="phrase ${s.selected===i?'selected':''}" data-phrase="${i}" aria-pressed="${s.selected===i}" ${s.matched.includes(i)?'disabled':''}>${s.matched.includes(i)?'✓ ':''}${escapeHTML(f.phrase)}</button>`).join('')}</aside>
 <div><div class="scene landscape-scene"><img src="assets/background-stage1.png" alt="An illustrated plain with snow and a tornado on the left, a central knoll, dry grass and grasshoppers in front, tortoises on red earth, and a creek beside rows of sunlit trees.">${LANDSCAPE.map((f,i)=>`<button class="hotspot ${s.matched.includes(i)?'matched':''}" style="left:${f.x}%;top:${f.y}%;width:${f.w}%;height:${f.h}%" data-hotspot="${i}" aria-label="Area ${i+1}: ${escapeHTML(f.area)}"><span>${s.matched.includes(i)?'✓':i+1}</span></button>`).join('')}</div><p class="panel small" id="landscape-feedback">${escapeHTML(feedback||'Choose an expression to begin. Each region has a number.')}</p></div></div>
 <div class="panel"><h3>Your field notes</h3>${s.matched.length?list(s.matched.map(i=>`${LANDSCAPE[i].phrase}: ${LANDSCAPE[i].meaning}`)):'<p>Your matched expressions will appear here.</p>'}
 ${s.matched.length===LANDSCAPE.length?`<h3>Explain and reconstruct</h3><p>Use your own English, then compare and discuss with your teacher. These P1-based activities extend the design’s open tasks.</p>${textArea('fire','Explain “steaming foliage seems almost to writhe in fire.”',s.landscape.fire,'landscape')}${textArea('brittle','Explain “brittle and brown” and what it suggests about summer.',s.landscape.brittle,'landscape')}
 <h4>Reconstruct the landscape</h4><p>Select the P1-supported features to assemble your landscape record.</p>${RECONSTRUCTION.map((r,i)=>`<fieldset><legend>${r.name}</legend>${r.choices.map((v,j)=>`<label class="option"><input type="radio" name="reconstruction-${i}" data-reconstruction="${i}" value="${j}" ${s.reconstruction[i]===j?'checked':''}>${escapeHTML(v)}</label>`).join('')}</fieldset>`).join('')}<button data-action="reconstruct">Check reconstruction</button>${s.reconstructed?`<div class="reconstructed"><h4>Your landscape record</h4>${list(RECONSTRUCTION.map(r=>r.choices[r.answer]))}</div>`:''}
 ${textArea('overall','Explain the landscape’s overall characteristics, including isolation, scale, and its effect on the imagination.',s.landscape.overall,'landscape')}
 ${teacherNotes('<p>The foliage appears to move or twist in intense heat as if in fire; this is a comparison, not a literal forest fire. Brittle grass is dry and breaks easily. Isolation and scale awaken the imagination.</p>')}
 <button data-action="landscape-confirm">Complete landscape & unlock map</button>`:'<p>Match all nine expressions to unlock explanation and reconstruction.</p>'}
 <div id="landscape-completion" class="${s.stage1?'landscape-complete':''}">${s.stage1?landscapeCompletionHTML():''}</div></div></section>`;
}
function textArea(id,label,value,group){return `<label for="${group}-${id}">${escapeHTML(label)}</label><textarea id="${group}-${id}" rows="3" data-group="${group}" data-field="${id}">${escapeHTML(value)}</textarea>`;}
function mapHTML(){
 const s=state(),points=ROAD_GATES;
 return `<section><div class="panel intro"><p class="eyebrow">Stage 2 · Read → Find Evidence → Discuss → Choose a Path → Collect a Clue</p><h2>Journey Through History and Memory</h2><p>Follow the five gates in order. A wrong turn returns you to the text; earned clues stay in your collection.</p>${teacher?'<p class="success">Teacher rehearsal: select any gate independently.</p>':''}</div><div class="map-shell"><div class="scene map-scene"><img src="assets/background-stage%202.png" alt="Adventure trail with five gates leading to the final gate.">${explorerHTML(points)}${points.map(([x,y],i)=>{const locked=!!s.mapWalk||(i<5?!teacher&&i>0&&!s.checkpoints[i-1].complete:!unlockedStage(2));return `<button class="map-marker ${i<5&&s.checkpoints[i].complete?'earned':''}" style="left:${x}%;top:${y}%" ${i<5?`data-checkpoint="${i}"`:'data-action="final-gate"'} ${locked?'disabled':''} aria-label="${i<5?`Gate ${i+1}: ${escapeHTML(CONTENT.checkpoints[i].title)}`:'Final Gate'}">${i<5?(s.checkpoints[i].complete?'✓':i+1):'Gate'}</button>`;}).join('')}</div>${mapControlsHTML()}</div><div class="panel"><h3>Route & clue collection · ${s.checkpoints.filter(c=>c.complete).length} / 5</h3><div class="route-list">${CONTENT.checkpoints.map((c,i)=>`<button data-checkpoint="${i}" ${s.mapWalk||(!teacher&&i>0&&!s.checkpoints[i-1].complete)?'disabled':''}>${i+1}. ${escapeHTML(c.title)} ${s.checkpoints[i].complete?'✓':''}</button>`).join('')}</div>${s.checkpoints.map((c,i)=>c.complete?`<details><summary>Clue ${i+1} · ${escapeHTML(CONTENT.checkpoints[i].title)}</summary><div class="document-notes">${escapeHTML(CONTENT.checkpoints[i].clue)}</div></details>`:'').join('')}</div></section>`;
}
function quoteHTML(refs){return refs.map(([p,quote])=>`<blockquote>“${escapeHTML(quote)}”<cite>P${p}</cite></blockquote>`).join('');}
function checkpointHTML(){
 const s=state(),cp=s.checkpoints[checkpoint],data=CONTENT.checkpoints[checkpoint],q=data.challenges[cp.step];
 const top=`<section class="panel checkpoint"><button data-action="to-map">← Return to Map</button><p class="eyebrow">Gate ${checkpoint+1} · ${escapeHTML(data.title)}</p>`;
 if(cp.complete)return top+`<div class="clue-reward"><p class="reward-star" aria-hidden="true">✦</p><h2>Congratulations! You’ve earned the Clue Card for Gate ${checkpoint+1}!</h2><div class="clue-card" data-ink-region="clue-${checkpoint}">${escapeHTML(data.clue)}</div><button data-action="continue-journey">Continue the Journey →</button></div>${teacherNotes(`<div class="document-notes">${escapeHTML(data.guide)}</div>`)}</section>`;
 if(!q)return top+'<button data-action="collect-clue">Collect Clue Card</button></section>';
 const notes=`<p>${escapeHTML(data.guiding)}</p><p>${escapeHTML(q.feedback)}</p>${quoteHTML(EVIDENCE[checkpoint][cp.step])}<div class="document-notes">${escapeHTML(q.notes)}</div>${checkpoint===3&&cp.step===0?'<p>P3 opens with “the last great moment” and closes with “from birth the affliction of defeat.” The requested B answer follows the latter interpretation; discuss this tension without changing the source.</p>':''}`;
 return top+`<p class="small">Challenge ${cp.step+1} / ${data.challenges.length} · ${paragraphRefs(q.refs)}</p><h2 class="challenge-question" data-ink-region="question">${escapeHTML(q.question)}</h2>${q.type==='multi'?'<p>Select all that apply.</p>':''}${source(q.refs)}
 <div class="answers">${q.type==='blanks'?`<p>The high country in western Montana ↓</p><div class="inline-fields"><label>To the <input ${cp.solved?'disabled':''} data-route="0" value="${escapeHTML(cp.answers[cp.step]?.[0]||'')}" aria-label="First migration direction"></label><label>and <input ${cp.solved?'disabled':''} data-route="1" value="${escapeHTML(cp.answers[cp.step]?.[1]||'')}" aria-label="Second migration direction"></label><label>The <input ${cp.solved?'disabled':''} data-route="2" value="${escapeHTML(cp.answers[cp.step]?.[2]||'')}" aria-label="Destination Plains"> Plains ↓</label></div>`:q.options.map((o,i)=>`<label class="option" data-ink-region="option-${i}"><input type="${q.type==='multi'?'checkbox':'radio'}" name="checkpoint-answer" data-answer="${i}" ${(cp.answers[cp.step]||[]).includes(i)?'checked':''} ${cp.solved?'disabled':''}><span>${String.fromCharCode(65+i)}. ${escapeHTML(o)}</span></label>`).join('')}</div>
 ${!cp.solved?'<button data-action="check-answer">Choose this path</button>':`<p class="success">Correct route. Find and discuss the evidence.</p><p>Discuss the textual evidence orally with your teacher and classmates.</p><button data-action="confirm-evidence">Confirm discussion & continue</button>`}${teacherNotes(notes)}</section>`;
}
function gateHTML(){
 const s=state();if(keyActivity)return keyHTML();
 if(s.presentation==='opening')return openingHTML();
 if(s.presentation==='landscape')return treeHTML();
 const ready=s.keys.every(k=>k.unlocked);
 return `<section class="final-gate-screen"><div class="panel gate-heading"><p class="eyebrow">Stage 3 · The Final Gate</p><h2>Discover the Three Keys</h2><p>Explore the evidence together. Discuss each clue before revealing its shared meaning.</p></div>
 <div class="final-gate-scene " aria-label="Fully closed double-door gate">
 <div class="gate-beyond"><img src="assets/explorers.png" alt="Explorers arriving at Rainy Mountain"></div>
 <img class="complete-gate" src="assets/whole%20gate.png" alt="The original complete double-door gate in its landscape">
 <div class="original-leaf original-left"><img src="assets/left%20door.png" alt="Original left door"></div>
 <div class="original-leaf original-right"><img src="assets/right%20door.png" alt="Original right door"></div>
 ${s.keys.map((k,i)=>`<button type="button" class="door-lock lock-${i} ${k.unlocked?'is-unlocked':''} ${unlockAnimation===i?'just-unlocked':''}" data-open-key="${i}" aria-label="${k.unlocked?`Review ${KEYS[i].name}`:`Explore lock ${i+1}`}" data-ink-region="door-lock-${i}"><img src="assets/${k.unlocked?'lock.png':'lock%20closed.png'}" alt="${k.unlocked?'Unlocked':'Locked'}"><span>${i+1}${k.unlocked?' ✓':''}</span>${unlockAnimation===i?'<img class="turning-key" src="assets/key.png" alt="Key unlocking the lock">':''}</button>`).join('')}
 </div>
 <div class="panel gate-status"><p role="status">${s.keys.filter(k=>k.unlocked).length} of 3 keys collected. ${ready?'All three locks are unlocked. The gate is ready.':'Click a lock to open its knowledge map.'}</p>
 <div class="earned-keys">${s.keys.map((k,i)=>k.unlocked?`<span><img src="assets/key.png" alt="Earned key">${escapeHTML(KEYS[i].name)}</span>`:'').join('')}</div>
 ${teacherNotes('<p>Use Teacher presentation to guide this student journey. Independent rehearsal has separate progress and can use reference copies of clue cards without earning them.</p>')}
 ${ready&&s.gateOpen?'<button data-action="resume-presentation">Return to the landscape / tree</button>':''}
 </div>${ready&&!s.gateOpen?'<div class="presentation-controls"><button data-action="open-gate">Open the double doors</button></div>':''}</section>`;
}
function keyClueCount(key){return [EVIDENCE_LINKS.land,EVIDENCE_LINKS.history,EVIDENCE_LINKS.memory][key].length;}
function keyHTML(){
 const s=state(),k=KEYS[activeKey],progress=s.keys[activeKey];
 const questions=['What makes Rainy Mountain more than a place?','What do these clues tell us about the Kiowa people?','What do these clues tell us about Momaday and his grandmother?'];
 const links=[EVIDENCE_LINKS.land,EVIDENCE_LINKS.history,EVIDENCE_LINKS.memory][activeKey];
 const refs=[...new Set(links.flatMap(link=>link.refs))].sort((a,b)=>a-b);
 const landContent=[
  'A solitary knoll in the Oklahoma plain; seasonal weather, grass, waterways, and living creatures.',
  'Momaday returns to Aho’s grave. This place connects the landscape with his grandmother and family.',
  'The Kiowas’ landmark, inherited memories, and ancestral names connect the place with a shared past.'
 ];
 return `<section class="panel knowledge-map" data-knowledge-key="${activeKey}"><div class="knowledge-toolbar"><button data-action="back-gate">← Back to the Gate</button>${source(refs)}</div><p class="eyebrow">Lock ${activeKey+1} · From evidence to shared meaning</p><h2 class="challenge-question" data-ink-region="key-question-${activeKey}">${questions[activeKey]}</h2>
 ${activeKey===0?`<p>Discuss each connection before revealing the next branch.</p><div class="knowledge-branches">${links.map((link,i)=>i<progress.revealed?`<article class="knowledge-branch ${revealedBranch===i?'just-revealed':''}" data-ink-region="land-branch-${i}"><h3>${escapeHTML(link.label)}</h3><p>${landContent[i]}</p><button data-text-refs="${link.refs.join(',')}">Return to the Text · ${paragraphRefs(link.refs)}</button></article>`:'').join('')}</div>${progress.revealed<3?`<button data-action="reveal-land-branch">${presenter?'Teacher: ':''}Reveal next branch</button>`:''}`:
 `<div class="synthesis-cards">${links.slice(0,progress.revealed).map((link,i)=>{const index=(activeKey===1?0:3)+i;return `<article class="synthesis-card" data-ink-region="synthesis-card-${index}"><h3>${escapeHTML(link.label)}</h3>${!s.checkpoints[index].complete?'<p class="reference-label">Reference clue card · not earned in this rehearsal</p>':''}<div class="card-content">${escapeHTML(CONTENT.checkpoints[index].clue.replace(/^Clue Card[^\n]*\n/,''))}</div><button data-text-refs="${link.refs.join(',')}">Return to the Text · ${paragraphRefs(link.refs)}</button></article>`;}).join('')}</div>${progress.revealed<links.length?'<button data-action="reveal-key-clue">Reveal next clue</button>':''}`}
 ${progress.answerShown?`<div class="synthesis-answer" data-ink-region="synthesis-answer-${activeKey}"><p>Our shared category</p><h3>${escapeHTML(k.name.toUpperCase())}</h3>${progress.unlocked?'<img src="assets/key.png" alt="Discovered key">':''}</div>`:'<p class="small">Discuss the shared meaning. Reveal the shared meaning after discussing every clue.</p>'}
 <div class="teacher-synthesis"><p class="small">${presenter?'Teacher-controlled':'Self-directed'} discussion · no automatic grading</p>${!progress.answerShown?`<button data-action="reveal-key-meaning" ${progress.revealed<links.length?'disabled':''}>${presenter?'Teacher: ':''}Reveal shared meaning</button>`:!progress.unlocked?`<button data-action="award-key">${presenter?'Teacher: ':''}Award key & unlock door</button>`:'<p>This key has already been collected.</p>'}</div>
 <details><summary>Optional team discussion notes</summary>${textArea('connections','Record the connections your team discussed. Notes are not graded or required to unlock the key.',progress.discussion,'key-discussion')}</details>
 <button data-action="back-gate">Back to the Gate</button></section>`;
}
// Only the door transition uses a clock. Every teaching reveal requires a teacher click.
const CANOPY_WORDS=['Cultural Exploration','Cultural Reflection'];
let openingTimer=null,treeReveal='';
function openingHTML(){
 return `<section class="door-transition"><h2>The Three Keys Open the Way</h2><div class="final-gate-scene phase3-opening" aria-label="Double doors opening onto Rainy Mountain"><img class="complete-gate" src="assets/whole%20gate.png" alt="Original gate frame"><div class="original-leaf original-left"><img src="assets/left%20door.png" alt="Left door opening"></div><div class="original-leaf original-right"><img src="assets/right%20door.png" alt="Right door opening"></div></div><p role="status">The doors are opening onto Rainy Mountain.</p></section>`;
}
function syncDoorOpening(){
 clearTimeout(openingTimer);openingTimer=null;
 const s=state();if(currentStage!==2||evidenceView||keyActivity||s.presentation!=='opening')return;
 const duration=matchMedia('(prefers-reduced-motion: reduce)').matches?1:2200;
 const elapsed=Math.max(0,performance.now()-s.openingStarted);
 document.querySelectorAll('.phase3-opening .original-leaf').forEach(el=>el.style.animationDelay=`-${Math.min(duration,elapsed)}ms`);
 openingTimer=setTimeout(()=>{
  if(s!==state()||s.presentation!=='opening')return;
  s.gateOpen=true;s.presentation='landscape';s.celebrationPending=true;
  if(currentStage===2&&!evidenceView&&!keyActivity){feedback='';render();focusMain();}
 },Math.max(0,duration-elapsed));
}
// Overflow windows crop the unchanged full-size image without clip-path support.
function treePiece(className,alt,left,top,width,height,revealed){
 return `<div class="tree-crop" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%"><img class="phase3-layer ${className} ${revealed?'tree-just-revealed':''}" src="assets/cultural%20identity%20tree.png" alt="${alt}" style="left:${-left/width*100}%;top:${-top/height*100}%;width:${100/width*100}%;height:${100/height*100}%"></div>`;
}
function treeArtwork(s){
 const roots=KEYS.map(k=>k.name);
 // Each crop shares the original image's coordinate system and reveal boundaries.
 return `<div class="phase3-art" data-ink-region="cultural-tree-art" aria-label="Cultural Identity Tree: ${s.roots} roots, ${s.trunk?'trunk':'no trunk'}, ${s.canopy} canopy examples">
 ${roots.slice(0,s.roots).map((name,i)=>`${treePiece(`root-piece root-piece-${i}`,`${name} root`,i*100/3,79,100/3,21,treeReveal===`root-${i}`)}<span class="phase3-root root-name-${i}" data-ink-region="root-name-${i}">${name}</span>`).join('')}
 ${s.trunk?`${treePiece('identity-trunk','Trunk connecting the cultural roots',0,43,100,36,treeReveal==='trunk')}<strong class="phase3-trunk-label" data-ink-region="cultural-identity">CULTURAL IDENTITY</strong>`:''}
 ${CANOPY_WORDS.slice(0,s.canopy).map((word,i)=>`${treePiece('canopy-piece','Growing tree canopy',i*100/CANOPY_WORDS.length,0,100/CANOPY_WORDS.length,43,treeReveal===`canopy-${i}`)}<span class="phase3-leaf leaf-name-${i}" data-ink-region="canopy-word-${i}">${word}</span>`).join('')}
 </div>`;
}
function assignmentHTML(){
 const task=state().assignmentTask||1;
 const body=task===1?`<h3>Task 1 — My Chinese Cultural Roots</h3><p class="assignment-question">Explore one aspect of your Chinese cultural roots.</p><h4>Guiding Questions</h4><ol><li>What specific aspect of your Chinese cultural roots would you like to explore?</li><li>How is it connected to your personal experiences and cultural identity?</li><li>Why is it meaningful to you?</li></ol><h4>Assignment</h4><p class="assignment-task">Prepare a 2–3-minute personal reflection with specific examples from your own life. Share it in the next class.</p><p class="assignment-objective">This task supports Learning Objective 3: Chinese Cultural Exploration and Reflection.</p>`:
 `<h3>Task 2 — From Evaluation to Teaching Practice</h3><ol class="lesson-steps"><li><h4>Evaluate &amp; Observe</h4><p>Complete the learning evaluation and classroom observation questionnaire on Chaoxing Learning Platform.</p></li><li><h4>Collaborative Lesson Design</h4><p>Work in four groups to select a teaching focus from the text, set clear learning objectives, and design a microteaching lesson using AI-assisted gamified learning and interactive teaching approaches.</p></li><li><h4>Microteaching Practice</h4><p>Deliver a 15-minute group microteaching session in the next class.</p></li></ol><p class="assignment-objective">This task supports Learning Objective 4: Transfer to Teaching Practice.</p>`;
 return `<section class="panel assignment-screen" data-assignment-task="${task}" data-ink-region="after-class-assignment-${task}"><p class="eyebrow">Take your roots with you · Task ${task} of 2</p><h2>After-Class Assignment</h2>${body}<div class="assignment-navigation">${task===1?'<button data-action="assignment-next">Task 2 →</button>':'<button data-action="assignment-previous">← Task 1</button>'}<button data-action="return-tree">Return to the Cultural Identity Tree</button><button data-action="download-notes">Save my written field notes (.txt)</button></div><p class="small">Progress and annotations stay in this session. Reloading or Restart clears learning progress; save your written notes before closing.</p></section>`;
}
function treeHTML(){
 const s=state(),step=s.presentationStep;
 if(s.celebrationPending)return celebrationHTML();
 if(step==='assignment')return assignmentHTML();
 const prompt=step==='roots'?'Why does Momaday write about his homeland, the history of the Kiowa people, and his memories of Aho?':step==='identity'?'As Momaday leaves Rainy Mountain, does he leave his cultural roots behind? Why or why not?':'How can we deepen and develop our cultural identity?';
 const actions=step==='landscape'?'<button data-action="start-roots">Teacher: begin Cultural Roots</button>':step==='roots'?s.roots<3?'<button data-action="reveal-root">Teacher: reveal next root</button>':'<button data-action="reveal-trunk">Teacher: connect roots & grow trunk</button>':step==='identity'?'<button data-action="start-growth">Teacher: discuss continuity & growth</button>':s.canopy<CANOPY_WORDS.length?'<button data-action="reveal-canopy">Teacher: grow next canopy example</button>':'<button data-action="show-assignment">Teacher: show After-Class Assignment</button>';
 return `<section class="cultural-presentation" data-presentation-step="${step}">
 <div class="cultural-landscape ${step==='landscape'?'landscape-only':''}" data-ink-region="rainy-mountain-landscape" aria-label="Rainy Mountain landscape">${step==='landscape'?'':treeArtwork(s)}</div>
 <div class="panel presentation-discussion"><div class="presentation-controls">${presenter?actions:actions.replace(/Teacher: /g,'')}<button data-action="visit-gate">Review the Three Keys</button></div>${step==='landscape'?'':`<p class="eyebrow">${step==='roots'?'Cultural Roots':step==='identity'?'Cultural Identity':'Cultural Continuity & Growth'}</p><h2 class="presentation-prompt" data-ink-region="discussion-${step}">${prompt}</h2>${step==='roots'?source([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]):source([15])}
 ${step==='identity'?'<p class="identity-insight">These cultural roots help Momaday understand who he is culturally. Leaving Rainy Mountain physically does not mean abandoning his cultural roots: they remain connected to his cultural identity.</p>':''}
 ${step==='growth'?'<p class="presentation-followup">Explore your cultural roots and reflect on their personal significance.</p>':''}`}

 ${step==='landscape'?'':`<details><summary>Optional discussion notes</summary>${textArea('roots','Record ideas and evidence from your discussion.',s.rootDiscussion,'roots')}</details>`}</div></section>`;
}

function celebrationHTML(){
 return `<section class="arrival-screen"><div class="cultural-landscape landscape-only" aria-label="Rainy Mountain landscape"></div><div class="arrival-backdrop"><div class="arrival-celebration" role="dialog" aria-modal="true" aria-labelledby="arrival-title" aria-describedby="arrival-message"><p class="eyebrow">Our journey continues</p><h2 id="arrival-title">Congratulations, Explorers!</h2><p id="arrival-message">You’ve made it to Rainy Mountain!</p><button data-action="continue-journey-arrival">Continue Our Journey</button><button class="arrival-sound" data-action="map-sound" data-sound-label>Sound: ${soundEnabled?'on':'off'}</button></div></div></section>`;
}
document.addEventListener('keydown',event=>{
 const popup=document.querySelector('.arrival-celebration');if(!popup||event.key!=='Tab')return;
 const buttons=popup.querySelectorAll('button'),first=buttons[0],last=buttons[buttons.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
function syncVictoryCelebration(){
 const s=state();if(!document.querySelector('.arrival-celebration'))return;
 document.querySelector('[data-action="continue-journey-arrival"]').focus({preventScroll:true});
 if(s.celebrationPlayed)return;s.celebrationPlayed=true;
 if(!soundEnabled)return;
 try{
  audio ||= new (window.AudioContext||window.webkitAudioContext)();
  audio.resume().then(()=>{
   if(!soundEnabled||s!==state()||!s.celebrationPending||!document.querySelector('.arrival-celebration'))return;
   // Original four-second rising fanfare, synthesized entirely in this browser.
   const start=audio.currentTime;
   [392,523.25,659.25,783.99,659.25,783.99,1046.5,1046.5].forEach((frequency,i)=>{
    const osc=audio.createOscillator(),gain=audio.createGain(),at=start+i*.45;
    osc.type='triangle';osc.frequency.value=frequency;
    gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.07,at+.025);gain.gain.exponentialRampToValueAtTime(.001,at+(i===7?.8:.4));
    osc.connect(gain);gain.connect(audio.destination);const voice={osc,gain};toneVoices.add(voice);
    osc.onended=()=>{toneVoices.delete(voice);osc.disconnect();gain.disconnect();};osc.start(at);osc.stop(at+(i===7?.85:.44));
   });
  }).catch(()=>notify('Audio was not permitted. Continue Our Journey is still available.'));
 }catch{notify('Victory sound is unavailable. Continue Our Journey is still available.');}
}
function response(message, success=false, redraw=false){feedback=message;notify(message);if(success)tone();if(redraw)render();}
function returnToText(message){response(message);tone(false);const button=$('#adventure .text-return');if(button)button.focus();}
function checkpointAccessible(i){return teacher||i===0||state().checkpoints[i-1].complete;}
function routeToMap(){closeMenuForJourney();if(!unlockedStage(1)){notify('Complete Stage 1 first, or use Teacher access for independent presentation.');return;}evidenceView=null;currentStage=1;checkpoint=null;feedback='';render();focusMain();}
function acceptKey(){
 const s=state(),progress=s.keys[activeKey];if(!keyActivity||!progress.answerShown||progress.unlocked||progress.revealed<keyClueCount(activeKey))return;
 progress.unlocked=true;unlockAnimation=activeKey;keyActivity=false;s.gateOpen=false;
 feedback=`Key awarded: ${KEYS[activeKey].name}. Lock ${activeKey+1} is unlocked.`;
 tone();render();focusMain();
}
function maybeCompleteLandscape(){
 const s=state();if(!s.stage1&&s.matched.length===LANDSCAPE.length&&s.reconstructed&&['fire','brittle','overall'].every(k=>s.landscape[k]?.trim())){
  s.stage1=true;const completion=$('#landscape-completion');if(completion){completion.innerHTML=landscapeCompletionHTML();completion.classList.add('landscape-complete');}document.querySelectorAll('[data-stage="1"]').forEach(b=>b.disabled=false);$('#map-return').disabled=false;
  if(currentStage===0)$('#next').disabled=false;notify('Landscape complete! Stage 2 is unlocked.');
 }
}
function changeEvidence(delta){if(!evidenceView)return;evidenceView.index=Math.max(0,Math.min(evidenceView.refs.length-1,evidenceView.index+delta));render();focusMain();}
function collectGateClue(){const cp=state().checkpoints[checkpoint];if(cp.confirmed.length!==CONTENT.checkpoints[checkpoint].challenges.length)return;cp.complete=true;response(`Congratulations! You’ve earned the Clue Card for Gate ${checkpoint+1}!`,true,true);focusMain();}
// Coordinates follow the road in the unmodified 1672×941 Stage 2 artwork.
const ROAD_GATES=[[26.6,85.6],[44,72.8],[64.7,58.8],[45,47.5],[68.8,39.8],[92.5,37.5]];
const ROAD_LEGS=[
 [[26.6,85.6],[31,86],[36,85.7],[40,84.6],[43,82.7],[44.4,80.5],[44.8,78.8],[44.3,77.3],[42.8,75.7],[42,74.7],[42.7,73.6],[44,72.8]],
 [[44,72.8],[49.3,70.7],[55.3,69.2],[61.3,67.6],[67.3,66.2],[70.6,64.6],[71.3,63],[70.3,61.6],[67.3,60],[64.7,58.8]],
 [[64.7,58.8],[59.8,58.3],[53.8,57.9],[47.9,57.4],[42.5,56.8],[38.9,55.3],[37.4,53.9],[37.1,53],[38,51.8],[40.1,50.3],[42.5,48.9],[45,47.5]],
 [[45,47.5],[49.3,47.6],[55.3,47.1],[59.8,46.4],[63.5,45.2],[65.8,43.6],[66.7,41.7],[67.6,40.5],[68.8,39.8]],
 [[68.8,39.8],[73.1,39.6],[79.1,39.85],[83.6,40.05],[87.1,39.7],[89.8,38.3],[92.5,37.5]]
];
let walkFrame=0,walkOwner=null,walkLastTime=null,mapObserver=null,mapResizeObserver=null,footstepOutput=null,footstepBuffer=null;
const footstepVoices=new Set();
function roadPath(from,to){
 const path=[];for(let i=Math.min(from,to);i<Math.max(from,to);i++)path.push(...ROAD_LEGS[i].slice(i===Math.min(from,to)?0:1));
 return from<=to?path:path.reverse();
}
function roadLength(path){return path.slice(1).reduce((sum,p,i)=>sum+Math.hypot(p[0]-path[i][0],(p[1]-path[i][1])*941/1672),0);}
function roadPoint(walk){
 const path=walk.path,distance=roadLength(path)*Math.min(1,walk.elapsed/walk.duration);let used=0;
 for(let i=1;i<path.length;i++){const a=path[i-1],b=path[i],length=Math.hypot(b[0]-a[0],(b[1]-a[1])*941/1672);if(used+length>=distance){const t=length?(distance-used)/length:0;return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];}used+=length;}
 return path[path.length-1];
}
function continueJourney(){
 const s=state(),from=s.mapPosition,to=Math.min(5,checkpoint+1);
 if(from!==to){const path=roadPath(from,to);s.mapWalk={from,to,path,elapsed:0,duration:Math.max(3000,roadLength(path)*145),paused:false,nextStep:0};}
 routeToMap();
}
function explorerHTML(){
 const s=state(),point=s.mapWalk?roadPoint(s.mapWalk):ROAD_GATES[s.mapPosition||0];
 return `<div id="road-explorers" class="road-explorers" role="img" aria-label="Q-style explorer group on the road" style="left:${point[0]}%;top:${point[1]}%;--walker-width:${walkerWidth(point[1])}%;--walker-facing:${s.mapWalk?.facing||s.mapFacing||1}"><img id="walker-art" src="assets/explorers.png" alt=""></div>`;
}
function walkerWidth(y){return 6.5+Math.max(0,Math.min(1,(y-37.5)/(85.6-37.5)))*5;}
function mapControlsHTML(){return `<div class="map-controls"><p id="walk-status" role="status">${walkStatus()}</p><div><button data-action="map-home">Home</button><button data-action="map-sound" data-sound-label>Sound: ${soundEnabled?'on':'off'}</button><button data-action="map-fullscreen" data-fullscreen-label>${document.fullscreenElement?'Exit fullscreen':'Fullscreen'}</button><button data-action="toggle-walk" id="walk-pause" ${state().mapWalk?'':'hidden'}>${state().mapWalk?.paused?'Resume walking':'Pause walking'}</button>${presenter?'<button data-action="skip-walk" id="walk-skip" '+(state().mapWalk?'':'hidden')+'>Teacher: skip travel</button>':''}</div></div>`;}
function walkStatus(){const s=state();return s.mapWalk?(s.mapWalk.paused?'Walking paused. Resume when ready.':`Walking toward ${s.mapWalk.to===5?'the Final Gate':`Gate ${s.mapWalk.to+1}`}…`):`Explorers are at ${s.mapPosition===5?'the Final Gate':`Gate ${s.mapPosition+1}`}. Choose a gate to explore.`;}
function updateWalkControls(){
 const walking=!!state().mapWalk;
 $('#walk-status')&&( $('#walk-status').textContent=walkStatus());
 if($('#walk-pause')){$('#walk-pause').hidden=!walking;$('#walk-pause').textContent=state().mapWalk?.paused?'Resume walking':'Pause walking';}
 if($('#walk-skip'))$('#walk-skip').hidden=!walking;
 document.querySelectorAll('[data-checkpoint],.map-marker[data-action="final-gate"]').forEach(button=>{const i=Number(button.dataset.checkpoint);button.disabled=walking||(Number.isInteger(i)?!checkpointAccessible(i):!unlockedStage(2));});
}
function stopFootsteps(){for(const voice of [...footstepVoices]){try{voice.gain.gain.cancelScheduledValues(audio.currentTime);voice.gain.gain.setValueAtTime(0,audio.currentTime);voice.source.stop();voice.source.disconnect();voice.gain.disconnect();}catch{}footstepVoices.delete(voice);}}
function footstep(){
 if(!soundEnabled||!audio||audio.state!=='running'||!walkOwner?.mapWalk||!$('#road-explorers')?.classList.contains('is-walking'))return;
 try{
  if(!footstepOutput){footstepOutput=audio.createGain();footstepOutput.connect(audio.destination);}
  if(!footstepBuffer){footstepBuffer=audio.createBuffer(1,Math.floor(audio.sampleRate*.09),audio.sampleRate);const data=footstepBuffer.getChannelData(0);let smooth=0;for(let i=0;i<data.length;i++){smooth=smooth*.7+(Math.random()*2-1)*.3;data[i]=smooth;}}
  const source=audio.createBufferSource(),gain=audio.createGain(),t=audio.currentTime;source.buffer=footstepBuffer;source.playbackRate.value=walkOwner.mapWalk.nextStep%720===0?1:.86;
  gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.6,t+.004);gain.gain.exponentialRampToValueAtTime(.0001,t+.085);source.connect(gain);gain.connect(footstepOutput);
  const voice={source,gain};footstepVoices.add(voice);source.onended=()=>{footstepVoices.delete(voice);source.disconnect();gain.disconnect();};source.start();
 }catch{notify('Footstep audio is unavailable. Please check the browser audio permission.');}
}
function pauseTravel(){
 cancelAnimationFrame(walkFrame);walkFrame=0;walkLastTime=null;stopFootsteps();$('#road-explorers')?.classList.remove('is-walking');$('#walker-art')?.style.removeProperty('transform');
}
function mapInView(){const r=$('.map-scene')?.getBoundingClientRect();return r&&r.top>=-2&&r.bottom<=innerHeight+2;}
function canWalk(){return currentStage===1&&checkpoint===null&&!evidenceView&&!document.hidden&&state().mapWalk&&!state().mapWalk.paused&&mapInView()&&$('#walker-art')?.complete&&$('#walker-art')?.naturalWidth>0&&$('.map-scene > img')?.complete&&$('.map-scene > img')?.naturalWidth>0&&$('.annotation-overlay')?.style.pointerEvents!=='all';}
function positionExplorers(){
 const el=$('#road-explorers');if(!el)return;const s=state(),point=s.mapWalk?roadPoint(s.mapWalk):ROAD_GATES[s.mapPosition];el.style.left=point[0]+'%';el.style.top=point[1]+'%';el.style.setProperty('--walker-width',walkerWidth(point[1])+'%');
}
function startTravel(){
 if(walkFrame||!canWalk())return;walkOwner=state();walkOwner.mapWalk.nextStep=walkOwner.mapWalk.elapsed;walkLastTime=null;
 const tick=time=>{
  walkFrame=0;if(walkOwner!==state()||!canWalk()){pauseTravel();return;}
  const walk=walkOwner.mapWalk;if(walkLastTime!==null)walk.elapsed=Math.min(walk.duration,walk.elapsed+Math.min(time-walkLastTime,100));walkLastTime=time;
  const el=$('#road-explorers');el.classList.add('is-walking');positionExplorers();const here=roadPoint(walk),ahead=roadPoint({...walk,elapsed:Math.min(walk.duration,walk.elapsed+40)});if(Math.abs(ahead[0]-here[0])>.0001)walk.facing=ahead[0]>=here[0]?1:-1;el.style.setProperty('--walker-facing',walk.facing||1);
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const phase=walk.elapsed/360;$('#walker-art').style.transform=`translateY(${-Math.sin(Math.PI*(phase%1))*4}px) rotate(${Math.cos(Math.PI*phase)*1.25}deg) scaleX(var(--walker-facing,1))`;}else $('#walker-art').style.removeProperty('transform');
  if(walk.elapsed>=walk.duration){walkOwner.mapPosition=walk.to;walkOwner.mapFacing=walk.facing||1;walkOwner.mapWalk=null;pauseTravel();positionExplorers();updateWalkControls();notify(`The explorers have arrived at ${walk.to===5?'the Final Gate':`Gate ${walk.to+1}`}.`);return;}
  if(walk.elapsed>=walk.nextStep){footstep();walk.nextStep=Math.floor(walk.elapsed/360+1)*360;}
  walkFrame=requestAnimationFrame(tick);
 };
 walkFrame=requestAnimationFrame(tick);
}
function observeMap(){
 mapObserver?.disconnect();mapResizeObserver?.disconnect();if(!$('.map-scene')||evidenceView)return;
 mapObserver=new IntersectionObserver(()=>{if(mapInView())startTravel();else pauseTravel();},{threshold:[0,.9,.99,1]});mapObserver.observe($('.map-scene'));
 mapResizeObserver=new ResizeObserver(()=>{if(currentStage===1&&checkpoint===null&&!evidenceView){focusMap();startTravel();}});mapResizeObserver.observe($('.map-shell'));
 for(const image of [$('.map-scene > img'),$('#walker-art')])image?.addEventListener('load',()=>{if(currentStage===1&&checkpoint===null&&!evidenceView){focusMap();startTravel();}},{once:true});
 requestAnimationFrame(startTravel);
}
function toggleSound(){
 soundEnabled=!soundEnabled;$('#sound').setAttribute('aria-pressed',String(soundEnabled));$('#sound').textContent=`Sound: ${soundEnabled?'on':'off'}`;
 document.querySelectorAll('[data-sound-label]').forEach(el=>el.textContent=$('#sound').textContent);
 if(!soundEnabled){stopFootsteps();for(const voice of [...toneVoices]){try{voice.gain.gain.cancelScheduledValues(audio.currentTime);voice.gain.gain.setValueAtTime(0,audio.currentTime);voice.osc.stop();voice.osc.disconnect();voice.gain.disconnect();}catch{}toneVoices.delete(voice);}return;}
 if(state().mapWalk){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();audio.resume().then(()=>{if(state().mapWalk)state().mapWalk.nextStep=state().mapWalk.elapsed;startTravel();}).catch(()=>notify('Audio was not permitted. Walking and learning activities remain available.'));}catch{notify('This browser could not start audio. Check its sound permission.');}}else tone();
}
function landscapeCompletionHTML(){return '<p class="success">Landscape reconstructed. The adventure map is unlocked.</p><button data-action="to-map">Explore the map →</button>';}
let animateGate=false;
const ACTIONS={
 begin:()=>goStage(0), 'to-map':routeToMap, 'final-gate':()=>goStage(2),
 reconstruct:()=>{
  const s=state();if(!RECONSTRUCTION.every((r,i)=>s.reconstruction[i]===r.answer)){s.reconstructed=false;returnToText('Return to P1 and check each feature. Elk and bears belong to P6, not this landscape description.');return;}
  s.reconstructed=true;maybeCompleteLandscape();response('Your landscape record is assembled. Explain how its features work together.',true,true);
 },
 'landscape-confirm':()=>{
  const s=state();if(s.matched.length!==LANDSCAPE.length||!s.reconstructed||!['fire','brittle','overall'].every(k=>s.landscape[k]?.trim())){response('Complete matching, the reconstruction, and all three written explanations before finishing Stage 1.');return;}
  s.stage1=true;response('Landscape complete: Stage 2 is unlocked. Teacher Access is not required.',true,true);
 },
 'check-answer':()=>{
  const cp=state().checkpoints[checkpoint],q=CONTENT.checkpoints[checkpoint].challenges[cp.step],answer=cp.answers[cp.step]||[];
  const correct=q.type==='blanks'?q.answers.every((value,i)=>normalize(answer[i]||'')===value):answer.length===q.answers.length&&q.answers.every(v=>answer.includes(v));
  if(!correct){returnToText(checkpoint===1&&cp.step===0?'Check Paragraph 4 again. Pay attention to the direction of migration and the region the Kiowas entered.':'Dead end. Return to the text, discuss your evidence, revise your choice, and retry. Your previously earned clues are safe.');return;}
  cp.solved=true;response('Correct route. Find the evidence and discuss before continuing.',true,true);
 },
 'confirm-evidence':()=>{
  const cp=state().checkpoints[checkpoint];if(!cp.solved)return;
  if(!cp.confirmed.includes(cp.step))cp.confirmed.push(cp.step);
  if(cp.step+1<CONTENT.checkpoints[checkpoint].challenges.length)tone();
  ACTIONS['next-challenge']();
 },
 'next-challenge':()=>{
  const cp=state().checkpoints[checkpoint];if(!cp.confirmed.includes(cp.step))return;
  cp.step++;cp.solved=false;if(cp.step===CONTENT.checkpoints[checkpoint].challenges.length){collectGateClue();return;}feedback='';render();focusMain();
 },
 'collect-clue':collectGateClue,
 'continue-journey':continueJourney,
 'map-home':()=>$('#home').click(),
 'map-sound':toggleSound,
 'map-fullscreen':()=>$('#fullscreen').click(),
 'toggle-walk':()=>{const walk=state().mapWalk;if(!walk)return;walk.paused=!walk.paused;if(walk.paused)pauseTravel();else startTravel();updateWalkControls();},
 'skip-walk':()=>{if(!(presenter)||!state().mapWalk)return;const s=state();s.mapPosition=s.mapWalk.to;s.mapWalk=null;pauseTravel();positionExplorers();updateWalkControls();},
 'back-evidence':closeEvidence,
 'text-previous':()=>changeEvidence(-1),
 'text-next':()=>changeEvidence(1),
 'back-gate':()=>{keyActivity=false;evidenceView=null;feedback='';render();focusMain();},
 'reveal-key-clue':()=>{if(!keyActivity||activeKey===0)return;const p=state().keys[activeKey];p.revealed=Math.min(keyClueCount(activeKey),p.revealed+1);feedback='';render();},
 'reveal-land-branch':()=>{if(!keyActivity||activeKey!==0)return;revealedBranch=state().keys[0].revealed;state().keys[0].revealed=Math.min(3,state().keys[0].revealed+1);feedback='';render();},
 'reveal-key-meaning':()=>{if(!keyActivity)return;const p=state().keys[activeKey];if(p.revealed<keyClueCount(activeKey))return;p.answerShown=true;response('Shared meaning revealed. Discuss before awarding the key.',true,true);},
 'award-key':acceptKey,
 'open-gate':()=>{const s=state();if(s.gateOpen||s.presentation==='opening'||!s.keys.every(k=>k.unlocked))return;s.presentation='opening';s.openingStarted=performance.now();s.celebrationPlayed=false;render();focusMain();},
 'continue-journey-arrival':()=>{const s=state();if(!s.celebrationPending)return;s.celebrationPending=false;render();focusMain();},
 'visit-gate':()=>{state().presentation='gate';keyActivity=false;render();focusMain();},
 'resume-presentation':()=>{if(!state().gateOpen)return;state().presentation='landscape';render();focusMain();},
 'start-roots':()=>{if(state().celebrationPending||!state().gateOpen||state().presentationStep!=='landscape')return;state().presentationStep='roots';render();focusMain();},
 'reveal-root':()=>{const s=state();if(s.celebrationPending||s.presentationStep!=='roots'||!s.gateOpen||s.roots>=3)return;treeReveal=`root-${s.roots}`;s.roots=Math.min(3,s.roots+1);response(`Root ${s.roots} revealed: ${KEYS[s.roots-1].name}.`,true,true);focusMain();},
 'reveal-trunk':()=>{const s=state();if(s.celebrationPending||s.roots!==3||s.trunk)return;treeReveal='trunk';s.trunk=true;s.presentationStep='identity';response('The cultural roots connect with Cultural Identity.',true,true);focusMain();},
 'start-growth':()=>{const s=state();if(s.celebrationPending||!s.trunk)return;s.presentationStep='growth';render();focusMain();},
 'reveal-canopy':()=>{const s=state();if(s.celebrationPending||s.presentationStep!=='growth'||s.canopy>=CANOPY_WORDS.length)return;treeReveal=`canopy-${s.canopy}`;s.canopy=Math.min(CANOPY_WORDS.length,s.canopy+1);response(`Canopy example: ${CANOPY_WORDS[s.canopy-1]}.`,true,true);focusMain();},
 'show-assignment':()=>{const s=state();if(s.celebrationPending||s.canopy!==CANOPY_WORDS.length)return;s.presentationStep='assignment';s.assignmentTask=1;s.complete=true;render();focusMain();},
 'assignment-next':()=>{const s=state();if(s.presentationStep!=='assignment')return;s.assignmentTask=2;render();focusMain();},
 'assignment-previous':()=>{const s=state();if(s.presentationStep!=='assignment')return;s.assignmentTask=1;render();focusMain();},
 'return-tree':()=>{state().presentationStep='growth';render();focusMain();},
 'download-notes':()=>{
  const s=state(),notes=['Rainy Mountain Adventure · '+(teacher?'Teacher rehearsal':'Student journey'),'LANDSCAPE',...Object.entries(s.landscape).map(([k,v])=>`${k}: ${v}`),...s.checkpoints.flatMap((c,i)=>[`GATE ${i+1}: ${CONTENT.checkpoints[i].title}`,...Object.entries(c.evidence).map(([k,v])=>`Challenge ${Number(k)+1}: ${v}`),c.finalDiscussion]),...s.keys.map((k,i)=>`KEY ${i+1}: ${k.discussion}`),'ROOTS',s.rootDiscussion,'GROWTH',...s.growth.map(g=>`${g.kind}: ${g.text}`),'REFLECTIONS',...Object.entries(s.reflections).map(([k,v])=>`${k}: ${v}`)].join('\n\n');
  const url=URL.createObjectURL(new Blob([notes],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='rainy-mountain-field-notes.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
};
$('#adventure').addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button||button.disabled)return;
 if(button.dataset.textRefs!==undefined){openEvidence(button.dataset.textRefs.split(',').map(Number));return;}
 if(button.dataset.textIndex!==undefined){evidenceView.index=Number(button.dataset.textIndex);render();focusMain();return;}
 if(button.dataset.action){ACTIONS[button.dataset.action]?.();return;}
 if(button.dataset.phrase!==undefined){state().selected=Number(button.dataset.phrase);feedback=`Find the landscape region for “${LANDSCAPE[state().selected].phrase}”.`;render();return;}
 if(button.dataset.hotspot!==undefined){
  const s=state(),i=Number(button.dataset.hotspot);if(s.selected===null){response('Select an expression first, then click its landscape region.');return;}
  if(s.selected!==i){response('Look again at the visual feature and P1. Try another region.');tone(false);return;}
  if(!s.matched.includes(i))s.matched.push(i);s.selected=null;response(`Matched: ${LANDSCAPE[i].phrase}. ${LANDSCAPE[i].meaning}`,true,true);return;
 }
 if(button.dataset.checkpoint!==undefined){const i=Number(button.dataset.checkpoint);if(!checkpointAccessible(i)||state().mapWalk)return;evidenceView=null;currentStage=1;checkpoint=i;feedback='';render();focusMain();return;}
 if(button.dataset.openKey!==undefined){const i=Number(button.dataset.openKey);if(i<0||i>2)return;activeKey=i;keyActivity=true;feedback='';render();focusMain();}
});
$('#adventure').addEventListener('input',event=>{
 const el=event.target,s=state();
 if(el.dataset.group){
  const field=el.dataset.field;
  switch(el.dataset.group){
   case 'landscape':s.landscape[field]=el.value;maybeCompleteLandscape();break;
   case 'evidence':s.checkpoints[checkpoint].evidence[s.checkpoints[checkpoint].step]=el.value;break;
   case 'checkpoint-final':s.checkpoints[checkpoint].finalDiscussion=el.value;break;
   case 'key-discussion':s.keys[activeKey].discussion=el.value;break;
   case 'roots':s.rootDiscussion=el.value;break;
   case 'growth':s.growthDraft=el.value;break;
   case 'reflections':s.reflections[field]=el.value;break;
  }
 }
 if(el.dataset.reconstruction!==undefined){s.reconstruction[el.dataset.reconstruction]=Number(el.value);s.reconstructed=false;}
 if(el.dataset.route!==undefined){const c=s.checkpoints[checkpoint];c.answers[c.step]||=[];c.answers[c.step][Number(el.dataset.route)]=el.value;}
 if(el.id==='growth-kind')s.growthKind=el.value;
 if(el.dataset.answer!==undefined){
  const c=s.checkpoints[checkpoint],q=CONTENT.checkpoints[checkpoint].challenges[c.step],i=Number(el.dataset.answer);
  let answers=c.answers[c.step]||[];answers=q.type==='single'?[i]:el.checked?[...new Set([...answers,i])]:answers.filter(v=>v!==i);c.answers[c.step]=answers;
 }
});
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>goStage(Number(button.dataset.stage))));
$('#home').addEventListener('click',()=>{closeMenuForJourney();evidenceView=null;keyActivity=false;currentStage=-1;checkpoint=null;feedback='';render();focusMain();});
$('#map-return').addEventListener('click',routeToMap);
$('#previous').addEventListener('click',()=>goStage(currentStage-1));
$('#next').addEventListener('click',()=>goStage(currentStage+1));
$('#presenter').addEventListener('change',event=>{presenter=event.target.checked;render();});
$('#teacher').addEventListener('change',event=>{
 teacher=event.target.checked;evidenceView=null;keyActivity=false;checkpoint=null;activeKey=0;feedback='';if(currentStage>=0&&!unlockedStage(currentStage))currentStage=0;render();focusMain();notify(teacher?'Teacher rehearsal enabled. Student progress is preserved separately.':'Returned to the student journey.');
});
$('#sound').addEventListener('click',toggleSound);
$('#fullscreen').addEventListener('click',async()=>{
 try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else notify('Fullscreen is unavailable in this browser. Use the browser’s presentation shortcut.');}
 catch{notify('The browser declined fullscreen. The adventure remains available in this window.');}
});
document.addEventListener('fullscreenchange',()=>{resizeInterface();$('#fullscreen').textContent=document.fullscreenElement?'Exit fullscreen':'Fullscreen';document.querySelectorAll('[data-fullscreen-label]').forEach(el=>el.textContent=$('#fullscreen').textContent);if(currentStage===0&&!evidenceView)requestAnimationFrame(focusMain);if(currentStage===1&&checkpoint===null&&!evidenceView)requestAnimationFrame(()=>{focusMap();startTravel();});});
window.addEventListener('resize',()=>{resizeInterface();if(currentStage===1&&checkpoint===null&&!evidenceView)requestAnimationFrame(()=>{focusMap();startTravel();});});
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseTravel();else startTravel();});
document.addEventListener('rainy-ink-mode',event=>{if(event.detail.drawing){pauseTravel();if(state().mapWalk&&$('#walk-status'))$('#walk-status').textContent='Walking paused for annotation. Choose Interact to continue.';}else{startTravel();if($('#walk-status'))updateWalkControls();}});
$('#restart').addEventListener('click',()=>{setMenu(false);$('#restart-dialog').showModal();});
$('#cancel-restart').addEventListener('click',()=>$('#restart-dialog').close());
$('#confirm-restart').addEventListener('click',()=>{if(teacher)teacherState=freshState();else studentState=freshState();currentStage=0;checkpoint=null;activeKey=0;evidenceView=null;keyActivity=false;unlockAnimation=null;feedback='';animateGate=false;$('#restart-dialog').close();render();focusMain();notify('Current journey restarted.');});
$('#menu-toggle').addEventListener('click',()=>setMenu($('#adventure-menu').hidden));
$('#menu-close').addEventListener('click',()=>{setMenu(false);$('#menu-toggle').focus();});
document.addEventListener('keydown',event=>{if(event.key!=='Escape'||document.querySelector('dialog[open]'))return;if(!$('#adventure-menu').hidden){setMenu(false);$('#menu-toggle').focus();return;}const open=$('#adventure details.game-sheet[open]');if(open){open.open=false;interfaceSheets.set(sheetKey(open.dataset.sheet),false);open.querySelector('summary').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}});
resizeInterface();
render();
