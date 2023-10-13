import {LoremIpsum} from "lorem-ipsum";

export default function PageLipsum() {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    function GeneratedText() {
        let paragraphs = [];

        for (let i = 0; i < 10; i++) {
            paragraphs.push(<p>{lorem.generateParagraphs(1)}</p>);
        }

        return paragraphs;
    }

    return (
        <>
            <GeneratedText/>
        </>
    )
}
