export let names = [
    ["Monkey D. Luffy" , "https://avatarfiles.alphacoders.com/364/364185.png" , "PirateKing"], ["Naruto" , "https://i.pinimg.com/200x150/a7/5e/9e/a75e9e35a8ed1ccc1017db40438c60e9.jpg" , "Konoha_Hokage"],
    ["Saitama" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXEJbxeETOBebjfA2G35PcjjP8oN3Sfg3RA&s" , "Pelón"], ["Frieren" , "https://avatarfiles.alphacoders.com/375/375161.png" , "Recolectora_de_Magia"], 
    ["Nakano Miku" , "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/7aea3130-5ad7-4101-a524-22bb0f3f7300/avatarhd" , "NakaMiku"], ["Yor_Forger" , "../multimedia/yor.jpg" , "YorForger"], 
    ["Roronoa Zoro" , "https://i.pinimg.com/736x/09/5c/44/095c44ce9421a10fad713a32d8648f6f.jpg" , "KingOfHell"] , ["Vinsmoke Saji" , "https://i.pinimg.com/736x/57/ae/eb/57aeebb178ae223c5380fe6793fb591f.jpg" , "Mr._Prince"], 
    ["Nami" , "https://i.redd.it/7kf8vje5fa1d1.jpeg" , "Nami"], ["Ichigo" , "https://i.pinimg.com/564x/0e/1e/8f/0e1e8f714ed3a4afefe5ac920b16ebbc.jpg" , "Ichigo"], 
    ["Zero Two" , "https://i.pinimg.com/originals/f4/6b/8d/f46b8d05e377c9a791b15f805f527345.jpg" , "Strelitzia"], ["Asta" , "https://forums.gamesamba.com/core/image.php?userid=3965402&dateline=1504811216" , "King_sorcerer"], 
    ["Nero" , "https://cdn.pfps.gg/pfps/4873-black-clover-nero-secre-swallowtail.png" , "Nero_bird"], ["Yami Zukehiro" , "https://i.pinimg.com/736x/fb/f0/3f/fbf03fadea683e9e91fc86eb9bad36ec.jpg" , "BlackBulls_captain"], 
    ["Gasai Yuno" , "https://pbs.twimg.com/profile_images/1379136935810232320/Pq_qmdks_400x400.jpg" , "Yukis_gf"], ["Fubuki" , "https://i.pinimg.com/474x/91/18/65/91186582edf84a3ca093f9bdb7dea95d.jpg" , "Fubuki"], 
    ["Nakano Nino" , "https://i.pinimg.com/736x/bf/ee/dd/bfeeddb1315d762bd897cd878dd55754.jpg" , "Nakano_nino"], ["Nakano Itsuki" , "https://i.pinimg.com/736x/b1/8d/6a/b18d6a26d98e300ecdc6511e1d9d1975.jpg" , "Nakano_Itsuki"], 
    ["Jiraiya" , "https://i.pinimg.com/236x/c1/73/7d/c1737d04cffd8badb9b7bd607dfbe305.jpg" , "Sabio-Pervertido"], ["Tsunade" , "https://i.pinimg.com/736x/75/08/cd/7508cd0518d19311d32eb0d5b382c742.jpg" , "Tsunade_Senju"], 
    ["Moa Metal" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqKelwR8Jyjwf_wJmCH3gyT2uIlNlQbgKeg&s" , "Moa_Kikuchi"], ["Su-metal" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspIQBlvtSVY3eAQJQd3cE-TFe6zzUJ28APA&s" , "Suzuka_nakamoto"], 
    ["Momo-metal" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlKBQ9VztpfTwOkphCnXcWp__GhVPFyDASQ&s" , "Momoko_Okazaki"],["Gojo Satoru" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-8_uaR_kpEEwq2EQuT-LWfy_r8Dd1ziEZw&s" , "KitKat"], 
    ["Suguru Geto" , "https://i.pinimg.com/736x/1b/de/dc/1bdedc3493e6b05745ffc63a42c952c5.jpg" , "Xbox"], ["Nobara" , "https://i.pinimg.com/736x/4f/a4/6e/4fa46e2cb238e4df6f2fde35b95a8caa.jpg" , "Kugisaki_Nobara"], 
    ["Itadori Yuuji" , "https://64.media.tumblr.com/2bfbf93138a0bba37e648fb9cd5a7bca/c7da08e5430f04f1-ae/s540x810/4e26e49d14b1063dba4adf79b48ff30fb996d9a3.jpg" , "Itad0Ri_YUUji"], 
    ["Migumi Fushiguro" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5lWfjiD0v3GRQtWVdf1rOuZqNv76O1R7mw&s" , "Mahoraga_fan"], 
    ["Denji" , "https://avatarfiles.alphacoders.com/339/339627.jpg" , "ChainSawMan"], ["Kakaroto" , "https://i.pinimg.com/originals/a0/34/4d/a0344df4339a0ec92aacfb635e1399ff.jpg" , "Son_Goku"]
]

export function nombreAleatorio(names) {
    let indiceAleatorio = Math.floor(Math.random() * names.length);
    return names[indiceAleatorio];
}