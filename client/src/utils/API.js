import axios from "axios";
const API_KEY = process.env.REACT_APP_NYT_API_KEY || "454f3fa03ae643599a1e9bd71b4bb25f";

export default {

    //Called from Home.jswhen user clicks to search for article
    getArticles: (userQuery) => {    
        const { topic, startYear, endYear } = userQuery;
        return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fq=document_type:(article)`));
    },

    //Called from Home.js when user click save article
    saveArticle: (data) => {
        const articleData = {
            headline: data.headline.main,
            pub_date: data.pub_date,
            snippet: data.snippet,
            url: data.web_url
        };
        return (axios.post("/api/article", articleData));
    },

    //Called from Home.js when user click save artice
    getSavedArticles: () => {
        console.log("Inside API.getSavedArticles");
        return (axios.get("/api/articles"));
    },
    
    //Called from Home.js when user click delete article
    deleteArticle: (data) => {
        console.log(data);
        return (axios.delete(`api/article/${data._id}`));
    },
}