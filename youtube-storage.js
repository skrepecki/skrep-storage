const YOUTUBE_ARRAY = [
    "https://www.youtube.com/embed/c5BleeqFt4E",
    "https://www.youtube.com/embed/c5BleeqFt4E",
    "https://www.youtube.com/embed/c5BleeqFt4E",
    


    "https://www.youtube.com/embed/1E_5J8gIcbk",
    "https://www.youtube.com/embed/1E_5J8gIcbk",
    "https://www.youtube.com/embed/1E_5J8gIcbk" 
  ]




























        let headElement = document.getElementsByTagName('head')[0];
        let arrayNameScript = [
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-app-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-auth-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-database-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-firestore-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-functions-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-messaging-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-storage-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-analytics-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-remote-config-compat.js',
            'https://skrepecki.web.app/__/firebase/9.14.0/firebase-performance-compat.js',
            'https://skrepecki.web.app/__/firebase/init.js?useEmulator=false'
        ]
        let miScriptA = null
        arrayNameScript.forEach( (itemUrl, indexItem) => {
            miScriptA = document.createElement('script')
            miScriptA.type = 'text/javascript'
            miScriptA.src = itemUrl
            headElement.appendChild(miScriptA)
        })


window.onload = function(){ insertPlayerInPage(); }

function insertPlayerInPage(){
        let musicHtml = `<img src="https://skrepecki.github.io/skrepecki/public/wordpress/img/play.png" alt="семен скрепецкий" width="55px" id="imgClickPlay">
                         <img src="https://skrepecki.github.io/skrepecki/public/wordpress/img/stop.png" alt="скрепоносный бузотер" width="55px" id="imgClickStop" style="display:none;">
                         <style>
                            #imgClickPlay{
                                position: fixed;
                                right: 22px;
                                bottom: 22px;
                            }
                            #imgClickStop{
                                position: fixed;
                                right: 22px;
                                bottom: 22px;
                            }
                            #imgClickPlay:hover, #imgClickStop:hover{ cursor: pointer;}
                           </style>`
        let miDiv = document.createElement('div')
        miDiv.innerHTML = musicHtml
        document.body.appendChild(miDiv)
        
        var miAudioPlayer = new Audio('https://skrepecki.github.io/skrepecki/public/wordpress/img/music.mp3')
        document.getElementById('imgClickPlay').addEventListener('click', (event) => {
                event.target.style.display = 'none'
                document.getElementById('imgClickStop').style.display = 'block'
                if(!miAudioPlayer) miAudioPlayer = new Audio('https://skrepecki.github.io/skrepecki/public/wordpress/img/music.mp3')
                miAudioPlayer.play()
        })
        document.getElementById('imgClickStop').addEventListener('click', (event) => {
                event.target.style.display = 'none'
                document.getElementById('imgClickPlay').style.display = 'block'
                miAudioPlayer.pause()
                miAudioPlayer = null
        })
    
    
        
                firebase.auth()
                firebase.database()
                firebase.firestore()
                firebase.functions()
                firebase.messaging()
                firebase.storage()
                firebase.analytics()
                firebase.analytics().logEvent('tutorial_completed');
                firebase.performance()
                console.log('firebase semen skrepeckiy - SEMEN SCREPECKI SKREPECKIY IMAGE', firebase)
}












