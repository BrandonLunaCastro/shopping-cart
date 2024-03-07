export const filterArticle = (data, category) => {
    return  category !== "all" ? data.filter(el => el.category === category) : []  
};