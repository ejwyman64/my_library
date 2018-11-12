import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>What is My Friend Dewey?</h1>
                <p>Dewey is named after the Dewey Decimal System. This app does not utilize that system, but it is a good place to keep track of your books just like a library.
                My idea for this app came from my husband, who (as a PhD student) has a large collection of books, and no convenient way to keep track of them. That gave me an
                idea. This website is not everything I would like it to be right now, but it is a start on a project that I feel passionate about, which is really what matters
                right now. Here is a basic guide to using this website:</p>
                <ul>
                    <li>HOME: View the user information and your library.</li>
                    {/* Eventually I would like the HOME page to be customized to the 
                    user preferences and have multiple libraries. */}
                    <li>SEARCH: Find books and add them to your library.</li>
                    {/* This page is limited right now, would like to make the search easier */}
                    <li>ABOUT: You are here!</li>
                    {/* Would like to add a page for Friends, where you can view your friend's 
                    libraires and add their books to your wishlist or library. */}
                </ul>
                <p>Have fun exploring the app!</p>
            </div>
        );
    }
}


export default About;