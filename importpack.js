Hooks.once('SBPackageManagerReady', () => {
    SoundBoard.packageManager.addSoundPack(game.i18n.localize("SBFREEPACK.title"), 'modules/SoundBoard-BlitzFreePack/bundledAudio/', 'SoundBoard-BlitzFreePack', {
        licenses: [{
            licenseType: 'SoundSnap License',
            licenseUrl: 'https://www.soundsnap.com/licence',
            licenseDescription: 'Naval Warfare category, donated by powerkor'
        },
        {
            licenseType: 'CC0',
            licenseUrl: 'https://raw.githubusercontent.com/BlitzKraig/fvtt-SoundBoard-BlitzFreePack/master/bundledAudio/Cult%20Chant/LICENSE',
            licenseDescription: 'Cult Chant category - Created by Blitz'
        },
        {
            licenseType: 'Sonniss GDC/Royalty Free',
            licenseUrl: 'https://sonniss.com/gameaudiogdc',
            licenseDescription: 'Everything else'
        }],
        author: 'Blitz#6797',
        link: 'https://www.github.com/BlitzKraig/fvtt-SoundBoard-BlitzFreePack',
        description: game.i18n.localize("SBFREEPACK.desc")
    });
});