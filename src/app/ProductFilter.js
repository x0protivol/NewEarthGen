import { useEffect } from 'react';

const ProductFilter = ({ setFilter }) => {
    useEffect(() => { // This ensures the dropdown renders client-side
        setFilter('all'); // 'all', 'inDevelopment', 'completed'
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <select onChange={handleFilterChange}>
            <option value="all">All Projects</option>
            <option value="inDevelopment">Projects in Development</option>
            <option value="completed">Projects Completed</option>
        </select>
    );
};

export default ProductFilter;
