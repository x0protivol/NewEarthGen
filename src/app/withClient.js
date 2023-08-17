// withClient.js
import { useEffect, useState } from 'react';

function withClient(Component) {
    return function WrappedComponent(props) {
        const [hasMounted, setHasMounted] = useState(false);

        useEffect(() => {
            setHasMounted(true);
        }, []);

        if (!hasMounted) {
            return null;
        }

        return <Component {...props} />;
    }
}

export default withClient;
