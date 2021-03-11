import React from 'react';
import './NameCard.css'

// constUrl = "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUpiYmVtOFBDZE0zWGN6VjF4SGdSeDVWRlFBQXxBQ3Jtc0tsQUllOXR1SGlyTzAyS29ZaExBSjVJX3M5Ui1QSWpjd2YtRXdJbEJVXzlDOUFhU1Bsd1VMdTNvUmtIaTM3SE9ZZUZoOTFCZDVnUlh5WWd6bTFDdkhUZ0hTLTZfOEd4OVVybU1TYmtrWUgyQzhTd0lxTQ&q=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D%27%3B";
const NameUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';
const NameCard = ({ SuggestedName }) => {

    return (
        <a
            target="_blank"
            rel="noreferrer"

            className="card-link" href={`${NameUrl}${SuggestedName}`}>
            <div className="Result-name-card">
                <p className="Result-name">
                    {SuggestedName}
                </p>

            </div>
        </a>
    );
}

export default NameCard;