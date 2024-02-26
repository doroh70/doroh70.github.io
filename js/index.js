document.addEventListener('DOMContentLoaded', function () {
    var collapseAbout = document.getElementById('collapseAboutTab');
    var collapseInterests = document.getElementById('collapseInterestsTab');

    collapseAbout.addEventListener('show.bs.collapse', function () {
        var bsCollapseInterests = new bootstrap.Collapse(collapseInterests, {
            toggle: false
        });
        bsCollapseInterests.hide();
    });

    collapseInterests.addEventListener('show.bs.collapse', function () {
        var bsCollapseAbout = new bootstrap.Collapse(collapseAbout, {
            toggle: false
        });
        bsCollapseAbout.hide();
    });

    var typedAbout = document.getElementById('typedAbout');

    var typewriter = new Typewriter(typedAbout, {
    loop: false,
    delay: 100,
    cursor: '✍🏿',
    });

    
    typewriter
    .pasteString('<h1><strong><span style="color: #0288D1;">Hi</span> 👋🏿, </strong></h1>')
    .pauseFor(300)
    .typeString('<h2 id="emojiHeader"><span style="color: #212121;">I\'m Oghenemaro</span></h2>')
    .callFunction(function(state) {
        // Directly append the emojis to the last typed element (the <h2> in this case)
        var emojis = ['🫦','🧜🏿‍♂️', '😬', '👨🏿‍💻', '👨🏿‍💼'];
        var currentEmojiIndex = 0;

        function typeAndDeleteEmoji() {
            if (currentEmojiIndex < emojis.length) {
                var emoji = emojis[currentEmojiIndex];
                var container = document.getElementById('emojiHeader');
                container.innerHTML += emoji;
                currentEmojiIndex++;
                
                if (currentEmojiIndex != emojis.length){
                    // Wait some time before deleting the emoji
                    setTimeout(() => {
                        container.innerHTML = container.innerHTML.replace(emoji, '');
                        typeAndDeleteEmoji(); // Type and delete the next emoji
                    }, 1000); 
                }      
            }
        }

        typeAndDeleteEmoji();
    })
    .pauseFor(300 + 1000 * 4)
    .typeString('Soon to be graduate looking for SDE roles.')
    .start();
});