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
      "clue": "Clue Card 1 — Origins\n• Original homeland: The high country in western Montana\n• Original way of life: Mountain people and hunters\n• Historical stage: Before acquiring horses and undergoing their later cultural transformation",
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
      "clue": "Clue Card 2 — Migration & Transformation\n1. Migration Route\n* Origin: The high country of western Montana\n* Direction: Southward and eastward\n* Destination region: The southern Plains\n2. Major Transformations\n* Lifestyle: Acquisition of horses; greater mobility; transformation beyond basic survival.\n* Cultural Practices and Religious Beliefs: Tai-me, Sun Dance, and worship of the sun.\n* Collective Values and Identity: A growing sense of destiny, courage, and pride; a transformed society of fighters, hunters, and priests of the sun.\n* Relationship with the Environment: Movement from mountainous forests toward open landscapes; cultural and spiritual connections with natural landmarks and the night sky.\n3. Mythology and Cultural Traditions\n* Devil’s Tower: A natural landmark explained through the legend of the seven sisters.\n* The Big Dipper: The seven sisters become stars, establishing an enduring spiritual connection between the Kiowas and the night sky.\n4. Key Textual Insight\n “Whatever they were in the mountains, they could be no more.”\n “They had found a way out of the wilderness.”\nCentral Understanding:\nThe Kiowas’ migration was more than a geographical journey. It marked a profound transformation in their way of life, cultural and religious traditions, collective values, and identity.\nTeaching Sequence:\n\nStudents complete Challenges 1–3 → review and integrate their textual evidence → teacher confirms the findings → collect Clue Card 2 — Migration & Transformation.\nThe collected clue card will be used in the Final Gate’s Tribal History mind-mapping activity.",
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
      "guide": "Gate 3 — Rise & Decline\nText  P3–P4, P9\nGuiding Question  How did the Kiowas rise to power, and what happened during their decline?\nChallenge 1 — Historical Sequence\nQuestion  Arrange the events chronologically.\nA. Rise to power → military defeat → disruption of traditional ceremonies.\nB. Military defeat → acquisition of horses → rise to power.\nCorrect Answer  A\nEvidence  P3, P9\nFollow-up / Feedback  This is a broad historical sequence, not a single causal chain.\nChallenge 2 — Understand Their Glory\nQuestion  What characterized their period of power?\nA. Cultural exchange and trade with neighboring tribes.\nB. Skilled horsemen and powerful warriors on the southern Plains.\nCorrect Answer  B\nEvidence  P3–P4\nFollow-up / Feedback  Identify the text’s details about their power.\nChallenge 3 — Understand Their Loss\nQuestion  What does the account of the last Sun Dances reveal?\nA. Disruption of a central religious and cultural tradition.\nB. The Kiowas had no religious traditions.\nCorrect Answer  A\nEvidence  P9\nFollow-up / Feedback  Was the decline only military and political? Explain.\nClue Card\n• Power and prosperity on southern Plains\n• Skilled horsemen and warriors\n• Military defeat and surrender\n• Disruption of Sun Dance and traditional life\nCompletion  Checkpoint completed; clues saved to the team collection."
    },
    {
      "title": "Aho’s Life and Memories",
      "guiding": "How was Aho’s life connected to Kiowa history and cultural traditions?",
      "challenges": [
        {
          "title": "Aho’s Place in History",
          "question": "When was Aho born in relation to Kiowa history?",
          "options": [
            "Near the end of their great era.",
            "After Kiowas surrendered to the soldiers at Fort Sill ."
          ],
          "answers": [
            0
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
      "guide": "Gate 4 — Aho’s Life and Memories\nText  P3, P5, P9\nGuiding Question  How was Aho’s life connected to Kiowa history and cultural traditions?\nChallenge 1 — Aho’s Place in History\nQuestion  When was Aho born in relation to Kiowa history?\nA. Near the end of their great era.\nB. After Kiowas surrendered to the soldiers at Fort Sill .\nCorrect Answer  A\nEvidence  P3\nFollow-up / Feedback  How was her life shaped by historical change?\nChallenge 2 — Memory of Ancestral Lands\nQuestion  Why did lands Aho had never seen still matter?\nA. She had witnessed the glory of every ancestral place in person.\nB. She inherited a cultural connection to the ancestral past.\nCorrect Answer  B\nEvidence  P5\nFollow-up / Feedback  Find “like memory in her blood”; distinguish inherited and personal memory.\nChallenge 3 — Aho and Cultural Traditions\nQuestion  What do her Sun Dance memories suggest?\nA. She retained connections to Kiowa religious traditions.\nB. She remembered the Sun Dance mainly as a social gathering.\nCorrect Answer  A\nEvidence  P9\nFollow-up / Feedback  Identify beliefs and practices significant to Aho.\nClue Card\n• Birth during historical change\n• Inherited memories of ancestral lands\n• Reverence for the sun\n• Sun Dance memories and Kiowa traditions\nCompletion  Gate completed; clues saved to the team collection."
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
function source(refs) {
  return `<details class="source"><summary>Return to the text · ${paragraphRefs(refs)}</summary>${refs.map(n => `<article><h4>Paragraph ${n}</h4><p>${escapeHTML(CONTENT.paragraphs[n])}</p></article>`).join('')}</details>`;
}
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
  [ [[3,'the Kiowas were living the last great moment of their history']], [[5,'like memory in her blood'],[5,'the Black Hills, where she had never been']], [[9,'My grandmother had a reverence for the sun'],[9,'she never forgot her birthright']] ],
  [ [[10,'turning meat in a great iron skillet'],[10,'bent above her beadwork'],[10,'I do not speak Kiowa, and I never understood her prayers']], [[12,'feasting and talk'],[13,'There were frequent prayer meetings, and great nocturnal feasts.'],[13,'I played with my cousins outside']], [[8,'My grandmother said:'],[8,'the Kiowas have kinsmen in the night sky']] ]
];
const KEYS = [
  {refs:[1,2,15], opening:'What have we learned about Rainy Mountain?',
   fields:[['A solitary','knoll'],['The ________ of Oklahoma','Plains'],['A place Aho','lived'],['Momaday’s return to visit her','grave']],
   context:['Distinctive seasonal weather and surroundings','Resting place of family members and ancestors','A place associated with the family’s past'],
   questions:['Is Rainy Mountain simply a beautiful place?','Why is this particular place important to Momaday?','What do we call a place connecting someone with ancestors and family history?'],
   name:'Ancestral Land', branches:'Landscape; Aho’s grave; family and ancestral connections'},
  {refs:[3,4,6,7,8,9],opening:'What happened to the Kiowas over time?',
   fields:[['Original homeland','Western Montana'],['Early way of life','mountain hunting'],['Movement toward the','Plains'],['Acquisition of','horses'],['Skilled ________ and warriors','horsemen'],['Military','defeat'],['Disruption of the ________ tradition','Sun Dance']],
   context:['Cultural encounters and religious traditions','Power on the southern Plains'],
   questions:['Can we connect these events in chronological order?','Does this timeline tell us only where they went?','What can we call this shared past of a people?'],name:'Tribal History',branches:'Origins; migration and transformation; rise and decline; traditions and beliefs'},
  {refs:[3,5,8,9,10,11,12,13],opening:'Whose lives and memories connect these details?',
   fields:[['Born near the end of the Kiowas’','great era'],['Inherited memories of ancestral','lands'],['Remembered the ________ tradition','Sun Dance'],['Aho’s prayers in the ________ language','Kiowa'],['Family ________ at Aho’s home','gatherings']],
   context:['Childhood experiences and intergenerational stories'],
   questions:['Are these memories only about Aho?','How do Aho’s experiences become part of Momaday’s memories?','What general name describes memories shared within a family across generations?'],name:'Family Memories',branches:'Aho’s experiences; prayers and storytelling; gatherings; Momaday’s childhood'}
];
const ROOT_QUESTIONS = ['Why did Momaday make this journey?','If he wanted only to visit Aho’s grave, why recount Kiowa origins, migration, history and traditions?','What do ancestral land, tribal history and family memories have in common?','How do these elements help Momaday understand who he is?'];
const LEARNER_REFLECTION = ['Vocabulary recognition and application','Textual interpretation','Evidence collection and reconstruction','Understanding of cultural identity and its development'];
const OBSERVER_REFLECTION = ['How did the game support or limit learning?','How did team discussion affect participation?','How did the teacher scaffold the tasks?','Which teaching strategies could be adapted for future teaching?'];
function freshState() {
  return {matched:[], selected:null, landscape:{}, reconstruction:{}, reconstructed:false, stage1:false,
    checkpoints:CONTENT.checkpoints.map(c => ({step:0, solved:false, evidence:{}, confirmed:[], complete:false, answers:{}, finalDiscussion:''})),
    keys:KEYS.map(() => ({phase:0,values:[],discussion:'',guess:'',unlocked:false})),gateOpen:false,roots:0,trunk:false,growth:[],growthDraft:'',growthKind:'Experiences',rootDiscussion:'',reflections:{},complete:false};
}
let studentState=freshState(), teacherState=freshState(), teacher=false;
let currentStage=-1, checkpoint=null, activeKey=0, soundEnabled=false, audio=null;
let feedback='';
const state=()=>teacher?teacherState:studentState;
function notify(message) { $('#announcement').textContent=message; }
function tone(success=true) {
  if(!soundEnabled)return;
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    audio.resume().catch(()=>{});
    const t=audio.currentTime;
    [success?392:196,success?523:164,success?659:146].forEach((frequency,i)=>{
      const osc=audio.createOscillator(),gain=audio.createGain();osc.type='sine';osc.frequency.value=frequency;
      gain.gain.setValueAtTime(0,t+i*.1);gain.gain.linearRampToValueAtTime(.07,t+i*.1+.015);gain.gain.exponentialRampToValueAtTime(.001,t+i*.1+.22);
      osc.connect(gain);gain.connect(audio.destination);osc.start(t+i*.1);osc.stop(t+i*.1+.24);
    });
  }catch {soundEnabled=false;$('#sound').textContent='Sound unavailable';notify('Sound is unavailable. All activities still work.');}
}
function unlockedStage(n){return teacher||n===0||(n===1?state().stage1:state().checkpoints.every(c=>c.complete));}
function goStage(n) {
  if(!Number.isInteger(n)||n<0||n>2)return;
  if(!unlockedStage(n)){notify(n===1?'Complete the landscape activities first. Teachers can use Teacher access.':'Collect all five checkpoint clues first. Teachers can use Teacher access.');return;}
  currentStage=n;checkpoint=null;feedback='';render();focusMain();
}
function focusMain() {$('#adventure').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
function render(){
  const s=state();
  document.querySelectorAll('[data-stage]').forEach(button=>{
    const n=Number(button.dataset.stage);button.disabled=!unlockedStage(n);
    if(n===currentStage)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');
  });
  $('#mode-note').textContent=teacher?'Teacher rehearsal · independent access to every stage and checkpoint. Rehearsal progress is separate from the student journey.':'Student journey · progress stays while switching screens. Teacher confirmation buttons support classroom discussion. Reloading clears this session.';
  $('#previous').disabled=currentStage<=0;
  $('#next').disabled=currentStage<0||currentStage===2||!unlockedStage(currentStage+1);
  $('#map-return').disabled=!unlockedStage(1);
  $('#progress').textContent=currentStage<0?'Adventure home':`Stage ${currentStage+1} of 3${checkpoint!==null?` · Checkpoint ${checkpoint+1}`:''}`;
  $('#adventure').className=currentStage<0?'home-screen':`stage-${currentStage}`;
  $('#adventure').innerHTML=currentStage<0?homeHTML():currentStage===0?landscapeHTML():currentStage===1?(checkpoint===null?mapHTML():checkpointHTML()):gateHTML();
  animateGate=false;
  notify(feedback);
}
function homeHTML(){return `<section class="welcome panel"><p class="eyebrow">An offline classroom adventure</p><h2>Follow the landscape.<br>Discover the connections.</h2><img class="explorers" src="assets/explorers.png" alt="Q-style explorers ready for their journey"><p>Explore N. Scott Momaday’s <cite>The Way to Rainy Mountain</cite> through close reading, evidence, and team discussion.</p><ol><li>Unlock the Landscape — language and visual reconstruction.</li><li>Journey Through History and Memory — five checkpoints.</li><li>Finding Our Cultural Roots — three keys and an identity tree.</li></ol><button data-action="begin">Begin / resume exploration →</button><details><summary>Learning objectives & classroom use</summary>${list(['Recognize, understand, and apply key vocabulary and expressions.','Interpret and reconstruct the text using textual evidence; develop awareness of transfer to future teaching.','Develop a text-based understanding of the sources of cultural identity.','Extend understanding of how cultural identity can continue to develop.'])}<p>ICAP framework · Read, discuss, find evidence, and make decisions as an explorer team. Teacher access allows independent presentation; it is a classroom control, not a password-protected role.</p><p>Everything runs locally. No answers leave this page. Use Restart to clear the current journey, or copy your written reflections before closing.</p></details><details><summary>Teacher presentation · 10-minute demonstration</summary>${list(['Briefly recall clues from the five Checkpoints.','Guide students through three progressively completed mind maps.','Students induce the names of the three categories.','Unlock the final gate and arrive at Rainy Mountain.','Use P14–P15 to discuss the journey’s meaning.','Build three roots of the Cultural Identity Tree.','Pose the open question of cultural growth.','Assign branches-and-leaves extension task.'])}<p>Focus: Objective 3; supported by evidence of Objective 2 and an extension toward Objective 4. Teacher access uses a separate rehearsal journey; no student achievements are fabricated.</p></details></section>`;}
function landscapeHTML(){
 const s=state();
 return `<section><div class="panel intro"><p class="eyebrow">Stage 1 · P1</p><h2>Unlock the Landscape</h2><p class="guiding">What does Rainy Mountain look like?</p><p>Select a textual expression, then click the landscape area that represents it. You can also use Tab and Enter on numbered regions.</p><p class="small">This illustration combines seasons and exaggerates scale. Identify what the text describes; P1 does not say winter blizzards and summer heat occur together. Tree species are identified by the text, not by botanical details in the artwork.</p>${source([1])}</div>
 <div class="landscape-layout"><aside class="panel phrase-bank"><h3>Expressions from P1</h3><p>${s.matched.length} / ${LANDSCAPE.length} matched</p>${LANDSCAPE.map((f,i)=>`<button class="phrase ${s.selected===i?'selected':''}" data-phrase="${i}" aria-pressed="${s.selected===i}" ${s.matched.includes(i)?'disabled':''}>${s.matched.includes(i)?'✓ ':''}${escapeHTML(f.phrase)}</button>`).join('')}</aside>
 <div><div class="scene landscape-scene"><img src="assets/background-stage1.png" alt="An illustrated plain with snow and a tornado on the left, a central knoll, dry grass and grasshoppers in front, tortoises on red earth, and a creek beside rows of sunlit trees.">${LANDSCAPE.map((f,i)=>`<button class="hotspot ${s.matched.includes(i)?'matched':''}" style="left:${f.x}%;top:${f.y}%;width:${f.w}%;height:${f.h}%" data-hotspot="${i}" aria-label="Area ${i+1}: ${escapeHTML(f.area)}"><span>${s.matched.includes(i)?'✓':i+1}</span></button>`).join('')}</div><p class="panel small" id="landscape-feedback">${escapeHTML(feedback||'Choose an expression to begin. Each region has a number.')}</p></div></div>
 <div class="panel"><h3>Your field notes</h3>${s.matched.length?list(s.matched.map(i=>`${LANDSCAPE[i].phrase}: ${LANDSCAPE[i].meaning}`)):'<p>Your matched expressions will appear here.</p>'}
 ${s.matched.length===LANDSCAPE.length?`<h3>Explain and reconstruct</h3><p>Use your own English, then compare and discuss with your teacher. These P1-based activities extend the design’s open tasks.</p>${textArea('fire','Explain “steaming foliage seems almost to writhe in fire.”',s.landscape.fire,'landscape')}${textArea('brittle','Explain “brittle and brown” and what it suggests about summer.',s.landscape.brittle,'landscape')}
 <h4>Reconstruct the landscape</h4><p>Select the P1-supported features to assemble your landscape record.</p>${RECONSTRUCTION.map((r,i)=>`<fieldset><legend>${r.name}</legend>${r.choices.map((v,j)=>`<label class="option"><input type="radio" name="reconstruction-${i}" data-reconstruction="${i}" value="${j}" ${s.reconstruction[i]===j?'checked':''}>${escapeHTML(v)}</label>`).join('')}</fieldset>`).join('')}<button data-action="reconstruct">Check reconstruction</button>${s.reconstructed?`<div class="reconstructed"><h4>Your landscape record</h4>${list(RECONSTRUCTION.map(r=>r.choices[r.answer]))}</div>`:''}
 ${textArea('overall','Explain the landscape’s overall characteristics, including isolation, scale, and its effect on the imagination.',s.landscape.overall,'landscape')}
 <details><summary>Teacher comparison notes · P1 interpretations</summary><p>The foliage appears to move or twist in intense heat as if in fire; the text uses imaginative language rather than describing literal burning. Brittle grass is dry and breaks easily. A solitary knoll and isolated objects create loneliness; the open landscape affects proportion and brings the imagination to life.</p></details>
 <button data-action="landscape-confirm">Teacher: confirm explanations & unlock map</button>`:'<p>Match all nine expressions to unlock explanation and reconstruction.</p>'}
 ${s.stage1?'<p class="success">Landscape reconstructed. The adventure map is unlocked.</p><button data-action="to-map">Explore the map →</button>':''}</div></section>`;
}
function textArea(id,label,value,group){return `<label for="${group}-${id}">${escapeHTML(label)}</label><textarea id="${group}-${id}" rows="3" data-group="${group}" data-field="${id}">${escapeHTML(value)}</textarea>`;}
function mapHTML(){
 const s=state(),points=[[26.6,85.6],[44,72.8],[64.7,58.8],[45,47.5],[68.8,39.8],[92.5,37.5]];
 return `<section><div class="panel intro"><p class="eyebrow">Stage 2 · Read → Find Evidence → Discuss → Choose a Path → Collect a Clue</p><h2>Journey Through History and Memory</h2><p>Follow the five checkpoints in order. A wrong turn returns you to the text; earned clues stay in your collection.</p>${teacher?'<p class="success">Teacher rehearsal: select any checkpoint independently.</p>':''}</div><div class="scene map-scene"><img src="assets/background-stage%202.png" alt="Adventure trail with five checkpoints leading to the final gate.">${points.map(([x,y],i)=>{const locked=i<5?!teacher&&i>0&&!s.checkpoints[i-1].complete:!unlockedStage(2);return `<button class="map-marker ${i<5&&s.checkpoints[i].complete?'earned':''}" style="left:${x}%;top:${y}%" ${i<5?`data-checkpoint="${i}"`:'data-action="final-gate"'} ${locked?'disabled':''} aria-label="${i<5?`Checkpoint ${i+1}: ${escapeHTML(CONTENT.checkpoints[i].title)}`:'Final Gate'}">${i<5?(s.checkpoints[i].complete?'✓':i+1):'Gate'}</button>`;}).join('')}</div><div class="panel"><h3>Route & clue collection · ${s.checkpoints.filter(c=>c.complete).length} / 5</h3><div class="route-list">${CONTENT.checkpoints.map((c,i)=>`<button data-checkpoint="${i}" ${!teacher&&i>0&&!s.checkpoints[i-1].complete?'disabled':''}>${i+1}. ${escapeHTML(c.title)} ${s.checkpoints[i].complete?'✓':''}</button>`).join('')}</div>${s.checkpoints.map((c,i)=>c.complete?`<details><summary>Clue ${i+1} · ${escapeHTML(CONTENT.checkpoints[i].title)}</summary><div class="document-notes">${escapeHTML(CONTENT.checkpoints[i].clue)}</div></details>`:'').join('')}</div></section>`;
}
function quoteHTML(refs){return refs.map(([p,quote])=>`<blockquote>“${escapeHTML(quote)}”<cite>P${p}</cite></blockquote>`).join('');}
function checkpointHTML(){
 const s=state(),cp=s.checkpoints[checkpoint],data=CONTENT.checkpoints[checkpoint],q=data.challenges[cp.step];
 return `<section class="panel checkpoint"><button data-action="to-map">← Return to Map</button><p class="eyebrow">Checkpoint ${checkpoint+1} · ${escapeHTML(data.title)}</p><h2>${escapeHTML(data.guiding)}</h2>
 ${cp.complete?`<h3>Clue collected</h3><div class="document-notes">${escapeHTML(data.clue)}</div><button data-action="to-map">Continue along the map →</button><details><summary>Review checkpoint teaching notes</summary><div class="document-notes">${escapeHTML(data.guide)}</div></details>`:q?`
 <p class="eyebrow">Challenge ${cp.step+1} / ${data.challenges.length} · ${paragraphRefs(q.refs)}</p><h3>${escapeHTML(q.title)}</h3><p class="guiding">${escapeHTML(q.question)}</p>${q.type==='multi'?'<p>Select all that apply. Find textual evidence to support your choices.</p>':''}${source(q.refs)}
 <div class="answers">${q.type==='blanks'?`<p>The high country in western Montana ↓</p><div class="inline-fields"><label>To the <input ${cp.solved?'disabled':''} data-route="0" value="${escapeHTML(cp.answers[cp.step]?.[0]||'')}" aria-label="First migration direction"></label><label>and <input ${cp.solved?'disabled':''} data-route="1" value="${escapeHTML(cp.answers[cp.step]?.[1]||'')}" aria-label="Second migration direction"></label><label>The <input ${cp.solved?'disabled':''} data-route="2" value="${escapeHTML(cp.answers[cp.step]?.[2]||'')}" aria-label="Destination Plains"> Plains ↓</label></div>`:q.options.map((o,i)=>`<label class="option"><input type="${q.type==='multi'?'checkbox':'radio'}" name="checkpoint-answer" data-answer="${i}" ${(cp.answers[cp.step]||[]).includes(i)?'checked':''} ${cp.solved?'disabled':''}>${String.fromCharCode(65+i)}. ${escapeHTML(o)}</label>`).join('')}</div>
 ${!cp.solved?'<button data-action="check-answer">Choose this path</button>':`<p class="success">Correct route. ${escapeHTML(q.feedback)}</p><h3>Evidence Challenge</h3><p>${checkpoint===0?'Which expressions in Paragraph 4 support your answers?':'Find textual evidence to support your choices.'}</p>${textArea('response','Record supporting expressions, paragraph references, and your team’s interpretation.',cp.evidence[cp.step],'evidence')}<p>Discuss before using the teacher confirmation control. Interpretations are reviewed by a person, not automatically graded.</p>${cp.confirmed.includes(cp.step)?`<h4>Confirmed evidence · exact source excerpts</h4>${quoteHTML(EVIDENCE[checkpoint][cp.step])}${q.notes?`<details open><summary>Teaching design · evidence interpretations & discussion</summary><div class="document-notes">${escapeHTML(q.notes)}</div></details>`:''}<button data-action="next-challenge">${cp.step===data.challenges.length-1?'Review and collect clue':'Next challenge →'}</button>`:'<button data-action="confirm-evidence">Teacher: Confirm Evidence</button>'}`}`:`
 <h3>Review the checkpoint findings</h3>${checkpoint===0?'<p>Which expressions in Paragraph 4 support your answers?</p>':''}${checkpoint===1?`<h4>Concluding Reflection — Migration & Transformation</h4>${quoteHTML(EVIDENCE[1][2].slice(-2))}<p>What do these two statements suggest about the Kiowas’ transformation?</p><p class="small">Review the integrated findings: migration route; changes in lifestyle, traditions, values, and relationship with the environment; and the legend’s significance.</p>`:''}
 ${data.challenges.map((v,i)=>`<details><summary>${escapeHTML(v.title)} · discussion</summary><p>${escapeHTML(v.feedback)}</p>${quoteHTML(EVIDENCE[checkpoint][i])}${v.notes?`<div class="document-notes">${escapeHTML(v.notes)}</div>`:''}</details>`).join('')}
 ${textArea('final','Discuss and summarize your evidence before collecting the clue.',cp.finalDiscussion,'checkpoint-final')}<button data-action="collect-clue">Teacher: confirm findings & collect clue</button>`}</section>`;
}
function gateHTML(){
 const s=state();
 return `<section><div class="panel intro"><p class="eyebrow">Stage 3 · Finding Our Cultural Roots</p><h2>${s.gateOpen?'Discover the Roots':'The Final Gate — Discover the Three Keys'}</h2><p>${s.gateOpen?'Use P14–P15 with the whole text to connect the journey with cultural identity.':'From Details → Connections → Categories. Reconstruct the evidence, discuss its connections, and infer each key’s name.'}</p></div>
 <div class="gate-scene ${s.gateOpen?'open':''} ${animateGate?'opening':''}" aria-label="${s.gateOpen?'The gate is open':'The gate is locked'}"><div class="gate-destination"><img src="assets/explorers.png" alt="Explorers arriving at Rainy Mountain"><p>${s.gateOpen?'Explorers reach Rainy Mountain.':'Three discoveries open the way.'}</p></div><img class="door left" src="assets/left%20door.png" alt="Left gate door"><img class="door right" src="assets/right%20door.png" alt="Right gate door"></div>
 <div class="panel"><div class="lock-row">${s.keys.map((k,i)=>`<button data-key-tab="${i}" aria-pressed="${activeKey===i}" ${!teacher&&i>0&&!s.keys[i-1].unlocked?'disabled':''}><img src="assets/${k.unlocked?'key.png':'lock%20closed.png'}" alt="${k.unlocked?'Unlocked key':'Closed lock'}"><span>${k.unlocked?escapeHTML(KEYS[i].name):`Unknown key ${i+1}`}</span></button>`).join('')}</div>
 ${!s.gateOpen?keyHTML():`<h3>Completed mind map</h3><div class="mindmap">${KEYS.map(k=>`<article><h4>${escapeHTML(k.name)}</h4><p>${escapeHTML(k.branches)}</p></article>`).join('')}</div><p class="success">All three keys collected. The final gate opens.</p><button data-action="replay-gate">Replay door opening</button>`}</div>
 ${s.gateOpen?treeHTML():''}</section>`;
}
function keyHTML(){
 const k=KEYS[activeKey],progress=state().keys[activeKey];
 if(progress.unlocked)return `<h3>Key discovered: ${escapeHTML(k.name)}</h3><p>${escapeHTML(k.branches)}</p>${activeKey<2?'<button data-action="next-key">Explore the next key →</button>':''}`;
 return `<p class="eyebrow">Unknown key ${activeKey+1} · ${paragraphRefs(k.refs)}</p><h3>${escapeHTML(k.opening)}</h3>${source(k.refs)}
 ${progress.phase===0?`<h4>Step 1 — Recall and Complete</h4><div class="key-fields">${k.fields.map(([label],i)=>`<label>${escapeHTML(label)} <input data-key-field="${i}" value="${escapeHTML(progress.values[i]||'')}" aria-label="${escapeHTML(label)}"></label>`).join('')}</div>${list(k.context)}<button data-action="check-key-details">Connect these details →</button>${teacher?'<button data-action="key-fill">Teacher rehearsal: show suggested fill-ins</button>':''}`:progress.phase===1?`<h4>Step 2 — Connect the Clues</h4>${list(k.questions)}${textArea('connections','Discuss the questions and record your connections.',progress.discussion,'key-discussion')}<button data-action="key-connect">Teacher: confirm connections →</button>`:`<h4>Step 3 — Name the Category</h4><p>What shared category connects these details?</p><label for="key-name">Our inferred key name</label><input id="key-name" data-key-name value="${escapeHTML(progress.guess)}"><button data-action="unlock-key">Try this key</button>${teacher?'<button data-action="key-reveal">Teacher rehearsal: reveal this key</button>':''}`}`;
}
function treeHTML(){
 const s=state();
 return `<div class="panel roots"><h3>Mission 1 — Discover the Roots</h3><p class="guiding">Why does Momaday bring together the ancestral land, tribal history, and family memories in his journey to Rainy Mountain?</p>${source([14,15])}${list(ROOT_QUESTIONS)}${textArea('roots','Support your interpretation using the text.',s.rootDiscussion,'roots')}
 <div class="identity-tree"><div class="tree-art" aria-label="Cultural Identity Tree: ${s.roots} roots revealed${s.trunk?', trunk revealed':''}, ${s.growth.length} growth contributions">
 ${s.roots?`<img class="tree-layer root-layer" src="assets/cultural%20identity%20tree.png" alt="Tree roots" style="clip-path:inset(79% ${100-s.roots/3*100}% 0 0)">`:''}
 ${s.trunk?'<img class="tree-layer trunk-layer" src="assets/cultural%20identity%20tree.png" alt="Tree trunk">':''}
 ${s.growth.length?`<img class="tree-layer crown-layer" src="assets/cultural%20identity%20tree.png" alt="Growing branches and leaves" style="clip-path:inset(${Math.max(0,43-s.growth.length*15)}% 0 57% 0)">`:''}
 <div class="root-labels">${KEYS.slice(0,s.roots).map(k=>`<span>${escapeHTML(k.name)}</span>`).join('')}</div>${s.trunk?'<strong class="trunk-label">Momaday’s Cultural Identity</strong>':''}</div></div>
 ${s.roots<3?'<button data-action="reveal-root">Teacher: confirm interpretation & reveal next root</button>':!s.trunk?'<button data-action="reveal-trunk">Teacher: connect the roots & reveal the trunk</button>':''}
 ${s.trunk?`<h3>Mission 2 — Let the Tree Grow</h3><p>Is cultural identity shaped only by the past? Can it continue to develop through new experiences?</p><p>As Momaday leaves Rainy Mountain, does he leave his cultural roots behind? Why or why not?</p>${textArea('extension','Discuss cultural continuity and growth.',s.reflections.extension,'reflections')}<p>Complete the Cultural Identity Tree with branches and leaves, explaining how new experiences, relationships, practices or choices contribute to cultural growth.</p><label>Growth category <select id="growth-kind">${['Experiences','Relationships','Practices','Choices'].map(v=>`<option ${s.growthKind===v?'selected':''}>${v}</option>`).join('')}</select></label>${textArea('growth','Explain one contribution to cultural growth.',s.growthDraft,'growth')}<button data-action="add-growth">Add a branch / leaf</button><ol class="growth-list">${s.growth.map(g=>`<li><strong>${escapeHTML(g.kind)}:</strong> ${escapeHTML(g.text)}</li>`).join('')}</ol><p>Language connection · P7: revisit “a profusion of” and “luxuriant” to enrich the tree metaphor.</p>${source([7])}
 ${s.growth.length?`<p class="takeaway">Cultural identity is rooted in the past, but it is not fixed. It continues to grow and develop through new experiences, memories, and the transmission of cultural traditions.</p><h3>Unit Reflection — Two Roles</h3><div class="reflection-grid"><div><h4>As a Learner</h4>${list(LEARNER_REFLECTION)}${textArea('learner','Reflect on your learning.',s.reflections.learner,'reflections')}</div><div><h4>As a Teaching Observer</h4>${list(OBSERVER_REFLECTION)}${textArea('observer','Reflect on the teaching and interaction.',s.reflections.observer,'reflections')}</div></div><button data-action="finish">Complete unit reflection</button>${s.complete?'<p class="success">Journey complete. Keep growing, and take your roots with you.</p>':''}<button data-action="download-notes">Save my written field notes (.txt)</button>`:''}`:''}
 <p class="small">All notes remain in this session until reload or Restart. Use Save my written field notes or copy your responses before closing.</p></div>`;
}

function response(message, success=false, redraw=false){feedback=message;notify(message);if(success)tone();if(redraw)render();}
function returnToText(message){response(message);tone(false);const details=$('#adventure .source');if(details){details.open=true;details.scrollIntoView({block:'nearest',behavior:'smooth'});}}
function checkpointAccessible(i){return teacher||i===0||state().checkpoints[i-1].complete;}
function routeToMap(){if(!unlockedStage(1)){notify('Complete Stage 1 first, or use Teacher access for independent presentation.');return;}currentStage=1;checkpoint=null;feedback='';render();focusMain();}
function acceptKey(){
 const s=state();s.keys[activeKey].unlocked=true;tone();
 if(s.keys.every(k=>k.unlocked)){s.gateOpen=true;animateGate=true;feedback='All three keys collected. The gate opens!';}
 else feedback=`Key discovered: ${KEYS[activeKey].name}. The corresponding lock opens.`;
 render();
}
let animateGate=false;
const ACTIONS={
 begin:()=>goStage(0), 'to-map':routeToMap, 'final-gate':()=>goStage(2),
 reconstruct:()=>{
  const s=state();if(!RECONSTRUCTION.every((r,i)=>s.reconstruction[i]===r.answer)){s.reconstructed=false;returnToText('Return to P1 and check each feature. Elk and bears belong to P6, not this landscape description.');return;}
  s.reconstructed=true;response('Your landscape record is assembled. Explain how its features work together.',true,true);
 },
 'landscape-confirm':()=>{
  const s=state();if(s.matched.length!==LANDSCAPE.length||!s.reconstructed||!['fire','brittle','overall'].every(k=>s.landscape[k]?.trim())){response('Complete matching, the reconstruction, and all three written explanations before teacher confirmation.');return;}
  s.stage1=true;response('Teacher-confirmed: the adventure map is unlocked.',true,true);
 },
 'check-answer':()=>{
  const cp=state().checkpoints[checkpoint],q=CONTENT.checkpoints[checkpoint].challenges[cp.step],answer=cp.answers[cp.step]||[];
  const correct=q.type==='blanks'?q.answers.every((value,i)=>normalize(answer[i]||'')===value):answer.length===q.answers.length&&q.answers.every(v=>answer.includes(v));
  if(!correct){returnToText(checkpoint===1&&cp.step===0?'Check Paragraph 4 again. Pay attention to the direction of migration and the region the Kiowas entered.':'Dead end. Return to the text, discuss your evidence, revise your choice, and retry. Your previously earned clues are safe.');return;}
  cp.solved=true;response('Correct route. Find the evidence and discuss before continuing.',true,true);
 },
 'confirm-evidence':()=>{
  const cp=state().checkpoints[checkpoint];if(!cp.solved||!cp.evidence[cp.step]?.trim()){response('Record supporting textual expressions and your interpretation before teacher confirmation.');return;}
  if(!cp.confirmed.includes(cp.step))cp.confirmed.push(cp.step);response('Evidence confirmed. Compare the exact excerpts and discuss the teaching notes.',true,true);
 },
 'next-challenge':()=>{
  const cp=state().checkpoints[checkpoint];if(!cp.confirmed.includes(cp.step))return;
  cp.step++;cp.solved=false;feedback='';render();focusMain();
 },
 'collect-clue':()=>{
  const cp=state().checkpoints[checkpoint],data=CONTENT.checkpoints[checkpoint];
  if(cp.confirmed.length!==data.challenges.length||!cp.finalDiscussion.trim()){response('Discuss and summarize the checkpoint findings before teacher confirmation.');return;}
  cp.complete=true;response(`Clue ${checkpoint+1} collected. Your previous clues are preserved.`,true,true);
 },
 'check-key-details':()=>{
  const k=KEYS[activeKey],p=state().keys[activeKey];
  const alternatives={'mountain hunting':['mountain hunters','hunters','mountain people and hunters'],'Western Montana':['the high country in western montana','high country in western montana'],'Plains':['the plains'],'great era':['last great moment','last great moment of their history']};
  const correct=k.fields.every(([,expected],i)=>[expected,...(alternatives[expected]||[])].map(normalize).includes(normalize(p.values[i]||'')));
  if(!correct){returnToText('Some details need another look. Revisit the referenced paragraphs and discuss the missing words.');return;}
  p.phase=1;response('Details reconstructed. Now connect the clues.',true,true);
 },
 'key-fill':()=>{if(!teacher)return;state().keys[activeKey].values=KEYS[activeKey].fields.map(f=>f[1]);response('Suggested fill-ins shown for this teacher rehearsal.',false,true);},
 'key-connect':()=>{const p=state().keys[activeKey];if(!p.discussion.trim()){response('Record the team’s connections before confirming.');return;}p.phase=2;response('Connections confirmed. Infer the shared category.',false,true);},
 'unlock-key':()=>{const p=state().keys[activeKey];if(normalize(p.guess)!==normalize(KEYS[activeKey].name)){returnToText('This name does not yet connect the evidence. Discuss the common category and try again.');return;}acceptKey();},
 'key-reveal':()=>{if(teacher)acceptKey();},
 'next-key':()=>{activeKey=Math.min(2,activeKey+1);feedback='';render();},
 'replay-gate':()=>{animateGate=true;render();tone();},
 'reveal-root':()=>{const s=state();if(!s.rootDiscussion.trim()){response('Record a text-supported interpretation before teacher confirmation.');return;}s.roots=Math.min(3,s.roots+1);response(`Root ${s.roots} revealed: ${KEYS[s.roots-1].name}.`,true,true);},
 'reveal-trunk':()=>{const s=state();if(s.roots!==3)return;s.trunk=true;response('The three roots connect with Momaday’s Cultural Identity.',true,true);},
 'add-growth':()=>{const s=state();if(!s.growthDraft.trim()){response('Explain how an experience, relationship, practice, or choice contributes to cultural growth.');return;}s.growth.push({kind:s.growthKind,text:s.growthDraft.trim()});s.growthDraft='';response('A new branch or leaf joins the tree. Keep discussing how identity can grow.',true,true);},
 finish:()=>{const s=state();if(!['extension','learner','observer'].every(k=>s.reflections[k]?.trim())){response('Complete the growth discussion and both reflection roles before finishing.');return;}s.complete=true;response('Journey complete. Keep growing!',true,true);},
 'download-notes':()=>{
  const s=state(),notes=['Rainy Mountain Adventure · '+(teacher?'Teacher rehearsal':'Student journey'),'LANDSCAPE',...Object.entries(s.landscape).map(([k,v])=>`${k}: ${v}`),...s.checkpoints.flatMap((c,i)=>[`CHECKPOINT ${i+1}: ${CONTENT.checkpoints[i].title}`,...Object.entries(c.evidence).map(([k,v])=>`Challenge ${Number(k)+1}: ${v}`),c.finalDiscussion]),...s.keys.map((k,i)=>`KEY ${i+1}: ${k.discussion}`),'ROOTS',s.rootDiscussion,'GROWTH',...s.growth.map(g=>`${g.kind}: ${g.text}`),'REFLECTIONS',...Object.entries(s.reflections).map(([k,v])=>`${k}: ${v}`)].join('\n\n');
  const url=URL.createObjectURL(new Blob([notes],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='rainy-mountain-field-notes.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
};
$('#adventure').addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button||button.disabled)return;
 if(button.dataset.action){ACTIONS[button.dataset.action]?.();return;}
 if(button.dataset.phrase!==undefined){state().selected=Number(button.dataset.phrase);feedback=`Find the landscape region for “${LANDSCAPE[state().selected].phrase}”.`;render();return;}
 if(button.dataset.hotspot!==undefined){
  const s=state(),i=Number(button.dataset.hotspot);if(s.selected===null){response('Select an expression first, then click its landscape region.');return;}
  if(s.selected!==i){response('Look again at the visual feature and P1. Try another region.');tone(false);return;}
  if(!s.matched.includes(i))s.matched.push(i);s.selected=null;response(`Matched: ${LANDSCAPE[i].phrase}. ${LANDSCAPE[i].meaning}`,true,true);return;
 }
 if(button.dataset.checkpoint!==undefined){const i=Number(button.dataset.checkpoint);if(!checkpointAccessible(i))return;currentStage=1;checkpoint=i;feedback='';render();focusMain();return;}
 if(button.dataset.keyTab!==undefined){activeKey=Number(button.dataset.keyTab);feedback='';render();}
});
$('#adventure').addEventListener('input',event=>{
 const el=event.target,s=state();
 if(el.dataset.group){
  const field=el.dataset.field;
  switch(el.dataset.group){
   case 'landscape':s.landscape[field]=el.value;break;
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
 if(el.dataset.keyField!==undefined)s.keys[activeKey].values[Number(el.dataset.keyField)]=el.value;
 if(el.hasAttribute('data-key-name'))s.keys[activeKey].guess=el.value;
 if(el.id==='growth-kind')s.growthKind=el.value;
 if(el.dataset.answer!==undefined){
  const c=s.checkpoints[checkpoint],q=CONTENT.checkpoints[checkpoint].challenges[c.step],i=Number(el.dataset.answer);
  let answers=c.answers[c.step]||[];answers=q.type==='single'?[i]:el.checked?[...new Set([...answers,i])]:answers.filter(v=>v!==i);c.answers[c.step]=answers;
 }
});
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>goStage(Number(button.dataset.stage))));
$('#home').addEventListener('click',()=>{currentStage=-1;checkpoint=null;feedback='';render();focusMain();});
$('#map-return').addEventListener('click',routeToMap);
$('#previous').addEventListener('click',()=>goStage(currentStage-1));
$('#next').addEventListener('click',()=>goStage(currentStage+1));
$('#teacher').addEventListener('change',event=>{
 teacher=event.target.checked;checkpoint=null;activeKey=0;feedback='';if(currentStage>=0&&!unlockedStage(currentStage))currentStage=0;render();focusMain();notify(teacher?'Teacher rehearsal enabled. Student progress is preserved separately.':'Returned to the student journey.');
});
$('#sound').addEventListener('click',()=>{soundEnabled=!soundEnabled;$('#sound').setAttribute('aria-pressed',String(soundEnabled));$('#sound').textContent=`Sound: ${soundEnabled?'on':'off'}`;if(soundEnabled)tone();});
$('#fullscreen').addEventListener('click',async()=>{
 try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else notify('Fullscreen is unavailable in this browser. Use the browser’s presentation shortcut.');}
 catch{notify('The browser declined fullscreen. The adventure remains available in this window.');}
});
document.addEventListener('fullscreenchange',()=>{$('#fullscreen').textContent=document.fullscreenElement?'Exit fullscreen':'Fullscreen';});
$('#restart').addEventListener('click',()=>$('#restart-dialog').showModal());
$('#cancel-restart').addEventListener('click',()=>$('#restart-dialog').close());
$('#confirm-restart').addEventListener('click',()=>{if(teacher)teacherState=freshState();else studentState=freshState();currentStage=0;checkpoint=null;activeKey=0;feedback='';animateGate=false;$('#restart-dialog').close();render();focusMain();notify('Current journey restarted.');});
render();
