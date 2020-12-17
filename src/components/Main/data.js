const data = [
    {"month": "January", 
    "title": "New decade! So much planned! So excited... 😃", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/1WIJqmp.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/F1LYana.gif"></img>
    <iframe id="iframeJanuary" width="100%" height="300" src="https://www.youtube.com/embed/vnPsziXgy3k?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"February", 
    "title": "6 years together and finally had our house warming! 💗", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/vMv0uwo.gif">
    </img><img class="mx-auto d-block" width="100%" src="https://i.imgur.com/DW9LmrL.gif"></img>
    <iframe id="iframeFebruary" width="100%" height="300" src="https://www.youtube.com/embed/HgzGwKwLmgM?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"March", 
    "title": "Covid! Lock down! LOO ROLL!! 🦠", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/Ay0TP6G.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/titNOMh.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/fDQUGWL.gif"></img>
    <iframe id="iframeMarch" width="100%" height="300" src="https://www.youtube.com/embed/8OyBtMPqpNY?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"April", 
    "title": "So many video calls! Trip to France cancelled! 📹 💻", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/JYFB2tw.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/o4Q9H82.gif"></img>
    <iframe id="iframeApril" width="100%" height="300" src="https://www.youtube.com/embed/StKVS0eI85I?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"May", 
    "title": "Lots of HAIR! 🌳", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/xuC0imn.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/X3fee4C.gif"></img>
    <iframe id="iframeMay" width="100%" height="300" src="https://www.youtube.com/embed/yNzwTiC7Z5I?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"June", 
    "title": "Matt the builder puts a fence up! ⚒️", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/RHxlcMG.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/Z9V8eko.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/hlsQub7.gif"></img>
    <iframe id="iframeJune" width="100%" height="300" src="https://www.youtube.com/embed/-P2-Nmk1uFQ?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"July", 
    "title": "Gigs cancelled! But, Taylor Swift released a new album! Also went to Torquay (wish it was France!) 🎵", 
    "main": `<img class="mx-auto d-block" width="50%" src="https://i.imgur.com/loar4Vd.gif"></img>
    <iframe id="iframeJuly" width="100%" height="300" src="https://www.youtube.com/embed/2s5xdY6MCeI?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/SyGaNfm.jpg"></img>`},
    {"month":"August", 
    "title": "CANADA CANCELLED!! But the Lake District was AMAZING! ⛰️", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/7SaR5Ky.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/6hZ2pW9.jpg"></img>
    <img class="mx-auto d-block" width="100%" src="https://media.giphy.com/media/3o6Zt2bNgzIG0Bkv5u/giphy.gif"></img>
    <iframe id="iframeAugust" width="100%" height="300" src="https://www.youtube.com/embed/2fngvQS_PmQ?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"September", 
    "title": "7 months working from home! Covid cases rising again 😞", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/wUvJ0iC.png"></img>
    <iframe id="iframeSeptember" width="100%" height="300" src="https://www.youtube.com/embed/K0HLUa4zTXQ?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"October", 
    "title": "8 months working from home! 📺", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/KlEGlDl.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/mPtdSpH.gif"></img>
    <iframe id="iframeOctober" width="100%" height="300" src="https://www.youtube.com/embed/NmQbfWhW8mE?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"November", 
    "title": "9 months working from home. Also another lock down a.k.a. NOTHING has changed! Also HAPPY BIRTHDAY! 🥳", 
    "main": `<img class="mx-auto d-block" width="100%" src="https://i.imgur.com/gJqvG7z.gif"></img>
    <img class="mx-auto d-block" width="100%" src="https://i.imgur.com/7tn2pd1.gif"></img>
    <iframe id="iframeNovember" width="100%" height="300" src="https://www.youtube.com/embed/q5CUnuE3WRs?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    {"month":"December", 
    "title": "Merry Christmas! 😉🎄🎁🎅☃️",
    "main": `<img class="mx-auto d-block" width="100%"  src="https://media.giphy.com/media/3oz8xzF04ey6yQT4d2/giphy.gif"></img>
    <iframe id="iframeDecember" width="100%"  height="300" class="mx-auto d-block" src="https://www.youtube.com/embed/j9jbdgZidu8?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}

]



export default data