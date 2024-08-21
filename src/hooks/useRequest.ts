//react
import { useState } from 'react';

function useRequest() {
    const [error, setError] = useState<any>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [response, setResponse] = useState<Response | null>(null);

    async function createRequest(url: string, config: RequestInit) {
        try {
            setIsPending( true );

            const response = await fetch(url, config);
            const json = await response.json();

            setError( null );
            setResponse( json );
        } catch (error) {
            setResponse( null )
            setError( error );
        } finally {
            setIsPending( false );
        }
    }

    return {
        error,
        response,
        isPending,
        createRequest
    }
}

export { useRequest }