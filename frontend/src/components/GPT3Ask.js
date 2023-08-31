import React from 'react';
import useGPT3Response from './hooks/useGPT3Response';

function GPT3Ask() {
    const [response, setPrompt] = useGPT3Response('');

    return (
        <div>
            <input
                type="text"
                onChange={e => setPrompt(e.target.value)}
            />
            <p>{response}</p>
        </div>
    );
}

export default GPT3Ask;
