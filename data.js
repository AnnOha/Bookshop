window.bookInsightsByCategory = {
    "Contemporary Romance": {
        label: "Tropes & themes",
        tags: ["Opposites attract", "Slow-burn romance", "Second chances"],
        notes: [
            "A warm, character-led story with an easy balance of heart and humor.",
            "The relationships bring plenty of tension before the story reaches its softer moments."
        ]
    },
    Fantasy: {
        label: "Tropes & themes",
        tags: ["Hidden power", "Magical worlds", "High-stakes quests"],
        notes: [
            "A richly imagined setting gives the adventure room to unfold.",
            "The best moments pair a sense of wonder with personal choices that carry real weight."
        ]
    },
    "Science Fiction": {
        label: "Tropes & themes",
        tags: ["Big ideas", "Uncharted futures", "Humanity and technology"],
        notes: [
            "A thought-provoking journey that uses its speculative ideas to explore human questions.",
            "The world-building and central mystery make this a satisfying pick for curious readers."
        ]
    },
    Science: {
        label: "Themes",
        tags: ["Big questions", "Discovery", "Our place in the universe"],
        notes: [
            "An inviting introduction to ideas that can change how you see the world.",
            "Clear explanations make the subject approachable without losing its sense of wonder."
        ]
    },
    "Mystery/Thriller": {
        label: "Tropes & themes",
        tags: ["Unreliable clues", "Secrets and lies", "A twisty mystery"],
        notes: [
            "A brisk, suspenseful read that keeps the questions coming.",
            "Small clues and shifting suspicions make it fun to guess what happens next."
        ]
    },
    "Historical Fiction": {
        label: "Tropes & themes",
        tags: ["Life in another era", "Resilience", "Lives shaped by history"],
        notes: [
            "A vivid historical setting gives the characters' choices extra resonance.",
            "Personal stories make the larger events feel immediate and human."
        ]
    },
    "Self-Help": {
        label: "Themes",
        tags: ["Personal growth", "Small steps", "Building better habits"],
        notes: [
            "Practical ideas make this an easy book to return to and revisit.",
            "A thoughtful reminder that meaningful change can start with manageable steps."
        ]
    },
    "Young Adult": {
        label: "Tropes & themes",
        tags: ["Finding your voice", "Coming of age", "Friendship and courage"],
        notes: [
            "An engaging coming-of-age story with a memorable central voice.",
            "The friendships and challenges give the adventure plenty of heart."
        ]
    },
    Horror: {
        label: "Tropes & themes",
        tags: ["Gothic atmosphere", "Uncanny mysteries", "Fear close to home"],
        notes: [
            "A chilling atmosphere does as much work as the scares themselves.",
            "Best enjoyed when you want an unsettling story to linger after the last page."
        ]
    },
    "Literary Fiction": {
        label: "Tropes & themes",
        tags: ["Identity", "Life-changing choices", "Quiet revelations"],
        notes: [
            "A reflective story that leaves room to think about its characters and choices.",
            "Subtle details and emotional turns reward a slower, more attentive read."
        ]
    }
};

