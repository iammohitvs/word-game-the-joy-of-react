import React from "react";

function HappyBanner({ guessesArray }) {
    return (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {`${guessesArray.length}`} guesses</strong>.
            </p>
        </div>
    )
}

function SadBanner({ answer }) {
    return (
        <div class="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )
}

export default function Banner({ win, guesses }) {
    return (
        <>
            {!!win ? <HappyBanner guessesArray={guesses} /> : <SadBanner answer={guesses} />}
        </>
    );
}