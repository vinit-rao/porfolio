// projects.js - All your projects in one easy-to-edit file

const projects = [
    {
        category: 'video',
        title: 'Refuse Music Video',
        description: 'Fast heavy edited music video for Refuse featuring their new release countdown! Recorded on Sony FX30, 11-18mm F2.8 Lens (Slog3).',
        link: 'https://www.youtube.com/watch?v=WiyHN2I-Vj8&list=RDWiyHN2I-Vj8&start_radio=1',
        linkType: 'youtube',
        image: 'images/project_41-2.jpg',
        images: [
            '/images/project_41-1.jpg', 
            '/images/project_41-2.jpg'
        ],
        badges: ['| After Effects | Work |'],
        featured: true
    },
    {
        category: 'code',
        title: 'MC Server Bot',
        description: 'Unity made 3D game where the player trys to catch falling scoops and complete orders.',
        link: 'https://github.com/vinit-rao/ServerManagerMC',
        linkType: 'github',
        image: '/images/project_40-1.jpg', 
        images: [
            '/images/project_40-1.jpg', 
            '/images/project_40-2.jpg'
        ],
        badges: ['| Python | Java | Personal |']
    },
    {
        category: 'hardware',
        title: 'Arduino Game Controller',
        description: 'Custom Arduino hardware controller integrated with a 3D environment.',
        image: '/images/project_25-4.jpg', 
        badges: ['| C++ | Arduino | School |'],
        objective: "Engineer a custom physical controller bridging analog inputs to digital game states. The goal was to replace traditional keyboard controls with a tactile hardware system.",
        process: "I wired an Arduino Uno with an ultrasonic sensor, an RGB LED, and an analog joystick. The hardest part of the build was writing the serial communication script to parse the incoming byte stream.",
        friction: "Encountered severe logic desyncs during the initial stress tests. Resolved by engineering a custom buffer-clear script that gracefully throttles physical inputs."
    },
    {
        category: 'code',
        title: 'Bennys Frozen Adventure',
        description: 'Unity made 3D game where the player trys to catch falling scoops and complete orders.',
        internalLink: '/bennys-adventure',
        video: 'videos/project_25.mp4',
        image: 'images/project_25-5.jpg',
        badges: ['| C# | Unity | After Effects | School |'],
        featured: true
    },
    {
        category: 'video',
        title: 'WhyDNA Trial Edit',
        description: 'Trial edit for Youtuber "WhyDNA" using provided footage and assets.',
        link: 'https://www.youtube.com/watch?v=r1J8bAHEH4U',
        linkType: 'youtube',
        video: 'videos/project_34.mp4',
        image: 'images/project_34.jpg',
        badges: ['| Premiere Pro | After Effects | Personal |']
    },
    {
        category: 'code',
        title: 'QueueUp - Lobby System Application',
        description: 'Frontend & Backend Django Lobby Application.',
        link: 'https://github.com/vinit-rao/queueup-django',
        linkType: 'github',
        video: 'videos/project_26.mp4',
        image: 'images/project_26.jpg',
        badges: ['| Python | Django | School |']
    },
    {
        category: 'photos',
        title: 'Pomelo Soda 02/15',
        description: 'Band performace showcasing their new originals and covers at a bar.',
        iframe: "https://www.smugmug.com/frame/slideshow?key=S7zpk4&speed=3&transition=fade&autoStart=1&captions=0&navigation=0&playButton=0&randomize=1&transitionSpeed=2",
        link: 'https://www.smugmug.com/gallery/n-hXFjj8',
        linkType: 'photo',
        image: 'images/project_36.jpg',
        badges: ['| Lightroom | Personal |'],
        featured: true
    },
    {
        category: 'graphics',
        title: 'Sachin Rao Intro',
        description: 'Advertisment to promote Sachin Rao photography business. Made using After Effects with custom assets.',
        link: 'https://www.youtube.com/watch?v=dOJTkZ3NaNs',
        linkType: 'youtube',
        video: 'videos/project_24.mp4',
        image: 'images/project_24.jpg',
        badges: ['| After Effects | Work |']
    },
    {
        category: 'photos',
        title: 'Iron Lung Movie Night',
        description: 'Fun movie night with friends. Photos captured using Sony A7III 28mm F2.0',
        iframe: "https://www.smugmug.com/frame/slideshow?key=g2SCzt&speed=3&transition=fade&autoStart=1&captions=0&navigation=0&playButton=0&randomize=1&transitionSpeed=2",
        link: 'https://www.smugmug.com/gallery/n-2ZbFMs',
        linkType: 'photo',
        image: 'images/project_37.jpg',
        badges: ['| Lightroom | Personal |']
    },
    {
        category: 'code',
        title: 'Acorn Catcher Game',
        description: 'Game made in Unity where the player catches falling acorns while avoiding spikey acorns.',
        link: 'https://www.youtube.com/watch?v=p6OpZmpUm80',
        linkType: 'youtube',
        video: 'videos/project_22.mp4',
        image: 'images/project_22.jpg',
        badges: ['| C# | Unity | Blender | School |'],
    },
    {
        category: 'graphics',
        title: 'Club Promotional Reel',
        description: 'Fun reel mixed with Minecraft assets!',
        link: 'https://www.instagram.com/reel/DT_e7HMAaOB/?igsh=MWN3ZnB3NHRuMnEwOQ==',
        video: 'videos/project_21.mp4',
        image: 'images/project_21.jpg',
        badges: ['| After Effects | Club |']
    },
    {
        category: 'graphics',
        title: 'Retro Adventure Trailer',
        description: 'After effects animated trailer for a friend!',
        link: 'https://www.youtube.com/watch?v=9wGekC8UZN4',
        linkType: 'youtube',
        video: 'videos/project_20.mp4',
        image: 'images/project_20.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'video',
        title: 'Wedding Puja Highlight',
        description: 'Wedding puja highlight with simple editing techniques.',
        link: 'https://www.youtube.com/watch?v=-lmDa3Hinbw',
        linkType: 'youtube',
        video: 'videos/project_19.mp4',
        image: 'images/project_19.jpg',
        badges: ['| Premiere Pro | Work |']
    },
    {
        category: 'video',
        title: 'Wedding Reception Highlight',
        description: 'Wedding reception highlight with various film techniques.',
        link: 'https://www.youtube.com/watch?v=oekmYU2RsI8',
        linkType: 'youtube',
        video: 'videos/project_18.mp4',
        image: 'images/project_18.jpg',
        badges: ['| Premiere Pro | Work |']
    },
    {
        category: 'graphics',
        title: 'Forest Animation',
        description: 'Blender made animation to test out simple analog horror.',
        link: 'https://www.youtube.com/watch?v=lrCLhPRmp-g',
        linkType: 'youtube',
        video: 'videos/project_17.mp4',
        image: 'images/project_17.jpg',
        badges: ['| Blender | Personal |'],
    },
    {
        category: 'graphics',
        title: 'Beach Diorama',
        description: 'Blender animated water cool animation!',
        link: 'https://www.youtube.com/watch?v=Co7ycAHEKb4',
        linkType: 'youtube',
        video: 'videos/project_23.mp4',
        image: 'images/project_23.jpg',
        badges: ['| Blender | Personal |']
    },
    {
        category: 'graphics',
        title: 'Pinterest Animation',
        description: 'Created motion graphics from a static graphic found on Pinterest.',
        link: 'https://www.youtube.com/shorts/Nse5BKR48dE',
        linkType: 'youtube',
        video: 'videos/project_16.mp4',
        image: 'images/project_16.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'Mad Typography Edit',
        description: 'Typographic modern style animation with various effects and animation techniques.',
        link: 'https://www.youtube.com/shorts/3JITY32alVM',
        linkType: 'youtube',
        video: 'videos/project_15.mp4',
        image: 'images/project_15.jpg',
        badges: ['| After Effects | Personal |'],
        featured: true
    },
    {
        category: 'graphics',
        title: 'AE Exercises #1',
        description: 'Practicing going through tutorials learning texturing and animating fake 3D shapes.',
        link: 'https://www.youtube.com/shorts/5S7Uq2qFkgY',
        linkType: 'youtube',
        video: 'videos/project_14.mp4',
        image: 'images/project_14.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'Soupcan Test',
        description: 'Animation practice with Soupcan plugin in AE.',
        link: 'https://www.youtube.com/shorts/mpm4THyTKfw',
        linkType: 'youtube',
        video: 'videos/project_29.mp4',
        image: 'images/project_29.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'photos',
        title: 'Late Night Hangout',
        description: 'Chill hangout with friends. Photos captured using Sony A7III 28-75mm F2.8',
        iframe: "https://www.smugmug.com/frame/slideshow?key=hxvKgw&speed=3&transition=fade&autoStart=1&captions=0&navigation=0&playButton=0&randomize=1&transitionSpeed=2",
        link: 'https://www.smugmug.com/gallery/n-9J8VRh',
        linkType: 'photo',
        image: 'images/project_38.jpg',
        badges: ['| Lightroom | Personal |']
    },
    {
        category: 'graphics',
        title: 'Bubblz Animation',
        description: 'More After Effects practice with a fun bubbly animation.',
        link: 'https://www.youtube.com/watch?v=8WFianh_Bko',
        linkType: 'youtube',
        video: 'videos/project_30.mp4',
        image: 'images/project_30.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'CU Hacking Animation',
        description: 'Short intro animation revealing new CU Hacking colors and branding.',
        link: 'https://www.youtube.com/watch?v=IrP4P2sCuQY',
        linkType: 'youtube',
        video: 'videos/project_13.mp4',
        image: 'images/project_13.jpg',
        badges: ['| After Effects | Club |']
    },
    {
        category: 'graphics',
        title: 'Heartless Edit',
        description: 'Fun edit of the song Heartless by The Weeknd with various effects and techniques.',
        link: 'https://www.youtube.com/shorts/0y-5EnI4KO8',
        linkType: 'youtube',
        video: 'videos/project_32.mp4',
        image: 'images/project_32.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'video',
        title: 'Lighting Showcase',
        description: 'Cinematic lighting study featuring three professional techniques: three-point, high-contrast, and back lighting.',
        link: 'https://www.youtube.com/watch?v=3i4h8ERBTiQ',
        linkType: 'youtube',
        video: 'videos/project_11.mp4',
        image: 'images/project_11.jpg',
        badges: ['| Premiere Pro | School |'],
    },
    {
        category: 'photos',
        title: 'Stills Video Project',
        description: 'Curated photography sequence exploring composition, pacing, and visual storytelling.',
        link: 'https://www.youtube.com/watch?v=DOs879L4MvE',
        linkType: 'youtube',
        video: 'videos/project_8.mp4',
        image: 'images/project_8.jpg',
        badges: ['| Premiere Pro | School |']
    },
    {
        category: 'code',
        title: 'Cheese Touch Game',
        description: 'Platformer game built with Godot engine.',
        link: 'https://github.com/vinit-rao/2dplatformer-godot',
        linkType: 'github',
        video: 'videos/project_33.mp4',
        image: 'images/project_33.jpg',
        badges: ['| C++ | Godot | Personal |']
    },
    {
        category: 'graphics',
        title: 'Wendy\'s Commercial',
        description: '15-second animated commercial with dynamic keyframes and motion graphics.',
        link: 'https://www.youtube.com/watch?v=VhibQHSWPOE',
        linkType: 'youtube',
        video: 'videos/project_7.mp4',
        image: 'images/project_7.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'Introducing RAVO',
        description: 'Sleek motion graphics opener for videography brand.',
        link: 'https://www.youtube.com/watch?v=4LNe7tF2YQ8',
        linkType: 'youtube',
        video: 'videos/project_1.mp4',
        image: 'images/project_1.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'video',
        title: 'NiuNiuBox Video',
        description: 'Promotional video for NiuNiuBox company.',
        link: 'https://www.youtube.com/watch?v=8Q6uj5gckwI',
        linkType: 'youtube',
        video: 'videos/project_35.mp4',
        image: 'images/project_35.jpg',
        badges: ['| Premiere Pro | After Effects | Work |']
    },
    {
        category: 'graphics',
        title: 'Text Morph',
        description: 'Experimental typography using graph editors for smooth morphing transitions.',
        link: 'https://www.youtube.com/watch?v=ML7khUEzdOY',
        linkType: 'youtube',
        video: 'videos/project_2.mp4',
        image: 'images/project_2.jpg',
        badges: ['| After Effects | Personal |']
    },
    {
        category: 'graphics',
        title: 'The Button',
        description: 'Sprite-based character animation with custom artwork and sound design.',
        link: 'https://www.youtube.com/watch?v=7xYjZKmTmC8',
        linkType: 'youtube',
        video: 'videos/project_6.mp4',
        image: 'images/project_6.jpg',
        badges: ['| After Effects | School |']
    },
    {
        category: 'video',
        title: 'Global Nurse Initiative',
        description: 'Professional event coverage with interviews, edited in Premiere Pro with After Effects compositions.',
        link: 'https://www.youtube.com/watch?v=RRANPGpEcV0',
        linkType: 'youtube',
        video: 'videos/project_10.mp4',
        image: 'images/project_10.jpg',
        badges: ['| Premiere Pro | After Effects | Work |']
    },
    {
        category: 'video',
        title: 'Music Video',
        description: 'Artistic slow-motion edit emphasizing movement and emotion.',
        link: 'https://www.youtube.com/watch?v=mRWqT6rZetQ',
        linkType: 'youtube',
        video: 'videos/project_5.mp4',
        image: 'images/project_5.jpg',
        badges: ['| Premiere Pro | After Effects | Personal |']
    },
    {
        category: 'code',
        title: 'Go Fish Game',
        description: 'Object-oriented Java card game with custom UI and strategic AI gameplay.',
        link: 'https://www.youtube.com/watch?v=6Rl1UXpWMZY',
        linkType: 'youtube',
        video: 'videos/project_9.mp4',
        image: 'images/project_9.jpg',
        badges: ['| Java | NetBeans | School |']
    },
    {
        category: 'code',
        title: 'Pyth-Art Art Application',
        description: 'Drawing application made with Python.',
        link: '#',
        linkType: 'github',
        video: 'videos/project_27.mp4',
        image: 'images/project_27.jpg',
        badges: ['| Python | School |']
    },
    {
        category: 'hardware',
        title: 'TEJ20 Custom Robot',
        description: 'A fully custom-built autonomous rover featuring a scratch-designed PCB, laser-cut acrylic chassis, and 3D-printed mechanics.',
        image: '/images/project_39-2.jpg', 
        images: [
            '/images/project_39-1.jpg', 
            '/images/project_39-2.jpg'
        ],
        badges: ['| AutoCAD | Inventor | Custom PCB | 3D Printing | C++ |'],
        featured: true,
        objective: "Engineer a fully autonomous, randomized-movement rover entirely from scratch. The goal was to bypass off-the-shelf kits by manually designing every element—from the raw electronics to the physical chassis.",
        process: "The structural body and wheels were drafted in AutoCAD and laser-cut from red acrylic. I used Autodesk Inventor to model custom 3D-printed motor mounts and wheel stoppers. Electronically, I designed and etched a custom PCB to route a 9V power supply to a dual DC motor setup, writing the C++ micro-controller logic to execute randomized movement patterns.",
        friction: "Achieving tight mechanical tolerances was a major hurdle. I had to manually measure, cut, and drill the metal standoffs to ensure the structural layers were perfectly parallel so the custom laser-cut wheels wouldn't bind or rub against the acrylic chassis during rotation."
    },
    {
        category: 'video',
        title: 'Environmental Impact Video',
        description: 'Informative video on environmental issues with motion graphics and data visualization.',
        link: 'https://www.youtube.com/watch?v=JGQL1EyGY1w',
        linkType: 'youtube',
        video: 'videos/project_31.mp4',
        image: 'images/project_31.jpg',
        badges: ['| Premiere Pro | School |']
    },
    {
        category: 'graphics',
        title: 'Walk Cycle',
        description: '3D character animation practice in Blender with rigging and walk cycle.',
        link: 'https://www.youtube.com/watch?v=_4oRm1HuIbo',
        linkType: 'youtube',
        video: 'videos/project_3.mp4',
        image: 'images/project_3.jpg',
        badges: ['| Blender | Personal |']
    },
    {
        category: 'video',
        title: 'Mannequin Challenge',
        description: 'Fun mannequin challenge video with creative camera movements and editing techniques.',
        link: 'https://www.youtube.com/watch?v=ocfZhbex0U0',
        linkType: 'youtube',
        video: 'videos/project_28.mp4',
        image: 'images/project_28.jpg',
        badges: ['| Final Cut | Personal |']
    }
];

export default projects;