window.books = [
    // Contemporary Romance - 5 books
    {
        id: 1,
        title: "The Hating Game",
        author: "Sally Thorne",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "Two executive assistants clash in the workplace, but their rivalry masks a deeper attraction.",
        category: "Contemporary Romance"
    },
    {
        id: 2,
        title: "Beach Read",
        author: "Emily Henry",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1543002588-d83cea6bfbda?w=300&h=400&fit=crop",
        description: "Two writers with opposite genres challenge each other to write in the other's style.",
        category: "Contemporary Romance"
    },
    {
        id: 3, 
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "Best friends take annual vacations together, navigating friendship and romance.",
        category: "Contemporary Romance"
    },
    {
        id: 4,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "A woman confronts her abusive relationship through the lens of her parents' marriage.",
        category: "Contemporary Romance"
    },
    {
        id: 5,
        title: "The Unhoneymooners",
        author: "Christina Lauren",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "Two enemies are forced to pretend to be newlyweds on a resort trip.",
        category: "Contemporary Romance"
    },

    // Fantasy - 5 books
    {
        id: 6,
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "A human girl is taken to a magical faerie realm and discovers her true power.",
        category: "Fantasy"
    },
    {
        id: 7,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        price: 19.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A legendary figure recounts his origins and rise to fame in a magical world.",
        category: "Fantasy"
    },
    {
        id: 8,
        title: "Six of Crows",
        author: "Leigh Bardugo",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1543002588-d83cea6bfbda?w=300&h=400&fit=crop",
        description: "A heist crew of misfits plans an impossible heist in a fantasy city.",
        category: "Fantasy"
    },
    {
        id: 9,
        title: "The Poppy War",
        author: "R.F. Kuang",
        price: 19.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "An orphan girl discovers shamanic powers and changes the course of a war.",
        category: "Fantasy"
    },
    {
        id: 10,
        title: "Ninth House",
        author: "Leigh Bardugo",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "A girl sees ghosts and is recruited into an exclusive secret society at Yale.",
        category: "Fantasy"
    },

    // Science Fiction - 5 books
    {
        id: 11,
        title: "The Expanse: Leviathan Wakes",
        author: "James S.A. Corey",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "A detective and ship captain uncover a vast conspiracy in space.",
        category: "Science Fiction"
    },
    {
        id: 12,
        title: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A young man becomes central to the fate of a desert planet and its people.",
        category: "Science Fiction"
    },
    {
        id: 13,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 19.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "An astronaut must save Earth by solving an impossible scientific mystery.",
        category: "Science Fiction"
    },
    {
        id: 14,
        title: "Foundation",
        author: "Isaac Asimov",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A mathematical genius creates a plan to preserve civilization during its decline.",
        category: "Science Fiction"
    },
    {
        id: 15,
        title: "Neuromancer",
        author: "William Gibson",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1543002588-d83cea6bfbda?w=300&h=400&fit=crop",
        description: "A washed-up computer hacker is hired for one last job in a cyberpunk future.",
        category: "Science Fiction"
    },

    // Science (Non-fiction) - 5 books
    {
        id: 16,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 19.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "A brief history of humankind from the Stone Age to modern times.",
        category: "Science"
    },
    {
        id: 17,
        title: "Educated",
        author: "Tara Westover",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "A memoir about a woman who educates herself after leaving her survivalist family.",
        category: "Science"
    },
    {
        id: 18,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "An exploration of black holes, the Big Bang, and the nature of time itself.",
        category: "Science"
    },
    {
        id: 19,
        title: "Cosmos",
        author: "Carl Sagan",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "A journey through space and time exploring the universe and our place in it.",
        category: "Science"
    },
    {
        id: 20,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A revolutionary look at evolution from the perspective of genes.",
        category: "Science"
    },

    // Mystery/Thriller - 5 books
    {
        id: 21,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "A therapist becomes obsessed with uncovering why a woman shot her husband and stopped speaking.",
        category: "Mystery/Thriller"
    },
    {
        id: 22,
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "A commuter witnesses something shocking and becomes entangled in a murder investigation.",
        category: "Mystery/Thriller"
    },
    {
        id: 23,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "On her anniversary, a wife disappears, and her husband becomes the prime suspect.",
        category: "Mystery/Thriller"
    },
    {
        id: 24,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "Retired detectives in a nursing home take on a real murder case.",
        category: "Mystery/Thriller"
    },
    {
        id: 25,
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "A high school student investigates a closed murder case for her school project.",
        category: "Mystery/Thriller"
    },

    // Historical Fiction - 5 books
    {
        id: 26,
        title: "The Book Thief",
        author: "Markus Zusak",
        price: 14.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A girl steals books in Nazi Germany and shares them with a Jewish refugee hiding in her basement.",
        category: "Historical Fiction"
    },
    {
        id: 27,
        title: "All the Light We Cannot See",
        author: "Anthony Doerr",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "Two teenagers' paths collide during World War II, one French and one German.",
        category: "Historical Fiction"
    },
    {
        id: 28,
        title: "The Nightingale",
        author: "Kristin Hannah",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "Two sisters resist Nazi occupation in occupied France during WWII.",
        category: "Historical Fiction"
    },
    {
        id: 29,
        title: "Outlander",
        author: "Diana Gabaldon",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A woman travels back in time from 1945 to 1743 Scotland and falls in love.",
        category: "Historical Fiction"
    },
    {
        id: 30,
        title: "The Pillars of the Earth",
        author: "Ken Follett",
        price: 19.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "An epic tale of ambition, love, and betrayal set in medieval England.",
        category: "Historical Fiction"
    },

    // Self-Help/Personal Development - 5 books
    {
        id: 31,
        title: "Atomic Habits",
        author: "James Clear",
        price: 14.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "Transform your life with tiny changes and build powerful habits.",
        category: "Self-Help"
    },
    {
        id: 32,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "Principles for personal and interpersonal effectiveness.",
        category: "Self-Help"
    },
    {
        id: 33,
        title: "Mindset",
        author: "Carol S. Dweck",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "How to develop a growth mindset to achieve your goals.",
        category: "Self-Help"
    },
    {
        id: 34,
        title: "Deep Work",
        author: "Cal Newport",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "Rules for focused success in a distracted world.",
        category: "Self-Help"
    },
    {
        id: 35,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A guide to spiritual enlightenment and living in the present moment.",
        category: "Self-Help"
    },

    // Young Adult - 5 books
    {
        id: 36,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "A girl volunteers to compete in a deadly televised competition.",
        category: "Young Adult"
    },
    {
        id: 37,
        title: "The Fault in Our Stars",
        author: "John Green",
        price: 14.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "Two cancer patients fall in love while attending a support group.",
        category: "Young Adult"
    },
    {
        id: 38,
        title: "Percy Jackson and the Olympians",
        author: "Rick Riordan",
        price: 14.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A teenage boy discovers he is the son of a Greek god.",
        category: "Young Adult"
    },
    {
        id: 39,
        title: "To Kill a Mockingbird (Young Edition)",
        author: "Harper Lee",
        price: 13.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "A classic coming-of-age story about justice and racism in the American South.",
        category: "Young Adult"
    },
    {
        id: 40,
        title: "The 5th Wave",
        author: "Rick Yancey",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "After an alien invasion, a girl must survive and find her brother.",
        category: "Young Adult"
    },

    // Horror - 5 books
    {
        id: 41,
        title: "The Shining",
        author: "Stephen King",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A family isolated in a haunted hotel descends into madness and terror.",
        category: "Horror"
    },
    {
        id: 42,
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "A woman investigates the dark secrets of her husband's family estate.",
        category: "Horror"
    },
    {
        id: 43,
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        price: 15.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "Four strangers are invited to study the supernatural phenomena in a haunted mansion.",
        category: "Horror"
    },
    {
        id: 44,
        title: "The Woman in Black",
        author: "Susan Hill",
        price: 14.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A young solicitor encounters a vengeful ghost in an English mansion.",
        category: "Horror"
    },
    {
        id: 45,
        title: "Pet Sematary",
        author: "Stephen King",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1507842667295-b88b70d009a8?w=300&h=400&fit=crop",
        description: "A family discovers an ancient burial ground that brings the dead back to life.",
        category: "Horror"
    },

    // Literary Fiction - 5 books
    {
        id: 46,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3af3abd8?w=300&h=400&fit=crop",
        description: "A woman explores alternate versions of her life between life and death.",
        category: "Literary Fiction"
    },
    {
        id: 47,
        title: "Circe",
        author: "Madeline Miller",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=400&fit=crop",
        description: "A retelling of the Greek goddess Circe's life and isolation.",
        category: "Literary Fiction"
    },
    {
        id: 48,
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        price: 18.99,
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
        description: "An AI companion observes humanity and questions the nature of consciousness.",
        category: "Literary Fiction"
    },
    {
        id: 49,
        title: "The Vanishing Half",
        author: "Brit Bennett",
        price: 17.99,
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=300&h=400&fit=crop",
        description: "Twin sisters choose opposite lives and confront the consequences.",
        category: "Literary Fiction"
    },
    {
        id: 50,
        title: "Piranesi",
        author: "Susanna Clarke",
        price: 16.99,
        cover: "https://images.unsplash.com/photo-1507842672343-583f20270319?w=300&h=400&fit=crop",
        description: "A mysterious man discovers the true nature of his reality in a vast house.",
        category: "Literary Fiction"
    }
];