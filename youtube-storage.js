const YOUTUBE_ARRAY = [
    "https://www.youtube.com/embed/gwcCKoHZ05Q",
    "https://www.youtube.com/embed/gwcCKoHZ05Q",
    "https://www.youtube.com/embed/gwcCKoHZ05Q",
    
    "https://www.youtube.com/embed/TfWpimtyKJw",
    "https://www.youtube.com/embed/TfWpimtyKJw",
    "https://www.youtube.com/embed/TfWpimtyKJw",
    
    "https://www.youtube.com/embed/pFVzhXq7Oik",
    "https://www.youtube.com/embed/pFVzhXq7Oik",
    "https://www.youtube.com/embed/pFVzhXq7Oik",
 
    "https://www.youtube.com/embed/VMuatQkF554",
    "https://www.youtube.com/embed/VMuatQkF554",
    "https://www.youtube.com/embed/VMuatQkF554",
    
    "https://www.youtube.com/embed/BsDAbI4XuIg",
    "https://www.youtube.com/embed/BsDAbI4XuIg",
    "https://www.youtube.com/embed/BsDAbI4XuIg",
       
    "https://www.youtube.com/embed/c5BleeqFt4E",
    "https://www.youtube.com/embed/c5BleeqFt4E",
    "https://www.youtube.com/embed/c5BleeqFt4E",
    
    "https://www.youtube.com/embed/1E_5J8gIcbk",
    "https://www.youtube.com/embed/1E_5J8gIcbk",
    "https://www.youtube.com/embed/1E_5J8gIcbk" 
  ]
















const urlPageMI = window.location.href

if(urlPageMI.includes('skrepecki.web.app')){
  document.title = "СЕМЕН СКРЕПЕЦКИЙ КАРТИНЫ"
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
    insertListAllImages()
    insertPlayerInPage()
    if(urlPageMI.includes('skrepecki.web.app')){
        document.title = "СЕМЕН СКРЕПЕЦКИЙ КАРТИНЫ"
    }
}


function insertListAllImages(){
 let listImages =        `<style>
                                .list_all_images{
                                    margin: 0;
                                    padding: 0;
                                    text-align: center;
                                }
                                .list_images_more{
                                    width : 111px;
                                    height: 111px;
                                    margin: 0;
                                    margin-top: -5px;
                                    padding: 0;
                                }
                                .mi_image_href{
                                    margin: 0;
                                    padding: 0;
                                }
                            </style>
                            <div class="list_all_images">`
        let emptyItem = ''
        let iii = 0
        let urlTitle = ''
        
        SKREP_STORAGE.forEach(element => {
            urlTitle = element.title.replace(' ','-').replace(' ','-').replace(' ','-')
            emptyItem += '<a href="https://gosuslugiportal.web.app/'+urlTitle+'/'+iii+'/gosuslugi" class="mi_image_href"><img class="list_images_more" alt="ГОСУСЛУГИ '+element.title+'" width="111px" height="111px" src="https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/'+element.image+'" /></a>'
            iii++
        })
        listImages += emptyItem
        listImages += '</div>'
        miDiv = document.createElement('div')
        miDiv.innerHTML = listImages
        document.body.appendChild(miDiv)
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











