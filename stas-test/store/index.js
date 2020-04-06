class Article {
    constructor(imgName = '', imgAlt = '', category = '', title = '', text = '', dateTime = '', author = '', type = '') {
        this.imgName = imgName
        this.imgAlt = imgAlt
        this.category = category
        this.title = title
        this.text = text
        this.dateTime = dateTime
        this.author = author,
        this.type = type
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
    ], 

    happening_now_articles: [
        new Article("bridge",
                    "golden gate bridge", 
                    "City",
                    "Golden Gate Bridge Facts", 
                    "When the Golden Gate Bridge Flattened by 7 Feet—and Other Facts About the San Francisco Icon.",
                    "2m ago",
                    "large"
        ),

        new Article("forest", 
                    "Forest",
                    "Travel",
                    "We need to safeguard our forests", 
                    "The importance of forests cannot be underestimated. We depend on forests for our survival, from the air we breathe to the wood we use.",
                    "2m ago",
                    "large"
        ),

        new Article("elephant", 
                    "Elephants",
                    "Travel",
                    "Desert Elephants",
                    "Desert-adapted elephants are not a distinct species of elephant but are African bush elephants",
                    "1h ago by",
                    "Worldnews"
        ),

        new Article("parrot_small",
                    "Parrot in Jungles",
                    "Travel",
                    "Jungle Parrots",
                    "So where is the circling jungle parrot? Well, it turns out the bird is flying in a small circle east of the Sky Platform",
                    "1h ago by",
                    "Days"
        ),

        new Article("mountain_road",
                    "Mountain Road",
                    "Travel",
                    "Highest roads of Kyrgyzstan", 
                    "Kyrgyzstan is a high mountain country located in Central Asia. Over ninety percent of the country is mountainous territory",
                    "1h ago by",
                    "Days"
        )
    ]
})