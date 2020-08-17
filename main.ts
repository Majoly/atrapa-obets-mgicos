namespace SpriteKind {
    export const Nivel2 = SpriteKind.create()
    export const Nivel3 = SpriteKind.create()
    export const Nivel4 = SpriteKind.create()
    export const Nivelfinal = SpriteKind.create()
    export const Nivel5 = SpriteKind.create()
    export const Nivel6 = SpriteKind.create()
    export const Nivel7 = SpriteKind.create()
    export const Nivel8 = SpriteKind.create()
    export const Nivel9 = SpriteKind.create()
    export const Nivel10 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel4, function (sprite, otherSprite) {
    bandera2.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`14001400090505050505050505070505050505050505050c040d0d0d0d0d0d0d0d040d0d0d0d0d0d0d0d0d04040d0d0d0d0d0d0d0d040d0d0d0d0d0d0d0d0d04040d0d0905050505050805050505050c0d0d0d04040d0d040e0e0e0e0e0e0e0e0e0e0e040d0d0d040305070805070505050705050507050807050502040a040a0a040a0a0a040a0a0a040a0a040a0a04040a040a0a040a0a0a040a0a0a040a0a040a0a04040a0105050805050508050505020a0a040a0a04040a0a0a0a0a0a0a0a0a0a0a0a040a0a040a0a040305070505050507050505050508050508050502040b040b0b0b0b040b0b0b0b0b0b0b0b0b0b0b04040b040b0b0b0b040b0b09050505050507050502040b040b0b0b0b040b0b040b0b0b0b0b040b0b04040b040b0b0b0b040b0b040b0b0b0b0b040b0b040305020b0b0b0b040b0b040b0b0b0b0b040b0b04040b0305050505060b0b040b0b0b0b0b040b0b04040b040b0b0b0b0b0b0b040b0b0b0b0b040b0b04040b040b0b0b0b0b0b0b040b0b0b0b0b040b0b040105080505050505050508050505050508050506`, img`
        . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 2 . . . . . . . . . . . . . 2 2 2 . 
        . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
        . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 . 2 2 2 . 2 2 2 . 2 2 . 2 2 . 
        . 2 . 2 2 . 2 2 2 . 2 2 2 . 2 2 . 2 2 . 
        . 2 . . . . . . . . . . . . 2 2 . 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 
        . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . 2 . . 2 . 2 2 . . . . . . . . . . 
        . 2 . 2 . . 2 . 2 2 . 2 2 2 2 2 . 2 2 . 
        . 2 . 2 2 2 2 . 2 2 . 2 . . . 2 . 2 2 . 
        . . . 2 2 2 2 . 2 2 . 2 . . . 2 . 2 2 . 
        . 2 . . . . . . 2 2 . 2 . . . 2 . 2 2 . 
        . 2 . 2 2 2 2 2 2 2 . 2 . . . 2 . 2 2 . 
        . 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 . 
        . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.vehicle.roadTurn2,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2], TileScale.Sixteen))
    enemigo1.setPosition(390, 390)
    enemigo2.setPosition(390, 390)
    premios()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
        . . . . . . 5 5 c c 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 c 5 5 5 5 5 5 c 5 . . 
        . . . 5 5 c 5 5 5 5 5 5 c 5 5 . 
        . . . f 5 5 5 5 5 5 5 5 c 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 c 5 5 5 5 5 5 c 5 f . 
        . . . 5 5 c 5 c c c c 5 c 5 5 . 
        . . . 5 5 5 c b b b b c 5 5 5 . 
        . . . 5 5 5 b b b b b b 5 5 5 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
function Posicion (mySprite: Sprite) {
    imagen = randint(1, 2)
    if (imagen == 1) {
        tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadVertical)
    } else {
        tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadHorizontal)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivelfinal, function (sprite, otherSprite) {
    bandera.destroy()
    game.over(true, effects.confetti)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 5 5 5 . . 
        . . . . . 6 c 5 5 5 5 5 5 9 5 . 
        . . . . 6 c c 5 5 5 5 5 5 9 c 5 
        . . d 5 9 c c 5 9 9 9 9 9 9 c c 
        . d 5 5 9 c b 5 5 5 5 5 5 5 5 c 
        . 5 5 5 9 b 5 5 b b b 5 b b 5 5 
        . 5 5 5 5 5 5 b b b b 5 b b b 5 
        . 5 5 5 5 5 6 6 6 6 6 5 6 6 6 5 
        . 5 d d 5 5 f 8 8 8 f 5 5 5 5 5 
        . d d 6 5 5 5 f 8 8 f 5 5 5 5 5 
        . 5 5 5 5 5 5 5 f f f 5 5 5 5 5 
        . 5 5 5 5 f f f 5 5 5 5 f f f f 
        . . . 5 f f f f f 5 5 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel7, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . . . . . . . . . . . 
        . . . . b 3 3 3 3 3 b b . . . . . . . . . . . . 
        . . . b 3 3 3 3 1 1 1 3 b . . . . . . . . . . . 
        . . . b 3 3 3 3 1 1 1 1 3 b . . . . . . . . . . 
        . . b 1 1 3 3 3 3 1 1 1 3 b c . . . . . . . . . 
        . b 1 1 1 3 3 3 3 3 3 3 3 b b b . . . . . . . . 
        b b 1 1 3 3 1 1 3 3 3 3 b b b c . b b b b . . . 
        c b b 3 3 1 1 1 1 3 b b d d b c b 3 3 1 1 b . . 
        c b b b b d d d d b b d d d c b b 3 3 1 1 3 c . 
        . c b b b b d d b b b d d b b d d b 3 3 3 3 b c 
        . . c c b b b b b b b b c c b d d b b b d d b c 
        . . . . c c c c c c c b . c c b b b b b d d b c 
        . . . . . . b 1 d d b . . . . c c b b b b b c . 
        . . . . . b 1 1 d d b . . . . . b c c c c c . . 
        . . . . . b 1 d d b b . . . . . b d d b . . . . 
        `)
    bandera6.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`160016000104040404040409040409040409040904090409040c05030303030303050303050303050305030503050305050303030303030503030503030503050305030503050503030303030305030305030305030604070408030506040404040404080303050303050305030303050305050303030303030604040704040704080303030503050503030303030305030303030303030503030306040805030303030303050303030303030306040404080305060404090404040704040904040404080303030503050503030503030303030305030303030503030305030505030305030303030303050303030305030303050305050303060404040404040803030303060409040803050503030503030303030305030303030503050305030505030305030303030303050303030305030503050305050303050303030303030503030303050305030503050503030503030303030305030303030503050305030505030305030303030303050303030305030503050305060404070404040404040803030303050305030503050503030303030303030305030303030503050305030505030303030303030303050303030305030503050305050303030303030303030503030303050305030503050a04040404040404040407040404040704070407040b`, img`
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 . 2 2 . 2 2 . 2 . 2 . 2 . 2 . 
        . 2 2 2 2 2 2 . 2 2 . 2 2 . 2 . 2 . 2 . 2 . 
        . 2 2 2 2 2 2 . 2 2 . 2 2 . 2 . . . . . 2 . 
        . . . . . . . . 2 2 . 2 2 . 2 . 2 2 2 . 2 . 
        . 2 2 2 2 2 2 . . . . . . . . . 2 2 2 . 2 . 
        . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 . . . 
        . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . . . . . 2 . 
        . . . . . . . . . . . . . . . . 2 2 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 2 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 2 2 . 2 . 
        . 2 2 . . . . . . . . 2 2 2 2 . . . . . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . . . . . . . . . . . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadTurn1,sprites.dungeon.greenOuterWest0,sprites.castle.tileDarkGrass2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2], TileScale.Sixteen))
    enemigo1.setPosition(420, 420)
    enemigo2.setPosition(420, 420)
    enemigo_3.setPosition(420, 420)
    premios()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 9 5 5 5 5 5 5 c 5 . . . 
        . . 5 c 9 5 5 5 5 5 5 c c 5 . . 
        5 5 c c 9 9 9 9 9 9 5 c c 9 5 d 
        . 5 c 5 8 8 8 8 8 8 8 b c 9 5 5 
        . 5 5 8 b b 8 b b b 8 8 b 9 5 5 
        5 5 5 b b b 8 b b b b 8 5 5 5 5 
        . 5 5 6 6 6 8 6 6 6 6 6 8 5 5 5 
        . 5 5 5 5 5 5 f 5 5 5 f 5 5 5 5 
        . 5 5 5 5 5 5 f 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
        . 5 f f f f 5 5 5 5 f f f 5 5 5 
        . . f f f f f 5 5 f f f f 5 5 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel9, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 9 9 9 . . 
        . . . 9 9 9 9 9 . . 
        . . . . 9 9 9 . . . 
        . . . . . 9 . . . . 
        . . . . . . . . . . 
        `)
    bandera8.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`19001900010101010b060606060606060606060606060606060606060c0101010108010101010101010101010101010101010101010d010101010206060606060606060606060606060606060606030101010108010101010101010101010101010101010101010d010101010206060606060606060606060606060606060606030101010108010101010101010101010101010101010101010d010101010206060606060606060606060606060606060606030101010108010101010101010101010101010101010101010d01010101020606040606060606060406060606040406060409010101010801010801010101010108010101010a0a01010801010101010206040506040604060603010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010108010101010a0a010108010101010108010801010a0108010107060606060503010108010101010108010801010a0108010101010101010102060609010101010108010801010a01020606060606060606090101010101010101070605060605060901010101010101010101010101`, img`
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 . 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . . . . . . . . . . . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . 2 2 2 2 . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 . . . . . . . 2 2 . 2 
        2 2 2 2 . 2 . 2 2 . 2 . 2 2 2 2 2 2 2 2 . . . . 2 
        2 2 2 2 . 2 . 2 2 . 2 . . . . . . . . . . 2 2 2 2 
        2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile1,sprites.dungeon.hazardWater,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.dungeon.stairSouth,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.dungeon.stairNorth], TileScale.Sixteen))
    enemigo_3.setPosition(575, 550)
    enemigo2.setPosition(575, 550)
    enemigo1.setPosition(575, 550)
    premios()
})
function premios () {
    if (info.score() == 5) {
        bandera = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            `, SpriteKind.Nivel2)
        nivel += 1
        Posicion(bandera)
    }
    if (info.score() == 10) {
        bandera2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            `, SpriteKind.Nivel3)
        nivel += 1
        Posicion(bandera2)
    }
    if (info.score() == 15) {
        bandera3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel4)
        nivel += 1
        Posicion(bandera3)
    } else if (info.score() == 20) {
        bandera4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel5)
        nivel += 1
        Posicion(bandera4)
    } else if (info.score() == 25) {
        bandera5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel6)
        nivel += 1
        Posicion(bandera5)
    } else if (info.score() == 30) {
        bandera6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel7)
        nivel += 1
        Posicion(bandera6)
    } else if (info.score() == 35) {
        bandera7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel8)
        nivel += 1
        Posicion(bandera7)
    } else if (info.score() == 40) {
        bandera8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel9)
        nivel += 1
        Posicion(bandera8)
    } else if (info.score() == 45) {
        bandera_9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            `, SpriteKind.Nivel10)
        nivel += 1
        Posicion(bandera_9)
    } else if (info.score() == 50) {
        let bandrera10: Sprite = null
        bandera = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 3 3 3 3 3 2 3 2 3 2 2 2 3 2 9 
            9 7 2 2 2 2 2 7 2 7 7 2 2 7 2 9 
            9 7 7 7 7 2 2 7 2 7 2 3 2 7 2 9 
            9 7 2 2 2 2 2 7 2 7 2 2 7 7 2 9 
            9 7 2 2 2 2 2 7 2 7 2 2 2 7 2 9 
            9 3 2 2 2 2 2 7 2 7 2 2 2 7 2 9 
            9 3 2 2 2 2 2 7 2 7 2 2 2 7 2 9 
            9 3 2 2 2 2 2 3 2 3 2 2 2 3 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Nivelfinal)
        Posicion(bandrera10)
    }
    if (nivel == 1) {
        premio = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
    } else if (nivel == 2) {
        premio = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
    } else if (nivel == 3) {
        premio = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Food)
    } else if (nivel == 4) {
        premio = sprites.create(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Food)
    } else if (nivel == 5) {
        premio = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Food)
    } else if (nivel == 6) {
        premio = sprites.create(img`
            . . 6 6 6 6 . . 
            . 6 1 4 4 4 6 . 
            6 d 4 4 4 4 4 6 
            c b b 1 1 4 d c 
            . c b b 4 1 c . 
            . . c c c c . . 
            `, SpriteKind.Food)
    } else if (nivel == 7) {
        premio = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . 
            . . . . . b b b b b . . . . . . . . . . . . . . 
            . . . . b 3 3 3 3 3 b b . . . . . . . . . . . . 
            . . . b 3 3 3 3 1 1 1 3 b . . . . . . . . . . . 
            . . . b 3 3 3 3 1 1 1 1 3 b . . . . . . . . . . 
            . . b 1 1 3 3 3 3 1 1 1 3 b c . . . . . . . . . 
            . b 1 1 1 3 3 3 3 3 3 3 3 b b b . . . . . . . . 
            b b 1 1 3 3 1 1 3 3 3 3 b b b c . b b b b . . . 
            c b b 3 3 1 1 1 1 3 b b d d b c b 3 3 1 1 b . . 
            c b b b b d d d d b b d d d c b b 3 3 1 1 3 c . 
            . c b b b b d d b b b d d b b d d b 3 3 3 3 b c 
            . . c c b b b b b b b b c c b d d b b b d d b c 
            . . . . c c c c c c c b . c c b b b b b d d b c 
            . . . . . . b 1 d d b . . . . c c b b b b b c . 
            . . . . . b 1 1 d d b . . . . . b c c c c c . . 
            . . . . . b 1 d d b b . . . . . b d d b . . . . 
            `, SpriteKind.Food)
    } else if (nivel == 8) {
        premio = sprites.create(img`
            . . . . . . . . c c c c . . . . 
            . . . . c c c c c c c c c . . . 
            . . . c f c c a a a a c a c . . 
            . . c c f f f f a a a c a a c . 
            . . c c a f f c a a f f f a a c 
            . . c c a a a a b c f f f a a c 
            . c c c c a c c b a f c a a c c 
            c a f f c c c a b b 6 b b b c c 
            c a f f f f c c c 6 b b b a a c 
            c a a c f f c a 6 6 b b b a a c 
            c c b a a a a b 6 b b a b b a . 
            . c c b b b b b b b a c c b a . 
            . . c c c b c c c b a a b c . . 
            . . . . c b a c c b b b c . . . 
            . . . . c b b a a 6 b c . . . . 
            . . . . . . b 6 6 c c . . . . . 
            `, SpriteKind.Food)
    } else if (nivel == 9) {
        premio = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 . . 
            . . . . 9 9 9 . . . 
            . . . . . 9 . . . . 
            . . . . . . . . . . 
            `, SpriteKind.Food)
    } else if (nivel == 10) {
        premio = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . c c . . 
            . . . . . . . c c c c c 6 3 c . 
            . . . . . . c 6 6 3 3 3 6 6 c . 
            . . . . . c 6 6 6 3 3 3 3 3 3 c 
            . . . . c 6 6 6 6 3 3 3 3 3 3 c 
            . . c c c 6 6 6 6 6 3 3 3 3 3 c 
            . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
            c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
            c 6 c c c c 3 c 6 6 6 6 6 6 c c 
            c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
            . c 6 c c c c 6 c 6 3 3 3 3 6 c 
            . . c 6 c c c c c 6 3 3 3 6 c . 
            . . . c c c c c c c c c c c . . 
            `, SpriteKind.Food)
    }
    Posicion(premio)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel3, function (sprite, otherSprite) {
    bandera.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`1400140013111411151113111411151113111411131115111115111311141115111311141115111311141115020505050506050505050505050505050605050d030f0f0f0f030e0e0e0e0e0e0e0e0e0e03080f03030f0f080f030e0e0e0e0e0e0e0e0e0e030f0f03030f0f0f0f030e0e0e0e0e0e0e0e0e0e030f0f030405050505070e0e0e0e0e0e0e0e0e0e030f0803030809080a030e0e0e0e0e0e0e0e0e0e030f0f03030a0a0a0801050605050506050605050c0f0f0303080a0a080a0a03111108030a0311080f0f0f030405050505050507111111030a031102050d12030310101010101003081111030a0311030a031203030802050505050c111111030a0308030a0312030310031111111108111111030a0311030a030803031003111102050505050507080311030a0312030310030811031010101010030a0311030a0312030308031111030810101008030a01050c0a03120303100105050c1010101010030a0a0a0a08030803031010100810101010081003080a0a0a0a03120301050505050505050505050b05050505050b050c`, img`
        . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 . 
        . 2 2 2 2 . 2 . . 2 2 2 2 2 2 2 . 2 2 . 
        . 2 2 2 2 . 2 2 2 . . . . . . 2 . 2 2 . 
        . . . . . . 2 2 2 2 2 2 2 . . 2 . 2 2 . 
        . 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 . 
        . 2 2 2 2 . . . . . . . . . . . . 2 2 . 
        . 2 2 2 2 2 2 . 2 2 2 . 2 . 2 2 2 2 2 . 
        . . . . . . . . 2 2 2 . 2 . 2 . . . 2 . 
        . 2 2 2 2 2 2 . 2 2 2 . 2 . 2 . 2 . 2 . 
        . 2 . . . . . . 2 2 2 . 2 . 2 . 2 . 2 . 
        . 2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 . 2 . 
        . 2 . 2 2 . . . . . . . 2 . 2 . 2 . 2 . 
        . 2 . 2 2 . 2 2 2 2 2 . 2 . 2 . 2 . 2 . 
        . 2 . 2 2 . 2 2 2 2 2 . 2 . . . 2 . 2 . 
        . 2 . . . . 2 2 2 2 2 . 2 2 2 2 2 . 2 . 
        . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 . 
        . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection4,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.dungeon.hazardWater,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.saplingOak], TileScale.Sixteen))
    enemigo2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . 7 2 7 2 . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        2 2 2 . . 7 2 2 7 . . . 2 2 2 . 
        2 2 2 2 2 7 7 7 7 2 2 2 2 2 2 . 
        2 2 2 . . 7 7 7 7 . . . 2 2 2 . 
        . . . . . 7 7 7 7 . . . 2 2 2 . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . 2 2 2 2 . . 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemigo1.follow(coche)
    enemigo2.follow(coche)
    coche.setPosition(8, 40)
    enemigo1.setPosition(180, 180)
    enemigo2.setPosition(180, 180)
    enemigo1.setVelocity(40, 40)
    enemigo2.setVelocity(40, 40)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel10, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `)
    bandera.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`1e001e0002060506050605060506050605060605060506050605060506060506060c0401040a040a040a040a040a04010104010401040104010401010401010404010906070a040a090608060701010306070109060701090606080606070401040a040a040a040a0a0a0401010101040104010401040101010101040906070a09060806070a0a0a0906060506080607010906080605060506070401040a040a0a0a040a0a0a0401010401010104010401010104010401040401090608060506080605060701010401010104010401010104010401040401040a0a0a040a0a0a040a0401010401010104010401010104010401040906070a0a0a040a0a0a040a090605080506050805080506050805080607040a040a0a0a040a0a0a040a040104010401040104010401040104010104090608060506080605060806070104010401040104010401040104010104040a0a0a040a0a0a040a0a0a090608060806080608060806080608060607090605060806050608060506070101010101010101010101010101010104040a040a0a0a040a0a0a040a040101010101010101010101010101010104090608060506080605060806070101010101010101010101010101010104040a0a0a040a0a0a040a0a0a090606060506060506060506050606060607090605060806050608060506070101010401010401010401040101010104040a040a0a0a040a0a0a040a090605060805060806050805080506050607090608060506080605060806070104010104010101040104010401040104040a0a0a040a0a0a040a0a0a040104010104010101040104010906080607040a0a0a040a0a0a040a0a0a090608050608050605080508060701010104090605060806050608060506070101040101040104010401010906050607040a040a0a0a040a0a0a040a0401010401010401040104010104010401040906070a0a0a09060506070a090605080605080607010401010906080607040a040a0a0a040a040a040a040a040a0a040a0a09060805060701010104090608060506060608060806070a090606070a0a040a0a040a0906050607040a0a0a040a0a0a0a0a0a0a040a040a0a090606070a0a040a04010401040306050608060605060506060b0a090606070a0a090605080607010401040a0a040a0a0a0a040a040a0a0a0a040a0a040a0a040a040a0a04010401040a0a0306060606080608060606060806060806060806080606080608060b`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 2 2 . 2 2 . 
        . 2 . . . 2 . 2 . . . . . 2 2 . . . 2 . . . 2 . . . . . . . 
        . 2 . 2 . 2 . 2 . 2 2 2 . 2 2 2 2 . 2 . 2 . 2 . 2 2 2 2 2 . 
        . . . 2 . . . . . 2 2 2 . . . . . . . . 2 . . . . . . . . . 
        . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 . 
        . 2 . . . . . . . . . . . 2 2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 . 
        . 2 . 2 2 2 . 2 2 2 . 2 . 2 2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 . 
        . . . 2 2 2 . 2 2 2 . 2 . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 2 . 2 2 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 
        . . . . . . . . . . . . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 
        . 2 2 2 . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . 2 2 2 . 2 2 2 . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 2 2 . 2 2 . 2 2 . 2 . 2 2 2 2 . 
        . 2 . 2 2 2 . 2 2 2 . 2 . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 . 2 2 . 2 2 2 . 2 . 2 . 2 . 2 . 
        . 2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 2 . 2 2 2 . 2 . 2 . . . . . 
        . 2 2 2 . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . . . 2 2 . 2 2 . 2 . 2 . 2 2 . . . . . 
        . 2 . 2 2 2 . 2 2 2 . 2 . 2 2 . 2 2 . 2 . 2 . 2 2 . 2 . 2 . 
        . . . 2 . 2 . . . . . 2 . . . . . . . . . 2 . 2 2 . . . . . 
        . 2 . 2 2 2 . 2 . 2 . 2 . 2 . 2 2 . 2 2 . . . . . . 2 2 2 . 
        . . . . . . . . . . . . . 2 . . . . 2 2 . 2 2 . 2 . . . . . 
        . 2 2 2 . 2 2 2 2 2 2 2 . 2 . 2 2 . . . . 2 2 . 2 . 2 . 2 . 
        . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . 2 . 2 . 
        2 2 . 2 2 2 2 . 2 . 2 2 2 2 . 2 2 . 2 2 . 2 . 2 2 . 2 . 2 . 
        . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.dungeon.hazardLava0,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection2,sprites.dungeon.hazardLava1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2], TileScale.Sixteen))
    Enemigo4 = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    Enemigo4.follow(coche)
    coche.setPosition(0, 0)
    premios()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    coche.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 5 . . . 
        . . . . . c 5 5 5 5 5 5 c . . . 
        . . . . 5 c 5 5 5 5 5 5 c 5 . . 
        . . . 8 5 c 5 5 5 5 5 5 c 5 8 . 
        . . . f 5 c 5 5 5 5 5 5 c 5 f . 
        . . . f 8 c 5 5 5 5 5 5 c 8 f . 
        . . . f 5 c 5 b b b b 5 c 5 f . 
        . . . 8 5 5 b c c c c b 5 5 8 . 
        . . . 8 8 b c c c c c c b 8 8 . 
        . . . f 8 9 9 9 9 9 9 9 9 8 f . 
        . . . f 8 d 5 5 5 5 5 5 d 8 f . 
        . . . . 6 d d 5 5 5 5 d d 6 f . 
        . . . . f 6 d 5 5 5 5 d 6 f . . 
        . . . . . 8 5 5 5 5 5 5 8 . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel8, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `)
    bandera7.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`15001500040202020802020202020202020802080208020211030e0e0e030e0e0e0e0e0e0e0e030e030e030e0e0305020202090202020802020802070e030e030e0e03030a0b0c0d0e0d0d031212030e0502090209020207030c0c0c0c0c0c0c031212030e030e0e0e0e0e0e03030c0c0c0c0c0c0c050202070e05020202080202070502020802020202071212030e030e0e0e030e0e03030c0c030b0b0b0b03120e0502070e0e0e030e0e03030c0c0502020202071212030e05020202070e0e03030c0c030b0b0b0b050202070e030e0e0e030e0e03030c0c0102020802071212030e0502020809080207030c0c0c0c0c030b050202070e030e0e030e030e030502020202020902071212030e030e0e0502070e0303101010101010100312120502070e0e030e0502070310040202080202090202070e030e0e0502070e030310031010031212121212030e050202070e0502070310031010050202020802070e030e0e0502070e03031003101003101010030e030e050202070e050207031001020206101010030e0502070e0e030e050207031010101010101010030e030e030e0e030e030e03010202020202020202090209020902020902090206`, img`
        . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 2 . 
        . . . . . . . . . . . . . . 2 . 2 . 2 2 . 
        . 2 2 2 2 2 2 2 . 2 2 . 2 . . . . . . . . 
        . 2 2 2 2 2 2 2 . 2 2 . 2 . 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . 
        . . . . . . . . . 2 2 . 2 . 2 2 2 . 2 2 . 
        . 2 2 . 2 2 2 2 . 2 2 . . . 2 2 2 . 2 2 . 
        . 2 2 . . . . . . 2 2 . 2 . . . . . 2 2 . 
        . 2 2 . 2 2 2 2 . . . . 2 . 2 2 2 . 2 2 . 
        . 2 2 . . . . . . 2 2 . 2 . . . . . . . . 
        . 2 2 2 2 2 . 2 . . . . 2 . 2 2 . 2 . 2 . 
        . . . . . . . . . 2 2 . 2 . 2 2 . . . 2 . 
        . 2 2 2 2 2 2 2 . 2 2 . . . 2 2 . 2 . . . 
        . 2 . . . . . . . . . . 2 . 2 2 . . . 2 . 
        . 2 . 2 2 . 2 2 2 2 2 . 2 . . . . 2 . . . 
        . 2 . 2 2 . . . . . . . 2 . 2 2 . . . 2 . 
        . 2 . 2 2 . 2 2 2 . 2 . 2 . . . . 2 . . . 
        . 2 . . . . 2 2 2 . 2 . . . 2 2 . 2 . . . 
        . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 2 . 2 . 2 . 
        . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd0,sprites.builtin.crowd8,sprites.builtin.crowd7,sprites.castle.rock1,sprites.builtin.crowd9,sprites.vehicle.roadTurn2,sprites.builtin.crowd5], TileScale.Sixteen))
    enemigo1.setPosition(420, 420)
    enemigo2.setPosition(420, 420)
    enemigo_3.setPosition(420, 420)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.magicWand.play()
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeScoreBy(1)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel2, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(hex`100010000d08030303030903030303090303030b0d050d0d0d0d050d0d0d0d050d0d0d050d050d0d0d0d050d0d0d0d050d0d0d050d050d0d0d0d050d0d08030a0d0d0d050d050d0d0d0d050d0d050d0d0d0d0d050d050d0d0d0d050d0d050d0d0d0d0d050d050d0d0d08040303040303090303070d050d0d0d050d0d0d0d0d0d050d0d050d050d0d0d050d0803090309040303070d050d0d0d050d050d050d050d0d0d050d06030303070d050d050d02030303070d050d0d0d050d050d050d0d0d0d0d050d050d0d0d050d050d050d0d0d0d0d050d050d0d0d050d050d060303030903070d050d0d0d050d050d050d0d0d050d050d02030303040304030403030304030a`, img`
        2 . . . . . . . . . . . . . . . 
        2 . 2 2 2 2 . 2 2 2 2 . 2 2 2 . 
        2 . 2 2 2 2 . 2 2 2 2 . 2 . 2 . 
        2 . 2 2 2 2 . 2 2 . . . 2 . 2 . 
        2 . 2 2 2 2 . 2 2 . 2 2 2 2 2 . 
        2 . 2 2 2 2 . 2 2 . 2 2 2 2 2 . 
        2 . 2 2 2 . . . . . . . . . . . 
        2 . 2 2 2 . 2 2 2 2 2 2 . 2 2 . 
        2 . 2 2 2 . 2 . . . . . . . . . 
        2 . 2 2 2 . 2 . 2 . 2 . 2 2 2 . 
        2 . . . . . 2 . 2 . 2 . . . . . 
        2 . 2 2 2 . 2 . 2 . 2 2 2 2 2 . 
        2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 . 
        2 . 2 . 2 . 2 . 2 . . . . . . . 
        2 . 2 2 2 . 2 . 2 . 2 2 2 . 2 . 
        2 . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.builtin.forestTiles0,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.castle.tilePath7,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
    coche.setPosition(16, 0)
    enemigo1 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f . . . . . . . . . . 
        . . . . . . . f f b 1 1 1 1 f f . . . . . . . . 
        . . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . . 
        . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . 
        . . . . . f f f f 1 1 1 1 1 1 1 d f . . . . . . 
        . . . . f b 1 1 1 c 1 d d 1 1 1 d f . . . . . . 
        . . . . f f b 1 b 1 f d c f 1 1 b f . . . . . . 
        . . . . . f f b f b f b 1 1 1 1 1 f . . . . . . 
        . . . . . . f f f f c f d b 1 b 1 f . . . . . . 
        . . . . . . . f c c c f c f b f b f . . . . . . 
        . . . . . . . . f f f f f f f f f f . . . . . . 
        . . . . . . . . . f f f f f f . . . . . . . . . 
        . . . . . . . . . f f f f f f . . . . . . . . . 
        . . . . . f . . f f f f f f f . . . . . . . . . 
        . . . . . f f f f f f f f f . . . . . . . . . . 
        . . . . . . f f f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bandera.destroy()
    enemigo1.follow(coche)
    enemigo1.setPosition(160, 160)
    enemigo1.follow(coche, 100)
    info.changeScoreBy(1)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel5, function (sprite, otherSprite) {
    bandera4.destroy()
    scene.setBackgroundImage(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `)
    tiles.setTilemap(tiles.createTilemap(hex`160016000a0603060603060603060603060603060306060306080411041111040000041111040000041104000004110404110411110400000411110400000411040000041104041104111104000004111104000004110400000411040411020606050606050606050606050605060601110404110400000000000000000000000000000000041104041102060606060606060306060606060606060111040411041111111111111104111111111111111104110402060506060606060606050606060606060606050601041b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b04041c1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1c04041c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c04020603060606060606060603060606060606060606010421042020202020202020042020202020202020200404210420202020202020200420202020202020202004042102060606060606060605060606060606060606010421041f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f040421041f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f0404210206060606060606060606060606060606060601020601131313131313131313131313131313131313040423041313131313131313131313131313131313130407060506060606060606060606060606060606060609`, img`
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 . 2 2 . 2 . 
        . 2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 . 2 2 . 2 . 
        . 2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 . 2 2 . 2 . 
        . 2 . . . . . . . . . . . . . . . . . . 2 . 
        . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
        . 2 . . . . . . . . . . . . . . . . . . 2 . 
        . 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . . . 2 . . . 2 2 2 2 . . . . . 2 . 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 . . . . . . . . . . . . . . . . . . . . 
        . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . . . . . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.dungeon.doorLockedSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedWest,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.builtin.crowd7,sprites.dungeon.hazardLava0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.builtin.crowd8,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.buttonOrangeDepressed,sprites.builtin.crowd9,sprites.builtin.field1,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.saplingOak,sprites.dungeon.buttonTeal,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.dungeon.chestClosed,sprites.castle.tileGrass1], TileScale.Sixteen))
    enemigo_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 7 7 7 2 2 2 . . . . 
        . . . 2 9 9 9 9 9 9 9 2 . . . . 
        . . . 2 9 4 3 4 3 4 9 2 . . . . 
        . . . 2 9 3 4 3 4 3 9 2 . . . . 
        . . . 2 9 9 9 9 9 9 9 2 . . . . 
        . . . 7 2 5 5 5 5 5 2 7 . . . . 
        . . 7 2 6 5 5 5 5 5 6 2 7 . . . 
        . 7 2 6 6 5 5 5 5 5 6 6 2 7 . . 
        . . 7 2 6 5 5 5 5 5 6 2 7 . . . 
        . . . 7 2 5 5 5 5 5 2 7 . . . . 
        . . . . 7 2 2 2 2 2 7 . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemigo_3.follow(coche)
    coche.setPosition(0, 0)
    enemigo1.setPosition(264, 264)
    enemigo2.setPosition(264, 264)
    enemigo_3.setPosition(264, 264)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel6, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . 6 6 6 6 . . 
        . 6 1 4 4 4 6 . 
        6 d 4 4 4 4 4 6 
        c b b 1 1 4 d c 
        . c b b 4 1 c . 
        . . c c c c . . 
        `)
    bandera5.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`160016000104040404040404040404040404040404040404040d070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b07070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b07070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0705040404040404040404040404040408040408040409070b0b0b0b0b0b0b0b0b0b0b0b0b0b070b0b070b0b07070b0b0b0b0b0b0b0b0b0b0b0b0b0b070b0b070b0b0705040404040804040404040804040402040402040409070b0b0b0b070b0b0b0b0b070b0b0b0b0b0b0b0b0b07070b0b0b0b070b0b0b0b0b070b0b0b0b0b0b0b0b0b07070b0b0b0b070b0b0b0b0b0504040404040804040409070b0b0b0b070b0b0b0b0b070b0b0b0b0b070b0b0b07070b0b0b0b070b0b0b0b0b070b0b0b0b0b070b0b0b07070b0b0b0b070b0b0b0b0b050408040804090b0b0b07070b0b0b0b070b0b0b0b0b070b070b070b070b0b0b070504040404090b0b0b0b0b070b070b070b070b0b0b07070b0b0b0b070b0b0b0b0b070b0604030b070b0b0b07070b0b0b0b070b0b0b0b0b070b0b0b0b0b070b0b0b07070b0b0b0b060408040404020404080404090b0b0b07070b0b0b0b0b0b070b0b0b0b0b0b070b0b070b0b0b070604040404040402040404040404020404020404040300000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . . . . . . . . . . . . . . . . . . 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        . 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 . 2 . . . 2 . 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 . 2 . . . 2 . . . . . . . . . . . 
        . 2 2 2 2 . 2 . . . 2 . 2 2 2 2 2 . 2 2 2 . 
        . 2 2 2 2 . 2 . . . 2 . 2 2 2 2 2 . 2 2 2 . 
        . 2 2 2 2 . 2 . . . 2 . . . . . . . 2 2 2 . 
        . 2 2 2 2 . 2 . . . 2 . 2 . 2 . 2 . 2 2 2 . 
        . . . . . . 2 . . 2 2 . 2 . 2 . 2 . 2 2 2 . 
        . 2 2 2 2 . 2 . 2 . 2 . 2 . . . 2 . 2 2 2 . 
        . 2 . . 2 . 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 
        . 2 . . 2 . . . . . . . . . . . . . 2 2 2 . 
        . 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 . 2 2 2 . 
        . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.tile1,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection4,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.collectibleRedCrystal,sprites.vehicle.roadTurn2], TileScale.Sixteen))
    coche.setPosition(0, 0)
    enemigo1.setPosition(286, 286)
    enemigo2.setPosition(286, 286)
    enemigo_3.setPosition(286, 286)
    premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    coche.setPosition(0, 2)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.showLongText("noooooooooooo", DialogLayout.Bottom)
        game.over(false, effects.starField)
    }
})
let Enemigo4: Sprite = null
let premio: Sprite = null
let bandera_9: Sprite = null
let bandera7: Sprite = null
let bandera5: Sprite = null
let bandera4: Sprite = null
let bandera3: Sprite = null
let bandera8: Sprite = null
let enemigo_3: Sprite = null
let bandera6: Sprite = null
let bandera: Sprite = null
let enemigo2: Sprite = null
let enemigo1: Sprite = null
let bandera2: Sprite = null
let coche: Sprite = null
let imagen = 0
let nivel = 0
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 9 9 5 5 5 5 . . . 
    . . . . . c 9 5 5 5 5 5 c . . . 
    . . . . 5 c 9 5 5 5 5 5 c 5 . . 
    . . . 8 5 c 9 5 5 5 5 5 c 5 8 . 
    . . . f 5 c 9 5 5 5 5 5 c 5 f . 
    . . . f 8 c 6 5 5 5 5 5 c 8 f . 
    . . . f 5 c 5 b b b b 5 c 5 f . 
    . . . 8 5 5 b c c c c b 5 5 8 . 
    . . . 8 8 b c c c c c c b 8 8 . 
    . . . f 8 9 9 9 9 9 9 9 9 8 f . 
    . . . f 8 5 5 5 5 5 5 5 5 8 f . 
    . . . . 5 5 d 5 5 5 5 d 5 5 f . 
    . . . . f 5 d 5 5 5 5 d 5 f . . 
    . . . . . 8 5 5 5 5 5 5 8 . . . 
    `)
game.setDialogTextColor(9)
game.setDialogFrame(img`
    . . c c c c c . . . . 3 3 3 . . . . . 3 3 3 . . . . . 3 3 3 . . . c c c c c . . . . 
    . c 3 3 b 3 3 c . . 3 9 9 9 3 . . . 3 9 9 9 3 . . . 3 9 9 9 3 . c 3 3 b 3 3 c . . . 
    c 3 b 3 3 b b 3 c 3 9 9 9 9 9 3 3 3 9 9 9 9 9 3 3 3 9 9 9 9 9 c 3 b b 3 3 b 3 c . . 
    c 3 3 b 3 3 b 3 c 9 9 1 1 1 9 9 9 9 9 1 1 1 9 9 9 9 9 1 1 1 9 c 3 b 3 3 b 3 3 c . . 
    c b 3 3 b 3 3 b c 9 1 a a a 1 9 9 9 1 a a a 1 9 9 9 1 a a a 1 c b 3 3 b 3 3 b c . . 
    c 3 b 3 3 b b b c b a a a a a 1 1 1 a a a a a 1 1 1 a a a a b c b b b 3 3 b 3 c . . 
    c 3 b b 3 b b d 1 b a a a a a a a a a a a a a a a a a a a a b 1 d b b 3 b b 3 c . . 
    . c 3 3 b b d 1 b a a a a a a a a a a a a a a a a a a a a a a b 1 d b b 3 3 c . . . 
    . . c c c c 1 b a a a a a a a a a a a a a a a a a a a a a a a a b 1 c c c c . . . . 
    . 3 9 9 1 b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b 9 9 3 . . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . 3 9 9 1 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    . 3 9 9 1 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . 3 9 9 1 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    . . 3 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    . 3 9 9 1 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    3 9 9 1 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . 3 9 9 1 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 9 9 3 . . 
    . . 6 9 9 b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b 1 9 9 3 . . . 
    . . c c c c 1 a a a a a a a a a a a a a a a a a a a a a a a a a b 1 c c c c . . . . 
    . c 3 3 b b d 1 b a a a a a a a a a a a a a a a a a a a a a a b 1 d b b 3 3 c . . . 
    c 3 b b 3 b b d 1 b a a a a a a a a a a a a a a a a a a a a b 1 d b b 3 b b 3 c . . 
    c 3 b 3 3 b b b c b a a a a 1 1 1 a a a a a 1 1 1 a a a a a b c b b b 3 3 b 3 c . . 
    c b 3 3 b 3 3 b c 1 a a a 1 9 9 9 1 a a a 1 9 9 9 1 a a a 1 9 c b 3 3 b 3 3 b c . . 
    c 3 3 b 3 3 b 3 c 9 1 1 1 9 9 9 9 9 1 1 1 9 9 9 9 9 1 1 1 9 9 c 3 b 3 3 b 3 3 c . . 
    c 3 b 3 3 b b 3 c 9 9 9 9 9 3 3 3 9 9 9 9 9 3 3 3 9 9 9 9 9 3 c 3 b b 3 3 b 3 c . . 
    . c 3 3 b 3 3 c . 3 9 9 9 3 . . . 3 9 9 9 3 . . . 3 9 9 9 3 . . c 3 3 b 3 3 c . . . 
    . . c c c c c . . . 3 3 3 . . . . . 3 3 3 . . . . . 3 3 3 . . . . c c c c c . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
