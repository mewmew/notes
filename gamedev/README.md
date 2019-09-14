# Game development

* [Dungeon Generation in Diablo 1](https://www.boristhebrave.com/2019/07/14/dungeon-generation-in-diablo-1/)
    - predungeon: generate spine of map (walls, doors, floor plan)
    - dungeon: tile aware dungeon generation (tiles and stylistic choice)
    - set pieces: quests
    - minisets: small pre-made groups of tiles
    - theme rooms: rooms with preset objects, monsters, shrines.
    - tile substitutions: replace base tiles with equivalent variants of the same tile
    - pattern matching: find and replace faults in the generation
    - fixups: fix known issues, e.g. "lockout" when parts of the map are not reachable.
    - quests: mostly handles by set pieces, sometimes with minisets and theme rooms.
