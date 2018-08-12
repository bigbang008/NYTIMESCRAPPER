import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
// import Button from "../../components/Button";
import API from "../../utils/API";
import Messages from "../../components/Messages";
import "./Home.css";
class Home extends Component {
    //default values
    state = {
        topic: "NBA", 
        startYear: 2015,
        endYear: 2018,
        results: [],
        error: "",
        savedArticles: []
    };

    componentDidMount() {
        this.getSaved();
    };

    getSaved = () => {
        console.log("getSaved method")
        API.getSavedArticles().then(response => {
            console.log("response to getSavedArticles: ", response);
            this.setState({
                savedArticles: response.data
            });
        })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    //submit button
    handleFormSubmit = event => {
        event.preventDefault();
        document.querySelector("form").reset();

        API.getArticles(this.state).then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            };
            this.setState({ results: res.data.response.docs.slice(0,10), error: "" }); //Saves first 5 search results into state as an array of objects
        }).catch(err => this.setState({ error: err.message }))
    };


    //Called when user clicks Save button
    handleArticleSave = event => {
        event.preventDefault();
        const clickedArticle = (this.state.results.filter(element => element._id === event.target.id)[0]);//Locates the article from the results array with the ID matching the button clicked

        API.saveArticle(clickedArticle).then(res => {
            this.getSaved(); 
            // this.savedTop.scrollIntoView({ behavior: "smooth", block: "center"}); //Scolls down to the savedTop reference in the Saved panel

        })
    };

    //Called when user clicks Delete button
    handleArticleDelete = (event) => {
        event.preventDefault();
        const clickedArticle = this.state.savedArticles.filter(element => element._id = event.target.id)[0]; //Locates the article from the savedArticle array with the ID matching the button clicked
        API.deleteArticle(clickedArticle).then(response => {
            this.getSaved(); 
        })
    };

    render() {
        return (
            <div>
                <header>
                    <Jumbotron />
                </header>
                <div className="wrapper">
                    <SearchForm handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}/>
                </div>
                <div className="wrapper">
                    {this.state.results.length ? (
                        <List>
                            {this.state.results.map(result => ( //For each article in the result array, create a list item with a div w/ article info, and a save button with article ID
                                <ListItem   key={result._id}
                                            headline={result.headline.main}
                                            pub_date={result.pub_date} 
                                            snippet={result.snippet} 
                                            url={result.web_url} 
                                >    
                                    <button id={result._id} className="btn saveBtn btn-success" onClick={this.handleArticleSave}>
                                                Save Article
                                    </button>
                                </ListItem>
                                ))}
                        </List>
                    ) : <Messages />}
                </div>
                {/* 

            
                    <Panel heading="Saved Articles">
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.savedTop = el; }}>
                    </div>
                        {this.state.savedArticles.length ? (
                            <List>
                                {this.state.savedArticles.slice(0).reverse().map(article => ( //For each article in the savedArticles array, create a list item (reverse order) with a div w/ article info, and a delete button with article ID
                                    <ListItem key={article._id}>
                                       <ListDiv headline={article.headline} byline={article.byline} pub_date={article.pub_date} snippet={article.snippet} url={article.url} />
                                        <ButtonGroup>
                                        <Button className="btn viewArticle" value ={article.web_url} onClick={this.viewArticle}>
                                            View Article
                                            </ Button>
                                        <Button id={article._id} className="btn deleteBtn" onClick={this.handleArticleDelete}>
                                                Delete Article
                                        </ Button>
                                        </ ButtonGroup>

                                    </ListItem>
                                ))}
                            </List>
                        ) : <MessageDiv message="Save an article from the search results above and view the list of saved articles here." />}
                    </Panel>
                    <Footer> <a href="https://Lisa Vinson.com">Lisa Vinson.com </a></Footer>
                </Container> */}
                
            </div>
        )
    }
}

export default Home;