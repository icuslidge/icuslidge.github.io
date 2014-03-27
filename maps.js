var maps = {
  koth_coalplant: { name: 'koth_coalplant'
  , imageDirectory: 'koth_coalplant_b7'
  , videos: [
      'https://www.youtube.com/watch?v=pQZtpPfZVUs'
    , 'https://www.youtube.com/watch?v=Qa_Tes65Eu8'
    ]
  , downloadLink: 'https://dl.dropboxusercontent.com/u/3492731/Ashville/koth_coalplant_b8.bsp'
  , isInRotation: true
  , leaguesPlayedIn: 'ESEA, CEVO, UGC, OZFL'
  , description: [
      'koth_coalplant has a somewhat strange history. The first version of the map was called '
        + 'koth_ashville, and was created by Kevin "Mackey" Mackey, a high level competitive '
        + 'TF2 player. It saw some play in ESEA, but was ultimately voted out. Though it had a '
        + 'very solid layout and some interesting gameplay choices, the visual design was quite '
        + 'limited.'

    , 'Towards the end of my work on standin and process, Mackey approached me about creating a '
        + '5cp version of koth_ashville. I started work on it in 2011, and the final version '
        + '(cp_ashville_b6) was played in ESEA Season 12. I really liked the visual style of the '
        + 'map, but, unfortunately competitive players didn\'t enjoy playing on it. Due to some '
        + 'oddities concerning the size of the layout, it was voted out of ESEA. I considered '
        + 'reworking it in an attempt to solve some of the layout problems, but ultimately I '
        + 'scrapped those ideas. The last point didn\'t seem fixable, and the second didn\'t '
        + 'have nearly enough appeal to really warrant a remake.'

    , 'However, given all the work that went into detailing it, I didn\'t want give it up '
        + 'entirely, and so I set about remaking it into a koth map (back to its roots, so to '
        + 'speak), which involved quite a few changes to the original layout. This included '
        + 'adjusting the size of the warehouse and catwalk area at middle, as well as shrinking '
        + 'the trainyard area at the second point, and transforming the main entrance to the '
        + 'last point into a fully functioning respawn room.'

    , 'Coalplant\'s visual design is something I\'ve always really enjoyed. Though I\'m well '
        + 'known in competitive circles for cp_process\' bright alpine visuals, coalplant and '
        + 'standin\'s darker, layered visual style are much more interesting to me. However, '
        + 'this does create some issues for competitive players, who value function highly, and '
        + 'see the darker visuals of coalplant as restrictive, making it hard to identify enemy '
        + 'players. I think that some of their concerns are exaggerated (I\'ve never had trouble '
        + 'finding enemy players while playing coalplant) but it is definitely something to keep '
        + 'in mind when designining for such a specific audience.'

    , 'Koth_coalplant has been played in ESEA, saw some play in OZfortress, and is currently '
        + 'played in UGC. It\'s still in development, and I\'m tweaking it to fit in with some '
        + 'competitive player feedback, but could be completed at any time.'
    ]
  }
, koth_airfield: { name: 'koth_airfield'
  , imageDirectory: 'koth_airfield_b7'
  , videos: [
    ]
  , downloadLink: 'https://dl.dropboxusercontent.com/u/3492731/airfield/koth_airfield_b7.bsp'
  , isInRotation: true
  , leaguesPlayedIn: 'CEVO, UGC'
  , description: [
      'koth_airfield was created after Valve purchased standin and process. With both of those maps '
        + 'now out of my hands, I had spare time and no other map projects that needed immediate '
        + 'attention, so I set out to make a koth map. As I\'d never made a desert themed map before, '
        + 'I decided to emulate some of the rocky hills and concrete structures from pl_badwater, '
        + 'while adding some 45 degree angles to create interesting sightlines. It was mostly '
        + 'conceived as a distraction so I could try out a new visual environment, but the end '
        + 'results turned out much better than I expected.'

    , 'The original design of the map was much more concrete and ramps, but very quickly I realized '
        + 'it would result in quite a few deadzones that players could fall into and get destroyed. '
        + 'It also had quite a few flank options underneath, but very few direct ways to get '
        + 'immediately back onto the point. Looking to pl_badwater, I decided to push some '
        + 'displacements quite a bit further, creating very natural surfaces that quite easily '
        + 'transition from lower to higher ground, while also using badwater mesh boulders to block '
        + 'sightlines and offer scouts and soldiers interesting perches to get around the map.'

    , 'The inclusion of the airfield was mostly down to some feedback from Valve mappers. They felt '
        + 'that a weakness of my design was that my levels were a bit too abstract, with very few '
        + 'visual indicators to explain what the locations were supposed to be. The area behind the '
        + 'spawn in airfield was large and open, offering me a perfect opportunity to create a fairly '
        + 'sprawling airport. The only issue was actually finding the right art assets to sell it.'

    , 'A friend on Steam, Ruskeydoo (http://steamcommunity.com/profiles/76561197993590139/), had '
        + 'expressed interest in working on some 3d models for some maps of mine. Our scheduling '
        + 'didn\'t quite work out at the time, but when I started fully detailing airfield, I '
        + 'contacted him again, and he got to work. The two airplane models were created by him, '
        + 'with some reference images I found to give him a direction, attempting to maintain the '
        + 'realism of the TF2 60\'s, compared to other more extreme airplane models that I had seen. '
        + 'I had to make some adjustments to the size of the airport to accommodate the cargo plane, '
        + 'and Ruskey had to adjust the size of the wings to fit in the given area.'

    , 'Though koth_airfield wasn\'t really designed with competitive play at the forefront of my '
        + 'mind (it was mostly playtested on public servers), it has been played in the inaugural '
        + 'season of UGC\'s 4v4 league, and was included in the preseason of CEVO\'s 6v6 league.'
    ]
  }
, cp_rooftop: { name: 'cp_rooftop'
  , imageDirectory: 'cp_rooftop_b6'
  , videos: [
    ]
  , downloadLink: 'https://dl.dropboxusercontent.com/u/3492731/rooftop/cp_rooftop_b6.bsp'
  , isInRotation: false
  , leaguesPlayedIn: ''
  , description: [
      'cp_rooftop was created to serve two purposes. First, it gave me a chance to create a level '
        + 'based around a mashup of Mirror\'s Edge\'s clean cityscape and koth_king\'s dirtier '
        + 'urban take on TF2. And second, it allowed me to fix some of the layout flaws of '
        + 'cp_standin that became apparent after I finished developing it. It also gave me an '
        + 'opportunity to work a bit more in the realm of the 45 degree angle, forcing myself to '
        + 'think a bit more about how geometry comes together.'

      , 'The original idea for rooftop was a CTF map, where teams would push out across a series '
        + 'of rooftop structures to try and invade the opposing base and return, while also '
        + 'avoiding a hazardous trip to the ground below. However, given the relative lack of '
        + 'good CTF maps to draw from, I scrapped that idea, and instead returned to an earlier '
        + 'idea concerning the layout for cp_standin. For that version, the B point would be in an '
        + 'internal space, and then the A and C points would be located outside. This would help '
        + 'differentiate the three points, making sure players knew exactly where they needed to '
        + 'go in order to prevent the enemy team from winning, and also ensured that the three '
        + 'points were separate but still accessible.'

      , 'Rooftop has been an interesting map to develop. The playable space of the map came '
        + 'together quite quickly, and has had very few changes to the layout. Its balanced, and '
        + 'it works quite well in terms of players being able to transition between the various '
        + 'areas. The exterior area of the map, however, has present something of a problem. '
        + 'Though koth_king has been quite influential in terms of the basic idea of what the '
        + 'exterior should look like, it actually doesn\'t work very well to try and implement a '
        + 'koth_king skyline in cp_rooftop. A lot of that has to do with the size of rooftop, as '
        + 'well as the vantage point. Koth_king takes place at ground level, while rooftop is much '
        + 'higher. The art assets for koth_king are meant to be seen from below, and relatively up '
        + 'close, and the optimization of the map functions best when things around a corner '
        + 'aren\'t visible.'

      , 'Rooftop, on the other hand, is quite a bit further from the buildings and structures, '
        + 'meaning that smaller details aren\'t easily visible. Additionally, much more of the '
        + 'map is visible at once, so the more intricate the detailing the worse the performance. '
        + 'On top of that, the way that koth_king generates brushes runs up against the source '
        + 'engines brush limit, a problem that has been replicated in initial versions of '
        + 'cp_rooftop. I\'ve been examining Mirror\'s Edge again to get a better idea on what sort '
        + 'of assets would be needed to create cleaner structures, and better optimization as far '
        + 'as detailing. Quite a lot of the buildings in Mirror\'s Edge are composed of a few '
        + 'brushes with complementary textures to give the impression of windows, rather than a '
        + 'maze of props or individual brushes.'

      , 'Rooftop is still a work in progress, as I tinker with the visual style of the surroundings. '
        + 'The gameplay is where I want it to be, but some visual elements are sure to be reworked.'
    ]
  }
, cp_process: { name: 'cp_process'
  , imageDirectory: 'cp_process_b10'
  , videos: [
      'https://www.youtube.com/embed/q0t5zkrIiPc'
    , 'http://www.youtube.com/embed/zBVi0BYB21A#t=11s'
    , 'http://www.youtube.com/embed/4tpotTcEeH0#t=2s'
    ]
  , valveOfficial: true
  , isInRotation: true
  , leaguesPlayedIn: 'ESEA, CEVO, ETF2L, UGC, OZFL, OWL, AFL'
  , description: [
      'cp_process is a five control point push map. A team wins by capturing all five control '
        + 'points at once, which must be done linearly by capturing the neutral middle and then '
        + 'taking the enemy team\'s points. It features a bright sunny art style, drawing off '
        + 'cp_gorge and the alpine environment set.'

    , 'Process was conceived of as a response to another 5cp map. Cp_follower was designed as a '
        + 'mixture of two maps, badlands and granary. It had the middle point of badlands and the '
        + 'second and last points of granary, the basic idea being that if you mix the two maps '
        + 'together you\'ll end up with something equal or better than the primary source. '
        + 'However, as the competitive player Sigma was quick to point out, Follower featured the '
        + 'weakest combination of points from those two maps. As an alternative, he felt that '
        + 'combining the middle from granary, the second point from badlands and the last point '
        + 'from well would create a much more interesting and dynamic flow.'

    , 'Building process, I decided early on against completely mimicking the layout of any of the '
        + 'three points, instead aiming to create something with the "spirit" of all three, but '
        + 'with its own unique flavor. The middle has some of the cargo container combat from '
        + 'Granary\'s middle, but plays out quite differently with numerous areas to push and '
        + 'hold. Second has a much shorter spire than Badlands, but also features numerous ways to '
        + 'rotate around the spire and engage the enemy team. Last is the most different, a very '
        + 'minimal version of Well, but also offers numerous effective ways in to engage the enemy '
        + 'team.'

    , 'Process has been quite well received by many competitive players, and is highly likely to '
        + 'be a staple for seasons to come. It has been played in ESEA, starting in Season 11,  '
        + 'ETF2L starting with season 13, OZfortress League, and in numerous Highlander pick up games, '
        + 'as well as in UGC season 9. It also won second place in the Asymmetry/Symmetry contest '
        + 'from TF2maps.net.'

    , 'cp_process was purchased by Valve Software in July of 2013. It is now an official community '
        + 'map available with any download of Team Fortress 2.'
    ]
  }
, cp_standin: { name: 'cp_standin'
  , imageDirectory: 'cp_standin_rc1'
  , videos: [
      'http://www.youtube.com/embed/gElC-xIlDoo#t=11m22s'
    , 'http://www.youtube.com/embed/tsl4hwNwCb4'
    , 'http://www.youtube.com/embed/rzhGLS6QmS8'
    ]
  , valveOfficial: true
  , isInRotation: false
  , leaguesPlayedIn: 'ESEA, UGC, OZFL, AFL'
  , description: [
      'cp_standin is a three control point "domination" map. A team wins a round by capturing all '
        + 'three points at once, while preventing the enemy team from capturing points they have '
        + 'already secured. All three points start neutral and are equidistant from both teams\' '
        + 'spawns, with multiple exits allowing players to approach them from either side. The map '
        + 'is quite hectic, and involves a great deal of tactical engagement and strategy in order '
        + 'to properly coordinate players across the map.'

    , 'The map was originally conceived following a forum post regarding what competitive players '
        + 'wanted in a map. The pocket soldier TLR made a comment about the map cp_fallout '
        + '(THE PUNS!), to the affect that though the map was inherently asymmetrical and featured '
        + 'a variety of problems that made it unsuitable for competitive play, the game mode '
        + 'itself was quite interesting and if it could be adjusted, might make for a very fast '
        + 'paced competitive map.'

    , 'Standin addresses one of the primary problems of traditional 5cp maps. Though the layout of '
        + 'these maps is quite strong and works well within the framework of competitive play, the '
        + 'location of the choke points and the ability for teams to hold on either side of them '
        + 'often leads to teams stalemating at certain points, waiting for the other team to make '
        + 'a move. Because the chokes are built to block line of sight, players who try to '
        + 'approach a choke are punished, while players that hold back are kept safe. Further, '
        + 'because the only points which are active are generally located behind both teams, the '
        + 'objective of the map is locked out by the chokes as well. This is good in that it '
        + 'forces players to contend with the other team in order to progress, but bad in the '
        + 'sense that it can be difficult to break the stalemate and accomplish the map\'s '
        + 'objective in this scenario.'

    , 'With Standin\'s layout, holding a choke is still a successful strategy. However, one of the '
        + 'key features of the map is that a team always has some additional options available '
        + 'when it comes to objectives. A team holding B and A is likely to be defending B and '
        + 'waiting to push C to win the round. The enemy team can use this to their advantage, '
        + 'sneaking a scout behind the enemy team and starting to capture A. Teams can also start '
        + 'the match by splitting and capturing both A and C, leaving B for last, or push into A, '
        + 'and then to B. The amount of options available is significant and leads to players '
        + 'making many decisions on the fly about when to push a point, when to retreat, when to '
        + 'block a capture, or when to stack a point and hope to outrace the enemy team.'

    , 'Standin is certainly an anomaly among competitive maps. It allows a whole host of available '
        + 'options, plays very aggressively and often comes down to the wire. It can be quite '
        + 'stressful for a player in a competitive scenario, as it has very few precedents to draw '
        + 'upon, and some of the oddities of neutral control points and long cap times can lead to '
        + 'some very "innovative" ways to abuse capture times.'

    , 'In terms of its general reception, I think its fair to say that Standin is one of the most '
        + 'controversial maps in competitive TF2. Some of the best North American players value it '
        + 'for its blistering gameplay, incredible reliance upon tactics, and  its need for '
        + 'coordination and teamwork. Other players see it as an abomination, bending the gameplay '
        + 'of a 5cp map on its back and adding unnecessary complexity to a perfect formula.'

    , 'Standin was played in ESEA Season 10, UGC Highlander Summer Season 7, and the OZfortress '
        + 'League. It is unlikely to be played again in ESEA, but UGC admins seem fairly receptive '
        + 'to it, and it may see some additional play in Highlander (it was scheduled to be played '
        + 'in UGC season 9, but was replaced at the last minute).'

    , 'cp_standin was purchased by Valve Software in July of 2013. It is now an official community '
        + 'map available with any download of Team Fortress 2.'
    ]
  }
, cp_metalworks: { name: 'cp_metalworks'
  , imageDirectory: 'cp_metalworks_rc2'
  , videos: [
      'http://www.youtube.com/embed/_B_EOVMfT5g#t=8s'
    , 'http://www.youtube.com/embed/M2Ylmd0BREk'
    ]
  , downloadLink: 'https://dl.dropboxusercontent.com/u/3492731/revenant/cp_metalworks_rc5.bsp'
  , isInRotation: true
  , leaguesPlayedIn: 'ESEA, CEVO, ETF2L, UGC, OZFL, OWL, AFL'
  , description: [
      'cp_metalworks is a five control point push map. It is a remake of my first map, '
        + 'cp_resonance, which was incredibly useful for learning the basics of hammer (namely, '
        + 'how not to do things!). I remade the map because Resonance received quite a bit of '
        + 'competitive praise, but was completely horrible in terms of visuals and optimization.'

    , 'metalworks was a bit of a long term project. About halfway through its development I took a '
        + 'couple of months off to focus on my job situation, but came back to it later as I '
        + 'started focusing more on comp tf2. It was played quite frequently by the My Gaming Edge '
        + 'and Leviathan Gaming groups, and they gave me significant playtest feedback.'

    , 'The map plays quite agressively. The middle point is very soldier centric, and involves '
        + 'quite a bit of diving and bombing. From there, the map quite easily flows into the '
        + 'second point, and has chokes and approaches that are quite protected, allowing teams to '
        + 'poke in and consider their attacks. The area behind the second point offers quite a bit '
        + 'of room to move around and allows teams reapproach if they survive for long enough. The '
        + 'last is fairly basic, but has enough approaches and areas to satisfy.'

    , 'metalworks is probably my favorite of my 5cp maps. Its fresh, original, and features a '
        + 'diverse and interesting layout. I especially enjoy that it is 100% my layout from start '
        + 'to finish, and how it reflects my sensibilites.'

    , 'It is now a staple competitive map, played continuously in ESEA, ETF2L, and OZfortress.'
    ]
  }
, cp_ashville: { name: 'cp_ashville'
  , imageDirectory: 'cp_ashville_b6'
  , videos: [
      'http://www.youtube.com/embed/fXH0f1-Grf0#t=48s'
    , 'http://www.youtube.com/embed/JoOD6zBTlxc'
    ]
  , downloadLink: 'https://dl.dropbox.com/u/3492731/Ashville/cp_ashville_b6.bsp'
  , isInRotation: false
  , isHidden: true
  , leaguesPlayedIn: ''
  , description: [
      'cp_ashville is a five control point push map. It was designed at a request by Leviathan '
        + 'Gaming\'s Mackey, who made the original koth_ashville, and is an attempt to leverage '
        + 'the king of the hill point from that map as a middle and build a 5cp map around it. The '
        + 'map was built from scratch with the original as a reference point.'

    , 'Ashville derives much from the original but diverts from it in some key ways. The '
        + 'warehouse/sideyard area that separates middle from the second point is much shorter and '
        + 'condensed. In a koth map, you need enough distance between the point and the spawns to '
        + 'ensure that teams are able to push out and secure middle. However, in a 5cp map the '
        + 'distance between second and middle needs to be much shorter, so a team that secures '
        + 'middle easily can push out and secure second before the enemy team respawns. The last '
        + 'is an attempt to create a badlands style last, something I haven\'t done in any of my '
        + 'previous maps.'

    , 'Originally I had planned to go with a cp_well theme, but during the end of the alphas '
        + 'cp_foundry was released. Foundry featured several textures that I was extremely excited '
        + 'to put to work, so I decided to go with that theme instead. However, I mix and matched '
        + 'several ideas from my other maps as well, bringing in some of the tall concrete '
        + 'structures from cp_metalworks (as well as the bright orange windows), and the spytech '
        + 'themes from cp_process.'

    , 'cp_ashville_b6 was played in ESEA for Season 12. It was not well received by the majority of '
  + 'players. Most criticisms were directed at the second and last points, where the distance '
  + 'between the points led to some long drawn out games, and stalemates. I have been considering '
  + 'possible changes to the layout, including decreasing the size of the second point and its '
  + 'surroundings, as well as adjustments to last. However, it seems unlikely that the map would '
  + 'see play again in its current form, so I\'m considering turning it (back?) into a king of the '
  + 'hill map by getting rid of the last point and changing the location of spawn.'
    ]
  }
, ctf_haunt: { name: 'ctf_haunt'
  , imageDirectory: 'ctf_haunt_b1'
  , videos: [
      'http://www.youtube.com/embed/Hft61AcejGY'
    , 'http://www.youtube.com/embed/jMx8XCzLtNw'
    , 'http://www.youtube.com/embed/wcRcNZAYgao'
    ]
  , downloadLink: 'https://dl.dropbox.com/u/3492731/ctf_haunt/ctf_haunt_b2.bsp'
  , isInRotation: false
  , leaguesPlayedIn: ''
  , description: [
      'ctf_haunt is a remake of ctf_vitalism which was going to be my entry in the TF2Maps.net '
        + 'competitive capture the flag contest. About halfway through the contest, I got somewhat '
        + 'frustrated with my visual style and bowed out. The map was designed to solve some of '
        + 'the inherent problems with CTF, namely the ability to turtle endlessly, and the '
        + 'overemphasis on the flag locations.'

    , 'Vitalism started with the idea (derived from ctf_atrophy) of moving the capture locations '
        + 'away from the flag rooms, thus forcing players to commit to the center of the map if '
        + 'they wanted to sucessfully win a round, instead of just turtling in their base. '
        + 'Additionally, I adjusted the layout to allow attackers to push into the flag  room with '
        + 'significant height advantage, so that defending the flag required a more offensive '
        + 'approach, holding the upper area in the middle of the map before pushing into the enemy '
        + 'team and capturing their flag. Finally, because of the size of the map and the quick '
        + 'pace, I\'ve reduced the return rate of the flag to 5 seconds, to ensure that a flag '
        + 'can\'t just be zerged into the capture point, as well as locking capture points if the '
        + 'flag is being carried, ensuring that players must fight the flag carrier if they want '
        + 'to capture the enemy\'s flag. The map was designed for frequent captures, as most '
        + 'non-pub server rulesets allow for up to ten captures to win a match.'

    , 'During the summer of 2012, UGC admins approached me about having the map featured in their '
        + 'summer season with a host of other more experimental maps. I wanted to make some '
        + 'changes to the map, to address certain balance issues. Unfortunately, vitalism\'s '
        + 'original beta hammer files seemed to have some sort of bug, such that compiling any '
        + 'version of the map resulted in all the brush textures turning completely black. After '
        + 'the season was over, I decided to go back to the basic alpha versions of the map and '
        + 'work from the ground up to implement a new version of the map with a much improved '
        + 'visual style.'

    , 'Haunt is the result of this. It uses the mann manor textures and props to create a very '
        + 'evocative internal environment. The map is still a work in progress, as the visual '
        + 'style requires some significant rethinking to lighting and visibility. Several players '
        + 'have complained about darkness in the map, so I\'ll be going back and looking at some '
        + 'of the interior spaces with an eye towards visual clarity. Likewise, the outside areas '
        + 'need some pretty signficant adjustments in terms of optimization. The mann manor style '
        + 'is very heavy on props, and vitalism was not really very well thought out in terms of '
        + 'dividing up the map for rendering. I\'m also interested in adjusting the respawn times, '
        + 'in order to help alleviate turtling.'

    , 'Vitalism was played in season 7 of UGC highlander, and haunt was played in season 9.'
    ]
  }
, cp_frost: { name: 'cp_frost'
  , imageDirectory: 'cp_frost_b6'
  , numOfImages: 12
  , downloadLink: 'https://dl.dropbox.com/u/3492731/cp_frost_b6.bsp'
  , isInRotation: false
  , leaguesPlayedIn: ''
  , isHidden: true
  , description: [
      'cp_frost was a 5cp map built for competitive play. However, due to some significant layout '
        + 'problems, it has been discontinued.'

    , 'After working on extraction, I felt like revisiting 5cp maps and building something '
        + 'specifically for competitive players. In order to get some inspiration, I thought about '
        + 'tinkering with the layout for de_nuke from Counter Strike Source, with the middle point '
        + 'as the B bomb site. I then built a second point in a huge set of valleys and then a '
        + 'last point with a rocket at the center. I put the map on a bit of a hiatus to work on '
        + 'the TF2Maps.net detailing contest, using the last point as my area to detail.'

    , 'After the contest, I started working again on the map. Detailing it went okay, but one of '
        + 'the biggest hurdles I hit upon was a lack of playtesting. I thought the layout was '
        + 'really interesting, but I had no idea how the decisions I had made would affect the '
        + 'general rythm of competitive play. In retrospect, the series of extremely long hallways '
        + 'that met up at certain positions was not a good idea, as those areas are generally the '
        + 'weakest when it comes to 6v6 fighting, and the coolest areas of the map are often '
        + 'underutilized as a result. Additionally, the middle point is a bit of a nightmare when '
        + 'it comes to combat. The connectors that lead into the middle point are way too '
        + 'complicated, and feature numerous doors and entry ways that can be easily shut down by '
        + 'a single splash damage class. The upper area, while a neat idea in theory, dillutes the '
        + 'combat too much, and makes it difficult to figure out where half the combat is going on '
        + '(the same could be said of the lower area).'

    , 'cp_frost is currently retired, and highly unlikely to ever be revisited. The visuals are '
        + 'not up to my current standards, and while I have occasionally taken some general stabs '
        + 'at ressurecting it from scratch, those have all generally fallen apart quite early due '
        + 'to the problematic layout.'
    ]
  }
, cp_extraction: { name: 'cp_extraction'
  , imageDirectory: 'cp_extraction_rc2'
  , downloadLink: 'https://dl.dropbox.com/u/3492731/cp_extraction_rc2.bsp'
  , isInRotation: false
  , leaguesPlayedIn: ''
  , isHidden: true
  , description: [
      'cp_extraction was a three control point attack/defend map based off cp_gravelpit. It was '
        + 'designed to be a solid hydro themed map intended for competitive play. Due to a lack of '
        + 'interest, and some slight layout issues, I discontinued the map and moved on to other '
        + 'projects.'

    , 'The original idea for the map was to revisit my first attempts at mapping, making an '
        + 'attack/defend map with many options for attacking. The layout was largely improvised, '
        + 'taken from some very rough initial ideas and expanded from there.'

    , 'The map suffers a bit from some initial layout issues, making it far more difficult the '
        + 'last point that is probably wise in a traditional gravelpit model. The amount of indoor '
        + 'spaces is quite large and some of the ins and outs are really quite confusing for new '
        + 'players.'

    , 'Overall I feel I learned a great deal from making this map, but my newer maps far exceed it '
        + 'in terms of visual quality and fluid gameplay.'
    ]
  }
, cp_warmachine: { name: 'cp_warmachine'
  , imageDirectory: 'cp_warmachine_rc4'
  , numOfImages: 9
  , downloadLink: 'https://dl.dropbox.com/u/3492731/cp_warmachine_rc4.bsp'
  , isInRotation: false
  , leaguesPlayedIn: ''
  , isHidden: true
  , description: [
      'cp_warmachine was an attack defend map built around a linear layout, with many dynamic '
        + 'doorways and pathways similar to cp_steel. It was designed to be a fun and quick map '
        + 'for casual players. Though I was somewhat happy with the layout, the visuals are very '
        + 'amateur at best, and the general lack of interest led me to discontinue it and move on '
        + 'to other projects.'

    , 'The original idea for the map was an entirely indoor cp_gravelpit. However, when initial '
        + 'testing led to some initial problems, I changed the geometry excessively, resulting in '
        + 'a linear control point map. During the redesign, I remebered some of the interesting '
        + 'changes that happen to cp_steel during a match, how the different doors and pathways '
        + 'open up or close as points are captured, and I decided to implement that in warmachine. '
        + 'The map starts with an "airlock" area that is open for defenders, allowing them easy '
        + 'access to A. As attackers capture A, the airlock closes for them, forcing them to set '
        + 'up at B for a proper defense. When the attackers capture B, the airlock opens for them, '
        + 'allowing them quick access to C from spawn and giving them a potential height advantage '
        + 'as well.'

    , 'Though the layout is interesting, some sections of it are not as memorable or as fun to '
        + 'fight on as I would like. The airlock area, while neat in theory, can lead to some '
        + 'abusive behavior, with engineers deciding not to defend A at all, and instead locking '
        + 'themselves in the airlock and building up a ridiculous sentry farm. This can be avoided '
        + 'with the attackers going from B to A, but it still served as a bit of a problematic '
        + 'instance in several playtests.'

    , 'I learned a great deal with this map, especially how to observe other maps in terms of '
        + 'style and layout, but I would be unlikely to revisit the layout in the future.'
    ]
  }
};


module.exports = maps;
