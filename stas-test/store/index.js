class Article {
    constructor(imgName = '', imgAlt = '', category = '', title = '', text = '', dateTime = '') {
        this.imgName = imgName
        this.imgAlt = imgAlt
        this.category = category
        this.title = title
        this.text = text
        this.dateTime = dateTime
    }
}

export const state = () => ({
    trending_articles: [
        new Article("green_lake",
         "Green lake", 
         "Travel", 
         "Mountain Lake Hotel", 
         "Mountain Lake Hotel was the site for much of the on-location filming of the 1987", 
         "2m ago"), 

         new Article("umbrellas_small",
         "Umbrellas", 
         "Travel", 
         "The Best Beach Umbrellas", 
         "One of the worst things about going to the beach is the imminent sunburn.", 
         "1h ago"),
         
         new Article("medics",
         "American Red Cross Desert", 
         "Travel", 
         "American Red Cross Desert", 
         "The American Red Cross Desert to the Sea Region serves Orange", 
         "3h ago"),
    ]
})

// export const state = () => ({
//     trending_articles: [
//         [
//             "green_lake",
//             "Green lake",
//             "Travel",
//             "Mountain Lake Hotel",
//             "Mountain Lake Hotel was the site for much of the on-location filming of the 1987",
//             "2m ago"
//         ],
//         [
//             "umbrellas_small",
//             "Umbrellas",
//             "Travel",
//             "The Best Beach Umbrellas",
//             "One of the worst things about going to the beach is the imminent sunburn.",
//             "1h ago"
//         ],
//         [
//             "medics",
//             "American Red Cross Desert",
//             "Travel",
//             "American Red Cross Desert",
//             "The American Red Cross Desert to the Sea Region serves Orange",
//             "3h ago"
//         ]
//     ],
// })

