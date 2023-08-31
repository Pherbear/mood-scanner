import { useState, useEffect } from 'react';

function useGPT3Response(initialPrompt) {
    const [prompt, setPrompt] = useState(initialPrompt);
    const [response, setResponse] = useState('');

    useEffect(() => {
        if (prompt) {
            fetch(`/ask-gpt3?prompt=${prompt}`)
                .then(res => res.json())
                .then(data => setResponse(data.response))
                .catch(err => console.error("Error fetching GPT-3 data:", err));
        }
    }, [prompt]);

    return [response, setPrompt];
}

export default useGPT3Response;