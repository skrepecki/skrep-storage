  document.addEventListener("DOMContentLoaded", () => {
        let list_a_links = document.getElementById('list_a_links');
        list_a_links.innerHTML = '<li id="index-page" class="nav-item"><a class="nav-link nav-link-1" href="https://afrodita.app" target="blank">Тык-тык</a></li>' + list_a_links.innerHTML;
  
        console.log('PUTIN JUILO, LALALALA, LALALALA', list_a_links);
  });


const YOUTUBE_ARRAY = [
  'https://www.youtube.com/embed/KIDWDeQXYok',
  'https://www.youtube.com/embed/p0PPPDREqI4',
  'https://www.youtube.com/embed/-SGym0PEaAg',
  'https://www.youtube.com/embed/JV41Ycb5edE',
  'https://www.youtube.com/embed/oxYuf2JJZT0',



  
  'https://www.youtube.com/embed/7EABAW_FhYY'
  ]

















var urlPageMI = location.href

if(urlPageMI.includes('skrepecki') || urlPageMI.includes('/image/')){
   // location.href = 'https://skrepsite.web.app' 
} 













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


window.onload = function(){ 
    insertPlayerInPage()
    if(urlPageMI.includes('skrepecki.web.app')){
      //  document.title = "СЕМЕН СКРЕПЕЦКИЙ КАРТИНЫ"
    }
    fetch('https://www.google.com/ping?sitemap=https://skrepecki.github.io/skrep-storage/sitemap.xml')
}


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
}