game.splash("atrapa  objetos magicos ", "autor:mario banegas  ")
game.splash("NACIMIENTO:2010 ", "Juego hecho en:2020")
game.showLongText("coge todos los objetos mágicos lo tendrás que buscar los tu.´   cuando             encontreís    todos los       objetos   magicos te saldra una bandera y la      tendras que   pasarla no        tienes que    tocar nin gun boton para      coger los     objetos  y      esquiba los       enemigos para que no te  maten y cada vez que    llegas a coger 5   objetos   magicos   subiras de nivel.       Suerte.", DialogLayout.Center)
nivel = 1
imagen = 0
coche = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 9 5 5 5 5 5 5 c 5 . . . 
    . . 5 c 9 5 5 5 5 5 5 c c 5 . . 
    5 5 c c 9 9 9 9 9 9 5 c c 9 5 d 
    . 5 c 5 8 8 8 8 8 8 8 b c 9 5 5 
    . 5 5 8 b b 8 b b b 8 8 b 9 5 5 
    5 5 5 b b b 8 b b b b 8 5 5 5 5 
    . 5 5 6 6 6 8 6 6 6 6 6 8 5 5 5 
    . 5 5 5 5 5 5 f 5 5 5 f 5 5 5 5 
    . 5 5 5 5 5 5 f 5 5 f 5 5 5 5 5 
    . 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
    . 5 f f f f 5 5 5 5 f f f 5 5 5 
    . . f f f f f 5 5 f f f f 5 5 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
coche.setPosition(3, 27)
controller.moveSprite(coche, 100, 100)
scene.cameraFollowSprite(coche)
tiles.setTilemap(tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0905050505050505050507050505050a020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b0203050505050505050505010b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b02020b0b0b0b0b0b0b0b0b020b0b0b0b0204050505050505050505080505050506`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . . . . . . . . . . . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.castle.tileGrass2], TileScale.Sixteen))
info.setLife(6)
game.splash(game.askForString("Dime tu nombre"))
premios()
